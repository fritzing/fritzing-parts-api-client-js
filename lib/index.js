'use strict';

var axios = require('axios');

/**
 * The base url of the fritzing parts api
 *
 * @example
 * const {FritzingPartsAPI} = require('fritzing-parts-api-client-js')
 *
 * console.log(FritzingPartsAPI)
 *
 * @type {String}
 */
var FritzingPartsAPI = 'https://fritzing.github.io/fritzing-parts';

/**
 * Get a list of all FZP files
 *
 * @type   {Function}
 * @param  {String} url - The base URL of the parts api
 * @return {Promise}
 */
var getFzps = function getFzps() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FritzingPartsAPI + '/fzp';

  return axios.get(url, { responseType: 'json' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a list of all Core-FZP files
 *
 * @param  {String} url - The base URL of the parts api
 * @return {Promise}
 */
var getFzpsCore = function getFzpsCore() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FritzingPartsAPI + '/fzp/core';

  return axios.get(url, { responseType: 'json' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a list of all Obsolete-FZP files. for old sketches only!
 *
 * @param  {String} url - The base URL of the parts api
 * @return {Promise}
 */
var getFzpsObsolete = function getFzpsObsolete() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FritzingPartsAPI + '/fzp/obsolete';

  return axios.get(url, { responseType: 'json' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a single FZP and response the xml as a string
 *
 * @param  {String} src
 * @param  {String} url - The base URL of the parts api
 * @return {Promise} the fetch promise
 */
var getFzp = function getFzp(src) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FritzingPartsAPI;

  return axios.get(url + '/' + src, { responseType: 'xml' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a single part fzp from the core parts
 *
 * @param  {String} src
 * @param  {String} url - The base URL of the parts api
 * @return {Promise} the fetch promise returns xml
 */
var getFzpCore = function getFzpCore(src) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FritzingPartsAPI;

  return axios.get(url + '/core/' + src, { responseType: 'xml' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a single part fzp from the obsolete parts, this is for old sketches only!
 *
 * @param  {String} src
 * @param  {String} url - The base URL of the parts api
 * @return {Promise} the fetch promise returns xml
 */
var getFzpObsolete = function getFzpObsolete(src) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FritzingPartsAPI;

  return axios.get(url + '/obsolete/' + src, { responseType: 'xml' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a single part svg and response the svg as a string
 *
 * @param  {String} src
 * @param  {String} url - The base URL of the parts api
 * @return {Promise} the fetch promise
 */
var getSvg = function getSvg(src) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FritzingPartsAPI;

  return axios.get(url + '/svg/' + src, { responseType: 'xml' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a single part svg from the core parts as svg-string
 *
 * @param  {String} src
 * @param  {String} url - The base URL of the parts api
 * @return {Promise} the fetch promise returns xml
 */
var getSvgCore = function getSvgCore(src) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FritzingPartsAPI;

  return axios.get(url + '/svg/core/' + src, { responseType: 'xml' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a single part svg from the obsolete svgs, this is for old-sketches only! the response is a svg-string
 *
 * @param  {String} src
 * @param  {String} url - The base URL of the parts api
 * @return {Promise} the fetch promise
 */
var getSvgObsolete = function getSvgObsolete(src) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FritzingPartsAPI;

  return axios.get(url + '/svg/obsolete/' + src, { responseType: 'xml' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a list of all FZB files
 *
 * @param  {String} url - The base URL of the parts api
 * @return {Promise}
 */
var getFzbs = function getFzbs() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FritzingPartsAPI + '/fzb';

  return axios.get(url, { responseType: 'json' }).then(function (res) {
    return Promise.resolve(res.data);
  });
};

/**
* Fritzing Parts API Client
*
* @example
* const {FritzingPartsAPIClient} = require('fritzing-parts-api-client-js')
*
* FritzingPartsAPIClient.getFzps()
* .then((fzpz) => {
*   console.log(fzps)
* })
* .catch((err) => {
*   console.error(err)
* })
*/
var FritzingPartsAPIClient = {
  getFzps: getFzps,
  getFzpsCore: getFzpsCore,
  getFzpsObsolete: getFzpsObsolete,
  getFzp: getFzp,
  getFzpCore: getFzpCore,
  getFzpObsolete: getFzpObsolete,
  getSvg: getSvg,
  getSvgCore: getSvgCore,
  getSvgObsolete: getSvgObsolete,
  getFzbs: getFzbs
};

module.exports = {
  FritzingPartsAPI: FritzingPartsAPI,
  FritzingPartsAPIClient: FritzingPartsAPIClient
};
