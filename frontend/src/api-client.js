/*
 *  api-client
 *  ~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */

import Cookies from 'js-cookie';


class _APIClient {
  constructor(csrftoken) {
    this.csrftoken = csrftoken;
  }

  get(path, init) {
    let values = init || {};
    values.method = 'GET';
    if (typeof values.headers === 'undefined') {
      values.headers = {};
    };
    values.headers['Content-Type'] = 'application/json';
    values.credentials = 'same-origin';
    return fetch(path, values);
  }

  post(path, init) {
    let values = init || {};
    values.method = 'POST';
    if (typeof values.headers === 'undefined') {
      values.headers = {};
    };
    values.headers['X-CSRFToken'] = this.csrftoken;
    values.headers['Content-Type'] = 'application/json';
    values.credentials = 'same-origin';
    return fetch(path, values)
  }

  login(email, password) {
    const body = JSON.stringify({email, password});
    return this.post('/api/auth/login/', { body })
      .then(response => {
        switch (response.status) {
          case 204: return null;
          case 400:
            throw new Error('wrong username or password');
          default:
            throw new Error('unexpected response');
        }
      });
  }

  logout() {
    return this.post('/api/auth/logout/')
      .then((response) => {
        switch(response.status) {
          case 204: return null;
          case 403: return Promise.reject(new Error('not logged in'));
          default: return Promise.reject(new Error('unexpected response'));
        }
      });
  }

  getAuthenticatedUser() {
    return this.get('/api/auth/user/')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(new Error('unexpected response'));
        }
      });
  }
}


function fetchCSRFToken() {
  return fetch('/api/', { credentials: 'same-origin' })
    .then((response) => {
      if (response.status === 200) {
        return Cookies.get('csrftoken');
      } else {
        return Promise.reject(new Error('unexpected response'));
      }
    });
}

const APIClient = fetchCSRFToken().then((token) => { return new _APIClient(token) });

export default APIClient;
