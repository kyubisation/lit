/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// This module exports symbols, that are available for SSR as polyfills.

const NODE_MODE = false;

let global: typeof import('@lit-labs/ssr-dom-shim') | typeof globalThis =
  globalThis;

if (NODE_MODE) {
  const shims = await import('@lit-labs/ssr-dom-shim');

  global.customElements ??= shims.customElements;
  // In an empty Node.js vm, we need to patch the global context.
  // TODO: Remove these globalThis assignments when we remove support
  // for vm modules (--experimental-vm-modules).
  global.CustomEvent ??= shims.CustomEvent;
  global.Event ??= shims.Event;

  global = shims;
}

const {
  CustomElementRegistry,
  customElements,
  Document,
  document,
  ElementInternals,
  EventTarget,
  HTMLElement,
  Window,
  window,
} = global;

// TODO: Replace mock with polyfills.
const CSSStyleSheet: typeof globalThis.CSSStyleSheet = null!;
const IntersectionObserver: typeof globalThis.IntersectionObserver = null!;
const MutationObserver: typeof globalThis.MutationObserver = null!;
const PerformanceObserver: typeof globalThis.PerformanceObserver = null!;
const ResizeObserver: typeof globalThis.ResizeObserver = null!;

export {
  CSSStyleSheet,
  CustomElementRegistry,
  customElements,
  Document,
  document,
  ElementInternals,
  EventTarget,
  HTMLElement,
  IntersectionObserver,
  MutationObserver,
  PerformanceObserver,
  ResizeObserver,
  Window,
  window,
};
