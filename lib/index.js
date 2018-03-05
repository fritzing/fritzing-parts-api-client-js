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
     * Get a single part svg and response the svg as a string
     * @param  {String} src
     * @return {Promise} the fetch promise
     */

  }, {
    key: 'getCoreSvg',
    value: function getCoreSvg(src) {
      return axios.get(this.url + '/svg/core/' + src, { responseType: 'xml' }).then(function (res) {
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
