import { describe, expect, it } from 'tstyche';

import { cli } from '../lib/main.js';

describe('cli export', () => {
  it('should have async cli signature', () => {
    expect(cli).type.toBeAssignableTo<() => Promise<void>>();
  });
});
