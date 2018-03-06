'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

/**
 * Fritzing Parts API Client
 */

var ApiClient = function () {
  /**
   * Construct the ApiClient
   */
  function ApiClient() {
    _classCallCheck(this, ApiClient);

    this.url = 'https://fritzing.github.io/fritzing-parts';
  }

  /**
   * Get a list of all FZP files
   * @return {Promise}
   */


  _createClass(ApiClient, [{
    key: 'getFzps',
    value: function getFzps() {
      return axios.get(this.url + '/fzp', { responseType: 'json' }).then(function (res) {
        return res.data;
      });
    }
    /**
     * Get a list of all Core-FZP files
     * @return {Promise}
     */

  }, {
    key: 'getFzpsCore',
    value: function getFzpsCore() {
      return axios.get(this.url + '/fzp/core', { responseType: 'json' }).then(function (res) {
        return res.data;
      });
    }
    /**
     * Get a list of all Obsolete-FZP files. for old sketches only!
     * @return {Promise}
     */

  }, {
    key: 'getFzpsObsolete',
    value: function getFzpsObsolete() {
      return axios.get(this.url + '/fzp/obsolete', { responseType: 'json' }).then(function (res) {
        return res.data;
      });
    }

    /**
     * Get a single FZP and response the xml as a string
     * @param  {String} src
     * @return {Promise} the fetch promise
     */

  }, {
    key: 'getFzp',
    value: function getFzp(src) {
      return axios.get(this.url + '/' + src, { responseType: 'xml' }).then(function (res) {
        return res.data;
      });
    }

    /**
     * Get a single part fzp from the core parts
     * @param  {String} src
     * @return {Promise} the fetch promise returns xml
     */

  }, {
    key: 'getFzpCore',
    value: function getFzpCore(src) {
      return axios.get(this.url + '/core/' + src, { responseType: 'xml' }).then(function (res) {
        return res.data;
      });
    }
    /**
     * Get a single part fzp from the obsolete parts, this is for old sketches only!
     * @param  {String} src
     * @return {Promise} the fetch promise returns xml
     */

  }, {
    key: 'getFzpObsolete',
    value: function getFzpObsolete(src) {
      return axios.get(this.url + '/obsolete/' + src, { responseType: 'xml' }).then(function (res) {
        return res.data;
      });
    }

    /**
     * Get a single part svg and response the svg as a string
     * @param  {String} src
     * @return {Promise} the fetch promise
     */

  }, {
    key: 'getSvg',
    value: function getSvg(src) {
      return axios.get(this.url + '/svg/' + src, { responseType: 'xml' }).then(function (res) {
        return res.data;
      });
    }
    /**
     * Get a single part svg from the core parts as svg-string
     * @param  {String} src
     * @return {Promise} the fetch promise returns xml
     */

  }, {
    key: 'getSvgCore',
    value: function getSvgCore(src) {
      return axios.get(this.url + '/svg/core/' + src, { responseType: 'xml' }).then(function (res) {
        return res.data;
      });
    }
    /**
     * Get a single part svg from the obsolete svgs, this is for old-sketches only! the response is a svg-string
     * @param  {String} src
     * @return {Promise} the fetch promise
     */

  }, {
    key: 'getSvgObsolete',
    value: function getSvgObsolete(src) {
      return axios.get(this.url + '/svg/obsolete/' + src, { responseType: 'xml' }).then(function (res) {
        return res.data;
      });
    }

    /**
     * Get a list of all FZB files
     * @return {Promise}
     */

  }, {
    key: 'getFzbs',
    value: function getFzbs() {
      return axios.get(this.url + '/fzb', { responseType: 'json' }).then(function (res) {
        return res.data;
      });
    }
  }]);

  return ApiClient;
}();

module.exports = ApiClient;
