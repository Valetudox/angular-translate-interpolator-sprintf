'use strict';

var vsprintf = require('sprintf-js').vsprintf;

var SprintfInterpolator = function () {
  this.$locale = undefined;
};


SprintfInterpolator.prototype = {

  setLocale: function(locale) {
    this.$locale = locale;
  },


  getInterpolationIdentifier: function() {
    return 'sprintf';
  },


  interpolate: function(string, interpolateParams) {
    try {
      return vsprintf(string, interpolateParams);
    } catch (e) {
      return string.replace(/%s|%d/gi, '');
    }
  }

};

module.exports = SprintfInterpolator;