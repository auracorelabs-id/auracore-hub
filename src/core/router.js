/**
 * @file router.js
 * @description Decoupled event-driven hash router for AuraCore Labs SPA.
 * Resolves routes deterministically and emits routing events.
 */

import { products } from '../data/products.js';

export class Router {
  constructor(routes = {}) {
    this.routes = routes;
    this._listeners = new Set();

    window.addEventListener('hashchange', () => this._handleHashChange());
  }

  /**
   * Parse the current hash into a standardized route descriptor
   * @returns {{ view: 'home' | 'product-detail', productId: string | null, hash: string }}
   */
  getCurrentRoute() {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    
    // Check for product detail routes: #product-:id or direct product id
    if (rawHash.startsWith('product-')) {
      const prodId = rawHash.replace('product-', '');
      if (products.some(p => p.id === prodId)) {
        return { view: 'product-detail', productId: prodId, hash: rawHash };
      }
    }

    // Direct product alias matching (e.g. #blinenote or #blinenote-detail)
    const directMatch = products.find(p => p.id === rawHash || (rawHash === 'blinenote-detail' && p.id === 'blinenote'));
    if (directMatch) {
      return { view: 'product-detail', productId: directMatch.id, hash: rawHash };
    }

    // Default to home view
    return { view: 'home', productId: null, hash: rawHash };
  }

  /**
   * Programmatically navigate to a route
   * @param {'home' | 'product-detail'} view
   * @param {string | null} productId
   * @param {string | null} anchorTarget
   */
  navigate(view, productId = null, anchorTarget = null) {
    if (view === 'product-detail' && productId) {
      window.location.hash = `product-${productId}`;
    } else {
      if (anchorTarget) {
        window.location.hash = anchorTarget.replace(/^#/, '');
      } else {
        if (window.location.hash) {
          history.pushState(null, '', window.location.pathname);
        }
        this._notify();
      }
    }
  }

  /**
   * Subscribe to route change events
   * @param {Function} callback (route) => void
   * @returns {Function} Unsubscribe function
   */
  onRouteChange(callback) {
    this._listeners.add(callback);
    return () => this._listeners.delete(callback);
  }

  _handleHashChange() {
    this._notify();
  }

  _notify() {
    const route = this.getCurrentRoute();
    this._listeners.forEach(cb => {
      try {
        cb(route);
      } catch (err) {
        console.error('Error in route listener:', err);
      }
    });
  }
}

export const router = new Router();
