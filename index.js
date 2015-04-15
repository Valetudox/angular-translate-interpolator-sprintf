'use strict';

var Interpolator = require('./interpolator');
var MODULE_NAME = 'sprintfInterpolator';

angular
  .module(MODULE_NAME)
  .factory(MODULE_NAME, [function() {
    return new Interpolator();
  }]);

module.exports = MODULE_NAME;