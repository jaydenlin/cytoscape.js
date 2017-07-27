var Document = require("./document");
var Window = {
  getComputedStyle: function (node) {
    return {
      getPropertyValue: node.style.getProperty
    }
  },
  document: Document
}
module.exports = ( typeof window === 'undefined' ? Window : window ); // eslint-disable-line no-undef
