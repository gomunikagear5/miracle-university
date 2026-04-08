/**
 * pretext-measure.js — Shared Pretext text measurement helper
 * Soul Mission Quiz · Earth Metaverse
 * 
 * Uses @chenglou/pretext via ESM CDN for accurate text measurement
 * without DOM reflow. Supports English and Japanese text.
 * 
 * Usage: imported as ES module by quiz.js and quiz-jp.js via
 * <script type="module"> blocks in index.html / index-jp.html
 */

let pretextModule = null;

async function loadPretext() {
  if (pretextModule) return pretextModule;
  try {
    pretextModule = await import('https://esm.sh/@chenglou/pretext');
    return pretextModule;
  } catch (e) {
    console.warn('[pretext-measure] Failed to load Pretext, falling back to CSS-only layout:', e);
    return null;
  }
}

/**
 * Measure text and return { height, lineCount }.
 * 
 * @param {string} text - The text to measure
 * @param {string} font - CSS font string e.g. "16px Inter"
 * @param {number} maxWidth - Container width in px
 * @param {number} lineHeight - Line height in px (default 26)
 * @returns {Promise<{height: number, lineCount: number} | null>}
 */
export async function measureText(text, font, maxWidth, lineHeight = 26) {
  const pretext = await loadPretext();
  if (!pretext) return null;
  try {
    const prepared = pretext.prepare(text, font);
    return pretext.layout(prepared, maxWidth, lineHeight);
  } catch (e) {
    console.warn('[pretext-measure] measureText error:', e);
    return null;
  }
}

/**
 * Auto-size a container element to fit its text content exactly.
 * Prevents overflow and removes excess whitespace.
 * 
 * @param {HTMLElement} el - The paragraph/div element containing text
 * @param {string} font - CSS font string matching the element's font
 * @param {number} lineHeight - Line height in px
 */
export async function autoSizeTextElement(el, font, lineHeight = 26) {
  if (!el || !el.textContent) return;
  const text = el.textContent.trim();
  if (!text) return;

  // Get the actual rendered width of the element
  const maxWidth = el.clientWidth || el.offsetWidth;
  if (maxWidth <= 0) return;

  const result = await measureText(text, font, maxWidth, lineHeight);
  if (!result) return;

  // Set explicit height to prevent layout shift and overflow
  el.style.minHeight = `${result.height}px`;
  el.dataset.pretextLines = String(result.lineCount);
}

/**
 * Auto-size all result card text paragraphs after results are shown.
 * Call this after populating result text.
 * 
 * @param {string} font - CSS font for the result paragraphs
 * @param {number} lineHeight - Line height in px
 */
export async function sizeResultCard(font = '16px Inter, sans-serif', lineHeight = 26) {
  const resultIds = [
    'result-mission',
    'result-trap', 
    'result-activation',
    'result-planet',
    'secondary-type'
  ];

  for (const id of resultIds) {
    const el = document.getElementById(id);
    if (el) {
      await autoSizeTextElement(el, font, lineHeight);
    }
  }

  // Also size the card itself to fit its children
  const card = document.querySelector('#result-screen .card');
  if (card) {
    card.style.height = 'auto'; // Let it grow naturally
  }
}
