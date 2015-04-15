'use strict';

var Interpolator = require('./interpolator');
var MODULE_NAME = 'sprintfInterpolator';

module.exports = function(angular) {
  angular
    .module(MODULE_NAME, [])
    .factory(MODULE_NAME, [function() {
      return new Interpolator();
    }]);

  return MODULE_NAME;
};