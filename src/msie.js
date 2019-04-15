const versions = {
  objectobject: 7, // IE7-8
  objectundefined: 6 // IE6
};

const msie = document.documentMode || versions[typeof document.all + typeof XMLHttpRequest];

export default msie;
