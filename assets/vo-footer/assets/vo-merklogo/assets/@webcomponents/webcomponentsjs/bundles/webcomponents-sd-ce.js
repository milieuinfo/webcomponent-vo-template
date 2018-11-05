/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  /*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var n,
      aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
  },
      p = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;function ba() {
    ba = function () {};p.Symbol || (p.Symbol = ca);
  }var ca = function () {
    var a = 0;return function (b) {
      return "jscomp_symbol_" + (b || "") + a++;
    };
  }();
  function da() {
    ba();var a = p.Symbol.iterator;a || (a = p.Symbol.iterator = p.Symbol("iterator"));"function" != typeof Array.prototype[a] && aa(Array.prototype, a, { configurable: !0, writable: !0, value: function () {
        return ea(this);
      } });da = function () {};
  }function ea(a) {
    var b = 0;return fa(function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }function fa(a) {
    da();a = { next: a };a[p.Symbol.iterator] = function () {
      return this;
    };return a;
  }function ha(a) {
    da();ba();da();var b = a[Symbol.iterator];return b ? b.call(a) : ea(a);
  }
  function ia(a) {
    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);return c;
  }function ja() {
    this.ha = this.root = null;this.R = !1;this.w = this.L = this.$ = this.assignedSlot = this.assignedNodes = this.D = null;this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.G = void 0;this.ma = this.da = !1;this.K = {};
  }ja.prototype.toJSON = function () {
    return {};
  };function q(a) {
    a.Y || (a.Y = new ja());return a.Y;
  }function r(a) {
    return a && a.Y;
  };var t = window.ShadyDOM || {};t.xa = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var ka = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");t.s = !!(ka && ka.configurable && ka.get);t.aa = t.force || !t.xa;var na = navigator.userAgent.match("Trident"),
      oa = navigator.userAgent.match("Edge");void 0 === t.ja && (t.ja = t.s && (na || oa));function u(a) {
    return (a = r(a)) && void 0 !== a.firstChild;
  }function v(a) {
    return "ShadyRoot" === a.ra;
  }function pa(a) {
    a = a.getRootNode();if (v(a)) return a;
  }
  var qa = Element.prototype,
      ra = qa.matches || qa.matchesSelector || qa.mozMatchesSelector || qa.msMatchesSelector || qa.oMatchesSelector || qa.webkitMatchesSelector;function sa(a, b) {
    if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e = void 0; d < c.length && (e = c[d]); d++) {
      var f = e,
          g = a,
          h = Object.getOwnPropertyDescriptor(b, f);h && Object.defineProperty(g, f, h);
    }
  }function ta(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];for (d = 0; d < c.length; d++) sa(a, c[d]);return a;
  }
  function ua(a, b) {
    for (var c in b) a[c] = b[c];
  }var va = document.createTextNode(""),
      wa = 0,
      xa = [];new MutationObserver(function () {
    for (; xa.length;) try {
      xa.shift()();
    } catch (a) {
      throw va.textContent = wa++, a;
    }
  }).observe(va, { characterData: !0 });function ya(a) {
    xa.push(a);va.textContent = wa++;
  }var za = !!document.contains;function Aa(a, b) {
    for (; b;) {
      if (b == a) return !0;b = b.parentNode;
    }return !1;
  }
  function Ba(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
          d = c.getAttribute("id") || c.getAttribute("name");d && "length" !== d && isNaN(d) && (a[d] = c);
    }a.item = function (b) {
      return a[b];
    };a.namedItem = function (b) {
      if ("length" !== b && isNaN(b) && a[b]) return a[b];for (var c = ha(a), d = c.next(); !d.done; d = c.next()) if (d = d.value, (d.getAttribute("id") || d.getAttribute("name")) == b) return d;return null;
    };return a;
  };var Ca = [],
      Da;function Ea(a) {
    Da || (Da = !0, ya(Fa));Ca.push(a);
  }function Fa() {
    Da = !1;for (var a = !!Ca.length; Ca.length;) Ca.shift()();return a;
  }Fa.list = Ca;function Ga() {
    this.a = !1;this.addedNodes = [];this.removedNodes = [];this.O = new Set();
  }function Ha(a) {
    a.a || (a.a = !0, ya(function () {
      a.flush();
    }));
  }Ga.prototype.flush = function () {
    if (this.a) {
      this.a = !1;var a = this.takeRecords();a.length && this.O.forEach(function (b) {
        b(a);
      });
    }
  };Ga.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Ia(a, b) {
    var c = q(a);c.D || (c.D = new Ga());c.D.O.add(b);var d = c.D;return { qa: b, B: d, sa: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Ja(a) {
    var b = a && a.B;b && (b.O.delete(a.qa), b.O.size || (q(a.sa).D = null));
  }
  function Ka(a, b) {
    var c = b.getRootNode();return a.map(function (a) {
      var b = c === a.target.getRootNode();if (b && a.addedNodes) {
        if (b = Array.from(a.addedNodes).filter(function (a) {
          return c === a.getRootNode();
        }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", { value: b, configurable: !0 }), a;
      } else if (b) return a;
    }).filter(function (a) {
      return a;
    });
  };var La = Element.prototype.insertBefore,
      Ma = Element.prototype.replaceChild,
      Na = Element.prototype.removeChild,
      Oa = Element.prototype.setAttribute,
      Pa = Element.prototype.removeAttribute,
      Ra = Element.prototype.cloneNode,
      Sa = Document.prototype.importNode,
      Ta = Element.prototype.addEventListener,
      Ua = Element.prototype.removeEventListener,
      Va = Window.prototype.addEventListener,
      Wa = Window.prototype.removeEventListener,
      Xa = Element.prototype.dispatchEvent,
      Ya = Node.prototype.contains || HTMLElement.prototype.contains,
      Za = Document.prototype.getElementById,
      $a = Element.prototype.querySelector,
      ab = DocumentFragment.prototype.querySelector,
      bb = Document.prototype.querySelector,
      cb = Element.prototype.querySelectorAll,
      db = DocumentFragment.prototype.querySelectorAll,
      eb = Document.prototype.querySelectorAll,
      x = {};x.appendChild = Element.prototype.appendChild;x.insertBefore = La;x.replaceChild = Ma;x.removeChild = Na;x.setAttribute = Oa;x.removeAttribute = Pa;x.cloneNode = Ra;x.importNode = Sa;x.addEventListener = Ta;x.removeEventListener = Ua;x.Ja = Va;x.Ka = Wa;x.dispatchEvent = Xa;
  x.contains = Ya;x.getElementById = Za;x.Sa = $a;x.Va = ab;x.Qa = bb;x.querySelector = function (a) {
    switch (this.nodeType) {case Node.ELEMENT_NODE:
        return $a.call(this, a);case Node.DOCUMENT_NODE:
        return bb.call(this, a);default:
        return ab.call(this, a);}
  };x.Ta = cb;x.Wa = db;x.Ra = eb;x.querySelectorAll = function (a) {
    switch (this.nodeType) {case Node.ELEMENT_NODE:
        return cb.call(this, a);case Node.DOCUMENT_NODE:
        return eb.call(this, a);default:
        return db.call(this, a);}
  };var fb = /[&\u00A0"]/g,
      gb = /[&\u00A0<>]/g;function hb(a) {
    switch (a) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case '"':
        return "&quot;";case "\u00a0":
        return "&nbsp;";}
  }function ib(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;return b;
  }var jb = ib("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
      kb = ib("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function lb(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;var k = a,
            l = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            k = h.localName;for (var m = "<" + k, w = h.attributes, la = 0, ma; ma = w[la]; la++) m += " " + ma.name + '="' + ma.value.replace(fb, hb) + '"';m += ">";h = jb[k] ? m : m + lb(h, l) + "</" + k + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = k && kb[k.localName] ? h : h.replace(gb, hb);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  };var y = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      z = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);function mb(a) {
    var b = [];y.currentNode = a;for (a = y.firstChild(); a;) b.push(a), a = y.nextSibling();return b;
  }
  var A = { parentNode: function (a) {
      y.currentNode = a;return y.parentNode();
    }, firstChild: function (a) {
      y.currentNode = a;return y.firstChild();
    }, lastChild: function (a) {
      y.currentNode = a;return y.lastChild();
    }, previousSibling: function (a) {
      y.currentNode = a;return y.previousSibling();
    }, nextSibling: function (a) {
      y.currentNode = a;return y.nextSibling();
    } };A.childNodes = mb;A.parentElement = function (a) {
    z.currentNode = a;return z.parentNode();
  };A.firstElementChild = function (a) {
    z.currentNode = a;return z.firstChild();
  };
  A.lastElementChild = function (a) {
    z.currentNode = a;return z.lastChild();
  };A.previousElementSibling = function (a) {
    z.currentNode = a;return z.previousSibling();
  };A.nextElementSibling = function (a) {
    z.currentNode = a;return z.nextSibling();
  };A.children = function (a) {
    var b = [];z.currentNode = a;for (a = z.firstChild(); a;) b.push(a), a = z.nextSibling();return Ba(b);
  };A.innerHTML = function (a) {
    return lb(a, function (a) {
      return mb(a);
    });
  };
  A.textContent = function (a) {
    switch (a.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
        a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);for (var b = "", c; c = a.nextNode();) b += c.nodeValue;return b;default:
        return a.nodeValue;}
  };var nb = t.s,
      ob = [Node.prototype, Element.prototype, HTMLElement.prototype];function B(a) {
    var b;a: {
      for (b = 0; b < ob.length; b++) {
        var c = ob[b];if (c.hasOwnProperty(a)) {
          b = c;break a;
        }
      }b = void 0;
    }if (!b) throw Error("Could not find descriptor for " + a);return Object.getOwnPropertyDescriptor(b, a);
  }
  var C = nb ? { parentNode: B("parentNode"), firstChild: B("firstChild"), lastChild: B("lastChild"), previousSibling: B("previousSibling"), nextSibling: B("nextSibling"), childNodes: B("childNodes"), parentElement: B("parentElement"), previousElementSibling: B("previousElementSibling"), nextElementSibling: B("nextElementSibling"), innerHTML: B("innerHTML"), textContent: B("textContent"), firstElementChild: B("firstElementChild"), lastElementChild: B("lastElementChild"), children: B("children") } : {},
      pb = nb ? { firstElementChild: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "firstElementChild"), lastElementChild: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "lastElementChild"), children: Object.getOwnPropertyDescriptor(DocumentFragment.prototype, "children") } : {},
      qb = nb ? { firstElementChild: Object.getOwnPropertyDescriptor(Document.prototype, "firstElementChild"), lastElementChild: Object.getOwnPropertyDescriptor(Document.prototype, "lastElementChild"), children: Object.getOwnPropertyDescriptor(Document.prototype, "children") } : {},
      rb = { ga: C, Ua: pb, Pa: qb, parentNode: function (a) {
      return C.parentNode.get.call(a);
    },
    firstChild: function (a) {
      return C.firstChild.get.call(a);
    }, lastChild: function (a) {
      return C.lastChild.get.call(a);
    }, previousSibling: function (a) {
      return C.previousSibling.get.call(a);
    }, nextSibling: function (a) {
      return C.nextSibling.get.call(a);
    }, childNodes: function (a) {
      return Array.prototype.slice.call(C.childNodes.get.call(a));
    }, parentElement: function (a) {
      return C.parentElement.get.call(a);
    }, previousElementSibling: function (a) {
      return C.previousElementSibling.get.call(a);
    }, nextElementSibling: function (a) {
      return C.nextElementSibling.get.call(a);
    },
    innerHTML: function (a) {
      return C.innerHTML.get.call(a);
    }, textContent: function (a) {
      return C.textContent.get.call(a);
    }, children: function (a) {
      switch (a.nodeType) {case Node.DOCUMENT_FRAGMENT_NODE:
          return pb.children.get.call(a);case Node.DOCUMENT_NODE:
          return qb.children.get.call(a);default:
          return C.children.get.call(a);}
    }, firstElementChild: function (a) {
      switch (a.nodeType) {case Node.DOCUMENT_FRAGMENT_NODE:
          return pb.firstElementChild.get.call(a);case Node.DOCUMENT_NODE:
          return qb.firstElementChild.get.call(a);default:
          return C.firstElementChild.get.call(a);}
    },
    lastElementChild: function (a) {
      switch (a.nodeType) {case Node.DOCUMENT_FRAGMENT_NODE:
          return pb.lastElementChild.get.call(a);case Node.DOCUMENT_NODE:
          return qb.lastElementChild.get.call(a);default:
          return C.lastElementChild.get.call(a);}
    } };var D = t.ja ? rb : A;function sb(a) {
    for (; a.firstChild;) a.removeChild(a.firstChild);
  }
  var tb = t.s,
      ub = document.implementation.createHTMLDocument("inert"),
      vb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      wb = vb && vb.get,
      xb = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"),
      yb = { parentElement: { get: function () {
        var a = r(this);(a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : D.parentElement(this);
      }, configurable: !0 }, parentNode: { get: function () {
        var a = r(this);a = a && a.parentNode;return void 0 !== a ? a : D.parentNode(this);
      }, configurable: !0 },
    nextSibling: { get: function () {
        var a = r(this);a = a && a.nextSibling;return void 0 !== a ? a : D.nextSibling(this);
      }, configurable: !0 }, previousSibling: { get: function () {
        var a = r(this);a = a && a.previousSibling;return void 0 !== a ? a : D.previousSibling(this);
      }, configurable: !0 }, nextElementSibling: { get: function () {
        var a = r(this);if (a && void 0 !== a.nextSibling) {
          for (a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;return a;
        }return D.nextElementSibling(this);
      }, configurable: !0 }, previousElementSibling: { get: function () {
        var a = r(this);if (a && void 0 !== a.previousSibling) {
          for (a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;return a;
        }return D.previousElementSibling(this);
      }, configurable: !0 } },
      zb = { className: { get: function () {
        return this.getAttribute("class") || "";
      }, set: function (a) {
        this.setAttribute("class", a);
      }, configurable: !0 } },
      Ab = { childNodes: { get: function () {
        if (u(this)) {
          var a = r(this);if (!a.childNodes) {
            a.childNodes = [];for (var b = this.firstChild; b; b = b.nextSibling) a.childNodes.push(b);
          }var c = a.childNodes;
        } else c = D.childNodes(this);c.item = function (a) {
          return c[a];
        };return c;
      }, configurable: !0 }, childElementCount: { get: function () {
        return this.children.length;
      }, configurable: !0 }, firstChild: { get: function () {
        var a = r(this);a = a && a.firstChild;return void 0 !== a ? a : D.firstChild(this);
      }, configurable: !0 }, lastChild: { get: function () {
        var a = r(this);a = a && a.lastChild;return void 0 !== a ? a : D.lastChild(this);
      }, configurable: !0 }, textContent: { get: function () {
        if (u(this)) {
          for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);return a.join("");
        }return D.textContent(this);
      }, set: function (a) {
        if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
            if (!u(this) && tb) {
              var b = this.firstChild;(b != this.lastChild || b && b.nodeType != Node.TEXT_NODE) && sb(this);rb.ga.textContent.set.call(this, a);
            } else sb(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.appendChild(document.createTextNode(a));break;default:
            this.nodeValue = a;}
      }, configurable: !0 }, firstElementChild: { get: function () {
        var a = r(this);if (a && void 0 !== a.firstChild) {
          for (a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;return a;
        }return D.firstElementChild(this);
      }, configurable: !0 }, lastElementChild: { get: function () {
        var a = r(this);if (a && void 0 !== a.lastChild) {
          for (a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;return a;
        }return D.lastElementChild(this);
      }, configurable: !0 }, children: { get: function () {
        return u(this) ? Ba(Array.prototype.filter.call(this.childNodes, function (a) {
          return a.nodeType === Node.ELEMENT_NODE;
        })) : D.children(this);
      }, configurable: !0 }, innerHTML: { get: function () {
        return u(this) ? lb("template" === this.localName ? this.content : this) : D.innerHTML(this);
      }, set: function (a) {
        var b = "template" === this.localName ? this.content : this;sb(b);var c = this.localName || "div";c = this.namespaceURI && this.namespaceURI !== ub.namespaceURI ? ub.createElementNS(this.namespaceURI, c) : ub.createElement(c);tb ? rb.ga.innerHTML.set.call(c, a) : c.innerHTML = a;for (a = "template" === this.localName ? c.content : c; a.firstChild;) b.appendChild(a.firstChild);
      }, configurable: !0 } },
      Bb = { shadowRoot: { get: function () {
        var a = r(this);return a && a.ha || null;
      }, configurable: !0 } },
      Cb = { activeElement: { get: function () {
        var a = xb && xb.get ? xb.get.call(document) : t.s ? void 0 : document.activeElement;if (a && a.nodeType) {
          var b = !!v(this);if (this === document || b && this.host !== a && x.contains.call(this.host, a)) {
            for (b = pa(a); b && b !== this;) a = b.host, b = pa(a);a = this === document ? b ? null : a : b === this ? a : null;
          } else a = null;
        } else a = null;return a;
      }, set: function () {}, configurable: !0 } };
  function E(a, b, c) {
    for (var d in b) {
      var e = Object.getOwnPropertyDescriptor(a, d);e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a);
    }
  }function F(a) {
    E(a, yb);E(a, zb);E(a, Ab);E(a, Cb);
  }
  function Db() {
    var a = Eb.prototype;a.__proto__ = DocumentFragment.prototype;E(a, yb, !0);E(a, Ab, !0);E(a, Cb, !0);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  }var Fb = t.s ? function () {} : function (a) {
    var b = q(a);b.da || (b.da = !0, E(a, yb, !0), E(a, zb, !0));
  },
      Gb = t.s ? function () {} : function (a) {
    q(a).ma || (E(a, Ab, !0), E(a, Bb, !0));
  };var Hb = D.childNodes;function Ib(a, b, c) {
    Gb(b);var d = q(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      d = a.childNodes;for (var e = 0; e < d.length; e++) Jb(d[e], b, c);a = q(a);b = void 0 !== a.firstChild ? null : void 0;a.firstChild = a.lastChild = b;a.childNodes = b;
    } else Jb(a, b, c);
  }
  function Jb(a, b, c) {
    Fb(a);c = c || null;var d = q(a),
        e = q(b),
        f = c ? q(c) : null;d.previousSibling = c ? f.previousSibling : b.lastChild;if (f = r(d.previousSibling)) f.nextSibling = a;if (f = r(d.nextSibling = c)) f.previousSibling = a;d.parentNode = b;c ? c === e.firstChild && (e.firstChild = a) : (e.lastChild = a, e.firstChild || (e.firstChild = a));e.childNodes = null;
  }
  function Kb(a, b) {
    var c = q(a);b = q(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (q(a).nextSibling = d);d && (q(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function Lb(a) {
    var b = q(a);if (void 0 === b.firstChild) {
      b.childNodes = null;var c = Hb(a);b.firstChild = c[0] || null;b.lastChild = c[c.length - 1] || null;Gb(a);for (b = 0; b < c.length; b++) {
        var d = c[b],
            e = q(d);e.parentNode = a;e.nextSibling = c[b + 1] || null;e.previousSibling = c[b - 1] || null;Fb(d);
      }
    }
  };var Mb = D.parentNode;
  function Nb(a, b, c) {
    if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if (c) {
      var d = r(c);d = d && d.parentNode;if (void 0 !== d && d !== a || void 0 === d && Mb(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
    }if (c === b) return b;var e = [],
        f = Ob,
        g = pa(a),
        h = g ? g.host.localName : "";if (b.parentNode) {
      var k = Pb(b);Qb(b.parentNode, b, !!g || !(b.getRootNode() instanceof ShadowRoot));
      f = function (a, b) {
        G() && (Rb(a, k), Ob(a, b));
      };
    }d = !0;var l = !Sb(b, h);!g || b.__noInsertionPoint && !l || Tb(b, function (a) {
      "slot" === a.localName && e.push(a);l && f(a, h);
    });e.length && Ub(g, e);("slot" === a.localName || e.length) && g && H(g);u(a) && (Ib(b, a, c), g = r(a), Vb(a) ? (H(g.root), d = !1) : g.root && (d = !1));d ? (d = v(a) ? a.host : a, c ? (c = Wb(c), x.insertBefore.call(d, b, c)) : x.appendChild.call(d, b)) : b.ownerDocument !== a.ownerDocument && a.ownerDocument.adoptNode(b);Xb(a, b);return b;
  }
  function Qb(a, b, c) {
    c = void 0 === c ? !1 : c;if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b);var d = pa(b),
        e = r(a);if (u(a) && (Kb(b, a), Vb(a))) {
      H(e.root);var f = !0;
    }if (G() && !c && d) {
      var g = Pb(b);Tb(b, function (a) {
        Rb(a, g);
      });
    }Yb(b);if (d) {
      var h = a && "slot" === a.localName;h && (f = !0);((c = Zb(d, b)) || h) && H(d);
    }f || (f = v(a) ? a.host : a, (!e.root && "slot" !== b.localName || f === Mb(b)) && x.removeChild.call(f, b));Xb(a, null, b);return b;
  }
  function Yb(a) {
    var b = r(a);if (b && void 0 !== b.G) {
      b = a.childNodes;for (var c = 0, d = b.length, e = void 0; c < d && (e = b[c]); c++) Yb(e);
    }if (a = r(a)) a.G = void 0;
  }function Wb(a) {
    var b = a;a && "slot" === a.localName && (b = (b = (b = r(a)) && b.w) && b.length ? b[0] : Wb(a.nextSibling));return b;
  }function Vb(a) {
    return (a = (a = r(a)) && a.root) && $b(a);
  }
  function ac(a, b) {
    if ("slot" === b) a = a.parentNode, Vb(a) && H(r(a).root);else if ("slot" === a.localName && "name" === b && (b = pa(a))) {
      if (b.g) {
        bc(b);var c = a.pa,
            d = cc(a);if (d !== c) {
          c = b.h[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.h[d] || (b.h[d] = []);c.push(a);1 < c.length && (b.h[d] = dc(c));
        }
      }H(b);
    }
  }function Xb(a, b, c) {
    if (a = (a = r(a)) && a.D) b && a.addedNodes.push(b), c && a.removedNodes.push(c), Ha(a);
  }
  function ec(a) {
    if (a && a.nodeType) {
      var b = q(a),
          c = b.G;void 0 === c && (v(a) ? (c = a, b.G = c) : (c = (c = a.parentNode) ? ec(c) : a, x.contains.call(document.documentElement, a) && (b.G = c)));return c;
    }
  }function fc(a, b, c) {
    var d = [];gc(a.childNodes, b, c, d);return d;
  }function gc(a, b, c, d) {
    for (var e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) {
      var h;if (h = g.nodeType === Node.ELEMENT_NODE) {
        h = g;var k = b,
            l = c,
            m = d,
            w = k(h);w && m.push(h);l && l(w) ? h = w : (gc(h.childNodes, k, l, m), h = void 0);
      }if (h) break;
    }
  }var hc = null;
  function G() {
    hc || (hc = window.ShadyCSS && window.ShadyCSS.ScopingShim);return hc || null;
  }function ic(a, b, c) {
    var d = G();d && "class" === b ? d.setElementClass(a, c) : (x.setAttribute.call(a, b, c), ac(a, b));
  }function jc(a, b) {
    if (a.ownerDocument !== document || "template" === a.localName) return x.importNode.call(document, a, b);var c = x.importNode.call(document, a, !1);if (b) {
      a = a.childNodes;b = 0;for (var d; b < a.length; b++) d = jc(a[b], !0), c.appendChild(d);
    }return c;
  }function Ob(a, b) {
    var c = G();c && c.scopeNode(a, b);
  }
  function Rb(a, b) {
    var c = G();c && c.unscopeNode(a, b);
  }function Sb(a, b) {
    var c = G();if (!c) return !0;if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;for (var d = 0; c && d < a.childNodes.length; d++) c = c && Sb(a.childNodes[d], b);return c;
    }return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }function Pb(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";var b = G();return b ? b.currentScopeForNode(a) : "";
  }
  function Tb(a, b) {
    if (a) {
      a.nodeType === Node.ELEMENT_NODE && b(a);for (var c = 0, d; c < a.childNodes.length; c++) d = a.childNodes[c], d.nodeType === Node.ELEMENT_NODE && Tb(d, b);
    }
  };var kc = "__eventWrappers" + Date.now(),
      lc = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");return a ? function (b) {
      return a.get.call(b);
    } : null;
  }(),
      mc = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0,
    pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0, drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
      nc = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };
  function oc(a, b) {
    var c = [],
        d = a;for (a = a === window ? window : a.getRootNode(); d;) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;c[c.length - 1] === document && c.push(window);return c;
  }function pc(a, b) {
    if (!v) return a;a = oc(a, !0);for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (g = a.indexOf(f), e = f), !v(f) || -1 < g) return d;
  }
  var qc = { get composed() {
      void 0 === this.J && (lc ? this.J = "focusin" === this.type || "focusout" === this.type || lc(this) : !1 !== this.isTrusted && (this.J = mc[this.type]));return this.J || !1;
    }, composedPath: function () {
      this.ca || (this.ca = oc(this.__target, this.composed));return this.ca;
    }, get target() {
      return pc(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    }, get relatedTarget() {
      if (!this.X) return null;this.ea || (this.ea = oc(this.X, !0));return pc(this.currentTarget || this.__previousCurrentTarget, this.ea);
    },
    stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);this.W = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.W = this.la = !0;
    } };function rc(a) {
    function b(b, d) {
      b = new a(b, d);b.J = d && !!d.composed;return b;
    }ua(b, a);b.prototype = a.prototype;return b;
  }var sc = { focus: !0, blur: !0 };function tc(a) {
    return a.__target !== a.target || a.X !== a.relatedTarget;
  }
  function uc(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!tc(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.la); d++);
  }
  function vc(a) {
    var b = a.composedPath();Object.defineProperty(a, "currentTarget", { get: function () {
        return d;
      }, configurable: !0 });for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c];uc(a, d, "capture");if (a.W) return;
    }Object.defineProperty(a, "eventPhase", { get: function () {
        return Event.AT_TARGET;
      } });var e;for (c = 0; c < b.length; c++) {
      d = b[c];var f = r(d);f = f && f.root;if (0 === c || f && f === e) if (uc(a, d, "bubble"), d !== window && (e = d.getRootNode()), a.W) break;
    }
  }
  function wc(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          k = h.type,
          l = h.capture,
          m = h.once,
          w = h.passive;if (b === h.node && c === k && d === l && e === m && f === w) return g;
    }return -1;
  }
  function xc(a, b, c) {
    if (b) {
      var d = typeof b;if ("function" === d || "object" === d) if ("object" !== d || b.handleEvent && "function" === typeof b.handleEvent) {
        var e = this instanceof Window ? x.Ja : x.addEventListener;if (nc[a]) return e.call(this, a, b, c);if (c && "object" === typeof c) {
          var f = !!c.capture;var g = !!c.once;var h = !!c.passive;
        } else f = !!c, h = g = !1;var k = c && c.Z || this,
            l = b[kc];if (l) {
          if (-1 < wc(l, k, a, f, g, h)) return;
        } else b[kc] = [];l = function (e) {
          g && this.removeEventListener(a, b, c);e.__target || yc(e);if (k !== this) {
            var f = Object.getOwnPropertyDescriptor(e, "currentTarget");Object.defineProperty(e, "currentTarget", { get: function () {
                return k;
              }, configurable: !0 });
          }e.__previousCurrentTarget = e.currentTarget;if (!v(k) || -1 != e.composedPath().indexOf(k)) if (e.composed || -1 < e.composedPath().indexOf(k)) if (tc(e) && e.target === e.relatedTarget) e.eventPhase === Event.BUBBLING_PHASE && e.stopImmediatePropagation();else if (e.eventPhase === Event.CAPTURING_PHASE || e.bubbles || e.target === k || k instanceof Window) {
            var h = "function" === d ? b.call(k, e) : b.handleEvent && b.handleEvent(e);k !== this && (f ? (Object.defineProperty(e, "currentTarget", f), f = null) : delete e.currentTarget);return h;
          }
        };b[kc].push({ node: k, type: a, capture: f, once: g, passive: h, La: l });sc[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][f ? "capture" : "bubble"].push(l)) : e.call(this, a, l, c);
      }
    }
  }
  function zc(a, b, c) {
    if (b) {
      var d = this instanceof Window ? x.Ka : x.removeEventListener;if (nc[a]) return d.call(this, a, b, c);if (c && "object" === typeof c) {
        var e = !!c.capture;var f = !!c.once;var g = !!c.passive;
      } else e = !!c, g = f = !1;var h = c && c.Z || this,
          k = void 0;var l = null;try {
        l = b[kc];
      } catch (m) {}l && (f = wc(l, h, a, e, f, g), -1 < f && (k = l.splice(f, 1)[0].La, l.length || (b[kc] = void 0)));d.call(this, a, k || b, c);k && sc[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][e ? "capture" : "bubble"], k = a.indexOf(k), -1 < k && a.splice(k, 1));
    }
  }
  function Ac() {
    for (var a in sc) window.addEventListener(a, function (a) {
      a.__target || (yc(a), vc(a));
    }, !0);
  }function yc(a) {
    a.__target = a.target;a.X = a.relatedTarget;if (t.s) {
      var b = Object.getPrototypeOf(a);if (!b.hasOwnProperty("__patchProto")) {
        var c = Object.create(b);c.Ma = b;sa(c, qc);b.__patchProto = c;
      }a.__proto__ = b.__patchProto;
    } else sa(a, qc);
  }var Bc = rc(window.Event),
      Cc = rc(window.CustomEvent),
      Dc = rc(window.MouseEvent);
  function Ec() {
    window.Event = Bc;window.CustomEvent = Cc;window.MouseEvent = Dc;Ac();if (!lc && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var a = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });this.dispatchEvent(a);
      };Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  };function Fc(a, b) {
    return { index: a, H: [], N: b };
  }
  function Gc(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        k = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;g = k;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var l = c.length, m = 0; m < k - g && Hc(a[--h], c[--l]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Fc(e, 0); f < d;) b.H.push(c[f++]);return [b];
    }if (f == d) return [Fc(e, b - e)];k = e;g = f;d = d - g + 1;h = b - k + 1;b = Array(d);for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;for (l = 0; l < h; l++) b[0][l] = l;for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];else {
      var w = b[l - 1][m] + 1,
          la = b[l][m - 1] + 1;b[l][m] = w < la ? w : la;
    }k = b.length - 1;g = b[0].length - 1;d = b[k][g];for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], w = l < m ? l < h ? l : h : m < h ? m : h, w == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : w == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));a.reverse();b = void 0;k = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (k.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Fc(e, 0));b.N++;e++;b.H.push(c[f]);f++;break;case 2:
        b || (b = Fc(e, 0));b.N++;e++;break;case 3:
        b || (b = Fc(e, 0)), b.H.push(c[f]), f++;}b && k.push(b);return k;
  }function Hc(a, b) {
    return a === b;
  };var Ic = D.parentNode,
      Jc = D.childNodes,
      Kc = {},
      I = t.deferConnectionCallbacks && "loading" === document.readyState,
      Lc;function Mc(a) {
    var b = [];do b.unshift(a); while (a = a.parentNode);return b;
  }
  function Eb(a, b, c) {
    if (a !== Kc) throw new TypeError("Illegal constructor");this.ra = "ShadyRoot";this.host = b;this.c = c && c.mode;Lb(b);a = q(b);a.root = this;a.ha = "closed" !== this.c ? this : null;a = q(this);a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;a.childNodes = [];this.b = this.M = !1;this.a = this.h = this.g = null;H(this);
  }function H(a) {
    a.M || (a.M = !0, Ea(function () {
      return Nc(a);
    }));
  }
  function Nc(a) {
    for (var b; a;) {
      a.M && (b = a);a: {
        var c = a;a = c.host.getRootNode();if (v(a)) for (var d = c.host.childNodes, e = 0; e < d.length; e++) if (c = d[e], "slot" == c.localName) break a;a = void 0;
      }
    }b && b._renderRoot();
  }
  Eb.prototype._renderRoot = function () {
    var a = I;I = !0;this.M = !1;if (this.g) {
      bc(this);for (var b = 0, c; b < this.g.length; b++) {
        c = this.g[b];var d = r(c),
            e = d.assignedNodes;d.assignedNodes = [];d.w = [];if (d.$ = e) for (d = 0; d < e.length; d++) {
          var f = r(e[d]);f.L = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.firstChild; b; b = b.nextSibling) Oc(this, b);for (b = 0; b < this.g.length; b++) {
        c = this.g[b];e = r(c);if (!e.assignedNodes.length) for (d = c.firstChild; d; d = d.nextSibling) Oc(this, d, c);(d = (d = r(c.parentNode)) && d.root) && $b(d) && d._renderRoot();Pc(this, e.w, e.assignedNodes);if (d = e.$) {
          for (f = 0; f < d.length; f++) r(d[f]).L = null;e.$ = null;d.length > e.assignedNodes.length && (e.R = !0);
        }e.R && (e.R = !1, Qc(this, c));
      }c = this.g;b = [];for (e = 0; e < c.length; e++) d = c[e].parentNode, (f = r(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];f = f.childNodes;for (var g = 0; g < f.length; g++) {
          var h = f[g];if ("slot" == h.localName) {
            h = r(h).w;for (var k = 0; k < h.length; k++) d.push(h[k]);
          } else d.push(h);
        }f = Jc(e);g = Gc(d, d.length, f, f.length);k = h = 0;for (var l = void 0; h < g.length && (l = g[h]); h++) {
          for (var m = 0, w = void 0; m < l.H.length && (w = l.H[m]); m++) Ic(w) === e && x.removeChild.call(e, w), f.splice(l.index + k, 1);k -= l.N;
        }k = 0;for (l = void 0; k < g.length && (l = g[k]); k++) for (h = f[l.index], m = l.index; m < l.index + l.N; m++) w = d[m], x.insertBefore.call(e, w, h), f.splice(m, 0, w);
      }
    }if (!this.b) for (b = this.host.childNodes, c = 0, e = b.length; c < e; c++) d = b[c], f = r(d), Ic(d) !== this.host || "slot" !== d.localName && f.assignedSlot || x.removeChild.call(this.host, d);this.b = !0;I = a;Lc && Lc();
  };
  function Oc(a, b, c) {
    var d = q(b),
        e = d.L;d.L = null;c || (c = (a = a.h[b.slot || "__catchall"]) && a[0]);c ? (q(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (q(d.assignedSlot).R = !0);
  }function Pc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = r(e).assignedNodes;f && f.length && Pc(a, b, f);
    } else b.push(c[d]);
  }function Qc(a, b) {
    x.dispatchEvent.call(b, new Event("slotchange"));b = r(b);b.assignedSlot && Qc(a, b.assignedSlot);
  }
  function Ub(a, b) {
    a.a = a.a || [];a.g = a.g || [];a.h = a.h || {};a.a.push.apply(a.a, b instanceof Array ? b : ia(ha(b)));
  }function bc(a) {
    if (a.a && a.a.length) {
      for (var b = a.a, c, d = 0; d < b.length; d++) {
        var e = b[d];Lb(e);Lb(e.parentNode);var f = cc(e);a.h[f] ? (c = c || {}, c[f] = !0, a.h[f].push(e)) : a.h[f] = [e];a.g.push(e);
      }if (c) for (var g in c) a.h[g] = dc(a.h[g]);a.a = [];
    }
  }function cc(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.pa = b;
  }
  function dc(a) {
    return a.sort(function (a, c) {
      a = Mc(a);for (var b = Mc(c), e = 0; e < a.length; e++) {
        c = a[e];var f = b[e];if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f);
      }
    });
  }function Zb(a, b) {
    if (a.g) {
      bc(a);var c = a.h,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (Aa(b, g)) {
          e.splice(f, 1);var h = a.g.indexOf(g);0 <= h && a.g.splice(h, 1);f--;g = r(g);if (h = g.w) for (var k = 0; k < h.length; k++) {
            var l = h[k],
                m = Ic(l);m && x.removeChild.call(m, l);
          }g.w = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }
  function $b(a) {
    bc(a);return !(!a.g || !a.g.length);
  }
  if (window.customElements && t.aa) {
    var Rc = new Map();Lc = function () {
      var a = Array.from(Rc);Rc.clear();a = ha(a);for (var b = a.next(); !b.done; b = a.next()) {
        b = ha(b.value);var c = b.next().value;b.next().value ? c.na() : c.oa();
      }
    };I && document.addEventListener("readystatechange", function () {
      I = !1;Lc();
    }, { once: !0 });var Sc = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.na = function () {
        I ? Rc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.oa = function () {
        I ? this.isConnected || Rc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        define = window.customElements.define;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: function (a, b) {
        var c = b.prototype.connectedCallback,
            d = b.prototype.disconnectedCallback;define.call(window.customElements, a, Sc(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
      } });
  };function Tc(a) {
    var b = a.getRootNode();v(b) && Nc(b);return (a = r(a)) && a.assignedSlot || null;
  }
  var Uc = { addEventListener: xc.bind(window), removeEventListener: zc.bind(window) },
      Vc = { addEventListener: xc, removeEventListener: zc, appendChild: function (a) {
      return Nb(this, a);
    }, insertBefore: function (a, b) {
      return Nb(this, a, b);
    }, removeChild: function (a) {
      return Qb(this, a);
    }, replaceChild: function (a, b) {
      Nb(this, a, b);Qb(this, b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) var b = x.cloneNode.call(this, a);else if (b = x.cloneNode.call(this, !1), a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.childNodes;for (var c = 0, d; c < a.length; c++) d = a[c].cloneNode(!0), b.appendChild(d);
      }return b;
    }, getRootNode: function () {
      return ec(this);
    }, contains: function (a) {
      return Aa(this, a);
    }, dispatchEvent: function (a) {
      Fa();return x.dispatchEvent.call(this, a);
    } };
  Object.defineProperties(Vc, { isConnected: { get: function () {
        if (wb && wb.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;var a = this.ownerDocument;if (za) {
          if (x.contains.call(a, this)) return !0;
        } else if (a.documentElement && x.contains.call(a.documentElement, this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.parentNode || (v(a) ? a.host : void 0);return !!(a && a instanceof Document);
      }, configurable: !0 } });
  var Wc = { get assignedSlot() {
      return Tc(this);
    } },
      Xc = { querySelector: function (a) {
      return fc(this, function (b) {
        return ra.call(b, a);
      }, function (a) {
        return !!a;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(x.querySelectorAll.call(this, a));var c = this.getRootNode();return b.filter(function (a) {
          return a.getRootNode() == c;
        });
      }return fc(this, function (b) {
        return ra.call(b, a);
      });
    } },
      Yc = { assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.getRootNode();v(b) && Nc(b);return (b = r(this)) ? (a && a.flatten ? b.w : b.assignedNodes) || [] : [];
      }
    } },
      Zc = ta({ setAttribute: function (a, b) {
      ic(this, a, b);
    }, removeAttribute: function (a) {
      x.removeAttribute.call(this, a);ac(this, a);
    }, attachShadow: function (a) {
      if (!this) throw "Must provide a host.";if (!a) throw "Not enough arguments.";return new Eb(Kc, this, a);
    }, get slot() {
      return this.getAttribute("slot");
    }, set slot(a) {
      ic(this, "slot", a);
    }, get assignedSlot() {
      return Tc(this);
    } }, Xc, Yc);Object.defineProperties(Zc, Bb);
  var $c = ta({ importNode: function (a, b) {
      return jc(a, b);
    }, getElementById: function (a) {
      return fc(this, function (b) {
        return b.id == a;
      }, function (a) {
        return !!a;
      })[0] || null;
    } }, Xc);Object.defineProperties($c, { _activeElement: Cb.activeElement });
  for (var ad = HTMLElement.prototype.blur, bd = { blur: function () {
      var a = r(this);(a = (a = a && a.root) && a.activeElement) ? a.blur() : ad.call(this);
    } }, J = {}, cd = ha(Object.getOwnPropertyNames(Document.prototype)), dd = cd.next(); !dd.done; J = { m: J.m }, dd = cd.next()) J.m = dd.value, "on" === J.m.substring(0, 2) && Object.defineProperty(bd, J.m, { set: function (a) {
      return function (b) {
        var c = q(this),
            d = a.m.substring(2);c.K[a.m] && this.removeEventListener(d, c.K[a.m]);this.addEventListener(d, b, {});c.K[a.m] = b;
      };
    }(J), get: function (a) {
      return function () {
        var b = r(this);return b && b.K[a.m];
      };
    }(J), configurable: !0 });var ed = { addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.Z = this;this.host.addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.Z = this;this.host.removeEventListener(a, b, c);
    }, getElementById: function (a) {
      return fc(this, function (b) {
        return b.id == a;
      }, function (a) {
        return !!a;
      })[0] || null;
    } };
  function K(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
      var e = c[d],
          f = Object.getOwnPropertyDescriptor(b, e);f.value ? a[e] = f.value : Object.defineProperty(a, e, f);
    }
  };if (t.aa) {
    var ShadyDOM = { inUse: t.aa, patch: function (a) {
        Gb(a);Fb(a);return a;
      }, isShadyRoot: v, enqueue: Ea, flush: Fa, settings: t, filterMutations: Ka, observeChildren: Ia, unobserveChildren: Ja, nativeMethods: x, nativeTree: D, deferConnectionCallbacks: t.deferConnectionCallbacks, handlesDynamicScoping: !0 };window.ShadyDOM = ShadyDOM;Ec();var fd = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;K(Eb.prototype, ed);K(window.Node.prototype, Vc);K(window.Window.prototype, Uc);K(window.Text.prototype, Wc);
    K(window.DocumentFragment.prototype, Xc);K(window.Element.prototype, Zc);K(window.Document.prototype, $c);window.HTMLSlotElement && K(window.HTMLSlotElement.prototype, Yc);K(fd.prototype, bd);t.s && (F(window.Node.prototype), F(window.Text.prototype), F(window.DocumentFragment.prototype), F(window.Element.prototype), F(fd.prototype), F(window.Document.prototype), window.HTMLSlotElement && F(window.HTMLSlotElement.prototype));Db();window.ShadowRoot = Eb;
  };var gd = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function hd(a) {
    var b = gd.has(a);a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return !b && a;
  }function L(a) {
    var b = a.isConnected;if (void 0 !== b) return b;for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function id(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;return b && b !== a ? b.nextSibling : null;
  }
  function M(a, b, c) {
    c = void 0 === c ? new Set() : c;for (var d = a; d;) {
      if (d.nodeType === Node.ELEMENT_NODE) {
        var e = d;b(e);var f = e.localName;if ("link" === f && "import" === e.getAttribute("rel")) {
          d = e.import;if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) M(d, b, c);d = id(a, e);continue;
        } else if ("template" === f) {
          d = id(a, e);continue;
        }if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) M(e, b, c);
      }d = d.firstChild ? d.firstChild : id(a, d);
    }
  }function N(a, b, c) {
    a[b] = c;
  };function jd() {
    this.a = new Map();this.i = new Map();this.f = [];this.c = !1;
  }function kd(a, b, c) {
    a.a.set(b, c);a.i.set(c.constructor, c);
  }function ld(a, b) {
    a.c = !0;a.f.push(b);
  }function md(a, b) {
    a.c && M(b, function (b) {
      return a.b(b);
    });
  }jd.prototype.b = function (a) {
    if (this.c && !a.__CE_patched) {
      a.__CE_patched = !0;for (var b = 0; b < this.f.length; b++) this.f[b](a);
    }
  };function O(a, b) {
    var c = [];M(b, function (a) {
      return c.push(a);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state ? a.connectedCallback(d) : nd(a, d);
    }
  }
  function P(a, b) {
    var c = [];M(b, function (a) {
      return c.push(a);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state && a.disconnectedCallback(d);
    }
  }
  function Q(a, b, c) {
    c = void 0 === c ? {} : c;var d = c.Ia || new Set(),
        e = c.U || function (b) {
      return nd(a, b);
    },
        f = [];M(b, function (b) {
      if ("link" === b.localName && "import" === b.getAttribute("rel")) {
        var c = b.import;c instanceof Node && (c.__CE_isImportDocument = !0, c.__CE_hasRegistry = !0);c && "complete" === c.readyState ? c.__CE_documentLoadHandled = !0 : b.addEventListener("load", function () {
          var c = b.import;if (!c.__CE_documentLoadHandled) {
            c.__CE_documentLoadHandled = !0;var f = new Set(d);f.delete(c);Q(a, c, { Ia: f, U: e });
          }
        });
      } else f.push(b);
    }, d);if (a.c) for (b = 0; b < f.length; b++) a.b(f[b]);for (b = 0; b < f.length; b++) e(f[b]);
  }
  function nd(a, b) {
    if (void 0 === b.__CE_state) {
      var c = b.ownerDocument;if (c.defaultView || c.__CE_isImportDocument && c.__CE_hasRegistry) if (c = a.a.get(b.localName)) {
        c.constructionStack.push(b);var d = c.constructor;try {
          try {
            if (new d() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            c.constructionStack.pop();
          }
        } catch (g) {
          throw b.__CE_state = 2, g;
        }b.__CE_state = 1;b.__CE_definition = c;if (c.attributeChangedCallback) for (c = c.observedAttributes, d = 0; d < c.length; d++) {
          var e = c[d],
              f = b.getAttribute(e);null !== f && a.attributeChangedCallback(b, e, null, f, null);
        }L(b) && a.connectedCallback(b);
      }
    }
  }jd.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;b.connectedCallback && b.connectedCallback.call(a);
  };jd.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;b.disconnectedCallback && b.disconnectedCallback.call(a);
  };
  jd.prototype.attributeChangedCallback = function (a, b, c, d, e) {
    var f = a.__CE_definition;f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e);
  };function od(a) {
    var b = document;this.b = a;this.a = b;this.B = void 0;Q(this.b, this.a);"loading" === this.a.readyState && (this.B = new MutationObserver(this.c.bind(this)), this.B.observe(this.a, { childList: !0, subtree: !0 }));
  }function pd(a) {
    a.B && a.B.disconnect();
  }od.prototype.c = function (a) {
    var b = this.a.readyState;"interactive" !== b && "complete" !== b || pd(this);for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) Q(this.b, c[d]);
  };function qd() {
    var a = this;this.b = this.a = void 0;this.c = new Promise(function (b) {
      a.b = b;a.a && b(a.a);
    });
  }function rd(a) {
    if (a.a) throw Error("Already resolved.");a.a = void 0;a.b && a.b(void 0);
  };function R(a) {
    this.c = !1;this.a = a;this.C = new Map();this.f = function (a) {
      return a();
    };this.b = !1;this.i = [];this.za = new od(a);
  }n = R.prototype;
  n.define = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");if (!hd(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");if (this.a.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");if (this.c) throw Error("A custom element is already being defined.");this.c = !0;try {
      var d = function (a) {
        var b = e[a];if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
        return b;
      },
          e = b.prototype;if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");var f = d("connectedCallback");var g = d("disconnectedCallback");var h = d("adoptedCallback");var k = d("attributeChangedCallback");var l = b.observedAttributes || [];
    } catch (m) {
      return;
    } finally {
      this.c = !1;
    }b = { localName: a, constructor: b, connectedCallback: f, disconnectedCallback: g, adoptedCallback: h, attributeChangedCallback: k, observedAttributes: l, constructionStack: [] };kd(this.a, a, b);this.i.push(b);
    this.b || (this.b = !0, this.f(function () {
      return sd(c);
    }));
  };n.U = function (a) {
    Q(this.a, a);
  };function sd(a) {
    if (!1 !== a.b) {
      a.b = !1;for (var b = a.i, c = [], d = new Map(), e = 0; e < b.length; e++) d.set(b[e].localName, []);Q(a.a, document, { U: function (b) {
          if (void 0 === b.__CE_state) {
            var e = b.localName,
                f = d.get(e);f ? f.push(b) : a.a.a.get(e) && c.push(b);
          }
        } });for (e = 0; e < c.length; e++) nd(a.a, c[e]);for (; 0 < b.length;) {
        var f = b.shift();e = f.localName;f = d.get(f.localName);for (var g = 0; g < f.length; g++) nd(a.a, f[g]);(e = a.C.get(e)) && rd(e);
      }
    }
  }
  n.get = function (a) {
    if (a = this.a.a.get(a)) return a.constructor;
  };n.ka = function (a) {
    if (!hd(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));var b = this.C.get(a);if (b) return b.c;b = new qd();this.C.set(a, b);this.a.a.get(a) && !this.i.some(function (b) {
      return b.localName === a;
    }) && rd(b);return b.c;
  };n.Ba = function (a) {
    pd(this.za);var b = this.f;this.f = function (c) {
      return a(function () {
        return b(c);
      });
    };
  };window.CustomElementRegistry = R;R.prototype.define = R.prototype.define;
  R.prototype.upgrade = R.prototype.U;R.prototype.get = R.prototype.get;R.prototype.whenDefined = R.prototype.ka;R.prototype.polyfillWrapFlushCallback = R.prototype.Ba;var td = window.Document.prototype.createElement,
      ud = window.Document.prototype.createElementNS,
      vd = window.Document.prototype.importNode,
      wd = window.Document.prototype.prepend,
      xd = window.Document.prototype.append,
      yd = window.DocumentFragment.prototype.prepend,
      zd = window.DocumentFragment.prototype.append,
      Ad = window.Node.prototype.cloneNode,
      Bd = window.Node.prototype.appendChild,
      Cd = window.Node.prototype.insertBefore,
      Dd = window.Node.prototype.removeChild,
      Ed = window.Node.prototype.replaceChild,
      Fd = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      Gd = window.Element.prototype.attachShadow,
      Hd = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      Id = window.Element.prototype.getAttribute,
      Jd = window.Element.prototype.setAttribute,
      Kd = window.Element.prototype.removeAttribute,
      Ld = window.Element.prototype.getAttributeNS,
      Md = window.Element.prototype.setAttributeNS,
      Nd = window.Element.prototype.removeAttributeNS,
      Od = window.Element.prototype.insertAdjacentElement,
      Pd = window.Element.prototype.insertAdjacentHTML,
      Qd = window.Element.prototype.prepend,
      Rd = window.Element.prototype.append,
      Sd = window.Element.prototype.before,
      Td = window.Element.prototype.after,
      Ud = window.Element.prototype.replaceWith,
      Vd = window.Element.prototype.remove,
      Wd = window.HTMLElement,
      Xd = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      Yd = window.HTMLElement.prototype.insertAdjacentElement,
      Zd = window.HTMLElement.prototype.insertAdjacentHTML;var $d = new function () {}();function ae() {
    var a = be;window.HTMLElement = function () {
      function b() {
        var b = this.constructor,
            d = a.i.get(b);if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");var e = d.constructionStack;if (0 === e.length) return e = td.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.b(e), e;d = e.length - 1;var f = e[d];if (f === $d) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
        e[d] = $d;Object.setPrototypeOf(f, b.prototype);a.b(f);return f;
      }b.prototype = Wd.prototype;Object.defineProperty(b.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: b });return b;
    }();
  };function ce(a, b, c) {
    function d(b) {
      return function (c) {
        for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];e = [];for (var f = [], l = 0; l < d.length; l++) {
          var m = d[l];m instanceof Element && L(m) && f.push(m);if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) e.push(m);else e.push(m);
        }b.apply(this, d);for (d = 0; d < f.length; d++) P(a, f[d]);if (L(this)) for (d = 0; d < e.length; d++) f = e[d], f instanceof Element && O(a, f);
      };
    }void 0 !== c.T && (b.prepend = d(c.T));void 0 !== c.append && (b.append = d(c.append));
  };function de() {
    var a = be;N(Document.prototype, "createElement", function (b) {
      if (this.__CE_hasRegistry) {
        var c = a.a.get(b);if (c) return new c.constructor();
      }b = td.call(this, b);a.b(b);return b;
    });N(Document.prototype, "importNode", function (b, c) {
      b = vd.call(this, b, c);this.__CE_hasRegistry ? Q(a, b) : md(a, b);return b;
    });N(Document.prototype, "createElementNS", function (b, c) {
      if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
        var d = a.a.get(c);if (d) return new d.constructor();
      }b = ud.call(this, b, c);a.b(b);return b;
    });
    ce(a, Document.prototype, { T: wd, append: xd });
  };function ee() {
    function a(a, d) {
      Object.defineProperty(a, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function (a) {
          if (this.nodeType === Node.TEXT_NODE) d.set.call(this, a);else {
            var c = void 0;if (this.firstChild) {
              var e = this.childNodes,
                  h = e.length;if (0 < h && L(this)) {
                c = Array(h);for (var k = 0; k < h; k++) c[k] = e[k];
              }
            }d.set.call(this, a);if (c) for (a = 0; a < c.length; a++) P(b, c[a]);
          }
        } });
    }var b = be;N(Node.prototype, "insertBefore", function (a, d) {
      if (a instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(a.childNodes);
        a = Cd.call(this, a, d);if (L(this)) for (d = 0; d < c.length; d++) O(b, c[d]);return a;
      }c = L(a);d = Cd.call(this, a, d);c && P(b, a);L(this) && O(b, a);return d;
    });N(Node.prototype, "appendChild", function (a) {
      if (a instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(a.childNodes);a = Bd.call(this, a);if (L(this)) for (var e = 0; e < c.length; e++) O(b, c[e]);return a;
      }c = L(a);e = Bd.call(this, a);c && P(b, a);L(this) && O(b, a);return e;
    });N(Node.prototype, "cloneNode", function (a) {
      a = Ad.call(this, a);this.ownerDocument.__CE_hasRegistry ? Q(b, a) : md(b, a);return a;
    });N(Node.prototype, "removeChild", function (a) {
      var c = L(a),
          e = Dd.call(this, a);c && P(b, a);return e;
    });N(Node.prototype, "replaceChild", function (a, d) {
      if (a instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(a.childNodes);a = Ed.call(this, a, d);if (L(this)) for (P(b, d), d = 0; d < c.length; d++) O(b, c[d]);return a;
      }c = L(a);var f = Ed.call(this, a, d),
          g = L(this);g && P(b, d);c && P(b, a);g && O(b, a);return f;
    });Fd && Fd.get ? a(Node.prototype, Fd) : ld(b, function (b) {
      a(b, { enumerable: !0, configurable: !0, get: function () {
          for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);return a.join("");
        }, set: function (a) {
          for (; this.firstChild;) Dd.call(this, this.firstChild);Bd.call(this, document.createTextNode(a));
        } });
    });
  };function fe(a) {
    function b(b) {
      return function (c) {
        for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];e = [];for (var h = [], k = 0; k < d.length; k++) {
          var l = d[k];l instanceof Element && L(l) && h.push(l);if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) e.push(l);else e.push(l);
        }b.apply(this, d);for (d = 0; d < h.length; d++) P(a, h[d]);if (L(this)) for (d = 0; d < e.length; d++) h = e[d], h instanceof Element && O(a, h);
      };
    }var c = Element.prototype;void 0 !== Sd && (c.before = b(Sd));void 0 !== Sd && (c.after = b(Td));void 0 !== Ud && N(c, "replaceWith", function (b) {
      for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];d = [];for (var g = [], h = 0; h < c.length; h++) {
        var k = c[h];k instanceof Element && L(k) && g.push(k);if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) d.push(k);else d.push(k);
      }h = L(this);Ud.apply(this, c);for (c = 0; c < g.length; c++) P(a, g[c]);if (h) for (P(a, this), c = 0; c < d.length; c++) g = d[c], g instanceof Element && O(a, g);
    });void 0 !== Vd && N(c, "remove", function () {
      var b = L(this);Vd.call(this);b && P(a, this);
    });
  };function ge() {
    function a(a, b) {
      Object.defineProperty(a, "innerHTML", { enumerable: b.enumerable, configurable: !0, get: b.get, set: function (a) {
          var c = this,
              e = void 0;L(this) && (e = [], M(this, function (a) {
            a !== c && e.push(a);
          }));b.set.call(this, a);if (e) for (var f = 0; f < e.length; f++) {
            var g = e[f];1 === g.__CE_state && d.disconnectedCallback(g);
          }this.ownerDocument.__CE_hasRegistry ? Q(d, this) : md(d, this);return a;
        } });
    }function b(a, b) {
      N(a, "insertAdjacentElement", function (a, c) {
        var e = L(c);a = b.call(this, a, c);e && P(d, c);L(a) && O(d, c);return a;
      });
    }
    function c(a, b) {
      function c(a, b) {
        for (var c = []; a !== b; a = a.nextSibling) c.push(a);for (b = 0; b < c.length; b++) Q(d, c[b]);
      }N(a, "insertAdjacentHTML", function (a, d) {
        a = a.toLowerCase();if ("beforebegin" === a) {
          var e = this.previousSibling;b.call(this, a, d);c(e || this.parentNode.firstChild, this);
        } else if ("afterbegin" === a) e = this.firstChild, b.call(this, a, d), c(this.firstChild, e);else if ("beforeend" === a) e = this.lastChild, b.call(this, a, d), c(e || this.firstChild, null);else if ("afterend" === a) e = this.nextSibling, b.call(this, a, d), c(this.nextSibling, e);else throw new SyntaxError("The value provided (" + String(a) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      });
    }var d = be;Gd && N(Element.prototype, "attachShadow", function (a) {
      return this.__CE_shadowRoot = a = Gd.call(this, a);
    });Hd && Hd.get ? a(Element.prototype, Hd) : Xd && Xd.get ? a(HTMLElement.prototype, Xd) : ld(d, function (b) {
      a(b, { enumerable: !0, configurable: !0, get: function () {
          return Ad.call(this, !0).innerHTML;
        }, set: function (a) {
          var b = "template" === this.localName,
              c = b ? this.content : this,
              d = ud.call(document, this.namespaceURI, this.localName);for (d.innerHTML = a; 0 < c.childNodes.length;) Dd.call(c, c.childNodes[0]);for (a = b ? d.content : d; 0 < a.childNodes.length;) Bd.call(c, a.childNodes[0]);
        } });
    });N(Element.prototype, "setAttribute", function (a, b) {
      if (1 !== this.__CE_state) return Jd.call(this, a, b);var c = Id.call(this, a);Jd.call(this, a, b);b = Id.call(this, a);d.attributeChangedCallback(this, a, c, b, null);
    });N(Element.prototype, "setAttributeNS", function (a, b, c) {
      if (1 !== this.__CE_state) return Md.call(this, a, b, c);var e = Ld.call(this, a, b);Md.call(this, a, b, c);c = Ld.call(this, a, b);d.attributeChangedCallback(this, b, e, c, a);
    });N(Element.prototype, "removeAttribute", function (a) {
      if (1 !== this.__CE_state) return Kd.call(this, a);var b = Id.call(this, a);Kd.call(this, a);null !== b && d.attributeChangedCallback(this, a, b, null, null);
    });N(Element.prototype, "removeAttributeNS", function (a, b) {
      if (1 !== this.__CE_state) return Nd.call(this, a, b);var c = Ld.call(this, a, b);Nd.call(this, a, b);var e = Ld.call(this, a, b);c !== e && d.attributeChangedCallback(this, b, c, e, a);
    });Yd ? b(HTMLElement.prototype, Yd) : Od ? b(Element.prototype, Od) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Zd ? c(HTMLElement.prototype, Zd) : Pd ? c(Element.prototype, Pd) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");ce(d, Element.prototype, { T: Qd, append: Rd });fe(d);
  }; /*
     Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
  var he = window.customElements;if (!he || he.forcePolyfill || "function" != typeof he.define || "function" != typeof he.get) {
    var be = new jd();ae();de();ce(be, DocumentFragment.prototype, { T: yd, append: zd });ee();ge();document.__CE_hasRegistry = !0;var customElements = new R(be);Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: customElements });
  }; /*
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
  function ie() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function je(a) {
    a = a.replace(ke, "").replace(le, "");var b = me,
        c = a,
        d = new ie();d.start = 0;d.end = c.length;for (var e = d, f = 0, g = c.length; f < g; f++) if ("{" === c[f]) {
      e.rules || (e.rules = []);var h = e,
          k = h.rules[h.rules.length - 1] || null;e = new ie();e.start = f + 1;e.parent = h;e.previous = k;h.rules.push(e);
    } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);return b(d, a);
  }
  function me(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = ne(c), c = c.replace(oe, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = pe : c.match(qe) && (a.type = re, a.keyframesName = a.selector.split(oe).pop()) : a.type = 0 === c.indexOf("--") ? se : te);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) me(f, b);return a;
  }function ne(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
      a = c;for (c = 6 - a.length; c--;) a = "0" + a;return "\\" + a;
    });
  }
  function ue(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = ue(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(ve, "").replace(we, ""), b = b.replace(xe, "").replace(ye, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var te = 1,
      re = 7,
      pe = 4,
      se = 1E3,
      ke = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      le = /@import[^;]*;/gim,
      ve = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      we = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      xe = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      ye = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      qe = /^@[^\s]*keyframes/,
      oe = /\s+/g;var S = !(window.ShadyDOM && window.ShadyDOM.inUse),
      ze;function Ae(a) {
    ze = a && a.shimcssproperties ? !1 : S || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? ze = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Ae(window.ShadyCSS), window.ShadyCSS = void 0) : Ae(window.WebComponents && window.WebComponents.flags);var T = ze;var Be = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      Ce = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      De = /(--[\w-]+)\s*([:,;)]|$)/gi,
      Ee = /(animation\s*:)|(animation-name\s*:)/,
      Fe = /@media\s(.*)/,
      Ge = /\{[^}]*\}/g;var He = new Set();function Ie(a, b) {
    if (!a) return "";"string" === typeof a && (a = je(a));b && Je(a, b);return ue(a, T);
  }function Ke(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = je(a.textContent));return a.__cssRules || null;
  }function Le(a) {
    return !!a.parent && a.parent.type === re;
  }function Je(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === pe) {
        var g = a.selector.match(Fe);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === te ? b(a) : c && f === re ? c(a) : f === se && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) Je(g, b, c, d);
    }
  }
  function Me(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Ne(e, c, d);return e;
  }var U = null;function Oe(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (U ? U.nextSibling : null) || b.firstChild);return U = a;
  }function Ne(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);U ? a.compareDocumentPosition(U) === Node.DOCUMENT_POSITION_PRECEDING && (U = a) : U = a;
  }
  function Pe(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function Qe(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = Pe(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = Qe(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function Re(a, b) {
    S ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  function V(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, I: c };
  }function Se(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Pe(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function Te(a) {
    if (void 0 === a.V) {
      var b = a.getAttribute("css-build");if (b) a.V = b;else {
        a: {
          b = "template" === a.localName ? a.content.firstChild : a.firstChild;if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
            b = b[1];break a;
          }b = "";
        }if ("" !== b) {
          var c = "template" === a.localName ? a.content.firstChild : a.firstChild;c.parentNode.removeChild(c);
        }a.V = b;
      }
    }return a.V || "";
  };function Ue() {}function Ve(a, b) {
    We(W, a, function (a) {
      Xe(a, b || "");
    });
  }function We(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);if (b = "template" === b.localName ? (b.content || b.Na || b).childNodes : b.children || b.childNodes) for (var d = 0; d < b.length; d++) We(a, b[d], c);
  }
  function Xe(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute(Ye);c ? d && (b = d.replace("style-scope", "").replace(b, ""), Re(a, b)) : Re(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function Ze(a, b, c) {
    We(W, a, function (a) {
      Xe(a, b, !0);Xe(a, c);
    });
  }function $e(a, b) {
    We(W, a, function (a) {
      Xe(a, b || "", !0);
    });
  }
  function af(a, b, c, d) {
    var e = W;S || "shady" === (void 0 === d ? "" : d) ? b = Ie(b, c) : (a = V(a), b = bf(e, b, a.is, a.I, c) + "\n\n");return b.trim();
  }function bf(a, b, c, d, e) {
    var f = cf(c, d);c = c ? df + c : "";return Ie(b, function (b) {
      b.c || (b.selector = b.l = ef(a, b, a.b, c, f), b.c = !0);e && e(b, c, f);
    });
  }function cf(a, b) {
    return b ? "[is=" + a + "]" : a;
  }function ef(a, b, c, d, e) {
    var f = Se(b.selector);if (!Le(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (a) {
      return !!a;
    }).join(ff);
  }
  function gf(a) {
    return a.replace(hf, function (a, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }function jf(a) {
    for (var b = [], c; c = a.match(kf);) {
      var d = c.index,
          e = Pe(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { ba: a, matches: b };
  }function lf(a, b) {
    var c = a.split("\ue000");return b.reduce(function (a, b, f) {
      return a + b + c[f + 1];
    }, c[0]);
  }
  Ue.prototype.b = function (a, b, c) {
    var d = !1;a = a.trim();var e = hf.test(a);e && (a = a.replace(hf, function (a, b, c) {
      return ":" + b + "(" + c.replace(/\s/g, "") + ")";
    }), a = gf(a));var f = kf.test(a);if (f) {
      var g = jf(a);a = g.ba;g = g.matches;
    }a = a.replace(mf, nf + " $1");a = a.replace(of, function (a, e, f) {
      d || (a = pf(f, e, b, c), d = d || a.stop, e = a.ua, f = a.value);return e + f;
    });f && (a = lf(a, g));e && (a = gf(a));return a;
  };
  function pf(a, b, c, d) {
    var e = a.indexOf(qf);0 <= a.indexOf(nf) ? a = rf(a, d) : 0 !== e && (a = c ? sf(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(tf, function (a, b) {
        return " > " + b;
      }));
    }a = a.replace(uf, function (a, b, c) {
      return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]';
    });return { value: a, ua: b, stop: f };
  }function sf(a, b) {
    a = a.split(vf);a[0] += b;return a.join(vf);
  }
  function rf(a, b) {
    var c = a.match(wf);return (c = c && c[2].trim() || "") ? c[0].match(xf) ? a.replace(wf, function (a, c, f) {
      return b + f;
    }) : c.split(xf)[0] === b ? c : yf : a.replace(nf, b);
  }function zf(a) {
    a.selector === Af && (a.selector = "html");
  }Ue.prototype.c = function (a) {
    return a.match(nf) ? "" : a.match(qf) ? this.b(a, Bf) : sf(a.trim(), Bf);
  };p.Object.defineProperties(Ue.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var hf = /:(nth[-\w]+)\(([^)]+)\)/,
      Bf = ":not(.style-scope)",
      ff = ",",
      of = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      xf = /[[.:#*]/,
      nf = ":host",
      Af = ":root",
      qf = "::slotted",
      mf = new RegExp("^(" + qf + ")"),
      wf = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      tf = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      uf = /(.*):dir\((?:(ltr|rtl))\)/,
      df = ".",
      vf = ":",
      Ye = "class",
      yf = "should_not_match",
      kf = /:(?:matches|any|-(?:webkit|moz)-any)/,
      W = new Ue();function Cf(a, b, c, d, e) {
    this.v = a || null;this.b = b || null;this.c = c || [];this.F = null;this.P = e || "";this.I = d || "";this.a = this.o = this.A = null;
  }function X(a) {
    return a ? a.__styleInfo : null;
  }function Df(a, b) {
    return a.__styleInfo = b;
  }Cf.prototype.f = function () {
    return this.v;
  };Cf.prototype._getStyleRules = Cf.prototype.f;function Ef(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var Ff = navigator.userAgent.match("Trident");function Gf() {}function Hf(a) {
    var b = {},
        c = [],
        d = 0;Je(a, function (a) {
      If(a);a.index = d++;a = a.j.cssText;for (var c; c = De.exec(a);) {
        var e = c[1];":" !== c[2] && (b[e] = !0);
      }
    }, function (a) {
      c.push(a);
    });a.b = c;a = [];for (var e in b) a.push(e);return a;
  }
  function If(a) {
    if (!a.j) {
      var b = {},
          c = {};Jf(a, c) && (b.u = c, a.rules = null);b.cssText = a.parsedCssText.replace(Ge, "").replace(Be, "");a.j = b;
    }
  }function Jf(a, b) {
    var c = a.j;if (c) {
      if (c.u) return Object.assign(b, c.u), !0;
    } else {
      c = a.parsedCssText;for (var d; a = Be.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function Kf(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? Lf(a, b, c) : Qe(b, function (b, e, f, g) {
      if (!e) return b + g;(e = Kf(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = Kf(a, c[f] || f, c) || f;return b + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function Lf(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      Ce.lastIndex = 0;if (f = Ce.exec(e)) e = Kf(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = Kf(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function Mf(a, b) {
    var c = {},
        d = [];Je(a, function (a) {
      a.j || If(a);var e = a.l || a.parsedSelector;b && a.j.u && e && Ef.call(b, e) && (Jf(a, c), a = a.index, e = parseInt(a / 32, 10), d[e] = (d[e] || 0) | 1 << a % 32);
    }, null, !0);return { u: c, key: d };
  }
  function Nf(a, b, c, d) {
    b.j || If(b);if (b.j.u) {
      var e = V(a);a = e.is;e = e.I;e = a ? cf(a, e) : "html";var f = b.parsedSelector,
          g = ":host > *" === f || "html" === f,
          h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.l || (b.l = ef(W, b, W.b, a ? df + a : "", e)), c = b.l || e), d({ ba: c, Aa: h, Xa: g });
    }
  }function Of(a, b, c) {
    var d = {},
        e = {};Je(b, function (b) {
      Nf(a, b, c, function (c) {
        Ef.call(a.Oa || a, c.ba) && (c.Aa ? Jf(b, d) : Jf(b, e));
      });
    }, null, !0);return { Ca: e, ya: d };
  }
  function Pf(a, b, c, d) {
    var e = V(b),
        f = cf(e.is, e.I),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = X(b);e = h.v;h = h.P;var k = Qf(e, d);return af(b, e, function (b) {
      var e = "";b.j || If(b);b.j.cssText && (e = Lf(a, b.j.cssText, c));b.cssText = e;if (!S && !Le(b) && b.cssText) {
        var h = e = b.cssText;null == b.fa && (b.fa = Ee.test(e));if (b.fa) if (null == b.S) {
          b.S = [];for (var l in k) h = k[l], h = h(e), e !== h && (e = h, b.S.push(l));
        } else {
          for (l = 0; l < b.S.length; ++l) h = k[b.S[l]], e = h(e);h = e;
        }b.cssText = h;b.l = b.l || b.selector;
        e = "." + d;l = Se(b.l);h = 0;for (var ma = l.length, Qa = void 0; h < ma && (Qa = l[h]); h++) l[h] = Qa.match(g) ? Qa.replace(f, e) : e + " " + Qa;b.selector = l.join(",");
      }
    }, h);
  }function Qf(a, b) {
    a = a.b;var c = {};if (!S && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.f = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.a = f.keyframesName + "-" + g;f.l = f.l || f.selector;f.selector = f.l.replace(f.keyframesName, f.a);c[e.keyframesName] = Rf(e);
    }return c;
  }function Rf(a) {
    return function (b) {
      return b.replace(a.f, a.a);
    };
  }
  function Sf(a, b) {
    var c = Tf,
        d = Ke(a);a.textContent = Ie(d, function (a) {
      var d = a.cssText = a.parsedCssText;a.j && a.j.cssText && (d = d.replace(ve, "").replace(we, ""), a.cssText = Lf(c, d, b));
    });
  }p.Object.defineProperties(Gf.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var Tf = new Gf();var Uf = {},
      Vf = window.customElements;if (Vf && !S) {
    var Wf = Vf.define;Vf.define = function (a, b, c) {
      Uf[a] || (Uf[a] = Oe(a));Wf.call(Vf, a, b, c);
    };
  };function Xf() {
    this.cache = {};
  }Xf.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ u: b, styleElement: c, o: d });100 < e.length && e.shift();this.cache[a] = e;
  };Xf.prototype.fetch = function (a, b, c) {
    if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
      var e = a[d],
          f;a: {
        for (f = 0; f < c.length; f++) {
          var g = c[f];if (e.u[g] !== b[g]) {
            f = !1;break a;
          }
        }f = !0;
      }if (f) return e;
    }
  };function Yf() {}function Zf(a) {
    var b = [];a.classList ? b = Array.from(a.classList) : a instanceof window.SVGElement && a.hasAttribute("class") && (b = a.getAttribute("class").split(/\s+/));a = b;b = a.indexOf(W.a);return -1 < b ? a[b + 1] : "";
  }function $f(a) {
    var b = a.getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? V(a).is : "";
  }
  function ag(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = Zf(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Te(e))) $e(e, g);else if (f instanceof ShadowRoot) for (f = $f(e), f !== g && Ze(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + W.a + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = $f(f);h && Xe(f, h);
          }
        }
      }
    }
  }
  if (!(S || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var bg = new MutationObserver(ag),
        cg = function (a) {
      bg.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) cg(document);else {
      var dg = function () {
        cg(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(dg) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            dg();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else dg();
      });
    }Yf = function () {
      ag(bg.takeRecords());
    };
  }var eg = Yf;var fg = {};var gg = Promise.resolve();function hg(a) {
    if (a = fg[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function ig(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function jg(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a.b || (a.b = !0, gg.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a.b = !1;
    }));
  };var kg = new Xf();function Y() {
    this.C = {};this.c = document.documentElement;var a = new ie();a.rules = [];this.f = Df(this.c, new Cf(a));this.i = !1;this.b = this.a = null;
  }n = Y.prototype;n.flush = function () {
    eg();
  };n.wa = function (a) {
    return Ke(a);
  };n.Ga = function (a) {
    return Ie(a);
  };n.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  n.prepareTemplateStyles = function (a, b, c) {
    if (!a.i) {
      S || Uf[b] || (Uf[b] = Oe(b));a.i = !0;a.name = b;a.extends = c;fg[b] = a;var d = Te(a);var e = [];for (var f = a.content.querySelectorAll("style"), g = 0; g < f.length; g++) {
        var h = f[g];if (h.hasAttribute("shady-unscoped")) {
          if (!S) {
            var k = h.textContent;He.has(k) || (He.add(k), k = h.cloneNode(!0), document.head.appendChild(k));h.parentNode.removeChild(h);
          }
        } else e.push(h.textContent), h.parentNode.removeChild(h);
      }e = e.join("").trim();c = { is: b, extends: c };lg(this);if (f = "" === Te(a)) f = Ce.test(e) || Be.test(e), Ce.lastIndex = 0, Be.lastIndex = 0;e = je(e);f && T && this.a && this.a.transformRules(e, b);a._styleAst = e;e = [];T || (e = Hf(a._styleAst));if (!e.length || T) f = S ? a.content : null, b = Uf[b] || null, d = af(c, a._styleAst, null, d), d = d.length ? Me(d, c.is, f, b) : void 0, a.a = d;a.f = e;
    }
  };n.prepareTemplateDom = function (a, b) {
    var c = Te(a);S || "shady" === c || a.c || (a.c = !0, Ve(a.content, b));
  };
  function mg(a) {
    !a.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.b = window.ShadyCSS.CustomStyleInterface, a.b.transformCallback = function (b) {
      a.ia(b);
    }, a.b.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.b.enqueued || a.i) && a.flushCustomStyles();
      });
    });
  }function lg(a) {
    !a.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.a = window.ShadyCSS.ApplyShim, a.a.invalidCallback = hg);mg(a);
  }
  n.flushCustomStyles = function () {
    lg(this);if (this.b) {
      var a = this.b.processStyles();if (this.b.enqueued) {
        if (T) for (var b = 0; b < a.length; b++) {
          var c = this.b.getStyleForCustomStyle(a[b]);if (c && T && this.a) {
            var d = Ke(c);lg(this);this.a.transformRules(d);c.textContent = Ie(d);
          }
        } else for (ng(this, this.c, this.f), b = 0; b < a.length; b++) (c = this.b.getStyleForCustomStyle(a[b])) && Sf(c, this.f.A);this.b.enqueued = !1;this.i && !T && this.styleDocument();
      }
    }
  };
  n.styleElement = function (a, b) {
    var c = X(a);if (!c) {
      var d = V(a);c = d.is;d = d.I;var e = Uf[c] || null;c = fg[c];if (c) {
        var f = c._styleAst;var g = c.f;var h = Te(c);
      }f = new Cf(f, e, g, d, h);c && Df(a, f);c = f;
    }a !== this.c && (this.i = !0);b && (c.F = c.F || {}, Object.assign(c.F, b));if (T) {
      b = c;f = V(a).is;if (b.F) {
        g = b.F;for (var k in g) null === k ? a.style.removeProperty(k) : a.style.setProperty(k, g[k]);
      }if (!(!(k = fg[f]) && a !== this.c || k && "" !== Te(k)) && k && k.a && !ig(k)) {
        if (ig(k) || k._applyShimValidatingVersion !== k._applyShimNextVersion) lg(this), this.a && this.a.transformRules(k._styleAst, f), k.a.textContent = af(a, b.v), jg(k);S && (f = a.shadowRoot) && (f = f.querySelector("style")) && (f.textContent = af(a, b.v));b.v = k._styleAst;
      }
    } else if (k = c, this.flush(), ng(this, a, k), k.c && k.c.length) {
      b = V(a).is;c = (f = kg.fetch(b, k.A, k.c)) ? f.styleElement : null;g = k.o;(h = f && f.o) || (h = this.C[b] = (this.C[b] || 0) + 1, h = b + "-" + h);k.o = h;h = k.o;d = Tf;d = c ? c.textContent || "" : Pf(d, a, k.A, h);e = X(a);var l = e.a;l && !S && l !== c && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));S ? e.a ? (e.a.textContent = d, c = e.a) : d && (c = Me(d, h, a.shadowRoot, e.b)) : c ? c.parentNode || (Ff && -1 < d.indexOf("@media") && (c.textContent = d), Ne(c, null, e.b)) : d && (c = Me(d, h, null, e.b));c && (c._useCount = c._useCount || 0, e.a != c && c._useCount++, e.a = c);h = c;S || (c = k.o, e = d = a.getAttribute("class") || "", g && (e = d.replace(new RegExp("\\s*x-scope\\s*" + g + "\\s*", "g"), " ")), e += (e ? " " : "") + "x-scope " + c, d !== e && Re(a, e));f || kg.store(b, k.A, h, k.o);
    }
  };function og(a, b) {
    return (b = b.getRootNode().host) ? X(b) ? b : og(a, b) : a.c;
  }
  function ng(a, b, c) {
    a = og(a, b);var d = X(a);a = Object.create(d.A || null);var e = Of(b, c.v, c.P);b = Mf(d.v, b).u;Object.assign(a, e.ya, b, e.Ca);b = c.F;for (var f in b) if ((e = b[f]) || 0 === e) a[f] = e;f = Tf;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = Kf(f, a[d], a);c.A = a;
  }n.styleDocument = function (a) {
    this.styleSubtree(this.c, a);
  };
  n.styleSubtree = function (a, b) {
    var c = a.shadowRoot;(c || a === this.c) && this.styleElement(a, b);if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) this.styleSubtree(b[a]);else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  n.ia = function (a) {
    var b = this,
        c = Ke(a),
        d = Te(a);d !== this.f.P && (this.f.P = d);Je(c, function (a) {
      if (S) zf(a);else {
        var c = W;a.selector = a.parsedSelector;zf(a);a.selector = a.l = ef(c, a, c.c, void 0, void 0);
      }T && "" === d && (lg(b), b.a && b.a.transformRule(a));
    });T ? a.textContent = Ie(c) : this.f.v.rules.push(c);
  };n.getComputedStyleValue = function (a, b) {
    var c;T || (c = (X(a) || X(og(this, a))).A[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  n.Fa = function (a, b) {
    var c = a.getRootNode();b = b ? b.split(/\s/) : [];c = c.host && c.host.localName;if (!c) {
      var d = a.getAttribute("class");if (d) {
        d = d.split(/\s/);for (var e = 0; e < d.length; e++) if (d[e] === W.a) {
          c = d[e + 1];break;
        }
      }
    }c && b.push(W.a, c);T || (c = X(a)) && c.o && b.push(Tf.a, c.o);Re(a, b.join(" "));
  };n.ta = function (a) {
    return X(a);
  };n.Ea = function (a, b) {
    Xe(a, b);
  };n.Ha = function (a, b) {
    Xe(a, b, !0);
  };n.Da = function (a) {
    return $f(a);
  };n.va = function (a) {
    return Zf(a);
  };Y.prototype.flush = Y.prototype.flush;Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
  Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.Fa;Y.prototype._styleInfoForNode = Y.prototype.ta;Y.prototype.transformCustomStyleForDocument = Y.prototype.ia;Y.prototype.getStyleAst = Y.prototype.wa;Y.prototype.styleAstToString = Y.prototype.Ga;Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
  Y.prototype.scopeNode = Y.prototype.Ea;Y.prototype.unscopeNode = Y.prototype.Ha;Y.prototype.scopeForNode = Y.prototype.Da;Y.prototype.currentScopeForNode = Y.prototype.va;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return S;
      } }, nativeCss: { get: function () {
        return T;
      } } });var Z = new Y(),
      pg,
      qg;window.ShadyCSS && (pg = window.ShadyCSS.ApplyShim, qg = window.ShadyCSS.CustomStyleInterface);
  window.ShadyCSS = { ScopingShim: Z, prepareTemplate: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplate(a, b, c);
    }, prepareTemplateDom: function (a, b) {
      Z.prepareTemplateDom(a, b);
    }, prepareTemplateStyles: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplateStyles(a, b, c);
    }, styleSubtree: function (a, b) {
      Z.flushCustomStyles();Z.styleSubtree(a, b);
    }, styleElement: function (a) {
      Z.flushCustomStyles();Z.styleElement(a);
    }, styleDocument: function (a) {
      Z.flushCustomStyles();Z.styleDocument(a);
    }, flushCustomStyles: function () {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return Z.getComputedStyleValue(a, b);
    }, nativeCss: T, nativeShadow: S };pg && (window.ShadyCSS.ApplyShim = pg);qg && (window.ShadyCSS.CustomStyleInterface = qg);
}).call(this);

//# sourceMappingURL=webcomponents-sd-ce.js.map