# AuraCore Labs Workspace Rule — AI & Code Architecture Governance

Every AI agent working in this repository MUST strictly follow these rules:

1. **Architecture & File Placement**:
   - Never write monolithic or mixed logic in `src/main.js`. Keep `src/main.js` as an orchestrator only.
   - All state must reside in `src/core/store.js`.
   - All routing must go through `src/core/router.js`.
   - All content changes (products, roadmap, links) must be done in `src/data/`.
   - Never hardcode raw product strings inside components.

2. **Schema & Contract Conformance**:
   - Any new or modified product in `src/data/products.js` MUST strictly conform to `src/schemas/productSchema.js`.
   - Every product requires: `id`, `name`, `subtitle`, `category`, `status`, `statusVariant`, `badge`, `tagline`, `description`, `highlights` (>=2 items), `techStack`, `metrics`, `actions.primary`.

3. **Security & Publication Constraint (CRITICAL)**:
   - NEVER publish or include references to the private GitHub repository for BLineNote (`InfoMelo/BLINENOTE`).
   - NEVER disclose internal cryptographic salts or raw database schemas on public-facing pages.
   - Use defensible, professional security framing ("Client-Side Data Protection", "AES-GCM-256 Authenticated Encryption").

4. **Deployment Verification**:
   - Always run `npm run validate` or `npm run build` to ensure the automated deployment gate passes with Exit Code 0 before completing any task.
