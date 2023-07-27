const $ = (s, root = document) => root.querySelector(s);
const on = (el, evt, cb) => el.addEventListener(evt, cb);
const trigger = (el, evt, detail = null) => el.dispatchEvent(new CustomEvent(evt, { detail }));
const delegate = (el, selector, evt, cb) => {
    on(el, evt, e => {
        if (e.target.matches(selector)) cb(e, el);
    });
};
