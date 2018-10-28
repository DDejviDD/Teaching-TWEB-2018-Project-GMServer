const fetch = require('node-fetch');
const samples = require('./samples');
const functions = require('../utils/functions');

class GithubAgent {
  constructor({ token, baseUrl = 'https://api.github.com' } = {}) {
    this.token = token;
    this.baseUrl = baseUrl;
  }

  setToken(token) {
    this.token = token;
  }

  // Do a custom request to the Github API
  request(path, opts = {}) {
    const url = `${this.baseUrl}${path}`;
    const options = {
      ...opts,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${this.token}`,
      },
    };
    return fetch(url, options)
      .then((result) => {
        if (!result.ok) {
          throw new Error('Data unreachable !');
        }
        return result.json();
      })
      .then(data => data);
  }

  // Do a user request to the Github API (Not used)
  user(username) {
    return this.request(`/users/${username}`);
  }

  // Get all the user's repositories from the Github API
  repositories(username) {
    return this.request(`/users/${username}/repos`);
  }

  // Get all languages (in number of code line) of a repository
  languages(repository) {
    return this.request(`/repos/${repository}/languages`);
  }

  // Get all the languages (in number of code line) used by a user
  userLanguages(username) {
    return this.repositories(username)
      .then(repos => Promise.all(repos.map(repo => this.languages(repo.full_name))));
  }

  // Get all the languages (in number of code line) used by a user
  countryLanguages(countryName) {
    // Select the correct samples of users for the requested country
    let countryUsers = [];
    switch (countryName) {
      case 'afrique':
        countryUsers = samples.AFRICA;
        break;
      case 'bresil':
        countryUsers = samples.BRAZIL;
        break;
      case 'chine':
        countryUsers = samples.CHINA;
        break;
      case 'inde':
        countryUsers = samples.INDIA;
        break;
      case 'japon':
        countryUsers = samples.JAPAN;
        break;
      case 'russie':
        countryUsers = samples.RUSSIA;
        break;
      case 'suisse':
        countryUsers = samples.SUISSE;
        break;
      case 'suede':
        countryUsers = samples.SWEDEN;
        break;
      case 'usa':
        countryUsers = samples.USA;
        break;
      default:
        throw new Error('this country don\'t exists or isn\'t supported');
    }
    // Create a promise that will do the job
    const promise = new Promise((resolve) => {
      const countryLanguages = [];
      const getLanguages = (emptyArray, index) => {
        if (index === countryUsers.length) {
          resolve(functions.agregateLanguages(emptyArray));
        }

        this.userLanguages(countryUsers[index])
          .then((datas) => {
            emptyArray.push(...datas);
            getLanguages(emptyArray, index + 1);
          });
      };
      getLanguages(countryLanguages, 0);
    });
    // return this promise
    return promise;
  }
}

module.exports = GithubAgent;
