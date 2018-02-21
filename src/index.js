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
    return fetch(this.url+'/fzp')
    .then((res) => res.json());
  }

  /**
   * @param {String} src
   * @return {Promise} the fetch promise
   */
  getFzp(src) {
    return fetch(this.url+'/'+src)
    .then((res) => res.text());
  }

  /**
   * @param {String} src
   * @return {Promise} the fetch promise
   */
  getCoreSvg(src) {
    return fetch(this.url+'/svg/core/'+src)
    .then((res) => res.text());
  }

  /**
   * @return {Promise}
   */
  getFzbs() {
    return fetch(this.url+'/fzb')
    .then((res) => res.json());
  }
}

export default ApiClient;
