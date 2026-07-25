/**
 * HTML Sanitizer Utility
 * Prevents XSS by sanitizing HTML content before inserting into DOM
 */

// Allowed HTML tags and attributes
const ALLOWED_TAGS = new Set([
  'p', 'br', 'strong', 'em', 'u', 'b', 'i', 'ul', 'ol', 'li',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre',
  'a', 'img', 'div', 'span', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'b', 's', 'sub', 'sup', 'mark', 'del', 'ins', 'small'
]);

const ALLOWED_ATTRIBUTES = new Set([
  'href', 'src', 'alt', 'title', 'class', 'id', 'style',
  'target', 'rel', 'width', 'height', 'colspan', 'rowspan'
]);

const ALLOWED_STYLES = new Set([
  'color', 'background-color', 'font-weight', 'font-style', 'text-decoration',
  'text-align', 'margin', 'padding', 'border', 'border-radius', 'width',
  'height', 'max-width', 'max-height', 'display', 'float', 'clear'
]);

const URL_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);

/**
 * Sanitize HTML string to prevent XSS
 * @param {string} html - HTML string to sanitize
 * @returns {string} Sanitized HTML string
 */
export function sanitizeHTML(html) {
  if (!html || typeof html !== 'string') return '';

  // Create a temporary container to parse HTML
  const container = document.createElement('div');
  container.innerHTML = html;

  // Recursively sanitize all nodes
  sanitizeNode(container);

  return container.innerHTML;
}

/**
 * Recursively sanitize a DOM node
 * @param {Node} node - DOM node to sanitize
 */
function sanitizeNode(node) {
  // Process child nodes first (depth-first)
  const children = Array.from(node.childNodes);
  for (const child of children) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      sanitizeElement(child);
    } else if (child.nodeType === Node.TEXT_NODE) {
      // Text nodes are safe as-is
      continue;
    } else {
      // Remove other node types (comments, etc.)
      child.remove();
    }
  }
}

/**
 * Sanitize an element node
 * @param {Element} element - Element to sanitize
 */
function sanitizeElement(element) {
  const tagName = element.tagName.toLowerCase();

  // Remove disallowed tags (unwrap their children)
  if (!ALLOWED_TAGS.has(tagName)) {
    unwrapElement(element);
    return;
  }

  // Sanitize attributes
  const attrs = Array.from(element.attributes);
  for (const attr of attrs) {
    const attrName = attr.name.toLowerCase();

    if (!ALLOWED_ATTRIBUTES.has(attrName)) {
      element.removeAttribute(attr.name);
      continue;
    }

    // Sanitize specific attributes
    if (attrName === 'href' || attrName === 'src') {
      if (!isSafeURL(attr.value)) {
        element.removeAttribute(attr.name);
      }
    } else if (attrName === 'style') {
      element.setAttribute('style', sanitizeCSS(attr.value));
    } else if (attrName === 'target' && attr.value === '_blank') {
      // Add rel="noopener noreferrer" for security on external links
      element.setAttribute('rel', 'noopener noreferrer');
    }
  }

  // Recursively sanitize children
  sanitizeNode(element);
}

/**
 * Check if a URL is safe
 * @param {string} url - URL to check
 * @returns {boolean} True if safe
 */
function isSafeURL(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    return URL_PROTOCOLS.has(parsed.protocol);
  } catch {
    // Relative URLs are allowed
    return true;
  }
}

/**
 * Sanitize CSS style string
 * @param {string} css - CSS string to sanitize
 * @returns {string} Sanitized CSS string
 */
function sanitizeCSS(css) {
  if (!css) return '';

  const declarations = css.split(';').map(d => d.trim()).filter(d => d);
  const sanitized = [];

  for (const decl of declarations) {
    const colonIndex = decl.indexOf(':');
    if (colonIndex === -1) continue;

    const property = decl.substring(0, colonIndex).trim().toLowerCase();
    const value = decl.substring(colonIndex + 1).trim();

    if (ALLOWED_STYLES.has(property) && isSafeCSSValue(property, value)) {
      sanitized.push(`${property}: ${value}`);
    }
  }

  return sanitized.join('; ');
}

/**
 * Check if CSS value is safe
 * @param {string} property - CSS property name
 * @param {string} value - CSS value
 * @returns {boolean} True if safe
 */
function isSafeCSSValue(property, value) {
  // Block javascript: URLs in CSS
  if (value.toLowerCase().includes('javascript:')) return false;
  if (value.toLowerCase().includes('expression(')) return false;
  if (value.toLowerCase().includes('url(') && !value.toLowerCase().includes('data:')) {
    // Allow data: URLs and relative URLs, but validate
    const urlMatch = value.match(/url\(['"]?([^'")]+)['"]?\)/i);
    if (urlMatch && !isSafeURL(urlMatch[1])) return false;
  }
  return true;
}

/**
 * Unwrap an element (move children to parent, then remove element)
 * @param {Element} element - Element to unwrap
 */
function unwrapElement(element) {
  const parent = element.parentNode;
  if (!parent) return;

  // Move all children to parent
  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element);
  }
  // Remove the element itself
  element.remove();
}