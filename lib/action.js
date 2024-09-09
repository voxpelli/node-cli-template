import { formatResult } from './format.js';

/**
 * @param {import('./command.js').CommandInput} input
 * @returns {Promise<void>}
 */
export async function action (input) {
  const result = {
    mainInput: input.mainInput,
  };

  formatResult(result, input);
}
