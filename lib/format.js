/* eslint-disable no-console */

import {
  MarkdownOrChalk,
  mdastLinkify,
  mdastTableHelper,
} from 'markdown-or-chalk';

/**
 * @param {Record<string, string>} result
 * @param {import('./command.js').CommandInput} input
 * @returns {void}
 */
export function formatResult (result, {
  noLinks,
  outputJson,
  outputMarkdown,
}) {
  if (outputJson) {
    return console.log(JSON.stringify(result));
  }

  const format = new MarkdownOrChalk(outputMarkdown);

  console.log(format.header('Something'));

  console.log(format.fromMdast(formatTable(result, {
    outputMarkdown,
    noLinks,
  })));
}

/** @typedef {import('markdown-or-chalk').PhrasingContentOrStringList} PhrasingContentOrStringList */

/**
 * @param {Record<string, string>} result
 * @param {Pick<import('./command.js').CommandInput, 'noLinks' | 'outputMarkdown'>} options
 * @returns {import('mdast').Table}
 */
function formatTable (result, { noLinks, outputMarkdown }) {
  /** @type {Array<[PhrasingContentOrStringList, string]>} */
  const tableData = [
    ['Name', 'Data'],
  ];

  for (const [key, value] of Object.entries(result)) {
    tableData.push([
      mdastLinkify(key, 'https://example.com/', noLinks),
      value,
    ]);
  }

  return mdastTableHelper(
    tableData,
    outputMarkdown ? ['left', 'center', 'center', 'left'] : undefined
  );
}
