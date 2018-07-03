'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(arg) {
    return arg.replace(/\w\S*/g, function(arg) {
        return arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
    });
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('hello world'), 'Hello World')
assert.strictEqual(jadenCase('HELLO WORLD'), 'Hello World')
assert.strictEqual(jadenCase('heLLo wOrld'), 'Hello World')

// End of tests */