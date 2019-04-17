const versions = {
  objectobject: 7, // IE7-8
  objectundefined: 6 // IE6
};

export default document.documentMode || versions[typeof document.all + typeof XMLHttpRequest];
