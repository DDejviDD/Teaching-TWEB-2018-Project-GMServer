const Languages = require('../models/Languages');

function findRequestedCountry(country) {
  let promise;
  switch (country) {
    case 'suisse':
      promise = Languages.SWITZERLAND.findOne();
      break;
    case 'afrique':
      promise = Languages.AFRICA.findOne();
      break;
    case 'bresil':
      promise = Languages.BRAZIL.findOne();
      break;
    case 'chine':
      promise = Languages.CHINA.findOne();
      break;
    case 'inde':
      promise = Languages.INDIA.findOne();
      break;
    case 'japon':
      promise = Languages.JAPAN.findOne();
      break;
    case 'russie':
      promise = Languages.RUSSIA.findOne();
      break;
    case 'suede':
      promise = Languages.SWEDEN.findOne();
      break;
    case 'usa':
      promise = Languages.USA.findOne();
      break;
    default:
      throw new Error('This courntry isn\'t supported yet');
  }

  return promise;
}

function deleteSelectedCountry(country) {
  let promise;
  switch (country) {
    case 'suisse':
      promise = Languages.SWITZERLAND.deleteMany();
      break;
    case 'afrique':
      promise = Languages.AFRICA.deleteMany();
      break;
    case 'bresil':
      promise = Languages.BRAZIL.deleteMany();
      break;
    case 'chine':
      promise = Languages.CHINA.deleteMany();
      break;
    case 'inde':
      promise = Languages.INDIA.deleteMany();
      break;
    case 'japon':
      promise = Languages.JAPAN.deleteMany();
      break;
    case 'russie':
      promise = Languages.RUSSIA.deleteMany();
      break;
    case 'suede':
      promise = Languages.SWEDEN.deleteMany();
      break;
    case 'usa':
      promise = Languages.USA.deleteMany();
      break;
    default:
      throw new Error('This courntry isn\'t supported yet, it can\'t be deleted');
  }

  return promise;
}

function addFreshDatas(country, datas) {
  let promise;
  switch (country) {
    case 'suisse':
      promise = Languages.SWITZERLAND.create(datas);
      break;
    case 'afrique':
      promise = Languages.AFRICA.create(datas);
      break;
    case 'bresil':
      promise = Languages.BRAZIL.create(datas);
      break;
    case 'chine':
      promise = Languages.CHINA.create(datas);
      break;
    case 'inde':
      promise = Languages.INDIA.create(datas);
      break;
    case 'japon':
      promise = Languages.JAPAN.create(datas);
      break;
    case 'russie':
      promise = Languages.RUSSIA.create(datas);
      break;
    case 'suede':
      promise = Languages.SWEDEN.create(datas);
      break;
    case 'usa':
      promise = Languages.USA.create(datas);
      break;
    default:
      throw new Error('This courntry isn\'t supported yet, can\'t add datas here !');
  }

  return promise;
}

function isDataExpired(dbDatas) {
  const date = new Date();
  const millitoExpiration = 180 * 60 * 1000;
  return new Promise(resolve => resolve(typeof (dbDatas) === 'undefined' || dbDatas === null || date.valueOf() - dbDatas.timestamp.valueOf() > millitoExpiration));
}

function agregateLanguages(rawLanguages = []) {
  const languages = {};
  const countLanguages = (item) => {
    Object.keys(item).forEach((key) => {
      const value = item[key];
      const current = languages[key] || 0;
      languages[key] = current + value;
    });
  };
  rawLanguages.forEach(countLanguages);
  return languages;
}

module.exports = {
  agregateLanguages,
  findRequestedCountry,
  deleteSelectedCountry,
  addFreshDatas,
  isDataExpired,
};
