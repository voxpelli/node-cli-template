import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { command } from '../lib/command.js';
describe('command', () => {
  it('should parse arguments successfully', async () => {
    const result = await command(['example']);

    assert.ok(result);
    assert.equal(result.mainInput, 'example');
    assert.equal(typeof result.debug, 'boolean');
  });
});
