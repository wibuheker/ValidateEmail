(function(m) {
  const navigator = {
      plugins: [],
      appCodeName: 'Mozilla',
      appName: 'Netscape',
      appVersion: '5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
      productSub: '20030107',
      cookieEnabled: true,
      onLine: true,
      platform: 'MacIntel',
      userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
      language: 'en-US'
  }

  function g(e) {
      try {
          if (navigator.plugins && navigator.plugins.length)
              for (var t = 0; t < navigator.plugins.length; t++) {
                  var n = navigator.plugins[t];
                  if (n.name.indexOf(e) >= 0)
                      return n.name + (n.description ? "|" + n.description : "")
              }
      } catch (r) {}
      return ""
  }

  function z(e) {
      try {
          if (!e)
              return A();
          var t;
          e: {
              var n;
              try {
                  n = document.getElementById(e)
              } catch (r) {}
              if (null === n || "undefined" == typeof n)
                  try {
                      n = document.getElementsByName(e)[0]
                  } catch (a) {}
              if (null === n || "undefined" == typeof n)
                  for (var i = 0; i < document.forms.length; i++)
                      for (var o = document.forms[i], s = 0; s < o.elements.length; s++) {
                          var u = o[s];
                          if (u.name === e || u.id === e) {
                              t = u;
                              break e
                          }
                      }
              t = n
          }
          if (null !== t)
              try {
                  t.value = A()
              } catch (l) {
                  t.value = escape(l.message)
              }
      } catch (c) {}
  }

  function A(a) {
      var c = new Date,
          b = new Date,
          e = [t("TF1"), t("020"), function() {
              return ScriptEngineMajorVersion()
          }, function() {
              return ScriptEngineMinorVersion()
          }, function() {
              return ScriptEngineBuildVersion()
          }, function() {
              return i("{7790769C-0471-11D2-AF11-00C04FA35D02}")
          }, function() {
              return i("{89820200-ECBD-11CF-8B85-00AA005B4340}")
          }, function() {
              return i("{283807B5-2C60-11D0-A31D-00AA00B92C03}")
          }, function() {
              return i("{4F216970-C90C-11D1-B5C7-0000F8051515}")
          }, function() {
              return i("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}")
          }, function() {
              return i("{9381D8F2-0288-11D0-9501-00AA00B911A5}")
          }, function() {
              return i("{4F216970-C90C-11D1-B5C7-0000F8051515}")
          }, function() {
              return i("{5A8D6EE0-3E18-11D0-821E-444553540000}")
          }, function() {
              return i("{89820200-ECBD-11CF-8B85-00AA005B4383}")
          }, function() {
              return i("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}")
          }, function() {
              return i("{45EA75A0-A269-11D1-B5BF-0000F8051515}")
          }, function() {
              return i("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}")
          }, function() {
              return i("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
          }, function() {
              return i("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}")
          }, function() {
              return i("{3AF36230-A269-11D1-B5BF-0000F8051515}")
          }, function() {
              return i("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}")
          }, function() {
              return i("{CC2A9BA0-3BDD-11D0-821E-444553540000}")
          }, function() {
              return i("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}")
          }, function() {
              return navigator.appCodeName
          }, function() {
              return navigator.appName
          }, function() {
              return navigator.appVersion
          }, function() {
              return u(["navigator.productSub", "navigator.appMinorVersion"])
          }, function() {
              return navigator.browserLanguage
          }, function() {
              return navigator.cookieEnabled
          }, function() {
              return u(["navigator.oscpu", "navigator.cpuClass"])
          }, function() {
              return navigator.onLine
          }, function() {
              return navigator.platform
          }, function() {
              return navigator.systemLanguage
          }, function() {
              return navigator.userAgent
          }, function() {
              return u(["navigator.language", "navigator.userLanguage"])
          }, function() {
              return undefined
          }, function() {
              return 'iforgot.apple.com'
          }, function() {
              return undefined
          }, function() {
              return undefined
          }, function() {
              return undefined
          }, function() {
              return undefined
          }, function() {
              return 0 !== Math.abs(p - q)
          }, function() {
              return C(c)
          }, function() {
              return "@UTC@"
          }, function() {
              var e = 0;
              return e = 0,
                  C(c) && (e = Math.abs(p - q)),
                  e = -(c.getTimezoneOffset() + e) / 60;
          }, function() {
              return new Date(2005, 5, 7, 21, 33, 44, 888).toLocaleString()
          }, function() {
              return 393
          }, function() {
              return 851
          }, function() {
              return n.Acrobat
          }, function() {
              return n.Flash
          }, function() {
              return n.QuickTime
          }, function() {
              return n["Java Plug-in"]
          }, function() {
              return n.Director
          }, function() {
              return n.Office
          }, function() {
              return "@CT@"
          }, function() {
              return p
          }, function() {
              return q
          }, function() {
              return c.toLocaleString()
          }, function() {
              return 24
          }, function() {
              return 393
          }, function() {
              return 851
          }, function() {
              return 0
          }, function() {
              return 0
          }, function() {
              return g("Acrobat")
          }, function() {
              return g("Adobe SVG")
          }, function() {
              return g("Authorware")
          }, function() {
              return g("Citrix ICA")
          }, function() {
              return g("Director")
          }, function() {
              return g("Flash")
          }, function() {
              return g("MapGuide")
          }, function() {
              return g("MetaStream")
          }, function() {
              return g("PDFViewer")
          }, function() {
              return g("QuickTime")
          }, function() {
              return g("RealOne")
          }, function() {
              return g("RealPlayer Enterprise")
          }, function() {
              return g("RealPlayer Plugin")
          }, function() {
              return g("Seagate Software Report")
          }, function() {
              return g("Silverlight")
          }, function() {
              return g("Windows Media")
          }, function() {
              return g("iPIX")
          }, function() {
              return g("nppdf.so")
          }, function() {
              var e = document.createElement("span");
              e.innerHTML = "&nbsp;",
                  e.style.position = "absolute",
                  e.style.left = "-9999px",
                  document.body.appendChild(e);
              var t = e.offsetHeight;
              return document.body.removeChild(e),
                  t
          }, k(), k(), k(), k(), k(), k(), k(), k(), k(), k(), k(), k(), k(), k(), function() {
              return "5.6.1-0"
          }, k()];
      F();
      for (var f = "", d = 0; d < e.length; d++) {
          a && (f += v(e[d].toString(), '"', "'", !0),
              f += "=");
          var h;
          try {
              h = e[d](this)
          } catch (l) {
              h = ""
          }
          f += a ? h : escape(h),
              f += ";",
              a && (f += "\\n")
      }
      return f = v(f, escape("@UTC@"), (new Date).getTime()),
          f = v(f, escape("@CT@"), (new Date).getTime() - b.getTime()),
          D && w ? w(f) : f
  }

  function v(e, t, n, r) {
      "boolean" != typeof r && (r = !1);
      for (var a, i = !0;
          (a = e.indexOf(t)) >= 0 && (r || i);)
          e = e.substr(0, a) + n + e.substr(a + t.length),
          i = !1;
      return e
  }

  function C(e) {
      var t = Math.min(p, q);
      return 0 !== Math.abs(p - q) && e.getTimezoneOffset() === t
  }

  function F() {
      for (var e = ["Acrobat", "Flash", "QuickTime", "Java Plug-in", "Director", "Office"], t = 0; t < e.length; t++) {
          var r = e[t],
              a = n,
              i = r,
              o = r;
          r = "";
          try {
              if (navigator.plugins && navigator.plugins.length) {
                  var s = RegExp(o + ".* ([0-9._]+)");
                  for (o = 0; o < navigator.plugins.length; o++) {
                      var u = s.exec(navigator.plugins[o].name);
                      null === u && (u = s.exec(navigator.plugins[o].description)),
                          u && (r = u[1])
                  }
              } else if (window.ActiveXObject && x[o])
                  try {
                      var l = new ActiveXObject(x[o][0]);
                      r = x[o][1](l)
                  } catch (c) {
                      r = ""
                  }
          } catch (d) {
              r = d.message
          }
          a[i] = r
      }
  }

  function u(a) {
      for (var c = 0; c < a.length; c++)
          try {
              var b = eval(a[c]);
              if (b)
                  return b
          } catch (e) {}
      return ""
  }

  function i(e) {
      var t = "";
      try {
          "undefined" != typeof o.a.getComponentVersion && (t = o.a.getComponentVersion(e, "ComponentID"))
      } catch (n) {
          e = n.message.length,
              e = e > 40 ? 40 : e,
              t = escape(n.message.substr(0, e))
      }
      return t
  }

  function t(e) {
      return function() {
          return e
      }
  }

  function G(e) {
      function t(e) {
          for (r = r << e[0] | e[1],
              a += e[0]; a >= 6;)
              e = r >> a - 6 & 63,
              n += s.substring(e, e + 1),
              a -= 6,
              r ^= e << a
      }
      var n = "",
          r = 0,
          a = 0;
      t([6, (7 & e.length) << 3 | 0]),
          t([6, 56 & e.length | 1]);
      for (var i = 0; i < e.length; i++) {
          if (void 0 == y[e.charCodeAt(i)])
              return;
          t(y[e.charCodeAt(i)])
      }
      return t(y[0]),
          a > 0 && t([6 - a, 0]),
          n
  }

  function w(e) {
      for (var t = G, n = e, r = 0; E[r]; r++)
          n = n.split(E[r]).join(String.fromCharCode(r + 1));
      if (t = t(n),
          void 0 == t)
          return e;
      for (n = 65535,
          r = 0; r < e.length; r++)
          n = 65535 & (n >>> 8 | n << 8),
          n ^= 255 & e.charCodeAt(r),
          n ^= (255 & n) >> 4,
          n ^= n << 12 & 65535,
          n ^= (255 & n) << 5 & 65535;
      return n &= 65535,
          e = "",
          e += s.charAt(n >>> 12),
          e += s.charAt(n >>> 6 & 63),
          e += s.charAt(63 & n),
          t += e
  }
  options = m || {};
  memek = {}
  m = memek;
  var D = options.hasOwnProperty("compress") ? options.compress : !0,
      o = {},
      p = new Date(2005, 0, 15).getTimezoneOffset(),
      q = new Date(2005, 6, 15).getTimezoneOffset(),
      n = [],
      k = t(""),
      x = {
          Flash: ["ShockwaveFlash.ShockwaveFlash", function(e) {
              return e.getVariable("$version")
          }],
          Director: ["SWCtl.SWCtl", function(e) {
              return e.ShockwaveVersion("")
          }]
      };
  try {
      o.a = document.createElement("span"),
          "undefined" != typeof o.a.addBehavior && o.a.addBehavior("#default#clientCaps")
  } catch (H) {}
  n = {};
  var y = {
          1: [4, 15],
          110: [8, 239],
          74: [8, 238],
          57: [7, 118],
          56: [7, 117],
          71: [8, 233],
          25: [8, 232],
          101: [5, 28],
          104: [7, 111],
          4: [7, 110],
          105: [6, 54],
          5: [7, 107],
          109: [7, 106],
          103: [9, 423],
          82: [9, 422],
          26: [8, 210],
          6: [7, 104],
          46: [6, 51],
          97: [6, 50],
          111: [6, 49],
          7: [7, 97],
          45: [7, 96],
          59: [5, 23],
          15: [7, 91],
          11: [8, 181],
          72: [8, 180],
          27: [8, 179],
          28: [8, 178],
          16: [7, 88],
          88: [10, 703],
          113: [11, 1405],
          89: [12, 2809],
          107: [13, 5617],
          90: [14, 11233],
          42: [15, 22465],
          64: [16, 44929],
          0: [16, 44928],
          81: [9, 350],
          29: [8, 174],
          118: [8, 173],
          30: [8, 172],
          98: [8, 171],
          12: [8, 170],
          99: [7, 84],
          117: [6, 41],
          112: [6, 40],
          102: [9, 319],
          68: [9, 318],
          31: [8, 158],
          100: [7, 78],
          84: [6, 38],
          55: [6, 37],
          17: [7, 73],
          8: [7, 72],
          9: [7, 71],
          77: [7, 70],
          18: [7, 69],
          65: [7, 68],
          48: [6, 33],
          116: [6, 32],
          10: [7, 63],
          121: [8, 125],
          78: [8, 124],
          80: [7, 61],
          69: [7, 60],
          119: [7, 59],
          13: [8, 117],
          79: [8, 116],
          19: [7, 57],
          67: [7, 56],
          114: [6, 27],
          83: [6, 26],
          115: [6, 25],
          14: [6, 24],
          122: [8, 95],
          95: [8, 94],
          76: [7, 46],
          24: [7, 45],
          37: [7, 44],
          50: [5, 10],
          51: [5, 9],
          108: [6, 17],
          22: [7, 33],
          120: [8, 65],
          66: [8, 64],
          21: [7, 31],
          106: [7, 30],
          47: [6, 14],
          53: [5, 6],
          49: [5, 5],
          86: [8, 39],
          85: [8, 38],
          23: [7, 18],
          75: [7, 17],
          20: [7, 16],
          2: [5, 3],
          73: [8, 23],
          43: [9, 45],
          87: [9, 44],
          70: [7, 10],
          3: [6, 4],
          52: [5, 1],
          54: [5, 0]
      },
      E = ["%20", ";;;", "%3B", "%2C", "und", "fin", "ed;", "%28", "%29", "%3A", "/53", "ike", "Web", "0;", ".0", "e;", "on", "il", "ck", "01", "in", "Mo", "fa", "00", "32", "la", ".1", "ri", "it", "%u", "le"],
      s = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
  o.appidmsform = z,
      o.f1b5 = w,
      m.appidmsparm = o,
      D && (m = navigator.userAgent.toLowerCase(),
          "Gecko" === navigator.product && parseInt(m.substring(m.indexOf("rv:") + 3, m.indexOf(")", m.indexOf("rv:") + 3)).split(".")[0]) <= 2 && z())
})();

function generate() {
  return memek.appidmsparm.appidmsform();
}

generate()