export default class Api {
    constructor(config) {
      this._baseUrl = config.baseUrl;
      this._token = config.token;
      this._headers = config.headers;
    }
    postForm () {
        return fetch(`${this._baseUrl}`, {})
    }
    _handleOriginalResponse(res) {
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(`Error: ${res.status}`);
    }
  }