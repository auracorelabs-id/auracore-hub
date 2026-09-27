/**
 * @file store.js
 * @description Lightweight reactive state store using the Publish-Subscribe pattern.
 * Provides predictable, deterministic state management for the AuraCore Labs SPA.
 */

class Store {
  constructor(initialState = {}) {
    this._state = { ...initialState };
    this._listeners = new Set();
  }

  /**
   * Get the current immutable snapshot of state
   * @returns {Object}
   */
  getState() {
    return { ...this._state };
  }

  /**
   * Update state and notify all subscribers
   * @param {Object} partialState
   */
  setState(partialState) {
    const prevState = { ...this._state };
    this._state = { ...this._state, ...partialState };
    this._notify(this._state, prevState);
  }

  /**
   * Subscribe to state changes
   * @param {Function} listener (currentState, prevState) => void
   * @returns {Function} Unsubscribe function
   */
  subscribe(listener) {
    this._listeners.add(listener);
    return () => this._listeners.delete(listener);
  }

  _notify(currentState, prevState) {
    this._listeners.forEach(listener => {
      try {
        listener(currentState, prevState);
      } catch (err) {
        console.error('Error in store subscriber:', err);
      }
    });
  }
}

// Initial state definition
export const store = new Store({
  currentView: 'home', // 'home' | 'product-detail'
  activeDetailProductId: 'blinenote',
  activeConsoleTab: 'request',
  activeDetailSubTab: 'ai-audio',
  mobileMenuOpen: false
});
