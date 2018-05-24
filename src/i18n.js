/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
const { addLocaleData } = require('react-intl');
const enLocaleData = require('react-intl/locale-data/en');
const nlLocaleData = require('react-intl/locale-data/nl');

const enTranslationMessages = require('./translations/en.json');
const nlTranslationMessages = require('./translations/nl.json');
const { DEFAULT_LOCALE } = require('./constants');

const appLocales = ['nl', 'en'];

addLocaleData(enLocaleData);
addLocaleData(nlLocaleData);

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE 
  ? formatTranslationMessages(DEFAULT_LOCALE, nlTranslationMessages) 
  : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE 
    ? defaultFormattedMessages[key] 
    : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  nl: formatTranslationMessages('nl', nlTranslationMessages),
};

module.exports = {
  appLocales,
  formatTranslationMessages,
  translationMessages,
};
