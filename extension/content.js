/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
chrome.runtime.onMessage.addListener(function (request, sender, response) {
  var html = document.documentElement.outerHTML;
  console.log(html);
  response({
    html: html
  });
});
/******/ })()
;
//# sourceMappingURL=content.js.map