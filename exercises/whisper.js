'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function whister(phrase) {
    return phrase.toLowerCase();
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whister, 'function')
assert.strictEqual(whister.length, 1)
assert.deepStrictEqual(whister('ABC'), 'abc')
assert.deepStrictEqual(whister('BONJOUR'), 'bonjour')
    // End of tests */