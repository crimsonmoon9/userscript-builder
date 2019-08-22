'use strict';

function inlineCss(cssArray) {
  let css = '';

  cssArray.forEach((element, index) => {
    index && (css += '\r\n');
    css += `/* ${element.filePath} */\r\n`;
    css += element.file;
  });

  return `

// CSS injection
(function(){
  const $style = document.createElement('style');

  $style.innerHTML = \`${css}\`;
  document.body.appendChild($style);
})();`;
}

module.exports = inlineCss;