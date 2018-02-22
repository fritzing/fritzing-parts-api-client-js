'use strict';

const axios = require('axios');

/**
 *
 */
class ApiClient {
  /**
   *
   */
  constructor() {
    this.url = 'https://fritzing.github.io/fritzing-parts';
  }

  /**
   * @return {Promise}
   */
  getFzps() {
    return axios.get(this.url+'/fzp', {responseType: 'json'})
    .then((res) => {
      return res.data;
    });
  }

  /**
   * @param {String} src
   * @return {Promise} the fetch promise
   */
  getFzp(src) {
    return axios.get(this.url+'/'+src, {responseType: 'xml'})
    .then((res) => {
      return res.data;
    });
  }

  /**
   * @param {String} src
   * @return {Promise} the fetch promise
   */
  getCoreSvg(src) {
    return axios.get(this.url+'/svg/core/'+src, {responseType: 'xml'})
    .then((res) => {
      return res.data;
    });
  }

  /**
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
