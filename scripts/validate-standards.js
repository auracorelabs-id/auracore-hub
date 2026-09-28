/**
 * @file validate-standards.js
 * @description Pre-deployment validation gatekeeper for AuraCore Labs.
 * Enforces AI-Friendly Coding Standards and Security Governance.
 * Must exit 0 for deployment to proceed.
 */

import { products } from '../src/data/products.js';
import { validateProductsList } from '../src/schemas/productSchema.js';
import fs from 'fs';
import path from 'path';

console.log('🔍 [AURACORE GOVERNANCE] Running Pre-Deployment Standards Validation...\n');

let failed = false;

// 1. Validate Product Schema & Integrity
console.log('1️⃣  Validating Products Data Schema...');
const productValidation = validateProductsList(products);
if (!productValidation.valid) {
  console.error('❌ Products validation FAILED with errors:');
  productValidation.errors.forEach(err => console.error(`   - ${err}`));
  failed = true;
} else {
  console.log(`✅ All ${products.length} products adhere strictly to schema standards.`);
}

// 2. Security Audit: Check for sensitive leaks in source files
console.log('\n2️⃣  Running Source Code Security Audit...');
const srcDir = path.resolve('src');

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf-8');

      // Check for forbidden private repo links (blinenote & itsupport)
      const targetBLine = ['Info', 'Melo'].join('');
      const targetITSupport = ['protontekno', 'bit'].join('-');
      if (content.includes(targetBLine) || content.includes(targetITSupport)) {
        // Skip scanning the validator script itself
        if (!file.includes('validate-standards.js')) {
          console.error(`❌ SECURITY LEAK in ${fullPath}: Detected forbidden private GitHub repo link.`);
          failed = true;
        }
      }

      // Check for hardcoded internal salt formulas
      if (content.includes('BLineNote_Secret_Salt') || content.includes('BLineNote_Static_Salt')) {
        console.error(`❌ SECURITY LEAK in ${fullPath}: Detected internal cryptographic salt string.`);
        failed = true;
      }
    }
  }
}

scanDirectory(srcDir);
if (!failed) {
  console.log('✅ Source files clean: zero private repo links or leaked salts detected.');
}

// 3. Final Verdict
console.log('\n-------------------------------------------------------');
if (failed) {
  console.error('⛔ [DEPLOY BLOCKED] Standards validation failed. Fix errors above before deploying.');
  process.exit(1);
} else {
  console.log('🎉 [STANDARDS PASSED] Codebase conforms 100% to AuraCore AI-Friendly Standards.');
  process.exit(0);
}
