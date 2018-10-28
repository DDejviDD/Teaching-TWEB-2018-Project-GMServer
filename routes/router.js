require('dotenv/config');
const express = require('express');
const GithubAgent = require('../utils/GithubAgent');
const functions = require('../utils/functions');

const router = express.Router();
const agent = new GithubAgent({ token: process.env.ACCESS_TOKEN });

router.get('/request/:country', (req, res, next) => {
  const country = req.params.country;
  functions.findRequestedCountry(country)
    .then(dbData => functions.isDataExpired(dbData)
      .then((isExpired) => {
        if (isExpired) {
          functions.deleteSelectedCountry(country)
            .then(() => agent.countryLanguages(country))
            .then(datas => functions.addFreshDatas(country, datas))
            .then(datas => res.send(datas));
        } else {
          res.send(dbData);
        }
      }))
    .catch(next);
});

/*
// get a set of language from a user in the Git API
router.get('/request/:country', (req, res, next) => {
  agent.countryLanguages(req.params.country)
    .then(datas => res.send(datas))
    .catch(next);
});
*/

// get a set of language from a user in the Git API (not used in the client)
router.get('/languages/:username', (req, res, next) => {
  agent.userLanguages(req.params.username)
    .then(datas => res.send(datas))
    .catch(next);
});

// get a set of repos from a user in the Git API (not used in the client)
router.get('/repos/:username', (req, res, next) => {
  agent.repositories(req.params.username)
    .then(datas => res.send(datas))
    .catch(next);
});

module.exports = router;
