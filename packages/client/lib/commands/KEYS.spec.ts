import { strict as assert } from 'node:assert';
import testUtils, { GLOBAL } from '../test-utils';

describe('KEYS', () => {
  testUtils.testWithClient('keys', async client => {
    assert.deepEqual(
      await client.keys('pattern'),
      []
    );
  }, GLOBAL.SERVERS.OPEN);
});
