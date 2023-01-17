var o = function(r) {
  return typeof r == "string" ? a(r) : u(r);
};
function u(r) {
  return !r || typeof r != "object" || f(r) || i(r) ? r : c(r) ? v(r, u) : y(l(r), function(e, t) {
    var n = a(t);
    return e[n] = u(r[t]), e;
  }, {});
}
function a(r) {
  return r.replace(/[_.-](\w|$)/g, function(e, t) {
    return t.toUpperCase();
  });
}
var c = Array.isArray || function(r) {
  return Object.prototype.toString.call(r) === "[object Array]";
}, f = function(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}, i = function(r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
}, p = Object.prototype.hasOwnProperty, l = Object.keys || function(r) {
  var e = [];
  for (var t in r)
    p.call(r, t) && e.push(t);
  return e;
};
function v(r, e) {
  if (r.map)
    return r.map(e);
  for (var t = [], n = 0; n < r.length; n++)
    t.push(e(r[n], n));
  return t;
}
function y(r, e, t) {
  if (r.reduce)
    return r.reduce(e, t);
  for (var n = 0; n < r.length; n++)
    t = e(t, r[n], n);
  return t;
}
function g(r) {
  return o(r);
}
function s(r = "") {
  return `foo:${r}`;
}
export {
  s as foo,
  g as kamelifiera
};
//# sourceMappingURL=dila03.js.map
