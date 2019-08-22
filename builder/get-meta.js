'use strict';
const os = require('os');

const config = require('./config');

function getMeta() {
  let length = 0;
  let result = '';

  for (let key of Object.keys(config.meta)) {
    length = key.length > length ? key.length : length;
  }

  result += '// ==UserScript==' + os.EOL;

  for (let [key, value] of Object.entries(config.meta)) {
    result += `${formatCommentString(key, value, length)}${os.EOL}`
  }

  result += '// ==/UserScript==';

  return result;
}

function formatCommentString(prop, val, length) {
  if (prop.length < length) {
    const spacer = new Array(length - prop.length).fill(' ');
    prop += spacer.join('');
  }

  return `// @${prop}  ${val}`;
}

module.exports = getMeta;