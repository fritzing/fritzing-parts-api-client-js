'use strict';

const axios = require('axios');

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
const FritzingPartsAPI = 'https://fritzing.github.io/fritzing-parts';

/**
 * Get a list of all FZP files
 *
 * @type   {Function}
 * @param  {String} url - The base URL of the parts api
 * @return {Promise}
 */
const getFzps = function(url = `${FritzingPartsAPI}/fzp`) {
  return axios.get(url, {responseType: 'json'})
  .then((res) => {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a list of all Core-FZP files
 *
 * @param  {String} url - The base URL of the parts api
 * @return {Promise}
 */
const getFzpsCore = function(url = `${FritzingPartsAPI}/fzp/core`) {
  return axios.get(url, {responseType: 'json'})
  .then((res) => {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a list of all Obsolete-FZP files. for old sketches only!
 *
 * @param  {String} url - The base URL of the parts api
 * @return {Promise}
 */
const getFzpsObsolete = function(url = `${FritzingPartsAPI}/fzp/obsolete`) {
  return axios.get(url, {responseType: 'json'})
  .then((res) => {
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
const getFzp = function(src, url = FritzingPartsAPI) {
  return axios.get(`${url}/${src}`, {responseType: 'xml'})
  .then((res) => {
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
const getFzpCore = function(src, url = FritzingPartsAPI) {
  return axios.get(`${url}/core/${src}`, {responseType: 'xml'})
  .then((res) => {
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
const getFzpObsolete = function(src, url = FritzingPartsAPI) {
  return axios.get(`${url}/obsolete/${src}`, {responseType: 'xml'})
  .then((res) => {
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
 const getSvg = function(src, url = FritzingPartsAPI) {
   return axios.get(`${url}/svg/${src}`, {responseType: 'xml'})
   .then((res) => {
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
const getSvgCore = function(src, url = FritzingPartsAPI) {
  return axios.get(`${url}/svg/core/${src}`, {responseType: 'xml'})
  .then((res) => {
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
const getSvgObsolete = function(src, url = FritzingPartsAPI) {
  return axios.get(`${url}/svg/obsolete/${src}`, {responseType: 'xml'})
  .then((res) => {
    return Promise.resolve(res.data);
  });
};

/**
 * Get a list of all FZB files
 *
 * @param  {String} url - The base URL of the parts api
 * @return {Promise}
 */
const getFzbs = function(url = `${FritzingPartsAPI}/fzb`) {
  return axios.get(url, {responseType: 'json'})
  .then((res) => {
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
const FritzingPartsAPIClient = {
  getFzps,
  getFzpsCore,
  getFzpsObsolete,
  getFzp,
  getFzpCore,
  getFzpObsolete,
  getSvg,
  getSvgCore,
  getSvgObsolete,
  getFzbs,
};

module.exports = {
  FritzingPartsAPI,
  FritzingPartsAPIClient,
};
