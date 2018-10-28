const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LanguagesSchema = new Schema({
  JavaScript: { type: Number, default: 0 },
  Python: { type: Number, default: 0 },
  HTML: { type: Number, default: 0 },
  CSS: { type: Number, default: 0 },
  'C++': { type: Number, default: 0 },
  C: { type: Number, default: 0 },
  Java: { type: Number, default: 0 },
  PHP: { type: Number, default: 0 },
  'Objective-C': { type: Number, default: 0 },
  PowerShell: { type: Number, default: 0 },
  'C#': { type: Number, default: 0 },
  Kotlin: { type: Number, default: 0 },
  TeX: { type: Number, default: 0 },
  R: { type: Number, default: 0 },
  timestamp: { type: Date, default: new Date() },
});
const AFRICA = mongoose.model('AFRICA', LanguagesSchema);
const BRAZIL = mongoose.model('BRAZIL', LanguagesSchema);
const CHINA = mongoose.model('CHINA', LanguagesSchema);
const INDIA = mongoose.model('INDIA', LanguagesSchema);
const JAPAN = mongoose.model('JAPAN', LanguagesSchema);
const RUSSIA = mongoose.model('RUSSIA', LanguagesSchema);
const SWEDEN = mongoose.model('SWEDEN', LanguagesSchema);
const SWITZERLAND = mongoose.model('SWITZERLAND', LanguagesSchema);
const USA = mongoose.model('USA', LanguagesSchema);
module.exports = {
  AFRICA,
  BRAZIL,
  CHINA,
  INDIA,
  JAPAN,
  RUSSIA,
  SWEDEN,
  SWITZERLAND,
  USA,
};
