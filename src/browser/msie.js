const versions = {
  objectobject: 7, // IE7-8
  objectundefined: 6 // IE6
};

export default (function (doc) {
  return doc.documentMode || versions[typeof doc.all + typeof XMLHttpRequest];
})(document || {});
