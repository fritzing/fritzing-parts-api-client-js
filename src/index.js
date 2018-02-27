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
  getCoreFzps() {
    return axios.get(this.url+'/fzp/core', {responseType: 'json'})
    .then((res) => {
      return res.data;
    });
  }
  getObsoleteFzps() {
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
   // get an fzp from the core parts library
  getCoreFzp(src) {
    return axios.get(this.url+'/core/'+src, {responseType: 'xml'})
    .then((res) => {
      return res.data;
    });
  }

  // get an fzp from the obsolete parts
  getObsoleteFzp(src) {
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
  getCoreSvg(src) {
    return axios.get(this.url+'/svg/core/'+src, {responseType: 'xml'})
    .then((res) => {
      return res.data;
    });
  }
  /**
   * Get a single part svg and response the svg as a string
   * @param  {String} src
   * @return {Promise} the fetch promise
   */
  getObsoleteSvg(src) {
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
