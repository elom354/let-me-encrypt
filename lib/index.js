"use strict";
// CommonJS compatibility layer
// Allows "require('your-lib')" to work properly
require = require('esm')(module);
module.exports = require('./main');
