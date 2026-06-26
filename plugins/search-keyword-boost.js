#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.cwd();
const RESOURCES_DIR = path.join(ROOT_DIR, 'resources');

const SEARCH_TAGS_START = '<!-- AUTO_SEARCH_TAGS:START -->';
const SEARCH_TAGS_END = '<!-- AUTO_SEARCH_TAGS:END -->';

const TAG_RULES = [
  { tag: 'install', patterns: [/\binstall(?:ation)?\b/i, /\bensure\b/i, /\brequirements?\b/i, /\bdependencies?\b/i] },
  { tag: 'config', patterns: [/\bconfig(?:uration)?\b/i, /config\.lua/i, /\bsettings?\b/i] },
  { tag: 'exports', patterns: [/\bexports?\b/i] },
  { tag: 'events', patterns: [/\bevents?\b/i, /RegisterNetEvent/i, /Trigger(Client|Server)Event/i] },
  { tag: 'commands', patterns: [/\bcommands?\b/i, /RegisterCommand/i] },
  { tag: 'framework', patterns: [/\besx\b/i, /\bqbcore\b/i, /\bqbx\b/i, /\bstandalone\b/i] },
  { tag: 'database', patterns: [/\bdatabase\b/i, /\bsql\b/i, /\boxmysql\b/i, /\bmariadb\b/i, /\bmysql\b/i] },
  { tag: 'permissions', patterns: [/\bace\b/i, /\bpermissions?\b/i, /\badmin\b/i] },
  { tag: 'locales', patterns: [/\blocales?\b/i, /\blang\b/i, /\btranslation\b/i] },
  { tag: 'security', patterns: [/\bsecurity\b/i, /\bexploit\b/i, /\bvalidation\b/i, /\banti[-\s]?spam\b/i] },
  { tag: 'performance', patterns: [/\bperformance\b/i, /\bresmon\b/i, /\boptimi[sz]e/i] },
  { tag: 'troubleshooting', patterns: [/\btroubleshooting\b/i, /\bproblem\b/i, /\berror\b/i, /\bfix\b/i] }
];

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeText(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

function listMarkdownFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  return fs
    .readdirSync(dirPath)
    .filter((fileName) => fileName.toLowerCase().endsWith('.md'))
    .map((fileName) => path.join(dirPath, fileName));
}

function detectTags(markdown) {
  const tags = [];

  for (const rule of TAG_RULES) {
    if (rule.patterns.some((regex) => regex.test(markdown))) {
      tags.push(rule.tag);
    }
  }

  return tags;
}

function renderSearchTagBlock(tags) {
  const keywordText = tags.join(' ');
  return [
    SEARCH_TAGS_START,
    `<p class="search-keyword-boost" aria-hidden="true">search tags ${keywordText}</p>`,
    SEARCH_TAGS_END
  ].join('\n');
}

function upsertSearchTags(markdown, tags) {
  const block = renderSearchTagBlock(tags);
  const blockRegex = new RegExp(`${SEARCH_TAGS_START}[\\s\\S]*?${SEARCH_TAGS_END}`, 'm');

  if (blockRegex.test(markdown)) {
    return markdown.replace(blockRegex, block);
  }

  const trimmed = markdown.replace(/\s+$/, '');
  return `${trimmed}\n\n${block}\n`;
}

function ensureStyleRule(stylesPath) {
  if (!fs.existsSync(stylesPath)) {
    return false;
  }

  const css = readText(stylesPath);
  if (/\.search-keyword-boost\s*\{/.test(css)) {
    return false;
  }

  const next = `${css.trimEnd()}\n\n.search-keyword-boost {\n  display: none !important;\n}\n`;
  writeText(stylesPath, next);
  return true;
}

function main() {
  const targetFiles = [
    ...listMarkdownFiles(ROOT_DIR),
    ...listMarkdownFiles(RESOURCES_DIR)
  ];

  let updatedFiles = 0;

  for (const filePath of targetFiles) {
    const markdown = readText(filePath);
    const tags = detectTags(markdown);

    if (tags.length === 0) {
      continue;
    }

    const next = upsertSearchTags(markdown, tags);
    if (next !== markdown) {
      writeText(filePath, next);
      updatedFiles += 1;
    }
  }

  const stylesUpdated = ensureStyleRule(path.join(ROOT_DIR, 'styles.css'));

  console.log(`[search-keyword-boost] markdown files scanned: ${targetFiles.length}`);
  console.log(`[search-keyword-boost] markdown files updated: ${updatedFiles}`);
  console.log(`[search-keyword-boost] styles.css updated: ${stylesUpdated ? 'yes' : 'no'}`);
}

main();
