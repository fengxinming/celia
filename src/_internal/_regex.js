export const DASH_ALPHA_REGEX = /[-_. ]+([a-z])/g;
export const PROP_NAME_REGEX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
export const ESCAPE_CHAR_REGEX = /\\(\\)?/g;
export const IS_DEEP_PROP_REGEX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
