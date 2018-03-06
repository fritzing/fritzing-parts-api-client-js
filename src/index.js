'use strict';

const axios = require('axios');

/**
 * Fritzing Parts API Client
 */
class ApiClient {
  /**
   * Construct the ApiClient
   */
  constructor() {
    this.url = 'https://fritzing.github.io/fritzing-parts';
  }

  /**
   * Get a list of all FZP files
   * @return {Promise}
   */
  getFzps() {
    return axios.get(this.url+'/fzp', {responseType: 'json'})
    .then((res) => {
      return res.data;
    });
  }
  /**
   * Get a list of all Core-FZP files
   * @return {Promise}
   */
  getFzpsCore() {
    return axios.get(this.url+'/fzp/core', {responseType: 'json'})
    .then((res) => {
      return res.data;
    });
  }
  /**
   * Get a list of all Obsolete-FZP files. for old sketches only!
   * @return {Promise}
   */
  getFzpsObsolete() {
    return axios.get(this.url+'/fzp/obsolete', {responseType: 'json'})
    .then((res) => {
      return res.data;
    });
  }

  /**
   * Get a single FZP and response the xml as a string
   * @param  {String} src
   * @return {Promise} the fetch promise
   */
   getFzp(src) {
     return axios.get(this.url+'/'+src, {responseType: 'xml'})
     .then((res) => {
       return res.data;
     });
   }

   /**
    * Get a single part fzp from the core parts
    * @param  {String} src
    * @return {Promise} the fetch promise returns xml
    */
  getFzpCore(src) {
    return axios.get(this.url+'/core/'+src, {responseType: 'xml'})
    .then((res) => {
      return res.data;
    });
  }
  /**
   * Get a single part fzp from the obsolete parts, this is for old sketches only!
   * @param  {String} src
   * @return {Promise} the fetch promise returns xml
   */
  getFzpObsolete(src) {
    return axios.get(this.url+'/obsolete/'+src, {responseType: 'xml'})
    .then((res) => {
      return res.data;
    });
  }


  /**
   * Get a single part svg and response the svg as a string
   * @param  {String} src
   * @return {Promise} the fetch promise
   */
   getSvg(src) {
     return axios.get(this.url+'/svg/'+src, {responseType: 'xml'})
     .then((res) => {
       return res.data;
     });
   }
   /**
    * Get a single part svg from the core parts as svg-string
    * @param  {String} src
    * @return {Promise} the fetch promise returns xml
    */
  getSvgCore(src) {
    return axios.get(this.url+'/svg/core/'+src, {responseType: 'xml'})
    .then((res) => {
      return res.data;
    });
  }
  /**
   * Get a single part svg from the obsolete svgs, this is for old-sketches only! the response is a svg-string
   * @param  {String} src
   * @return {Promise} the fetch promise
   */
  getSvgObsolete(src) {
    return axios.get(this.url+'/svg/obsolete/'+src, {responseType: 'xml'})
    .then((res) => {
      return res.data;
    });
  }

  /**
   * Get a list of all FZB files
   * @return {Promise}
   */
  getFzbs() {
    return axios.get(this.url+'/fzb', {responseType: 'json'})
    .then((res) => {
      return res.data;
    });
  }
}

module.exports = ApiClient;
