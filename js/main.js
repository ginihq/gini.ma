(() => {
  var e;
  (e = "https://app.viral-loops.com/"),
    ["form-widget"].forEach(function (d) {
      var t = "".concat(e, "widgetsV2/").concat(d, "/index.js"),
        o = "".concat(e, "widgetsV2/").concat(d, "/vendor.js"),
        c = document.createElement("link");
      (c.href = o),
        (c.rel = "modulepreload"),
        (c.id = "vendor-form-widget"),
        document.head.appendChild(c);
      var r = document.createElement("script");
      (r.src = t),
        (r.type = "module"),
        (r.crossOrigin = !0),
        (r.id = "script-form-widget"),
        document.head.appendChild(r);
    });
})();
