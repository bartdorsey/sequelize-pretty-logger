const { highlight, generateTheme } = require('prism-console');
const { pd } = require('pretty-data');
const Prismjs = require('prismjs');
const fs = require('fs');
const path = require('path');
const loadLanguages = require('prismjs/components/');
loadLanguages(['sql']);

module.exports = (options = {}) => {
  const logger = options.logger || console.log;
  const themeFilename = path.join(__dirname, 'themes', options.theme || 'default.css');
  const theme = generateTheme(fs.readFileSync(themeFilename, 'utf-8'));

  return function sequelize_pretty_logger(message) {
    const [_prefix, sql] = message.split(/Executing \(\w+\)\:/);
    logger(highlight(pd.sql(sql), Prismjs.languages.sql, theme).join(''));
  }
}