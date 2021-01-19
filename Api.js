export default class Api {
    constructor ({baseUrl}) {
        this._baseUrl = baseUrl;
    }
    getToX (json) {
        return fetch(`${this._baseUrl}/gen`, {
            method: 'POST',
            body: json,
        })
    }
}