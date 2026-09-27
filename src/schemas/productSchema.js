/**
 * @file productSchema.js
 * @description Formal schema definition & runtime validator for AuraCore products.
 * Guarantees that any product added by an AI agent or human developer adheres to strict standards.
 */

export const REQUIRED_PRODUCT_FIELDS = [
  'id',
  'name',
  'subtitle',
  'category',
  'status',
  'statusVariant',
  'badge',
  'tagline',
  'description',
  'highlights',
  'techStack',
  'metrics',
  'actions',
  'themeColor',
  'accentBg',
  'accentBorder',
  'accentText'
];

export const VALID_STATUS_VARIANTS = ['success', 'info', 'warning', 'purple', 'amber'];

/**
 * Validate a single product object against the schema
 * @param {Object} product
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateProduct(product) {
  const errors = [];

  if (!product || typeof product !== 'object') {
    return { valid: false, errors: ['Product must be an object'] };
  }

  // Check required fields
  for (const field of REQUIRED_PRODUCT_FIELDS) {
    if (product[field] === undefined || product[field] === null || product[field] === '') {
      errors.push(`Missing required field: '${field}' in product '${product.id || 'unknown'}'`);
    }
  }

  // Check highlights is an array with at least 2 items
  if (!Array.isArray(product.highlights) || product.highlights.length < 2) {
    errors.push(`Product '${product.id}' must have 'highlights' array with at least 2 items`);
  }

  // Check techStack is an array
  if (!Array.isArray(product.techStack) || product.techStack.length === 0) {
    errors.push(`Product '${product.id}' must have a non-empty 'techStack' array`);
  }

  // Check actions structure
  if (!product.actions || !product.actions.primary || !product.actions.primary.label || !product.actions.primary.url) {
    errors.push(`Product '${product.id}' must have valid 'actions.primary' with label and url`);
  }

  // Security check: ensure no private GitHub repo links are published for blinenote
  if (product.id === 'blinenote') {
    const rawString = JSON.stringify(product).toLowerCase();
    const forbiddenTarget = ['infomelo', 'blinenote'].join('/');
    if (rawString.includes(forbiddenTarget) || rawString.includes('infomelo')) {
      errors.push(`SECURITY VIOLATION: Product 'blinenote' must NOT contain reference to private GitHub repo`);
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate an entire array of products
 * @param {Array<Object>} productsList
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateProductsList(productsList) {
  if (!Array.isArray(productsList) || productsList.length === 0) {
    return { valid: false, errors: ['Products list must be a non-empty array'] };
  }

  const allErrors = [];
  const seenIds = new Set();

  productsList.forEach((prod, idx) => {
    if (prod.id) {
      if (seenIds.has(prod.id)) {
        allErrors.push(`Duplicate product ID detected: '${prod.id}' at index ${idx}`);
      }
      seenIds.add(prod.id);
    }

    const { errors } = validateProduct(prod);
    allErrors.push(...errors);
  });

  return {
    valid: allErrors.length === 0,
    errors: allErrors
  };
}
