const $ = (s, root = document) => root.querySelector(s);
const on = (el, evt, cb) => el.addEventListener(evt, cb);
