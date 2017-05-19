// This file isn't transpiled, so it must use CommonJS and ES5

// Register babel to transpile before the tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand. Such as the, import './index.css'; in index.js
// We're telling Mocha if it sees the .css extension just treat it like an empty function.
require.extensions['.css'] = function() {};
