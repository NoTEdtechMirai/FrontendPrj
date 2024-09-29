(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return factory(w)
        }
    } else {
        factory(global)
    }
}
)(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var arr = [];
    var document = window.document;
    var slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {};
    var version = "2.2.4"
      , jQuery = function(selector, context) {
        return new jQuery.fn.init(selector,context)
    }
      , rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , rmsPrefix = /^-ms-/
      , rdashAlpha = /-([\da-z])/gi
      , fcamelCase = function(all, letter) {
        return letter.toUpperCase()
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this)
        },
        get: function(num) {
            return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this)
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret
        },
        each: function(callback) {
            return jQuery.each(this, callback)
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem)
            }))
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(i) {
            var len = this.length
              , j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {}
        }
        if (i === length) {
            target = this;
            i--
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : []
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {}
                        }
                        target[name] = jQuery.extend(deep, clone, copy)
                    } else if (copy !== undefined) {
                        target[name] = copy
                    }
                }
            }
        }
        return target
    }
    ;
    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
            throw new Error(msg)
        },
        noop: function() {},
        isFunction: function(obj) {
            return jQuery.type(obj) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
            return obj != null && obj === obj.window
        },
        isNumeric: function(obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0
        },
        isPlainObject: function(obj) {
            var key;
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false
            }
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
                return false
            }
            for (key in obj) {}
            return key === undefined || hasOwn.call(obj, key)
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false
            }
            return true
        },
        type: function(obj) {
            if (obj == null) {
                return obj + ""
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code);
            if (code) {
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement("script");
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script)
                } else {
                    indirect(code)
                }
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break
                    }
                }
            }
            return obj
        },
        trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "")
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
                } else {
                    push.call(ret, arr)
                }
            }
            return ret
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i)
        },
        merge: function(first, second) {
            var len = +second.length
              , j = 0
              , i = first.length;
            for (; j < len; j++) {
                first[i++] = second[j]
            }
            first.length = i;
            return first
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i])
                }
            }
            return matches
        },
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value)
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value)
                    }
                }
            }
            return concat.apply([], ret)
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp
            }
            if (!jQuery.isFunction(fn)) {
                return undefined
            }
            args = slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)))
            }
            ;
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy
        },
        now: Date.now,
        support: support
    });
    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase()
    });
    function isArrayLike(obj) {
        var length = !!obj && "length"in obj && obj.length
          , type = jQuery.type(obj);
        if (type === "function" || jQuery.isWindow(obj)) {
            return false
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj
    }
    var Sizzle = function(window) {
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
                hasDuplicate = true
            }
            return 0
        }, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
            var i = 0
              , len = list.length;
            for (; i < len; i++) {
                if (list[i] === elem) {
                    return i
                }
            }
            return -1
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+","g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$","g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]","g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)","i"),
            bool: new RegExp("^(?:" + booleans + ")$","i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)","i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)","ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
        }, unloadHandler = function() {
            setDocument()
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els))
                }
                : function(target, els) {
                    var j = target.length
                      , i = 0;
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1
                }
            }
        }
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                return results
            }
            if (!seed) {
                if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                    setDocument(context)
                }
                context = context || document;
                if (documentIsHTML) {
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        if (m = match[1]) {
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results
                                    }
                                } else {
                                    return results
                                }
                            } else {
                                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                    results.push(elem);
                                    return results
                                }
                            }
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results
                        } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results
                        }
                    }
                    if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        if (nodeType !== 1) {
                            newContext = context;
                            newSelector = selector
                        } else if (context.nodeName.toLowerCase() !== "object") {
                            if (nid = context.getAttribute("id")) {
                                nid = nid.replace(rescape, "\\$&")
                            } else {
                                context.setAttribute("id", nid = expando)
                            }
                            groups = tokenize(selector);
                            i = groups.length;
                            nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                            while (i--) {
                                groups[i] = nidselect + " " + toSelector(groups[i])
                            }
                            newSelector = groups.join(",");
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context
                        }
                        if (newSelector) {
                            try {
                                push.apply(results, newContext.querySelectorAll(newSelector));
                                return results
                            } catch (qsaError) {} finally {
                                if (nid === expando) {
                                    context.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed)
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                if (keys.push(key + " ") > Expr.cacheLength) {
                    delete cache[keys.shift()]
                }
                return cache[key + " "] = value
            }
            return cache
        }
        function markFunction(fn) {
            fn[expando] = true;
            return fn
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div)
            } catch (e) {
                return false
            } finally {
                if (div.parentNode) {
                    div.parentNode.removeChild(div)
                }
                div = null
            }
        }
        function addHandle(attrs, handler) {
            var arr = attrs.split("|")
              , i = arr.length;
            while (i--) {
                Expr.attrHandle[arr[i]] = handler
            }
        }
        function siblingCheck(a, b) {
            var cur = b && a
              , diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
                return diff
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    if (cur === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type
            }
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type
            }
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j])
                        }
                    }
                })
            })
        }
        function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context
        }
        support = Sizzle.support = {};
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false
        }
        ;
        setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document
            }
            document = doc;
            docElem = document.documentElement;
            documentIsHTML = !isXML(document);
            if ((parent = document.defaultView) && parent.top !== parent) {
                if (parent.addEventListener) {
                    parent.addEventListener("unload", unloadHandler, false)
                } else if (parent.attachEvent) {
                    parent.attachEvent("onunload", unloadHandler)
                }
            }
            support.attributes = assert(function(div) {
                div.className = "i";
                return !div.getAttribute("className")
            });
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(document.createComment(""));
                return !div.getElementsByTagName("*").length
            });
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !document.getElementsByName || !document.getElementsByName(expando).length
            });
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m ? [m] : []
                    }
                }
                ;
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId
                    }
                }
            } else {
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId
                    }
                }
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                    return context.getElementsByTagName(tag)
                } else if (support.qsa) {
                    return context.querySelectorAll(tag)
                }
            }
            : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    while (elem = results[i++]) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem)
                        }
                    }
                    return tmp
                }
                return results
            }
            ;
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                    return context.getElementsByClassName(className)
                }
            }
            ;
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = rnative.test(document.querySelectorAll)) {
                assert(function(div) {
                    docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (div.querySelectorAll("[msallowcapture^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
                    }
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
                    }
                    if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                        rbuggyQSA.push("~=")
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked")
                    }
                    if (!div.querySelectorAll("a#" + expando + "+*").length) {
                        rbuggyQSA.push(".#.+[+~]")
                    }
                });
                assert(function(div) {
                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("name", "D");
                    if (div.querySelectorAll("[name=d]").length) {
                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=")
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled")
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:")
                })
            }
            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos)
                })
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a
                  , bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
            }
            : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true
                        }
                    }
                }
                return false
            }
            ;
            sortOrder = hasCompare ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0
                }
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                    return compare
                }
                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                        return -1
                    }
                    if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                        return 1
                    }
                    return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0
                }
                return compare & 4 ? -1 : 1
            }
            : function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0
                }
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                if (!aup || !bup) {
                    return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0
                } else if (aup === bup) {
                    return siblingCheck(a, b)
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur)
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur)
                }
                while (ap[i] === bp[i]) {
                    i++
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
            }
            ;
            return document
        }
        ;
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements)
        }
        ;
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem)
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [elem]).length > 0
        }
        ;
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context)
            }
            return contains(context, elem)
        }
        ;
        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem)
            }
            var fn = Expr.attrHandle[name.toLowerCase()]
              , val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
        }
        ;
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg)
        }
        ;
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i)
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1)
                }
            }
            sortInput = null;
            return results
        }
        ;
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                while (node = elem[i++]) {
                    ret += getText(node)
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem)
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue
            }
            return ret
        }
        ;
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " "
                    }
                    return match.slice(0, 4)
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0])
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd")
                    } else if (match[3]) {
                        Sizzle.error(match[0])
                    }
                    return match
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null
                    }
                    if (match[3]) {
                        match[2] = match[4] || match[5] || ""
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess)
                    }
                    return match.slice(0, 3)
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true
                    }
                    : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                    }
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "")
                    })
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!="
                        }
                        if (!operator) {
                            return true
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false
                    }
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth"
                      , forward = type.slice(-4) !== "last"
                      , ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode
                    }
                    : function(elem, context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling"
                                }
                                return true
                            }
                            start = [forward ? parent.firstChild : parent.lastChild];
                            if (forward && useCache) {
                                node = parent;
                                outerCache = node[expando] || (node[expando] = {});
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                                        break
                                    }
                                }
                            } else {
                                if (useCache) {
                                    node = elem;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex
                                }
                                if (diff === false) {
                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                            if (useCache) {
                                                outerCache = node[expando] || (node[expando] = {});
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                uniqueCache[type] = [dirruns, diff]
                                            }
                                            if (node === elem) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0
                        }
                    }
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument)
                    }
                    if (fn.length > 1) {
                        args = [pseudo, pseudo, "", argument];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i])
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args)
                        }
                    }
                    return fn
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = []
                      , results = []
                      , matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem)
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        input[0] = null;
                        return !results.pop()
                    }
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0
                    }
                }),
                contains: markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                    }
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang)
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false
                    }
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id
                },
                root: function(elem) {
                    return elem === docElem
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                },
                enabled: function(elem) {
                    return elem.disabled === false
                },
                disabled: function(elem) {
                    return elem.disabled === true
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex
                    }
                    return elem.selected === true
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeType < 6) {
                            return false
                        }
                    }
                    return true
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem)
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName)
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName)
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button"
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text")
                },
                first: createPositionalPseudo(function() {
                    return [0]
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [length - 1]
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [argument < 0 ? argument + length : argument]
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (; i < length; i += 2) {
                        matchIndexes.push(i)
                    }
                    return matchIndexes
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (; i < length; i += 2) {
                        matchIndexes.push(i)
                    }
                    return matchIndexes
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; --i >= 0; ) {
                        matchIndexes.push(i)
                    }
                    return matchIndexes
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; ++i < length; ) {
                        matchIndexes.push(i)
                    }
                    return matchIndexes
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i)
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i)
        }
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters;
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0)
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar
                    }
                    groups.push(tokens = [])
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length)
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length)
                    }
                }
                if (!matched) {
                    break
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
        }
        ;
        function toSelector(tokens) {
            var i = 0
              , len = tokens.length
              , selector = "";
            for (; i < len; i++) {
                selector += tokens[i].value
            }
            return selector
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir
              , checkNonElements = base && dir === "parentNode"
              , doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml)
                    }
                }
            }
            : function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                            if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                return newCache[2] = oldCache[2]
                            } else {
                                uniqueCache[dir] = newCache;
                                if (newCache[2] = matcher(elem, context, xml)) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false
                    }
                }
                return true
            }
            : matchers[0]
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0
              , len = contexts.length;
            for (; i < len; i++) {
                Sizzle(selector, contexts[i], results)
            }
            return results
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (; i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i)
                        }
                    }
                }
            }
            return newUnmatched
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter)
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector)
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml)
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem)
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml)
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem)
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml)
                    } else {
                        push.apply(results, matcherOut)
                    }
                }
            })
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret
            }
            ];
            for (; i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [addCombinator(elementMatcher(matchers), matcher)]
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (; j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                    }
                    matchers.push(matcher)
                }
            }
            return elementMatcher(matchers)
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0
              , byElement = elementMatchers.length > 0
              , superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                if (outermost) {
                    outermostContext = context === document || context || outermost
                }
                for (; i !== len && (elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        if (!context && elem.ownerDocument !== document) {
                            setDocument(elem);
                            xml = !documentIsHTML
                        }
                        while (matcher = elementMatchers[j++]) {
                            if (matcher(elem, context || document, xml)) {
                                results.push(elem);
                                break
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--
                        }
                        if (seed) {
                            unmatched.push(elem)
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while (matcher = setMatchers[j++]) {
                        matcher(unmatched, setMatched, context, xml)
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results)
                                }
                            }
                        }
                        setMatched = condense(setMatched)
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results)
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup
                }
                return unmatched
            };
            return bySet ? markFunction(superMatcher) : superMatcher
        }
        compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                if (!match) {
                    match = tokenize(selector)
                }
                i = match.length;
                while (i--) {
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached)
                    } else {
                        elementMatchers.push(cached)
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                cached.selector = selector
            }
            return cached
        }
        ;
        select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) {
                        return results
                    } else if (compiled) {
                        context = context.parentNode
                    }
                    selector = selector.slice(tokens.shift().value.length)
                }
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i--) {
                    token = tokens[i];
                    if (Expr.relative[type = token.type]) {
                        break
                    }
                    if (find = Expr.find[type]) {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results
                            }
                            break
                        }
                    }
                }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results
        }
        ;
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = !!hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div")) & 1
        });
        if (!assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#"
        })) {
            addHandle("type|href|height|width", function(elem, name, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
                }
            })
        }
        if (!support.attributes || !assert(function(div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === ""
        })) {
            addHandle("value", function(elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue
                }
            })
        }
        if (!assert(function(div) {
            return div.getAttribute("disabled") == null
        })) {
            addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (!isXML) {
                    return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                }
            })
        }
        return Sizzle
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    var dir = function(elem, dir, until) {
        var matched = []
          , truncate = until !== undefined;
        while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break
                }
                matched.push(elem)
            }
        }
        return matched
    };
    var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n)
            }
        }
        return matched
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
    var risSimple = /^.[^:#\[\.,]*$/;
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not
            })
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not
            })
        }
        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not)
            }
            qualifier = jQuery.filter(qualifier, elements)
        }
        return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not
        })
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")"
        }
        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1
        }))
    }
    ;
    jQuery.fn.extend({
        find: function(selector) {
            var i, len = this.length, ret = [], self = this;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true
                        }
                    }
                }))
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret)
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false))
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true))
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
            return this
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                match = [null, selector, null]
            } else {
                match = rquickExpr.exec(selector)
            }
            if (match && (match[1] || !context)) {
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for (match in context) {
                            if (jQuery.isFunction(this[match])) {
                                this[match](context[match])
                            } else {
                                this.attr(match, context[match])
                            }
                        }
                    }
                    return this
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem && elem.parentNode) {
                        this.length = 1;
                        this[0] = elem
                    }
                    this.context = document;
                    this.selector = selector;
                    return this
                }
            } else if (!context || context.jquery) {
                return (context || root).find(selector)
            } else {
                return this.constructor(context).find(selector)
            }
        } else if (selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this
        } else if (jQuery.isFunction(selector)) {
            return root.ready !== undefined ? root.ready(selector) : selector(jQuery)
        }
        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context
        }
        return jQuery.makeArray(selector, this)
    }
    ;
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/
      , guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this)
              , l = targets.length;
            return this.filter(function() {
                var i = 0;
                for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true
                    }
                }
            })
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0])
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem)
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))))
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
        }
    });
    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null
        },
        parents: function(elem) {
            return dir(elem, "parentNode")
        },
        parentsUntil: function(elem, i, until) {
            return dir(elem, "parentNode", until)
        },
        next: function(elem) {
            return sibling(elem, "nextSibling")
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling")
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling")
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling")
        },
        nextUntil: function(elem, i, until) {
            return dir(elem, "nextSibling", until)
        },
        prevUntil: function(elem, i, until) {
            return dir(elem, "previousSibling", until)
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem)
        },
        children: function(elem) {
            return siblings(elem.firstChild)
        },
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes)
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until
            }
            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched)
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    jQuery.uniqueSort(matched)
                }
                if (rparentsprev.test(name)) {
                    matched.reverse()
                }
            }
            return this.pushStack(matched)
        }
    });
    var rnotwhite = /\S+/g;
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true
        });
        return object
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
                memory = queue.shift();
                while (++firingIndex < list.length) {
                    if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                        firingIndex = list.length;
                        memory = false
                    }
                }
            }
            if (!options.memory) {
                memory = false
            }
            firing = false;
            if (locked) {
                if (memory) {
                    list = []
                } else {
                    list = ""
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory)
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (jQuery.isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg)
                                }
                            } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                                add(arg)
                            }
                        })
                    }
                    )(arguments);
                    if (memory && !firing) {
                        fire()
                    }
                }
                return this
            },
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while ((index = jQuery.inArray(arg, list, index)) > -1) {
                        list.splice(index, 1);
                        if (index <= firingIndex) {
                            firingIndex--
                        }
                    }
                });
                return this
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
            },
            empty: function() {
                if (list) {
                    list = []
                }
                return this
            },
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this
            },
            disabled: function() {
                return !list
            },
            lock: function() {
                locked = queue = [];
                if (!memory) {
                    list = memory = ""
                }
                return this
            },
            locked: function() {
                return !!locked
            },
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [context, args.slice ? args.slice() : args];
                    queue.push(args);
                    if (!firing) {
                        fire()
                    }
                }
                return this
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!fired
            }
        };
        return self
    }
    ;
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]]
              , state = "pending"
              , promise = {
                state: function() {
                    return state
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject)
                                } else {
                                    newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                }
                            })
                        });
                        fns = null
                    }).promise()
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise
                }
            }
              , deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2]
                  , stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock)
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this
                }
                ;
                deferred[tuple[0] + "With"] = list.fireWith
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred)
            }
            return deferred
        },
        when: function(subordinate) {
            var i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values)
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values)
                    }
                }
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (; i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject)
                    } else {
                        --remaining
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues)
            }
            return deferred.promise()
        }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
        jQuery.ready.promise().done(fn);
        return this
    }
    ;
    jQuery.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++
            } else {
                jQuery.ready(true)
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return
            }
            readyList.resolveWith(document, [jQuery]);
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready")
            }
        }
    });
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready()
    }
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
                window.setTimeout(jQuery.ready)
            } else {
                document.addEventListener("DOMContentLoaded", completed);
                window.addEventListener("load", completed)
            }
        }
        return readyList.promise(obj)
    }
    ;
    jQuery.ready.promise();
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0
          , len = elems.length
          , bulk = key == null;
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw)
            }
        } else if (value !== undefined) {
            chainable = true;
            if (!jQuery.isFunction(value)) {
                raw = true
            }
            if (bulk) {
                if (raw) {
                    fn.call(elems, value);
                    fn = null
                } else {
                    bulk = fn;
                    fn = function(elem, key, value) {
                        return bulk.call(jQuery(elem), value)
                    }
                }
            }
            if (fn) {
                for (; i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
                }
            }
        }
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet
    };
    var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++
    }
    Data.uid = 1;
    Data.prototype = {
        register: function(owner, initial) {
            var value = initial || {};
            if (owner.nodeType) {
                owner[this.expando] = value
            } else {
                Object.defineProperty(owner, this.expando, {
                    value: value,
                    writable: true,
                    configurable: true
                })
            }
            return owner[this.expando]
        },
        cache: function(owner) {
            if (!acceptData(owner)) {
                return {}
            }
            var value = owner[this.expando];
            if (!value) {
                value = {};
                if (acceptData(owner)) {
                    if (owner.nodeType) {
                        owner[this.expando] = value
                    } else {
                        Object.defineProperty(owner, this.expando, {
                            value: value,
                            configurable: true
                        })
                    }
                }
            }
            return value
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
                cache[data] = value
            } else {
                for (prop in data) {
                    cache[prop] = data[prop]
                }
            }
            return cache
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key]
        },
        access: function(owner, key, value) {
            var stored;
            if (key === undefined || key && typeof key === "string" && value === undefined) {
                stored = this.get(owner, key);
                return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key))
            }
            this.set(owner, key, value);
            return value !== undefined ? value : key
        },
        remove: function(owner, key) {
            var i, name, camel, cache = owner[this.expando];
            if (cache === undefined) {
                return
            }
            if (key === undefined) {
                this.register(owner)
            } else {
                if (jQuery.isArray(key)) {
                    name = key.concat(key.map(jQuery.camelCase))
                } else {
                    camel = jQuery.camelCase(key);
                    if (key in cache) {
                        name = [key, camel]
                    } else {
                        name = camel;
                        name = name in cache ? [name] : name.match(rnotwhite) || []
                    }
                }
                i = name.length;
                while (i--) {
                    delete cache[name[i]]
                }
            }
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                if (owner.nodeType) {
                    owner[this.expando] = undefined
                } else {
                    delete owner[this.expando]
                }
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache)
        }
    };
    var dataPriv = new Data;
    var dataUser = new Data;
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , rmultiDash = /[A-Z]/g;
    function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
                } catch (e) {}
                dataUser.set(elem, key, data)
            } else {
                data = undefined
            }
        }
        return data
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem)
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data)
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name)
        },
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data)
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name)
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name])
                                }
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true)
                    }
                }
                return data
            }
            if (typeof key === "object") {
                return this.each(function() {
                    dataUser.set(this, key)
                })
            }
            return access(this, function(value) {
                var data, camelKey;
                if (elem && value === undefined) {
                    data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
                    if (data !== undefined) {
                        return data
                    }
                    camelKey = jQuery.camelCase(key);
                    data = dataUser.get(elem, camelKey);
                    if (data !== undefined) {
                        return data
                    }
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) {
                        return data
                    }
                    return
                }
                camelKey = jQuery.camelCase(key);
                this.each(function() {
                    var data = dataUser.get(this, camelKey);
                    dataUser.set(this, camelKey, value);
                    if (key.indexOf("-") > -1 && data !== undefined) {
                        dataUser.set(this, key, value)
                    }
                })
            }, null, value, arguments.length > 1, null, true)
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key)
            })
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = dataPriv.access(elem, type, jQuery.makeArray(data))
                    } else {
                        queue.push(data)
                    }
                }
                return queue || []
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type)
              , startLength = queue.length
              , fn = queue.shift()
              , hooks = jQuery._queueHooks(elem, type)
              , next = function() {
                jQuery.dequeue(elem, type)
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress")
                }
                delete hooks.stop;
                fn.call(elem, next, hooks)
            }
            if (!startLength && hooks) {
                hooks.empty.fire()
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [type + "queue", key])
                })
            })
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type)
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type)
                }
            })
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type)
            })
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", [])
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [elements])
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined
            }
            type = type || "fx";
            while (i--) {
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve)
                }
            }
            resolve();
            return defer.promise(obj)
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$","i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var isHidden = function(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem)
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur()
        }
        : function() {
            return jQuery.css(elem, prop, "")
        }
        , initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            unit = unit || initialInUnit[3];
            valueParts = valueParts || [];
            initialInUnit = +initial || 1;
            do {
                scale = scale || ".5";
                initialInUnit = initialInUnit / scale;
                jQuery.style(elem, prop, initialInUnit + unit)
            } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations)
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted
            }
        }
        return adjusted
    }
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([\w:-]+)/;
    var rscriptType = /^$|\/(?:java|ecma)script/i;
    var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    function getAll(context, tag) {
        var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret
    }
    function setGlobalEval(elems, refElements) {
        var i = 0
          , l = elems.length;
        for (; i < l; i++) {
            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
        }
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
                if (jQuery.type(elem) === "object") {
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem))
                } else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild
                    }
                    jQuery.merge(nodes, tmp.childNodes);
                    tmp = fragment.firstChild;
                    tmp.textContent = ""
                }
            }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem)
                }
                continue
            }
            contains = jQuery.contains(elem.ownerDocument, elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (contains) {
                setGlobalEval(tmp)
            }
            if (scripts) {
                j = 0;
                while (elem = tmp[j++]) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem)
                    }
                }
            }
        }
        return fragment
    }
    (function() {
        var fragment = document.createDocumentFragment()
          , div = fragment.appendChild(document.createElement("div"))
          , input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue
    }
    )();
    var rkeyEvent = /^key/
      , rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true
    }
    function returnFalse() {
        return false
    }
    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (err) {}
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
            if (typeof selector !== "string") {
                data = data || selector;
                selector = undefined
            }
            for (type in types) {
                on(elem, type, selector, data, types[type], one)
            }
            return elem
        }
        if (data == null && fn == null) {
            fn = selector;
            data = selector = undefined
        } else if (fn == null) {
            if (typeof selector === "string") {
                fn = data;
                data = undefined
            } else {
                fn = data;
                data = selector;
                selector = undefined
            }
        }
        if (fn === false) {
            fn = returnFalse
        } else if (!fn) {
            return elem
        }
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                jQuery().off(event);
                return origFn.apply(this, arguments)
            }
            ;
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector)
        })
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!elemData) {
                return
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {}
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined
                }
            }
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle)
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj)
                } else {
                    handlers.push(handleObj)
                }
                jQuery.event.global[type] = true
            }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
                return
            }
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true)
                    }
                    continue
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj)
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle)
                    }
                    delete events[type]
                }
            }
            if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, "handle events")
            }
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event)
            }
            return event.result
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
                for (; cur !== this; cur = cur.parentNode || this) {
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length
                            }
                            if (matches[sel]) {
                                matches.push(handleObj)
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            })
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                })
            }
            return handlerQueue
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode
                }
                return event
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0
                }
                return event
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event
            }
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop]
            }
            if (!event.target) {
                event.target = document
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode
            }
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                        this.click();
                        return false
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result
                    }
                }
            }
        }
    };
    jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle)
        }
    }
    ;
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src,props)
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse
        } else {
            this.type = src
        }
        if (props) {
            jQuery.extend(this, props)
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true
    }
    ;
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
                e.preventDefault()
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
                e.stopPropagation()
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
                e.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix
                }
                return ret
            }
        }
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn)
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1)
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type])
                }
                return this
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined
            }
            if (fn === false) {
                fn = returnFalse
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector)
            })
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , rnoInnerhtml = /<script|<style|<link/i
      , rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i
      , rscriptTypeMasked = /^true\/(.*)/
      , rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
    }
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1]
        } else {
            elem.removeAttribute("type")
        }
        return elem
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
            return
        }
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.access(src);
            pdataCur = dataPriv.set(dest, pdataOld);
            events = pdataOld.events;
            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};
                for (type in events) {
                    for (i = 0,
                    l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i])
                    }
                }
            }
        }
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur)
        }
    }
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue
        }
    }
    function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
        if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
                var self = collection.eq(index);
                if (isFunction) {
                    args[0] = value.call(this, index, self.html())
                }
                domManip(self, args, callback, ignored)
            })
        }
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
                fragment = first
            }
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                for (; i < l; i++) {
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        if (hasScripts) {
                            jQuery.merge(scripts, getAll(node, "script"))
                        }
                    }
                    callback.call(collection[i], node, i)
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    jQuery.map(scripts, restoreScript);
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src) {
                                if (jQuery._evalUrl) {
                                    jQuery._evalUrl(node.src)
                                }
                            } else {
                                jQuery.globalEval(node.textContent.replace(rcleanScript, ""))
                            }
                        }
                    }
                }
            }
        }
        return collection
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node))
            }
            if (node.parentNode) {
                if (keepData && jQuery.contains(node.ownerDocument, node)) {
                    setGlobalEval(getAll(node, "script"))
                }
                node.parentNode.removeChild(node)
            }
        }
        return elem
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html.replace(rxhtmlTag, "<$1></$2>")
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0,
                l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i])
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0,
                    l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i])
                    }
                } else {
                    cloneCopyEvent(elem, clone)
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"))
            }
            return clone
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== undefined; i++) {
                if (acceptData(elem)) {
                    if (data = elem[dataPriv.expando]) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type)
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle)
                                }
                            }
                        }
                        elem[dataPriv.expando] = undefined
                    }
                    if (elem[dataUser.expando]) {
                        elem[dataUser.expando] = undefined
                    }
                }
            }
        }
    });
    jQuery.fn.extend({
        domManip: domManip,
        detach: function(selector) {
            return remove(this, selector, true)
        },
        remove: function(selector) {
            return remove(this, selector)
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value
                    }
                })
            }, null, value, arguments.length)
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem)
                }
            })
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild)
                }
            })
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this)
                }
            })
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling)
                }
            })
        },
        empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.textContent = ""
                }
            }
            return this
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
            })
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}
                  , i = 0
                  , l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value
                            }
                        }
                        elem = 0
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value)
                }
            }, null, value, arguments.length)
        },
        replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this)
                    }
                }
            }, ignored)
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                push.apply(ret, elems.get())
            }
            return this.pushStack(ret)
        }
    });
    var iframe, elemdisplay = {
        HTML: "block",
        BODY: "block"
    };
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body)
          , display = jQuery.css(elem[0], "display");
        elem.detach();
        return display
    }
    function defaultDisplay(nodeName) {
        var doc = document
          , display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                doc = iframe[0].contentDocument;
                doc.write();
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach()
            }
            elemdisplay[nodeName] = display
        }
        return display
    }
    var rmargin = /^margin/;
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$","i");
    var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window
        }
        return view.getComputedStyle(elem)
    };
    var swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name]
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name]
        }
        return ret
    };
    var documentElement = document.documentElement;
    (function() {
        var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        if (!div.style) {
            return
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        container.appendChild(div);
        function computeStyleTests() {
            div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
            div.innerHTML = "";
            documentElement.appendChild(container);
            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = divStyle.marginLeft === "2px";
            boxSizingReliableVal = divStyle.width === "4px";
            div.style.marginRight = "50%";
            pixelMarginRightVal = divStyle.marginRight === "4px";
            documentElement.removeChild(container)
        }
        jQuery.extend(support, {
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal
            },
            boxSizingReliable: function() {
                if (boxSizingReliableVal == null) {
                    computeStyleTests()
                }
                return boxSizingReliableVal
            },
            pixelMarginRight: function() {
                if (boxSizingReliableVal == null) {
                    computeStyleTests()
                }
                return pixelMarginRightVal
            },
            reliableMarginLeft: function() {
                if (boxSizingReliableVal == null) {
                    computeStyleTests()
                }
                return reliableMarginLeftVal
            },
            reliableMarginRight: function() {
                var ret, marginDiv = div.appendChild(document.createElement("div"));
                marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                documentElement.appendChild(container);
                ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
                documentElement.removeChild(container);
                div.removeChild(marginDiv);
                return ret
            }
        })
    }
    )();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
        if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
            ret = jQuery.style(elem, name)
        }
        if (computed) {
            if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth
            }
        }
        return ret !== undefined ? ret + "" : ret
    }
    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                if (conditionFn()) {
                    delete this.get;
                    return
                }
                return (this.get = hookFn).apply(this, arguments)
            }
        }
    }
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/
      , cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , cssPrefixes = ["Webkit", "O", "Moz", "ms"]
      , emptyStyle = document.createElement("div").style;
    function vendorPropName(name) {
        if (name in emptyStyle) {
            return name
        }
        var capName = name[0].toUpperCase() + name.slice(1)
          , i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name
            }
        }
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0
          , val = 0;
        for (; i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles)
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles)
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
                }
            }
        }
        return val
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true
          , val = name === "width" ? elem.offsetWidth : elem.offsetHeight
          , styles = getStyles(elem)
          , isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name]
            }
            if (rnumnonpx.test(val)) {
                return val
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            val = parseFloat(val) || 0
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
    }
    function showHide(elements, show) {
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue
            }
            values[index] = dataPriv.get(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = ""
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName))
                }
            } else {
                hidden = isHidden(elem);
                if (display !== "none" || !hidden) {
                    dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none"
            }
        }
        return elements
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    type = "number"
                }
                if (value == null || value !== value) {
                    return
                }
                if (type === "number") {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")
                }
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit"
                }
                if (!hooks || !("set"in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    style[name] = value
                }
            } else {
                if (hooks && "get"in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret
                }
                return style[name]
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get"in hooks) {
                val = hooks.get(elem, true, extra)
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles)
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name]
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val
            }
            return val
        }
    });
    jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra)
                    }) : getWidthOrHeight(elem, name, extra)
                }
            },
            set: function(elem, value, extra) {
                var matches, styles = extra && getStyles(elem), subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[name] = value;
                    value = jQuery.css(elem, name)
                }
                return setPositiveNumber(elem, value, subtract)
            }
        }
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                marginLeft: 0
            }, function() {
                return elem.getBoundingClientRect().left
            })) + "px"
        }
    });
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        if (computed) {
            return swap(elem, {
                display: "inline-block"
            }, curCSS, [elem, "marginRight"])
        }
    });
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0
                  , expanded = {}
                  , parts = typeof value === "string" ? value.split(" ") : [value];
                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
                }
                return expanded
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
        }
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles)
                    }
                    return map
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
            }, name, value, arguments.length > 1)
        },
        show: function() {
            return showHide(this, true)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide()
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show()
                } else {
                    jQuery(this).hide()
                }
            })
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem,options,prop,end,easing)
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
            } else {
                this.pos = eased = percent
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (hooks && hooks.set) {
                hooks.set(this)
            } else {
                Tween.propHooks._default.set(this)
            }
            return this
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop]
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween)
                } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                } else {
                    tween.elem[tween.prop] = tween.now
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now
            }
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function createFxNow() {
        window.setTimeout(function() {
            fxNow = undefined
        });
        return fxNow = jQuery.now()
    }
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type
        }
        return attrs
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
                return tween
            }
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire()
                    }
                }
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire()
                    }
                })
            })
        }
        if (elem.nodeType === 1 && ("height"in props || "width"in props)) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            display = jQuery.css(elem, "display");
            checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                style.display = "inline-block"
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2]
            })
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true
                    } else {
                        continue
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
            } else {
                display = undefined
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden"in dataShow) {
                    hidden = dataShow.hidden
                }
            } else {
                dataShow = dataPriv.access(elem, "fxshow", {})
            }
            if (toggle) {
                dataShow.hidden = !hidden
            }
            if (hidden) {
                jQuery(elem).show()
            } else {
                anim.done(function() {
                    jQuery(elem).hide()
                })
            }
            anim.done(function() {
                var prop;
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop])
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0
                    }
                }
            }
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0]
            }
            if (index !== name) {
                props[name] = value;
                delete props[index]
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand"in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing
                    }
                }
            } else {
                specialEasing[name] = easing
            }
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem
        }), tick = function() {
            if (stopped) {
                return false
            }
            var currentTime = fxNow || createFxNow()
              , remaining = Math.max(0, animation.startTime + animation.duration - currentTime)
              , temp = remaining / animation.duration || 0
              , percent = 1 - temp
              , index = 0
              , length = animation.tweens.length;
            for (; index < length; index++) {
                animation.tweens[index].run(percent)
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length) {
                return remaining
            } else {
                deferred.resolveWith(elem, [animation]);
                return false
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween
            },
            stop: function(gotoEnd) {
                var index = 0
                  , length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this
                }
                stopped = true;
                for (; index < length; index++) {
                    animation.tweens[index].run(1)
                }
                if (gotoEnd) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                    deferred.resolveWith(elem, [animation, gotoEnd])
                } else {
                    deferred.rejectWith(elem, [animation, gotoEnd])
                }
                return this
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (jQuery.isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)
                }
                return result
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation)
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [function(prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween
            }
            ]
        },
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = ["*"]
            } else {
                props = props.match(rnotwhite)
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback)
            }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback)
            } else {
                Animation.prefilters.push(callback)
            }
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx"
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this)
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue)
            }
        }
        ;
        return opt
    }
    ;
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback)
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop)
              , optall = jQuery.speed(speed, easing, callback)
              , doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || dataPriv.get(this, "finish")) {
                    anim.stop(true)
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd)
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", [])
            }
            return this.each(function() {
                var dequeue = true
                  , index = type != null && type + "queueHooks"
                  , timers = jQuery.timers
                  , data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index])
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index])
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1)
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type)
                }
            })
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx"
            }
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true)
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1)
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this)
                    }
                }
                delete data.finish
            })
        }
    });
    jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback)
        }
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback)
        }
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = jQuery.now();
        for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1)
            }
        }
        if (!timers.length) {
            jQuery.fx.stop()
        }
        fxNow = undefined
    }
    ;
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start()
        } else {
            jQuery.timers.pop()
        }
    }
    ;
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval)
        }
    }
    ;
    jQuery.fx.stop = function() {
        window.clearInterval(timerId);
        timerId = null
    }
    ;
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() {
                window.clearTimeout(timeout)
            }
        })
    }
    ;
    (function() {
        var input = document.createElement("input")
          , select = document.createElement("select")
          , opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t"
    }
    )();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1)
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name)
            })
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
                return
            }
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value)
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined)
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return
                }
                if (hooks && "set"in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret
                }
                elem.setAttribute(name, value + "");
                return value
            }
            if (hooks && "get"in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? undefined : ret
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val
                        }
                        return value
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        elem[propName] = false
                    }
                    elem.removeAttribute(name)
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name)
            } else {
                elem.setAttribute(name, name)
            }
            return name
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle;
            if (!isXML) {
                handle = attrHandle[name];
                attrHandle[name] = ret;
                ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                attrHandle[name] = handle
            }
            return ret
        }
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i
      , rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1)
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name]
            })
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
                return
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name]
            }
            if (value !== undefined) {
                if (hooks && "set"in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret
                }
                return elem[name] = value
            }
            if (hooks && "get"in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret
            }
            return elem[name]
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    });
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex
                }
                return null
            },
            set: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex
                    }
                }
            }
        }
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this
    });
    var rclass = /[\t\r\n\f]/g;
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || ""
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)))
                })
            }
            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];
                while (elem = this[i++]) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " "
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];
                while (elem = this[i++]) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ")
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue)
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value)
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
                })
            }
            return this.each(function() {
                var className, i, self, classNames;
                if (type === "string") {
                    i = 0;
                    self = jQuery(this);
                    classNames = value.match(rnotwhite) || [];
                    while (className = classNames[i++]) {
                        if (self.hasClass(className)) {
                            self.removeClass(className)
                        } else {
                            self.addClass(className)
                        }
                    }
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) {
                        dataPriv.set(this, "__className__", className)
                    }
                    if (this.setAttribute) {
                        this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "")
                    }
                }
            })
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
                if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                    return true
                }
            }
            return false
        }
    });
    var rreturn = /\r/g
      , rspaces = /[\x20\t\r\n\f]+/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get"in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret
                }
                return
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val())
                } else {
                    val = value
                }
                if (val == null) {
                    val = ""
                } else if (typeof val === "number") {
                    val += ""
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + ""
                    })
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set"in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val
                }
            })
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ")
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (; i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value
                            }
                            values.push(value)
                        }
                    }
                    return values
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                            optionSet = true
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1
                    }
                    return values
                }
            }
        }
    });
    jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value
            }
        }
    });
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return
            }
            if (type.indexOf(".") > -1) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort()
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type,typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data)
                }
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault()
                    }
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                    if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null
                        }
                        jQuery.event.triggered = type;
                        elem[type]();
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp
                        }
                    }
                }
            }
            return event.result
        },
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event, event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem)
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this)
            })
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true)
            }
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
        }
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
        }
    });
    support.focusin = "onfocusin"in window;
    if (!support.focusin) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this
                      , attaches = dataPriv.access(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, true)
                    }
                    dataPriv.access(doc, fix, (attaches || 0) + 1)
                },
                teardown: function() {
                    var doc = this.ownerDocument || this
                      , attaches = dataPriv.access(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        dataPriv.remove(doc, fix)
                    } else {
                        dataPriv.access(doc, fix, attaches)
                    }
                }
            }
        })
    }
    var location = window.location;
    var nonce = jQuery.now();
    var rquery = /\?/;
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "")
    }
    ;
    jQuery.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
            return null
        }
        try {
            xml = (new window.DOMParser).parseFromString(data, "text/xml")
        } catch (e) {
            xml = undefined
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data)
        }
        return xml
    }
    ;
    var rhash = /#.*$/
      , rts = /([?&])_=[^&]*/
      , rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , rnoContent = /^(?:GET|HEAD)$/
      , rprotocol = /^\/\//
      , prefilters = {}
      , transports = {}
      , allTypes = "*/".concat("*")
      , originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*"
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func)
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func)
                    }
                }
            }
        }
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}
          , seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport)
                }
            });
            return selected
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep)
        }
        return target
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break
                }
            }
        }
        if (dataTypes[0]in responses) {
            finalDataType = dataTypes[0]
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break
                }
                if (!firstDataType) {
                    firstDataType = type
                }
            }
            finalDataType = finalDataType || firstDataType
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType)
            }
            return responses[finalDataType]
        }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv]
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType)
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2]
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1])
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s.throws) {
                            response = conv(response)
                        } else {
                            try {
                                response = conv(response)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        }
    }
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2]
                            }
                        }
                        match = responseHeaders[key.toLowerCase()]
                    }
                    return match == null ? null : match
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value
                    }
                    return this
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type
                    }
                    return this
                },
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                statusCode[code] = [statusCode[code], map[code]]
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status])
                        }
                    }
                    return this
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText)
                    }
                    done(0, finalText);
                    return this
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                try {
                    urlAnchor.href = s.url;
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host
                } catch (e) {
                    s.crossDomain = true
                }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional)
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart")
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType)
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i])
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort()
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i])
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport")
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s])
                }
                if (state === 2) {
                    return jqXHR
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function() {
                        jqXHR.abort("timeout")
                    }, s.timeout)
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done)
                } catch (e) {
                    if (state < 2) {
                        done(-1, e)
                    } else {
                        throw e
                    }
                }
            }
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return
                }
                state = 2;
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer)
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses)
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent"
                    } else if (status === 304) {
                        statusText = "notmodified"
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
                }
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop")
                    }
                }
            }
            return jqXHR
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json")
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script")
        }
    });
    jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined
            }
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url))
        }
    });
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            throws: true
        })
    }
    ;
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i))
                })
            }
            if (this[0]) {
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0])
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild
                    }
                    return elem
                }).append(this)
            }
            return this
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i))
                })
            }
            return this.each(function() {
                var self = jQuery(this)
                  , contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html)
                } else {
                    self.append(html)
                }
            })
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    jQuery.expr.filters.hidden = function(elem) {
        return !jQuery.expr.filters.visible(elem)
    }
    ;
    jQuery.expr.filters.visible = function(elem) {
        return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0
    }
    ;
    var r20 = /%20/g
      , rbracket = /\[\]$/
      , rCRLF = /\r?\n/g
      , rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
      , rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v)
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add)
                }
            })
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
            }
        } else {
            add(prefix, obj)
        }
    }
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value)
            })
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add)
            }
        }
        return s.join("&").replace(r20, "+")
    }
    ;
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                }
            }).get()
        }
    });
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var xhrSuccessStatus = {
        0: 200,
        1223: 204
    }
      , xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials"in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function(headers, complete) {
                    var i, xhr = options.xhr();
                    xhr.open(options.type, options.url, options.async, options.username, options.password);
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i]
                        }
                    }
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType)
                    }
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest"
                    }
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i])
                    }
                    callback = function(type) {
                        return function() {
                            if (callback) {
                                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                                if (type === "abort") {
                                    xhr.abort()
                                } else if (type === "error") {
                                    if (typeof xhr.status !== "number") {
                                        complete(0, "error")
                                    } else {
                                        complete(xhr.status, xhr.statusText)
                                    }
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                        binary: xhr.response
                                    } : {
                                        text: xhr.responseText
                                    }, xhr.getAllResponseHeaders())
                                }
                            }
                        }
                    }
                    ;
                    xhr.onload = callback();
                    errorCallback = xhr.onerror = callback("error");
                    if (xhr.onabort !== undefined) {
                        xhr.onabort = errorCallback
                    } else {
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4) {
                                window.setTimeout(function() {
                                    if (callback) {
                                        errorCallback()
                                    }
                                })
                            }
                        }
                    }
                    callback = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null)
                    } catch (e) {
                        if (callback) {
                            throw e
                        }
                    }
                },
                abort: function() {
                    if (callback) {
                        callback()
                    }
                }
            }
        }
    });
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false
        }
        if (s.crossDomain) {
            s.type = "GET"
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type)
                        }
                    }
                    );
                    document.head.appendChild(script[0])
                },
                abort: function() {
                    if (callback) {
                        callback()
                    }
                }
            }
        }
    });
    var oldCallbacks = []
      , rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            this[callback] = true;
            return callback
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called")
                }
                return responseContainer[0]
            }
            ;
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments
            }
            ;
            jqXHR.always(function() {
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName)
                } else {
                    window[callbackName] = overwritten
                }
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName)
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0])
                }
                responseContainer = overwritten = undefined
            });
            return "script"
        }
    });
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false
        }
        context = context || document;
        var parsed = rsingleTag.exec(data)
          , scripts = !keepScripts && [];
        if (parsed) {
            return [context.createElement(parsed[1])]
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove()
        }
        return jQuery.merge([], parsed.childNodes)
    }
    ;
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments)
        }
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = jQuery.trim(url.slice(off));
            url = url.slice(0, off)
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
            }).always(callback && function(jqXHR, status) {
                self.each(function() {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
                })
            }
            )
        }
        return this
    }
    ;
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn)
        }
    });
    jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem
        }).length
    }
    ;
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView
    }
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
                elem.style.position = "relative"
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, jQuery.extend({}, curOffset))
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft
            }
            if ("using"in options) {
                options.using.call(elem, props)
            } else {
                curElem.css(props)
            }
        }
    };
    jQuery.fn.extend({
        offset: function(options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i)
                })
            }
            var docElem, win, elem = this[0], box = {
                top: 0,
                left: 0
            }, doc = elem && elem.ownerDocument;
            if (!doc) {
                return
            }
            docElem = doc.documentElement;
            if (!jQuery.contains(docElem, elem)) {
                return box
            }
            box = elem.getBoundingClientRect();
            win = getWindow(doc);
            return {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            }
        },
        position: function() {
            if (!this[0]) {
                return
            }
            var offsetParent, offset, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect()
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset()
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent
                }
                return offsetParent || documentElement
            })
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? win[prop] : elem[method]
                }
                if (win) {
                    win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset)
                } else {
                    elem[method] = val
                }
            }, method, val, arguments.length)
        }
    });
    jQuery.each(["top", "left"], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
            }
        })
    });
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean")
                  , extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name]
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                }, type, chainable ? margin : undefined, chainable, null)
            }
        })
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn)
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn)
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn)
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
        },
        size: function() {
            return this.length
        }
    });
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery
        })
    }
    var _jQuery = window.jQuery
      , _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery
        }
        return jQuery
    }
    ;
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery
    }
    return jQuery
});
(function(jQuery, window, undefined) {
    jQuery.migrateVersion = "1.4.1";
    var warnedAbout = {};
    jQuery.migrateWarnings = [];
    if (window.console && window.console.log) {
        window.console.log("JQMIGRATE: Migrate is installed" + (jQuery.migrateMute ? "" : " with logging active") + ", version " + jQuery.migrateVersion)
    }
    if (jQuery.migrateTrace === undefined) {
        jQuery.migrateTrace = true
    }
    jQuery.migrateReset = function() {
        warnedAbout = {};
        jQuery.migrateWarnings.length = 0
    }
    ;
    function migrateWarn(msg) {
        var console = window.console;
        if (!warnedAbout[msg]) {
            warnedAbout[msg] = true;
            jQuery.migrateWarnings.push(msg);
            if (console && console.warn && !jQuery.migrateMute) {
                console.warn("JQMIGRATE: " + msg);
                if (jQuery.migrateTrace && console.trace) {
                    console.trace()
                }
            }
        }
    }
    function migrateWarnProp(obj, prop, value, msg) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(obj, prop, {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        migrateWarn(msg);
                        return value
                    },
                    set: function(newValue) {
                        migrateWarn(msg);
                        value = newValue
                    }
                });
                return
            } catch (err) {}
        }
        jQuery._definePropertyBroken = true;
        obj[prop] = value
    }
    if (document.compatMode === "BackCompat") {
        migrateWarn("jQuery is not compatible with Quirks Mode")
    }
    var attrFn = jQuery("<input/>", {
        size: 1
    }).attr("size") && jQuery.attrFn
      , oldAttr = jQuery.attr
      , valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get || function() {
        return null
    }
      , valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set || function() {
        return undefined
    }
      , rnoType = /^(?:input|button)$/i
      , rnoAttrNodeType = /^[238]$/
      , rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
      , ruseDefault = /^(?:checked|selected)$/i;
    migrateWarnProp(jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated");
    jQuery.attr = function(elem, name, value, pass) {
        var lowerName = name.toLowerCase()
          , nType = elem && elem.nodeType;
        if (pass) {
            if (oldAttr.length < 4) {
                migrateWarn("jQuery.fn.attr( props, pass ) is deprecated")
            }
            if (elem && !rnoAttrNodeType.test(nType) && (attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name]))) {
                return jQuery(elem)[name](value)
            }
        }
        if (name === "type" && value !== undefined && rnoType.test(elem.nodeName) && elem.parentNode) {
            migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8")
        }
        if (!jQuery.attrHooks[lowerName] && rboolean.test(lowerName)) {
            jQuery.attrHooks[lowerName] = {
                get: function(elem, name) {
                    var attrNode, property = jQuery.prop(elem, name);
                    return property === true || typeof property !== "boolean" && (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ? name.toLowerCase() : undefined
                },
                set: function(elem, value, name) {
                    var propName;
                    if (value === false) {
                        jQuery.removeAttr(elem, name)
                    } else {
                        propName = jQuery.propFix[name] || name;
                        if (propName in elem) {
                            elem[propName] = true
                        }
                        elem.setAttribute(name, name.toLowerCase())
                    }
                    return name
                }
            };
            if (ruseDefault.test(lowerName)) {
                migrateWarn("jQuery.fn.attr('" + lowerName + "') might use property instead of attribute")
            }
        }
        return oldAttr.call(jQuery, elem, name, value)
    }
    ;
    jQuery.attrHooks.value = {
        get: function(elem, name) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrGet.apply(this, arguments)
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value') no longer gets properties")
            }
            return name in elem ? elem.value : null
        },
        set: function(elem, value) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrSet.apply(this, arguments)
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value', val) no longer sets properties")
            }
            elem.value = value
        }
    };
    var matched, browser, oldInit = jQuery.fn.init, oldFind = jQuery.find, oldParseJSON = jQuery.parseJSON, rspaceAngle = /^\s*</, rattrHashTest = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, rattrHashGlob = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    jQuery.fn.init = function(selector, context, rootjQuery) {
        var match, ret;
        if (selector && typeof selector === "string") {
            if (!jQuery.isPlainObject(context) && (match = rquickExpr.exec(jQuery.trim(selector))) && match[0]) {
                if (!rspaceAngle.test(selector)) {
                    migrateWarn("$(html) HTML strings must start with '<' character")
                }
                if (match[3]) {
                    migrateWarn("$(html) HTML text after last tag is ignored")
                }
                if (match[0].charAt(0) === "#") {
                    migrateWarn("HTML string cannot start with a '#' character");
                    jQuery.error("JQMIGRATE: Invalid selector string (XSS)")
                }
                if (context && context.context && context.context.nodeType) {
                    context = context.context
                }
                if (jQuery.parseHTML) {
                    return oldInit.call(this, jQuery.parseHTML(match[2], context && context.ownerDocument || context || document, true), context, rootjQuery)
                }
            }
        }
        ret = oldInit.apply(this, arguments);
        if (selector && selector.selector !== undefined) {
            ret.selector = selector.selector;
            ret.context = selector.context
        } else {
            ret.selector = typeof selector === "string" ? selector : "";
            if (selector) {
                ret.context = selector.nodeType ? selector : context || document
            }
        }
        return ret
    }
    ;
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.find = function(selector) {
        var args = Array.prototype.slice.call(arguments);
        if (typeof selector === "string" && rattrHashTest.test(selector)) {
            try {
                document.querySelector(selector)
            } catch (err1) {
                selector = selector.replace(rattrHashGlob, function(_, attr, op, value) {
                    return "[" + attr + op + '"' + value + '"]'
                });
                try {
                    document.querySelector(selector);
                    migrateWarn("Attribute selector with '#' must be quoted: " + args[0]);
                    args[0] = selector
                } catch (err2) {
                    migrateWarn("Attribute selector with '#' was not fixed: " + args[0])
                }
            }
        }
        return oldFind.apply(this, args)
    }
    ;
    var findProp;
    for (findProp in oldFind) {
        if (Object.prototype.hasOwnProperty.call(oldFind, findProp)) {
            jQuery.find[findProp] = oldFind[findProp]
        }
    }
    jQuery.parseJSON = function(json) {
        if (!json) {
            migrateWarn("jQuery.parseJSON requires a valid JSON string");
            return null
        }
        return oldParseJSON.apply(this, arguments)
    }
    ;
    jQuery.uaMatch = function(ua) {
        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        }
    }
    ;
    if (!jQuery.browser) {
        matched = jQuery.uaMatch(navigator.userAgent);
        browser = {};
        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version
        }
        if (browser.chrome) {
            browser.webkit = true
        } else if (browser.webkit) {
            browser.safari = true
        }
        jQuery.browser = browser
    }
    migrateWarnProp(jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated");
    jQuery.boxModel = jQuery.support.boxModel = document.compatMode === "CSS1Compat";
    migrateWarnProp(jQuery, "boxModel", jQuery.boxModel, "jQuery.boxModel is deprecated");
    migrateWarnProp(jQuery.support, "boxModel", jQuery.support.boxModel, "jQuery.support.boxModel is deprecated");
    jQuery.sub = function() {
        function jQuerySub(selector, context) {
            return new jQuerySub.fn.init(selector,context)
        }
        jQuery.extend(true, jQuerySub, this);
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init(selector, context) {
            var instance = jQuery.fn.init.call(this, selector, context, rootjQuerySub);
            return instance instanceof jQuerySub ? instance : jQuerySub(instance)
        }
        ;
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        migrateWarn("jQuery.sub() is deprecated");
        return jQuerySub
    }
    ;
    jQuery.fn.size = function() {
        migrateWarn("jQuery.fn.size() is deprecated; use the .length property");
        return this.length
    }
    ;
    var internalSwapCall = false;
    if (jQuery.swap) {
        jQuery.each(["height", "width", "reliableMarginRight"], function(_, name) {
            var oldHook = jQuery.cssHooks[name] && jQuery.cssHooks[name].get;
            if (oldHook) {
                jQuery.cssHooks[name].get = function() {
                    var ret;
                    internalSwapCall = true;
                    ret = oldHook.apply(this, arguments);
                    internalSwapCall = false;
                    return ret
                }
            }
        })
    }
    jQuery.swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        if (!internalSwapCall) {
            migrateWarn("jQuery.swap() is undocumented and deprecated")
        }
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name]
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name]
        }
        return ret
    }
    ;
    jQuery.ajaxSetup({
        converters: {
            "text json": jQuery.parseJSON
        }
    });
    var oldFnData = jQuery.fn.data;
    jQuery.fn.data = function(name) {
        var ret, evt, elem = this[0];
        if (elem && name === "events" && arguments.length === 1) {
            ret = jQuery.data(elem, name);
            evt = jQuery._data(elem, name);
            if ((ret === undefined || ret === evt) && evt !== undefined) {
                migrateWarn("Use of jQuery.fn.data('events') is deprecated");
                return evt
            }
        }
        return oldFnData.apply(this, arguments)
    }
    ;
    var rscriptType = /\/(java|ecma)script/i;
    if (!jQuery.clean) {
        jQuery.clean = function(elems, context, fragment, scripts) {
            context = context || document;
            context = !context.nodeType && context[0] || context;
            context = context.ownerDocument || context;
            migrateWarn("jQuery.clean() is deprecated");
            var i, elem, handleScript, jsTags, ret = [];
            jQuery.merge(ret, jQuery.buildFragment(elems, context).childNodes);
            if (fragment) {
                handleScript = function(elem) {
                    if (!elem.type || rscriptType.test(elem.type)) {
                        return scripts ? scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) : fragment.appendChild(elem)
                    }
                }
                ;
                for (i = 0; (elem = ret[i]) != null; i++) {
                    if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {
                        fragment.appendChild(elem);
                        if (typeof elem.getElementsByTagName !== "undefined") {
                            jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);
                            ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                            i += jsTags.length
                        }
                    }
                }
            }
            return ret
        }
    }
    var eventAdd = jQuery.event.add
      , eventRemove = jQuery.event.remove
      , eventTrigger = jQuery.event.trigger
      , oldToggle = jQuery.fn.toggle
      , oldLive = jQuery.fn.live
      , oldDie = jQuery.fn.die
      , oldLoad = jQuery.fn.load
      , ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess"
      , rajaxEvent = new RegExp("\\b(?:" + ajaxEvents + ")\\b")
      , rhoverHack = /(?:^|\s)hover(\.\S+|)\b/
      , hoverHack = function(events) {
        if (typeof events !== "string" || jQuery.event.special.hover) {
            return events
        }
        if (rhoverHack.test(events)) {
            migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")
        }
        return events && events.replace(rhoverHack, "mouseenter$1 mouseleave$1")
    };
    if (jQuery.event.props && jQuery.event.props[0] !== "attrChange") {
        jQuery.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement")
    }
    if (jQuery.event.dispatch) {
        migrateWarnProp(jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated")
    }
    jQuery.event.add = function(elem, types, handler, data, selector) {
        if (elem !== document && rajaxEvent.test(types)) {
            migrateWarn("AJAX events should be attached to document: " + types)
        }
        eventAdd.call(this, elem, hoverHack(types || ""), handler, data, selector)
    }
    ;
    jQuery.event.remove = function(elem, types, handler, selector, mappedTypes) {
        eventRemove.call(this, elem, hoverHack(types) || "", handler, selector, mappedTypes)
    }
    ;
    jQuery.each(["load", "unload", "error"], function(_, name) {
        jQuery.fn[name] = function() {
            var args = Array.prototype.slice.call(arguments, 0);
            if (name === "load" && typeof args[0] === "string") {
                return oldLoad.apply(this, args)
            }
            migrateWarn("jQuery.fn." + name + "() is deprecated");
            args.splice(0, 0, name);
            if (arguments.length) {
                return this.bind.apply(this, args)
            }
            this.triggerHandler.apply(this, args);
            return this
        }
    });
    jQuery.fn.toggle = function(fn, fn2) {
        if (!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
            return oldToggle.apply(this, arguments)
        }
        migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");
        var args = arguments
          , guid = fn.guid || jQuery.guid++
          , i = 0
          , toggler = function(event) {
            var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
            jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
            event.preventDefault();
            return args[lastToggle].apply(this, arguments) || false
        };
        toggler.guid = guid;
        while (i < args.length) {
            args[i++].guid = guid
        }
        return this.click(toggler)
    }
    ;
    jQuery.fn.live = function(types, data, fn) {
        migrateWarn("jQuery.fn.live() is deprecated");
        if (oldLive) {
            return oldLive.apply(this, arguments)
        }
        jQuery(this.context).on(types, this.selector, data, fn);
        return this
    }
    ;
    jQuery.fn.die = function(types, fn) {
        migrateWarn("jQuery.fn.die() is deprecated");
        if (oldDie) {
            return oldDie.apply(this, arguments)
        }
        jQuery(this.context).off(types, this.selector || "**", fn);
        return this
    }
    ;
    jQuery.event.trigger = function(event, data, elem, onlyHandlers) {
        if (!elem && !rajaxEvent.test(event)) {
            migrateWarn("Global events are undocumented and deprecated")
        }
        return eventTrigger.call(this, event, data, elem || document, onlyHandlers)
    }
    ;
    jQuery.each(ajaxEvents.split("|"), function(_, name) {
        jQuery.event.special[name] = {
            setup: function() {
                var elem = this;
                if (elem !== document) {
                    jQuery.event.add(document, name + "." + jQuery.guid, function() {
                        jQuery.event.trigger(name, Array.prototype.slice.call(arguments, 1), elem, true)
                    });
                    jQuery._data(this, name, jQuery.guid++)
                }
                return false
            },
            teardown: function() {
                if (this !== document) {
                    jQuery.event.remove(document, name + "." + jQuery._data(this, name))
                }
                return false
            }
        }
    });
    jQuery.event.special.ready = {
        setup: function() {
            if (this === document) {
                migrateWarn("'ready' event is deprecated")
            }
        }
    };
    var oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack
      , oldFnFind = jQuery.fn.find;
    jQuery.fn.andSelf = function() {
        migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return oldSelf.apply(this, arguments)
    }
    ;
    jQuery.fn.find = function(selector) {
        var ret = oldFnFind.apply(this, arguments);
        ret.context = this.context;
        ret.selector = this.selector ? this.selector + " " + selector : selector;
        return ret
    }
    ;
    if (jQuery.Callbacks) {
        var oldDeferred = jQuery.Deferred
          , tuples = [["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory")]];
        jQuery.Deferred = function(func) {
            var deferred = oldDeferred()
              , promise = deferred.promise();
            deferred.pipe = promise.pipe = function() {
                var fns = arguments;
                migrateWarn("deferred.pipe() is deprecated");
                return jQuery.Deferred(function(newDefer) {
                    jQuery.each(tuples, function(i, tuple) {
                        var fn = jQuery.isFunction(fns[i]) && fns[i];
                        deferred[tuple[1]](function() {
                            var returned = fn && fn.apply(this, arguments);
                            if (returned && jQuery.isFunction(returned.promise)) {
                                returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
                            } else {
                                newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                            }
                        })
                    });
                    fns = null
                }).promise()
            }
            ;
            deferred.isResolved = function() {
                migrateWarn("deferred.isResolved is deprecated");
                return deferred.state() === "resolved"
            }
            ;
            deferred.isRejected = function() {
                migrateWarn("deferred.isRejected is deprecated");
                return deferred.state() === "rejected"
            }
            ;
            if (func) {
                func.call(deferred, deferred)
            }
            return deferred
        }
    }
}
)(jQuery, window);
(function($) {
    $.cookie = function(key, value, options) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);
            if (value === null || value === undefined) {
                options.expires = -1
            }
            if (typeof options.expires === "number") {
                var days = options.expires
                  , t = options.expires = new Date;
                t.setDate(t.getDate() + days)
            }
            value = String(value);
            return document.cookie = [encodeURIComponent(key), "=", options.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
        }
        options = value || {};
        var decode = options.raw ? function(s) {
            return s
        }
        : decodeURIComponent;
        var pairs = document.cookie.split("; ");
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split("="); i++) {
            if (decode(pair[0]) === key)
                return decode(pair[1] || "")
        }
        return null
    }
}
)(jQuery);
window.url = function() {
    function a(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }
    return function(b, c) {
        var d = c || window.location.toString();
        if (!b)
            return d;
        b = b.toString(),
        "//" === d.substring(0, 2) ? d = "http:" + d : 1 === d.split("://").length && (d = "http://" + d),
        c = d.split("/");
        var e = {
            auth: ""
        }
          , f = c[2].split("@");
        1 === f.length ? f = f[0].split(":") : (e.auth = f[0],
        f = f[1].split(":")),
        e.protocol = c[0],
        e.hostname = f[0],
        e.port = f[1] || "80",
        e.pathname = (c.length > 3 ? "/" : "") + c.slice(3, c.length).join("/").split("?")[0].split("#")[0];
        var g = e.pathname;
        "/" === g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1));
        var h = e.hostname
          , i = h.split(".")
          , j = g.split("/");
        if ("hostname" === b)
            return h;
        if ("domain" === b)
            return i.slice(-2).join(".");
        if ("sub" === b)
            return i.slice(0, i.length - 2).join(".");
        if ("port" === b)
            return e.port || "80";
        if ("protocol" === b)
            return e.protocol.split(":")[0];
        if ("auth" === b)
            return e.auth;
        if ("user" === b)
            return e.auth.split(":")[0];
        if ("pass" === b)
            return e.auth.split(":")[1] || "";
        if ("path" === b)
            return e.pathname;
        if ("." === b.charAt(0)) {
            if (b = b.substring(1),
            a(b))
                return b = parseInt(b, 10),
                i[0 > b ? i.length + b : b - 1] || ""
        } else {
            if (a(b))
                return b = parseInt(b, 10),
                j[0 > b ? j.length + b : b] || "";
            if ("file" === b)
                return j.slice(-1)[0];
            if ("filename" === b)
                return j.slice(-1)[0].split(".")[0];
            if ("fileext" === b)
                return j.slice(-1)[0].split(".")[1] || "";
            if ("?" === b.charAt(0) || "#" === b.charAt(0)) {
                var k = d
                  , l = null;
                if ("?" === b.charAt(0) ? k = (k.split("?")[1] || "").split("#")[0] : "#" === b.charAt(0) && (k = k.split("#")[1] || ""),
                !b.charAt(1))
                    return k;
                b = b.substring(1),
                k = k.split("&");
                for (var m = 0, n = k.length; n > m; m++)
                    if (l = k[m].split("="),
                    l[0] === b)
                        return l[1] || "";
                return null
            }
        }
        return ""
    }
}(),
"undefined" != typeof jQuery && jQuery.extend({
    url: function(a, b) {
        return window.url(a, b)
    }
});
(function() {
    var root = this;
    var previousUnderscore = root._;
    var ArrayProto = Array.prototype
      , ObjProto = Object.prototype
      , FuncProto = Function.prototype;
    var push = ArrayProto.push
      , slice = ArrayProto.slice
      , toString = ObjProto.toString
      , hasOwnProperty = ObjProto.hasOwnProperty;
    var nativeIsArray = Array.isArray
      , nativeKeys = Object.keys
      , nativeBind = FuncProto.bind
      , nativeCreate = Object.create;
    var Ctor = function() {};
    var _ = function(obj) {
        if (obj instanceof _)
            return obj;
        if (!(this instanceof _))
            return new _(obj);
        this._wrapped = obj
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = _
        }
        exports._ = _
    } else {
        root._ = _
    }
    _.VERSION = "1.8.3";
    var optimizeCb = function(func, context, argCount) {
        if (context === void 0)
            return func;
        switch (argCount == null ? 3 : argCount) {
        case 1:
            return function(value) {
                return func.call(context, value)
            }
            ;
        case 2:
            return function(value, other) {
                return func.call(context, value, other)
            }
            ;
        case 3:
            return function(value, index, collection) {
                return func.call(context, value, index, collection)
            }
            ;
        case 4:
            return function(accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection)
            }
        }
        return function() {
            return func.apply(context, arguments)
        }
    };
    var cb = function(value, context, argCount) {
        if (value == null)
            return _.identity;
        if (_.isFunction(value))
            return optimizeCb(value, context, argCount);
        if (_.isObject(value))
            return _.matcher(value);
        return _.property(value)
    };
    _.iteratee = function(value, context) {
        return cb(value, context, Infinity)
    }
    ;
    var createAssigner = function(keysFunc, undefinedOnly) {
        return function(obj) {
            var length = arguments.length;
            if (length < 2 || obj == null)
                return obj;
            for (var index = 1; index < length; index++) {
                var source = arguments[index]
                  , keys = keysFunc(source)
                  , l = keys.length;
                for (var i = 0; i < l; i++) {
                    var key = keys[i];
                    if (!undefinedOnly || obj[key] === void 0)
                        obj[key] = source[key]
                }
            }
            return obj
        }
    };
    var baseCreate = function(prototype) {
        if (!_.isObject(prototype))
            return {};
        if (nativeCreate)
            return nativeCreate(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor;
        Ctor.prototype = null;
        return result
    };
    var property = function(key) {
        return function(obj) {
            return obj == null ? void 0 : obj[key]
        }
    };
    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var getLength = property("length");
    var isArrayLike = function(collection) {
        var length = getLength(collection);
        return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX
    };
    _.each = _.forEach = function(obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj)) {
            for (i = 0,
            length = obj.length; i < length; i++) {
                iteratee(obj[i], i, obj)
            }
        } else {
            var keys = _.keys(obj);
            for (i = 0,
            length = keys.length; i < length; i++) {
                iteratee(obj[keys[i]], keys[i], obj)
            }
        }
        return obj
    }
    ;
    _.map = _.collect = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = !isArrayLike(obj) && _.keys(obj)
          , length = (keys || obj).length
          , results = Array(length);
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj)
        }
        return results
    }
    ;
    function createReduce(dir) {
        function iterator(obj, iteratee, memo, keys, index, length) {
            for (; index >= 0 && index < length; index += dir) {
                var currentKey = keys ? keys[index] : index;
                memo = iteratee(memo, obj[currentKey], currentKey, obj)
            }
            return memo
        }
        return function(obj, iteratee, memo, context) {
            iteratee = optimizeCb(iteratee, context, 4);
            var keys = !isArrayLike(obj) && _.keys(obj)
              , length = (keys || obj).length
              , index = dir > 0 ? 0 : length - 1;
            if (arguments.length < 3) {
                memo = obj[keys ? keys[index] : index];
                index += dir
            }
            return iterator(obj, iteratee, memo, keys, index, length)
        }
    }
    _.reduce = _.foldl = _.inject = createReduce(1);
    _.reduceRight = _.foldr = createReduce(-1);
    _.find = _.detect = function(obj, predicate, context) {
        var key;
        if (isArrayLike(obj)) {
            key = _.findIndex(obj, predicate, context)
        } else {
            key = _.findKey(obj, predicate, context)
        }
        if (key !== void 0 && key !== -1)
            return obj[key]
    }
    ;
    _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        _.each(obj, function(value, index, list) {
            if (predicate(value, index, list))
                results.push(value)
        });
        return results
    }
    ;
    _.reject = function(obj, predicate, context) {
        return _.filter(obj, _.negate(cb(predicate)), context)
    }
    ;
    _.every = _.all = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj)
          , length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            if (!predicate(obj[currentKey], currentKey, obj))
                return false
        }
        return true
    }
    ;
    _.some = _.any = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj)
          , length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            if (predicate(obj[currentKey], currentKey, obj))
                return true
        }
        return false
    }
    ;
    _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
        if (!isArrayLike(obj))
            obj = _.values(obj);
        if (typeof fromIndex != "number" || guard)
            fromIndex = 0;
        return _.indexOf(obj, item, fromIndex) >= 0
    }
    ;
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            var func = isFunc ? method : value[method];
            return func == null ? func : func.apply(value, args)
        })
    }
    ;
    _.pluck = function(obj, key) {
        return _.map(obj, _.property(key))
    }
    ;
    _.where = function(obj, attrs) {
        return _.filter(obj, _.matcher(attrs))
    }
    ;
    _.findWhere = function(obj, attrs) {
        return _.find(obj, _.matcher(attrs))
    }
    ;
    _.max = function(obj, iteratee, context) {
        var result = -Infinity, lastComputed = -Infinity, value, computed;
        if (iteratee == null && obj != null) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value > result) {
                    result = value
                }
            }
        } else {
            iteratee = cb(iteratee, context);
            _.each(obj, function(value, index, list) {
                computed = iteratee(value, index, list);
                if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                    result = value;
                    lastComputed = computed
                }
            })
        }
        return result
    }
    ;
    _.min = function(obj, iteratee, context) {
        var result = Infinity, lastComputed = Infinity, value, computed;
        if (iteratee == null && obj != null) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value < result) {
                    result = value
                }
            }
        } else {
            iteratee = cb(iteratee, context);
            _.each(obj, function(value, index, list) {
                computed = iteratee(value, index, list);
                if (computed < lastComputed || computed === Infinity && result === Infinity) {
                    result = value;
                    lastComputed = computed
                }
            })
        }
        return result
    }
    ;
    _.shuffle = function(obj) {
        var set = isArrayLike(obj) ? obj : _.values(obj);
        var length = set.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
            rand = _.random(0, index);
            if (rand !== index)
                shuffled[index] = shuffled[rand];
            shuffled[rand] = set[index]
        }
        return shuffled
    }
    ;
    _.sample = function(obj, n, guard) {
        if (n == null || guard) {
            if (!isArrayLike(obj))
                obj = _.values(obj);
            return obj[_.random(obj.length - 1)]
        }
        return _.shuffle(obj).slice(0, Math.max(0, n))
    }
    ;
    _.sortBy = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iteratee(value, index, list)
            }
        }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0)
                    return 1;
                if (a < b || b === void 0)
                    return -1
            }
            return left.index - right.index
        }), "value")
    }
    ;
    var group = function(behavior) {
        return function(obj, iteratee, context) {
            var result = {};
            iteratee = cb(iteratee, context);
            _.each(obj, function(value, index) {
                var key = iteratee(value, index, obj);
                behavior(result, value, key)
            });
            return result
        }
    };
    _.groupBy = group(function(result, value, key) {
        if (_.has(result, key))
            result[key].push(value);
        else
            result[key] = [value]
    });
    _.indexBy = group(function(result, value, key) {
        result[key] = value
    });
    _.countBy = group(function(result, value, key) {
        if (_.has(result, key))
            result[key]++;
        else
            result[key] = 1
    });
    _.toArray = function(obj) {
        if (!obj)
            return [];
        if (_.isArray(obj))
            return slice.call(obj);
        if (isArrayLike(obj))
            return _.map(obj, _.identity);
        return _.values(obj)
    }
    ;
    _.size = function(obj) {
        if (obj == null)
            return 0;
        return isArrayLike(obj) ? obj.length : _.keys(obj).length
    }
    ;
    _.partition = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var pass = []
          , fail = [];
        _.each(obj, function(value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value)
        });
        return [pass, fail]
    }
    ;
    _.first = _.head = _.take = function(array, n, guard) {
        if (array == null)
            return void 0;
        if (n == null || guard)
            return array[0];
        return _.initial(array, array.length - n)
    }
    ;
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)))
    }
    ;
    _.last = function(array, n, guard) {
        if (array == null)
            return void 0;
        if (n == null || guard)
            return array[array.length - 1];
        return _.rest(array, Math.max(0, array.length - n))
    }
    ;
    _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n)
    }
    ;
    _.compact = function(array) {
        return _.filter(array, _.identity)
    }
    ;
    var flatten = function(input, shallow, strict, startIndex) {
        var output = []
          , idx = 0;
        for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
            var value = input[i];
            if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
                if (!shallow)
                    value = flatten(value, shallow, strict);
                var j = 0
                  , len = value.length;
                output.length += len;
                while (j < len) {
                    output[idx++] = value[j++]
                }
            } else if (!strict) {
                output[idx++] = value
            }
        }
        return output
    };
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, false)
    }
    ;
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1))
    }
    ;
    _.uniq = _.unique = function(array, isSorted, iteratee, context) {
        if (!_.isBoolean(isSorted)) {
            context = iteratee;
            iteratee = isSorted;
            isSorted = false
        }
        if (iteratee != null)
            iteratee = cb(iteratee, context);
        var result = [];
        var seen = [];
        for (var i = 0, length = getLength(array); i < length; i++) {
            var value = array[i]
              , computed = iteratee ? iteratee(value, i, array) : value;
            if (isSorted) {
                if (!i || seen !== computed)
                    result.push(value);
                seen = computed
            } else if (iteratee) {
                if (!_.contains(seen, computed)) {
                    seen.push(computed);
                    result.push(value)
                }
            } else if (!_.contains(result, value)) {
                result.push(value)
            }
        }
        return result
    }
    ;
    _.union = function() {
        return _.uniq(flatten(arguments, true, true))
    }
    ;
    _.intersection = function(array) {
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = getLength(array); i < length; i++) {
            var item = array[i];
            if (_.contains(result, item))
                continue;
            for (var j = 1; j < argsLength; j++) {
                if (!_.contains(arguments[j], item))
                    break
            }
            if (j === argsLength)
                result.push(item)
        }
        return result;
    }
    ;
    _.difference = function(array) {
        var rest = flatten(arguments, true, true, 1);
        return _.filter(array, function(value) {
            return !_.contains(rest, value)
        })
    }
    ;
    _.zip = function() {
        return _.unzip(arguments)
    }
    ;
    _.unzip = function(array) {
        var length = array && _.max(array, getLength).length || 0;
        var result = Array(length);
        for (var index = 0; index < length; index++) {
            result[index] = _.pluck(array, index)
        }
        return result
    }
    ;
    _.object = function(list, values) {
        var result = {};
        for (var i = 0, length = getLength(list); i < length; i++) {
            if (values) {
                result[list[i]] = values[i]
            } else {
                result[list[i][0]] = list[i][1]
            }
        }
        return result
    }
    ;
    function createPredicateIndexFinder(dir) {
        return function(array, predicate, context) {
            predicate = cb(predicate, context);
            var length = getLength(array);
            var index = dir > 0 ? 0 : length - 1;
            for (; index >= 0 && index < length; index += dir) {
                if (predicate(array[index], index, array))
                    return index
            }
            return -1
        }
    }
    _.findIndex = createPredicateIndexFinder(1);
    _.findLastIndex = createPredicateIndexFinder(-1);
    _.sortedIndex = function(array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0
          , high = getLength(array);
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (iteratee(array[mid]) < value)
                low = mid + 1;
            else
                high = mid
        }
        return low
    }
    ;
    function createIndexFinder(dir, predicateFind, sortedIndex) {
        return function(array, item, idx) {
            var i = 0
              , length = getLength(array);
            if (typeof idx == "number") {
                if (dir > 0) {
                    i = idx >= 0 ? idx : Math.max(idx + length, i)
                } else {
                    length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1
                }
            } else if (sortedIndex && idx && length) {
                idx = sortedIndex(array, item);
                return array[idx] === item ? idx : -1
            }
            if (item !== item) {
                idx = predicateFind(slice.call(array, i, length), _.isNaN);
                return idx >= 0 ? idx + i : -1
            }
            for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
                if (array[idx] === item)
                    return idx
            }
            return -1
        }
    }
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
    _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
    _.range = function(start, stop, step) {
        if (stop == null) {
            stop = start || 0;
            start = 0
        }
        step = step || 1;
        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);
        for (var idx = 0; idx < length; idx++,
        start += step) {
            range[idx] = start
        }
        return range
    }
    ;
    var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc))
            return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result))
            return result;
        return self
    };
    _.bind = function(func, context) {
        if (nativeBind && func.bind === nativeBind)
            return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func))
            throw new TypeError("Bind must be called on a function");
        var args = slice.call(arguments, 2);
        var bound = function() {
            return executeBound(func, bound, context, this, args.concat(slice.call(arguments)))
        };
        return bound
    }
    ;
    _.partial = function(func) {
        var boundArgs = slice.call(arguments, 1);
        var bound = function() {
            var position = 0
              , length = boundArgs.length;
            var args = Array(length);
            for (var i = 0; i < length; i++) {
                args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i]
            }
            while (position < arguments.length)
                args.push(arguments[position++]);
            return executeBound(func, bound, this, this, args)
        };
        return bound
    }
    ;
    _.bindAll = function(obj) {
        var i, length = arguments.length, key;
        if (length <= 1)
            throw new Error("bindAll must be passed function names");
        for (i = 1; i < length; i++) {
            key = arguments[i];
            obj[key] = _.bind(obj[key], obj)
        }
        return obj
    }
    ;
    _.memoize = function(func, hasher) {
        var memoize = function(key) {
            var cache = memoize.cache;
            var address = "" + (hasher ? hasher.apply(this, arguments) : key);
            if (!_.has(cache, address))
                cache[address] = func.apply(this, arguments);
            return cache[address]
        };
        memoize.cache = {};
        return memoize
    }
    ;
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args)
        }, wait)
    }
    ;
    _.defer = _.partial(_.delay, _, 1);
    _.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options)
            options = {};
        var later = function() {
            previous = options.leading === false ? 0 : _.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout)
                context = args = null
        };
        return function() {
            var now = _.now();
            if (!previous && options.leading === false)
                previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout)
                    context = args = null
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining)
            }
            return result
        }
    }
    ;
    _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        var later = function() {
            var last = _.now() - timestamp;
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last)
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout)
                        context = args = null
                }
            }
        };
        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout)
                timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null
            }
            return result
        }
    }
    ;
    _.wrap = function(func, wrapper) {
        return _.partial(wrapper, func)
    }
    ;
    _.negate = function(predicate) {
        return function() {
            return !predicate.apply(this, arguments)
        }
    }
    ;
    _.compose = function() {
        var args = arguments;
        var start = args.length - 1;
        return function() {
            var i = start;
            var result = args[start].apply(this, arguments);
            while (i--)
                result = args[i].call(this, result);
            return result
        }
    }
    ;
    _.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments)
            }
        }
    }
    ;
    _.before = function(times, func) {
        var memo;
        return function() {
            if (--times > 0) {
                memo = func.apply(this, arguments)
            }
            if (times <= 1)
                func = null;
            return memo
        }
    }
    ;
    _.once = _.partial(_.before, 2);
    var hasEnumBug = !{
        toString: null
    }.propertyIsEnumerable("toString");
    var nonEnumerableProps = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    function collectNonEnumProps(obj, keys) {
        var nonEnumIdx = nonEnumerableProps.length;
        var constructor = obj.constructor;
        var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
        var prop = "constructor";
        if (_.has(obj, prop) && !_.contains(keys, prop))
            keys.push(prop);
        while (nonEnumIdx--) {
            prop = nonEnumerableProps[nonEnumIdx];
            if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
                keys.push(prop)
            }
        }
    }
    _.keys = function(obj) {
        if (!_.isObject(obj))
            return [];
        if (nativeKeys)
            return nativeKeys(obj);
        var keys = [];
        for (var key in obj)
            if (_.has(obj, key))
                keys.push(key);
        if (hasEnumBug)
            collectNonEnumProps(obj, keys);
        return keys
    }
    ;
    _.allKeys = function(obj) {
        if (!_.isObject(obj))
            return [];
        var keys = [];
        for (var key in obj)
            keys.push(key);
        if (hasEnumBug)
            collectNonEnumProps(obj, keys);
        return keys
    }
    ;
    _.values = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]]
        }
        return values
    }
    ;
    _.mapObject = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = _.keys(obj), length = keys.length, results = {}, currentKey;
        for (var index = 0; index < length; index++) {
            currentKey = keys[index];
            results[currentKey] = iteratee(obj[currentKey], currentKey, obj)
        }
        return results
    }
    ;
    _.pairs = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]]
        }
        return pairs
    }
    ;
    _.invert = function(obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i]
        }
        return result
    }
    ;
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key]))
                names.push(key)
        }
        return names.sort()
    }
    ;
    _.extend = createAssigner(_.allKeys);
    _.extendOwn = _.assign = createAssigner(_.keys);
    _.findKey = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = _.keys(obj), key;
        for (var i = 0, length = keys.length; i < length; i++) {
            key = keys[i];
            if (predicate(obj[key], key, obj))
                return key
        }
    }
    ;
    _.pick = function(object, oiteratee, context) {
        var result = {}, obj = object, iteratee, keys;
        if (obj == null)
            return result;
        if (_.isFunction(oiteratee)) {
            keys = _.allKeys(obj);
            iteratee = optimizeCb(oiteratee, context)
        } else {
            keys = flatten(arguments, false, false, 1);
            iteratee = function(value, key, obj) {
                return key in obj
            }
            ;
            obj = Object(obj)
        }
        for (var i = 0, length = keys.length; i < length; i++) {
            var key = keys[i];
            var value = obj[key];
            if (iteratee(value, key, obj))
                result[key] = value
        }
        return result
    }
    ;
    _.omit = function(obj, iteratee, context) {
        if (_.isFunction(iteratee)) {
            iteratee = _.negate(iteratee)
        } else {
            var keys = _.map(flatten(arguments, false, false, 1), String);
            iteratee = function(value, key) {
                return !_.contains(keys, key)
            }
        }
        return _.pick(obj, iteratee, context)
    }
    ;
    _.defaults = createAssigner(_.allKeys, true);
    _.create = function(prototype, props) {
        var result = baseCreate(prototype);
        if (props)
            _.extendOwn(result, props);
        return result
    }
    ;
    _.clone = function(obj) {
        if (!_.isObject(obj))
            return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj)
    }
    ;
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj
    }
    ;
    _.isMatch = function(object, attrs) {
        var keys = _.keys(attrs)
          , length = keys.length;
        if (object == null)
            return !length;
        var obj = Object(object);
        for (var i = 0; i < length; i++) {
            var key = keys[i];
            if (attrs[key] !== obj[key] || !(key in obj))
                return false
        }
        return true
    }
    ;
    var eq = function(a, b, aStack, bStack) {
        if (a === b)
            return a !== 0 || 1 / a === 1 / b;
        if (a == null || b == null)
            return a === b;
        if (a instanceof _)
            a = a._wrapped;
        if (b instanceof _)
            b = b._wrapped;
        var className = toString.call(a);
        if (className !== toString.call(b))
            return false;
        switch (className) {
        case "[object RegExp]":
        case "[object String]":
            return "" + a === "" + b;
        case "[object Number]":
            if (+a !== +a)
                return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            return +a === +b
        }
        var areArrays = className === "[object Array]";
        if (!areArrays) {
            if (typeof a != "object" || typeof b != "object")
                return false;
            var aCtor = a.constructor
              , bCtor = b.constructor;
            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && ("constructor"in a && "constructor"in b)) {
                return false
            }
        }
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            if (aStack[length] === a)
                return bStack[length] === b
        }
        aStack.push(a);
        bStack.push(b);
        if (areArrays) {
            length = a.length;
            if (length !== b.length)
                return false;
            while (length--) {
                if (!eq(a[length], b[length], aStack, bStack))
                    return false
            }
        } else {
            var keys = _.keys(a), key;
            length = keys.length;
            if (_.keys(b).length !== length)
                return false;
            while (length--) {
                key = keys[length];
                if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack)))
                    return false
            }
        }
        aStack.pop();
        bStack.pop();
        return true
    };
    _.isEqual = function(a, b) {
        return eq(a, b)
    }
    ;
    _.isEmpty = function(obj) {
        if (obj == null)
            return true;
        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)))
            return obj.length === 0;
        return _.keys(obj).length === 0
    }
    ;
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1)
    }
    ;
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) === "[object Array]"
    }
    ;
    _.isObject = function(obj) {
        var type = typeof obj;
        return type === "function" || type === "object" && !!obj
    }
    ;
    _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(name) {
        _["is" + name] = function(obj) {
            return toString.call(obj) === "[object " + name + "]"
        }
    });
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return _.has(obj, "callee")
        }
    }
    if (typeof /./ != "function" && typeof Int8Array != "object") {
        _.isFunction = function(obj) {
            return typeof obj == "function" || false
        }
    }
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj))
    }
    ;
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj !== +obj
    }
    ;
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) === "[object Boolean]"
    }
    ;
    _.isNull = function(obj) {
        return obj === null
    }
    ;
    _.isUndefined = function(obj) {
        return obj === void 0
    }
    ;
    _.has = function(obj, key) {
        return obj != null && hasOwnProperty.call(obj, key)
    }
    ;
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this
    }
    ;
    _.identity = function(value) {
        return value
    }
    ;
    _.constant = function(value) {
        return function() {
            return value
        }
    }
    ;
    _.noop = function() {}
    ;
    _.property = property;
    _.propertyOf = function(obj) {
        return obj == null ? function() {}
        : function(key) {
            return obj[key]
        }
    }
    ;
    _.matcher = _.matches = function(attrs) {
        attrs = _.extendOwn({}, attrs);
        return function(obj) {
            return _.isMatch(obj, attrs)
        }
    }
    ;
    _.times = function(n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, context, 1);
        for (var i = 0; i < n; i++)
            accum[i] = iteratee(i);
        return accum
    }
    ;
    _.random = function(min, max) {
        if (max == null) {
            max = min;
            min = 0
        }
        return min + Math.floor(Math.random() * (max - min + 1))
    }
    ;
    _.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var escapeMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };
    var unescapeMap = _.invert(escapeMap);
    var createEscaper = function(map) {
        var escaper = function(match) {
            return map[match]
        };
        var source = "(?:" + _.keys(map).join("|") + ")";
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, "g");
        return function(string) {
            string = string == null ? "" : "" + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string
        }
    };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);
    _.result = function(object, property, fallback) {
        var value = object == null ? void 0 : object[property];
        if (value === void 0) {
            value = fallback
        }
        return _.isFunction(value) ? value.call(object) : value
    }
    ;
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id
    }
    ;
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/;
    var escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
    var escapeChar = function(match) {
        return "\\" + escapes[match]
    };
    _.template = function(text, settings, oldSettings) {
        if (!settings && oldSettings)
            settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, escapeChar);
            index = offset + match.length;
            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'"
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'"
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='"
            }
            return match
        });
        source += "';\n";
        if (!settings.variable)
            source = "with(obj||{}){\n" + source + "}\n";
        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        try {
            var render = new Function(settings.variable || "obj","_",source)
        } catch (e) {
            e.source = source;
            throw e
        }
        var template = function(data) {
            return render.call(this, data, _)
        };
        var argument = settings.variable || "obj";
        template.source = "function(" + argument + "){\n" + source + "}";
        return template
    }
    ;
    _.chain = function(obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance
    }
    ;
    var result = function(instance, obj) {
        return instance._chain ? _(obj).chain() : obj
    };
    _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return result(this, func.apply(_, args))
            }
        })
    }
    ;
    _.mixin(_);
    _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name === "shift" || name === "splice") && obj.length === 0)
                delete obj[0];
            return result(this, obj)
        }
    });
    _.each(["concat", "join", "slice"], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result(this, method.apply(this._wrapped, arguments))
        }
    });
    _.prototype.value = function() {
        return this._wrapped
    }
    ;
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    _.prototype.toString = function() {
        return "" + this._wrapped
    }
    ;
    if (typeof define === "function" && define.amd) {
        define("underscore", [], function() {
            return _
        })
    }
}
).call(this);
(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.s = f()
    }
}
)(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a)
                        return a(o, !0);
                    if (i)
                        return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND",
                    f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++)
            s(r[o]);
        return s
    }({
        1: [function(require, module, exports) {
            var trim = require("./trim");
            var decap = require("./decapitalize");
            module.exports = function camelize(str, decapitalize) {
                str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
                    return c ? c.toUpperCase() : ""
                });
                if (decapitalize === true) {
                    return decap(str)
                } else {
                    return str
                }
            }
        }
        , {
            "./decapitalize": 10,
            "./trim": 65
        }],
        2: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function capitalize(str, lowercaseRest) {
                str = makeString(str);
                var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();
                return str.charAt(0).toUpperCase() + remainingChars
            }
        }
        , {
            "./helper/makeString": 20
        }],
        3: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function chars(str) {
                return makeString(str).split("")
            }
        }
        , {
            "./helper/makeString": 20
        }],
        4: [function(require, module, exports) {
            module.exports = function chop(str, step) {
                if (str == null)
                    return [];
                str = String(str);
                step = ~~step;
                return step > 0 ? str.match(new RegExp(".{1," + step + "}","g")) : [str]
            }
        }
        , {}],
        5: [function(require, module, exports) {
            var capitalize = require("./capitalize");
            var camelize = require("./camelize");
            var makeString = require("./helper/makeString");
            module.exports = function classify(str) {
                str = makeString(str);
                return capitalize(camelize(str.replace(/[\W_]/g, " ")).replace(/\s/g, ""))
            }
        }
        , {
            "./camelize": 1,
            "./capitalize": 2,
            "./helper/makeString": 20
        }],
        6: [function(require, module, exports) {
            var trim = require("./trim");
            module.exports = function clean(str) {
                return trim(str).replace(/\s\s+/g, " ")
            }
        }
        , {
            "./trim": 65
        }],
        7: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var from = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž"
              , to = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
            from += from.toUpperCase();
            to += to.toUpperCase();
            to = to.split("");
            from += "ß";
            to.push("ss");
            module.exports = function cleanDiacritics(str) {
                return makeString(str).replace(/.{1}/g, function(c) {
                    var index = from.indexOf(c);
                    return index === -1 ? c : to[index]
                })
            }
        }
        , {
            "./helper/makeString": 20
        }],
        8: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function(str, substr) {
                str = makeString(str);
                substr = makeString(substr);
                if (str.length === 0 || substr.length === 0)
                    return 0;
                return str.split(substr).length - 1
            }
        }
        , {
            "./helper/makeString": 20
        }],
        9: [function(require, module, exports) {
            var trim = require("./trim");
            module.exports = function dasherize(str) {
                return trim(str).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
            }
        }
        , {
            "./trim": 65
        }],
        10: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function decapitalize(str) {
                str = makeString(str);
                return str.charAt(0).toLowerCase() + str.slice(1)
            }
        }
        , {
            "./helper/makeString": 20
        }],
        11: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            function getIndent(str) {
                var matches = str.match(/^[\s\\t]*/gm);
                var indent = matches[0].length;
                for (var i = 1; i < matches.length; i++) {
                    indent = Math.min(matches[i].length, indent)
                }
                return indent
            }
            module.exports = function dedent(str, pattern) {
                str = makeString(str);
                var indent = getIndent(str);
                var reg;
                if (indent === 0)
                    return str;
                if (typeof pattern === "string") {
                    reg = new RegExp("^" + pattern,"gm")
                } else {
                    reg = new RegExp("^[ \\t]{" + indent + "}","gm")
                }
                return str.replace(reg, "")
            }
        }
        , {
            "./helper/makeString": 20
        }],
        12: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var toPositive = require("./helper/toPositive");
            module.exports = function endsWith(str, ends, position) {
                str = makeString(str);
                ends = "" + ends;
                if (typeof position == "undefined") {
                    position = str.length - ends.length
                } else {
                    position = Math.min(toPositive(position), str.length) - ends.length
                }
                return position >= 0 && str.indexOf(ends, position) === position
            }
        }
        , {
            "./helper/makeString": 20,
            "./helper/toPositive": 22
        }],
        13: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var escapeChars = require("./helper/escapeChars");
            var regexString = "[";
            for (var key in escapeChars) {
                regexString += key
            }
            regexString += "]";
            var regex = new RegExp(regexString,"g");
            module.exports = function escapeHTML(str) {
                return makeString(str).replace(regex, function(m) {
                    return "&" + escapeChars[m] + ";"
                })
            }
        }
        , {
            "./helper/escapeChars": 17,
            "./helper/makeString": 20
        }],
        14: [function(require, module, exports) {
            module.exports = function() {
                var result = {};
                for (var prop in this) {
                    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join|map|wrap)$/))
                        continue;
                    result[prop] = this[prop]
                }
                return result
            }
        }
        , {}],
        15: [function(require, module, exports) {
            var makeString = require("./makeString");
            module.exports = function adjacent(str, direction) {
                str = makeString(str);
                if (str.length === 0) {
                    return ""
                }
                return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction)
            }
        }
        , {
            "./makeString": 20
        }],
        16: [function(require, module, exports) {
            var escapeRegExp = require("./escapeRegExp");
            module.exports = function defaultToWhiteSpace(characters) {
                if (characters == null)
                    return "\\s";
                else if (characters.source)
                    return characters.source;
                else
                    return "[" + escapeRegExp(characters) + "]"
            }
        }
        , {
            "./escapeRegExp": 18
        }],
        17: [function(require, module, exports) {
            var escapeChars = {
                "¢": "cent",
                "£": "pound",
                "¥": "yen",
                "€": "euro",
                "©": "copy",
                "®": "reg",
                "<": "lt",
                ">": "gt",
                '"': "quot",
                "&": "amp",
                "'": "#39"
            };
            module.exports = escapeChars
        }
        , {}],
        18: [function(require, module, exports) {
            var makeString = require("./makeString");
            module.exports = function escapeRegExp(str) {
                return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
            }
        }
        , {
            "./makeString": 20
        }],
        19: [function(require, module, exports) {
            var htmlEntities = {
                nbsp: " ",
                cent: "¢",
                pound: "£",
                yen: "¥",
                euro: "€",
                copy: "©",
                reg: "®",
                lt: "<",
                gt: ">",
                quot: '"',
                amp: "&",
                apos: "'"
            };
            module.exports = htmlEntities
        }
        , {}],
        20: [function(require, module, exports) {
            module.exports = function makeString(object) {
                if (object == null)
                    return "";
                return "" + object
            }
        }
        , {}],
        21: [function(require, module, exports) {
            module.exports = function strRepeat(str, qty) {
                if (qty < 1)
                    return "";
                var result = "";
                while (qty > 0) {
                    if (qty & 1)
                        result += str;
                    qty >>= 1,
                    str += str
                }
                return result
            }
        }
        , {}],
        22: [function(require, module, exports) {
            module.exports = function toPositive(number) {
                return number < 0 ? 0 : +number || 0
            }
        }
        , {}],
        23: [function(require, module, exports) {
            var capitalize = require("./capitalize");
            var underscored = require("./underscored");
            var trim = require("./trim");
            module.exports = function humanize(str) {
                return capitalize(trim(underscored(str).replace(/_id$/, "").replace(/_/g, " ")))
            }
        }
        , {
            "./capitalize": 2,
            "./trim": 65,
            "./underscored": 67
        }],
        24: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function include(str, needle) {
                if (needle === "")
                    return true;
                return makeString(str).indexOf(needle) !== -1
            }
        }
        , {
            "./helper/makeString": 20
        }],
        25: [function(require, module, exports) {
            "use strict";
            function s(value) {
                if (!(this instanceof s))
                    return new s(value);
                this._wrapped = value
            }
            s.VERSION = "3.3.4";
            s.isBlank = require("./isBlank");
            s.stripTags = require("./stripTags");
            s.capitalize = require("./capitalize");
            s.decapitalize = require("./decapitalize");
            s.chop = require("./chop");
            s.trim = require("./trim");
            s.clean = require("./clean");
            s.cleanDiacritics = require("./cleanDiacritics");
            s.count = require("./count");
            s.chars = require("./chars");
            s.swapCase = require("./swapCase");
            s.escapeHTML = require("./escapeHTML");
            s.unescapeHTML = require("./unescapeHTML");
            s.splice = require("./splice");
            s.insert = require("./insert");
            s.replaceAll = require("./replaceAll");
            s.include = require("./include");
            s.join = require("./join");
            s.lines = require("./lines");
            s.dedent = require("./dedent");
            s.reverse = require("./reverse");
            s.startsWith = require("./startsWith");
            s.endsWith = require("./endsWith");
            s.pred = require("./pred");
            s.succ = require("./succ");
            s.titleize = require("./titleize");
            s.camelize = require("./camelize");
            s.underscored = require("./underscored");
            s.dasherize = require("./dasherize");
            s.classify = require("./classify");
            s.humanize = require("./humanize");
            s.ltrim = require("./ltrim");
            s.rtrim = require("./rtrim");
            s.truncate = require("./truncate");
            s.prune = require("./prune");
            s.words = require("./words");
            s.pad = require("./pad");
            s.lpad = require("./lpad");
            s.rpad = require("./rpad");
            s.lrpad = require("./lrpad");
            s.sprintf = require("./sprintf");
            s.vsprintf = require("./vsprintf");
            s.toNumber = require("./toNumber");
            s.numberFormat = require("./numberFormat");
            s.strRight = require("./strRight");
            s.strRightBack = require("./strRightBack");
            s.strLeft = require("./strLeft");
            s.strLeftBack = require("./strLeftBack");
            s.toSentence = require("./toSentence");
            s.toSentenceSerial = require("./toSentenceSerial");
            s.slugify = require("./slugify");
            s.surround = require("./surround");
            s.quote = require("./quote");
            s.unquote = require("./unquote");
            s.repeat = require("./repeat");
            s.naturalCmp = require("./naturalCmp");
            s.levenshtein = require("./levenshtein");
            s.toBoolean = require("./toBoolean");
            s.exports = require("./exports");
            s.escapeRegExp = require("./helper/escapeRegExp");
            s.wrap = require("./wrap");
            s.map = require("./map");
            s.strip = s.trim;
            s.lstrip = s.ltrim;
            s.rstrip = s.rtrim;
            s.center = s.lrpad;
            s.rjust = s.lpad;
            s.ljust = s.rpad;
            s.contains = s.include;
            s.q = s.quote;
            s.toBool = s.toBoolean;
            s.camelcase = s.camelize;
            s.mapChars = s.map;
            s.prototype = {
                value: function value() {
                    return this._wrapped
                }
            };
            function fn2method(key, fn) {
                if (typeof fn !== "function")
                    return;
                s.prototype[key] = function() {
                    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
                    var res = fn.apply(null, args);
                    return typeof res === "string" ? new s(res) : res
                }
            }
            for (var key in s)
                fn2method(key, s[key]);
            fn2method("tap", function tap(string, fn) {
                return fn(string)
            });
            function prototype2method(methodName) {
                fn2method(methodName, function(context) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return String.prototype[methodName].apply(context, args)
                })
            }
            var prototypeMethods = ["toUpperCase", "toLowerCase", "split", "replace", "slice", "substring", "substr", "concat"];
            for (var method in prototypeMethods)
                prototype2method(prototypeMethods[method]);
            module.exports = s
        }
        , {
            "./camelize": 1,
            "./capitalize": 2,
            "./chars": 3,
            "./chop": 4,
            "./classify": 5,
            "./clean": 6,
            "./cleanDiacritics": 7,
            "./count": 8,
            "./dasherize": 9,
            "./decapitalize": 10,
            "./dedent": 11,
            "./endsWith": 12,
            "./escapeHTML": 13,
            "./exports": 14,
            "./helper/escapeRegExp": 18,
            "./humanize": 23,
            "./include": 24,
            "./insert": 26,
            "./isBlank": 27,
            "./join": 28,
            "./levenshtein": 29,
            "./lines": 30,
            "./lpad": 31,
            "./lrpad": 32,
            "./ltrim": 33,
            "./map": 34,
            "./naturalCmp": 35,
            "./numberFormat": 38,
            "./pad": 39,
            "./pred": 40,
            "./prune": 41,
            "./quote": 42,
            "./repeat": 43,
            "./replaceAll": 44,
            "./reverse": 45,
            "./rpad": 46,
            "./rtrim": 47,
            "./slugify": 48,
            "./splice": 49,
            "./sprintf": 50,
            "./startsWith": 51,
            "./strLeft": 52,
            "./strLeftBack": 53,
            "./strRight": 54,
            "./strRightBack": 55,
            "./stripTags": 56,
            "./succ": 57,
            "./surround": 58,
            "./swapCase": 59,
            "./titleize": 60,
            "./toBoolean": 61,
            "./toNumber": 62,
            "./toSentence": 63,
            "./toSentenceSerial": 64,
            "./trim": 65,
            "./truncate": 66,
            "./underscored": 67,
            "./unescapeHTML": 68,
            "./unquote": 69,
            "./vsprintf": 70,
            "./words": 71,
            "./wrap": 72
        }],
        26: [function(require, module, exports) {
            var splice = require("./splice");
            module.exports = function insert(str, i, substr) {
                return splice(str, i, 0, substr)
            }
        }
        , {
            "./splice": 49
        }],
        27: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function isBlank(str) {
                return /^\s*$/.test(makeString(str))
            }
        }
        , {
            "./helper/makeString": 20
        }],
        28: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var slice = [].slice;
            module.exports = function join() {
                var args = slice.call(arguments)
                  , separator = args.shift();
                return args.join(makeString(separator))
            }
        }
        , {
            "./helper/makeString": 20
        }],
        29: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function levenshtein(str1, str2) {
                "use strict";
                str1 = makeString(str1);
                str2 = makeString(str2);
                if (str1 === str2)
                    return 0;
                if (!str1 || !str2)
                    return Math.max(str1.length, str2.length);
                var prevRow = new Array(str2.length + 1);
                for (var i = 0; i < prevRow.length; ++i) {
                    prevRow[i] = i
                }
                for (i = 0; i < str1.length; ++i) {
                    var nextCol = i + 1;
                    for (var j = 0; j < str2.length; ++j) {
                        var curCol = nextCol;
                        nextCol = prevRow[j] + (str1.charAt(i) === str2.charAt(j) ? 0 : 1);
                        var tmp = curCol + 1;
                        if (nextCol > tmp) {
                            nextCol = tmp
                        }
                        tmp = prevRow[j + 1] + 1;
                        if (nextCol > tmp) {
                            nextCol = tmp
                        }
                        prevRow[j] = curCol
                    }
                    prevRow[j] = nextCol
                }
                return nextCol
            }
        }
        , {
            "./helper/makeString": 20
        }],
        30: [function(require, module, exports) {
            module.exports = function lines(str) {
                if (str == null)
                    return [];
                return String(str).split(/\r\n?|\n/)
            }
        }
        , {}],
        31: [function(require, module, exports) {
            var pad = require("./pad");
            module.exports = function lpad(str, length, padStr) {
                return pad(str, length, padStr)
            }
        }
        , {
            "./pad": 39
        }],
        32: [function(require, module, exports) {
            var pad = require("./pad");
            module.exports = function lrpad(str, length, padStr) {
                return pad(str, length, padStr, "both")
            }
        }
        , {
            "./pad": 39
        }],
        33: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");
            var nativeTrimLeft = String.prototype.trimLeft;
            module.exports = function ltrim(str, characters) {
                str = makeString(str);
                if (!characters && nativeTrimLeft)
                    return nativeTrimLeft.call(str);
                characters = defaultToWhiteSpace(characters);
                return str.replace(new RegExp("^" + characters + "+"), "")
            }
        }
        , {
            "./helper/defaultToWhiteSpace": 16,
            "./helper/makeString": 20
        }],
        34: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function(str, callback) {
                str = makeString(str);
                if (str.length === 0 || typeof callback !== "function")
                    return str;
                return str.replace(/./g, callback)
            }
        }
        , {
            "./helper/makeString": 20
        }],
        35: [function(require, module, exports) {
            module.exports = function naturalCmp(str1, str2) {
                if (str1 == str2)
                    return 0;
                if (!str1)
                    return -1;
                if (!str2)
                    return 1;
                var cmpRegex = /(\.\d+|\d+|\D+)/g
                  , tokens1 = String(str1).match(cmpRegex)
                  , tokens2 = String(str2).match(cmpRegex)
                  , count = Math.min(tokens1.length, tokens2.length);
                for (var i = 0; i < count; i++) {
                    var a = tokens1[i]
                      , b = tokens2[i];
                    if (a !== b) {
                        var num1 = +a;
                        var num2 = +b;
                        if (num1 === num1 && num2 === num2) {
                            return num1 > num2 ? 1 : -1
                        }
                        return a < b ? -1 : 1
                    }
                }
                if (tokens1.length != tokens2.length)
                    return tokens1.length - tokens2.length;
                return str1 < str2 ? -1 : 1
            }
        }
        , {}],
        36: [function(require, module, exports) {
            (function(window) {
                var re = {
                    not_string: /[^s]/,
                    number: /[diefg]/,
                    json: /[j]/,
                    not_json: /[^j]/,
                    text: /^[^\x25]+/,
                    modulo: /^\x25{2}/,
                    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
                    key: /^([a-z_][a-z_\d]*)/i,
                    key_access: /^\.([a-z_][a-z_\d]*)/i,
                    index_access: /^\[(\d+)\]/,
                    sign: /^[\+\-]/
                };
                function sprintf() {
                    var key = arguments[0]
                      , cache = sprintf.cache;
                    if (!(cache[key] && cache.hasOwnProperty(key))) {
                        cache[key] = sprintf.parse(key)
                    }
                    return sprintf.format.call(null, cache[key], arguments)
                }
                sprintf.format = function(parse_tree, argv) {
                    var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = "";
                    for (i = 0; i < tree_length; i++) {
                        node_type = get_type(parse_tree[i]);
                        if (node_type === "string") {
                            output[output.length] = parse_tree[i]
                        } else if (node_type === "array") {
                            match = parse_tree[i];
                            if (match[2]) {
                                arg = argv[cursor];
                                for (k = 0; k < match[2].length; k++) {
                                    if (!arg.hasOwnProperty(match[2][k])) {
                                        throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
                                    }
                                    arg = arg[match[2][k]]
                                }
                            } else if (match[1]) {
                                arg = argv[match[1]]
                            } else {
                                arg = argv[cursor++]
                            }
                            if (get_type(arg) == "function") {
                                arg = arg()
                            }
                            if (re.not_string.test(match[8]) && re.not_json.test(match[8]) && (get_type(arg) != "number" && isNaN(arg))) {
                                throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
                            }
                            if (re.number.test(match[8])) {
                                is_positive = arg >= 0
                            }
                            switch (match[8]) {
                            case "b":
                                arg = arg.toString(2);
                                break;
                            case "c":
                                arg = String.fromCharCode(arg);
                                break;
                            case "d":
                            case "i":
                                arg = parseInt(arg, 10);
                                break;
                            case "j":
                                arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0);
                                break;
                            case "e":
                                arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                                break;
                            case "f":
                                arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                                break;
                            case "g":
                                arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg);
                                break;
                            case "o":
                                arg = arg.toString(8);
                                break;
                            case "s":
                                arg = (arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
                                break;
                            case "u":
                                arg = arg >>> 0;
                                break;
                            case "x":
                                arg = arg.toString(16);
                                break;
                            case "X":
                                arg = arg.toString(16).toUpperCase();
                                break
                            }
                            if (re.json.test(match[8])) {
                                output[output.length] = arg
                            } else {
                                if (re.number.test(match[8]) && (!is_positive || match[3])) {
                                    sign = is_positive ? "+" : "-";
                                    arg = arg.toString().replace(re.sign, "")
                                } else {
                                    sign = ""
                                }
                                pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " ";
                                pad_length = match[6] - (sign + arg).length;
                                pad = match[6] ? pad_length > 0 ? str_repeat(pad_character, pad_length) : "" : "";
                                output[output.length] = match[5] ? sign + arg + pad : pad_character === "0" ? sign + pad + arg : pad + sign + arg
                            }
                        }
                    }
                    return output.join("")
                }
                ;
                sprintf.cache = {};
                sprintf.parse = function(fmt) {
                    var _fmt = fmt
                      , match = []
                      , parse_tree = []
                      , arg_names = 0;
                    while (_fmt) {
                        if ((match = re.text.exec(_fmt)) !== null) {
                            parse_tree[parse_tree.length] = match[0]
                        } else if ((match = re.modulo.exec(_fmt)) !== null) {
                            parse_tree[parse_tree.length] = "%"
                        } else if ((match = re.placeholder.exec(_fmt)) !== null) {
                            if (match[2]) {
                                arg_names |= 1;
                                var field_list = []
                                  , replacement_field = match[2]
                                  , field_match = [];
                                if ((field_match = re.key.exec(replacement_field)) !== null) {
                                    field_list[field_list.length] = field_match[1];
                                    while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
                                        if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                            field_list[field_list.length] = field_match[1]
                                        } else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                            field_list[field_list.length] = field_match[1]
                                        } else {
                                            throw new SyntaxError("[sprintf] failed to parse named argument key")
                                        }
                                    }
                                } else {
                                    throw new SyntaxError("[sprintf] failed to parse named argument key")
                                }
                                match[2] = field_list
                            } else {
                                arg_names |= 2
                            }
                            if (arg_names === 3) {
                                throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
                            }
                            parse_tree[parse_tree.length] = match
                        } else {
                            throw new SyntaxError("[sprintf] unexpected placeholder")
                        }
                        _fmt = _fmt.substring(match[0].length)
                    }
                    return parse_tree
                }
                ;
                var vsprintf = function(fmt, argv, _argv) {
                    _argv = (argv || []).slice(0);
                    _argv.splice(0, 0, fmt);
                    return sprintf.apply(null, _argv)
                };
                function get_type(variable) {
                    return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
                }
                function str_repeat(input, multiplier) {
                    return Array(multiplier + 1).join(input)
                }
                if (typeof exports !== "undefined") {
                    exports.sprintf = sprintf;
                    exports.vsprintf = vsprintf
                } else {
                    window.sprintf = sprintf;
                    window.vsprintf = vsprintf;
                    if (typeof define === "function" && define.amd) {
                        define(function() {
                            return {
                                sprintf: sprintf,
                                vsprintf: vsprintf
                            }
                        })
                    }
                }
            }
            )(typeof window === "undefined" ? this : window)
        }
        , {}],
        37: [function(require, module, exports) {
            (function(global) {
                module.exports = deprecate;
                function deprecate(fn, msg) {
                    if (config("noDeprecation")) {
                        return fn
                    }
                    var warned = false;
                    function deprecated() {
                        if (!warned) {
                            if (config("throwDeprecation")) {
                                throw new Error(msg)
                            } else if (config("traceDeprecation")) {
                                console.trace(msg)
                            } else {
                                console.warn(msg)
                            }
                            warned = true
                        }
                        return fn.apply(this, arguments)
                    }
                    return deprecated
                }
                function config(name) {
                    try {
                        if (!global.localStorage)
                            return false
                    } catch (_) {
                        return false
                    }
                    var val = global.localStorage[name];
                    if (null == val)
                        return false;
                    return String(val).toLowerCase() === "true"
                }
            }
            ).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }
        , {}],
        38: [function(require, module, exports) {
            module.exports = function numberFormat(number, dec, dsep, tsep) {
                if (isNaN(number) || number == null)
                    return "";
                number = number.toFixed(~~dec);
                tsep = typeof tsep == "string" ? tsep : ",";
                var parts = number.split(".")
                  , fnums = parts[0]
                  , decimals = parts[1] ? (dsep || ".") + parts[1] : "";
                return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + tsep) + decimals
            }
        }
        , {}],
        39: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var strRepeat = require("./helper/strRepeat");
            module.exports = function pad(str, length, padStr, type) {
                str = makeString(str);
                length = ~~length;
                var padlen = 0;
                if (!padStr)
                    padStr = " ";
                else if (padStr.length > 1)
                    padStr = padStr.charAt(0);
                switch (type) {
                case "right":
                    padlen = length - str.length;
                    return str + strRepeat(padStr, padlen);
                case "both":
                    padlen = length - str.length;
                    return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));
                default:
                    padlen = length - str.length;
                    return strRepeat(padStr, padlen) + str
                }
            }
        }
        , {
            "./helper/makeString": 20,
            "./helper/strRepeat": 21
        }],
        40: [function(require, module, exports) {
            var adjacent = require("./helper/adjacent");
            module.exports = function succ(str) {
                return adjacent(str, -1)
            }
        }
        , {
            "./helper/adjacent": 15
        }],
        41: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var rtrim = require("./rtrim");
            module.exports = function prune(str, length, pruneStr) {
                str = makeString(str);
                length = ~~length;
                pruneStr = pruneStr != null ? String(pruneStr) : "...";
                if (str.length <= length)
                    return str;
                var tmpl = function(c) {
                    return c.toUpperCase() !== c.toLowerCase() ? "A" : " "
                }
                  , template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl);
                if (template.slice(template.length - 2).match(/\w\w/))
                    template = template.replace(/\s*\S+$/, "");
                else
                    template = rtrim(template.slice(0, template.length - 1));
                return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr
            }
        }
        , {
            "./helper/makeString": 20,
            "./rtrim": 47
        }],
        42: [function(require, module, exports) {
            var surround = require("./surround");
            module.exports = function quote(str, quoteChar) {
                return surround(str, quoteChar || '"')
            }
        }
        , {
            "./surround": 58
        }],
        43: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var strRepeat = require("./helper/strRepeat");
            module.exports = function repeat(str, qty, separator) {
                str = makeString(str);
                qty = ~~qty;
                if (separator == null)
                    return strRepeat(str, qty);
                for (var repeat = []; qty > 0; repeat[--qty] = str) {}
                return repeat.join(separator)
            }
        }
        , {
            "./helper/makeString": 20,
            "./helper/strRepeat": 21
        }],
        44: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function replaceAll(str, find, replace, ignorecase) {
                var flags = ignorecase === true ? "gi" : "g";
                var reg = new RegExp(find,flags);
                return makeString(str).replace(reg, replace)
            }
        }
        , {
            "./helper/makeString": 20
        }],
        45: [function(require, module, exports) {
            var chars = require("./chars");
            module.exports = function reverse(str) {
                return chars(str).reverse().join("")
            }
        }
        , {
            "./chars": 3
        }],
        46: [function(require, module, exports) {
            var pad = require("./pad");
            module.exports = function rpad(str, length, padStr) {
                return pad(str, length, padStr, "right")
            }
        }
        , {
            "./pad": 39
        }],
        47: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");
            var nativeTrimRight = String.prototype.trimRight;
            module.exports = function rtrim(str, characters) {
                str = makeString(str);
                if (!characters && nativeTrimRight)
                    return nativeTrimRight.call(str);
                characters = defaultToWhiteSpace(characters);
                return str.replace(new RegExp(characters + "+$"), "")
            }
        }
        , {
            "./helper/defaultToWhiteSpace": 16,
            "./helper/makeString": 20
        }],
        48: [function(require, module, exports) {
            var trim = require("./trim");
            var dasherize = require("./dasherize");
            var cleanDiacritics = require("./cleanDiacritics");
            module.exports = function slugify(str) {
                return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g, "-").toLowerCase()), "-")
            }
        }
        , {
            "./cleanDiacritics": 7,
            "./dasherize": 9,
            "./trim": 65
        }],
        49: [function(require, module, exports) {
            var chars = require("./chars");
            module.exports = function splice(str, i, howmany, substr) {
                var arr = chars(str);
                arr.splice(~~i, ~~howmany, substr);
                return arr.join("")
            }
        }
        , {
            "./chars": 3
        }],
        50: [function(require, module, exports) {
            var deprecate = require("util-deprecate");
            module.exports = deprecate(require("sprintf-js").sprintf, "sprintf() will be removed in the next major release, use the sprintf-js package instead.")
        }
        , {
            "sprintf-js": 36,
            "util-deprecate": 37
        }],
        51: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var toPositive = require("./helper/toPositive");
            module.exports = function startsWith(str, starts, position) {
                str = makeString(str);
                starts = "" + starts;
                position = position == null ? 0 : Math.min(toPositive(position), str.length);
                return str.lastIndexOf(starts, position) === position
            }
        }
        , {
            "./helper/makeString": 20,
            "./helper/toPositive": 22
        }],
        52: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function strLeft(str, sep) {
                str = makeString(str);
                sep = makeString(sep);
                var pos = !sep ? -1 : str.indexOf(sep);
                return ~pos ? str.slice(0, pos) : str
            }
        }
        , {
            "./helper/makeString": 20
        }],
        53: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function strLeftBack(str, sep) {
                str = makeString(str);
                sep = makeString(sep);
                var pos = str.lastIndexOf(sep);
                return ~pos ? str.slice(0, pos) : str
            }
        }
        , {
            "./helper/makeString": 20
        }],
        54: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function strRight(str, sep) {
                str = makeString(str);
                sep = makeString(sep);
                var pos = !sep ? -1 : str.indexOf(sep);
                return ~pos ? str.slice(pos + sep.length, str.length) : str
            }
        }
        , {
            "./helper/makeString": 20
        }],
        55: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function strRightBack(str, sep) {
                str = makeString(str);
                sep = makeString(sep);
                var pos = !sep ? -1 : str.lastIndexOf(sep);
                return ~pos ? str.slice(pos + sep.length, str.length) : str
            }
        }
        , {
            "./helper/makeString": 20
        }],
        56: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function stripTags(str) {
                return makeString(str).replace(/<\/?[^>]+>/g, "")
            }
        }
        , {
            "./helper/makeString": 20
        }],
        57: [function(require, module, exports) {
            var adjacent = require("./helper/adjacent");
            module.exports = function succ(str) {
                return adjacent(str, 1)
            }
        }
        , {
            "./helper/adjacent": 15
        }],
        58: [function(require, module, exports) {
            module.exports = function surround(str, wrapper) {
                return [wrapper, str, wrapper].join("")
            }
        }
        , {}],
        59: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function swapCase(str) {
                return makeString(str).replace(/\S/g, function(c) {
                    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
                })
            }
        }
        , {
            "./helper/makeString": 20
        }],
        60: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function titleize(str) {
                return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
                    return c.toUpperCase()
                })
            }
        }
        , {
            "./helper/makeString": 20
        }],
        61: [function(require, module, exports) {
            var trim = require("./trim");
            function boolMatch(s, matchers) {
                var i, matcher, down = s.toLowerCase();
                matchers = [].concat(matchers);
                for (i = 0; i < matchers.length; i += 1) {
                    matcher = matchers[i];
                    if (!matcher)
                        continue;
                    if (matcher.test && matcher.test(s))
                        return true;
                    if (matcher.toLowerCase() === down)
                        return true
                }
            }
            module.exports = function toBoolean(str, trueValues, falseValues) {
                if (typeof str === "number")
                    str = "" + str;
                if (typeof str !== "string")
                    return !!str;
                str = trim(str);
                if (boolMatch(str, trueValues || ["true", "1"]))
                    return true;
                if (boolMatch(str, falseValues || ["false", "0"]))
                    return false
            }
        }
        , {
            "./trim": 65
        }],
        62: [function(require, module, exports) {
            module.exports = function toNumber(num, precision) {
                if (num == null)
                    return 0;
                var factor = Math.pow(10, isFinite(precision) ? precision : 0);
                return Math.round(num * factor) / factor
            }
        }
        , {}],
        63: [function(require, module, exports) {
            var rtrim = require("./rtrim");
            module.exports = function toSentence(array, separator, lastSeparator, serial) {
                separator = separator || ", ";
                lastSeparator = lastSeparator || " and ";
                var a = array.slice()
                  , lastMember = a.pop();
                if (array.length > 2 && serial)
                    lastSeparator = rtrim(separator) + lastSeparator;
                return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember
            }
        }
        , {
            "./rtrim": 47
        }],
        64: [function(require, module, exports) {
            var toSentence = require("./toSentence");
            module.exports = function toSentenceSerial(array, sep, lastSep) {
                return toSentence(array, sep, lastSep, true)
            }
        }
        , {
            "./toSentence": 63
        }],
        65: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");
            var nativeTrim = String.prototype.trim;
            module.exports = function trim(str, characters) {
                str = makeString(str);
                if (!characters && nativeTrim)
                    return nativeTrim.call(str);
                characters = defaultToWhiteSpace(characters);
                return str.replace(new RegExp("^" + characters + "+|" + characters + "+$","g"), "")
            }
        }
        , {
            "./helper/defaultToWhiteSpace": 16,
            "./helper/makeString": 20
        }],
        66: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function truncate(str, length, truncateStr) {
                str = makeString(str);
                truncateStr = truncateStr || "...";
                length = ~~length;
                return str.length > length ? str.slice(0, length) + truncateStr : str
            }
        }
        , {
            "./helper/makeString": 20
        }],
        67: [function(require, module, exports) {
            var trim = require("./trim");
            module.exports = function underscored(str) {
                return trim(str).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
            }
        }
        , {
            "./trim": 65
        }],
        68: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            var htmlEntities = require("./helper/htmlEntities");
            module.exports = function unescapeHTML(str) {
                return makeString(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
                    var match;
                    if (entityCode in htmlEntities) {
                        return htmlEntities[entityCode]
                    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
                        return String.fromCharCode(parseInt(match[1], 16))
                    } else if (match = entityCode.match(/^#(\d+)$/)) {
                        return String.fromCharCode(~~match[1])
                    } else {
                        return entity
                    }
                })
            }
        }
        , {
            "./helper/htmlEntities": 19,
            "./helper/makeString": 20
        }],
        69: [function(require, module, exports) {
            module.exports = function unquote(str, quoteChar) {
                quoteChar = quoteChar || '"';
                if (str[0] === quoteChar && str[str.length - 1] === quoteChar)
                    return str.slice(1, str.length - 1);
                else
                    return str
            }
        }
        , {}],
        70: [function(require, module, exports) {
            var deprecate = require("util-deprecate");
            module.exports = deprecate(require("sprintf-js").vsprintf, "vsprintf() will be removed in the next major release, use the sprintf-js package instead.")
        }
        , {
            "sprintf-js": 36,
            "util-deprecate": 37
        }],
        71: [function(require, module, exports) {
            var isBlank = require("./isBlank");
            var trim = require("./trim");
            module.exports = function words(str, delimiter) {
                if (isBlank(str))
                    return [];
                return trim(str, delimiter).split(delimiter || /\s+/)
            }
        }
        , {
            "./isBlank": 27,
            "./trim": 65
        }],
        72: [function(require, module, exports) {
            var makeString = require("./helper/makeString");
            module.exports = function wrap(str, options) {
                str = makeString(str);
                options = options || {};
                var width = options.width || 75;
                var seperator = options.seperator || "\n";
                var cut = options.cut || false;
                var preserveSpaces = options.preserveSpaces || false;
                var trailingSpaces = options.trailingSpaces || false;
                var result;
                if (width <= 0) {
                    return str
                } else if (!cut) {
                    var words = str.split(" ");
                    var current_column = 0;
                    result = "";
                    while (words.length > 0) {
                        if (1 + words[0].length + current_column > width) {
                            if (current_column > 0) {
                                if (preserveSpaces) {
                                    result += " ";
                                    current_column++
                                } else if (trailingSpaces) {
                                    while (current_column < width) {
                                        result += " ";
                                        current_column++
                                    }
                                }
                                result += seperator;
                                current_column = 0
                            }
                        }
                        if (current_column > 0) {
                            result += " ";
                            current_column++
                        }
                        result += words[0];
                        current_column += words[0].length;
                        words.shift()
                    }
                    if (trailingSpaces) {
                        while (current_column < width) {
                            result += " ";
                            current_column++
                        }
                    }
                    return result
                } else {
                    var index = 0;
                    result = "";
                    while (index < str.length) {
                        if (index % width == 0 && index > 0) {
                            result += seperator
                        }
                        result += str.charAt(index);
                        index++
                    }
                    if (trailingSpaces) {
                        while (index % width > 0) {
                            result += " ";
                            index++
                        }
                    }
                    return result
                }
            }
        }
        , {
            "./helper/makeString": 20
        }]
    }, {}, [25])(25)
});
(function(window) {
    var ua = navigator.userAgent;
    if (window.HTMLPictureElement && (/ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45)) {
        addEventListener("resize", function() {
            var timer;
            var dummySrc = document.createElement("source");
            var fixRespimg = function(img) {
                var source, sizes;
                var picture = img.parentNode;
                if (picture.nodeName.toUpperCase() === "PICTURE") {
                    source = dummySrc.cloneNode();
                    picture.insertBefore(source, picture.firstElementChild);
                    setTimeout(function() {
                        picture.removeChild(source)
                    })
                } else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
                    img._pfLastSize = img.offsetWidth;
                    sizes = img.sizes;
                    img.sizes += ",100vw";
                    setTimeout(function() {
                        img.sizes = sizes
                    })
                }
            };
            var findPictureImgs = function() {
                var i;
                var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (i = 0; i < imgs.length; i++) {
                    fixRespimg(imgs[i])
                }
            };
            var onResize = function() {
                clearTimeout(timer);
                timer = setTimeout(findPictureImgs, 99)
            };
            var mq = window.matchMedia && matchMedia("(orientation: landscape)");
            var init = function() {
                onResize();
                if (mq && mq.addListener) {
                    mq.addListener(onResize)
                }
            };
            dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            if (/^[c|i]|d$/.test(document.readyState || "")) {
                init()
            } else {
                document.addEventListener("DOMContentLoaded", init)
            }
            return onResize
        }())
    }
}
)(window);
(function(window, document, undefined) {
    "use strict";
    document.createElement("picture");
    var warn, eminpx, alwaysCheckWDescriptor, evalId;
    var pf = {};
    var isSupportTestReady = false;
    var noop = function() {};
    var image = document.createElement("img");
    var getImgAttr = image.getAttribute;
    var setImgAttr = image.setAttribute;
    var removeImgAttr = image.removeAttribute;
    var docElem = document.documentElement;
    var types = {};
    var cfg = {
        algorithm: ""
    };
    var srcAttr = "data-pfsrc";
    var srcsetAttr = srcAttr + "set";
    var ua = navigator.userAgent;
    var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
    var curSrcProp = "currentSrc";
    var regWDesc = /\s+\+?\d+(e\d+)?w/;
    var regSize = /(\([^)]+\))?\s*(.+)/;
    var setOptions = window.picturefillCFG;
    var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
    var fsCss = "font-size:100%!important;";
    var isVwDirty = true;
    var cssCache = {};
    var sizeLengthCache = {};
    var DPR = window.devicePixelRatio;
    var units = {
        px: 1,
        in: 96
    };
    var anchor = document.createElement("a");
    var alreadyRun = false;
    var regexLeadingSpaces = /^[ \t\n\r\u000c]+/
      , regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/
      , regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/
      , regexTrailingCommas = /[,]+$/
      , regexNonNegativeInteger = /^\d+$/
      , regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
    var on = function(obj, evt, fn, capture) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, capture || false)
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn)
        }
    };
    var memoize = function(fn) {
        var cache = {};
        return function(input) {
            if (!(input in cache)) {
                cache[input] = fn(input)
            }
            return cache[input]
        }
    };
    function isSpace(c) {
        return c === " " || c === "\t" || c === "\n" || c === "\f" || c === "\r"
    }
    var evalCSS = function() {
        var regLength = /^([\d\.]+)(em|vw|px)$/;
        var replace = function() {
            var args = arguments
              , index = 0
              , string = args[0];
            while (++index in args) {
                string = string.replace(args[index], args[++index])
            }
            return string
        };
        var buildStr = memoize(function(css) {
            return "return " + replace((css || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
        });
        return function(css, length) {
            var parsedLength;
            if (!(css in cssCache)) {
                cssCache[css] = false;
                if (length && (parsedLength = css.match(regLength))) {
                    cssCache[css] = parsedLength[1] * units[parsedLength[2]]
                } else {
                    try {
                        cssCache[css] = new Function("e",buildStr(css))(units)
                    } catch (e) {}
                }
            }
            return cssCache[css]
        }
    }();
    var setResolution = function(candidate, sizesattr) {
        if (candidate.w) {
            candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
            candidate.res = candidate.w / candidate.cWidth
        } else {
            candidate.res = candidate.d
        }
        return candidate
    };
    var picturefill = function(opt) {
        if (!isSupportTestReady) {
            return
        }
        var elements, i, plen;
        var options = opt || {};
        if (options.elements && options.elements.nodeType === 1) {
            if (options.elements.nodeName.toUpperCase() === "IMG") {
                options.elements = [options.elements]
            } else {
                options.context = options.elements;
                options.elements = null
            }
        }
        elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);
        if (plen = elements.length) {
            pf.setupRun(options);
            alreadyRun = true;
            for (i = 0; i < plen; i++) {
                pf.fillImg(elements[i], options)
            }
            pf.teardownRun(options)
        }
    };
    warn = window.console && console.warn ? function(message) {
        console.warn(message)
    }
    : noop;
    if (!(curSrcProp in image)) {
        curSrcProp = "src"
    }
    types["image/jpeg"] = true;
    types["image/gif"] = true;
    types["image/png"] = true;
    function detectTypeSupport(type, typeUri) {
        var image = new window.Image;
        image.onerror = function() {
            types[type] = false;
            picturefill()
        }
        ;
        image.onload = function() {
            types[type] = image.width === 1;
            picturefill()
        }
        ;
        image.src = typeUri;
        return "pending"
    }
    types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
    function updateMetrics() {
        isVwDirty = false;
        DPR = window.devicePixelRatio;
        cssCache = {};
        sizeLengthCache = {};
        pf.DPR = DPR || 1;
        units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
        units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);
        units.vw = units.width / 100;
        units.vh = units.height / 100;
        evalId = [units.height, units.width, DPR].join("-");
        units.em = pf.getEmValue();
        units.rem = units.em
    }
    function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
        var bonusFactor, tooMuch, bonus, meanDensity;
        if (cfg.algorithm === "saveData") {
            if (lowerValue > 2.7) {
                meanDensity = dprValue + 1
            } else {
                tooMuch = higherValue - dprValue;
                bonusFactor = Math.pow(lowerValue - .6, 1.5);
                bonus = tooMuch * bonusFactor;
                if (isCached) {
                    bonus += .1 * bonusFactor
                }
                meanDensity = lowerValue + bonus
            }
        } else {
            meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue
        }
        return meanDensity > dprValue
    }
    function applyBestCandidate(img) {
        var srcSetCandidates;
        var matchingSet = pf.getSet(img);
        var evaluated = false;
        if (matchingSet !== "pending") {
            evaluated = evalId;
            if (matchingSet) {
                srcSetCandidates = pf.setRes(matchingSet);
                pf.applySetCandidate(srcSetCandidates, img)
            }
        }
        img[pf.ns].evaled = evaluated
    }
    function ascendingSort(a, b) {
        return a.res - b.res
    }
    function setSrcToCur(img, src, set) {
        var candidate;
        if (!set && src) {
            set = img[pf.ns].sets;
            set = set && set[set.length - 1]
        }
        candidate = getCandidateForSrc(src, set);
        if (candidate) {
            src = pf.makeUrl(src);
            img[pf.ns].curSrc = src;
            img[pf.ns].curCan = candidate;
            if (!candidate.res) {
                setResolution(candidate, candidate.set.sizes)
            }
        }
        return candidate
    }
    function getCandidateForSrc(src, set) {
        var i, candidate, candidates;
        if (src && set) {
            candidates = pf.parseSet(set);
            src = pf.makeUrl(src);
            for (i = 0; i < candidates.length; i++) {
                if (src === pf.makeUrl(candidates[i].url)) {
                    candidate = candidates[i];
                    break
                }
            }
        }
        return candidate
    }
    function getAllSourceElements(picture, candidates) {
        var i, len, source, srcset;
        var sources = picture.getElementsByTagName("source");
        for (i = 0,
        len = sources.length; i < len; i++) {
            source = sources[i];
            source[pf.ns] = true;
            srcset = source.getAttribute("srcset");
            if (srcset) {
                candidates.push({
                    srcset: srcset,
                    media: source.getAttribute("media"),
                    type: source.getAttribute("type"),
                    sizes: source.getAttribute("sizes")
                })
            }
        }
    }
    function parseSrcset(input, set) {
        function collectCharacters(regEx) {
            var chars, match = regEx.exec(input.substring(pos));
            if (match) {
                chars = match[0];
                pos += chars.length;
                return chars
            }
        }
        var inputLength = input.length, url, descriptors, currentDescriptor, state, c, pos = 0, candidates = [];
        function parseDescriptors() {
            var pError = false, w, d, h, i, candidate = {}, desc, lastChar, value, intVal, floatVal;
            for (i = 0; i < descriptors.length; i++) {
                desc = descriptors[i];
                lastChar = desc[desc.length - 1];
                value = desc.substring(0, desc.length - 1);
                intVal = parseInt(value, 10);
                floatVal = parseFloat(value);
                if (regexNonNegativeInteger.test(value) && lastChar === "w") {
                    if (w || d) {
                        pError = true
                    }
                    if (intVal === 0) {
                        pError = true
                    } else {
                        w = intVal
                    }
                } else if (regexFloatingPoint.test(value) && lastChar === "x") {
                    if (w || d || h) {
                        pError = true
                    }
                    if (floatVal < 0) {
                        pError = true
                    } else {
                        d = floatVal
                    }
                } else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
                    if (h || d) {
                        pError = true
                    }
                    if (intVal === 0) {
                        pError = true
                    } else {
                        h = intVal
                    }
                } else {
                    pError = true
                }
            }
            if (!pError) {
                candidate.url = url;
                if (w) {
                    candidate.w = w
                }
                if (d) {
                    candidate.d = d
                }
                if (h) {
                    candidate.h = h
                }
                if (!h && !d && !w) {
                    candidate.d = 1
                }
                if (candidate.d === 1) {
                    set.has1x = true
                }
                candidate.set = set;
                candidates.push(candidate)
            }
        }
        function tokenize() {
            collectCharacters(regexLeadingSpaces);
            currentDescriptor = "";
            state = "in descriptor";
            while (true) {
                c = input.charAt(pos);
                if (state === "in descriptor") {
                    if (isSpace(c)) {
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                            currentDescriptor = "";
                            state = "after descriptor"
                        }
                    } else if (c === ",") {
                        pos += 1;
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor)
                        }
                        parseDescriptors();
                        return
                    } else if (c === "(") {
                        currentDescriptor = currentDescriptor + c;
                        state = "in parens"
                    } else if (c === "") {
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor)
                        }
                        parseDescriptors();
                        return
                    } else {
                        currentDescriptor = currentDescriptor + c
                    }
                } else if (state === "in parens") {
                    if (c === ")") {
                        currentDescriptor = currentDescriptor + c;
                        state = "in descriptor"
                    } else if (c === "") {
                        descriptors.push(currentDescriptor);
                        parseDescriptors();
                        return
                    } else {
                        currentDescriptor = currentDescriptor + c
                    }
                } else if (state === "after descriptor") {
                    if (isSpace(c)) {} else if (c === "") {
                        parseDescriptors();
                        return
                    } else {
                        state = "in descriptor";
                        pos -= 1
                    }
                }
                pos += 1
            }
        }
        while (true) {
            collectCharacters(regexLeadingCommasOrSpaces);
            if (pos >= inputLength) {
                return candidates
            }
            url = collectCharacters(regexLeadingNotSpaces);
            descriptors = [];
            if (url.slice(-1) === ",") {
                url = url.replace(regexTrailingCommas, "");
                parseDescriptors()
            } else {
                tokenize()
            }
        }
    }
    function parseSizes(strValue) {
        var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;
        var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        var i;
        var unparsedSizesList;
        var unparsedSizesListLength;
        var unparsedSize;
        var lastComponentValue;
        var size;
        function parseComponentValues(str) {
            var chrctr;
            var component = "";
            var componentArray = [];
            var listArray = [];
            var parenDepth = 0;
            var pos = 0;
            var inComment = false;
            function pushComponent() {
                if (component) {
                    componentArray.push(component);
                    component = ""
                }
            }
            function pushComponentArray() {
                if (componentArray[0]) {
                    listArray.push(componentArray);
                    componentArray = []
                }
            }
            while (true) {
                chrctr = str.charAt(pos);
                if (chrctr === "") {
                    pushComponent();
                    pushComponentArray();
                    return listArray
                } else if (inComment) {
                    if (chrctr === "*" && str[pos + 1] === "/") {
                        inComment = false;
                        pos += 2;
                        pushComponent();
                        continue
                    } else {
                        pos += 1;
                        continue
                    }
                } else if (isSpace(chrctr)) {
                    if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
                        pos += 1;
                        continue
                    } else if (parenDepth === 0) {
                        pushComponent();
                        pos += 1;
                        continue
                    } else {
                        chrctr = " "
                    }
                } else if (chrctr === "(") {
                    parenDepth += 1
                } else if (chrctr === ")") {
                    parenDepth -= 1
                } else if (chrctr === ",") {
                    pushComponent();
                    pushComponentArray();
                    pos += 1;
                    continue
                } else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
                    inComment = true;
                    pos += 2;
                    continue
                }
                component = component + chrctr;
                pos += 1
            }
        }
        function isValidNonNegativeSourceSizeValue(s) {
            if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
                return true
            }
            if (regexCssCalc.test(s)) {
                return true
            }
            if (s === "0" || s === "-0" || s === "+0") {
                return true
            }
            return false
        }
        unparsedSizesList = parseComponentValues(strValue);
        unparsedSizesListLength = unparsedSizesList.length;
        for (i = 0; i < unparsedSizesListLength; i++) {
            unparsedSize = unparsedSizesList[i];
            lastComponentValue = unparsedSize[unparsedSize.length - 1];
            if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
                size = lastComponentValue;
                unparsedSize.pop()
            } else {
                continue
            }
            if (unparsedSize.length === 0) {
                return size
            }
            unparsedSize = unparsedSize.join(" ");
            if (!pf.matchesMedia(unparsedSize)) {
                continue
            }
            return size
        }
        return "100vw"
    }
    pf.ns = ("pf" + (new Date).getTime()).substr(0, 9);
    pf.supSrcset = "srcset"in image;
    pf.supSizes = "sizes"in image;
    pf.supPicture = !!window.HTMLPictureElement;
    if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
        (function(image2) {
            image.srcset = "data:,a";
            image2.src = "data:,a";
            pf.supSrcset = image.complete === image2.complete;
            pf.supPicture = pf.supSrcset && pf.supPicture
        }
        )(document.createElement("img"))
    }
    if (pf.supSrcset && !pf.supSizes) {
        (function() {
            var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
            var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            var img = document.createElement("img");
            var test = function() {
                var width = img.width;
                if (width === 2) {
                    pf.supSizes = true
                }
                alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;
                isSupportTestReady = true;
                setTimeout(picturefill)
            };
            img.onload = test;
            img.onerror = test;
            img.setAttribute("sizes", "9px");
            img.srcset = width1 + " 1w," + width2 + " 9w";
            img.src = width1
        }
        )()
    } else {
        isSupportTestReady = true
    }
    pf.selShort = "picture>img,img[srcset]";
    pf.sel = pf.selShort;
    pf.cfg = cfg;
    pf.DPR = DPR || 1;
    pf.u = units;
    pf.types = types;
    pf.setSize = noop;
    pf.makeUrl = memoize(function(src) {
        anchor.href = src;
        return anchor.href
    });
    pf.qsa = function(context, sel) {
        return "querySelector"in context ? context.querySelectorAll(sel) : []
    }
    ;
    pf.matchesMedia = function() {
        if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
            pf.matchesMedia = function(media) {
                return !media || matchMedia(media).matches
            }
        } else {
            pf.matchesMedia = pf.mMQ
        }
        return pf.matchesMedia.apply(this, arguments)
    }
    ;
    pf.mMQ = function(media) {
        return media ? evalCSS(media) : true
    }
    ;
    pf.calcLength = function(sourceSizeValue) {
        var value = evalCSS(sourceSizeValue, true) || false;
        if (value < 0) {
            value = false
        }
        return value
    }
    ;
    pf.supportsType = function(type) {
        return type ? types[type] : true
    }
    ;
    pf.parseSize = memoize(function(sourceSizeStr) {
        var match = (sourceSizeStr || "").match(regSize);
        return {
            media: match && match[1],
            length: match && match[2]
        }
    });
    pf.parseSet = function(set) {
        if (!set.cands) {
            set.cands = parseSrcset(set.srcset, set)
        }
        return set.cands
    }
    ;
    pf.getEmValue = function() {
        var body;
        if (!eminpx && (body = document.body)) {
            var div = document.createElement("div")
              , originalHTMLCSS = docElem.style.cssText
              , originalBodyCSS = body.style.cssText;
            div.style.cssText = baseStyle;
            docElem.style.cssText = fsCss;
            body.style.cssText = fsCss;
            body.appendChild(div);
            eminpx = div.offsetWidth;
            body.removeChild(div);
            eminpx = parseFloat(eminpx, 10);
            docElem.style.cssText = originalHTMLCSS;
            body.style.cssText = originalBodyCSS
        }
        return eminpx || 16
    }
    ;
    pf.calcListLength = function(sourceSizeListStr) {
        if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
            var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));
            sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength
        }
        return sizeLengthCache[sourceSizeListStr]
    }
    ;
    pf.setRes = function(set) {
        var candidates;
        if (set) {
            candidates = pf.parseSet(set);
            for (var i = 0, len = candidates.length; i < len; i++) {
                setResolution(candidates[i], set.sizes)
            }
        }
        return candidates
    }
    ;
    pf.setRes.res = setResolution;
    pf.applySetCandidate = function(candidates, img) {
        if (!candidates.length) {
            return
        }
        var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;
        var imageData = img[pf.ns];
        var dpr = pf.DPR;
        curSrc = imageData.curSrc || img[curSrcProp];
        curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);
        if (curCan && curCan.set === candidates[0].set) {
            abortCurSrc = supportAbort && !img.complete && curCan.res - .1 > dpr;
            if (!abortCurSrc) {
                curCan.cached = true;
                if (curCan.res >= dpr) {
                    bestCandidate = curCan
                }
            }
        }
        if (!bestCandidate) {
            candidates.sort(ascendingSort);
            length = candidates.length;
            bestCandidate = candidates[length - 1];
            for (i = 0; i < length; i++) {
                candidate = candidates[i];
                if (candidate.res >= dpr) {
                    j = i - 1;
                    if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {
                        bestCandidate = candidates[j]
                    } else {
                        bestCandidate = candidate
                    }
                    break
                }
            }
        }
        if (bestCandidate) {
            candidateSrc = pf.makeUrl(bestCandidate.url);
            imageData.curSrc = candidateSrc;
            imageData.curCan = bestCandidate;
            if (candidateSrc !== curSrc) {
                pf.setSrc(img, bestCandidate)
            }
            pf.setSize(img)
        }
    }
    ;
    pf.setSrc = function(img, bestCandidate) {
        var origWidth;
        img.src = bestCandidate.url;
        if (bestCandidate.set.type === "image/svg+xml") {
            origWidth = img.style.width;
            img.style.width = img.offsetWidth + 1 + "px";
            if (img.offsetWidth + 1) {
                img.style.width = origWidth
            }
        }
    }
    ;
    pf.getSet = function(img) {
        var i, set, supportsType;
        var match = false;
        var sets = img[pf.ns].sets;
        for (i = 0; i < sets.length && !match; i++) {
            set = sets[i];
            if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
                continue
            }
            if (supportsType === "pending") {
                set = supportsType
            }
            match = set;
            break
        }
        return match
    }
    ;
    pf.parseSets = function(element, parent, options) {
        var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;
        var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
        var imageData = element[pf.ns];
        if (imageData.src === undefined || options.src) {
            imageData.src = getImgAttr.call(element, "src");
            if (imageData.src) {
                setImgAttr.call(element, srcAttr, imageData.src)
            } else {
                removeImgAttr.call(element, srcAttr)
            }
        }
        if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
            srcsetAttribute = getImgAttr.call(element, "srcset");
            imageData.srcset = srcsetAttribute;
            srcsetParsed = true
        }
        imageData.sets = [];
        if (hasPicture) {
            imageData.pic = true;
            getAllSourceElements(parent, imageData.sets)
        }
        if (imageData.srcset) {
            imageSet = {
                srcset: imageData.srcset,
                sizes: getImgAttr.call(element, "sizes")
            };
            imageData.sets.push(imageSet);
            isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");
            if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
                imageSet.srcset += ", " + imageData.src;
                imageSet.cands.push({
                    url: imageData.src,
                    d: 1,
                    set: imageSet
                })
            }
        } else if (imageData.src) {
            imageData.sets.push({
                srcset: imageData.src,
                sizes: null
            })
        }
        imageData.curCan = null;
        imageData.curSrc = undefined;
        imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);
        if (srcsetParsed && pf.supSrcset && !imageData.supported) {
            if (srcsetAttribute) {
                setImgAttr.call(element, srcsetAttr, srcsetAttribute);
                element.srcset = ""
            } else {
                removeImgAttr.call(element, srcsetAttr)
            }
        }
        if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
            if (imageData.src === null) {
                element.removeAttribute("src")
            } else {
                element.src = imageData.src
            }
        }
        imageData.parsed = true
    }
    ;
    pf.fillImg = function(element, options) {
        var imageData;
        var extreme = options.reselect || options.reevaluate;
        if (!element[pf.ns]) {
            element[pf.ns] = {}
        }
        imageData = element[pf.ns];
        if (!extreme && imageData.evaled === evalId) {
            return
        }
        if (!imageData.parsed || options.reevaluate) {
            pf.parseSets(element, element.parentNode, options)
        }
        if (!imageData.supported) {
            applyBestCandidate(element)
        } else {
            imageData.evaled = evalId
        }
    }
    ;
    pf.setupRun = function() {
        if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
            updateMetrics()
        }
    }
    ;
    if (pf.supPicture) {
        picturefill = noop;
        pf.fillImg = noop
    } else {
        (function() {
            var isDomReady;
            var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;
            var run = function() {
                var readyState = document.readyState || "";
                timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
                if (document.body) {
                    pf.fillImgs();
                    isDomReady = isDomReady || regReady.test(readyState);
                    if (isDomReady) {
                        clearTimeout(timerId)
                    }
                }
            };
            var timerId = setTimeout(run, document.body ? 9 : 99);
            var debounce = function(func, wait) {
                var timeout, timestamp;
                var later = function() {
                    var last = new Date - timestamp;
                    if (last < wait) {
                        timeout = setTimeout(later, wait - last)
                    } else {
                        timeout = null;
                        func()
                    }
                };
                return function() {
                    timestamp = new Date;
                    if (!timeout) {
                        timeout = setTimeout(later, wait)
                    }
                }
            };
            var lastClientWidth = docElem.clientHeight;
            var onResize = function() {
                isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
                lastClientWidth = docElem.clientHeight;
                if (isVwDirty) {
                    pf.fillImgs()
                }
            };
            on(window, "resize", debounce(onResize, 99));
            on(document, "readystatechange", run)
        }
        )()
    }
    pf.picturefill = picturefill;
    pf.fillImgs = picturefill;
    pf.teardownRun = noop;
    picturefill._ = pf;
    window.picturefillCFG = {
        pf: pf,
        push: function(args) {
            var name = args.shift();
            if (typeof pf[name] === "function") {
                pf[name].apply(pf, args)
            } else {
                cfg[name] = args[0];
                if (alreadyRun) {
                    pf.fillImgs({
                        reselect: true
                    })
                }
            }
        }
    };
    while (setOptions && setOptions.length) {
        window.picturefillCFG.push(setOptions.shift())
    }
    window.picturefill = picturefill;
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = picturefill
    } else if (typeof define === "function" && define.amd) {
        define("picturefill", function() {
            return picturefill
        })
    }
    if (!pf.supPicture) {
        types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==")
    }
}
)(window, document);
(function() {
    "use strict";
    window.edx = window.edx || {};
    window.edx.GlobalLoader = function() {
        var registeredModules = {}, GlobalLoader;
        registeredModules.jquery = $;
        registeredModules.underscore = _;
        GlobalLoader = {
            defineAs: function(name, path) {
                return function(requiredPaths, moduleFunction) {
                    var requiredModules = [], pathCount = requiredPaths.length, requiredModule, module, i;
                    for (i = 0; i < pathCount; i++) {
                        requiredModule = registeredModules[requiredPaths[i]];
                        requiredModules.push(requiredModule)
                    }
                    module = moduleFunction.apply(GlobalLoader, requiredModules);
                    registeredModules[path] = module;
                    edx[name] = module
                }
            },
            clear: function() {
                registeredModules = {}
            }
        };
        return GlobalLoader
    }()
}
).call(this);
(function(define) {
    "use strict";
    define([], function() {
        var interpolate;
        interpolate = function(formatString, parameters) {
            return formatString.replace(/{\w+}/g, function(parameter) {
                var parameterName = parameter.slice(1, -1);
                return String(parameters[parameterName])
            })
        }
        ;
        return {
            interpolate: interpolate
        }
    })
}
).call(this, typeof define === "function" && define.amd ? define : typeof RequireJS !== "undefined" ? RequireJS.define : edx.GlobalLoader.defineAs("StringUtils", "edx-ui-toolkit/js/utils/string-utils"));
(function(define) {
    "use strict";
    define(["underscore", "jquery", "edx-ui-toolkit/js/utils/string-utils"], function(_, $, StringUtils) {
        var HtmlUtils, ensureHtml, interpolateHtml, joinHtml, HTML, template, setHtml, append, prepend;
        function HtmlSnippet(htmlString) {
            this.text = htmlString
        }
        HtmlSnippet.prototype.valueOf = function() {
            return this.text
        }
        ;
        HtmlSnippet.prototype.toString = function() {
            return this.text
        }
        ;
        HTML = function(htmlString) {
            return new HtmlSnippet(htmlString)
        }
        ;
        ensureHtml = function(html) {
            if (html instanceof HtmlSnippet) {
                return html
            } else {
                return HTML(_.escape(html))
            }
        }
        ;
        interpolateHtml = function(formatString, parameters) {
            var result = StringUtils.interpolate(ensureHtml(formatString).toString(), _.mapObject(parameters, ensureHtml));
            return HTML(result)
        }
        ;
        joinHtml = function() {
            var html = "", argumentCount = arguments.length, i;
            for (i = 0; i < argumentCount; i++) {
                html += ensureHtml(arguments[i])
            }
            return HTML(html)
        }
        ;
        template = function(text, settings) {
            return function(data) {
                var augmentedData = _.extend({
                    HtmlUtils: HtmlUtils,
                    StringUtils: StringUtils
                }, data || {});
                return HTML(_.template(text, settings)(augmentedData))
            }
        }
        ;
        setHtml = function(element, html) {
            return $(element).html(ensureHtml(html).toString())
        }
        ;
        append = function(element, html) {
            return $(element).append(ensureHtml(html).toString())
        }
        ;
        prepend = function(element, html) {
            return $(element).prepend(ensureHtml(html).toString())
        }
        ;
        HtmlUtils = {
            append: append,
            ensureHtml: ensureHtml,
            HTML: HTML,
            HtmlSnippet: HtmlSnippet,
            interpolateHtml: interpolateHtml,
            joinHtml: joinHtml,
            prepend: prepend,
            setHtml: setHtml,
            template: template
        };
        return HtmlUtils
    })
}
).call(this, typeof define === "function" && define.amd ? define : typeof RequireJS !== "undefined" ? RequireJS.define : edx.GlobalLoader.defineAs("HtmlUtils", "edx-ui-toolkit/js/utils/html-utils"));
var requirejs, require, define;
(function(global, setTimeout) {
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.5", commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, isBrowser = !!(typeof window !== "undefined" && typeof navigator !== "undefined" && window.document), isWebWorker = !isBrowser && typeof importScripts !== "undefined", readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = typeof opera !== "undefined" && opera.toString() === "[object Opera]", contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = false;
    function commentReplace(match, singlePrefix) {
        return singlePrefix || ""
    }
    function isFunction(it) {
        return ostring.call(it) === "[object Function]"
    }
    function isArray(it) {
        return ostring.call(it) === "[object Array]"
    }
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break
                }
            }
        }
    }
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break
                }
            }
        }
    }
    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop)
    }
    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop]
    }
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break
                }
            }
        }
    }
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function(value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === "object" && value && !isArray(value) && !isFunction(value) && !(value instanceof RegExp)) {
                        if (!target[prop]) {
                            target[prop] = {}
                        }
                        mixin(target[prop], value, force, deepStringMixin)
                    } else {
                        target[prop] = value
                    }
                }
            })
        }
        return target
    }
    function bind(obj, fn) {
        return function() {
            return fn.apply(obj, arguments)
        }
    }
    function scripts() {
        return document.getElementsByTagName("script")
    }
    function defaultOnError(err) {
        throw err
    }
    function getGlobal(value) {
        if (!value) {
            return value
        }
        var g = global;
        each(value.split("."), function(part) {
            g = g[part]
        });
        return g
    }
    function makeError(id, msg, err, requireModules) {
    }
    if (typeof define !== "undefined") {
        return
    }
    if (typeof requirejs !== "undefined") {
        if (isFunction(requirejs)) {
            return
        }
        cfg = requirejs;
        requirejs = undefined
    }
    if (typeof require !== "undefined" && !isFunction(require)) {
        cfg = require;
        require = undefined
    }
    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers, checkLoadedTimeoutId, config = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, registry = {}, enabledRegistry = {}, undefEvents = {}, defQueue = [], defined = {}, urlFetched = {}, bundlesMap = {}, requireCounter = 1, unnormalizedCounter = 1;
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === ".") {
                    ary.splice(i, 1);
                    i -= 1
                } else if (part === "..") {
                    if (i === 0 || i === 1 && ary[2] === ".." || ary[i - 1] === "..") {
                        continue
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2
                    }
                }
            }
        }
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex, foundMap, foundI, foundStarMap, starI, normalizedBaseParts, baseParts = baseName && baseName.split("/"), map = config.map, starMap = map && map["*"];
            if (name) {
                name = name.split("/");
                lastIndex = name.length - 1;
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "")
                }
                if (name[0].charAt(0) === "." && baseParts) {
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name)
                }
                trimDots(name);
                name = name.join("/")
            }
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split("/");
                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join("/");
                    if (baseParts) {
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join("/"));
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop
                                }
                            }
                        }
                    }
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i
                    }
                }
                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI
                }
                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join("/")
                }
            }
            pkgMain = getOwn(config.pkgs, name);
            return pkgMain ? pkgMain : name
        }
        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function(scriptNode) {
                    if (scriptNode.getAttribute("data-requiremodule") === name && scriptNode.getAttribute("data-requirecontext") === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true
                    }
                })
            }
        }
        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                pathConfig.shift();
                context.require.undef(id);
                context.makeRequire(null, {
                    skipMap: true
                })([id]);
                return true
            }
        }
        function splitPrefix(name) {
            var prefix, index = name ? name.indexOf("!") : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length)
            }
            return [prefix, name]
        }
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts, prefix = null, parentName = parentModuleMap ? parentModuleMap.name : null, originalName = name, isDefine = true, normalizedName = "";
            if (!name) {
                isDefine = false;
                name = "_@r" + (requireCounter += 1)
            }
            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];
            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix)
            }
            if (name) {
                if (prefix) {
                    if (isNormalized) {
                        normalizedName = name
                    } else if (pluginModule && pluginModule.normalize) {
                        normalizedName = pluginModule.normalize(name, function(name) {
                            return normalize(name, parentName, applyMap)
                        })
                    } else {
                        normalizedName = name.indexOf("!") === -1 ? normalize(name, parentName, applyMap) : name
                    }
                } else {
                    normalizedName = normalize(name, parentName, applyMap);
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;
                    url = context.nameToUrl(normalizedName)
                }
            }
            suffix = prefix && !pluginModule && !isNormalized ? "_unnormalized" + (unnormalizedCounter += 1) : "";
            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ? prefix + "!" + normalizedName : normalizedName) + suffix
            }
        }
        function getModule(depMap) {
            var id = depMap.id
              , mod = getOwn(registry, id);
            if (!mod) {
                mod = registry[id] = new context.Module(depMap)
            }
            return mod
        }
        function on(depMap, name, fn) {
            var id = depMap.id
              , mod = getOwn(registry, id);
            if (hasProp(defined, id) && (!mod || mod.defineEmitComplete)) {
                if (name === "defined") {
                    fn(defined[id])
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === "error") {
                    fn(mod.error)
                } else {
                    mod.on(name, fn)
                }
            }
        }
        function onError(err, errback) {
        }
        function takeGlobalQueue() {
            if (globalDefQueue.length) {
                each(globalDefQueue, function(queueItem) {
                    var id = queueItem[0];
                    if (typeof id === "string") {
                        context.defQueueMap[id] = true
                    }
                    defQueue.push(queueItem)
                });
                globalDefQueue = []
            }
        }
        handlers = {
            require: function(mod) {
                if (mod.require) {
                    return mod.require
                } else {
                    return mod.require = context.makeRequire(mod.map)
                }
            },
            exports: function(mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return defined[mod.map.id] = mod.exports
                    } else {
                        return mod.exports = defined[mod.map.id] = {}
                    }
                }
            },
            module: function(mod) {
                if (mod.module) {
                    return mod.module
                } else {
                    return mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function() {
                            return getOwn(config.config, mod.map.id) || {}
                        },
                        exports: mod.exports || (mod.exports = {})
                    }
                }
            }
        };
        function cleanRegistry(id) {
            delete registry[id];
            delete enabledRegistry[id]
        }
        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;
            if (mod.error) {
                mod.emit("error", mod.error)
            } else {
                traced[id] = true;
                each(mod.depMaps, function(depMap, i) {
                    var depId = depMap.id
                      , dep = getOwn(registry, depId);
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check()
                        } else {
                            breakCycle(dep, traced, processed)
                        }
                    }
                });
                processed[id] = true
            }
        }
        function checkLoaded() {
            var err, usingPathFallback, waitInterval = config.waitSeconds * 1e3, expired = waitInterval && context.startTime + waitInterval < (new Date).getTime(), noLoads = [], reqCalls = [], stillLoading = false, needCycleCheck = true;
            if (inCheckLoaded) {
                return
            }
            inCheckLoaded = true;
            eachProp(enabledRegistry, function(mod) {
                var map = mod.map
                  , modId = map.id;
                if (!mod.enabled) {
                    return
                }
                if (!map.isDefine) {
                    reqCalls.push(mod)
                }
                if (!mod.error) {
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true
                        } else {
                            noLoads.push(modId);
                            removeScript(modId)
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            return needCycleCheck = false
                        }
                    }
                }
            });
            if (expired && noLoads.length) {
                err = makeError("timeout", "Load timeout for modules: " + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err)
            }
            if (needCycleCheck) {
                each(reqCalls, function(mod) {
                    breakCycle(mod, {}, {})
                })
            }
            if ((!expired || usingPathFallback) && stillLoading) {
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function() {
                        checkLoadedTimeoutId = 0;
                        checkLoaded()
                    }, 50)
                }
            }
            inCheckLoaded = false
        }
        Module = function(map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0
        }
        ;
        Module.prototype = {
            init: function(depMaps, factory, errback, options) {
                options = options || {};
                if (this.inited) {
                    return
                }
                this.factory = factory;
                if (errback) {
                    this.on("error", errback)
                } else if (this.events.error) {
                    errback = bind(this, function(err) {
                        this.emit("error", err)
                    })
                }
                this.depMaps = depMaps && depMaps.slice(0);
                this.errback = errback;
                this.inited = true;
                this.ignore = options.ignore;
                if (options.enabled || this.enabled) {
                    this.enable()
                } else {
                    this.check()
                }
            },
            defineDep: function(i, depExports) {
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports
                }
            },
            fetch: function() {
                if (this.fetched) {
                    return
                }
                this.fetched = true;
                context.startTime = (new Date).getTime();
                var map = this.map;
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function() {
                        return map.prefix ? this.callPlugin() : this.load()
                    }))
                } else {
                    return map.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var url = this.map.url;
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url)
                }
            },
            check: function() {
                if (!this.enabled || this.enabling) {
                    return
                }
                var err, cjsModule, id = this.map.id, depExports = this.depExports, exports = this.exports, factory = this.factory;
                if (!this.inited) {
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch()
                    }
                } else if (this.error) {
                    this.emit("error", this.error)
                } else if (!this.defining) {
                    this.defining = true;
                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports)
                                } catch (e) {
                                    err = e
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports)
                            }
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports
                                } else if (this.usingExports) {
                                    exports = this.exports
                                }
                            }
                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? "define" : "require";
                                return onError(this.error = err)
                            }
                        } else {
                            exports = factory
                        }
                        this.exports = exports;
                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;
                            if (req.onResourceLoad) {
                                var resLoadMaps = [];
                                each(this.depMaps, function(depMap) {
                                    resLoadMaps.push(depMap.normalizedMap || depMap)
                                });
                                req.onResourceLoad(context, this.map, resLoadMaps)
                            }
                        }
                        cleanRegistry(id);
                        this.defined = true
                    }
                    this.defining = false;
                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit("defined", this.exports);
                        this.defineEmitComplete = true
                    }
                }
            },
            callPlugin: function() {
                var map = this.map
                  , id = map.id
                  , pluginMap = makeModuleMap(map.prefix);
                this.depMaps.push(pluginMap);
                on(pluginMap, "defined", bind(this, function(plugin) {
                    var load, normalizedMap, normalizedMod, bundleId = getOwn(bundlesMap, this.map.id), name = this.map.name, parentName = this.map.parentMap ? this.map.parentMap.name : null, localRequire = context.makeRequire(map.parentMap, {
                        enableBuildCallback: true
                    });
                    if (this.map.unnormalized) {
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function(name) {
                                return normalize(name, parentName, true)
                            }) || ""
                        }
                        normalizedMap = makeModuleMap(map.prefix + "!" + name, this.map.parentMap, true);
                        on(normalizedMap, "defined", bind(this, function(value) {
                            this.map.normalizedMap = normalizedMap;
                            this.init([], function() {
                                return value
                            }, null, {
                                enabled: true,
                                ignore: true
                            })
                        }));
                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            this.depMaps.push(normalizedMap);
                            if (this.events.error) {
                                normalizedMod.on("error", bind(this, function(err) {
                                    this.emit("error", err)
                                }))
                            }
                            normalizedMod.enable()
                        }
                        return
                    }
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return
                    }
                    load = bind(this, function(value) {
                        this.init([], function() {
                            return value
                        }, null, {
                            enabled: true
                        })
                    });
                    load.error = bind(this, function(err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];
                        eachProp(registry, function(mod) {
                            if (mod.map.id.indexOf(id + "_unnormalized") === 0) {
                                cleanRegistry(mod.map.id)
                            }
                        });
                        onError(err)
                    });
                    load.fromText = bind(this, function(text, textAlt) {
                        var moduleName = map.name
                          , moduleMap = makeModuleMap(moduleName)
                          , hasInteractive = useInteractive;
                        if (textAlt) {
                            text = textAlt
                        }
                        if (hasInteractive) {
                            useInteractive = false
                        }
                        getModule(moduleMap);
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id]
                        }
                        try {
                            req.exec(text)
                        } catch (e) {
                            return onError(makeError("fromtexteval", "fromText eval for " + id + " failed: " + e, e, [id]))
                        }
                        if (hasInteractive) {
                            useInteractive = true
                        }
                        this.depMaps.push(moduleMap);
                        context.completeLoad(moduleName);
                        localRequire([moduleName], load)
                    });
                    plugin.load(map.name, localRequire, load, config)
                }));
                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap
            },
            enable: function() {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;
                this.enabling = true;
                each(this.depMaps, bind(this, function(depMap, i) {
                    var id, mod, handler;
                    if (typeof depMap === "string") {
                        depMap = makeModuleMap(depMap, this.map.isDefine ? this.map : this.map.parentMap, false, !this.skipMap);
                        this.depMaps[i] = depMap;
                        handler = getOwn(handlers, depMap.id);
                        if (handler) {
                            this.depExports[i] = handler(this);
                            return
                        }
                        this.depCount += 1;
                        on(depMap, "defined", bind(this, function(depExports) {
                            if (this.undefed) {
                                return
                            }
                            this.defineDep(i, depExports);
                            this.check()
                        }));
                        if (this.errback) {
                            on(depMap, "error", bind(this, this.errback))
                        } else if (this.events.error) {
                            on(depMap, "error", bind(this, function(err) {
                                this.emit("error", err)
                            }))
                        }
                    }
                    id = depMap.id;
                    mod = registry[id];
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this)
                    }
                }));
                eachProp(this.pluginMaps, bind(this, function(pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this)
                    }
                }));
                this.enabling = false;
                this.check()
            },
            on: function(name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = []
                }
                cbs.push(cb)
            },
            emit: function(name, evt) {
                each(this.events[name], function(cb) {
                    cb(evt)
                });
                if (name === "error") {
                    delete this.events[name]
                }
            }
        };
        function callGetModule(args) {
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2])
            }
        }
        function removeListener(node, func, name, ieName) {
            if (node.detachEvent && !isOpera) {
                if (ieName) {
                    node.detachEvent(ieName, func)
                }
            } else {
                node.removeEventListener(name, func, false)
            }
        }
        function getScriptData(evt) {
            var node = evt.currentTarget || evt.srcElement;
            removeListener(node, context.onScriptLoad, "load", "onreadystatechange");
            removeListener(node, context.onScriptError, "error");
            return {
                node: node,
                id: node && node.getAttribute("data-requiremodule")
            }
        }
        function intakeDefines() {
            var args;
            takeGlobalQueue();
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError("mismatch", "Mismatched anonymous define() module: " + args[args.length - 1]))
                } else {
                    callGetModule(args)
                }
            }
            context.defQueueMap = {}
        }
        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,
            configure: function(cfg) {
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== "/") {
                        cfg.baseUrl += "/"
                    }
                }
                if (typeof cfg.urlArgs === "string") {
                    var urlArgs = cfg.urlArgs;
                    cfg.urlArgs = function(id, url) {
                        return (url.indexOf("?") === -1 ? "?" : "&") + urlArgs
                    }
                }
                var shim = config.shim
                  , objs = {
                    paths: true,
                    bundles: true,
                    config: true,
                    map: true
                };
                eachProp(cfg, function(value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {}
                        }
                        mixin(config[prop], value, true, true)
                    } else {
                        config[prop] = value
                    }
                });
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function(value, prop) {
                        each(value, function(v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop
                            }
                        })
                    })
                }
                if (cfg.shim) {
                    eachProp(cfg.shim, function(value, id) {
                        if (isArray(value)) {
                            value = {
                                deps: value
                            }
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value)
                        }
                        shim[id] = value
                    });
                    config.shim = shim
                }
                if (cfg.packages) {
                    each(cfg.packages, function(pkgObj) {
                        var location, name;
                        pkgObj = typeof pkgObj === "string" ? {
                            name: pkgObj
                        } : pkgObj;
                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location
                        }
                        config.pkgs[name] = pkgObj.name + "/" + (pkgObj.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    })
                }
                eachProp(registry, function(mod, id) {
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true)
                    }
                });
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback)
                }
            },
            makeShimExports: function(value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments)
                    }
                    return ret || value.exports && getGlobal(value.exports)
                }
                return fn
            },
            makeRequire: function(relMap, options) {
                options = options || {};
                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;
                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true
                    }
                    if (typeof deps === "string") {
                        if (isFunction(callback)) {
                            return onError(makeError("requireargs", "Invalid require call"), errback)
                        }
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id])
                        }
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire)
                        }
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;
                        if (!hasProp(defined, id)) {
                            return onError(makeError("notloaded", 'Module name "' + id + '" has not been loaded yet for context: ' + contextName + (relMap ? "" : ". Use require([])")))
                        }
                        return defined[id]
                    }
                    intakeDefines();
                    context.nextTick(function() {
                        intakeDefines();
                        requireMod = getModule(makeModuleMap(null, relMap));
                        requireMod.skipMap = options.skipMap;
                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });
                        checkLoaded()
                    });
                    return localRequire
                }
                mixin(localRequire, {
                    isBrowser: isBrowser,
                    toUrl: function(moduleNamePlusExt) {
                        var ext, index = moduleNamePlusExt.lastIndexOf("."), segment = moduleNamePlusExt.split("/")[0], isRelative = segment === "." || segment === "..";
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index)
                        }
                        return context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, true), ext, true)
                    },
                    defined: function(id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id)
                    },
                    specified: function(id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id)
                    }
                });
                if (!relMap) {
                    localRequire.undef = function(id) {
                        takeGlobalQueue();
                        var map = makeModuleMap(id, relMap, true)
                          , mod = getOwn(registry, id);
                        mod.undefed = true;
                        removeScript(id);
                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1)
                            }
                        });
                        delete context.defQueueMap[id];
                        if (mod) {
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events
                            }
                            cleanRegistry(id)
                        }
                    }
                }
                return localRequire
            },
            enable: function(depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable()
                }
            },
            completeLoad: function(moduleName) {
                var found, args, mod, shim = getOwn(config.shim, moduleName) || {}, shExports = shim.exports;
                takeGlobalQueue();
                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        if (found) {
                            break
                        }
                        found = true
                    } else if (args[0] === moduleName) {
                        found = true
                    }
                    callGetModule(args)
                }
                context.defQueueMap = {};
                mod = getOwn(registry, moduleName);
                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return
                        } else {
                            return onError(makeError("nodefine", "No define call for " + moduleName, null, [moduleName]))
                        }
                    } else {
                        callGetModule([moduleName, shim.deps || [], shim.exportsFn])
                    }
                }
                checkLoaded()
            },
            nameToUrl: function(moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url, parentPath, bundleId, pkgMain = getOwn(config.pkgs, moduleName);
                if (pkgMain) {
                    moduleName = pkgMain
                }
                bundleId = getOwn(bundlesMap, moduleName);
                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt)
                }
                if (req.jsExtRegExp.test(moduleName)) {
                    url = moduleName + (ext || "")
                } else {
                    paths = config.paths;
                    syms = moduleName.split("/");
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join("/");
                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0]
                            }
                            syms.splice(0, i, parentPath);
                            break
                        }
                    }
                    url = syms.join("/");
                    url += ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? "" : ".js");
                    url = (url.charAt(0) === "/" || url.match(/^[\w\+\.\-]+:/) ? "" : config.baseUrl) + url
                }
                return config.urlArgs && !/^blob\:/.test(url) ? url + config.urlArgs(moduleName, url) : url
            },
            load: function(id, url) {
                req.load(context, id, url)
            },
            execCb: function(name, callback, args, exports) {
                return callback.apply(exports, args)
            },
            onScriptLoad: function(evt) {
                if (evt.type === "load" || readyRegExp.test((evt.currentTarget || evt.srcElement).readyState)) {
                    interactiveScript = null;
                    var data = getScriptData(evt);
                    context.completeLoad(data.id)
                }
            },
            onScriptError: function(evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    var parents = [];
                    eachProp(registry, function(value, key) {
                        if (key.indexOf("_@r") !== 0) {
                            each(value.depMaps, function(depMap) {
                                if (depMap.id === data.id) {
                                    parents.push(key);
                                    return true
                                }
                            })
                        }
                    });
                    return onError(makeError("scripterror", 'Script error for "' + data.id + (parents.length ? '", needed by: ' + parents.join(", ") : '"'), evt, [data.id]))
                }
            }
        };
        context.require = context.makeRequire();
        return context
    }
    req = requirejs = function(deps, callback, errback, optional) {
        var context, config, contextName = defContextName;
        if (!isArray(deps) && typeof deps !== "string") {
            config = deps;
            if (isArray(callback)) {
                deps = callback;
                callback = errback;
                errback = optional
            } else {
                deps = []
            }
        }
        if (config && config.context) {
            contextName = config.context
        }
        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName)
        }
        if (config) {
            context.configure(config)
        }
        return context.require(deps, callback, errback)
    }
    ;
    req.config = function(config) {
        return req(config)
    }
    ;
    req.nextTick = typeof setTimeout !== "undefined" ? function(fn) {
        setTimeout(fn, 4)
    }
    : function(fn) {
        fn()
    }
    ;
    if (!require) {
        require = req
    }
    req.version = version;
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };
    req({});
    each(["toUrl", "undef", "defined", "specified"], function(prop) {
        req[prop] = function() {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments)
        }
    });
    if (isBrowser) {
        head = s.head = document.getElementsByTagName("head")[0];
        baseElement = document.getElementsByTagName("base")[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode
        }
    }
    req.onError = defaultOnError;
    req.createNode = function(config, moduleName, url) {
        var node = config.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
        node.type = config.scriptType || "text/javascript";
        node.charset = "utf-8";
        node.async = true;
        return node
    }
    ;
    req.load = function(context, moduleName, url) {
        var config = context && context.config || {}, node;
        if (isBrowser) {
            node = req.createNode(config, moduleName, url);
            node.setAttribute("data-requirecontext", context.contextName);
            node.setAttribute("data-requiremodule", moduleName);
            if (node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf("[native code") < 0) && !isOpera) {
                useInteractive = true;
                node.attachEvent("onreadystatechange", context.onScriptLoad)
            } else {
                node.addEventListener("load", context.onScriptLoad, false);
                node.addEventListener("error", context.onScriptError, false)
            }
            node.src = url;
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url)
            }
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement)
            } else {
                head.appendChild(node)
            }
            currentlyAddingScript = null;
            return node
        } else if (isWebWorker) {
            try {
                setTimeout(function() {}, 0);
                importScripts(url);
                context.completeLoad(moduleName)
            } catch (e) {
                context.onError(makeError("importscripts", "importScripts failed for " + moduleName + " at " + url, e, [moduleName]))
            }
        }
    }
    ;
    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === "interactive") {
            return interactiveScript
        }
        eachReverse(scripts(), function(script) {
            if (script.readyState === "interactive") {
                return interactiveScript = script
            }
        });
        return interactiveScript
    }
    if (isBrowser && !cfg.skipDataMain) {
        eachReverse(scripts(), function(script) {
            if (!head) {
                head = script.parentNode
            }
            dataMain = script.getAttribute("data-main");
            if (dataMain) {
                mainScript = dataMain;
                if (!cfg.baseUrl && mainScript.indexOf("!") === -1) {
                    src = mainScript.split("/");
                    mainScript = src.pop();
                    subPath = src.length ? src.join("/") + "/" : "./";
                    cfg.baseUrl = subPath
                }
                mainScript = mainScript.replace(jsSuffixRegExp, "");
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain
                }
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];
                return true
            }
        })
    }
    define = function(name, deps, callback) {
        var node, context;
        if (typeof name !== "string") {
            callback = deps;
            deps = name;
            name = null
        }
        if (!isArray(deps)) {
            callback = deps;
            deps = null
        }
        if (!deps && isFunction(callback)) {
            deps = [];
            if (callback.length) {
                callback.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(match, dep) {
                    deps.push(dep)
                });
                deps = (callback.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(deps)
            }
        }
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute("data-requiremodule")
                }
                context = contexts[node.getAttribute("data-requirecontext")]
            }
        }
        if (context) {
            context.defQueue.push([name, deps, callback]);
            context.defQueueMap[name] = true
        } else {
            globalDefQueue.push([name, deps, callback])
        }
    }
    ;
    define.amd = {
        jQuery: true
    };
    req.exec = function(text) {
        return eval(text)
    }
    ;
    req(cfg)
}
)(this, typeof setTimeout === "undefined" ? undefined : setTimeout);
window.RequireJS = window.RequireJS || {};
RequireJS.requirejs = RequireJS.requirejs || window.requirejs;
RequireJS.require = RequireJS.require || window.require;
RequireJS.define = RequireJS.define || window.define;
window.require = undefined;
window.define = undefined;
window.requirejs = undefined;
(function(e) {
    function S(e) {
        throw RangeError(g[e])
    }
    function x(e, t) {
        var n = e.length;
        while (n--)
            e[n] = t(e[n]);
        return e
    }
    function T(e, t) {
        return x(e.split(m), t).join(".")
    }
    function N(e) {
        var t = [], n = 0, r = e.length, i, s;
        while (n < r)
            i = e.charCodeAt(n++),
            i >= 55296 && i <= 56319 && n < r ? (s = e.charCodeAt(n++),
            (s & 64512) == 56320 ? t.push(((i & 1023) << 10) + (s & 1023) + 65536) : (t.push(i),
            n--)) : t.push(i);
        return t
    }
    function C(e) {
        return x(e, function(e) {
            var t = "";
            return e > 65535 && (e -= 65536,
            t += w(e >>> 10 & 1023 | 55296),
            e = 56320 | e & 1023),
            t += w(e),
            t
        }).join("")
    }
    function k(e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : o
    }
    function L(e, t) {
        return e + 22 + 75 * (e < 26) - ((t != 0) << 5)
    }
    function A(e, t, n) {
        var r = 0;
        e = n ? b(e / l) : e >> 1,
        e += b(e / t);
        for (; e > y * a >> 1; r += o)
            e = b(e / y);
        return b(r + (y + 1) * e / (e + f))
    }
    function O(e) {
        var t = [], n = e.length, r, i = 0, f = h, l = c, d, v, m, g, y, w, E, x, T, N;
        d = e.lastIndexOf(p),
        d < 0 && (d = 0);
        for (v = 0; v < d; ++v)
            e.charCodeAt(v) >= 128 && S("not-basic"),
            t.push(e.charCodeAt(v));
        for (m = d > 0 ? d + 1 : 0; m < n; ) {
            for (g = i,
            y = 1,
            w = o; ; w += o) {
                m >= n && S("invalid-input"),
                E = k(e.charCodeAt(m++)),
                (E >= o || E > b((s - i) / y)) && S("overflow"),
                i += E * y,
                x = w <= l ? u : w >= l + a ? a : w - l;
                if (E < x)
                    break;
                N = o - x,
                y > b(s / N) && S("overflow"),
                y *= N
            }
            r = t.length + 1,
            l = A(i - g, r, g == 0),
            b(i / r) > s - f && S("overflow"),
            f += b(i / r),
            i %= r,
            t.splice(i++, 0, f)
        }
        return C(t)
    }
    function M(e) {
        var t, n, r, i, f, l, d, v, m, g, y, E = [], x, T, C, k;
        e = N(e),
        x = e.length,
        t = h,
        n = 0,
        f = c;
        for (l = 0; l < x; ++l)
            y = e[l],
            y < 128 && E.push(w(y));
        r = i = E.length,
        i && E.push(p);
        while (r < x) {
            for (d = s,
            l = 0; l < x; ++l)
                y = e[l],
                y >= t && y < d && (d = y);
            T = r + 1,
            d - t > b((s - n) / T) && S("overflow"),
            n += (d - t) * T,
            t = d;
            for (l = 0; l < x; ++l) {
                y = e[l],
                y < t && ++n > s && S("overflow");
                if (y == t) {
                    for (v = n,
                    m = o; ; m += o) {
                        g = m <= f ? u : m >= f + a ? a : m - f;
                        if (v < g)
                            break;
                        k = v - g,
                        C = o - g,
                        E.push(w(L(g + k % C, 0))),
                        v = b(k / C)
                    }
                    E.push(w(L(v, 0))),
                    f = A(n, T, r == i),
                    n = 0,
                    ++r
                }
            }
            ++n,
            ++t
        }
        return E.join("")
    }
    function _(e) {
        return T(e, function(e) {
            return d.test(e) ? O(e.slice(4).toLowerCase()) : e
        })
    }
    function D(e) {
        return T(e, function(e) {
            return v.test(e) ? "xn--" + M(e) : e
        })
    }
    var t = typeof exports == "object" && exports
      , n = typeof module == "object" && module && module.exports == t && module
      , r = typeof global == "object" && global;
    if (r.global === r || r.window === r)
        e = r;
    var i, s = 2147483647, o = 36, u = 1, a = 26, f = 38, l = 700, c = 72, h = 128, p = "-", d = /^xn--/, v = /[^ -~]/, m = /\x2E|\u3002|\uFF0E|\uFF61/g, g = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    }, y = o - u, b = Math.floor, w = String.fromCharCode, E;
    i = {
        version: "1.2.3",
        ucs2: {
            decode: N,
            encode: C
        },
        decode: O,
        encode: M,
        toASCII: D,
        toUnicode: _
    };
    if (typeof define == "function" && typeof define.amd == "object" && define.amd)
        define("punycode", [], function() {
            return i
        });
    else if (t && !t.nodeType)
        if (n)
            n.exports = i;
        else
            for (E in i)
                i.hasOwnProperty(E) && (t[E] = i[E]);
    else
        e.punycode = i
}
)(this),
function(e, t) {
    typeof exports == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define("IPv6", t) : e.IPv6 = t(e)
}(this, function(e) {
    function n(e) {
        var t = e.toLowerCase()
          , n = t.split(":")
          , r = n.length
          , i = 8;
        n[0] === "" && n[1] === "" && n[2] === "" ? (n.shift(),
        n.shift()) : n[0] === "" && n[1] === "" ? n.shift() : n[r - 1] === "" && n[r - 2] === "" && n.pop(),
        r = n.length,
        n[r - 1].indexOf(".") !== -1 && (i = 7);
        var s;
        for (s = 0; s < r; s++)
            if (n[s] === "")
                break;
        if (s < i) {
            n.splice(s, 1, "0000");
            while (n.length < i)
                n.splice(s, 0, "0000");
            r = n.length
        }
        var o;
        for (var u = 0; u < i; u++) {
            o = n[u].split("");
            for (var a = 0; a < 3; a++) {
                if (!(o[0] === "0" && o.length > 1))
                    break;
                o.splice(0, 1)
            }
            n[u] = o.join("")
        }
        var f = -1
          , l = 0
          , c = 0
          , h = -1
          , p = !1;
        for (u = 0; u < i; u++)
            p ? n[u] === "0" ? c += 1 : (p = !1,
            c > l && (f = h,
            l = c)) : n[u] == "0" && (p = !0,
            h = u,
            c = 1);
        c > l && (f = h,
        l = c),
        l > 1 && n.splice(f, l, ""),
        r = n.length;
        var d = "";
        n[0] === "" && (beststr = ":");
        for (u = 0; u < r; u++) {
            d += n[u];
            if (u === r - 1)
                break;
            d += ":"
        }
        return n[r - 1] === "" && (d += ":"),
        d
    }
    function r() {
        return e.IPv6 === this && (e.IPv6 = t),
        this
    }
    var t = e && e.IPv6;
    return {
        best: n,
        noConflict: r
    }
}),
function(e, t) {
    typeof exports == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define("SecondLevelDomains", t) : e.SecondLevelDomains = t(e)
}(this, function(e) {
    var t = e && e.SecondLevelDomains
      , n = Object.prototype.hasOwnProperty
      , r = {
        list: {
            ac: "com|gov|mil|net|org",
            ae: "ac|co|gov|mil|name|net|org|pro|sch",
            af: "com|edu|gov|net|org",
            al: "com|edu|gov|mil|net|org",
            ao: "co|ed|gv|it|og|pb",
            ar: "com|edu|gob|gov|int|mil|net|org|tur",
            at: "ac|co|gv|or",
            au: "asn|com|csiro|edu|gov|id|net|org",
            ba: "co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze",
            bb: "biz|co|com|edu|gov|info|net|org|store|tv",
            bh: "biz|cc|com|edu|gov|info|net|org",
            bn: "com|edu|gov|net|org",
            bo: "com|edu|gob|gov|int|mil|net|org|tv",
            br: "adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg",
            bs: "com|edu|gov|net|org",
            bz: "du|et|om|ov|rg",
            ca: "ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk",
            ck: "biz|co|edu|gen|gov|info|net|org",
            cn: "ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj",
            co: "com|edu|gov|mil|net|nom|org",
            cr: "ac|c|co|ed|fi|go|or|sa",
            cy: "ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm",
            do: "art|com|edu|gob|gov|mil|net|org|sld|web",
            dz: "art|asso|com|edu|gov|net|org|pol",
            ec: "com|edu|fin|gov|info|med|mil|net|org|pro",
            eg: "com|edu|eun|gov|mil|name|net|org|sci",
            er: "com|edu|gov|ind|mil|net|org|rochest|w",
            es: "com|edu|gob|nom|org",
            et: "biz|com|edu|gov|info|name|net|org",
            fj: "ac|biz|com|info|mil|name|net|org|pro",
            fk: "ac|co|gov|net|nom|org",
            fr: "asso|com|f|gouv|nom|prd|presse|tm",
            gg: "co|net|org",
            gh: "com|edu|gov|mil|org",
            gn: "ac|com|gov|net|org",
            gr: "com|edu|gov|mil|net|org",
            gt: "com|edu|gob|ind|mil|net|org",
            gu: "com|edu|gov|net|org",
            hk: "com|edu|gov|idv|net|org",
            id: "ac|co|go|mil|net|or|sch|web",
            il: "ac|co|gov|idf|k12|muni|net|org",
            in: "ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res",
            iq: "com|edu|gov|i|mil|net|org",
            ir: "ac|co|dnssec|gov|i|id|net|org|sch",
            it: "edu|gov",
            je: "co|net|org",
            jo: "com|edu|gov|mil|name|net|org|sch",
            jp: "ac|ad|co|ed|go|gr|lg|ne|or",
            ke: "ac|co|go|info|me|mobi|ne|or|sc",
            kh: "com|edu|gov|mil|net|org|per",
            ki: "biz|com|de|edu|gov|info|mob|net|org|tel",
            km: "asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire",
            kn: "edu|gov|net|org",
            kr: "ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan",
            kw: "com|edu|gov|net|org",
            ky: "com|edu|gov|net|org",
            kz: "com|edu|gov|mil|net|org",
            lb: "com|edu|gov|net|org",
            lk: "assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web",
            lr: "com|edu|gov|net|org",
            lv: "asn|com|conf|edu|gov|id|mil|net|org",
            ly: "com|edu|gov|id|med|net|org|plc|sch",
            ma: "ac|co|gov|m|net|org|press",
            mc: "asso|tm",
            me: "ac|co|edu|gov|its|net|org|priv",
            mg: "com|edu|gov|mil|nom|org|prd|tm",
            mk: "com|edu|gov|inf|name|net|org|pro",
            ml: "com|edu|gov|net|org|presse",
            mn: "edu|gov|org",
            mo: "com|edu|gov|net|org",
            mt: "com|edu|gov|net|org",
            mv: "aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",
            mw: "ac|co|com|coop|edu|gov|int|museum|net|org",
            mx: "com|edu|gob|net|org",
            my: "com|edu|gov|mil|name|net|org|sch",
            nf: "arts|com|firm|info|net|other|per|rec|store|web",
            ng: "biz|com|edu|gov|mil|mobi|name|net|org|sch",
            ni: "ac|co|com|edu|gob|mil|net|nom|org",
            np: "com|edu|gov|mil|net|org",
            nr: "biz|com|edu|gov|info|net|org",
            om: "ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch",
            pe: "com|edu|gob|mil|net|nom|org|sld",
            ph: "com|edu|gov|i|mil|net|ngo|org",
            pk: "biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web",
            pl: "art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora",
            pr: "ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof",
            ps: "com|edu|gov|net|org|plo|sec",
            pw: "belau|co|ed|go|ne|or",
            ro: "arts|com|firm|info|nom|nt|org|rec|store|tm|www",
            rs: "ac|co|edu|gov|in|org",
            sb: "com|edu|gov|net|org",
            sc: "com|edu|gov|net|org",
            sh: "co|com|edu|gov|net|nom|org",
            sl: "com|edu|gov|net|org",
            st: "co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",
            sv: "com|edu|gob|org|red",
            sz: "ac|co|org",
            tr: "av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web",
            tt: "aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel",
            tw: "club|com|ebiz|edu|game|gov|idv|mil|net|org",
            mu: "ac|co|com|gov|net|or|org",
            mz: "ac|co|edu|gov|org",
            na: "co|com",
            nz: "ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school",
            pa: "abo|ac|com|edu|gob|ing|med|net|nom|org|sld",
            pt: "com|edu|gov|int|net|nome|org|publ",
            py: "com|edu|gov|mil|net|org",
            qa: "com|edu|gov|mil|net|org",
            re: "asso|com|nom",
            ru: "ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk",
            rw: "ac|co|com|edu|gouv|gov|int|mil|net",
            sa: "com|edu|gov|med|net|org|pub|sch",
            sd: "com|edu|gov|info|med|net|org|tv",
            se: "a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z",
            sg: "com|edu|gov|idn|net|org|per",
            sn: "art|com|edu|gouv|org|perso|univ",
            sy: "com|edu|gov|mil|net|news|org",
            th: "ac|co|go|in|mi|net|or",
            tj: "ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web",
            tn: "agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism",
            tz: "ac|co|go|ne|or",
            ua: "biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt",
            ug: "ac|co|go|ne|or|org|sc",
            uk: "ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc",
            us: "dni|fed|isa|kids|nsn",
            uy: "com|edu|gub|mil|net|org",
            ve: "co|com|edu|gob|info|mil|net|org|web",
            vi: "co|com|k12|net|org",
            vn: "ac|biz|com|edu|gov|health|info|int|name|net|org|pro",
            ye: "co|com|gov|ltd|me|net|org|plc",
            yu: "ac|co|edu|gov|org",
            za: "ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web",
            zm: "ac|co|com|edu|gov|net|org|sch"
        },
        has_expression: null,
        is_expression: null,
        has: function(e) {
            return !!e.match(r.has_expression)
        },
        is: function(e) {
            return !!e.match(r.is_expression)
        },
        get: function(e) {
            var t = e.match(r.has_expression);
            return t && t[1] || null
        },
        noConflict: function() {
            return e.SecondLevelDomains === this && (e.SecondLevelDomains = t),
            this
        },
        init: function() {
            var e = "";
            for (var t in r.list) {
                if (!n.call(r.list, t))
                    continue;
                var i = "(" + r.list[t] + ")." + t;
                e += "|(" + i + ")"
            }
            r.has_expression = new RegExp("\\.(" + e.substr(1) + ")$","i"),
            r.is_expression = new RegExp("^(" + e.substr(1) + ")$","i")
        }
    };
    return r.init(),
    r
}),
function(e, t) {
    typeof exports == "object" ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : typeof define == "function" && define.amd ? define("URI", ["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains, e)
}(this, function(e, t, n, r) {
    function s(e, t) {
        return this instanceof s ? (e === undefined && (typeof location != "undefined" ? e = location.href + "" : e = ""),
        this.href(e),
        t !== undefined ? this.absoluteTo(t) : this) : new s(e,t)
    }
    function a(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }
    function f(e) {
        return e === undefined ? "Undefined" : String(Object.prototype.toString.call(e)).slice(8, -1)
    }
    function l(e) {
        return f(e) === "Array"
    }
    function c(e, t) {
        var n = {}, r, i;
        if (l(t))
            for (r = 0,
            i = t.length; r < i; r++)
                n[t[r]] = !0;
        else
            n[t] = !0;
        for (r = 0,
        i = e.length; r < i; r++)
            n[e[r]] !== undefined && (e.splice(r, 1),
            i--,
            r--);
        return e
    }
    function h(e, t) {
        var n, r;
        if (l(t)) {
            for (n = 0,
            r = t.length; n < r; n++)
                if (!h(e, t[n]))
                    return !1;
            return !0
        }
        var i = f(t);
        for (n = 0,
        r = e.length; n < r; n++)
            if (i === "RegExp") {
                if (typeof e[n] == "string" && e[n].match(t))
                    return !0
            } else if (e[n] === t)
                return !0;
        return !1
    }
    function p(e, t) {
        if (!l(e) || !l(t))
            return !1;
        if (e.length !== t.length)
            return !1;
        e.sort(),
        t.sort();
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    function d(e) {
        return escape(e)
    }
    function v(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, d).replace(/\*/g, "%2A")
    }
    var i = r && r.URI
      , o = s.prototype
      , u = Object.prototype.hasOwnProperty;
    s._parts = function() {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            duplicateQueryParameters: s.duplicateQueryParameters,
            escapeQuerySpace: s.escapeQuerySpace
        }
    }
    ,
    s.duplicateQueryParameters = !1,
    s.escapeQuerySpace = !0,
    s.protocol_expression = /^[a-z][a-z0-9-+-]*$/i,
    s.idn_expression = /[^a-z0-9\.-]/i,
    s.punycode_expression = /(xn--)/i,
    s.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    s.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    s.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,
    s.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
    },
    s.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/,
    s.domAttributes = {
        a: "href",
        blockquote: "cite",
        link: "href",
        base: "href",
        script: "src",
        form: "action",
        img: "src",
        area: "href",
        iframe: "src",
        embed: "src",
        source: "src",
        track: "src",
        input: "src"
    },
    s.getDomAttribute = function(e) {
        if (!e || !e.nodeName)
            return undefined;
        var t = e.nodeName.toLowerCase();
        return t === "input" && e.type !== "image" ? undefined : s.domAttributes[t]
    }
    ,
    s.encode = v,
    s.decode = decodeURIComponent,
    s.iso8859 = function() {
        s.encode = escape,
        s.decode = unescape
    }
    ,
    s.unicode = function() {
        s.encode = v,
        s.decode = decodeURIComponent
    }
    ,
    s.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                map: {
                    "%24": "$",
                    "%26": "&",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%3A": ":",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23"
                }
            }
        },
        reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                map: {
                    "%3A": ":",
                    "%2F": "/",
                    "%3F": "?",
                    "%23": "#",
                    "%5B": "[",
                    "%5D": "]",
                    "%40": "@",
                    "%21": "!",
                    "%24": "$",
                    "%26": "&",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "="
                }
            }
        }
    },
    s.encodeQuery = function(e, t) {
        var n = s.encode(e + "");
        return t ? n.replace(/%20/g, "+") : n
    }
    ,
    s.decodeQuery = function(e, t) {
        e += "";
        try {
            return s.decode(t ? e.replace(/\+/g, "%20") : e)
        } catch (n) {
            return e
        }
    }
    ,
    s.recodePath = function(e) {
        var t = (e + "").split("/");
        for (var n = 0, r = t.length; n < r; n++)
            t[n] = s.encodePathSegment(s.decode(t[n]));
        return t.join("/")
    }
    ,
    s.decodePath = function(e) {
        var t = (e + "").split("/");
        for (var n = 0, r = t.length; n < r; n++)
            t[n] = s.decodePathSegment(t[n]);
        return t.join("/")
    }
    ;
    var m = {
        encode: "encode",
        decode: "decode"
    }, g, y = function(e, t) {
        return function(n) {
            return s[t](n + "").replace(s.characters[e][t].expression, function(n) {
                return s.characters[e][t].map[n]
            })
        }
    };
    for (g in m)
        s[g + "PathSegment"] = y("pathname", m[g]);
    s.encodeReserved = y("reserved", "encode"),
    s.parse = function(e, t) {
        var n;
        return t || (t = {}),
        n = e.indexOf("#"),
        n > -1 && (t.fragment = e.substring(n + 1) || null,
        e = e.substring(0, n)),
        n = e.indexOf("?"),
        n > -1 && (t.query = e.substring(n + 1) || null,
        e = e.substring(0, n)),
        e.substring(0, 2) === "//" ? (t.protocol = null,
        e = e.substring(2),
        e = s.parseAuthority(e, t)) : (n = e.indexOf(":"),
        n > -1 && (t.protocol = e.substring(0, n) || null,
        t.protocol && !t.protocol.match(s.protocol_expression) ? t.protocol = undefined : t.protocol === "file" ? e = e.substring(n + 3) : e.substring(n + 1, n + 3) === "//" ? (e = e.substring(n + 3),
        e = s.parseAuthority(e, t)) : (e = e.substring(n + 1),
        t.urn = !0))),
        t.path = e,
        t
    }
    ,
    s.parseHost = function(e, t) {
        var n = e.indexOf("/"), r, i;
        return n === -1 && (n = e.length),
        e.charAt(0) === "[" ? (r = e.indexOf("]"),
        t.hostname = e.substring(1, r) || null,
        t.port = e.substring(r + 2, n) || null) : e.indexOf(":") !== e.lastIndexOf(":") ? (t.hostname = e.substring(0, n) || null,
        t.port = null) : (i = e.substring(0, n).split(":"),
        t.hostname = i[0] || null,
        t.port = i[1] || null),
        t.hostname && e.substring(n).charAt(0) !== "/" && (n++,
        e = "/" + e),
        e.substring(n) || "/"
    }
    ,
    s.parseAuthority = function(e, t) {
        return e = s.parseUserinfo(e, t),
        s.parseHost(e, t)
    }
    ,
    s.parseUserinfo = function(e, t) {
        var n = e.indexOf("/"), r = n > -1 ? e.lastIndexOf("@", n) : e.indexOf("@"), i;
        return r > -1 && (n === -1 || r < n) ? (i = e.substring(0, r).split(":"),
        t.username = i[0] ? s.decode(i[0]) : null,
        i.shift(),
        t.password = i[0] ? s.decode(i.join(":")) : null,
        e = e.substring(r + 1)) : (t.username = null,
        t.password = null),
        e
    }
    ,
    s.parseQuery = function(e, t) {
        if (!e)
            return {};
        e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "");
        if (!e)
            return {};
        var n = {}, r = e.split("&"), i = r.length, o, u, a;
        for (var f = 0; f < i; f++)
            o = r[f].split("="),
            u = s.decodeQuery(o.shift(), t),
            a = o.length ? s.decodeQuery(o.join("="), t) : null,
            n[u] ? (typeof n[u] == "string" && (n[u] = [n[u]]),
            n[u].push(a)) : n[u] = a;
        return n
    }
    ,
    s.build = function(e) {
        var t = "";
        return e.protocol && (t += e.protocol + ":"),
        !e.urn && (t || e.hostname) && (t += "//"),
        t += s.buildAuthority(e) || "",
        typeof e.path == "string" && (e.path.charAt(0) !== "/" && typeof e.hostname == "string" && (t += "/"),
        t += e.path),
        typeof e.query == "string" && e.query && (t += "?" + e.query),
        typeof e.fragment == "string" && e.fragment && (t += "#" + e.fragment),
        t
    }
    ,
    s.buildHost = function(e) {
        var t = "";
        return e.hostname ? (s.ip6_expression.test(e.hostname) ? e.port ? t += "[" + e.hostname + "]:" + e.port : t += e.hostname : (t += e.hostname,
        e.port && (t += ":" + e.port)),
        t) : ""
    }
    ,
    s.buildAuthority = function(e) {
        return s.buildUserinfo(e) + s.buildHost(e)
    }
    ,
    s.buildUserinfo = function(e) {
        var t = "";
        return e.username && (t += s.encode(e.username),
        e.password && (t += ":" + s.encode(e.password)),
        t += "@"),
        t
    }
    ,
    s.buildQuery = function(e, t, n) {
        var r = "", i, o, a, f;
        for (o in e)
            if (u.call(e, o) && o)
                if (l(e[o])) {
                    i = {};
                    for (a = 0,
                    f = e[o].length; a < f; a++)
                        e[o][a] !== undefined && i[e[o][a] + ""] === undefined && (r += "&" + s.buildQueryParameter(o, e[o][a], n),
                        t !== !0 && (i[e[o][a] + ""] = !0))
                } else
                    e[o] !== undefined && (r += "&" + s.buildQueryParameter(o, e[o], n));
        return r.substring(1)
    }
    ,
    s.buildQueryParameter = function(e, t, n) {
        return s.encodeQuery(e, n) + (t !== null ? "=" + s.encodeQuery(t, n) : "")
    }
    ,
    s.addQuery = function(e, t, n) {
        if (typeof t == "object")
            for (var r in t)
                u.call(t, r) && s.addQuery(e, r, t[r]);
        else {
            if (typeof t != "string")
                throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            if (e[t] === undefined) {
                e[t] = n;
                return
            }
            typeof e[t] == "string" && (e[t] = [e[t]]),
            l(n) || (n = [n]),
            e[t] = e[t].concat(n)
        }
    }
    ,
    s.removeQuery = function(e, t, n) {
        var r, i, o;
        if (l(t))
            for (r = 0,
            i = t.length; r < i; r++)
                e[t[r]] = undefined;
        else if (typeof t == "object")
            for (o in t)
                u.call(t, o) && s.removeQuery(e, o, t[o]);
        else {
            if (typeof t != "string")
                throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
            n !== undefined ? e[t] === n ? e[t] = undefined : l(e[t]) && (e[t] = c(e[t], n)) : e[t] = undefined
        }
    }
    ,
    s.hasQuery = function(e, t, n, r) {
        if (typeof t == "object") {
            for (var i in t)
                if (u.call(t, i) && !s.hasQuery(e, i, t[i]))
                    return !1;
            return !0
        }
        if (typeof t != "string")
            throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
        switch (f(n)) {
        case "Undefined":
            return t in e;
        case "Boolean":
            var o = Boolean(l(e[t]) ? e[t].length : e[t]);
            return n === o;
        case "Function":
            return !!n(e[t], t, e);
        case "Array":
            if (!l(e[t]))
                return !1;
            var a = r ? h : p;
            return a(e[t], n);
        case "RegExp":
            if (!l(e[t]))
                return Boolean(e[t] && e[t].match(n));
            if (!r)
                return !1;
            return h(e[t], n);
        case "Number":
            n = String(n);
        case "String":
            if (!l(e[t]))
                return e[t] === n;
            if (!r)
                return !1;
            return h(e[t], n);
        default:
            throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
        }
    }
    ,
    s.commonPath = function(e, t) {
        var n = Math.min(e.length, t.length), r;
        for (r = 0; r < n; r++)
            if (e.charAt(r) !== t.charAt(r)) {
                r--;
                break
            }
        if (r < 1)
            return e.charAt(0) === t.charAt(0) && e.charAt(0) === "/" ? "/" : "";
        if (e.charAt(r) !== "/" || t.charAt(r) !== "/")
            r = e.substring(0, r).lastIndexOf("/");
        return e.substring(0, r + 1)
    }
    ,
    s.withinString = function(e, t) {
        return e.replace(s.find_uri_expression, t)
    }
    ,
    s.ensureValidHostname = function(t) {
        if (t.match(s.invalid_hostname_characters)) {
            if (!e)
                throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
            if (e.toASCII(t).match(s.invalid_hostname_characters))
                throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-]")
        }
    }
    ,
    s.noConflict = function(e) {
        if (e) {
            var n = {
                URI: this.noConflict()
            };
            return URITemplate && typeof URITemplate.noConflict == "function" && (n.URITemplate = URITemplate.noConflict()),
            t && typeof t.noConflict == "function" && (n.IPv6 = t.noConflict()),
            SecondLevelDomains && typeof SecondLevelDomains.noConflict == "function" && (n.SecondLevelDomains = SecondLevelDomains.noConflict()),
            n
        }
        return r.URI === this && (r.URI = i),
        this
    }
    ,
    o.build = function(e) {
        if (e === !0)
            this._deferred_build = !0;
        else if (e === undefined || this._deferred_build)
            this._string = s.build(this._parts),
            this._deferred_build = !1;
        return this
    }
    ,
    o.clone = function() {
        return new s(this)
    }
    ,
    o.valueOf = o.toString = function() {
        return this.build(!1)._string
    }
    ,
    m = {
        protocol: "protocol",
        username: "username",
        password: "password",
        hostname: "hostname",
        port: "port"
    },
    y = function(e) {
        return function(t, n) {
            return t === undefined ? this._parts[e] || "" : (this._parts[e] = t || null,
            this.build(!n),
            this)
        }
    }
    ;
    for (g in m)
        o[g] = y(m[g]);
    m = {
        query: "?",
        fragment: "#"
    },
    y = function(e, t) {
        return function(n, r) {
            return n === undefined ? this._parts[e] || "" : (n !== null && (n += "",
            n.charAt(0) === t && (n = n.substring(1))),
            this._parts[e] = n,
            this.build(!r),
            this)
        }
    }
    ;
    for (g in m)
        o[g] = y(g, m[g]);
    m = {
        search: ["?", "query"],
        hash: ["#", "fragment"]
    },
    y = function(e, t) {
        return function(n, r) {
            var i = this[e](n, r);
            return typeof i == "string" && i.length ? t + i : i
        }
    }
    ;
    for (g in m)
        o[g] = y(m[g][1], m[g][0]);
    o.pathname = function(e, t) {
        if (e === undefined || e === !0) {
            var n = this._parts.path || (this._parts.hostname ? "/" : "");
            return e ? s.decodePath(n) : n
        }
        return this._parts.path = e ? s.recodePath(e) : "/",
        this.build(!t),
        this
    }
    ,
    o.path = o.pathname,
    o.href = function(e, t) {
        var n;
        if (e === undefined)
            return this.toString();
        this._string = "",
        this._parts = s._parts();
        var r = e instanceof s
          , i = typeof e == "object" && (e.hostname || e.path || e.pathname);
        if (e.nodeName) {
            var o = s.getDomAttribute(e);
            e = e[o] || "",
            i = !1
        }
        !r && i && e.pathname !== undefined && (e = e.toString());
        if (typeof e == "string")
            this._parts = s.parse(e, this._parts);
        else {
            if (!r && !i)
                throw new TypeError("invalid input");
            var a = r ? e._parts : e;
            for (n in a)
                u.call(this._parts, n) && (this._parts[n] = a[n])
        }
        return this.build(!t),
        this
    }
    ,
    o.is = function(e) {
        var t = !1
          , r = !1
          , i = !1
          , o = !1
          , u = !1
          , a = !1
          , f = !1
          , l = !this._parts.urn;
        this._parts.hostname && (l = !1,
        r = s.ip4_expression.test(this._parts.hostname),
        i = s.ip6_expression.test(this._parts.hostname),
        t = r || i,
        o = !t,
        u = o && n && n.has(this._parts.hostname),
        a = o && s.idn_expression.test(this._parts.hostname),
        f = o && s.punycode_expression.test(this._parts.hostname));
        switch (e.toLowerCase()) {
        case "relative":
            return l;
        case "absolute":
            return !l;
        case "domain":
        case "name":
            return o;
        case "sld":
            return u;
        case "ip":
            return t;
        case "ip4":
        case "ipv4":
        case "inet4":
            return r;
        case "ip6":
        case "ipv6":
        case "inet6":
            return i;
        case "idn":
            return a;
        case "url":
            return !this._parts.urn;
        case "urn":
            return !!this._parts.urn;
        case "punycode":
            return f
        }
        return null
    }
    ;
    var b = o.protocol
      , w = o.port
      , E = o.hostname;
    o.protocol = function(e, t) {
        if (e !== undefined && e) {
            e = e.replace(/:(\/\/)?$/, "");
            if (e.match(/[^a-zA-z0-9\.+-]/))
                throw new TypeError("Protocol '" + e + "' contains characters other than [A-Z0-9.+-]")
        }
        return b.call(this, e, t)
    }
    ,
    o.scheme = o.protocol,
    o.port = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e !== undefined) {
            e === 0 && (e = null);
            if (e) {
                e += "",
                e.charAt(0) === ":" && (e = e.substring(1));
                if (e.match(/[^0-9]/))
                    throw new TypeError("Port '" + e + "' contains characters other than [0-9]")
            }
        }
        return w.call(this, e, t)
    }
    ,
    o.hostname = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e !== undefined) {
            var n = {};
            s.parseHost(e, n),
            e = n.hostname
        }
        return E.call(this, e, t)
    }
    ,
    o.host = function(e, t) {
        return this._parts.urn ? e === undefined ? "" : this : e === undefined ? this._parts.hostname ? s.buildHost(this._parts) : "" : (s.parseHost(e, this._parts),
        this.build(!t),
        this)
    }
    ,
    o.authority = function(e, t) {
        return this._parts.urn ? e === undefined ? "" : this : e === undefined ? this._parts.hostname ? s.buildAuthority(this._parts) : "" : (s.parseAuthority(e, this._parts),
        this.build(!t),
        this)
    }
    ,
    o.userinfo = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined) {
            if (!this._parts.username)
                return "";
            var n = s.buildUserinfo(this._parts);
            return n.substring(0, n.length - 1)
        }
        return e[e.length - 1] !== "@" && (e += "@"),
        s.parseUserinfo(e, this._parts),
        this.build(!t),
        this
    }
    ,
    o.resource = function(e, t) {
        var n;
        return e === undefined ? this.path() + this.search() + this.hash() : (n = s.parse(e),
        this._parts.path = n.path,
        this._parts.query = n.query,
        this._parts.fragment = n.fragment,
        this.build(!t),
        this)
    }
    ,
    o.subdomain = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var n = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, n) || ""
        }
        var r = this._parts.hostname.length - this.domain().length
          , i = this._parts.hostname.substring(0, r)
          , o = new RegExp("^" + a(i));
        return e && e.charAt(e.length - 1) !== "." && (e += "."),
        e && s.ensureValidHostname(e),
        this._parts.hostname = this._parts.hostname.replace(o, e),
        this.build(!t),
        this
    }
    ,
    o.domain = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        typeof e == "boolean" && (t = e,
        e = undefined);
        if (e === undefined) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var n = this._parts.hostname.match(/\./g);
            if (n && n.length < 2)
                return this._parts.hostname;
            var r = this._parts.hostname.length - this.tld(t).length - 1;
            return r = this._parts.hostname.lastIndexOf(".", r - 1) + 1,
            this._parts.hostname.substring(r) || ""
        }
        if (!e)
            throw new TypeError("cannot set domain empty");
        s.ensureValidHostname(e);
        if (!this._parts.hostname || this.is("IP"))
            this._parts.hostname = e;
        else {
            var i = new RegExp(a(this.domain()) + "$");
            this._parts.hostname = this._parts.hostname.replace(i, e)
        }
        return this.build(!t),
        this
    }
    ,
    o.tld = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        typeof e == "boolean" && (t = e,
        e = undefined);
        if (e === undefined) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var r = this._parts.hostname.lastIndexOf(".")
              , i = this._parts.hostname.substring(r + 1);
            return t !== !0 && n && n.list[i.toLowerCase()] ? n.get(this._parts.hostname) || i : i
        }
        var s;
        if (!e)
            throw new TypeError("cannot set TLD empty");
        if (e.match(/[^a-zA-Z0-9-]/)) {
            if (!n || !n.is(e))
                throw new TypeError("TLD '" + e + "' contains characters other than [A-Z0-9]");
            s = new RegExp(a(this.tld()) + "$"),
            this._parts.hostname = this._parts.hostname.replace(s, e)
        } else {
            if (!this._parts.hostname || this.is("IP"))
                throw new ReferenceError("cannot set TLD on non-domain host");
            s = new RegExp(a(this.tld()) + "$"),
            this._parts.hostname = this._parts.hostname.replace(s, e)
        }
        return this.build(!t),
        this
    }
    ,
    o.directory = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined || e === !0) {
            if (!this._parts.path && !this._parts.hostname)
                return "";
            if (this._parts.path === "/")
                return "/";
            var n = this._parts.path.length - this.filename().length - 1
              , r = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
            return e ? s.decodePath(r) : r
        }
        var i = this._parts.path.length - this.filename().length
          , o = this._parts.path.substring(0, i)
          , u = new RegExp("^" + a(o));
        return this.is("relative") || (e || (e = "/"),
        e.charAt(0) !== "/" && (e = "/" + e)),
        e && e.charAt(e.length - 1) !== "/" && (e += "/"),
        e = s.recodePath(e),
        this._parts.path = this._parts.path.replace(u, e),
        this.build(!t),
        this
    }
    ,
    o.filename = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined || e === !0) {
            if (!this._parts.path || this._parts.path === "/")
                return "";
            var n = this._parts.path.lastIndexOf("/")
              , r = this._parts.path.substring(n + 1);
            return e ? s.decodePathSegment(r) : r
        }
        var i = !1;
        e.charAt(0) === "/" && (e = e.substring(1)),
        e.match(/\.?\//) && (i = !0);
        var o = new RegExp(a(this.filename()) + "$");
        return e = s.recodePath(e),
        this._parts.path = this._parts.path.replace(o, e),
        i ? this.normalizePath(t) : this.build(!t),
        this
    }
    ,
    o.suffix = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined || e === !0) {
            if (!this._parts.path || this._parts.path === "/")
                return "";
            var n = this.filename(), r = n.lastIndexOf("."), i, o;
            return r === -1 ? "" : (i = n.substring(r + 1),
            o = /^[a-z0-9%]+$/i.test(i) ? i : "",
            e ? s.decodePathSegment(o) : o)
        }
        e.charAt(0) === "." && (e = e.substring(1));
        var u = this.suffix(), f;
        if (!u) {
            if (!e)
                return this;
            this._parts.path += "." + s.recodePath(e)
        } else
            e ? f = new RegExp(a(u) + "$") : f = new RegExp(a("." + u) + "$");
        return f && (e = s.recodePath(e),
        this._parts.path = this._parts.path.replace(f, e)),
        this.build(!t),
        this
    }
    ,
    o.segment = function(e, t, n) {
        var r = this._parts.urn ? ":" : "/"
          , i = this.path()
          , s = i.substring(0, 1) === "/"
          , o = i.split(r);
        e !== undefined && typeof e != "number" && (n = t,
        t = e,
        e = undefined);
        if (e !== undefined && typeof e != "number")
            throw new Error("Bad segment '" + e + "', must be 0-based integer");
        s && o.shift(),
        e < 0 && (e = Math.max(o.length + e, 0));
        if (t === undefined)
            return e === undefined ? o : o[e];
        if (e === null || o[e] === undefined) {
            if (l(t)) {
                o = [];
                for (var u = 0, a = t.length; u < a; u++) {
                    if (!t[u].length && (!o.length || !o[o.length - 1].length))
                        continue;
                    o.length && !o[o.length - 1].length && o.pop(),
                    o.push(t[u])
                }
            } else if (t || typeof t == "string")
                o[o.length - 1] === "" ? o[o.length - 1] = t : o.push(t)
        } else
            t || typeof t == "string" && t.length ? o[e] = t : o.splice(e, 1);
        return s && o.unshift(""),
        this.path(o.join(r), n)
    }
    ,
    o.segmentCoded = function(e, t, n) {
        var r, i, o;
        typeof e != "number" && (n = t,
        t = e,
        e = undefined);
        if (t === undefined) {
            r = this.segment(e, t, n);
            if (!l(r))
                r = r !== undefined ? s.decode(r) : undefined;
            else
                for (i = 0,
                o = r.length; i < o; i++)
                    r[i] = s.decode(r[i]);
            return r
        }
        if (!l(t))
            t = typeof t == "string" ? s.encode(t) : t;
        else
            for (i = 0,
            o = t.length; i < o; i++)
                t[i] = s.decode(t[i]);
        return this.segment(e, t, n)
    }
    ;
    var S = o.query;
    return o.query = function(e, t) {
        if (e === !0)
            return s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if (typeof e == "function") {
            var n = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
              , r = e.call(this, n);
            return this._parts.query = s.buildQuery(r || n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
            this.build(!t),
            this
        }
        return e !== undefined && typeof e != "string" ? (this._parts.query = s.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
        this.build(!t),
        this) : S.call(this, e, t)
    }
    ,
    o.setQuery = function(e, t, n) {
        var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if (typeof e == "object")
            for (var i in e)
                u.call(e, i) && (r[i] = e[i]);
        else {
            if (typeof e != "string")
                throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            r[e] = t !== undefined ? t : null
        }
        return this._parts.query = s.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
        typeof e != "string" && (n = t),
        this.build(!n),
        this
    }
    ,
    o.addQuery = function(e, t, n) {
        var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return s.addQuery(r, e, t === undefined ? null : t),
        this._parts.query = s.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
        typeof e != "string" && (n = t),
        this.build(!n),
        this
    }
    ,
    o.removeQuery = function(e, t, n) {
        var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return s.removeQuery(r, e, t),
        this._parts.query = s.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace),
        typeof e != "string" && (n = t),
        this.build(!n),
        this
    }
    ,
    o.hasQuery = function(e, t, n) {
        var r = s.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return s.hasQuery(r, e, t, n)
    }
    ,
    o.setSearch = o.setQuery,
    o.addSearch = o.addQuery,
    o.removeSearch = o.removeQuery,
    o.hasSearch = o.hasQuery,
    o.normalize = function() {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build();
    }
    ,
    o.normalizeProtocol = function(e) {
        return typeof this._parts.protocol == "string" && (this._parts.protocol = this._parts.protocol.toLowerCase(),
        this.build(!e)),
        this
    }
    ,
    o.normalizeHostname = function(n) {
        return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)),
        this._parts.hostname = this._parts.hostname.toLowerCase(),
        this.build(!n)),
        this
    }
    ,
    o.normalizePort = function(e) {
        return typeof this._parts.protocol == "string" && this._parts.port === s.defaultPorts[this._parts.protocol] && (this._parts.port = null,
        this.build(!e)),
        this
    }
    ,
    o.normalizePath = function(e) {
        if (this._parts.urn)
            return this;
        if (!this._parts.path || this._parts.path === "/")
            return this;
        var t, n = this._parts.path, r, i;
        n.charAt(0) !== "/" && (t = !0,
        n = "/" + n),
        n = n.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/");
        for (; ; ) {
            r = n.indexOf("/../");
            if (r === -1)
                break;
            if (r === 0) {
                n = n.substring(3);
                break
            }
            i = n.substring(0, r).lastIndexOf("/"),
            i === -1 && (i = r),
            n = n.substring(0, i) + n.substring(r + 3)
        }
        return t && this.is("relative") && (n = n.substring(1)),
        n = s.recodePath(n),
        this._parts.path = n,
        this.build(!e),
        this
    }
    ,
    o.normalizePathname = o.normalizePath,
    o.normalizeQuery = function(e) {
        return typeof this._parts.query == "string" && (this._parts.query.length ? this.query(s.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null,
        this.build(!e)),
        this
    }
    ,
    o.normalizeFragment = function(e) {
        return this._parts.fragment || (this._parts.fragment = null,
        this.build(!e)),
        this
    }
    ,
    o.normalizeSearch = o.normalizeQuery,
    o.normalizeHash = o.normalizeFragment,
    o.iso8859 = function() {
        var e = s.encode
          , t = s.decode;
        return s.encode = escape,
        s.decode = decodeURIComponent,
        this.normalize(),
        s.encode = e,
        s.decode = t,
        this
    }
    ,
    o.unicode = function() {
        var e = s.encode
          , t = s.decode;
        return s.encode = v,
        s.decode = unescape,
        this.normalize(),
        s.encode = e,
        s.decode = t,
        this
    }
    ,
    o.readable = function() {
        var t = this.clone();
        t.username("").password("").normalize();
        var n = "";
        t._parts.protocol && (n += t._parts.protocol + "://"),
        t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname),
        t._parts.port && (n += ":" + t._parts.port)) : n += t.host()),
        t._parts.hostname && t._parts.path && t._parts.path.charAt(0) !== "/" && (n += "/"),
        n += t.path(!0);
        if (t._parts.query) {
            var r = "";
            for (var i = 0, o = t._parts.query.split("&"), u = o.length; i < u; i++) {
                var a = (o[i] || "").split("=");
                r += "&" + s.decodeQuery(a[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"),
                a[1] !== undefined && (r += "=" + s.decodeQuery(a[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
            }
            n += "?" + r.substring(1)
        }
        return n += s.decodeQuery(t.hash(), !0),
        n
    }
    ,
    o.absoluteTo = function(e) {
        var t = this.clone(), n = ["protocol", "username", "password", "hostname", "port"], r, i, o;
        if (this._parts.urn)
            throw new Error("URNs do not have any generally defined hierarchical components");
        e instanceof s || (e = new s(e)),
        t._parts.protocol || (t._parts.protocol = e._parts.protocol);
        if (this._parts.hostname)
            return t;
        for (i = 0; o = n[i]; i++)
            t._parts[o] = e._parts[o];
        n = ["query", "path"];
        for (i = 0; o = n[i]; i++)
            !t._parts[o] && e._parts[o] && (t._parts[o] = e._parts[o]);
        return t.path().charAt(0) !== "/" && (r = e.directory(),
        t._parts.path = (r ? r + "/" : "") + t._parts.path,
        t.normalizePath()),
        t.build(),
        t
    }
    ,
    o.relativeTo = function(e) {
        var t = this.clone().normalize(), n, r, i, o, u;
        if (t._parts.urn)
            throw new Error("URNs do not have any generally defined hierarchical components");
        e = new s(e).normalize(),
        n = t._parts,
        r = e._parts,
        o = t.path(),
        u = e.path();
        if (o.charAt(0) !== "/")
            throw new Error("URI is already relative");
        if (u.charAt(0) !== "/")
            throw new Error("Cannot calculate a URI relative to another relative URI");
        n.protocol === r.protocol && (n.protocol = null);
        if (n.username !== r.username || n.password !== r.password)
            return t.build();
        if (n.protocol !== null || n.username !== null || n.password !== null)
            return t.build();
        if (n.hostname !== r.hostname || n.port !== r.port)
            return t.build();
        n.hostname = null,
        n.port = null;
        if (o === u)
            return n.path = "",
            t.build();
        i = s.commonPath(t.path(), e.path());
        if (!i)
            return t.build();
        var a = r.path.substring(i.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
        return n.path = a + n.path.substring(i.length),
        t.build()
    }
    ,
    o.equals = function(e) {
        var t = this.clone(), n = new s(e), r = {}, i = {}, o = {}, a, f, c;
        t.normalize(),
        n.normalize();
        if (t.toString() === n.toString())
            return !0;
        a = t.query(),
        f = n.query(),
        t.query(""),
        n.query("");
        if (t.toString() !== n.toString())
            return !1;
        if (a.length !== f.length)
            return !1;
        r = s.parseQuery(a, this._parts.escapeQuerySpace),
        i = s.parseQuery(f, this._parts.escapeQuerySpace);
        for (c in r)
            if (u.call(r, c)) {
                if (!l(r[c])) {
                    if (r[c] !== i[c])
                        return !1
                } else if (!p(r[c], i[c]))
                    return !1;
                o[c] = !0
            }
        for (c in i)
            if (u.call(i, c) && !o[c])
                return !1;
        return !0
    }
    ,
    o.duplicateQueryParameters = function(e) {
        return this._parts.duplicateQueryParameters = !!e,
        this
    }
    ,
    o.escapeQuerySpace = function(e) {
        return this._parts.escapeQuerySpace = !!e,
        this
    }
    ,
    s
});
(function(factory) {
    var root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global;
    if (typeof define === "function" && define.amd) {
        define(["underscore", "jquery", "exports"], function(_, $, exports) {
            root.Backbone = factory(root, exports, _, $)
        })
    } else if (typeof exports !== "undefined") {
        var _ = require("underscore"), $;
        try {
            $ = require("jquery")
        } catch (e) {}
        factory(root, exports, _, $)
    } else {
        root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$)
    }
}
)(function(root, Backbone, _, $) {
    var previousBackbone = root.Backbone;
    var slice = Array.prototype.slice;
    Backbone.VERSION = "1.4.0";
    Backbone.$ = $;
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return this
    }
    ;
    Backbone.emulateHTTP = false;
    Backbone.emulateJSON = false;
    var Events = Backbone.Events = {};
    var eventSplitter = /\s+/;
    var _listening;
    var eventsApi = function(iteratee, events, name, callback, opts) {
        var i = 0, names;
        if (name && typeof name === "object") {
            if (callback !== void 0 && "context"in opts && opts.context === void 0)
                opts.context = callback;
            for (names = _.keys(name); i < names.length; i++) {
                events = eventsApi(iteratee, events, names[i], name[names[i]], opts)
            }
        } else if (name && eventSplitter.test(name)) {
            for (names = name.split(eventSplitter); i < names.length; i++) {
                events = iteratee(events, names[i], callback, opts)
            }
        } else {
            events = iteratee(events, name, callback, opts)
        }
        return events
    };
    Events.on = function(name, callback, context) {
        this._events = eventsApi(onApi, this._events || {}, name, callback, {
            context: context,
            ctx: this,
            listening: _listening
        });
        if (_listening) {
            var listeners = this._listeners || (this._listeners = {});
            listeners[_listening.id] = _listening;
            _listening.interop = false
        }
        return this
    }
    ;
    Events.listenTo = function(obj, name, callback) {
        if (!obj)
            return this;
        var id = obj._listenId || (obj._listenId = _.uniqueId("l"));
        var listeningTo = this._listeningTo || (this._listeningTo = {});
        var listening = _listening = listeningTo[id];
        if (!listening) {
            this._listenId || (this._listenId = _.uniqueId("l"));
            listening = _listening = listeningTo[id] = new Listening(this,obj)
        }
        var error = tryCatchOn(obj, name, callback, this);
        _listening = void 0;
        if (error)
            throw error;
        if (listening.interop)
            listening.on(name, callback);
        return this
    }
    ;
    var onApi = function(events, name, callback, options) {
        if (callback) {
            var handlers = events[name] || (events[name] = []);
            var context = options.context
              , ctx = options.ctx
              , listening = options.listening;
            if (listening)
                listening.count++;
            handlers.push({
                callback: callback,
                context: context,
                ctx: context || ctx,
                listening: listening
            })
        }
        return events
    };
    var tryCatchOn = function(obj, name, callback, context) {
        try {
            obj.on(name, callback, context)
        } catch (e) {
            return e
        }
    };
    Events.off = function(name, callback, context) {
        if (!this._events)
            return this;
        this._events = eventsApi(offApi, this._events, name, callback, {
            context: context,
            listeners: this._listeners
        });
        return this
    }
    ;
    Events.stopListening = function(obj, name, callback) {
        var listeningTo = this._listeningTo;
        if (!listeningTo)
            return this;
        var ids = obj ? [obj._listenId] : _.keys(listeningTo);
        for (var i = 0; i < ids.length; i++) {
            var listening = listeningTo[ids[i]];
            if (!listening)
                break;
            listening.obj.off(name, callback, this);
            if (listening.interop)
                listening.off(name, callback)
        }
        if (_.isEmpty(listeningTo))
            this._listeningTo = void 0;
        return this
    }
    ;
    var offApi = function(events, name, callback, options) {
        if (!events)
            return;
        var context = options.context
          , listeners = options.listeners;
        var i = 0, names;
        if (!name && !context && !callback) {
            for (names = _.keys(listeners); i < names.length; i++) {
                listeners[names[i]].cleanup()
            }
            return
        }
        names = name ? [name] : _.keys(events);
        for (; i < names.length; i++) {
            name = names[i];
            var handlers = events[name];
            if (!handlers)
                break;
            var remaining = [];
            for (var j = 0; j < handlers.length; j++) {
                var handler = handlers[j];
                if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
                    remaining.push(handler)
                } else {
                    var listening = handler.listening;
                    if (listening)
                        listening.off(name, callback)
                }
            }
            if (remaining.length) {
                events[name] = remaining
            } else {
                delete events[name]
            }
        }
        return events
    };
    Events.once = function(name, callback, context) {
        var events = eventsApi(onceMap, {}, name, callback, this.off.bind(this));
        if (typeof name === "string" && context == null)
            callback = void 0;
        return this.on(events, callback, context)
    }
    ;
    Events.listenToOnce = function(obj, name, callback) {
        var events = eventsApi(onceMap, {}, name, callback, this.stopListening.bind(this, obj));
        return this.listenTo(obj, events)
    }
    ;
    var onceMap = function(map, name, callback, offer) {
        if (callback) {
            var once = map[name] = _.once(function() {
                offer(name, once);
                callback.apply(this, arguments)
            });
            once._callback = callback
        }
        return map
    };
    Events.trigger = function(name) {
        if (!this._events)
            return this;
        var length = Math.max(0, arguments.length - 1);
        var args = Array(length);
        for (var i = 0; i < length; i++)
            args[i] = arguments[i + 1];
        eventsApi(triggerApi, this._events, name, void 0, args);
        return this
    }
    ;
    var triggerApi = function(objEvents, name, callback, args) {
        if (objEvents) {
            var events = objEvents[name];
            var allEvents = objEvents.all;
            if (events && allEvents)
                allEvents = allEvents.slice();
            if (events)
                triggerEvents(events, args);
            if (allEvents)
                triggerEvents(allEvents, [name].concat(args))
        }
        return objEvents
    };
    var triggerEvents = function(events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
        case 0:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx);
            return;
        case 1:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1);
            return;
        case 2:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1, a2);
            return;
        case 3:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
            return;
        default:
            while (++i < l)
                (ev = events[i]).callback.apply(ev.ctx, args);
            return
        }
    };
    var Listening = function(listener, obj) {
        this.id = listener._listenId;
        this.listener = listener;
        this.obj = obj;
        this.interop = true;
        this.count = 0;
        this._events = void 0
    };
    Listening.prototype.on = Events.on;
    Listening.prototype.off = function(name, callback) {
        var cleanup;
        if (this.interop) {
            this._events = eventsApi(offApi, this._events, name, callback, {
                context: void 0,
                listeners: void 0
            });
            cleanup = !this._events
        } else {
            this.count--;
            cleanup = this.count === 0
        }
        if (cleanup)
            this.cleanup()
    }
    ;
    Listening.prototype.cleanup = function() {
        delete this.listener._listeningTo[this.obj._listenId];
        if (!this.interop)
            delete this.obj._listeners[this.id]
    }
    ;
    Events.bind = Events.on;
    Events.unbind = Events.off;
    _.extend(Backbone, Events);
    var Model = Backbone.Model = function(attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.preinitialize.apply(this, arguments);
        this.cid = _.uniqueId(this.cidPrefix);
        this.attributes = {};
        if (options.collection)
            this.collection = options.collection;
        if (options.parse)
            attrs = this.parse(attrs, options) || {};
        var defaults = _.result(this, "defaults");
        attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments)
    }
    ;
    _.extend(Model.prototype, Events, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        preinitialize: function() {},
        initialize: function() {},
        toJSON: function(options) {
            return _.clone(this.attributes)
        },
        sync: function() {
            return Backbone.sync.apply(this, arguments)
        },
        get: function(attr) {
            return this.attributes[attr]
        },
        escape: function(attr) {
            return _.escape(this.get(attr))
        },
        has: function(attr) {
            return this.get(attr) != null
        },
        matches: function(attrs) {
            return !!_.iteratee(attrs, this)(this.attributes)
        },
        set: function(key, val, options) {
            if (key == null)
                return this;
            var attrs;
            if (typeof key === "object") {
                attrs = key;
                options = val
            } else {
                (attrs = {})[key] = val
            }
            options || (options = {});
            if (!this._validate(attrs, options))
                return false;
            var unset = options.unset;
            var silent = options.silent;
            var changes = [];
            var changing = this._changing;
            this._changing = true;
            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {}
            }
            var current = this.attributes;
            var changed = this.changed;
            var prev = this._previousAttributes;
            for (var attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val))
                    changes.push(attr);
                if (!_.isEqual(prev[attr], val)) {
                    changed[attr] = val
                } else {
                    delete changed[attr]
                }
                unset ? delete current[attr] : current[attr] = val
            }
            if (this.idAttribute in attrs)
                this.id = this.get(this.idAttribute);
            if (!silent) {
                if (changes.length)
                    this._pending = options;
                for (var i = 0; i < changes.length; i++) {
                    this.trigger("change:" + changes[i], this, current[changes[i]], options)
                }
            }
            if (changing)
                return this;
            if (!silent) {
                while (this._pending) {
                    options = this._pending;
                    this._pending = false;
                    this.trigger("change", this, options)
                }
            }
            this._pending = false;
            this._changing = false;
            return this
        },
        unset: function(attr, options) {
            return this.set(attr, void 0, _.extend({}, options, {
                unset: true
            }))
        },
        clear: function(options) {
            var attrs = {};
            for (var key in this.attributes)
                attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {
                unset: true
            }))
        },
        hasChanged: function(attr) {
            if (attr == null)
                return !_.isEmpty(this.changed);
            return _.has(this.changed, attr)
        },
        changedAttributes: function(diff) {
            if (!diff)
                return this.hasChanged() ? _.clone(this.changed) : false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            var changed = {};
            var hasChanged;
            for (var attr in diff) {
                var val = diff[attr];
                if (_.isEqual(old[attr], val))
                    continue;
                changed[attr] = val;
                hasChanged = true
            }
            return hasChanged ? changed : false
        },
        previous: function(attr) {
            if (attr == null || !this._previousAttributes)
                return null;
            return this._previousAttributes[attr]
        },
        previousAttributes: function() {
            return _.clone(this._previousAttributes)
        },
        fetch: function(options) {
            options = _.extend({
                parse: true
            }, options);
            var model = this;
            var success = options.success;
            options.success = function(resp) {
                var serverAttrs = options.parse ? model.parse(resp, options) : resp;
                if (!model.set(serverAttrs, options))
                    return false;
                if (success)
                    success.call(options.context, model, resp, options);
                model.trigger("sync", model, resp, options)
            }
            ;
            wrapError(this, options);
            return this.sync("read", this, options)
        },
        save: function(key, val, options) {
            var attrs;
            if (key == null || typeof key === "object") {
                attrs = key;
                options = val
            } else {
                (attrs = {})[key] = val
            }
            options = _.extend({
                validate: true,
                parse: true
            }, options);
            var wait = options.wait;
            if (attrs && !wait) {
                if (!this.set(attrs, options))
                    return false
            } else if (!this._validate(attrs, options)) {
                return false
            }
            var model = this;
            var success = options.success;
            var attributes = this.attributes;
            options.success = function(resp) {
                model.attributes = attributes;
                var serverAttrs = options.parse ? model.parse(resp, options) : resp;
                if (wait)
                    serverAttrs = _.extend({}, attrs, serverAttrs);
                if (serverAttrs && !model.set(serverAttrs, options))
                    return false;
                if (success)
                    success.call(options.context, model, resp, options);
                model.trigger("sync", model, resp, options)
            }
            ;
            wrapError(this, options);
            if (attrs && wait)
                this.attributes = _.extend({}, attributes, attrs);
            var method = this.isNew() ? "create" : options.patch ? "patch" : "update";
            if (method === "patch" && !options.attrs)
                options.attrs = attrs;
            var xhr = this.sync(method, this, options);
            this.attributes = attributes;
            return xhr
        },
        destroy: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            var wait = options.wait;
            var destroy = function() {
                model.stopListening();
                model.trigger("destroy", model, model.collection, options)
            };
            options.success = function(resp) {
                if (wait)
                    destroy();
                if (success)
                    success.call(options.context, model, resp, options);
                if (!model.isNew())
                    model.trigger("sync", model, resp, options)
            }
            ;
            var xhr = false;
            if (this.isNew()) {
                _.defer(options.success)
            } else {
                wrapError(this, options);
                xhr = this.sync("delete", this, options)
            }
            if (!wait)
                destroy();
            return xhr
        },
        url: function() {
            var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
            if (this.isNew())
                return base;
            var id = this.get(this.idAttribute);
            return base.replace(/[^\/]$/, "$&/") + encodeURIComponent(id)
        },
        parse: function(resp, options) {
            return resp
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(options) {
            return this._validate({}, _.extend({}, options, {
                validate: true
            }))
        },
        _validate: function(attrs, options) {
            if (!options.validate || !this.validate)
                return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error)
                return true;
            this.trigger("invalid", this, error, _.extend(options, {
                validationError: error
            }));
            return false
        }
    });
    var Collection = Backbone.Collection = function(models, options) {
        options || (options = {});
        this.preinitialize.apply(this, arguments);
        if (options.model)
            this.model = options.model;
        if (options.comparator !== void 0)
            this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models)
            this.reset(models, _.extend({
                silent: true
            }, options))
    }
    ;
    var setOptions = {
        add: true,
        remove: true,
        merge: true
    };
    var addOptions = {
        add: true,
        remove: false
    };
    var splice = function(array, insert, at) {
        at = Math.min(Math.max(at, 0), array.length);
        var tail = Array(array.length - at);
        var length = insert.length;
        var i;
        for (i = 0; i < tail.length; i++)
            tail[i] = array[i + at];
        for (i = 0; i < length; i++)
            array[i + at] = insert[i];
        for (i = 0; i < tail.length; i++)
            array[i + length + at] = tail[i]
    };
    _.extend(Collection.prototype, Events, {
        model: Model,
        preinitialize: function() {},
        initialize: function() {},
        toJSON: function(options) {
            return this.map(function(model) {
                return model.toJSON(options)
            })
        },
        sync: function() {
            return Backbone.sync.apply(this, arguments)
        },
        add: function(models, options) {
            return this.set(models, _.extend({
                merge: false
            }, options, addOptions))
        },
        remove: function(models, options) {
            options = _.extend({}, options);
            var singular = !_.isArray(models);
            models = singular ? [models] : models.slice();
            var removed = this._removeModels(models, options);
            if (!options.silent && removed.length) {
                options.changes = {
                    added: [],
                    merged: [],
                    removed: removed
                };
                this.trigger("update", this, options)
            }
            return singular ? removed[0] : removed
        },
        set: function(models, options) {
            if (models == null)
                return;
            options = _.extend({}, setOptions, options);
            if (options.parse && !this._isModel(models)) {
                models = this.parse(models, options) || []
            }
            var singular = !_.isArray(models);
            models = singular ? [models] : models.slice();
            var at = options.at;
            if (at != null)
                at = +at;
            if (at > this.length)
                at = this.length;
            if (at < 0)
                at += this.length + 1;
            var set = [];
            var toAdd = [];
            var toMerge = [];
            var toRemove = [];
            var modelMap = {};
            var add = options.add;
            var merge = options.merge;
            var remove = options.remove;
            var sort = false;
            var sortable = this.comparator && at == null && options.sort !== false;
            var sortAttr = _.isString(this.comparator) ? this.comparator : null;
            var model, i;
            for (i = 0; i < models.length; i++) {
                model = models[i];
                var existing = this.get(model);
                if (existing) {
                    if (merge && model !== existing) {
                        var attrs = this._isModel(model) ? model.attributes : model;
                        if (options.parse)
                            attrs = existing.parse(attrs, options);
                        existing.set(attrs, options);
                        toMerge.push(existing);
                        if (sortable && !sort)
                            sort = existing.hasChanged(sortAttr)
                    }
                    if (!modelMap[existing.cid]) {
                        modelMap[existing.cid] = true;
                        set.push(existing)
                    }
                    models[i] = existing
                } else if (add) {
                    model = models[i] = this._prepareModel(model, options);
                    if (model) {
                        toAdd.push(model);
                        this._addReference(model, options);
                        modelMap[model.cid] = true;
                        set.push(model)
                    }
                }
            }
            if (remove) {
                for (i = 0; i < this.length; i++) {
                    model = this.models[i];
                    if (!modelMap[model.cid])
                        toRemove.push(model)
                }
                if (toRemove.length)
                    this._removeModels(toRemove, options)
            }
            var orderChanged = false;
            var replace = !sortable && add && remove;
            if (set.length && replace) {
                orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
                    return m !== set[index]
                });
                this.models.length = 0;
                splice(this.models, set, 0);
                this.length = this.models.length
            } else if (toAdd.length) {
                if (sortable)
                    sort = true;
                splice(this.models, toAdd, at == null ? this.length : at);
                this.length = this.models.length
            }
            if (sort)
                this.sort({
                    silent: true
                });
            if (!options.silent) {
                for (i = 0; i < toAdd.length; i++) {
                    if (at != null)
                        options.index = at + i;
                    model = toAdd[i];
                    model.trigger("add", model, this, options)
                }
                if (sort || orderChanged)
                    this.trigger("sort", this, options);
                if (toAdd.length || toRemove.length || toMerge.length) {
                    options.changes = {
                        added: toAdd,
                        removed: toRemove,
                        merged: toMerge
                    };
                    this.trigger("update", this, options)
                }
            }
            return singular ? models[0] : models
        },
        reset: function(models, options) {
            options = options ? _.clone(options) : {};
            for (var i = 0; i < this.models.length; i++) {
                this._removeReference(this.models[i], options)
            }
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({
                silent: true
            }, options));
            if (!options.silent)
                this.trigger("reset", this, options);
            return models
        },
        push: function(model, options) {
            return this.add(model, _.extend({
                at: this.length
            }, options))
        },
        pop: function(options) {
            var model = this.at(this.length - 1);
            return this.remove(model, options)
        },
        unshift: function(model, options) {
            return this.add(model, _.extend({
                at: 0
            }, options))
        },
        shift: function(options) {
            var model = this.at(0);
            return this.remove(model, options)
        },
        slice: function() {
            return slice.apply(this.models, arguments)
        },
        get: function(obj) {
            if (obj == null)
                return void 0;
            return this._byId[obj] || this._byId[this.modelId(this._isModel(obj) ? obj.attributes : obj)] || obj.cid && this._byId[obj.cid]
        },
        has: function(obj) {
            return this.get(obj) != null
        },
        at: function(index) {
            if (index < 0)
                index += this.length;
            return this.models[index]
        },
        where: function(attrs, first) {
            return this[first ? "find" : "filter"](attrs)
        },
        findWhere: function(attrs) {
            return this.where(attrs, true)
        },
        sort: function(options) {
            var comparator = this.comparator;
            if (!comparator)
                throw new Error("Cannot sort a set without a comparator");
            options || (options = {});
            var length = comparator.length;
            if (_.isFunction(comparator))
                comparator = comparator.bind(this);
            if (length === 1 || _.isString(comparator)) {
                this.models = this.sortBy(comparator)
            } else {
                this.models.sort(comparator)
            }
            if (!options.silent)
                this.trigger("sort", this, options);
            return this
        },
        pluck: function(attr) {
            return this.map(attr + "")
        },
        fetch: function(options) {
            options = _.extend({
                parse: true
            }, options);
            var success = options.success;
            var collection = this;
            options.success = function(resp) {
                var method = options.reset ? "reset" : "set";
                collection[method](resp, options);
                if (success)
                    success.call(options.context, collection, resp, options);
                collection.trigger("sync", collection, resp, options)
            }
            ;
            wrapError(this, options);
            return this.sync("read", this, options)
        },
        create: function(model, options) {
            options = options ? _.clone(options) : {};
            var wait = options.wait;
            model = this._prepareModel(model, options);
            if (!model)
                return false;
            if (!wait)
                this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function(m, resp, callbackOpts) {
                if (wait)
                    collection.add(m, callbackOpts);
                if (success)
                    success.call(callbackOpts.context, m, resp, callbackOpts)
            }
            ;
            model.save(null, options);
            return model
        },
        parse: function(resp, options) {
            return resp
        },
        clone: function() {
            return new this.constructor(this.models,{
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(attrs) {
            return attrs[this.model.prototype.idAttribute || "id"]
        },
        values: function() {
            return new CollectionIterator(this,ITERATOR_VALUES)
        },
        keys: function() {
            return new CollectionIterator(this,ITERATOR_KEYS)
        },
        entries: function() {
            return new CollectionIterator(this,ITERATOR_KEYSVALUES)
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(attrs, options) {
            if (this._isModel(attrs)) {
                if (!attrs.collection)
                    attrs.collection = this;
                return attrs
            }
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs,options);
            if (!model.validationError)
                return model;
            this.trigger("invalid", this, model.validationError, options);
            return false
        },
        _removeModels: function(models, options) {
            var removed = [];
            for (var i = 0; i < models.length; i++) {
                var model = this.get(models[i]);
                if (!model)
                    continue;
                var index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                delete this._byId[model.cid];
                var id = this.modelId(model.attributes);
                if (id != null)
                    delete this._byId[id];
                if (!options.silent) {
                    options.index = index;
                    model.trigger("remove", model, this, options)
                }
                removed.push(model);
                this._removeReference(model, options)
            }
            return removed
        },
        _isModel: function(model) {
            return model instanceof Model
        },
        _addReference: function(model, options) {
            this._byId[model.cid] = model;
            var id = this.modelId(model.attributes);
            if (id != null)
                this._byId[id] = model;
            model.on("all", this._onModelEvent, this)
        },
        _removeReference: function(model, options) {
            delete this._byId[model.cid];
            var id = this.modelId(model.attributes);
            if (id != null)
                delete this._byId[id];
            if (this === model.collection)
                delete model.collection;
            model.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(event, model, collection, options) {
            if (model) {
                if ((event === "add" || event === "remove") && collection !== this)
                    return;
                if (event === "destroy")
                    this.remove(model, options);
                if (event === "change") {
                    var prevId = this.modelId(model.previousAttributes());
                    var id = this.modelId(model.attributes);
                    if (prevId !== id) {
                        if (prevId != null)
                            delete this._byId[prevId];
                        if (id != null)
                            this._byId[id] = model
                    }
                }
            }
            this.trigger.apply(this, arguments)
        }
    });
    var $$iterator = typeof Symbol === "function" && Symbol.iterator;
    if ($$iterator) {
        Collection.prototype[$$iterator] = Collection.prototype.values
    }
    var CollectionIterator = function(collection, kind) {
        this._collection = collection;
        this._kind = kind;
        this._index = 0
    };
    var ITERATOR_VALUES = 1;
    var ITERATOR_KEYS = 2;
    var ITERATOR_KEYSVALUES = 3;
    if ($$iterator) {
        CollectionIterator.prototype[$$iterator] = function() {
            return this
        }
    }
    CollectionIterator.prototype.next = function() {
        if (this._collection) {
            if (this._index < this._collection.length) {
                var model = this._collection.at(this._index);
                this._index++;
                var value;
                if (this._kind === ITERATOR_VALUES) {
                    value = model
                } else {
                    var id = this._collection.modelId(model.attributes);
                    if (this._kind === ITERATOR_KEYS) {
                        value = id
                    } else {
                        value = [id, model]
                    }
                }
                return {
                    value: value,
                    done: false
                }
            }
            this._collection = void 0
        }
        return {
            value: void 0,
            done: true
        }
    }
    ;
    var View = Backbone.View = function(options) {
        this.cid = _.uniqueId("view");
        this.preinitialize.apply(this, arguments);
        _.extend(this, _.pick(options, viewOptions));
        this._ensureElement();
        this.initialize.apply(this, arguments)
    }
    ;
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
    var viewOptions = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    _.extend(View.prototype, Events, {
        tagName: "div",
        $: function(selector) {
            return this.$el.find(selector)
        },
        preinitialize: function() {},
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this._removeElement();
            this.stopListening();
            return this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(element) {
            this.undelegateEvents();
            this._setElement(element);
            this.delegateEvents();
            return this
        },
        _setElement: function(el) {
            this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
            this.el = this.$el[0]
        },
        delegateEvents: function(events) {
            events || (events = _.result(this, "events"));
            if (!events)
                return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method))
                    method = this[method];
                if (!method)
                    continue;
                var match = key.match(delegateEventSplitter);
                this.delegate(match[1], match[2], method.bind(this))
            }
            return this
        },
        delegate: function(eventName, selector, listener) {
            this.$el.on(eventName + ".delegateEvents" + this.cid, selector, listener);
            return this
        },
        undelegateEvents: function() {
            if (this.$el)
                this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        undelegate: function(eventName, selector, listener) {
            this.$el.off(eventName + ".delegateEvents" + this.cid, selector, listener);
            return this
        },
        _createElement: function(tagName) {
            return document.createElement(tagName)
        },
        _ensureElement: function() {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, "attributes"));
                if (this.id)
                    attrs.id = _.result(this, "id");
                if (this.className)
                    attrs["class"] = _.result(this, "className");
                this.setElement(this._createElement(_.result(this, "tagName")));
                this._setAttributes(attrs)
            } else {
                this.setElement(_.result(this, "el"))
            }
        },
        _setAttributes: function(attributes) {
            this.$el.attr(attributes)
        }
    });
    var addMethod = function(base, length, method, attribute) {
        switch (length) {
        case 1:
            return function() {
                return base[method](this[attribute])
            }
            ;
        case 2:
            return function(value) {
                return base[method](this[attribute], value)
            }
            ;
        case 3:
            return function(iteratee, context) {
                return base[method](this[attribute], cb(iteratee, this), context)
            }
            ;
        case 4:
            return function(iteratee, defaultVal, context) {
                return base[method](this[attribute], cb(iteratee, this), defaultVal, context)
            }
            ;
        default:
            return function() {
                var args = slice.call(arguments);
                args.unshift(this[attribute]);
                return base[method].apply(base, args)
            }
        }
    };
    var addUnderscoreMethods = function(Class, base, methods, attribute) {
        _.each(methods, function(length, method) {
            if (base[method])
                Class.prototype[method] = addMethod(base, length, method, attribute)
        })
    };
    var cb = function(iteratee, instance) {
        if (_.isFunction(iteratee))
            return iteratee;
        if (_.isObject(iteratee) && !instance._isModel(iteratee))
            return modelMatcher(iteratee);
        if (_.isString(iteratee))
            return function(model) {
                return model.get(iteratee)
            }
            ;
        return iteratee
    };
    var modelMatcher = function(attrs) {
        var matcher = _.matches(attrs);
        return function(model) {
            return matcher(model.attributes)
        }
    };
    var collectionMethods = {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    };
    var modelMethods = {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    };
    _.each([[Collection, collectionMethods, "models"], [Model, modelMethods, "attributes"]], function(config) {
        var Base = config[0]
          , methods = config[1]
          , attribute = config[2];
        Base.mixin = function(obj) {
            var mappings = _.reduce(_.functions(obj), function(memo, name) {
                memo[name] = 0;
                return memo
            }, {});
            addUnderscoreMethods(Base, obj, mappings, attribute)
        }
        ;
        addUnderscoreMethods(Base, _, methods, attribute)
    });
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });
        var params = {
            type: type,
            dataType: "json"
        };
        if (!options.url) {
            params.url = _.result(model, "url") || urlError()
        }
        if (options.data == null && model && (method === "create" || method === "update" || method === "patch")) {
            params.contentType = "application/json";
            params.data = JSON.stringify(options.attrs || model.toJSON(options))
        }
        if (options.emulateJSON) {
            params.contentType = "application/x-www-form-urlencoded";
            params.data = params.data ? {
                model: params.data
            } : {}
        }
        if (options.emulateHTTP && (type === "PUT" || type === "DELETE" || type === "PATCH")) {
            params.type = "POST";
            if (options.emulateJSON)
                params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader("X-HTTP-Method-Override", type);
                if (beforeSend)
                    return beforeSend.apply(this, arguments)
            }
        }
        if (params.type !== "GET" && !options.emulateJSON) {
            params.processData = false
        }
        var error = options.error;
        options.error = function(xhr, textStatus, errorThrown) {
            options.textStatus = textStatus;
            options.errorThrown = errorThrown;
            if (error)
                error.call(options.context, xhr, textStatus, errorThrown)
        }
        ;
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger("request", model, xhr, options);
        return xhr
    }
    ;
    var methodMap = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    Backbone.ajax = function() {
        return Backbone.$.ajax.apply(Backbone.$, arguments)
    }
    ;
    var Router = Backbone.Router = function(options) {
        options || (options = {});
        this.preinitialize.apply(this, arguments);
        if (options.routes)
            this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    }
    ;
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {
        preinitialize: function() {},
        initialize: function() {},
        route: function(route, name, callback) {
            if (!_.isRegExp(route))
                route = this._routeToRegExp(route);
            if (_.isFunction(name)) {
                callback = name;
                name = ""
            }
            if (!callback)
                callback = this[name];
            var router = this;
            Backbone.history.route(route, function(fragment) {
                var args = router._extractParameters(route, fragment);
                if (router.execute(callback, args, name) !== false) {
                    router.trigger.apply(router, ["route:" + name].concat(args));
                    router.trigger("route", name, args);
                    Backbone.history.trigger("route", router, name, args)
                }
            });
            return this
        },
        execute: function(callback, args, name) {
            if (callback)
                callback.apply(this, args)
        },
        navigate: function(fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this
        },
        _bindRoutes: function() {
            if (!this.routes)
                return;
            this.routes = _.result(this, "routes");
            var route, routes = _.keys(this.routes);
            while ((route = routes.pop()) != null) {
                this.route(route, this.routes[route])
            }
        },
        _routeToRegExp: function(route) {
            route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function(match, optional) {
                return optional ? match : "([^/?]+)"
            }).replace(splatParam, "([^?]*?)");
            return new RegExp("^" + route + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(route, fragment) {
            var params = route.exec(fragment).slice(1);
            return _.map(params, function(param, i) {
                if (i === params.length - 1)
                    return param || null;
                return param ? decodeURIComponent(param) : null
            })
        }
    });
    var History = Backbone.History = function() {
        this.handlers = [];
        this.checkUrl = this.checkUrl.bind(this);
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history
        }
    }
    ;
    var routeStripper = /^[#\/]|\s+$/g;
    var rootStripper = /^\/+|\/+$/g;
    var pathStripper = /#.*$/;
    History.started = false;
    _.extend(History.prototype, Events, {
        interval: 50,
        atRoot: function() {
            var path = this.location.pathname.replace(/[^\/]$/, "$&/");
            return path === this.root && !this.getSearch()
        },
        matchRoot: function() {
            var path = this.decodeFragment(this.location.pathname);
            var rootPath = path.slice(0, this.root.length - 1) + "/";
            return rootPath === this.root
        },
        decodeFragment: function(fragment) {
            return decodeURI(fragment.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var match = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return match ? match[0] : ""
        },
        getHash: function(window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : ""
        },
        getPath: function() {
            var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return path.charAt(0) === "/" ? path.slice(1) : path
        },
        getFragment: function(fragment) {
            if (fragment == null) {
                if (this._usePushState || !this._wantsHashChange) {
                    fragment = this.getPath()
                } else {
                    fragment = this.getHash()
                }
            }
            return fragment.replace(routeStripper, "")
        },
        start: function(options) {
            if (History.started)
                throw new Error("Backbone.history has already been started");
            History.started = true;
            this.options = _.extend({
                root: "/"
            }, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._hasHashChange = "onhashchange"in window && (document.documentMode === void 0 || document.documentMode > 7);
            this._useHashChange = this._wantsHashChange && this._hasHashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.history && this.history.pushState);
            this._usePushState = this._wantsPushState && this._hasPushState;
            this.fragment = this.getFragment();
            this.root = ("/" + this.root + "/").replace(rootStripper, "/");
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var rootPath = this.root.slice(0, -1) || "/";
                    this.location.replace(rootPath + "#" + this.getPath());
                    return true
                } else if (this._hasPushState && this.atRoot()) {
                    this.navigate(this.getHash(), {
                        replace: true
                    })
                }
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe");
                this.iframe.src = "javascript:0";
                this.iframe.style.display = "none";
                this.iframe.tabIndex = -1;
                var body = document.body;
                var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
                iWindow.document.open();
                iWindow.document.close();
                iWindow.location.hash = "#" + this.fragment
            }
            var addEventListener = window.addEventListener || function(eventName, listener) {
                return attachEvent("on" + eventName, listener)
            }
            ;
            if (this._usePushState) {
                addEventListener("popstate", this.checkUrl, false)
            } else if (this._useHashChange && !this.iframe) {
                addEventListener("hashchange", this.checkUrl, false)
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
            }
            if (!this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            var removeEventListener = window.removeEventListener || function(eventName, listener) {
                return detachEvent("on" + eventName, listener)
            }
            ;
            if (this._usePushState) {
                removeEventListener("popstate", this.checkUrl, false)
            } else if (this._useHashChange && !this.iframe) {
                removeEventListener("hashchange", this.checkUrl, false)
            }
            if (this.iframe) {
                document.body.removeChild(this.iframe);
                this.iframe = null
            }
            if (this._checkUrlInterval)
                clearInterval(this._checkUrlInterval);
            History.started = false
        },
        route: function(route, callback) {
            this.handlers.unshift({
                route: route,
                callback: callback
            })
        },
        checkUrl: function(e) {
            var current = this.getFragment();
            if (current === this.fragment && this.iframe) {
                current = this.getHash(this.iframe.contentWindow)
            }
            if (current === this.fragment)
                return false;
            if (this.iframe)
                this.navigate(current);
            this.loadUrl()
        },
        loadUrl: function(fragment) {
            if (!this.matchRoot())
                return false;
            fragment = this.fragment = this.getFragment(fragment);
            return _.some(this.handlers, function(handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true
                }
            })
        },
        navigate: function(fragment, options) {
            if (!History.started)
                return false;
            if (!options || options === true)
                options = {
                    trigger: !!options
                };
            fragment = this.getFragment(fragment || "");
            var rootPath = this.root;
            if (fragment === "" || fragment.charAt(0) === "?") {
                rootPath = rootPath.slice(0, -1) || "/"
            }
            var url = rootPath + fragment;
            fragment = fragment.replace(pathStripper, "");
            var decodedFragment = this.decodeFragment(fragment);
            if (this.fragment === decodedFragment)
                return;
            this.fragment = decodedFragment;
            if (this._usePushState) {
                this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url)
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, fragment, options.replace);
                if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
                    var iWindow = this.iframe.contentWindow;
                    if (!options.replace) {
                        iWindow.document.open();
                        iWindow.document.close()
                    }
                    this._updateHash(iWindow.location, fragment, options.replace)
                }
            } else {
                return this.location.assign(url)
            }
            if (options.trigger)
                return this.loadUrl(fragment)
        },
        _updateHash: function(location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, "");
                location.replace(href + "#" + fragment)
            } else {
                location.hash = "#" + fragment
            }
        }
    });
    Backbone.history = new History;
    var extend = function(protoProps, staticProps) {
        var parent = this;
        var child;
        if (protoProps && _.has(protoProps, "constructor")) {
            child = protoProps.constructor
        } else {
            child = function() {
                return parent.apply(this, arguments)
            }
        }
        _.extend(child, parent, staticProps);
        child.prototype = _.create(parent.prototype, protoProps);
        child.prototype.constructor = child;
        child.__super__ = parent.prototype;
        return child
    };
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
    var urlError = function() {
        throw new Error('A "url" property or function must be specified')
    };
    var wrapError = function(model, options) {
        var error = options.error;
        options.error = function(resp) {
            if (error)
                error.call(options.context, model, resp, options);
            model.trigger("error", model, resp, options)
        }
    };
    return Backbone
});
var JSON;
if (!JSON) {
    JSON = {}
}
(function() {
    "use strict";
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ;
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}
)();
(function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode,
        i = r.name,
        !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0],
        !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0
      , r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version)
        return;
    e.extend(e.ui, {
        version: "1.10.0",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, n) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    e(r).focus(),
                    n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t)
                return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]), i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0)
                            return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex")
              , r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0,
                r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
          , s = r.toLowerCase()
          , o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }
        ,
        e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }),
    e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }
    ),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)),
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    e.support.selectstart = "onselectstart"in document.createElement("div"),
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r)
                    s.plugins[i] = s.plugins[i] || [],
                    s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)
                    return;
                for (r = 0; r < i.length; r++)
                    e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden")
                return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop"
              , i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1,
            i = t[r] > 0,
            t[r] = 0,
            i)
        }
    })
}
)(jQuery);
(function(e, t) {
    var n = 0
      , r = Array.prototype.slice
      , i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r; (r = t[n]) != null; n++)
            try {
                e(r).triggerHandler("remove")
            } catch (s) {}
        i(t)
    }
    ,
    e.widget = function(t, n, r) {
        var i, s, o, u, a = {}, f = t.split(".")[0];
        t = t.split(".")[1],
        i = f + "-" + t,
        r || (r = n,
        n = e.Widget),
        e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }
        ,
        e[f] = e[f] || {},
        s = e[f][t],
        o = e[f][t] = function(e, t) {
            if (!this._createWidget)
                return new o(e,t);
            arguments.length && this._createWidget(e, t)
        }
        ,
        e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }),
        u = new n,
        u.options = e.widget.extend({}, u.options),
        e.each(r, function(t, r) {
            if (!e.isFunction(r)) {
                a[t] = r;
                return
            }
            a[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments)
                }
                  , i = function(e) {
                    return n.prototype[t].apply(this, e)
                };
                return function() {
                    var t = this._super, n = this._superApply, s;
                    return this._super = e,
                    this._superApply = i,
                    s = r.apply(this, arguments),
                    this._super = t,
                    this._superApply = n,
                    s
                }
            }()
        }),
        o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix : t
        }, a, {
            constructor: o,
            namespace: f,
            widgetName: t,
            widgetFullName: i
        }),
        s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }),
        delete s._childConstructors) : n._childConstructors.push(o),
        e.widget.bridge(t, o)
    }
    ,
    e.widget.extend = function(n) {
        var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
        for (; s < o; s++)
            for (u in i[s])
                a = i[s][u],
                i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }
    ,
    e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function(o) {
            var u = typeof o == "string"
              , a = r.call(arguments, 1)
              , f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o,
            u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i)
                    return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_")
                    return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t)
                    return f = r && r.jquery ? f.pushStack(r.get()) : r,
                    !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o,this))
            }),
            f
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0],
            this.element = e(r),
            this.uuid = n++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            r !== this && (e.data(r, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }),
            this.document = e(r.style ? r.ownerDocument : r.document || r),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n, s, o, u;
            if (arguments.length === 0)
                return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {},
                s = n.split("."),
                n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++)
                        o[s[u]] = o[s[u]] || {},
                        o = o[s[u]];
                    n = s.pop();
                    if (r === t)
                        return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t)
                        return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n,
            n = t,
            t = !1),
            r ? (n = i = e(n),
            this.bindings = this.bindings.add(n)) : (r = n,
            n = this.element,
            i = this.widget()),
            e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled")))
                        return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/)
                  , f = a[1] + s.eventNamespace
                  , l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {},
            n = e.Event(n),
            n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            n.target = this.element[0],
            s = n.originalEvent;
            if (s)
                for (i in s)
                    i in n || (n[i] = s[i]);
            return this.element.trigger(n, r),
            !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {},
            typeof i == "number" && (i = {
                duration: i
            }),
            o = !e.isEmptyObject(i),
            i.complete = s,
            i.delay && r.delay(i.delay),
            o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](),
                s && s.call(r[0]),
                n()
            })
        }
    })
}
)(jQuery);
(function(e, t) {
    var n = !1;
    e(document).mouseup(function() {
        n = !1
    }),
    e.widget("ui.mouse", {
        version: "1.10.0",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
                    return e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                    n.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (n)
                return;
            this._mouseStarted && this._mouseUp(t),
            this._mouseDownEvent = t;
            var r = this
              , i = t.which === 1
              , s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t))
                return !0;
            this.mouseDelayMet = !this.options.delay,
            this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted)
                    return t.preventDefault(),
                    !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
            this._mouseMoveDelegate = function(e) {
                return r._mouseMove(e)
            }
            ,
            this._mouseUpDelegate = function(e) {
                return r._mouseUp(e)
            }
            ,
            e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
            t.preventDefault(),
            n = !0,
            !0
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}
)(jQuery);
(function(e, t) {
    function h(e, t, n) {
        return [parseInt(e[0], 10) * (l.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (l.test(e[1]) ? n / 100 : 1)]
    }
    function p(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }
    function d(t) {
        var n = t[0];
        return n.nodeType === 9 ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : e.isWindow(n) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : n.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: n.pageY,
                left: n.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    e.ui = e.ui || {};
    var n, r = Math.max, i = Math.abs, s = Math.round, o = /left|center|right/, u = /top|center|bottom/, a = /[\+\-]\d+%?/, f = /^\w+/, l = /%$/, c = e.fn.position;
    e.position = {
        scrollbarWidth: function() {
            if (n !== t)
                return n;
            var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
            return e("body").append(s),
            r = o.offsetWidth,
            s.css("overflow", "scroll"),
            i = o.offsetWidth,
            r === i && (i = s[0].clientWidth),
            s.remove(),
            n = r - i
        },
        getScrollInfo: function(t) {
            var n = t.isWindow ? "" : t.element.css("overflow-x")
              , r = t.isWindow ? "" : t.element.css("overflow-y")
              , i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth
              , s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: i ? e.position.scrollbarWidth() : 0,
                height: s ? e.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var n = e(t || window)
              , r = e.isWindow(n[0]);
            return {
                element: n,
                isWindow: r,
                offset: n.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n.scrollLeft(),
                scrollTop: n.scrollTop(),
                width: r ? n.width() : n.outerWidth(),
                height: r ? n.height() : n.outerHeight()
            }
        }
    },
    e.fn.position = function(t) {
        if (!t || !t.of)
            return c.apply(this, arguments);
        t = e.extend({}, t);
        var n, l, v, m, g, y, b = e(t.of), w = e.position.getWithinInfo(t.within), E = e.position.getScrollInfo(w), S = (t.collision || "flip").split(" "), x = {};
        return y = d(b),
        b[0].preventDefault && (t.at = "left top"),
        l = y.width,
        v = y.height,
        m = y.offset,
        g = e.extend({}, m),
        e.each(["my", "at"], function() {
            var e = (t[this] || "").split(" "), n, r;
            e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]),
            e[0] = o.test(e[0]) ? e[0] : "center",
            e[1] = u.test(e[1]) ? e[1] : "center",
            n = a.exec(e[0]),
            r = a.exec(e[1]),
            x[this] = [n ? n[0] : 0, r ? r[0] : 0],
            t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
        }),
        S.length === 1 && (S[1] = S[0]),
        t.at[0] === "right" ? g.left += l : t.at[0] === "center" && (g.left += l / 2),
        t.at[1] === "bottom" ? g.top += v : t.at[1] === "center" && (g.top += v / 2),
        n = h(x.at, l, v),
        g.left += n[0],
        g.top += n[1],
        this.each(function() {
            var o, u, a = e(this), f = a.outerWidth(), c = a.outerHeight(), d = p(this, "marginLeft"), y = p(this, "marginTop"), T = f + d + p(this, "marginRight") + E.width, N = c + y + p(this, "marginBottom") + E.height, C = e.extend({}, g), k = h(x.my, a.outerWidth(), a.outerHeight());
            t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2),
            t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2),
            C.left += k[0],
            C.top += k[1],
            e.support.offsetFractions || (C.left = s(C.left),
            C.top = s(C.top)),
            o = {
                marginLeft: d,
                marginTop: y
            },
            e.each(["left", "top"], function(r, i) {
                e.ui.position[S[r]] && e.ui.position[S[r]][i](C, {
                    targetWidth: l,
                    targetHeight: v,
                    elemWidth: f,
                    elemHeight: c,
                    collisionPosition: o,
                    collisionWidth: T,
                    collisionHeight: N,
                    offset: [n[0] + k[0], n[1] + k[1]],
                    my: t.my,
                    at: t.at,
                    within: w,
                    elem: a
                })
            }),
            t.using && (u = function(e) {
                var n = m.left - C.left
                  , s = n + l - f
                  , o = m.top - C.top
                  , u = o + v - c
                  , h = {
                    target: {
                        element: b,
                        left: m.left,
                        top: m.top,
                        width: l,
                        height: v
                    },
                    element: {
                        element: a,
                        left: C.left,
                        top: C.top,
                        width: f,
                        height: c
                    },
                    horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                    vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                };
                l < f && i(n + s) < l && (h.horizontal = "center"),
                v < c && i(o + u) < v && (h.vertical = "middle"),
                r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical",
                t.using.call(this, e, h)
            }
            ),
            a.offset(e.extend(C, {
                using: u
            }))
        })
    }
    ,
    e.ui.position = {
        fit: {
            left: function(e, t) {
                var n = t.within, i = n.isWindow ? n.scrollLeft : n.offset.left, s = n.width, o = e.left - t.collisionPosition.marginLeft, u = i - o, a = o + t.collisionWidth - s - i, f;
                t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i,
                e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
            },
            top: function(e, t) {
                var n = t.within, i = n.isWindow ? n.scrollTop : n.offset.top, s = t.within.height, o = e.top - t.collisionPosition.marginTop, u = i - o, a = o + t.collisionHeight - s - i, f;
                t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i,
                e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
            }
        },
        flip: {
            left: function(e, t) {
                var n = t.within, r = n.offset.left + n.scrollLeft, s = n.width, o = n.isWindow ? n.scrollLeft : n.offset.left, u = e.left - t.collisionPosition.marginLeft, a = u - o, f = u + t.collisionWidth - s - o, l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0, c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0, h = -2 * t.offset[0], p, d;
                if (a < 0) {
                    p = e.left + l + c + h + t.collisionWidth - s - r;
                    if (p < 0 || p < i(a))
                        e.left += l + c + h
                } else if (f > 0) {
                    d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                    if (d > 0 || i(d) < f)
                        e.left += l + c + h
                }
            },
            top: function(e, t) {
                var n = t.within, r = n.offset.top + n.scrollTop, s = n.height, o = n.isWindow ? n.scrollTop : n.offset.top, u = e.top - t.collisionPosition.marginTop, a = u - o, f = u + t.collisionHeight - s - o, l = t.my[1] === "top", c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0, h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0, p = -2 * t.offset[1], d, v;
                a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r,
                e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o,
                e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
            }
        },
        flipfit: {
            left: function() {
                e.ui.position.flip.left.apply(this, arguments),
                e.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                e.ui.position.flip.top.apply(this, arguments),
                e.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var t, n, r, i, s, o = document.getElementsByTagName("body")[0], u = document.createElement("div");
        t = document.createElement(o ? "div" : "body"),
        r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        o && e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (s in r)
            t.style[s] = r[s];
        t.appendChild(u),
        n = o || document.documentElement,
        n.insertBefore(t, n.firstChild),
        u.style.cssText = "position: absolute; left: 10.7432222px;",
        i = e(u).offset().left,
        e.support.offsetFractions = i > 10 && i < 11,
        t.innerHTML = "",
        n.removeChild(t)
    }()
}
)(jQuery);
(function(e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.0",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t),
            this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }),
            !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
            n.containment && this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _mouseDrag: function(t, n) {
            this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis !== "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis !== "x")
                this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var n, r = this, i = !1, s = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)),
            this.dropped && (s = this.dropped,
            this.dropped = !1),
            n = this.element[0];
            while (n && (n = n.parentNode))
                n === document && (i = !0);
            return !i && this.options.helper === "original" ? !1 : (this.options.revert === "invalid" && !s || this.options.revert === "valid" && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(),
            !1)
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").addBack().each(function() {
                this === t.target && (n = !0)
            }),
            n
        },
        _createHelper: function(t) {
            var n = this.options
              , r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo),
            r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"),
            r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie)
                t = {
                    top: 0,
                    left: 0
                };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, r, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            if (i.containment === "document" || i.containment === "window")
                this.containment = [i.containment === "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment === "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment === "document" ? 0 : e(window).scrollLeft()) + e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? 0 : e(window).scrollTop()) + (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(i.containment) && i.containment.constructor !== Array) {
                n = e(i.containment),
                r = n[0];
                if (!r)
                    return;
                t = e(r).css("overflow") !== "hidden",
                this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = n
            } else
                i.containment.constructor === Array && (this.containment = i.containment)
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t === "absolute" ? 1 : -1
              , i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , s = /(html|body)/i.test(i[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var n, r, i, s, o = this.options, u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(u[0].tagName), f = t.pageX, l = t.pageY;
            return this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(),
            n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment,
            t.pageX - this.offset.click.left < n[0] && (f = n[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < n[1] && (l = n[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > n[2] && (f = n[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > n[3] && (l = n[3] + this.offset.click.top)),
            o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY,
            l = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i,
            s = o.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX,
            f = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)),
            {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, r) {
            return r = r || this._uiHash(),
            e.ui.plugin.call(this, t, [n, r]),
            t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
            e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var r = e(this).data("ui-draggable")
              , i = r.options
              , s = e.extend({}, n, {
                item: r.element
            });
            r.sortables = [],
            e(i.connectToSortable).each(function() {
                var n = e.data(this, "ui-sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }),
                n.refreshPositions(),
                n._trigger("activate", t, s))
            })
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable")
              , i = e.extend({}, n, {
                item: r.element
            });
            e.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                r.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = !0),
                this.instance._mouseStop(t),
                this.instance.options.helper = this.instance.options._helper,
                r.options.helper === "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function(t, n) {
            var r = e(this).data("ui-draggable")
              , i = this;
            e.each(r.sortables, function() {
                var s = !1
                  , o = this;
                this.instance.positionAbs = r.positionAbs,
                this.instance.helperProportions = r.helperProportions,
                this.instance.offset.click = r.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (s = !0,
                e.each(r.sortables, function() {
                    return this.instance.positionAbs = r.positionAbs,
                    this.instance.helperProportions = r.helperProportions,
                    this.instance.offset.click = r.offset.click,
                    this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(o.instance.element[0], this.instance.element[0]) && (s = !1),
                    s
                })),
                s ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return n.helper[0]
                }
                ,
                t.target = this.instance.currentItem[0],
                this.instance._mouseCapture(t, !0),
                this.instance._mouseStart(t, !0, !0),
                this.instance.offset.click.top = r.offset.click.top,
                this.instance.offset.click.left = r.offset.click.left,
                this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top,
                r._trigger("toSortable", t),
                r.dropped = this.instance.element,
                r.currentItem = r.element,
                this.instance.fromOutside = r),
                this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                r._trigger("fromSortable", t),
                r.dropped = !1)
            })
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body")
              , n = e(this).data("ui-draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")),
            t.css("cursor", n.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var r = e(n.helper)
              , i = e(this).data("ui-draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")),
            r.css("opacity", i.opacity)
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var n = e(this).data("ui-draggable")
              , r = n.options
              , i = !1;
            if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
                if (!r.axis || r.axis !== "x")
                    n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
                if (!r.axis || r.axis !== "y")
                    n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)
            } else {
                if (!r.axis || r.axis !== "x")
                    t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
                if (!r.axis || r.axis !== "y")
                    t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))
            }
            i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable")
              , n = t.options;
            t.snapElements = [],
            e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var n = e(this)
                  , r = n.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function(t, n) {
            var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"), d = p.options, v = d.snapTolerance, m = n.offset.left, g = m + p.helperProportions.width, y = n.offset.top, b = y + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--) {
                u = p.snapElements[c].left,
                a = u + p.snapElements[c].width,
                f = p.snapElements[c].top,
                l = f + p.snapElements[c].height;
                if (!(u - v < m && m < a + v && f - v < y && y < l + v || u - v < m && m < a + v && f - v < b && b < l + v || u - v < g && g < a + v && f - v < y && y < l + v || u - v < g && g < a + v && f - v < b && b < l + v)) {
                    p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                        snapItem: p.snapElements[c].item
                    })),
                    p.snapElements[c].snapping = !1;
                    continue
                }
                d.snapMode !== "inner" && (r = Math.abs(f - b) <= v,
                i = Math.abs(l - y) <= v,
                s = Math.abs(u - g) <= v,
                o = Math.abs(a - m) <= v,
                r && (n.position.top = p._convertPositionTo("relative", {
                    top: f - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top),
                i && (n.position.top = p._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - p.margins.top),
                s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: u - p.helperProportions.width
                }).left - p.margins.left),
                o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - p.margins.left)),
                h = r || i || s || o,
                d.snapMode !== "outer" && (r = Math.abs(f - y) <= v,
                i = Math.abs(l - b) <= v,
                s = Math.abs(u - m) <= v,
                o = Math.abs(a - g) <= v,
                r && (n.position.top = p._convertPositionTo("relative", {
                    top: f,
                    left: 0
                }).top - p.margins.top),
                i && (n.position.top = p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top),
                s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: u
                }).left - p.margins.left),
                o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a - p.helperProportions.width
                }).left - p.margins.left)),
                !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                    snapItem: p.snapElements[c].item
                })),
                p.snapElements[c].snapping = r || i || s || o || h
            }
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, n = e(this).data("ui-draggable").options, r = e.makeArray(e(n.stack)).sort(function(t, n) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
            });
            if (!r.length)
                return;
            t = parseInt(r[0].style.zIndex, 10) || 0,
            e(r).each(function(e) {
                this.style.zIndex = t + e
            }),
            this[0].style.zIndex = t + r.length
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var r = e(n.helper)
              , i = e(this).data("ui-draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")),
            r.css("zIndex", i.zIndex)
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
}
)(jQuery);
(function(e, t) {
    function n(e, t, n) {
        return e > t && e < t + n
    }
    e.widget("ui.droppable", {
        version: "1.10.0",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t = this.options
              , n = t.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }
            ,
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [],
            e.ui.ddmanager.droppables[t.scope].push(this),
            t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            var t = 0
              , n = e.ui.ddmanager.droppables[this.options.scope];
            for (; t < n.length; t++)
                n[t] === this && n.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, n) {
            t === "accept" && (this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }
            ),
            e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function(t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] === this.element[0])
                return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
            this._trigger("over", t, this.ui(n)))
        },
        _out: function(t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] === this.element[0])
                return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("out", t, this.ui(n)))
        },
        _drop: function(t, n) {
            var r = n || e.ui.ddmanager.current
              , i = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance))
                    return i = !0,
                    !1
            }),
            i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", t, this.ui(r)),
            this.element) : !1)
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }),
    e.ui.intersect = function(e, t, r) {
        if (!t.offset)
            return !1;
        var i, s, o = (e.positionAbs || e.position.absolute).left, u = o + e.helperProportions.width, a = (e.positionAbs || e.position.absolute).top, f = a + e.helperProportions.height, l = t.offset.left, c = l + t.proportions.width, h = t.offset.top, p = h + t.proportions.height;
        switch (r) {
        case "fit":
            return l <= o && u <= c && h <= a && f <= p;
        case "intersect":
            return l < o + e.helperProportions.width / 2 && u - e.helperProportions.width / 2 < c && h < a + e.helperProportions.height / 2 && f - e.helperProportions.height / 2 < p;
        case "pointer":
            return i = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
            s = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
            n(s, h, t.proportions.height) && n(i, l, t.proportions.width);
        case "touch":
            return (a >= h && a <= p || f >= h && f <= p || a < h && f > p) && (o >= l && o <= c || u >= l && u <= c || o < l && u > c);
        default:
            return !1
        }
    }
    ,
    e.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(t, n) {
            var r, i, s = e.ui.ddmanager.droppables[t.options.scope] || [], o = n ? n.type : null, u = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (r = 0; r < s.length; r++) {
                if (s[r].options.disabled || t && !s[r].accept.call(s[r].element[0], t.currentItem || t.element))
                    continue;
                for (i = 0; i < u.length; i++)
                    if (u[i] === s[r].element[0]) {
                        s[r].proportions.height = 0;
                        continue e
                    }
                s[r].visible = s[r].element.css("display") !== "none";
                if (!s[r].visible)
                    continue;
                o === "mousedown" && s[r]._activate.call(s[r], n),
                s[r].offset = s[r].element.offset(),
                s[r].proportions = {
                    width: s[r].element[0].offsetWidth,
                    height: s[r].element[0].offsetHeight
                }
            }
        },
        drop: function(t, n) {
            var r = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options)
                    return;
                !this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, n))
            }),
            r
        },
        dragStart: function(t, n) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function(t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n),
            e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible)
                    return;
                var r, i, s, o = e.ui.intersect(t, this, this.options.tolerance), u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                if (!u)
                    return;
                this.options.greedy && (i = this.options.scope,
                s = this.element.parents(":data(ui-droppable)").filter(function() {
                    return e.data(this, "ui-droppable").options.scope === i
                }),
                s.length && (r = e.data(s[0], "ui-droppable"),
                r.greedyChild = u === "isover")),
                r && u === "isover" && (r.isover = !1,
                r.isout = !0,
                r._out.call(r, n)),
                this[u] = !0,
                this[u === "isout" ? "isover" : "isout"] = !1,
                this[u === "isover" ? "_over" : "_out"].call(this, n),
                r && u === "isout" && (r.isout = !1,
                r.isover = !0,
                r._over.call(r, n))
            })
        },
        dragStop: function(t, n) {
            t.element.parentsUntil("body").unbind("scroll.droppable"),
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
}
)(jQuery);
(function(e, t) {
    function n(e) {
        return parseInt(e, 10) || 0
    }
    function r(e) {
        return !isNaN(parseInt(e, 10))
    }
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.10.0",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var t, n, r, i, s, o = this, u = this.options;
            this.element.addClass("ui-resizable"),
            e.extend(this, {
                _aspectRatio: !!u.aspectRatio,
                aspectRatio: u.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")),
            this.elementIsWrapper = !0,
            this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }),
            this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css({
                margin: this.originalElement.css("margin")
            }),
            this._proportionallyResize()),
            this.handles = u.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor === String) {
                this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                t = this.handles.split(","),
                this.handles = {};
                for (n = 0; n < t.length; n++)
                    r = e.trim(t[n]),
                    s = "ui-resizable-" + r,
                    i = e("<div class='ui-resizable-handle " + s + "'></div>"),
                    i.css({
                        zIndex: u.zIndex
                    }),
                    "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                    this.handles[r] = ".ui-resizable-" + r,
                    this.element.append(i)
            }
            this._renderAxis = function(t) {
                var n, r, i, s;
                t = t || this.element;
                for (n in this.handles) {
                    this.handles[n].constructor === String && (this.handles[n] = e(this.handles[n], this.element).show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element),
                    s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(),
                    i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""),
                    t.css(i, s),
                    this._proportionallyResize());
                    if (!e(this.handles[n]).length)
                        continue
                }
            }
            ,
            this._renderAxis(this.element),
            this._handles = e(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                o.axis = i && i[1] ? i[1] : "se")
            }),
            u.autoHide && (this._handles.hide(),
            e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                if (u.disabled)
                    return;
                e(this).removeClass("ui-resizable-autohide"),
                o._handles.show()
            }).mouseleave(function() {
                if (u.disabled)
                    return;
                o.resizing || (e(this).addClass("ui-resizable-autohide"),
                o._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, n = function(t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (n(this.element),
            t = this.element,
            this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t),
            t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            n(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var n, r, i = !1;
            for (n in this.handles) {
                r = e(this.handles[n])[0];
                if (r === t.target || e.contains(r, t.target))
                    i = !0
            }
            return !this.options.disabled && i
        },
        _mouseStart: function(t) {
            var r, i, s, o = this.options, u = this.element.position(), a = this.element;
            return this.resizing = !0,
            /absolute/.test(a.css("position")) ? a.css({
                position: "absolute",
                top: a.css("top"),
                left: a.css("left")
            }) : a.is(".ui-draggable") && a.css({
                position: "absolute",
                top: u.top,
                left: u.left
            }),
            this._renderProxy(),
            r = n(this.helper.css("left")),
            i = n(this.helper.css("top")),
            o.containment && (r += e(o.containment).scrollLeft() || 0,
            i += e(o.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: r,
                top: i
            },
            this.size = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.originalPosition = {
                left: r,
                top: i
            },
            this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = typeof o.aspectRatio == "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            s = e(".ui-resizable-" + this.axis).css("cursor"),
            e("body").css("cursor", s === "auto" ? this.axis + "-resize" : s),
            a.addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var n, r = this.helper, i = {}, s = this.originalMousePosition, o = this.axis, u = this.position.top, a = this.position.left, f = this.size.width, l = this.size.height, c = t.pageX - s.left || 0, h = t.pageY - s.top || 0, p = this._change[o];
            if (!p)
                return !1;
            n = p.apply(this, [t, c, h]),
            this._updateVirtualBoundaries(t.shiftKey);
            if (this._aspectRatio || t.shiftKey)
                n = this._updateRatio(n, t);
            return n = this._respectSize(n, t),
            this._updateCache(n),
            this._propagate("resize", t),
            this.position.top !== u && (i.top = this.position.top + "px"),
            this.position.left !== a && (i.left = this.position.left + "px"),
            this.size.width !== f && (i.width = this.size.width + "px"),
            this.size.height !== l && (i.height = this.size.height + "px"),
            r.css(i),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            e.isEmptyObject(i) || this._trigger("resize", t, this.ui()),
            !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var n, r, i, s, o, u, a, f = this.options, l = this;
            return this._helper && (n = this._proportionallyResizeElements,
            r = n.length && /textarea/i.test(n[0].nodeName),
            i = r && e.ui.hasScroll(n[0], "left") ? 0 : l.sizeDiff.height,
            s = r ? 0 : l.sizeDiff.width,
            o = {
                width: l.helper.width() - s,
                height: l.helper.height() - i
            },
            u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null,
            a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null,
            f.animate || this.element.css(e.extend(o, {
                top: a,
                left: u
            })),
            l.helper.height(l.size.height),
            l.helper.width(l.size.width),
            this._helper && !f.animate && this._proportionallyResize()),
            e("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(e) {
            var t, n, i, s, o, u = this.options;
            o = {
                minWidth: r(u.minWidth) ? u.minWidth : 0,
                maxWidth: r(u.maxWidth) ? u.maxWidth : Infinity,
                minHeight: r(u.minHeight) ? u.minHeight : 0,
                maxHeight: r(u.maxHeight) ? u.maxHeight : Infinity
            };
            if (this._aspectRatio || e)
                t = o.minHeight * this.aspectRatio,
                i = o.minWidth / this.aspectRatio,
                n = o.maxHeight * this.aspectRatio,
                s = o.maxWidth / this.aspectRatio,
                t > o.minWidth && (o.minWidth = t),
                i > o.minHeight && (o.minHeight = i),
                n < o.maxWidth && (o.maxWidth = n),
                s < o.maxHeight && (o.maxHeight = s);
            this._vBoundaries = o
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(),
            r(e.left) && (this.position.left = e.left),
            r(e.top) && (this.position.top = e.top),
            r(e.height) && (this.size.height = e.height),
            r(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position
              , n = this.size
              , i = this.axis;
            return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio),
            i === "sw" && (e.left = t.left + (n.width - e.width),
            e.top = null),
            i === "nw" && (e.top = t.top + (n.height - e.height),
            e.left = t.left + (n.width - e.width)),
            e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries
              , n = this.axis
              , i = r(e.width) && t.maxWidth && t.maxWidth < e.width
              , s = r(e.height) && t.maxHeight && t.maxHeight < e.height
              , o = r(e.width) && t.minWidth && t.minWidth > e.width
              , u = r(e.height) && t.minHeight && t.minHeight > e.height
              , a = this.originalPosition.left + this.originalSize.width
              , f = this.position.top + this.size.height
              , l = /sw|nw|w/.test(n)
              , c = /nw|ne|n/.test(n);
            return o && (e.width = t.minWidth),
            u && (e.height = t.minHeight),
            i && (e.width = t.maxWidth),
            s && (e.height = t.maxHeight),
            o && l && (e.left = a - t.minWidth),
            i && l && (e.left = a - t.maxWidth),
            u && c && (e.top = f - t.minHeight),
            s && c && (e.top = f - t.maxHeight),
            !e.width && !e.height && !e.left && e.top ? e.top = null : !e.width && !e.height && !e.top && e.left && (e.left = null),
            e
        },
        _proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length)
                return;
            var e, t, n, r, i, s = this.helper || this.element;
            for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                i = this._proportionallyResizeElements[e];
                if (!this.borderDif) {
                    this.borderDif = [],
                    n = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
                    r = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                    for (t = 0; t < n.length; t++)
                        this.borderDif[t] = (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0)
                }
                i.css({
                    height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: s.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function() {
            var t = this.element
              , n = this.options;
            this.elementOffset = t.offset(),
            this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"),
            this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++n.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var n = this.originalSize
                  , r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: n.width - t
                }
            },
            n: function(e, t, n) {
                var r = this.originalSize
                  , i = this.originalPosition;
                return {
                    top: i.top + n,
                    height: r.height - n
                }
            },
            s: function(e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function(t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function(t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function(t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function(t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function(t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]),
            t !== "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var n = e(this).data("ui-resizable")
              , r = n.options
              , i = n._proportionallyResizeElements
              , s = i.length && /textarea/i.test(i[0].nodeName)
              , o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height
              , u = s ? 0 : n.sizeDiff.width
              , a = {
                width: n.size.width - u,
                height: n.size.height - o
            }
              , f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null
              , l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            n.element.animate(e.extend(a, l && f ? {
                top: l,
                left: f
            } : {}), {
                duration: r.animateDuration,
                easing: r.animateEasing,
                step: function() {
                    var r = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    i && i.length && e(i[0]).css({
                        width: r.width,
                        height: r.height
                    }),
                    n._updateCache(r),
                    n._propagate("resize", t)
                }
            })
        }
    }),
    e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, r, i, s, o, u, a, f = e(this).data("ui-resizable"), l = f.options, c = f.element, h = l.containment, p = h instanceof e ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
            if (!p)
                return;
            f.containerElement = e(p),
            /document/.test(h) || h === document ? (f.containerOffset = {
                left: 0,
                top: 0
            },
            f.containerPosition = {
                left: 0,
                top: 0
            },
            f.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(p),
            r = [],
            e(["Top", "Right", "Left", "Bottom"]).each(function(e, i) {
                r[e] = n(t.css("padding" + i))
            }),
            f.containerOffset = t.offset(),
            f.containerPosition = t.position(),
            f.containerSize = {
                height: t.innerHeight() - r[3],
                width: t.innerWidth() - r[1]
            },
            i = f.containerOffset,
            s = f.containerSize.height,
            o = f.containerSize.width,
            u = e.ui.hasScroll(p, "left") ? p.scrollWidth : o,
            a = e.ui.hasScroll(p) ? p.scrollHeight : s,
            f.parentData = {
                element: p,
                left: i.left,
                top: i.top,
                width: u,
                height: a
            })
        },
        resize: function(t) {
            var n, r, i, s, o = e(this).data("ui-resizable"), u = o.options, a = o.containerOffset, f = o.position, l = o._aspectRatio || t.shiftKey, c = {
                top: 0,
                left: 0
            }, h = o.containerElement;
            h[0] !== document && /static/.test(h.css("position")) && (c = a),
            f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left),
            l && (o.size.height = o.size.width / o.aspectRatio),
            o.position.left = u.helper ? a.left : 0),
            f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top),
            l && (o.size.width = o.size.height * o.aspectRatio),
            o.position.top = o._helper ? a.top : 0),
            o.offset.left = o.parentData.left + o.position.left,
            o.offset.top = o.parentData.top + o.position.top,
            n = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width),
            r = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - a.top) + o.sizeDiff.height),
            i = o.containerElement.get(0) === o.element.parent().get(0),
            s = /relative|absolute/.test(o.containerElement.css("position")),
            i && s && (n -= o.parentData.left),
            n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n,
            l && (o.size.height = o.size.width / o.aspectRatio)),
            r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r,
            l && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function() {
            var t = e(this).data("ui-resizable")
              , n = t.options
              , r = t.containerOffset
              , i = t.containerPosition
              , s = t.containerElement
              , o = e(t.helper)
              , u = o.offset()
              , a = o.outerWidth() - t.sizeDiff.width
              , f = o.outerHeight() - t.sizeDiff.height;
            t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: f
            }),
            t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: f
            })
        }
    }),
    e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).data("ui-resizable")
              , n = t.options
              , r = function(t) {
                e(t).each(function() {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            typeof n.alsoResize == "object" && !n.alsoResize.parentNode ? n.alsoResize.length ? (n.alsoResize = n.alsoResize[0],
            r(n.alsoResize)) : e.each(n.alsoResize, function(e) {
                r(e)
            }) : r(n.alsoResize)
        },
        resize: function(t, n) {
            var r = e(this).data("ui-resizable")
              , i = r.options
              , s = r.originalSize
              , o = r.originalPosition
              , u = {
                height: r.size.height - s.height || 0,
                width: r.size.width - s.width || 0,
                top: r.position.top - o.top || 0,
                left: r.position.left - o.left || 0
            }
              , a = function(t, r) {
                e(t).each(function() {
                    var t = e(this)
                      , i = e(this).data("ui-resizable-alsoresize")
                      , s = {}
                      , o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(o, function(e, t) {
                        var n = (i[t] || 0) + (u[t] || 0);
                        n && n >= 0 && (s[t] = n || null)
                    }),
                    t.css(s)
                })
            };
            typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function(e, t) {
                a(e, t)
            }) : a(i.alsoResize)
        },
        stop: function() {
            e(this).removeData("resizable-alsoresize")
        }
    }),
    e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).data("ui-resizable")
              , n = t.options
              , r = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = e(this).data("ui-resizable")
              , n = t.options
              , r = t.size
              , i = t.originalSize
              , s = t.originalPosition
              , o = t.axis
              , u = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid
              , a = u[0] || 1
              , f = u[1] || 1
              , l = Math.round((r.width - i.width) / a) * a
              , c = Math.round((r.height - i.height) / f) * f
              , h = i.width + l
              , p = i.height + c
              , d = n.maxWidth && n.maxWidth < h
              , v = n.maxHeight && n.maxHeight < p
              , m = n.minWidth && n.minWidth > h
              , g = n.minHeight && n.minHeight > p;
            n.grid = u,
            m && (h += a),
            g && (p += f),
            d && (h -= a),
            v && (p -= f),
            /^(se|s|e)$/.test(o) ? (t.size.width = h,
            t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = h,
            t.size.height = p,
            t.position.top = s.top - c) : /^(sw)$/.test(o) ? (t.size.width = h,
            t.size.height = p,
            t.position.left = s.left - l) : (t.size.width = h,
            t.size.height = p,
            t.position.top = s.top - c,
            t.position.left = s.left - l)
        }
    })
}
)(jQuery);
(function(e, t) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.10.0",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, n = this;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                t = e(n.options.filter, n.element[0]),
                t.addClass("ui-selectee"),
                t.each(function() {
                    var t = e(this)
                      , n = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: n.left,
                        top: n.top,
                        right: n.left + t.outerWidth(),
                        bottom: n.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }
            ,
            this.refresh(),
            this.selectees = t.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var n = this
              , r = this.options;
            this.opos = [t.pageX, t.pageY];
            if (this.options.disabled)
                return;
            this.selectees = e(r.filter, this.element[0]),
            this._trigger("start", t),
            e(r.appendTo).append(this.helper),
            this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }),
            r.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var r = e.data(this, "selectable-item");
                r.startselected = !0,
                !t.metaKey && !t.ctrlKey && (r.$element.removeClass("ui-selected"),
                r.selected = !1,
                r.$element.addClass("ui-unselecting"),
                r.unselecting = !0,
                n._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }),
            e(t.target).parents().addBack().each(function() {
                var r, i = e.data(this, "selectable-item");
                if (i)
                    return r = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"),
                    i.$element.removeClass(r ? "ui-unselecting" : "ui-selected").addClass(r ? "ui-selecting" : "ui-unselecting"),
                    i.unselecting = !r,
                    i.selecting = r,
                    i.selected = r,
                    r ? n._trigger("selecting", t, {
                        selecting: i.element
                    }) : n._trigger("unselecting", t, {
                        unselecting: i.element
                    }),
                    !1
            })
        },
        _mouseDrag: function(t) {
            this.dragged = !0;
            if (this.options.disabled)
                return;
            var n, r = this, i = this.options, s = this.opos[0], o = this.opos[1], u = t.pageX, a = t.pageY;
            return s > u && (n = u,
            u = s,
            s = n),
            o > a && (n = a,
            a = o,
            o = n),
            this.helper.css({
                left: s,
                top: o,
                width: u - s,
                height: a - o
            }),
            this.selectees.each(function() {
                var n = e.data(this, "selectable-item")
                  , f = !1;
                if (!n || n.element === r.element[0])
                    return;
                i.tolerance === "touch" ? f = !(n.left > u || n.right < s || n.top > a || n.bottom < o) : i.tolerance === "fit" && (f = n.left > s && n.right < u && n.top > o && n.bottom < a),
                f ? (n.selected && (n.$element.removeClass("ui-selected"),
                n.selected = !1),
                n.unselecting && (n.$element.removeClass("ui-unselecting"),
                n.unselecting = !1),
                n.selecting || (n.$element.addClass("ui-selecting"),
                n.selecting = !0,
                r._trigger("selecting", t, {
                    selecting: n.element
                }))) : (n.selecting && ((t.metaKey || t.ctrlKey) && n.startselected ? (n.$element.removeClass("ui-selecting"),
                n.selecting = !1,
                n.$element.addClass("ui-selected"),
                n.selected = !0) : (n.$element.removeClass("ui-selecting"),
                n.selecting = !1,
                n.startselected && (n.$element.addClass("ui-unselecting"),
                n.unselecting = !0),
                r._trigger("unselecting", t, {
                    unselecting: n.element
                }))),
                n.selected && !t.metaKey && !t.ctrlKey && !n.startselected && (n.$element.removeClass("ui-selected"),
                n.selected = !1,
                n.$element.addClass("ui-unselecting"),
                n.unselecting = !0,
                r._trigger("unselecting", t, {
                    unselecting: n.element
                })))
            }),
            !1
        },
        _mouseStop: function(t) {
            var n = this;
            return this.dragged = !1,
            e(".ui-unselecting", this.element[0]).each(function() {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"),
                r.unselecting = !1,
                r.startselected = !1,
                n._trigger("unselected", t, {
                    unselected: r.element
                })
            }),
            e(".ui-selecting", this.element[0]).each(function() {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"),
                r.selecting = !1,
                r.selected = !0,
                r.startselected = !0,
                n._trigger("selected", t, {
                    selected: r.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    })
}
)(jQuery);
(function(e, t) {
    function n(e, t, n) {
        return e > t && e < t + n
    }
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.10.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--)
                this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, n) {
            t === "disabled" ? (this.options[t] = n,
            this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, n) {
            var r = null
              , i = !1
              , s = this;
            if (this.reverting)
                return !1;
            if (this.options.disabled || this.options.type === "static")
                return !1;
            this._refreshItems(t),
            e(t.target).parents().each(function() {
                if (e.data(this, s.widgetName + "-item") === s)
                    return r = e(this),
                    !1
            }),
            e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target));
            if (!r)
                return !1;
            if (this.options.handle && !n) {
                e(this.options.handle, r).find("*").addBack().each(function() {
                    this === t.target && (i = !0)
                });
                if (!i)
                    return !1
            }
            return this.currentItem = r,
            this._removeCurrentsFromItems(),
            !0
        },
        _mouseStart: function(t, n, r) {
            var i, s = this.options;
            this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            s.containment && this._setContainment(),
            s.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")),
            e("body").css("cursor", s.cursor)),
            s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", s.opacity)),
            s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", s.zIndex)),
            this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r)
                for (i = this.containers.length - 1; i >= 0; i--)
                    this.containers[i]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this),
            e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var n, r, i, s, o = this.options, u = !1;
            this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)),
            t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))),
            u !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis !== "x")
                this.helper[0].style.top = this.position.top + "px";
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n],
                i = r.item[0],
                s = this._intersectsWithPointer(r);
                if (!s)
                    continue;
                if (r.instance !== this.currentContainer)
                    continue;
                if (i !== this.currentItem[0] && this.placeholder[s === 1 ? "next" : "prev"]()[0] !== i && !e.contains(this.placeholder[0], i) && (this.options.type === "semi-dynamic" ? !e.contains(this.element[0], i) : !0)) {
                    this.direction = s === 1 ? "down" : "up";
                    if (this.options.tolerance !== "pointer" && !this._intersectsWithSides(r))
                        break;
                    this._rearrange(t, r),
                    this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, n) {
            if (!t)
                return;
            e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
            if (this.options.revert) {
                var r = this
                  , i = this.placeholder.offset();
                this.reverting = !0,
                e(this.helper).animate({
                    left: i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function() {
                    r._clear(t)
                })
            } else
                this._clear(t, n);
            return !1
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--)
                    this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                    this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(),
            e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected)
              , r = [];
            return t = t || {},
            e(n).each(function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }),
            !r.length && t.key && r.push(t.key + "="),
            r.join("&")
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected)
              , r = [];
            return t = t || {},
            n.each(function() {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }),
            r
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left
              , n = t + this.helperProportions.width
              , r = this.positionAbs.top
              , i = r + this.helperProportions.height
              , s = e.left
              , o = s + e.width
              , u = e.top
              , a = u + e.height
              , f = this.offset.click.top
              , l = this.offset.click.left
              , c = r + f > u && r + f < a && t + l > s && t + l < o;
            return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function(e) {
            var t = this.options.axis === "x" || n(this.positionAbs.top + this.offset.click.top, e.top, e.height)
              , r = this.options.axis === "y" || n(this.positionAbs.left + this.offset.click.left, e.left, e.width)
              , i = t && r
              , s = this._getDragVerticalDirection()
              , o = this._getDragHorizontalDirection();
            return i ? this.floating ? o && o === "right" || s === "down" ? 2 : 1 : s && (s === "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var t = n(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height)
              , r = n(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width)
              , i = this._getDragVerticalDirection()
              , s = this._getDragHorizontalDirection();
            return this.floating && s ? s === "right" && r || s === "left" && !r : i && (i === "down" && t || i === "up" && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e !== 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e !== 0 && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var n, r, i, s, o = [], u = [], a = this._connectWith();
            if (a && t)
                for (n = a.length - 1; n >= 0; n--) {
                    i = e(a[n]);
                    for (r = i.length - 1; r >= 0; r--)
                        s = e.data(i[r], this.widgetFullName),
                        s && s !== this && !s.options.disabled && u.push([e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s])
                }
            u.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (n = u.length - 1; n >= 0; n--)
                u[n][0].each(function() {
                    o.push(this)
                });
            return e(o)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] === e.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [],
            this.containers = [this];
            var n, r, i, s, o, u, a, f, l = this.items, c = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : e(this.options.items, this.element), this]], h = this._connectWith();
            if (h && this.ready)
                for (n = h.length - 1; n >= 0; n--) {
                    i = e(h[n]);
                    for (r = i.length - 1; r >= 0; r--)
                        s = e.data(i[r], this.widgetFullName),
                        s && s !== this && !s.options.disabled && (c.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                            item: this.currentItem
                        }) : e(s.options.items, s.element), s]),
                        this.containers.push(s))
                }
            for (n = c.length - 1; n >= 0; n--) {
                o = c[n][1],
                u = c[n][0];
                for (r = 0,
                f = u.length; r < f; r++)
                    a = e(u[r]),
                    a.data(this.widgetName + "-item", o),
                    l.push({
                        item: a,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            }
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, r, i, s;
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n];
                if (r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0])
                    continue;
                i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item,
                t || (r.width = i.outerWidth(),
                r.height = i.outerHeight()),
                s = i.offset(),
                r.left = s.left,
                r.top = s.top
            }
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (n = this.containers.length - 1; n >= 0; n--)
                    s = this.containers[n].element.offset(),
                    this.containers[n].containerCache.left = s.left,
                    this.containers[n].containerCache.top = s.top,
                    this.containers[n].containerCache.width = this.containers[n].element.outerWidth(),
                    this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var n, r = t.options;
            if (!r.placeholder || r.placeholder.constructor === String)
                n = r.placeholder,
                r.placeholder = {
                    element: function() {
                        var r = e(document.createElement(t.currentItem[0].nodeName)).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return n || (r.style.visibility = "hidden"),
                        r
                    },
                    update: function(e, i) {
                        if (n && !r.forcePlaceholderSize)
                            return;
                        i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)),
                        i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))
                    }
                };
            t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem)),
            t.currentItem.after(t.placeholder),
            r.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            var n, r, i, s, o, u, a, f, l, c = null, h = null;
            for (n = this.containers.length - 1; n >= 0; n--) {
                if (e.contains(this.currentItem[0], this.containers[n].element[0]))
                    continue;
                if (this._intersectsWith(this.containers[n].containerCache)) {
                    if (c && e.contains(this.containers[n].element[0], c.element[0]))
                        continue;
                    c = this.containers[n],
                    h = n
                } else
                    this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)),
                    this.containers[n].containerCache.over = 0)
            }
            if (!c)
                return;
            if (this.containers.length === 1)
                this.containers[h]._trigger("over", t, this._uiHash(this)),
                this.containers[h].containerCache.over = 1;
            else {
                i = 1e4,
                s = null,
                o = this.containers[h].floating ? "left" : "top",
                u = this.containers[h].floating ? "width" : "height",
                a = this.positionAbs[o] + this.offset.click[o];
                for (r = this.items.length - 1; r >= 0; r--) {
                    if (!e.contains(this.containers[h].element[0], this.items[r].item[0]))
                        continue;
                    if (this.items[r].item[0] === this.currentItem[0])
                        continue;
                    f = this.items[r].item.offset()[o],
                    l = !1,
                    Math.abs(f - a) > Math.abs(f + this.items[r][u] - a) && (l = !0,
                    f += this.items[r][u]),
                    Math.abs(f - a) < i && (i = Math.abs(f - a),
                    s = this.items[r],
                    this.direction = l ? "up" : "down")
                }
                if (!s && !this.options.dropOnEmpty)
                    return;
                this.currentContainer = this.containers[h],
                s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[h].element, !0),
                this._trigger("change", t, this._uiHash()),
                this.containers[h]._trigger("change", t, this._uiHash(this)),
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[h]._trigger("over", t, this._uiHash(this)),
                this.containers[h].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var n = this.options
              , r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            return r.parents("body").length || e(n.appendTo !== "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]),
            r[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!r[0].style.width || n.forceHelperSize) && r.width(this.currentItem.width()),
            (!r[0].style.height || n.forceHelperSize) && r.height(this.currentItem.height()),
            r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie)
                t = {
                    top: 0,
                    left: 0
                };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, r, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            if (i.containment === "document" || i.containment === "window")
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            /^(document|window|parent)$/.test(i.containment) || (t = e(i.containment)[0],
            n = e(i.containment).offset(),
            r = e(t).css("overflow") !== "hidden",
            this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t === "absolute" ? 1 : -1
              , i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , s = /(html|body)/i.test(i[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var n, r, i = this.options, s = t.pageX, o = t.pageY, u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(u[0].tagName);
            return this.cssPosition === "relative" && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)),
            i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1],
            o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n,
            r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0],
            s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var i = this.counter;
            this._delay(function() {
                i === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(t, n) {
            this.reverting = !1;
            var r, i = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (r in this._storedCSS)
                    if (this._storedCSS[r] === "auto" || this._storedCSS[r] === "static")
                        this._storedCSS[r] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            this.fromOutside && !n && i.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }),
            (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !n && i.push(function(e) {
                this._trigger("update", e, this._uiHash())
            }),
            this !== this.currentContainer && (n || (i.push(function(e) {
                this._trigger("remove", e, this._uiHash())
            }),
            i.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            i.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer))));
            for (r = this.containers.length - 1; r >= 0; r--)
                n || i.push(function(e) {
                    return function(t) {
                        e._trigger("deactivate", t, this._uiHash(this))
                    }
                }
                .call(this, this.containers[r])),
                this.containers[r].containerCache.over && (i.push(function(e) {
                    return function(t) {
                        e._trigger("out", t, this._uiHash(this))
                    }
                }
                .call(this, this.containers[r])),
                this.containers[r].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex),
            this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (r = 0; r < i.length; r++)
                        i[r].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null;
            if (!n) {
                for (r = 0; r < i.length; r++)
                    i[r].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}
)(jQuery);
(function(e, t) {
    var n = 0
      , r = {}
      , i = {};
    r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide",
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show",
    e.widget("ui.accordion", {
        version: "1.10.0",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = e(),
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
            !t.collapsible && (t.active === !1 || t.active == null) && (t.active = 0),
            this._processPanels(),
            t.active < 0 && (t.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                content: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers),
            this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),
            this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            this._destroyIcons(),
            e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            this.options.heightStyle !== "content" && e.css("height", "")
        },
        _setOption: function(e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            e === "event" && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(t)),
            this._super(e, t),
            e === "collapsible" && !t && this.options.active === !1 && this._activate(0),
            e === "icons" && (this._destroyIcons(),
            t && this._createIcons()),
            e === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)
        },
        _keydown: function(t) {
            if (t.altKey || t.ctrlKey)
                return;
            var n = e.ui.keyCode
              , r = this.headers.length
              , i = this.headers.index(t.target)
              , s = !1;
            switch (t.keyCode) {
            case n.RIGHT:
            case n.DOWN:
                s = this.headers[(i + 1) % r];
                break;
            case n.LEFT:
            case n.UP:
                s = this.headers[(i - 1 + r) % r];
                break;
            case n.SPACE:
            case n.ENTER:
                this._eventHandler(t);
                break;
            case n.HOME:
                s = this.headers[0];
                break;
            case n.END:
                s = this.headers[r - 1]
            }
            s && (e(t.target).attr("tabIndex", -1),
            e(s).attr("tabIndex", 0),
            s.focus(),
            t.preventDefault())
        },
        _panelKeyDown: function(t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t = this.options;
            this._processPanels();
            if (t.active === !1 && t.collapsible === !0 || !this.headers.length)
                t.active = !1,
                this.active = e();
            t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1,
            this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var t, r = this.options, i = r.heightStyle, s = this.element.parent(), o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n);
            this.active = this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this.headers.attr("role", "tab").each(function(t) {
                var n = e(this)
                  , r = n.attr("id")
                  , i = n.next()
                  , s = i.attr("id");
                r || (r = o + "-header-" + t,
                n.attr("id", r)),
                s || (s = o + "-panel-" + t,
                i.attr("id", s)),
                n.attr("aria-controls", s),
                i.attr("aria-labelledby", r)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(r.event),
            i === "fill" ? (t = s.height(),
            this.element.siblings(":visible").each(function() {
                var n = e(this)
                  , r = n.css("position");
                if (r === "absolute" || r === "fixed")
                    return;
                t -= n.outerHeight(!0)
            }),
            this.headers.each(function() {
                t -= e(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : i === "auto" && (t = 0,
            this.headers.next().each(function() {
                t = Math.max(t, e(this).css("height", "").height())
            }).height(t))
        },
        _activate: function(t) {
            var n = this._findActive(t)[0];
            if (n === this.active[0])
                return;
            n = n || this.active[0],
            this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function(t) {
            return typeof t == "number" ? this.headers.eq(t) : e()
        },
        _setupEvents: function(t) {
            var n = {
                keydown: "_keydown"
            };
            t && e.each(t.split(" "), function(e, t) {
                n[t] = "_eventHandler"
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, n),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var n = this.options
              , r = this.active
              , i = e(t.currentTarget)
              , s = i[0] === r[0]
              , o = s && n.collapsible
              , u = o ? e() : i.next()
              , a = r.next()
              , f = {
                oldHeader: r,
                oldPanel: a,
                newHeader: o ? e() : i,
                newPanel: u
            };
            t.preventDefault();
            if (s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1)
                return;
            n.active = o ? !1 : this.headers.index(i),
            this.active = s ? e() : i,
            this._toggle(f),
            r.removeClass("ui-accordion-header-active ui-state-active"),
            n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),
            s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
            n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),
            i.next().addClass("ui-accordion-content-active"))
        },
        _toggle: function(t) {
            var n = t.newPanel
              , r = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = n,
            this.prevHide = r,
            this.options.animate ? this._animate(n, r, t) : (r.hide(),
            n.show(),
            this._toggleComplete(t)),
            r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            r.prev().attr("aria-selected", "false"),
            n.length && r.length ? r.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function() {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1),
            n.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(e, t, n) {
            var s, o, u, a = this, f = 0, l = e.length && (!t.length || e.index() < t.index()), c = this.options.animate || {}, h = l && c.down || c, p = function() {
                a._toggleComplete(n)
            };
            typeof h == "number" && (u = h),
            typeof h == "string" && (o = h),
            o = o || h.easing || c.easing,
            u = u || h.duration || c.duration;
            if (!t.length)
                return e.animate(i, u, o, p);
            if (!e.length)
                return t.animate(r, u, o, p);
            s = e.show().outerHeight(),
            t.animate(r, {
                duration: u,
                easing: o,
                step: function(e, t) {
                    t.now = Math.round(e)
                }
            }),
            e.hide().animate(i, {
                duration: u,
                easing: o,
                complete: p,
                step: function(e, n) {
                    n.now = Math.round(e),
                    n.prop !== "height" ? f += n.now : a.options.heightStyle !== "content" && (n.now = Math.round(s - t.outerHeight() - f),
                    f = 0)
                }
            })
        },
        _toggleComplete: function(e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
            t.length && (t.parent()[0].className = t.parent()[0].className),
            this._trigger("activate", null, e)
        }
    })
}
)(jQuery);
(function(e, t) {
    var n = 0;
    e.widget("ui.autocomplete", {
        version: "1.10.0",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t, n, r;
            this.isMultiLine = this._isMultiLine(),
            this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(i) {
                    if (this.element.prop("readOnly")) {
                        t = !0,
                        r = !0,
                        n = !0;
                        return
                    }
                    t = !1,
                    r = !1,
                    n = !1;
                    var s = e.ui.keyCode;
                    switch (i.keyCode) {
                    case s.PAGE_UP:
                        t = !0,
                        this._move("previousPage", i);
                        break;
                    case s.PAGE_DOWN:
                        t = !0,
                        this._move("nextPage", i);
                        break;
                    case s.UP:
                        t = !0,
                        this._keyEvent("previous", i);
                        break;
                    case s.DOWN:
                        t = !0,
                        this._keyEvent("next", i);
                        break;
                    case s.ENTER:
                    case s.NUMPAD_ENTER:
                        this.menu.active && (t = !0,
                        i.preventDefault(),
                        this.menu.select(i));
                        break;
                    case s.TAB:
                        this.menu.active && this.menu.select(i);
                        break;
                    case s.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term),
                        this.close(i),
                        i.preventDefault());
                        break;
                    default:
                        n = !0,
                        this._searchTimeout(i)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1,
                        r.preventDefault();
                        return
                    }
                    if (n)
                        return;
                    var i = e.ui.keyCode;
                    switch (r.keyCode) {
                    case i.PAGE_UP:
                        this._move("previousPage", r);
                        break;
                    case i.PAGE_DOWN:
                        this._move("nextPage", r);
                        break;
                    case i.UP:
                        this._keyEvent("previous", r);
                        break;
                    case i.DOWN:
                        this._keyEvent("next", r)
                    }
                },
                input: function(e) {
                    if (r) {
                        r = !1,
                        e.preventDefault();
                        return
                    }
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(e) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching),
                    this.close(e),
                    this._change(e)
                }
            }),
            this._initSource(),
            this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this._appendTo()).menu({
                input: e(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("ui-menu"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(r) {
                            r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                        })
                    })
                },
                menufocus: function(t, n) {
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                            this.menu.blur(),
                            this.document.one("mousemove", function() {
                                e(t.target).trigger(t.originalEvent)
                            });
                            return
                        }
                    }
                    var r = n.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: r
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                },
                menuselect: function(e, t) {
                    var n = t.item.data("ui-autocomplete-item")
                      , r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                    this.previous = r,
                    this._delay(function() {
                        this.previous = r,
                        this.selectedItem = n
                    })),
                    !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = n
                }
            }),
            this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t),
            e === "source" && this._initSource(),
            e === "appendTo" && this.menu.element.appendTo(this._appendTo()),
            e === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
            t || (t = this.element.closest(".ui-front")),
            t.length || (t = this.document[0].body),
            t
        },
        _isMultiLine: function() {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function() {
            var t, n, r = this;
            e.isArray(this.options.source) ? (t = this.options.source,
            this.source = function(n, r) {
                r(e.ui.autocomplete.filter(t, n.term))
            }
            ) : typeof this.options.source == "string" ? (n = this.options.source,
            this.source = function(t, i) {
                r.xhr && r.xhr.abort(),
                r.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        i(e)
                    },
                    error: function() {
                        i([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null,
                this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            e = e != null ? e : this._value(),
            this.term = this._value();
            if (e.length < this.options.minLength)
                return this.close(t);
            if (this._trigger("search", t) === !1)
                return;
            return this._search(e)
        },
        _search: function(e) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = this
              , t = ++n;
            return function(r) {
                t === n && e.__response(r),
                e.pending--,
                e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            e && (e = this._normalize(e)),
            this._trigger("response", null, {
                content: e
            }),
            !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e),
            this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0,
            this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t),
            this.menu.refresh(),
            n.show(),
            this._resizeMenu(),
            n.position(e.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, n) {
            var r = this;
            e.each(n, function(e, n) {
                r._renderItemData(t, n)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, n) {
            return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
        },
        _move: function(e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                this._value(this.term),
                this.menu.blur();
                return
            }
            this.menu[e](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            if (!this.isMultiLine || this.menu.element.is(":visible"))
                this._move(e, t),
                t.preventDefault()
        }
    }),
    e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n),"i");
            return e.grep(t, function(e) {
                return r.test(e.label || e.value || e)
            })
        }
    }),
    e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch)
                return;
            e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults,
            this.liveRegion.text(t)
        }
    })
}
)(jQuery);
(function(e, t) {
    var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all", u = "ui-state-hover ui-state-active ", a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", f = function() {
        var t = e(this).find(":ui-button");
        setTimeout(function() {
            t.button("refresh")
        }, 1)
    }, l = function(t) {
        var n = t.name
          , r = t.form
          , i = e([]);
        return n && (n = n.replace(/'/g, "\\'"),
        r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function() {
            return !this.form
        })),
        i
    };
    e.widget("ui.button", {
        version: "1.10.0",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f),
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
            this._determineButtonType(),
            this.hasTitle = !!this.buttonElement.attr("title");
            var t = this
              , u = this.options
              , a = this.type === "checkbox" || this.type === "radio"
              , c = a ? "" : "ui-state-active"
              , h = "ui-state-focus";
            u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()),
            this._hoverable(this.buttonElement),
            this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (u.disabled)
                    return;
                this === n && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (u.disabled)
                    return;
                e(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function(e) {
                u.disabled && (e.preventDefault(),
                e.stopImmediatePropagation())
            }),
            this.element.bind("focus" + this.eventNamespace, function() {
                t.buttonElement.addClass(h)
            }).bind("blur" + this.eventNamespace, function() {
                t.buttonElement.removeClass(h)
            }),
            a && (this.element.bind("change" + this.eventNamespace, function() {
                if (s)
                    return;
                t.refresh()
            }),
            this.buttonElement.bind("mousedown" + this.eventNamespace, function(e) {
                if (u.disabled)
                    return;
                s = !1,
                r = e.pageX,
                i = e.pageY
            }).bind("mouseup" + this.eventNamespace, function(e) {
                if (u.disabled)
                    return;
                if (r !== e.pageX || i !== e.pageY)
                    s = !0
            })),
            this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (u.disabled || s)
                    return !1
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (u.disabled || s)
                    return !1;
                e(this).addClass("ui-state-active"),
                t.buttonElement.attr("aria-pressed", "true");
                var n = t.element[0];
                l(n).not(n).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (u.disabled)
                    return !1;
                e(this).addClass("ui-state-active"),
                n = this,
                t.document.one("mouseup", function() {
                    n = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (u.disabled)
                    return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(t) {
                if (u.disabled)
                    return !1;
                (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }),
            this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })),
            this._setOption("disabled", u.disabled),
            this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, n;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button",
            this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(),
            t = "label[for='" + this.element.attr("id") + "']",
            this.buttonElement = e.find(t),
            this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(),
            this.buttonElement = e.filter(t),
            this.buttonElement.length || (this.buttonElement = e.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"),
            n = this.element.is(":checked"),
            n && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(e, t) {
            this._super(e, t);
            if (e === "disabled") {
                t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t),
            this.type === "radio" ? l(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var t = this.buttonElement.removeClass(a)
              , n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text()
              , r = this.options.icons
              , i = r.primary && r.secondary
              , s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")),
            r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"),
            r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"),
            this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"),
            t.addClass(s.join(" "))
        }
    }),
    e.widget("ui.buttonset", {
        version: "1.10.0",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(e, t) {
            e === "disabled" && this.buttons.button("option", e, t),
            this._super(e, t)
        },
        refresh: function() {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"),
            this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}
)(jQuery);
(function(e, t) {
    function s() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        e.extend(this._defaults, this.regional[""]),
        this.dpDiv = o(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function o(t) {
        var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(n, "mouseout", function() {
            e(this).removeClass("ui-state-hover"),
            this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"),
            this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(n, "mouseover", function() {
            e.datepicker._isDisabledDatepicker(i.inline ? t.parent()[0] : i.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
            e(this).addClass("ui-state-hover"),
            this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"),
            this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function u(t, n) {
        e.extend(t, n);
        for (var r in n)
            n[r] == null && (t[r] = n[r]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: "1.10.0"
        }
    });
    var n = "datepicker", r = (new Date).getTime(), i;
    e.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return u(this._defaults, e || {}),
            this
        },
        _attachDatepicker: function(t, n) {
            var r, i, s;
            r = t.nodeName.toLowerCase(),
            i = r === "div" || r === "span",
            t.id || (this.uuid += 1,
            t.id = "dp" + this.uuid),
            s = this._newInst(e(t), i),
            s.settings = e.extend({}, n || {}),
            r === "input" ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
        },
        _newInst: function(t, n) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: n,
                dpDiv: n ? o(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, r) {
            var i = e(t);
            r.append = e([]),
            r.trigger = e([]);
            if (i.hasClass(this.markerClassName))
                return;
            this._attachments(i, r),
            i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
            this._autoSize(r),
            e.data(t, n, r),
            r.settings.disabled && this._disableDatepicker(t)
        },
        _attachments: function(t, n) {
            var r, i, s, o = this._get(n, "appendText"), u = this._get(n, "isRTL");
            n.append && n.append.remove(),
            o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"),
            t[u ? "before" : "after"](n.append)),
            t.unbind("focus", this._showDatepicker),
            n.trigger && n.trigger.remove(),
            r = this._get(n, "showOn"),
            (r === "focus" || r === "both") && t.focus(this._showDatepicker);
            if (r === "button" || r === "both")
                i = this._get(n, "buttonText"),
                s = this._get(n, "buttonImage"),
                n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                    src: s,
                    alt: i,
                    title: i
                }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                    src: s,
                    alt: i,
                    title: i
                }) : i)),
                t[u ? "before" : "after"](n.trigger),
                n.trigger.click(function() {
                    return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(),
                    e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]),
                    !1
                })
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, n, r, i, s = new Date(2009,11,20), o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function(e) {
                    n = 0,
                    r = 0;
                    for (i = 0; i < e.length; i++)
                        e[i].length > n && (n = e[i].length,
                        r = i);
                    return r
                }
                ,
                s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())),
                e.input.attr("size", this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function(t, r) {
            var i = e(t);
            if (i.hasClass(this.markerClassName))
                return;
            i.addClass(this.markerClassName).append(r.dpDiv),
            e.data(t, n, r),
            this._setDate(r, this._getDefaultDate(r), !0),
            this._updateDatepicker(r),
            this._updateAlternate(r),
            r.settings.disabled && this._disableDatepicker(t),
            r.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function(t, r, i, s, o) {
            var a, f, l, c, h, p = this._dialogInst;
            return p || (this.uuid += 1,
            a = "dp" + this.uuid,
            this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.keydown(this._doKeyDown),
            e("body").append(this._dialogInput),
            p = this._dialogInst = this._newInst(this._dialogInput, !1),
            p.settings = {},
            e.data(this._dialogInput[0], n, p)),
            u(p.settings, s || {}),
            r = r && r.constructor === Date ? this._formatDate(p, r) : r,
            this._dialogInput.val(r),
            this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null,
            this._pos || (f = document.documentElement.clientWidth,
            l = document.documentElement.clientHeight,
            c = document.documentElement.scrollLeft || document.body.scrollLeft,
            h = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            p.settings.onSelect = i,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            e.blockUI && e.blockUI(this.dpDiv),
            e.data(this._dialogInput[0], n, p),
            this
        },
        _destroyDatepicker: function(t) {
            var r, i = e(t), s = e.data(t, n);
            if (!i.hasClass(this.markerClassName))
                return;
            r = t.nodeName.toLowerCase(),
            e.removeData(t, n),
            r === "input" ? (s.append.remove(),
            s.trigger.remove(),
            i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && i.removeClass(this.markerClassName).empty()
        },
        _enableDatepicker: function(t) {
            var r, i, s = e(t), o = e.data(t, n);
            if (!s.hasClass(this.markerClassName))
                return;
            r = t.nodeName.toLowerCase();
            if (r === "input")
                t.disabled = !1,
                o.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
            else if (r === "div" || r === "span")
                i = s.children("." + this._inlineClass),
                i.children().removeClass("ui-state-disabled"),
                i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
            this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            })
        },
        _disableDatepicker: function(t) {
            var r, i, s = e(t), o = e.data(t, n);
            if (!s.hasClass(this.markerClassName))
                return;
            r = t.nodeName.toLowerCase();
            if (r === "input")
                t.disabled = !0,
                o.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
            else if (r === "div" || r === "span")
                i = s.children("." + this._inlineClass),
                i.children().addClass("ui-state-disabled"),
                i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
            this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }),
            this._disabledInputs[this._disabledInputs.length] = t
        },
        _isDisabledDatepicker: function(e) {
            if (!e)
                return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === e)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, n)
            } catch (r) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(n, r, i) {
            var s, o, a, f, l = this._getInst(n);
            if (arguments.length === 2 && typeof r == "string")
                return r === "defaults" ? e.extend({}, e.datepicker._defaults) : l ? r === "all" ? e.extend({}, l.settings) : this._get(l, r) : null;
            s = r || {},
            typeof r == "string" && (s = {},
            s[r] = i),
            l && (this._curInst === l && this._hideDatepicker(),
            o = this._getDateDatepicker(n, !0),
            a = this._getMinMaxDate(l, "min"),
            f = this._getMinMaxDate(l, "max"),
            u(l.settings, s),
            a !== null && s.dateFormat !== t && s.minDate === t && (l.settings.minDate = this._formatDate(l, a)),
            f !== null && s.dateFormat !== t && s.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)),
            "disabled"in s && (s.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)),
            this._attachments(e(n), l),
            this._autoSize(l),
            this._setDate(l, o),
            this._updateAlternate(l),
            this._updateDatepicker(l))
        },
        _changeDatepicker: function(e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t),
            this._updateDatepicker(n),
            this._updateAlternate(n))
        },
        _getDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t),
            n ? this._getDate(n) : null
        },
        _doKeyDown: function(t) {
            var n, r, i, s = e.datepicker._getInst(t.target), o = !0, u = s.dpDiv.is(".ui-datepicker-rtl");
            s._keyEvent = !0;
            if (e.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(),
                    o = !1;
                    break;
                case 13:
                    return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv),
                    i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]),
                    n = e.datepicker._get(s, "onSelect"),
                    n ? (r = e.datepicker._formatDate(s),
                    n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
                    o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
                    o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"),
                    o = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"),
                    o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"),
                    o = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"),
                    o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
                }
            else
                t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var n, r, i = e.datepicker._getInst(t.target);
            if (e.datepicker._get(i, "constrainInput"))
                return n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")),
                r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode),
                t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1
        },
        _doKeyUp: function(t) {
            var n, r = e.datepicker._getInst(t.target);
            if (r.input.val() !== r.lastVal)
                try {
                    n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)),
                    n && (e.datepicker._setDateFromField(r),
                    e.datepicker._updateAlternate(r),
                    e.datepicker._updateDatepicker(r))
                } catch (i) {}
            return !0
        },
        _showDatepicker: function(t) {
            t = t.target || t,
            t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]);
            if (e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t)
                return;
            var n, r, i, s, o, a, f;
            n = e.datepicker._getInst(t),
            e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0),
            n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
            r = e.datepicker._get(n, "beforeShow"),
            i = r ? r.apply(t, [t, n]) : {};
            if (i === !1)
                return;
            u(n.settings, i),
            n.lastVal = null,
            e.datepicker._lastInput = t,
            e.datepicker._setDateFromField(n),
            e.datepicker._inDialog && (t.value = ""),
            e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t),
            e.datepicker._pos[1] += t.offsetHeight),
            s = !1,
            e(t).parents().each(function() {
                return s |= e(this).css("position") === "fixed",
                !s
            }),
            o = {
                left: e.datepicker._pos[0],
                top: e.datepicker._pos[1]
            },
            e.datepicker._pos = null,
            n.dpDiv.empty(),
            n.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }),
            e.datepicker._updateDatepicker(n),
            o = e.datepicker._checkOffset(n, o, s),
            n.dpDiv.css({
                position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
                display: "none",
                left: o.left + "px",
                top: o.top + "px"
            }),
            n.inline || (a = e.datepicker._get(n, "showAnim"),
            f = e.datepicker._get(n, "duration"),
            n.dpDiv.zIndex(e(t).zIndex() + 1),
            e.datepicker._datepickerShowing = !0,
            e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null),
            n.input.is(":visible") && !n.input.is(":disabled") && n.input.focus(),
            e.datepicker._curInst = n)
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4,
            i = t,
            t.dpDiv.empty().append(this._generateHTML(t)),
            this._attachHandlers(t),
            t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var n, r = this._getNumberOfMonths(t), s = r[1], o = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"),
            t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            t === e.datepicker._curInst && e.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] !== document.activeElement && t.input.focus(),
            t.yearshtml && (n = t.yearshtml,
            setTimeout(function() {
                n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                n = t.yearshtml = null
            }, 0))
        },
        _getBorders: function(e) {
            var t = function(e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[e] || e
            };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function(t, n, r) {
            var i = t.dpDiv.outerWidth()
              , s = t.dpDiv.outerHeight()
              , o = t.input ? t.input.outerWidth() : 0
              , u = t.input ? t.input.outerHeight() : 0
              , a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft())
              , f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
            return n.left -= this._get(t, "isRTL") ? i - o : 0,
            n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0,
            n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0,
            n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0),
            n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0),
            n
        },
        _findPos: function(t) {
            var n, r = this._getInst(t), i = this._get(r, "isRTL");
            while (t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t)))
                t = t[i ? "previousSibling" : "nextSibling"];
            return n = e(t).offset(),
            [n.left, n.top]
        },
        _hideDatepicker: function(t) {
            var r, i, s, o, u = this._curInst;
            if (!u || t && u !== e.data(t, n))
                return;
            this._datepickerShowing && (r = this._get(u, "showAnim"),
            i = this._get(u, "duration"),
            s = function() {
                e.datepicker._tidyDialog(u)
            }
            ,
            e.effects && (e.effects.effect[r] || e.effects[r]) ? u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s) : u.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? i : null, s),
            r || s(),
            this._datepickerShowing = !1,
            o = this._get(u, "onClose"),
            o && o.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            e.blockUI && (e.unblockUI(),
            e("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (!e.datepicker._curInst)
                return;
            var n = e(t.target)
              , r = e.datepicker._getInst(n[0]);
            (n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
        },
        _adjustDate: function(t, n, r) {
            var i = e(t)
              , s = this._getInst(i[0]);
            if (this._isDisabledDatepicker(i[0]))
                return;
            this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r),
            this._updateDatepicker(s)
        },
        _gotoToday: function(t) {
            var n, r = e(t), i = this._getInst(r[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
            i.drawMonth = i.selectedMonth = i.currentMonth,
            i.drawYear = i.selectedYear = i.currentYear) : (n = new Date,
            i.selectedDay = n.getDate(),
            i.drawMonth = i.selectedMonth = n.getMonth(),
            i.drawYear = i.selectedYear = n.getFullYear()),
            this._notifyChange(i),
            this._adjustDate(r)
        },
        _selectMonthYear: function(t, n, r) {
            var i = e(t)
              , s = this._getInst(i[0]);
            s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10),
            this._notifyChange(s),
            this._adjustDate(i)
        },
        _selectDay: function(t, n, r, i) {
            var s, o = e(t);
            if (e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]))
                return;
            s = this._getInst(o[0]),
            s.selectedDay = s.currentDay = e("a", i).html(),
            s.selectedMonth = s.currentMonth = n,
            s.selectedYear = s.currentYear = r,
            this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
        },
        _clearDate: function(t) {
            var n = e(t);
            this._selectDate(n, "")
        },
        _selectDate: function(t, n) {
            var r, i = e(t), s = this._getInst(i[0]);
            n = n != null ? n : this._formatDate(s),
            s.input && s.input.val(n),
            this._updateAlternate(s),
            r = this._get(s, "onSelect"),
            r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"),
            s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(),
            this._lastInput = s.input[0],
            typeof s.input[0] != "object" && s.input.focus(),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var n, r, i, s = this._get(t, "altField");
            s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"),
            r = this._getDate(t),
            i = this.formatDate(n, r, this._getFormatConfig(t)),
            e(s).each(function() {
                e(this).val(i)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(e) {
            var t, n = new Date(e.getTime());
            return n.setDate(n.getDate() + 4 - (n.getDay() || 7)),
            t = n.getTime(),
            n.setMonth(0),
            n.setDate(1),
            Math.floor(Math.round((t - n) / 864e5) / 7) + 1
        },
        parseDate: function(t, n, r) {
            if (t == null || n == null)
                throw "Invalid arguments";
            n = typeof n == "object" ? n.toString() : n + "";
            if (n === "")
                return null;
            var i, s, o, u = 0, a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, f = typeof a != "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10), l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, c = (r ? r.dayNames : null) || this._defaults.dayNames, h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, p = (r ? r.monthNames : null) || this._defaults.monthNames, d = -1, v = -1, m = -1, g = -1, y = !1, b, w = function(e) {
                var n = i + 1 < t.length && t.charAt(i + 1) === e;
                return n && i++,
                n
            }, E = function(e) {
                var t = w(e)
                  , r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2
                  , i = new RegExp("^\\d{1," + r + "}")
                  , s = n.substring(u).match(i);
                if (!s)
                    throw "Missing number at position " + u;
                return u += s[0].length,
                parseInt(s[0], 10)
            }, S = function(t, r, i) {
                var s = -1
                  , o = e.map(w(t) ? i : r, function(e, t) {
                    return [[t, e]]
                }).sort(function(e, t) {
                    return -(e[1].length - t[1].length)
                });
                e.each(o, function(e, t) {
                    var r = t[1];
                    if (n.substr(u, r.length).toLowerCase() === r.toLowerCase())
                        return s = t[0],
                        u += r.length,
                        !1
                });
                if (s !== -1)
                    return s + 1;
                throw "Unknown name at position " + u
            }, x = function() {
                if (n.charAt(u) !== t.charAt(i))
                    throw "Unexpected literal at position " + u;
                u++
            };
            for (i = 0; i < t.length; i++)
                if (y)
                    t.charAt(i) === "'" && !w("'") ? y = !1 : x();
                else
                    switch (t.charAt(i)) {
                    case "d":
                        m = E("d");
                        break;
                    case "D":
                        S("D", l, c);
                        break;
                    case "o":
                        g = E("o");
                        break;
                    case "m":
                        v = E("m");
                        break;
                    case "M":
                        v = S("M", h, p);
                        break;
                    case "y":
                        d = E("y");
                        break;
                    case "@":
                        b = new Date(E("@")),
                        d = b.getFullYear(),
                        v = b.getMonth() + 1,
                        m = b.getDate();
                        break;
                    case "!":
                        b = new Date((E("!") - this._ticksTo1970) / 1e4),
                        d = b.getFullYear(),
                        v = b.getMonth() + 1,
                        m = b.getDate();
                        break;
                    case "'":
                        w("'") ? x() : y = !0;
                        break;
                    default:
                        x()
                    }
            if (u < n.length) {
                o = n.substr(u);
                if (!/^\s+/.test(o))
                    throw "Extra/unparsed characters found in date: " + o
            }
            d === -1 ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100));
            if (g > -1) {
                v = 1,
                m = g;
                do {
                    s = this._getDaysInMonth(d, v - 1);
                    if (m <= s)
                        break;
                    v++,
                    m -= s
                } while (!0)
            }
            b = this._daylightSavingAdjust(new Date(d,v - 1,m));
            if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m)
                throw "Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function(e, t, n) {
            if (!t)
                return "";
            var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, s = (n ? n.dayNames : null) || this._defaults.dayNames, o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, u = (n ? n.monthNames : null) || this._defaults.monthNames, a = function(t) {
                var n = r + 1 < e.length && e.charAt(r + 1) === t;
                return n && r++,
                n
            }, f = function(e, t, n) {
                var r = "" + t;
                if (a(e))
                    while (r.length < n)
                        r = "0" + r;
                return r
            }, l = function(e, t, n, r) {
                return a(e) ? r[t] : n[t]
            }, c = "", h = !1;
            if (t)
                for (r = 0; r < e.length; r++)
                    if (h)
                        e.charAt(r) === "'" && !a("'") ? h = !1 : c += e.charAt(r);
                    else
                        switch (e.charAt(r)) {
                        case "d":
                            c += f("d", t.getDate(), 2);
                            break;
                        case "D":
                            c += l("D", t.getDay(), i, s);
                            break;
                        case "o":
                            c += f("o", Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime() - new Date(t.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += f("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += l("M", t.getMonth(), o, u);
                            break;
                        case "y":
                            c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            c += t.getTime();
                            break;
                        case "!":
                            c += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            a("'") ? c += "'" : h = !0;
                            break;
                        default:
                            c += e.charAt(r)
                        }
            return c
        },
        _possibleChars: function(e) {
            var t, n = "", r = !1, i = function(n) {
                var r = t + 1 < e.length && e.charAt(t + 1) === n;
                return r && t++,
                r
            };
            for (t = 0; t < e.length; t++)
                if (r)
                    e.charAt(t) === "'" && !i("'") ? r = !1 : n += e.charAt(t);
                else
                    switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        n += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        i("'") ? n += "'" : r = !0;
                        break;
                    default:
                        n += e.charAt(t)
                    }
            return n
        },
        _get: function(e, n) {
            return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() === e.lastVal)
                return;
            var n = this._get(e, "dateFormat")
              , r = e.lastVal = e.input ? e.input.val() : null
              , i = this._getDefaultDate(e)
              , s = i
              , o = this._getFormatConfig(e);
            try {
                s = this.parseDate(n, r, o) || i
            } catch (u) {
                r = t ? "" : r
            }
            e.selectedDay = s.getDate(),
            e.drawMonth = e.selectedMonth = s.getMonth(),
            e.drawYear = e.selectedYear = s.getFullYear(),
            e.currentDay = r ? s.getDate() : 0,
            e.currentMonth = r ? s.getMonth() : 0,
            e.currentYear = r ? s.getFullYear() : 0,
            this._adjustInstDate(e)
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, n, r) {
            var i = function(e) {
                var t = new Date;
                return t.setDate(t.getDate() + e),
                t
            }
              , s = function(n) {
                try {
                    return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                } catch (r) {}
                var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date
                  , s = i.getFullYear()
                  , o = i.getMonth()
                  , u = i.getDate()
                  , a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g
                  , f = a.exec(n);
                while (f) {
                    switch (f[2] || "d") {
                    case "d":
                    case "D":
                        u += parseInt(f[1], 10);
                        break;
                    case "w":
                    case "W":
                        u += parseInt(f[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        o += parseInt(f[1], 10),
                        u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                        break;
                    case "y":
                    case "Y":
                        s += parseInt(f[1], 10),
                        u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
                    }
                    f = a.exec(n)
                }
                return new Date(s,o,u)
            }
              , o = n == null || n === "" ? r : typeof n == "string" ? s(n) : typeof n == "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());
            return o = o && o.toString() === "Invalid Date" ? r : o,
            o && (o.setHours(0),
            o.setMinutes(0),
            o.setSeconds(0),
            o.setMilliseconds(0)),
            this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0),
            e) : null
        },
        _setDate: function(e, t, n) {
            var r = !t
              , i = e.selectedMonth
              , s = e.selectedYear
              , o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(),
            e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(),
            e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(),
            (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e),
            this._adjustInstDate(e),
            e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var n = this._get(t, "stepMonths")
              , i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, -n, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, +n, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + r].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + r].datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"),
                        !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date, R = this._daylightSavingAdjust(new Date(q.getFullYear(),q.getMonth(),q.getDate())), U = this._get(e, "isRTL"), z = this._get(e, "showButtonPanel"), W = this._get(e, "hideIfNoPrevNext"), X = this._get(e, "navigationAsDateFormat"), V = this._getNumberOfMonths(e), $ = this._get(e, "showCurrentAtPos"), J = this._get(e, "stepMonths"), K = V[0] !== 1 || V[1] !== 1, Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear,e.currentMonth,e.currentDay) : new Date(9999,9,9)), G = this._getMinMaxDate(e, "min"), Y = this._getMinMaxDate(e, "max"), Z = e.drawMonth - $, et = e.drawYear;
            Z < 0 && (Z += 12,
            et--);
            if (Y) {
                t = this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth() - V[0] * V[1] + 1,Y.getDate())),
                t = G && t < G ? G : t;
                while (this._daylightSavingAdjust(new Date(et,Z,1)) > t)
                    Z--,
                    Z < 0 && (Z = 11,
                    et--)
            }
            e.drawMonth = Z,
            e.drawYear = et,
            n = this._get(e, "prevText"),
            n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et,Z - J,1)), this._getFormatConfig(e)) : n,
            r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>",
            i = this._get(e, "nextText"),
            i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et,Z + J,1)), this._getFormatConfig(e)) : i,
            s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>",
            o = this._get(e, "currentText"),
            u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R,
            o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o,
            a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>",
            f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "",
            l = parseInt(this._get(e, "firstDay"), 10),
            l = isNaN(l) ? 0 : l,
            c = this._get(e, "showWeek"),
            h = this._get(e, "dayNames"),
            p = this._get(e, "dayNamesMin"),
            d = this._get(e, "monthNames"),
            v = this._get(e, "monthNamesShort"),
            m = this._get(e, "beforeShowDay"),
            g = this._get(e, "showOtherMonths"),
            y = this._get(e, "selectOtherMonths"),
            b = this._getDefaultDate(e),
            w = "",
            E;
            for (S = 0; S < V[0]; S++) {
                x = "",
                this.maxRows = 4;
                for (T = 0; T < V[1]; T++) {
                    N = this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),
                    C = " ui-corner-all",
                    k = "";
                    if (K) {
                        k += "<div class='ui-datepicker-group";
                        if (V[1] > 1)
                            switch (T) {
                            case 0:
                                k += " ui-datepicker-group-first",
                                C = " ui-corner-" + (U ? "right" : "left");
                                break;
                            case V[1] - 1:
                                k += " ui-datepicker-group-last",
                                C = " ui-corner-" + (U ? "left" : "right");
                                break;
                            default:
                                k += " ui-datepicker-group-middle",
                                C = ""
                            }
                        k += "'>"
                    }
                    k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>",
                    L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
                    for (E = 0; E < 7; E++)
                        A = (E + l) % 7,
                        L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
                    k += L + "</tr></thead><tbody>",
                    O = this._getDaysInMonth(et, Z),
                    et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)),
                    M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7,
                    _ = Math.ceil((M + O) / 7),
                    D = K ? this.maxRows > _ ? this.maxRows : _ : _,
                    this.maxRows = D,
                    P = this._daylightSavingAdjust(new Date(et,Z,1 - M));
                    for (H = 0; H < D; H++) {
                        k += "<tr>",
                        B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "";
                        for (E = 0; E < 7; E++)
                            j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""],
                            F = P.getMonth() !== Z,
                            I = F && !y || !j[0] || G && P < G || Y && P > Y,
                            B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2] + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>",
                            P.setDate(P.getDate() + 1),
                            P = this._daylightSavingAdjust(P);
                        k += B + "</tr>"
                    }
                    Z++,
                    Z > 11 && (Z = 0,
                    et++),
                    k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
                    x += k
                }
                w += x
            }
            return w += f,
            e._keyEvent = !1,
            w
        },
        _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
            var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"), g = this._get(e, "changeYear"), y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", w = "";
            if (s || !m)
                w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                a = r && r.getFullYear() === n,
                f = i && i.getFullYear() === n,
                w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (l = 0; l < 12; l++)
                    (!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
                w += "</select>"
            }
            y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
            if (!e.yearshtml) {
                e.yearshtml = "";
                if (s || !g)
                    b += "<span class='ui-datepicker-year'>" + n + "</span>";
                else {
                    c = this._get(e, "yearRange").split(":"),
                    h = (new Date).getFullYear(),
                    p = function(e) {
                        var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                        return isNaN(t) ? h : t
                    }
                    ,
                    d = p(c[0]),
                    v = Math.max(d, p(c[1] || "")),
                    d = r ? Math.max(d, r.getFullYear()) : d,
                    v = i ? Math.min(v, i.getFullYear()) : v,
                    e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; d <= v; d++)
                        e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
                    e.yearshtml += "</select>",
                    b += e.yearshtml,
                    e.yearshtml = null
                }
            }
            return b += this._get(e, "yearSuffix"),
            y && (b += (s || !m || !g ? "&#xa0;" : "") + w),
            b += "</div>",
            b
        },
        _adjustInstDate: function(e, t, n) {
            var r = e.drawYear + (n === "Y" ? t : 0)
              , i = e.drawMonth + (n === "M" ? t : 0)
              , s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0)
              , o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r,i,s)));
            e.selectedDay = o.getDate(),
            e.drawMonth = e.selectedMonth = o.getMonth(),
            e.drawYear = e.selectedYear = o.getFullYear(),
            (n === "M" || n === "Y") && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var n = this._getMinMaxDate(e, "min")
              , r = this._getMinMaxDate(e, "max")
              , i = n && t < n ? n : t;
            return r && i > r ? r : i
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e,t,32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e,t,1).getDay()
        },
        _canAdjustMonth: function(e, t, n, r) {
            var i = this._getNumberOfMonths(e)
              , s = this._daylightSavingAdjust(new Date(n,r + (t < 0 ? t : i[0] * i[1]),1));
            return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
            this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var n, r, i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), o = null, u = null, a = this._get(e, "yearRange");
            return a && (n = a.split(":"),
            r = (new Date).getFullYear(),
            o = parseInt(n[0], 10) + r,
            u = parseInt(n[1], 10) + r),
            (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, n, r) {
            t || (e.currentDay = e.selectedDay,
            e.currentMonth = e.selectedMonth,
            e.currentYear = e.selectedYear);
            var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r,n,t)) : this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
        }
    }),
    e.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick),
        e.datepicker.initialized = !0),
        e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);
        var n = Array.prototype.slice.call(arguments, 1);
        return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
            typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
    }
    ,
    e.datepicker = new s,
    e.datepicker.initialized = !1,
    e.datepicker.uuid = (new Date).getTime(),
    e.datepicker.version = "1.10.0",
    window["DP_jQuery_" + r] = e
}
)(jQuery);
(function(e, t) {
    var n = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }
      , r = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    e.widget("ui.dialog", {
        version: "1.10.0",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            this.options.title = this.options.title || this.originalTitle,
            this._createWrapper(),
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && e.fn.draggable && this._makeDraggable(),
            this.options.resizable && e.fn.resizable && this._makeResizable(),
            this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._destroyOverlay(),
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
            this.uiDialog.stop(!0, !0).remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            e = t.parent.children().eq(t.index),
            e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var n = this;
            if (!this._isOpen || this._trigger("beforeClose", t) === !1)
                return;
            this._isOpen = !1,
            this._destroyOverlay(),
            this.opener.filter(":focusable").focus().length || e(this.document[0].activeElement).blur(),
            this._hide(this.uiDialog, this.options.hide, function() {
                n._trigger("close", t)
            })
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(e, t) {
            var n = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return n && !t && this._trigger("focus", e),
            n
        },
        open: function() {
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this.opener = e(this.document[0].activeElement),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this._show(this.uiDialog, this.options.show),
            this._focusTabbable(),
            this._isOpen = !0,
            this._trigger("open"),
            this._trigger("focus")
        },
        _focusTabbable: function() {
            var e = this.element.find("[autofocus]");
            e.length || (e = this.element.find(":tabbable")),
            e.length || (e = this.uiDialogButtonPane.find(":tabbable")),
            e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")),
            e.length || (e = this.uiDialog),
            e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function n() {
                var t = this.document[0].activeElement
                  , n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                n || this._focusTabbable()
            }
            t.preventDefault(),
            n.call(this),
            this._delay(n)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) {
                        t.preventDefault(),
                        this.close(t);
                        return
                    }
                    if (t.keyCode !== e.ui.keyCode.TAB)
                        return;
                    var n = this.uiDialog.find(":tabbable")
                      , r = n.filter(":first")
                      , i = n.filter(":last");
                    t.target !== i[0] && t.target !== this.uiDialog[0] || !!t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (i.focus(1),
                    t.preventDefault()) : (r.focus(1),
                    t.preventDefault())
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }),
            this.uiDialogTitlebarClose = e("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
            this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(),
                    this.close(e)
                }
            }),
            t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
            this._title(t),
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title || e.html("&#160;"),
            e.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
            this._createButtons()
        },
        _createButtons: function() {
            var t = this
              , n = this.options.buttons;
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty();
            if (e.isEmptyObject(n)) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            e.each(n, function(n, r) {
                var i, s;
                r = e.isFunction(r) ? {
                    click: r,
                    text: n
                } : r,
                r = e.extend({
                    type: "button"
                }, r),
                i = r.click,
                r.click = function() {
                    i.apply(t.element[0], arguments)
                }
                ,
                s = {
                    icons: r.icons,
                    text: r.showText
                },
                delete r.icons,
                delete r.showText,
                e("<button></button>", r).button(s).appendTo(t.uiButtonSet)
            }),
            this.uiDialog.addClass("ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            function r(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var t = this
              , n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, i) {
                    e(this).addClass("ui-dialog-dragging"),
                    t._trigger("dragStart", n, r(i))
                },
                drag: function(e, n) {
                    t._trigger("drag", e, r(n))
                },
                stop: function(i, s) {
                    n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()],
                    e(this).removeClass("ui-dialog-dragging"),
                    t._trigger("dragStop", i, r(s))
                }
            })
        },
        _makeResizable: function() {
            function o(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var t = this
              , n = this.options
              , r = n.resizable
              , i = this.uiDialog.css("position")
              , s = typeof r == "string" ? r : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: s,
                start: function(n, r) {
                    e(this).addClass("ui-dialog-resizing"),
                    t._trigger("resizeStart", n, o(r))
                },
                resize: function(e, n) {
                    t._trigger("resize", e, o(n))
                },
                stop: function(r, i) {
                    n.height = e(this).height(),
                    n.width = e(this).width(),
                    e(this).removeClass("ui-dialog-resizing"),
                    t._trigger("resizeStop", r, o(i))
                }
            }).css("position", i)
        },
        _minHeight: function() {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this
              , s = !1
              , o = {};
            e.each(t, function(e, t) {
                i._setOption(e, t),
                e in n && (s = !0),
                e in r && (o[e] = t)
            }),
            s && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(e, t) {
            var n, r, i = this.uiDialog;
            e === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t);
            if (e === "disabled")
                return;
            this._super(e, t),
            e === "appendTo" && this.uiDialog.appendTo(this._appendTo()),
            e === "buttons" && this._createButtons(),
            e === "closeText" && this.uiDialogTitlebarClose.button({
                label: "" + t
            }),
            e === "draggable" && (n = i.is(":data(ui-draggable)"),
            n && !t && i.draggable("destroy"),
            !n && t && this._makeDraggable()),
            e === "position" && this._position(),
            e === "resizable" && (r = i.is(":data(ui-resizable)"),
            r && !t && i.resizable("destroy"),
            r && typeof t == "string" && i.resizable("option", "handles", t),
            !r && t !== !1 && this._makeResizable()),
            e === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
        },
        _size: function() {
            var e, t, n, r = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            r.minWidth > r.width && (r.width = r.minWidth),
            e = this.uiDialog.css({
                height: "auto",
                width: r.width
            }).outerHeight(),
            t = Math.max(0, r.minHeight - e),
            n = typeof r.maxHeight == "number" ? Math.max(0, r.maxHeight - e) : "none",
            r.height === "auto" ? this.element.css({
                minHeight: t,
                maxHeight: n,
                height: "auto"
            }) : this.element.height(Math.max(0, r.height - e)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _createOverlay: function() {
            if (!this.options.modal)
                return;
            e.ui.dialog.overlayInstances || this._delay(function() {
                e.ui.dialog.overlayInstances && this._on(this.document, {
                    focusin: function(t) {
                        e(t.target).closest(".ui-dialog").length || (t.preventDefault(),
                        e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())
                    }
                })
            }),
            this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this.document[0].body),
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            }),
            e.ui.dialog.overlayInstances++
        },
        _destroyOverlay: function() {
            if (!this.options.modal)
                return;
            e.ui.dialog.overlayInstances--,
            e.ui.dialog.overlayInstances || this._off(this.document, "focusin"),
            this.overlay.remove()
        }
    }),
    e.ui.dialog.overlayInstances = 0,
    e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        _position: function() {
            var t = this.options.position, n = [], r = [0, 0], i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0"in t)
                    n = t.split ? t.split(" ") : [t[0], t[1]],
                    n.length === 1 && (n[1] = n[0]),
                    e.each(["left", "top"], function(e, t) {
                        +n[e] === n[e] && (r[e] = n[e],
                        n[e] = t)
                    }),
                    t = {
                        my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                        at: n.join(" ")
                    };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else
                t = e.ui.dialog.prototype.options.position;
            i = this.uiDialog.is(":visible"),
            i || this.uiDialog.show(),
            this.uiDialog.position(t),
            i || this.uiDialog.hide()
        }
    })
}
)(jQuery);
(function(e, t) {
    e.widget("ui.menu", {
        version: "1.10.0",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                this.options.disabled && e.preventDefault()
            }, this)),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(t) {
                    var n = e(t.target).closest(".ui-menu-item");
                    !this.mouseHandled && n.not(".ui-state-disabled").length && (this.mouseHandled = !0,
                    this.select(t),
                    n.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]),
                    this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var n = e(t.currentTarget);
                    n.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(t, n)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var n = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, n)
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    e(t.target).closest(".ui-menu").length || this.collapseAll(t),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            function a(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, r, i, s, o, u = !0;
            switch (t.keyCode) {
            case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case e.ui.keyCode.UP:
                this.previous(t);
                break;
            case e.ui.keyCode.DOWN:
                this.next(t);
                break;
            case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case e.ui.keyCode.ENTER:
            case e.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                u = !1,
                r = this.previousFilter || "",
                i = String.fromCharCode(t.keyCode),
                s = !1,
                clearTimeout(this.filterTimer),
                i === r ? s = !0 : i = r + i,
                o = new RegExp("^" + a(i),"i"),
                n = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return o.test(e(this).children("a").text())
                }),
                n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n,
                n.length || (i = String.fromCharCode(t.keyCode),
                o = new RegExp("^" + a(i),"i"),
                n = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return o.test(e(this).children("a").text())
                })),
                n.length ? (this.focus(t, n),
                n.length > 1 ? (this.previousFilter = i,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            u && t.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, n = this.options.icons.submenu, r = this.element.find(this.options.menus);
            r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this)
                  , r = t.prev("a")
                  , i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                r.attr("aria-haspopup", "true").prepend(i),
                t.attr("aria-labelledby", r.attr("id"))
            }),
            t = r.add(this.element),
            t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            t.children(":not(.ui-menu-item)").each(function() {
                var t = e(this);
                /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }),
            t.children(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            e === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),
            this._super(e, t)
        },
        focus: function(e, t) {
            var n, r;
            this.blur(e, e && e.type === "focus"),
            this._scrollIntoView(t),
            this.active = t.first(),
            r = this.active.children("a").addClass("ui-state-focus"),
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id")),
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
            e && e.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            n = t.children(".ui-menu"),
            n.length && /^mouse/.test(e.type) && this._startOpening(n),
            this.activeMenu = t.parent(),
            this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var n, r, i, s, o, u;
            this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0,
            r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0,
            i = t.offset().top - this.activeMenu.offset().top - n - r,
            s = this.activeMenu.scrollTop(),
            o = this.activeMenu.height(),
            u = t.height(),
            i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer);
            if (!this.active)
                return;
            this.active.children("a").removeClass("ui-state-focus"),
            this.active = null,
            this._trigger("blur", e, {
                item: this.active
            })
        },
        _startOpening: function(e) {
            clearTimeout(this.timer);
            if (e.attr("aria-hidden") !== "true")
                return;
            this.timer = this._delay(function() {
                this._close(),
                this._open(e)
            }, this.delay)
        },
        _open: function(t) {
            var n = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
        },
        collapseAll: function(t, n) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element),
                this._close(r),
                this.blur(t),
                this.activeMenu = r
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element),
            e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
            this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()),
            this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, n) {
            var r;
            this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
            if (!r || !r.length || !this.active)
                r = this.activeMenu.children(".ui-menu-item")[t]();
            this.focus(n, r)
        },
        nextPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isLastItem())
                return;
            this._hasScroll() ? (r = this.active.offset().top,
            i = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return n = e(this),
                n.offset().top - r - i < 0
            }),
            this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
        },
        previousPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isFirstItem())
                return;
            this._hasScroll() ? (r = this.active.offset().top,
            i = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return n = e(this),
                n.offset().top - r + i > 0
            }),
            this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var n = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, n)
        }
    })
}
)(jQuery);
(function(e, t) {
    e.widget("ui.progressbar", {
        version: "1.10.0",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(e) {
            if (e === t)
                return this.options.value;
            this.options.value = this._constrainedValue(e),
            this._refreshValue()
        },
        _constrainedValue: function(e) {
            return e === t && (e = this.options.value),
            this.indeterminate = e === !1,
            typeof e != "number" && (e = 0),
            this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function(e) {
            var t = e.value;
            delete e.value,
            this._super(e),
            this.options.value = this._constrainedValue(t),
            this._refreshValue()
        },
        _setOption: function(e, t) {
            e === "max" && (t = Math.max(this.min, t)),
            this._super(e, t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value
              , n = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(n.toFixed(0) + "%"),
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== t && (this.oldValue = t,
            this._trigger("change")),
            t === this.options.max && this._trigger("complete")
        }
    })
}
)(jQuery);
(function(e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.10.0",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            var t, n, r = this.options, i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"),
            this.range = e([]),
            r.range && (r.range === !0 && (r.values ? r.values.length && r.values.length !== 2 ? r.values = [r.values[0], r.values[0]] : e.isArray(r.values) && (r.values = r.values.slice(0)) : r.values = [this._valueMin(), this._valueMin()]),
            this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (r.range === "min" || r.range === "max" ? " ui-slider-range-" + r.range : ""))),
            n = r.values && r.values.length || 1;
            for (t = i.length; t < n; t++)
                o.push(s);
            this.handles = i.add(e(o.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.add(this.range).filter("a").click(function(e) {
                e.preventDefault()
            }).mouseenter(function() {
                r.disabled || e(this).addClass("ui-state-hover")
            }).mouseleave(function() {
                e(this).removeClass("ui-state-hover")
            }).focus(function() {
                r.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),
                e(this).addClass("ui-state-focus"))
            }).blur(function() {
                e(this).removeClass("ui-state-focus")
            }),
            this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            }),
            this._setOption("disabled", r.disabled),
            this._on(this.handles, this._handleEvents),
            this._refreshValue(),
            this._animateOff = !1
        },
        _destroy: function() {
            this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n, r, i, s, o, u, a, f, l = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            n = {
                x: t.pageX,
                y: t.pageY
            },
            r = this._normValueFromMouse(n),
            i = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(t) {
                var n = Math.abs(r - l.values(t));
                if (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min))
                    i = n,
                    s = e(this),
                    o = t
            }),
            u = this._start(t, o),
            u === !1 ? !1 : (this._mouseSliding = !0,
            this._handleIndex = o,
            s.addClass("ui-state-active").focus(),
            a = s.offset(),
            f = !e(t.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = f ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - s.width() / 2,
                top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, o, r),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }
              , n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n),
            !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(e, this._handleIndex),
            this._change(e, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, n, r, i, s;
            return this.orientation === "horizontal" ? (t = this.elementSize.width,
            n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height,
            n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            r = n / t,
            r > 1 && (r = 1),
            r < 0 && (r = 0),
            this.orientation === "vertical" && (r = 1 - r),
            i = this._valueMax() - this._valueMin(),
            s = this._valueMin() + r * i,
            this._trimAlignValue(s)
        },
        _start: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t),
            n.values = this.values()),
            this._trigger("start", e, n)
        },
        _slide: function(e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1),
            this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r),
            n !== this.values(t) && (i = this.values(),
            i[t] = n,
            s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }),
            r = this.values(t ? 0 : 1),
            s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }),
            s !== !1 && this.value(n))
        },
        _stop: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t),
            n.values = this.values()),
            this._trigger("stop", e, n)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t),
                n.values = this.values()),
                this._lastChangedValue = t,
                this._trigger("change", e, n)
            }
        },
        value: function(e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e),
                this._refreshValue(),
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, n) {
            var r, i, s;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(n),
                this._refreshValue(),
                this._change(null, t);
                return
            }
            if (!arguments.length)
                return this._values();
            if (!e.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values,
            i = arguments[0];
            for (s = 0; s < r.length; s += 1)
                r[s] = this._trimAlignValue(i[s]),
                this._change(null, s);
            this._refreshValue()
        },
        _setOption: function(t, n) {
            var r, i = 0;
            e.isArray(this.options.values) && (i = this.options.values.length),
            e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case "disabled":
                n ? (this.handles.filter(".ui-state-focus").blur(),
                this.handles.removeClass("ui-state-hover"),
                this.handles.prop("disabled", !0)) : this.handles.prop("disabled", !1);
                break;
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                this._animateOff = !0,
                this._refreshValue();
                for (r = 0; r < i; r += 1)
                    this._change(null, r);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e),
            e
        },
        _values: function(e) {
            var t, n, r;
            if (arguments.length)
                return t = this.options.values[e],
                t = this._trimAlignValue(t),
                t;
            n = this.options.values.slice();
            for (r = 0; r < n.length; r += 1)
                n[r] = this._trimAlignValue(n[r]);
            return n
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin())
                return this._valueMin();
            if (e >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1
              , n = (e - this._valueMin()) % t
              , r = e - n;
            return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t),
            parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, n, r, i, s, o = this.options.range, u = this.options, a = this, f = this._animateOff ? !1 : u.animate, l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(r) {
                n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100,
                l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%",
                e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate),
                a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    left: n + "%"
                }, u.animate),
                r === 1 && a.range[f ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    bottom: n + "%"
                }, u.animate),
                r === 1 && a.range[f ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))),
                t = n
            }) : (r = this.value(),
            i = this._valueMin(),
            s = this._valueMax(),
            n = s !== i ? (r - i) / (s - i) * 100 : 0,
            l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%",
            this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate),
            o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                width: n + "%"
            }, u.animate),
            o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }),
            o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                height: n + "%"
            }, u.animate),
            o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                case e.ui.keyCode.HOME:
                case e.ui.keyCode.END:
                case e.ui.keyCode.PAGE_UP:
                case e.ui.keyCode.PAGE_DOWN:
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    t.preventDefault();
                    if (!this._keySliding) {
                        this._keySliding = !0,
                        e(t.target).addClass("ui-state-active"),
                        r = this._start(t, u);
                        if (r === !1)
                            return
                    }
                }
                o = this.options.step,
                this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                switch (t.keyCode) {
                case e.ui.keyCode.HOME:
                    s = this._valueMin();
                    break;
                case e.ui.keyCode.END:
                    s = this._valueMax();
                    break;
                case e.ui.keyCode.PAGE_UP:
                    s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                    if (i === this._valueMax())
                        return;
                    s = this._trimAlignValue(i + o);
                    break;
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (i === this._valueMin())
                        return;
                    s = this._trimAlignValue(i - o)
                }
                this._slide(t, u, s)
            },
            keyup: function(t) {
                var n = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(t, n),
                this._change(t, n),
                e(t.target).removeClass("ui-state-active"))
            }
        }
    })
}
)(jQuery);
(function(e) {
    function t(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments),
            this._refresh(),
            t !== this.element.val() && this._trigger("change")
        }
    }
    e.widget("ui.spinner", {
        version: "1.10.0",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = {}
              , n = this.element;
            return e.each(["min", "max", "step"], function(e, r) {
                var i = n.attr(r);
                i !== undefined && i.length && (t[r] = i)
            }),
            t
        },
        _events: {
            keydown: function(e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(e) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._refresh(),
                this.previous !== this.element.val() && this._trigger("change", e)
            },
            mousewheel: function(e, t) {
                if (!t)
                    return;
                if (!this.spinning && !this._start(e))
                    return !1;
                this._spin((t > 0 ? 1 : -1) * this.options.step, e),
                clearTimeout(this.mousewheelTimer),
                this.mousewheelTimer = this._delay(function() {
                    this.spinning && this._stop(e)
                }, 100),
                e.preventDefault()
            },
            "mousedown .ui-spinner-button": function(t) {
                function r() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(),
                    this.previous = n,
                    this._delay(function() {
                        this.previous = n
                    }))
                }
                var n;
                n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
                t.preventDefault(),
                r.call(this),
                this.cancelBlur = !0,
                this._delay(function() {
                    delete this.cancelBlur,
                    r.call(this)
                });
                if (this._start(t) === !1)
                    return;
                this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (!e(t.currentTarget).hasClass("ui-state-active"))
                    return;
                if (this._start(t) === !1)
                    return !1;
                this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"),
            this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
            this.buttons.height() > Math.ceil(e.height() * .5) && e.height() > 0 && e.height(e.height()),
            this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var n = this.options
              , r = e.ui.keyCode;
            switch (t.keyCode) {
            case r.UP:
                return this._repeat(null, 1, t),
                !0;
            case r.DOWN:
                return this._repeat(null, -1, t),
                !0;
            case r.PAGE_UP:
                return this._repeat(null, n.page, t),
                !0;
            case r.PAGE_DOWN:
                return this._repeat(null, -n.page, t),
                !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>";
        },
        _start: function(e) {
            return !this.spinning && this._trigger("start", e) === !1 ? !1 : (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0)
        },
        _repeat: function(e, t, n) {
            e = e || 500,
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                this._repeat(40, t, n)
            }, e),
            this._spin(t * this.options.step, n)
        },
        _spin: function(e, t) {
            var n = this.value() || 0;
            this.counter || (this.counter = 1),
            n = this._adjustValue(n + e * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", t, {
                value: n
            }) !== !1)
                this._value(n),
                this.counter++
        },
        _increment: function(t) {
            var n = this.options.incremental;
            return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return this.options.min !== null && (e = Math.max(e, this._precisionOf(this.options.min))),
            e
        },
        _precisionOf: function(e) {
            var t = e.toString()
              , n = t.indexOf(".");
            return n === -1 ? 0 : t.length - n - 1
        },
        _adjustValue: function(e) {
            var t, n, r = this.options;
            return t = r.min !== null ? r.min : 0,
            n = e - t,
            n = Math.round(n / r.step) * r.step,
            e = t + n,
            e = parseFloat(e.toFixed(this._precision())),
            r.max !== null && e > r.max ? r.max : r.min !== null && e < r.min ? r.min : e
        },
        _stop: function(e) {
            if (!this.spinning)
                return;
            clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", e)
        },
        _setOption: function(e, t) {
            if (e === "culture" || e === "numberFormat") {
                var n = this._parse(this.element.val());
                this.options[e] = t,
                this.element.val(this._format(n));
                return
            }
            (e === "max" || e === "min" || e === "step") && typeof t == "string" && (t = this._parse(t)),
            e === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),
            this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),
            this._super(e, t),
            e === "disabled" && (t ? (this.element.prop("disabled", !0),
            this.buttons.button("disable")) : (this.element.prop("disabled", !1),
            this.buttons.button("enable")))
        },
        _setOptions: t(function(e) {
            this._super(e),
            this._value(this.element.val())
        }),
        _parse: function(e) {
            return typeof e == "string" && e !== "" && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e),
            e === "" || isNaN(e) ? null : e
        },
        _format: function(e) {
            return e === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(e, t) {
            var n;
            e !== "" && (n = this._parse(e),
            n !== null && (t || (n = this._adjustValue(n)),
            e = this._format(n))),
            this.element.val(e),
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function(e) {
            this._stepUp(e)
        }),
        _stepUp: function(e) {
            this._start() && (this._spin((e || 1) * this.options.step),
            this._stop())
        },
        stepDown: t(function(e) {
            this._stepDown(e)
        }),
        _stepDown: function(e) {
            this._start() && (this._spin((e || 1) * -this.options.step),
            this._stop())
        },
        pageUp: t(function(e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: t(function(e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function(e) {
            if (!arguments.length)
                return this._parse(this.element.val());
            t(this._value).call(this, e)
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}
)(jQuery);
(function(e, t) {
    function i() {
        return ++n
    }
    function s(e) {
        return e.hash.length > 1 && decodeURIComponent(e.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""))
    }
    var n = 0
      , r = /#.*$/;
    e.widget("ui.tabs", {
        version: "1.10.0",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var t = this
              , n = this.options;
            this.running = !1,
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this._processTabs(),
            n.active = this._initialActive(),
            e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return t.tabs.index(e)
            }))).sort()),
            this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(n.active) : this.active = e(),
            this._refresh(),
            this.active.length && this.load(n.active)
        },
        _initialActive: function() {
            var t = this.options.active
              , n = this.options.collapsible
              , r = location.hash.substring(1);
            if (t === null) {
                r && this.tabs.each(function(n, i) {
                    if (e(i).attr("aria-controls") === r)
                        return t = n,
                        !1
                }),
                t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
                if (t === null || t === -1)
                    t = this.tabs.length ? 0 : !1
            }
            return t !== !1 && (t = this.tabs.index(this.tabs.eq(t)),
            t === -1 && (t = n ? !1 : 0)),
            !n && t === !1 && this.anchors.length && (t = 0),
            t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function(t) {
            var n = e(this.document[0].activeElement).closest("li")
              , r = this.tabs.index(n)
              , i = !0;
            if (this._handlePageNav(t))
                return;
            switch (t.keyCode) {
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
                r++;
                break;
            case e.ui.keyCode.UP:
            case e.ui.keyCode.LEFT:
                i = !1,
                r--;
                break;
            case e.ui.keyCode.END:
                r = this.anchors.length - 1;
                break;
            case e.ui.keyCode.HOME:
                r = 0;
                break;
            case e.ui.keyCode.SPACE:
                t.preventDefault(),
                clearTimeout(this.activating),
                this._activate(r);
                return;
            case e.ui.keyCode.ENTER:
                t.preventDefault(),
                clearTimeout(this.activating),
                this._activate(r === this.options.active ? !1 : r);
                return;
            default:
                return
            }
            t.preventDefault(),
            clearTimeout(this.activating),
            r = this._focusNextTab(r, i),
            t.ctrlKey || (n.attr("aria-selected", "false"),
            this.tabs.eq(r).attr("aria-selected", "true"),
            this.activating = this._delay(function() {
                this.option("active", r)
            }, this.delay))
        },
        _panelKeydown: function(t) {
            if (this._handlePageNav(t))
                return;
            t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(),
            this.active.focus())
        },
        _handlePageNav: function(t) {
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP)
                return this._activate(this._focusNextTab(this.options.active - 1, !1)),
                !0;
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN)
                return this._activate(this._focusNextTab(this.options.active + 1, !0)),
                !0
        },
        _findNextTab: function(t, n) {
            function i() {
                return t > r && (t = 0),
                t < 0 && (t = r),
                t
            }
            var r = this.tabs.length - 1;
            while (e.inArray(i(), this.options.disabled) !== -1)
                t = n ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) {
            return e = this._findNextTab(e, t),
            this.tabs.eq(e).focus(),
            e
        },
        _setOption: function(e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            if (e === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(e, t),
            e === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t),
            !t && this.options.active === !1 && this._activate(0)),
            e === "event" && this._setupEvents(t),
            e === "heightStyle" && this._setupHeightStyle(t)
        },
        _tabId: function(e) {
            return e.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options
              , n = this.tablist.children(":has(a[href])");
            t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) {
                return n.index(e)
            }),
            this._processTabs(),
            t.active === !1 || !this.anchors.length ? (t.active = !1,
            this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1,
            this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active),
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }),
            this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }),
            this.anchors = this.tabs.map(function() {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }),
            this.panels = e(),
            this.anchors.each(function(n, r) {
                var i, o, u, a = e(r).uniqueId().attr("id"), f = e(r).closest("li"), l = f.attr("aria-controls");
                s(r) ? (i = r.hash,
                o = t.element.find(t._sanitizeSelector(i))) : (u = t._tabId(f),
                i = "#" + u,
                o = t.element.find(i),
                o.length || (o = t._createPanel(u),
                o.insertAfter(t.panels[n - 1] || t.tablist)),
                o.attr("aria-live", "polite")),
                o.length && (t.panels = t.panels.add(o)),
                l && f.data("ui-tabs-aria-controls", l),
                f.attr({
                    "aria-controls": i.substring(1),
                    "aria-labelledby": a
                }),
                o.attr("aria-labelledby", a)
            }),
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var n = 0, r; r = this.tabs[n]; n++)
                t === !0 || e.inArray(n, t) !== -1 ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var n = {
                click: function(e) {
                    e.preventDefault()
                }
            };
            t && e.each(t.split(" "), function(e, t) {
                n[t] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(this.anchors, n),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var n, r = this.element.parent();
            t === "fill" ? (n = r.height(),
            n -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var t = e(this)
                  , r = t.css("position");
                if (r === "absolute" || r === "fixed")
                    return;
                n -= t.outerHeight(!0)
            }),
            this.element.children().not(this.panels).each(function() {
                n -= e(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (n = 0,
            this.panels.each(function() {
                n = Math.max(n, e(this).height("").height())
            }).height(n))
        },
        _eventHandler: function(t) {
            var n = this.options
              , r = this.active
              , i = e(t.currentTarget)
              , s = i.closest("li")
              , o = s[0] === r[0]
              , u = o && n.collapsible
              , a = u ? e() : this._getPanelForTab(s)
              , f = r.length ? this._getPanelForTab(r) : e()
              , l = {
                oldTab: r,
                oldPanel: f,
                newTab: u ? e() : s,
                newPanel: a
            };
            t.preventDefault();
            if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1)
                return;
            n.active = u ? !1 : this.tabs.index(s),
            this.active = o ? e() : s,
            this.xhr && this.xhr.abort(),
            !f.length && !a.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."),
            a.length && this.load(this.tabs.index(s), t),
            this._toggle(t, l)
        },
        _toggle: function(t, n) {
            function o() {
                r.running = !1,
                r._trigger("activate", t, n)
            }
            function u() {
                n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                i.length && r.options.show ? r._show(i, r.options.show, o) : (i.show(),
                o())
            }
            var r = this
              , i = n.newPanel
              , s = n.oldPanel;
            this.running = !0,
            s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
                n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                u()
            }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
            s.hide(),
            u()),
            s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            n.oldTab.attr("aria-selected", "false"),
            i.length && s.length ? n.oldTab.attr("tabIndex", -1) : i.length && this.tabs.filter(function() {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1),
            i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }),
            n.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var n, r = this._findActive(t);
            if (r[0] === this.active[0])
                return;
            r.length || (r = this.active),
            n = r.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function(t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function(e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))),
            e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }),
            this.tabs.each(function() {
                var t = e(this)
                  , n = t.data("ui-tabs-aria-controls");
                n ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }),
            this.panels.show(),
            this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function(n) {
            var r = this.options.disabled;
            if (r === !1)
                return;
            n === t ? r = !1 : (n = this._getIndex(n),
            e.isArray(r) ? r = e.map(r, function(e) {
                return e !== n ? e : null
            }) : r = e.map(this.tabs, function(e, t) {
                return t !== n ? t : null
            })),
            this._setupDisabled(r)
        },
        disable: function(n) {
            var r = this.options.disabled;
            if (r === !0)
                return;
            if (n === t)
                r = !0;
            else {
                n = this._getIndex(n);
                if (e.inArray(n, r) !== -1)
                    return;
                e.isArray(r) ? r = e.merge([n], r).sort() : r = [n]
            }
            this._setupDisabled(r)
        },
        load: function(t, n) {
            t = this._getIndex(t);
            var r = this
              , i = this.tabs.eq(t)
              , o = i.find(".ui-tabs-anchor")
              , u = this._getPanelForTab(i)
              , a = {
                tab: i,
                panel: u
            };
            if (s(o[0]))
                return;
            this.xhr = e.ajax(this._ajaxSettings(o, n, a)),
            this.xhr && this.xhr.statusText !== "canceled" && (i.addClass("ui-tabs-loading"),
            u.attr("aria-busy", "true"),
            this.xhr.success(function(e) {
                setTimeout(function() {
                    u.html(e),
                    r._trigger("load", n, a)
                }, 1)
            }).complete(function(e, t) {
                setTimeout(function() {
                    t === "abort" && r.panels.stop(!1, !0),
                    i.removeClass("ui-tabs-loading"),
                    u.removeAttr("aria-busy"),
                    e === r.xhr && delete r.xhr
                }, 1)
            }))
        },
        _ajaxSettings: function(t, n, r) {
            var i = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, s) {
                    return i._trigger("beforeLoad", n, e.extend({
                        jqXHR: t,
                        ajaxSettings: s
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    })
}
)(jQuery);
(function(e) {
    function n(t, n) {
        var r = (t.attr("aria-describedby") || "").split(/\s+/);
        r.push(n),
        t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
    }
    function r(t) {
        var n = t.data("ui-tooltip-id")
          , r = (t.attr("aria-describedby") || "").split(/\s+/)
          , i = e.inArray(n, r);
        i !== -1 && r.splice(i, 1),
        t.removeData("ui-tooltip-id"),
        r = e.trim(r.join(" ")),
        r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby")
    }
    var t = 0;
    e.widget("ui.tooltip", {
        version: "1.10.0",
        options: {
            content: function() {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.options.disabled && this._disable()
        },
        _setOption: function(t, n) {
            var r = this;
            if (t === "disabled") {
                this[n ? "_disable" : "_enable"](),
                this.options[t] = n;
                return
            }
            this._super(t, n),
            t === "content" && e.each(this.tooltips, function(e, t) {
                r._updateContent(t)
            })
        },
        _disable: function() {
            var t = this;
            e.each(this.tooltips, function(n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0],
                t.close(i, !0)
            }),
            this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var n = this
              , r = e(t ? t.target : this.element).closest(this.options.items);
            if (!r.length || r.data("ui-tooltip-id"))
                return;
            r.attr("title") && r.data("ui-tooltip-title", r.attr("title")),
            r.data("ui-tooltip-open", !0),
            t && t.type === "mouseover" && r.parents().each(function() {
                var t = e(this), r;
                t.data("ui-tooltip-open") && (r = e.Event("blur"),
                r.target = r.currentTarget = this,
                n.close(r, !0)),
                t.attr("title") && (t.uniqueId(),
                n.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                },
                t.attr("title", ""))
            }),
            this._updateContent(r, t)
        },
        _updateContent: function(e, t) {
            var n, r = this.options.content, i = this, s = t ? t.type : null;
            if (typeof r == "string")
                return this._open(t, e, r);
            n = r.call(e[0], function(n) {
                if (!e.data("ui-tooltip-open"))
                    return;
                i._delay(function() {
                    t && (t.type = s),
                    this._open(t, e, n)
                })
            }),
            n && this._open(t, e, n)
        },
        _open: function(t, r, i) {
            function f(e) {
                a.of = e;
                if (s.is(":hidden"))
                    return;
                s.position(a)
            }
            var s, o, u, a = e.extend({}, this.options.position);
            if (!i)
                return;
            s = this._find(r);
            if (s.length) {
                s.find(".ui-tooltip-content").html(i);
                return
            }
            r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title")),
            s = this._tooltip(r),
            n(r, s.attr("id")),
            s.find(".ui-tooltip-content").html(i),
            this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                mousemove: f
            }),
            f(t)) : s.position(e.extend({
                of: r
            }, this.options.position)),
            s.hide(),
            this._show(s, this.options.show),
            this.options.show && this.options.show.delay && (u = this.delayedShow = setInterval(function() {
                s.is(":visible") && (f(a.of),
                clearInterval(u))
            }, e.fx.interval)),
            this._trigger("open", t, {
                tooltip: s
            }),
            o = {
                keyup: function(t) {
                    if (t.keyCode === e.ui.keyCode.ESCAPE) {
                        var n = e.Event(t);
                        n.currentTarget = r[0],
                        this.close(n, !0)
                    }
                },
                remove: function() {
                    this._removeTooltip(s)
                }
            };
            if (!t || t.type === "mouseover")
                o.mouseleave = "close";
            if (!t || t.type === "focusin")
                o.focusout = "close";
            this._on(!0, r, o)
        },
        close: function(t) {
            var n = this
              , i = e(t ? t.currentTarget : this.element)
              , s = this._find(i);
            if (this.closing)
                return;
            clearInterval(this.delayedShow),
            i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")),
            r(i),
            s.stop(!0),
            this._hide(s, this.options.hide, function() {
                n._removeTooltip(e(this))
            }),
            i.removeData("ui-tooltip-open"),
            this._off(i, "mouseleave focusout keyup"),
            i[0] !== this.element[0] && this._off(i, "remove"),
            this._off(this.document, "mousemove"),
            t && t.type === "mouseleave" && e.each(this.parents, function(t, r) {
                e(r.element).attr("title", r.title),
                delete n.parents[t]
            }),
            this.closing = !0,
            this._trigger("close", t, {
                tooltip: s
            }),
            this.closing = !1
        },
        _tooltip: function(n) {
            var r = "ui-tooltip-" + t++
              , i = e("<div>").attr({
                id: r,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return e("<div>").addClass("ui-tooltip-content").appendTo(i),
            i.appendTo(this.document[0].body),
            this.tooltips[r] = n,
            i
        },
        _find: function(t) {
            var n = t.data("ui-tooltip-id");
            return n ? e("#" + n) : e()
        },
        _removeTooltip: function(e) {
            e.remove(),
            delete this.tooltips[e.attr("id")]
        },
        _destroy: function() {
            var t = this;
            e.each(this.tooltips, function(n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0],
                t.close(i, !0),
                e("#" + n).remove(),
                r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")),
                r.removeData("ui-tooltip-title"))
            })
        }
    })
}
)(jQuery);
jQuery.effects || function(e, t) {
    var n = "ui-effects-";
    e.effects = {
        effect: {}
    },
    function(e, t) {
        function h(e, t, n) {
            var r = u[t.type] || {};
            return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e),
            isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }
        function p(t) {
            var n = s()
              , r = n._rgba = [];
            return t = t.toLowerCase(),
            c(i, function(e, i) {
                var s, u = i.re.exec(t), a = u && i.parse(u), f = i.space || "rgba";
                if (a)
                    return s = n[f](a),
                    n[o[f].cache] = s[o[f].cache],
                    r = n._rgba = s._rgba,
                    !1
            }),
            r.length ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent),
            n) : l[t]
        }
        function d(e, t, n) {
            return n = (n + 1) % 1,
            n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, i = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], s = e.Color = function(t, n, r, i) {
            return new e.Color.fn.parse(t,n,r,i)
        }
        , o = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, a = s.support = {}, f = e("<p>")[0], l, c = e.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)",
        a.rgba = f.style.backgroundColor.indexOf("rgba") > -1,
        c(o, function(e, t) {
            t.cache = "_" + e,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        s.fn = e.extend(s.prototype, {
            parse: function(n, r, i, u) {
                if (n === t)
                    return this._rgba = [null, null, null, null],
                    this;
                if (n.jquery || n.nodeType)
                    n = e(n).css(r),
                    r = t;
                var a = this
                  , f = e.type(n)
                  , d = this._rgba = [];
                r !== t && (n = [n, r, i, u],
                f = "array");
                if (f === "string")
                    return this.parse(p(n) || l._default);
                if (f === "array")
                    return c(o.rgba.props, function(e, t) {
                        d[t.idx] = h(n[t.idx], t)
                    }),
                    this;
                if (f === "object")
                    return n instanceof s ? c(o, function(e, t) {
                        n[t.cache] && (a[t.cache] = n[t.cache].slice())
                    }) : c(o, function(t, r) {
                        var i = r.cache;
                        c(r.props, function(e, t) {
                            if (!a[i] && r.to) {
                                if (e === "alpha" || n[e] == null)
                                    return;
                                a[i] = r.to(a._rgba)
                            }
                            a[i][t.idx] = h(n[e], t, !0)
                        }),
                        a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1,
                        r.from && (a._rgba = r.from(a[i])))
                    }),
                    this
            },
            is: function(e) {
                var t = s(e)
                  , n = !0
                  , r = this;
                return c(o, function(e, i) {
                    var s, o = t[i.cache];
                    return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [],
                    c(i.props, function(e, t) {
                        if (o[t.idx] != null)
                            return n = o[t.idx] === s[t.idx],
                            n
                    })),
                    n
                }),
                n
            },
            _space: function() {
                var e = []
                  , t = this;
                return c(o, function(n, r) {
                    t[r.cache] && e.push(n)
                }),
                e.pop()
            },
            transition: function(e, t) {
                var n = s(e)
                  , r = n._space()
                  , i = o[r]
                  , a = this.alpha() === 0 ? s("transparent") : this
                  , f = a[i.cache] || i.to(a._rgba)
                  , l = f.slice();
                return n = n[i.cache],
                c(i.props, function(e, r) {
                    var i = r.idx
                      , s = f[i]
                      , o = n[i]
                      , a = u[r.type] || {};
                    if (o === null)
                        return;
                    s === null ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)),
                    l[i] = h((o - s) * t + s, r))
                }),
                this[r](l)
            },
            blend: function(t) {
                if (this._rgba[3] === 1)
                    return this;
                var n = this._rgba.slice()
                  , r = n.pop()
                  , i = s(t)._rgba;
                return s(e.map(n, function(e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function() {
                var t = "rgba("
                  , n = e.map(this._rgba, function(e, t) {
                    return e == null ? t > 2 ? 1 : 0 : e
                });
                return n[3] === 1 && (n.pop(),
                t = "rgb("),
                t + n.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla("
                  , n = e.map(this.hsla(), function(e, t) {
                    return e == null && (e = t > 2 ? 1 : 0),
                    t && t < 3 && (e = Math.round(e * 100) + "%"),
                    e
                });
                return n[3] === 1 && (n.pop(),
                t = "hsl("),
                t + n.join() + ")"
            },
            toHexString: function(t) {
                var n = this._rgba.slice()
                  , r = n.pop();
                return t && n.push(~~(r * 255)),
                "#" + e.map(n, function(e) {
                    return e = (e || 0).toString(16),
                    e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }),
        s.fn.parse.prototype = s.fn,
        o.hsla.to = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null)
                return [null, null, null, e[3]];
            var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3], s = Math.max(t, n, r), o = Math.min(t, n, r), u = s - o, a = s + o, f = a * .5, l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240,
            u === 0 ? c = 0 : f <= .5 ? c = u / a : c = u / (2 - a),
            [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }
        ,
        o.hsla.from = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null)
                return [null, null, null, e[3]];
            var t = e[0] / 360
              , n = e[1]
              , r = e[2]
              , i = e[3]
              , s = r <= .5 ? r * (1 + n) : r + n - r * n
              , o = 2 * r - s;
            return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i]
        }
        ,
        c(o, function(n, i) {
            var o = i.props
              , u = i.cache
              , a = i.to
              , f = i.from;
            s.fn[n] = function(n) {
                a && !this[u] && (this[u] = a(this._rgba));
                if (n === t)
                    return this[u].slice();
                var r, i = e.type(n), l = i === "array" || i === "object" ? n : arguments, p = this[u].slice();
                return c(o, function(e, t) {
                    var n = l[i === "object" ? e : t.idx];
                    n == null && (n = p[t.idx]),
                    p[t.idx] = h(n, t)
                }),
                f ? (r = s(f(p)),
                r[u] = p,
                r) : s(p)
            }
            ,
            c(o, function(t, i) {
                if (s.fn[t])
                    return;
                s.fn[t] = function(s) {
                    var o = e.type(s), u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n, a = this[u](), f = a[i.idx], l;
                    return o === "undefined" ? f : (o === "function" && (s = s.call(this, f),
                    o = e.type(s)),
                    s == null && i.empty ? this : (o === "string" && (l = r.exec(s),
                    l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))),
                    a[i.idx] = s,
                    this[u](a)))
                }
            })
        }),
        s.hook = function(t) {
            var n = t.split(" ");
            c(n, function(t, n) {
                e.cssHooks[n] = {
                    set: function(t, r) {
                        var i, o, u = "";
                        if (r !== "transparent" && (e.type(r) !== "string" || (i = p(r)))) {
                            r = s(i || r);
                            if (!a.rgba && r._rgba[3] !== 1) {
                                o = n === "backgroundColor" ? t.parentNode : t;
                                while ((u === "" || u === "transparent") && o && o.style)
                                    try {
                                        u = e.css(o, "backgroundColor"),
                                        o = o.parentNode
                                    } catch (f) {}
                                r = r.blend(u && u !== "transparent" ? u : "_default")
                            }
                            r = r.toRgbaString()
                        }
                        try {
                            t.style[n] = r
                        } catch (f) {}
                    }
                },
                e.fx.step[n] = function(t) {
                    t.colorInit || (t.start = s(t.elem, n),
                    t.end = s(t.end),
                    t.colorInit = !0),
                    e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }
        ,
        s.hook(n),
        e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return c(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    t["border" + r + "Color"] = e
                }),
                t
            }
        },
        l = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function() {
        function i(t) {
            var n, r, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, s = {};
            if (i && i.length && i[0] && i[i[0]]) {
                r = i.length;
                while (r--)
                    n = i[r],
                    typeof i[n] == "string" && (s[e.camelCase(n)] = i[n])
            } else
                for (n in i)
                    typeof i[n] == "string" && (s[n] = i[n]);
            return s
        }
        function s(t, n) {
            var i = {}, s, o;
            for (s in n)
                o = n[s],
                t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
            return i
        }
        var n = ["add", "remove", "toggle"]
          , r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
            e.fx.step[n] = function(e) {
                if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr)
                    jQuery.style(e.elem, n, e.end),
                    e.setAttr = !0
            }
        }),
        e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
        ),
        e.effects.animateClass = function(t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function() {
                var r = e(this), o = r.attr("class") || "", u, f = a.children ? r.find("*").addBack() : r;
                f = f.map(function() {
                    var t = e(this);
                    return {
                        el: t,
                        start: i(this)
                    }
                }),
                u = function() {
                    e.each(n, function(e, n) {
                        t[n] && r[n + "Class"](t[n])
                    })
                }
                ,
                u(),
                f = f.map(function() {
                    return this.end = i(this.el[0]),
                    this.diff = s(this.start, this.end),
                    this
                }),
                r.attr("class", o),
                f = f.map(function() {
                    var t = this
                      , n = e.Deferred()
                      , r = e.extend({}, a, {
                        queue: !1,
                        complete: function() {
                            n.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, r),
                    n.promise()
                }),
                e.when.apply(e, f.get()).done(function() {
                    u(),
                    e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }),
                    a.complete.call(r[0])
                })
            })
        }
        ,
        e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function(t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    add: t
                }, n, r, i) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function(t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    remove: t
                }, n, r, i) : this._removeClass(t)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function(n, r, i, s, o) {
                return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                    add: n
                } : {
                    remove: n
                }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                    toggle: n
                }, r, i, s)
            },
            switchClass: function(t, n, r, i, s) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, r, i, s)
            }
        })
    }(),
    function() {
        function r(t, n, r, i) {
            e.isPlainObject(t) && (n = t,
            t = t.effect),
            t = {
                effect: t
            },
            n == null && (n = {}),
            e.isFunction(n) && (i = n,
            r = null,
            n = {});
            if (typeof n == "number" || e.fx.speeds[n])
                i = r,
                r = n,
                n = {};
            return e.isFunction(r) && (i = r,
            r = null),
            n && e.extend(t, n),
            r = r || n.duration,
            t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default,
            t.complete = i || n.complete,
            t
        }
        function i(t) {
            return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t]
        }
        e.extend(e.effects, {
            version: "1.10.0",
            save: function(e, t) {
                for (var r = 0; r < t.length; r++)
                    t[r] !== null && e.data(n + t[r], e[0].style[t[r]])
            },
            restore: function(e, r) {
                var i, s;
                for (s = 0; s < r.length; s++)
                    r[s] !== null && (i = e.data(n + r[s]),
                    i === t && (i = ""),
                    e.css(r[s], i))
            },
            setMode: function(e, t) {
                return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"),
                t
            },
            getBaseline: function(e, t) {
                var n, r;
                switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    float: t.css("float")
                }
                  , r = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , i = {
                    width: t.width(),
                    height: t.height()
                }
                  , s = document.activeElement;
                try {
                    s.id
                } catch (o) {
                    s = document.body
                }
                return t.wrap(r),
                (t[0] === s || e.contains(t[0], s)) && e(s).focus(),
                r = t.parent(),
                t.css("position") === "static" ? (r.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                e.each(["top", "left", "bottom", "right"], function(e, r) {
                    n[r] = t.css(r),
                    isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(i),
                r.css(n).show()
            },
            removeWrapper: function(t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === n || e.contains(t[0], n)) && e(n).focus()),
                t
            },
            setTransition: function(t, n, r, i) {
                return i = i || {},
                e.each(n, function(e, n) {
                    var s = t.cssUnit(n);
                    s[0] > 0 && (i[n] = s[0] * r + s[1])
                }),
                i
            }
        }),
        e.fn.extend({
            effect: function() {
                function o(n) {
                    function u() {
                        e.isFunction(i) && i.call(r[0]),
                        e.isFunction(n) && n()
                    }
                    var r = e(this)
                      , i = t.complete
                      , o = t.mode;
                    (r.is(":hidden") ? o === "hide" : o === "show") ? u() : s.call(r[0], t, u)
                }
                var t = r.apply(this, arguments)
                  , n = t.mode
                  , i = t.queue
                  , s = e.effects.effect[t.effect];
                return e.fx.off || !s ? n ? this[n](t.duration, t.complete) : this.each(function() {
                    t.complete && t.complete.call(this)
                }) : i === !1 ? this.each(o) : this.queue(i || "fx", o)
            },
            _show: e.fn.show,
            show: function(e) {
                if (i(e))
                    return this._show.apply(this, arguments);
                var t = r.apply(this, arguments);
                return t.mode = "show",
                this.effect.call(this, t)
            },
            _hide: e.fn.hide,
            hide: function(e) {
                if (i(e))
                    return this._hide.apply(this, arguments);
                var t = r.apply(this, arguments);
                return t.mode = "hide",
                this.effect.call(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function(t) {
                if (i(t) || typeof t == "boolean" || e.isFunction(t))
                    return this.__toggle.apply(this, arguments);
                var n = r.apply(this, arguments);
                return n.mode = "toggle",
                this.effect.call(this, n)
            },
            cssUnit: function(t) {
                var n = this.css(t)
                  , r = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }),
                r
            }
        })
    }(),
    function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
            t[n] = function(t) {
                return Math.pow(t, e + 2)
            }
        }),
        e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                var t, n = 4;
                while (e < ((t = Math.pow(2, --n)) - 1) / 11)
                    ;
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
            }
        }),
        e.each(t, function(t, n) {
            e.easing["easeIn" + t] = n,
            e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e)
            }
            ,
            e.easing["easeInOut" + t] = function(e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
            }
        })
    }()
}(jQuery);
(function(e, t) {
    var n = /up|down|vertical/
      , r = /up|left|vertical|horizontal/;
    e.effects.effect.blind = function(t, i) {
        var s = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], u = e.effects.setMode(s, t.mode || "hide"), a = t.direction || "up", f = n.test(a), l = f ? "height" : "width", c = f ? "top" : "left", h = r.test(a), p = {}, d = u === "show", v, m, g;
        s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), o) : e.effects.save(s, o),
        s.show(),
        v = e.effects.createWrapper(s).css({
            overflow: "hidden"
        }),
        m = v[l](),
        g = parseFloat(v.css(c)) || 0,
        p[l] = d ? m : 0,
        h || (s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
            position: "absolute"
        }),
        p[c] = d ? g : m + g),
        d && (v.css(l, 0),
        h || v.css(c, g + m)),
        v.animate(p, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                u === "hide" && s.hide(),
                e.effects.restore(s, o),
                e.effects.removeWrapper(s),
                i()
            }
        })
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.bounce = function(t, n) {
        var r = e(this), i = ["position", "top", "bottom", "left", "right", "height", "width"], s = e.effects.setMode(r, t.mode || "effect"), o = s === "hide", u = s === "show", a = t.direction || "up", f = t.distance, l = t.times || 5, c = l * 2 + (u || o ? 1 : 0), h = t.duration / c, p = t.easing, d = a === "up" || a === "down" ? "top" : "left", v = a === "up" || a === "left", m, g, y, b = r.queue(), w = b.length;
        (u || o) && i.push("opacity"),
        e.effects.save(r, i),
        r.show(),
        e.effects.createWrapper(r),
        f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3),
        u && (y = {
            opacity: 1
        },
        y[d] = 0,
        r.css("opacity", 0).css(d, v ? -f * 2 : f * 2).animate(y, h, p)),
        o && (f /= Math.pow(2, l - 1)),
        y = {},
        y[d] = 0;
        for (m = 0; m < l; m++)
            g = {},
            g[d] = (v ? "-=" : "+=") + f,
            r.animate(g, h, p).animate(y, h, p),
            f = o ? f * 2 : f / 2;
        o && (g = {
            opacity: 0
        },
        g[d] = (v ? "-=" : "+=") + f,
        r.animate(g, h, p)),
        r.queue(function() {
            o && r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n()
        }),
        w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))),
        r.dequeue()
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.clip = function(t, n) {
        var r = e(this), i = ["position", "top", "bottom", "left", "right", "height", "width"], s = e.effects.setMode(r, t.mode || "hide"), o = s === "show", u = t.direction || "vertical", a = u === "vertical", f = a ? "height" : "width", l = a ? "top" : "left", c = {}, h, p, d;
        e.effects.save(r, i),
        r.show(),
        h = e.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        p = r[0].tagName === "IMG" ? h : r,
        d = p[f](),
        o && (p.css(f, 0),
        p.css(l, d / 2)),
        c[f] = o ? d : 0,
        c[l] = o ? 0 : d / 2,
        p.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                o || r.hide(),
                e.effects.restore(r, i),
                e.effects.removeWrapper(r),
                n()
            }
        })
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.drop = function(t, n) {
        var r = e(this), i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], s = e.effects.setMode(r, t.mode || "hide"), o = s === "show", u = t.direction || "left", a = u === "up" || u === "down" ? "top" : "left", f = u === "up" || u === "left" ? "pos" : "neg", l = {
            opacity: o ? 1 : 0
        }, c;
        e.effects.save(r, i),
        r.show(),
        e.effects.createWrapper(r),
        c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2,
        o && r.css("opacity", 0).css(a, f === "pos" ? -c : c),
        l[a] = (o ? f === "pos" ? "+=" : "-=" : f === "pos" ? "-=" : "+=") + c,
        r.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(),
                e.effects.restore(r, i),
                e.effects.removeWrapper(r),
                n()
            }
        })
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.explode = function(t, n) {
        function y() {
            c.push(this),
            c.length === r * i && b()
        }
        function b() {
            s.css({
                visibility: "visible"
            }),
            e(c).remove(),
            u || s.hide(),
            n()
        }
        var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, i = r, s = e(this), o = e.effects.setMode(s, t.mode || "hide"), u = o === "show", a = s.show().css("visibility", "hidden").offset(), f = Math.ceil(s.outerWidth() / i), l = Math.ceil(s.outerHeight() / r), c = [], h, p, d, v, m, g;
        for (h = 0; h < r; h++) {
            v = a.top + h * l,
            g = h - (r - 1) / 2;
            for (p = 0; p < i; p++)
                d = a.left + p * f,
                m = p - (i - 1) / 2,
                s.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -p * f,
                    top: -h * l
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: f,
                    height: l,
                    left: d + (u ? m * f : 0),
                    top: v + (u ? g * l : 0),
                    opacity: u ? 0 : 1
                }).animate({
                    left: d + (u ? 0 : m * f),
                    top: v + (u ? 0 : g * l),
                    opacity: u ? 1 : 0
                }, t.duration || 500, t.easing, y)
        }
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.fade = function(t, n) {
        var r = e(this)
          , i = e.effects.setMode(r, t.mode || "toggle");
        r.animate({
            opacity: i
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.fold = function(t, n) {
        var r = e(this), i = ["position", "top", "bottom", "left", "right", "height", "width"], s = e.effects.setMode(r, t.mode || "hide"), o = s === "show", u = s === "hide", a = t.size || 15, f = /([0-9]+)%/.exec(a), l = !!t.horizFirst, c = o !== l, h = c ? ["width", "height"] : ["height", "width"], p = t.duration / 2, d, v, m = {}, g = {};
        e.effects.save(r, i),
        r.show(),
        d = e.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        v = c ? [d.width(), d.height()] : [d.height(), d.width()],
        f && (a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]),
        o && d.css(l ? {
            height: 0,
            width: a
        } : {
            height: a,
            width: 0
        }),
        m[h[0]] = o ? v[0] : a,
        g[h[1]] = o ? v[1] : 0,
        d.animate(m, p, t.easing).animate(g, p, t.easing, function() {
            u && r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n()
        })
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.highlight = function(t, n) {
        var r = e(this)
          , i = ["backgroundImage", "backgroundColor", "opacity"]
          , s = e.effects.setMode(r, t.mode || "show")
          , o = {
            backgroundColor: r.css("backgroundColor")
        };
        s === "hide" && (o.opacity = 0),
        e.effects.save(r, i),
        r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(),
                e.effects.restore(r, i),
                n()
            }
        })
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.pulsate = function(t, n) {
        var r = e(this), i = e.effects.setMode(r, t.mode || "show"), s = i === "show", o = i === "hide", u = s || i === "hide", a = (t.times || 5) * 2 + (u ? 1 : 0), f = t.duration / a, l = 0, c = r.queue(), h = c.length, p;
        if (s || !r.is(":visible"))
            r.css("opacity", 0).show(),
            l = 1;
        for (p = 1; p < a; p++)
            r.animate({
                opacity: l
            }, f, t.easing),
            l = 1 - l;
        r.animate({
            opacity: l
        }, f, t.easing),
        r.queue(function() {
            o && r.hide(),
            n()
        }),
        h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))),
        r.dequeue()
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.puff = function(t, n) {
        var r = e(this)
          , i = e.effects.setMode(r, t.mode || "hide")
          , s = i === "hide"
          , o = parseInt(t.percent, 10) || 150
          , u = o / 100
          , a = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        };
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: i,
            complete: n,
            percent: s ? o : 100,
            from: s ? a : {
                height: a.height * u,
                width: a.width * u,
                outerHeight: a.outerHeight * u,
                outerWidth: a.outerWidth * u
            }
        }),
        r.effect(t)
    }
    ,
    e.effects.effect.scale = function(t, n) {
        var r = e(this)
          , i = e.extend(!0, {}, t)
          , s = e.effects.setMode(r, t.mode || "effect")
          , o = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100)
          , u = t.direction || "both"
          , a = t.origin
          , f = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        }
          , l = {
            y: u !== "horizontal" ? o / 100 : 1,
            x: u !== "vertical" ? o / 100 : 1
        };
        i.effect = "size",
        i.queue = !1,
        i.complete = n,
        s !== "effect" && (i.origin = a || ["middle", "center"],
        i.restore = !0),
        i.from = t.from || (s === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : f),
        i.to = {
            height: f.height * l.y,
            width: f.width * l.x,
            outerHeight: f.outerHeight * l.y,
            outerWidth: f.outerWidth * l.x
        },
        i.fade && (s === "show" && (i.from.opacity = 0,
        i.to.opacity = 1),
        s === "hide" && (i.from.opacity = 1,
        i.to.opacity = 0)),
        r.effect(i)
    }
    ,
    e.effects.effect.size = function(t, n) {
        var r, i, s, o = e(this), u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], f = ["width", "height", "overflow"], l = ["fontSize"], c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = e.effects.setMode(o, t.mode || "effect"), d = t.restore || p !== "effect", v = t.scale || "both", m = t.origin || ["middle", "center"], g = o.css("position"), y = d ? u : a, b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        p === "show" && o.show(),
        r = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        },
        t.mode === "toggle" && p === "show" ? (o.from = t.to || b,
        o.to = t.from || r) : (o.from = t.from || (p === "show" ? b : r),
        o.to = t.to || (p === "hide" ? b : r)),
        s = {
            from: {
                y: o.from.height / r.height,
                x: o.from.width / r.width
            },
            to: {
                y: o.to.height / r.height,
                x: o.to.width / r.width
            }
        };
        if (v === "box" || v === "both")
            s.from.y !== s.to.y && (y = y.concat(c),
            o.from = e.effects.setTransition(o, c, s.from.y, o.from),
            o.to = e.effects.setTransition(o, c, s.to.y, o.to)),
            s.from.x !== s.to.x && (y = y.concat(h),
            o.from = e.effects.setTransition(o, h, s.from.x, o.from),
            o.to = e.effects.setTransition(o, h, s.to.x, o.to));
        (v === "content" || v === "both") && s.from.y !== s.to.y && (y = y.concat(l).concat(f),
        o.from = e.effects.setTransition(o, l, s.from.y, o.from),
        o.to = e.effects.setTransition(o, l, s.to.y, o.to)),
        e.effects.save(o, y),
        o.show(),
        e.effects.createWrapper(o),
        o.css("overflow", "hidden").css(o.from),
        m && (i = e.effects.getBaseline(m, r),
        o.from.top = (r.outerHeight - o.outerHeight()) * i.y,
        o.from.left = (r.outerWidth - o.outerWidth()) * i.x,
        o.to.top = (r.outerHeight - o.to.outerHeight) * i.y,
        o.to.left = (r.outerWidth - o.to.outerWidth) * i.x),
        o.css(o.from);
        if (v === "content" || v === "both")
            c = c.concat(["marginTop", "marginBottom"]).concat(l),
            h = h.concat(["marginLeft", "marginRight"]),
            f = u.concat(c).concat(h),
            o.find("*[width]").each(function() {
                var n = e(this)
                  , r = {
                    height: n.height(),
                    width: n.width(),
                    outerHeight: n.outerHeight(),
                    outerWidth: n.outerWidth()
                };
                d && e.effects.save(n, f),
                n.from = {
                    height: r.height * s.from.y,
                    width: r.width * s.from.x,
                    outerHeight: r.outerHeight * s.from.y,
                    outerWidth: r.outerWidth * s.from.x
                },
                n.to = {
                    height: r.height * s.to.y,
                    width: r.width * s.to.x,
                    outerHeight: r.height * s.to.y,
                    outerWidth: r.width * s.to.x
                },
                s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from),
                n.to = e.effects.setTransition(n, c, s.to.y, n.to)),
                s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from),
                n.to = e.effects.setTransition(n, h, s.to.x, n.to)),
                n.css(n.from),
                n.animate(n.to, t.duration, t.easing, function() {
                    d && e.effects.restore(n, f)
                })
            });
        o.animate(o.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                o.to.opacity === 0 && o.css("opacity", o.from.opacity),
                p === "hide" && o.hide(),
                e.effects.restore(o, y),
                d || (g === "static" ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : e.each(["top", "left"], function(e, t) {
                    o.css(t, function(t, n) {
                        var r = parseInt(n, 10)
                          , i = e ? o.to.left : o.to.top;
                        return n === "auto" ? i + "px" : r + i + "px"
                    })
                })),
                e.effects.removeWrapper(o),
                n()
            }
        })
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.shake = function(t, n) {
        var r = e(this), i = ["position", "top", "bottom", "left", "right", "height", "width"], s = e.effects.setMode(r, t.mode || "effect"), o = t.direction || "left", u = t.distance || 20, a = t.times || 3, f = a * 2 + 1, l = Math.round(t.duration / f), c = o === "up" || o === "down" ? "top" : "left", h = o === "up" || o === "left", p = {}, d = {}, v = {}, m, g = r.queue(), y = g.length;
        e.effects.save(r, i),
        r.show(),
        e.effects.createWrapper(r),
        p[c] = (h ? "-=" : "+=") + u,
        d[c] = (h ? "+=" : "-=") + u * 2,
        v[c] = (h ? "-=" : "+=") + u * 2,
        r.animate(p, l, t.easing);
        for (m = 1; m < a; m++)
            r.animate(d, l, t.easing).animate(v, l, t.easing);
        r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function() {
            s === "hide" && r.hide(),
            e.effects.restore(r, i),
            e.effects.removeWrapper(r),
            n()
        }),
        y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))),
        r.dequeue()
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.slide = function(t, n) {
        var r = e(this), i = ["position", "top", "bottom", "left", "right", "width", "height"], s = e.effects.setMode(r, t.mode || "show"), o = s === "show", u = t.direction || "left", a = u === "up" || u === "down" ? "top" : "left", f = u === "up" || u === "left", l, c = {};
        e.effects.save(r, i),
        r.show(),
        l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0),
        e.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        o && r.css(a, f ? isNaN(l) ? "-" + l : -l : l),
        c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l,
        r.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(),
                e.effects.restore(r, i),
                e.effects.removeWrapper(r),
                n()
            }
        })
    }
}
)(jQuery);
(function(e, t) {
    e.effects.effect.transfer = function(t, n) {
        var r = e(this)
          , i = e(t.to)
          , s = i.css("position") === "fixed"
          , o = e("body")
          , u = s ? o.scrollTop() : 0
          , a = s ? o.scrollLeft() : 0
          , f = i.offset()
          , l = {
            top: f.top - u,
            left: f.left - a,
            height: i.innerHeight(),
            width: i.innerWidth()
        }
          , c = r.offset()
          , h = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
            top: c.top - u,
            left: c.left - a,
            height: r.innerHeight(),
            width: r.innerWidth(),
            position: s ? "fixed" : "absolute"
        }).animate(l, t.duration, t.easing, function() {
            h.remove(),
            n()
        })
    }
}
)(jQuery);
(function(a) {
    typeof define === "function" && define.amd ? define(["jquery"], a) : a(jQuery)
}
)(function(a) {
    function z(d) {
        var e = this, f = d.elements.tooltip, g = d.options.content.ajax, h = ".qtip-ajax", i = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, j = b, k = c, l;
        d.checks.ajax = {
            "^content.ajax": function(a, b, c) {
                b === "ajax" && (g = c),
                b === "once" ? e.init() : g && g.url ? e.load() : f.unbind(h)
            }
        },
        a.extend(e, {
            init: function() {
                g && g.url && f.unbind(h)[g.once ? "one" : "bind"]("tooltipshow" + h, e.load);
                return e
            },
            load: function(b, f) {
                function r(a, b, c) {
                    !k && a.status !== 0 && d.set("content.text", b + ": " + c)
                }
                function q(b) {
                    k || (m && (b = a("<div/>").append(b.replace(i, "")).find(m)),
                    d.set("content.text", b))
                }
                function p() {
                    k || (n && (d.show(b.originalEvent),
                    f = c),
                    a.isFunction(g.complete) && g.complete.apply(this, arguments))
                }
                var h = g.url.indexOf(" "), j = g.url, m, n = g.once && !g.loading && f;
                if (n)
                    try {
                        b.preventDefault()
                    } catch (o) {}
                else if (b && b.isDefaultPrevented())
                    return e;
                l && l.abort && l.abort(),
                h > -1 && (m = j.substr(h),
                j = j.substr(0, h)),
                l = a.ajax(a.extend({
                    success: q,
                    error: r,
                    context: d
                }, g, {
                    url: j,
                    complete: p
                }))
            },
            destroy: function() {
                l && l.abort && l.abort(),
                k = b
            }
        }),
        e.init()
    }
    function y(e, h) {
        var i, j, k, l, m, n = a(this), o = a(document.body), p = this === document ? o : n, q = n.metadata ? n.metadata(h.metadata) : d, r = h.metadata.type === "html5" && q ? q[h.metadata.name] : d, s = n.data(h.metadata.name || "qtipopts");
        try {
            s = typeof s === "string" ? new Function("return " + s)() : s
        } catch (u) {
            v("Unable to parse HTML5 attribute data: " + s)
        }
        l = a.extend(b, {}, f.defaults, h, typeof s === "object" ? w(s) : d, w(r || q)),
        j = l.position,
        l.id = e;
        if ("boolean" === typeof l.content.text) {
            k = n.attr(l.content.attr);
            if (l.content.attr !== c && k)
                l.content.text = k;
            else {
                v("Unable to locate content for tooltip! Aborting render of tooltip on element: ", n);
                return c
            }
        }
        j.container.length || (j.container = o),
        j.target === c && (j.target = p),
        l.show.target === c && (l.show.target = p),
        l.show.solo === b && (l.show.solo = j.container.closest("body")),
        l.hide.target === c && (l.hide.target = p),
        l.position.viewport === b && (l.position.viewport = j.container),
        j.container = j.container.eq(0),
        j.at = new g.Corner(j.at),
        j.my = new g.Corner(j.my);
        if (a.data(this, "qtip"))
            if (l.overwrite)
                n.qtip("destroy");
            else if (l.overwrite === c)
                return c;
        l.suppress && (m = a.attr(this, "title")) && a(this).removeAttr("title").attr(t, m),
        i = new x(n,l,e,(!!k)),
        a.data(this, "qtip", i),
        n.bind("remove.qtip-" + e + " removeqtip.qtip-" + e, function() {
            i.destroy()
        });
        return i
    }
    function x(r, s, v, x) {
        function Q() {
            var b = [s.show.target[0], s.hide.target[0], y.rendered && F.tooltip[0], s.position.container[0], s.position.viewport[0], window, document];
            y.rendered ? a([]).pushStack(a.grep(b, function(a) {
                return typeof a === "object"
            })).unbind(E) : s.show.target.unbind(E + "-create")
        }
        function P() {
            function o(a) {
                D.is(":visible") && y.reposition(a)
            }
            function n(a) {
                if (D.hasClass(l))
                    return c;
                clearTimeout(y.timers.inactive),
                y.timers.inactive = setTimeout(function() {
                    y.hide(a)
                }, s.hide.inactive)
            }
            function k(b) {
                if (D.hasClass(l) || B || C)
                    return c;
                var f = a(b.relatedTarget || b.target)
                  , g = f.closest(m)[0] === D[0]
                  , h = f[0] === e.show[0];
                clearTimeout(y.timers.show),
                clearTimeout(y.timers.hide);
                if (d.target === "mouse" && g || s.hide.fixed && (/mouse(out|leave|move)/.test(b.type) && (g || h)))
                    try {
                        b.preventDefault(),
                        b.stopImmediatePropagation()
                    } catch (i) {}
                else
                    s.hide.delay > 0 ? y.timers.hide = setTimeout(function() {
                        y.hide(b)
                    }, s.hide.delay) : y.hide(b)
            }
            function j(a) {
                if (D.hasClass(l))
                    return c;
                clearTimeout(y.timers.show),
                clearTimeout(y.timers.hide);
                var d = function() {
                    y.toggle(b, a)
                };
                s.show.delay > 0 ? y.timers.show = setTimeout(d, s.show.delay) : d()
            }
            var d = s.position
              , e = {
                show: s.show.target,
                hide: s.hide.target,
                viewport: a(d.viewport),
                document: a(document),
                body: a(document.body),
                window: a(window)
            }
              , g = {
                show: a.trim("" + s.show.event).split(" "),
                hide: a.trim("" + s.hide.event).split(" ")
            }
              , i = a.browser.msie && parseInt(a.browser.version, 10) === 6;
            D.bind("mouseenter" + E + " mouseleave" + E, function(a) {
                var b = a.type === "mouseenter";
                b && y.focus(a),
                D.toggleClass(p, b)
            }),
            s.hide.fixed && (e.hide = e.hide.add(D),
            D.bind("mouseover" + E, function() {
                D.hasClass(l) || clearTimeout(y.timers.hide)
            })),
            /mouse(out|leave)/i.test(s.hide.event) ? s.hide.leave === "window" && e.window.bind("mouseout" + E + " blur" + E, function(a) {
                /select|option/.test(a.target) && !a.relatedTarget && y.hide(a)
            }) : /mouse(over|enter)/i.test(s.show.event) && e.hide.bind("mouseleave" + E, function(a) {
                clearTimeout(y.timers.show)
            }),
            ("" + s.hide.event).indexOf("unfocus") > -1 && d.container.closest("html").bind("mousedown" + E, function(b) {
                var c = a(b.target)
                  , d = !D.hasClass(l) && D.is(":visible")
                  , e = c.parents(m).filter(D[0]).length > 0;
                c[0] !== r[0] && c[0] !== D[0] && !e && !r.has(c[0]).length && !c.attr("disabled") && y.hide(b)
            }),
            "number" === typeof s.hide.inactive && (e.show.bind("qtip-" + v + "-inactive", n),
            a.each(f.inactiveEvents, function(a, b) {
                e.hide.add(F.tooltip).bind(b + E + "-inactive", n)
            })),
            a.each(g.hide, function(b, c) {
                var d = a.inArray(c, g.show)
                  , f = a(e.hide);
                d > -1 && f.add(e.show).length === f.length || c === "unfocus" ? (e.show.bind(c + E, function(a) {
                    D.is(":visible") ? k(a) : j(a)
                }),
                delete g.show[d]) : e.hide.bind(c + E, k)
            }),
            a.each(g.show, function(a, b) {
                e.show.bind(b + E, j)
            }),
            "number" === typeof s.hide.distance && e.show.add(D).bind("mousemove" + E, function(a) {
                var b = G.origin || {}
                  , c = s.hide.distance
                  , d = Math.abs;
                (d(a.pageX - b.pageX) >= c || d(a.pageY - b.pageY) >= c) && y.hide(a)
            }),
            d.target === "mouse" && (e.show.bind("mousemove" + E, function(a) {
                h = {
                    pageX: a.pageX,
                    pageY: a.pageY,
                    type: "mousemove"
                }
            }),
            d.adjust.mouse && (s.hide.event && (D.bind("mouseleave" + E, function(a) {
                (a.relatedTarget || a.target) !== e.show[0] && y.hide(a)
            }),
            F.target.bind("mouseenter" + E + " mouseleave" + E, function(a) {
                G.onTarget = a.type === "mouseenter"
            })),
            e.document.bind("mousemove" + E, function(a) {
                G.onTarget && !D.hasClass(l) && D.is(":visible") && y.reposition(a || h)
            }))),
            (d.adjust.resize || e.viewport.length) && (a.event.special.resize ? e.viewport : e.window).bind("resize" + E, o),
            (e.viewport.length || i && D.css("position") === "fixed") && e.viewport.bind("scroll" + E, o)
        }
        function O(b, d) {
            function g(b) {
                function i(e) {
                    e && (delete h[e.src],
                    clearTimeout(y.timers.img[e.src]),
                    a(e).unbind(E)),
                    a.isEmptyObject(h) && (y.redraw(),
                    d !== c && y.reposition(G.event),
                    b())
                }
                var g, h = {};
                if ((g = f.find("img[src]:not([height]):not([width])")).length === 0)
                    return i();
                g.each(function(b, c) {
                    if (h[c.src] === e) {
                        var d = 0
                          , f = 3;
                        (function g() {
                            if (c.height || c.width || d > f)
                                return i(c);
                            d += 1,
                            y.timers.img[c.src] = setTimeout(g, 700)
                        }
                        )(),
                        a(c).bind("error" + E + " load" + E, function() {
                            i(this)
                        }),
                        h[c.src] = c
                    }
                })
            }
            var f = F.content;
            if (!y.rendered || !b)
                return c;
            a.isFunction(b) && (b = b.call(r, G.event, y) || ""),
            b.jquery && b.length > 0 ? f.empty().append(b.css({
                display: "block"
            })) : f.html(b),
            y.rendered < 0 ? D.queue("fx", g) : (C = 0,
            g(a.noop));
            return y
        }
        function N(b, d) {
            var e = F.title;
            if (!y.rendered || !b)
                return c;
            a.isFunction(b) && (b = b.call(r, G.event, y));
            if (b === c || !b && b !== "")
                return J(c);
            b.jquery && b.length > 0 ? e.empty().append(b.css({
                display: "block"
            })) : e.html(b),
            y.redraw(),
            d !== c && y.rendered && D.is(":visible") && y.reposition(G.event)
        }
        function M(a) {
            var b = F.button
              , d = F.title;
            if (!y.rendered)
                return c;
            a ? (d || L(),
            K()) : b.remove()
        }
        function L() {
            var c = A + "-title";
            F.titlebar && J(),
            F.titlebar = a("<div />", {
                class: j + "-titlebar " + (s.style.widget ? "ui-widget-header" : "")
            }).append(F.title = a("<div />", {
                id: c,
                class: j + "-title",
                "aria-atomic": b
            })).insertBefore(F.content).delegate(".ui-tooltip-close", "mousedown keydown mouseup keyup mouseout", function(b) {
                a(this).toggleClass("ui-state-active ui-state-focus", b.type.substr(-4) === "down")
            }).delegate(".ui-tooltip-close", "mouseover mouseout", function(b) {
                a(this).toggleClass("ui-state-hover", b.type === "mouseover")
            }),
            s.content.title.button ? K() : y.rendered && y.redraw()
        }
        function K() {
            var b = s.content.title.button
              , d = typeof b === "string"
              , e = d ? b : "Close tooltip";
            F.button && F.button.remove(),
            b.jquery ? F.button = b : F.button = a("<a />", {
                class: "ui-state-default ui-tooltip-close " + (s.style.widget ? "" : j + "-icon"),
                title: e,
                "aria-label": e
            }).prepend(a("<span />", {
                class: "ui-icon ui-icon-close",
                html: "&times;"
            })),
            F.button.appendTo(F.titlebar).attr("role", "button").click(function(a) {
                D.hasClass(l) || y.hide(a);
                return c
            }),
            y.redraw()
        }
        function J(a) {
            F.title && (F.titlebar.remove(),
            F.titlebar = F.title = F.button = d,
            a !== c && y.reposition())
        }
        function I() {
            var a = s.style.widget;
            D.toggleClass(k, a).toggleClass(n, s.style.def && !a),
            F.content.toggleClass(k + "-content", a),
            F.titlebar && F.titlebar.toggleClass(k + "-header", a),
            F.button && F.button.toggleClass(j + "-icon", !a)
        }
        function H(a) {
            var b = 0, c, d = s, e = a.split(".");
            while (d = d[e[b++]])
                b < e.length && (c = d);
            return [c || s, e.pop()]
        }
        var y = this, z = document.body, A = j + "-" + v, B = 0, C = 0, D = a(), E = ".qtip-" + v, F, G;
        y.id = v,
        y.rendered = c,
        y.elements = F = {
            target: r
        },
        y.timers = {
            img: {}
        },
        y.options = s,
        y.checks = {},
        y.plugins = {},
        y.cache = G = {
            event: {},
            target: a(),
            disabled: c,
            attr: x,
            onTarget: c
        },
        y.checks.builtin = {
            "^id$": function(d, e, g) {
                var h = g === b ? f.nextid : g
                  , i = j + "-" + h;
                h !== c && h.length > 0 && !a("#" + i).length && (D[0].id = i,
                F.content[0].id = i + "-content",
                F.title[0].id = i + "-title")
            },
            "^content.text$": function(a, b, c) {
                O(c)
            },
            "^content.title.text$": function(a, b, c) {
                if (!c)
                    return J();
                !F.title && c && L(),
                N(c)
            },
            "^content.title.button$": function(a, b, c) {
                M(c)
            },
            "^position.(my|at)$": function(a, b, c) {
                "string" === typeof c && (a[b] = new g.Corner(c))
            },
            "^position.container$": function(a, b, c) {
                y.rendered && D.appendTo(c)
            },
            "^show.ready$": function() {
                y.rendered ? y.toggle(b) : y.render(1)
            },
            "^style.classes$": function(a, b, c) {
                D.attr("class", j + " qtip ui-helper-reset " + c)
            },
            "^style.widget|content.title": I,
            "^events.(render|show|move|hide|focus|blur)$": function(b, c, d) {
                D[(a.isFunction(d) ? "" : "un") + "bind"]("tooltip" + c, d)
            },
            "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                var a = s.position;
                D.attr("tracking", a.target === "mouse" && a.adjust.mouse),
                Q(),
                P()
            }
        },
        a.extend(y, {
            render: function(d) {
                if (y.rendered)
                    return y;
                var e = s.content.text
                  , f = s.content.title.text
                  , h = s.position
                  , i = a.Event("tooltiprender");
                a.attr(r[0], "aria-describedby", A),
                D = F.tooltip = a("<div/>", {
                    id: A,
                    class: j + " qtip ui-helper-reset " + n + " " + s.style.classes + " " + j + "-pos-" + s.position.my.abbrev(),
                    width: s.style.width || "",
                    height: s.style.height || "",
                    tracking: h.target === "mouse" && h.adjust.mouse,
                    role: "alert",
                    "aria-live": "polite",
                    "aria-atomic": c,
                    "aria-describedby": A + "-content",
                    "aria-hidden": b
                }).toggleClass(l, G.disabled).data("qtip", y).appendTo(s.position.container).append(F.content = a("<div />", {
                    class: j + "-content",
                    id: A + "-content",
                    "aria-atomic": b
                })),
                y.rendered = -1,
                B = C = 1,
                f && (L(),
                a.isFunction(f) || N(f, c)),
                a.isFunction(e) || O(e, c),
                y.rendered = b,
                I(),
                a.each(s.events, function(b, c) {
                    a.isFunction(c) && D.bind(b === "toggle" ? "tooltipshow tooltiphide" : "tooltip" + b, c)
                }),
                a.each(g, function() {
                    this.initialize === "render" && this(y)
                }),
                P(),
                D.queue("fx", function(a) {
                    i.originalEvent = G.event,
                    D.trigger(i, [y]),
                    B = C = 0,
                    y.redraw(),
                    (s.show.ready || d) && y.toggle(b, G.event, c),
                    a()
                });
                return y
            },
            get: function(a) {
                var b, c;
                switch (a.toLowerCase()) {
                case "dimensions":
                    b = {
                        height: D.outerHeight(),
                        width: D.outerWidth()
                    };
                    break;
                case "offset":
                    b = g.offset(D, s.position.container);
                    break;
                default:
                    c = H(a.toLowerCase()),
                    b = c[0][c[1]],
                    b = b.precedance ? b.string() : b
                }
                return b
            },
            set: function(e, f) {
                function m(a, b) {
                    var c, d, e;
                    for (c in k)
                        for (d in k[c])
                            if (e = new RegExp(d,"i").exec(a))
                                b.push(e),
                                k[c][d].apply(y, b)
                }
                var g = /^position\.(my|at|adjust|target|container)|style|content|show\.ready/i, h = /^content\.(title|attr)|style/i, i = c, j = c, k = y.checks, l;
                "string" === typeof e ? (l = e,
                e = {},
                e[l] = f) : e = a.extend(b, {}, e),
                a.each(e, function(b, c) {
                    var d = H(b.toLowerCase()), f;
                    f = d[0][d[1]],
                    d[0][d[1]] = "object" === typeof c && c.nodeType ? a(c) : c,
                    e[b] = [d[0], d[1], c, f],
                    i = g.test(b) || i,
                    j = h.test(b) || j
                }),
                w(s),
                B = C = 1,
                a.each(e, m),
                B = C = 0,
                D.is(":visible") && y.rendered && (i && y.reposition(s.position.target === "mouse" ? d : G.event),
                j && y.redraw());
                return y
            },
            toggle: function(e, f) {
                function r() {
                    e ? (a.browser.msie && D[0].style.removeAttribute("filter"),
                    D.css("overflow", ""),
                    "string" === typeof i.autofocus && a(i.autofocus, D).focus(),
                    i.target.trigger("qtip-" + v + "-inactive")) : D.css({
                        display: "",
                        visibility: "",
                        opacity: "",
                        left: "",
                        top: ""
                    }),
                    q = a.Event("tooltip" + (e ? "visible" : "hidden")),
                    q.originalEvent = f ? G.event : d,
                    D.trigger(q, [y])
                }
                if (!y.rendered)
                    return e ? y.render(1) : y;
                var g = e ? "show" : "hide", i = s[g], j = D.is(":visible"), k = !f || i.target.length < 2 || G.target[0] === f.target, l = f && i.target.add(f.target).length !== i.target.length, n = s.position, o = s.content, p, q;
                (typeof e).search("boolean|number") && (e = !j);
                if (!D.is(":animated") && j === e && k)
                    return y;
                if (f) {
                    if (/over|enter/.test(f.type) && /out|leave/.test(G.event.type) && s.show.target.add(f.target).length === s.show.target.length && D.has(f.relatedTarget).length)
                        return y;
                    G.event = a.extend({}, f)
                }
                q = a.Event("tooltip" + g),
                q.originalEvent = f ? G.event : d,
                D.trigger(q, [y, 90]);
                if (q.isDefaultPrevented())
                    return y;
                a.attr(D[0], "aria-hidden", !e),
                e ? (G.origin = a.extend({}, h),
                y.focus(f),
                a.isFunction(o.text) && O(o.text, c),
                a.isFunction(o.title.text) && N(o.title.text, c),
                !u && n.target === "mouse" && n.adjust.mouse && (a(document).bind("mousemove.qtip", function(a) {
                    h = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        type: "mousemove"
                    }
                }),
                u = b),
                y.reposition(f, arguments[2]),
                (q.solo = !!i.solo) && a(m, i.solo).not(D).qtip("hide", q)) : (clearTimeout(y.timers.show),
                delete G.origin,
                u && !a(m + '[tracking="true"]:visible', i.solo).not(D).length && (a(document).unbind("mousemove.qtip"),
                u = c),
                y.blur(f)),
                D.stop(l, !l),
                i.effect === c ? (D[g](),
                r.call(D)) : a.isFunction(i.effect) ? (i.effect.call(D, y),
                D.queue("fx", function(a) {
                    r(),
                    a()
                })) : D.fadeTo(90, e ? 1 : 0, r),
                e && i.target.trigger("qtip-" + v + "-inactive");
                return y
            },
            show: function(a) {
                return y.toggle(b, a)
            },
            hide: function(a) {
                return y.toggle(c, a)
            },
            focus: function(b) {
                if (!y.rendered)
                    return y;
                var c = a(m), d = parseInt(D[0].style.zIndex, 10), e = f.zindex + c.length, g = a.extend({}, b), h, i;
                D.hasClass(o) || (i = a.Event("tooltipfocus"),
                i.originalEvent = g,
                D.trigger(i, [y, e]),
                i.isDefaultPrevented() || (d !== e && (c.each(function() {
                    this.style.zIndex > d && (this.style.zIndex = this.style.zIndex - 1)
                }),
                c.filter("." + o).qtip("blur", g)),
                D.addClass(o)[0].style.zIndex = e));
                return y
            },
            blur: function(b) {
                var c = a.extend({}, b), d;
                D.removeClass(o),
                d = a.Event("tooltipblur"),
                d.originalEvent = c,
                D.trigger(d, [y]);
                return y
            },
            reposition: function(b, d) {
                if (!y.rendered || B)
                    return y;
                B = 1;
                var e = s.position.target, f = s.position, i = f.my, k = f.at, l = f.adjust, m = l.method.split(" "), n = D.outerWidth(), o = D.outerHeight(), p = 0, q = 0, r = a.Event("tooltipmove"), t = D.css("position") === "fixed", u = f.viewport, v = {
                    left: 0,
                    top: 0
                }, w = f.container, x = c, A = y.plugins.tip, C = {
                    horizontal: m[0],
                    vertical: m[1] = m[1] || m[0],
                    enabled: u.jquery && e[0] !== window && e[0] !== z && l.method !== "none",
                    left: function(a) {
                        var b = C.horizontal === "shift"
                          , c = -w.offset.left + u.offset.left + u.scrollLeft
                          , d = i.x === "left" ? n : i.x === "right" ? -n : -n / 2
                          , e = k.x === "left" ? p : k.x === "right" ? -p : -p / 2
                          , f = A && A.size ? A.size.width || 0 : 0
                          , g = A && A.corner && A.corner.precedance === "x" && !b ? f : 0
                          , h = c - a + g
                          , j = a + n - u.width - c + g
                          , m = d - (i.precedance === "x" || i.x === i.y ? e : 0) - (k.x === "center" ? p / 2 : 0)
                          , o = i.x === "center";
                        b ? (g = A && A.corner && A.corner.precedance === "y" ? f : 0,
                        m = (i.x === "left" ? 1 : -1) * d - g,
                        v.left += h > 0 ? h : j > 0 ? -j : 0,
                        v.left = Math.max(-w.offset.left + u.offset.left + (g && A.corner.x === "center" ? A.offset : 0), a - m, Math.min(Math.max(-w.offset.left + u.offset.left + u.width, a + m), v.left))) : (h > 0 && (i.x !== "left" || j > 0) ? v.left -= m : j > 0 && (i.x !== "right" || h > 0) && (v.left -= o ? -m : m),
                        v.left !== a && o && (v.left -= l.x),
                        v.left < c && -v.left > j && (v.left = a));
                        return v.left - a
                    },
                    top: function(a) {
                        var b = C.vertical === "shift"
                          , c = -w.offset.top + u.offset.top + u.scrollTop
                          , d = i.y === "top" ? o : i.y === "bottom" ? -o : -o / 2
                          , e = k.y === "top" ? q : k.y === "bottom" ? -q : -q / 2
                          , f = A && A.size ? A.size.height || 0 : 0
                          , g = A && A.corner && A.corner.precedance === "y" && !b ? f : 0
                          , h = c - a + g
                          , j = a + o - u.height - c + g
                          , m = d - (i.precedance === "y" || i.x === i.y ? e : 0) - (k.y === "center" ? q / 2 : 0)
                          , n = i.y === "center";
                        b ? (g = A && A.corner && A.corner.precedance === "x" ? f : 0,
                        m = (i.y === "top" ? 1 : -1) * d - g,
                        v.top += h > 0 ? h : j > 0 ? -j : 0,
                        v.top = Math.max(-w.offset.top + u.offset.top + (g && A.corner.x === "center" ? A.offset : 0), a - m, Math.min(Math.max(-w.offset.top + u.offset.top + u.height, a + m), v.top))) : (h > 0 && (i.y !== "top" || j > 0) ? v.top -= m : j > 0 && (i.y !== "bottom" || h > 0) && (v.top -= n ? -m : m),
                        v.top !== a && n && (v.top -= l.y),
                        v.top < 0 && -v.top > j && (v.top = a));
                        return v.top - a
                    }
                }, E;
                if (a.isArray(e) && e.length === 2)
                    k = {
                        x: "left",
                        y: "top"
                    },
                    v = {
                        left: e[0],
                        top: e[1]
                    };
                else if (e === "mouse" && (b && b.pageX || G.event.pageX))
                    k = {
                        x: "left",
                        y: "top"
                    },
                    b = (b && (b.type === "resize" || b.type === "scroll") ? G.event : b && b.pageX && b.type === "mousemove" ? b : h && h.pageX && (l.mouse || !b || !b.pageX) ? {
                        pageX: h.pageX,
                        pageY: h.pageY
                    } : !l.mouse && G.origin && G.origin.pageX && s.show.distance ? G.origin : b) || b || G.event || h || {},
                    v = {
                        top: b.pageY,
                        left: b.pageX
                    };
                else {
                    e === "event" ? b && b.target && b.type !== "scroll" && b.type !== "resize" ? e = G.target = a(b.target) : e = G.target : e = G.target = a(e.jquery ? e : F.target),
                    e = a(e).eq(0);
                    if (e.length === 0)
                        return y;
                    e[0] === document || e[0] === window ? (p = g.iOS ? window.innerWidth : e.width(),
                    q = g.iOS ? window.innerHeight : e.height(),
                    e[0] === window && (v = {
                        top: (u || e).scrollTop(),
                        left: (u || e).scrollLeft()
                    })) : e.is("area") && g.imagemap ? v = g.imagemap(e, k, C.enabled ? m : c) : e[0].namespaceURI === "http://www.w3.org/2000/svg" && g.svg ? v = g.svg(e, k) : (p = e.outerWidth(),
                    q = e.outerHeight(),
                    v = g.offset(e, w)),
                    v.offset && (p = v.width,
                    q = v.height,
                    x = v.flipoffset,
                    v = v.offset);
                    if (g.iOS < 4.1 && g.iOS > 3.1 || g.iOS == 4.3 || !g.iOS && t)
                        E = a(window),
                        v.left -= E.scrollLeft(),
                        v.top -= E.scrollTop();
                    v.left += k.x === "right" ? p : k.x === "center" ? p / 2 : 0,
                    v.top += k.y === "bottom" ? q : k.y === "center" ? q / 2 : 0
                }
                v.left += l.x + (i.x === "right" ? -n : i.x === "center" ? -n / 2 : 0),
                v.top += l.y + (i.y === "bottom" ? -o : i.y === "center" ? -o / 2 : 0),
                C.enabled ? (u = {
                    elem: u,
                    height: u[(u[0] === window ? "h" : "outerH") + "eight"](),
                    width: u[(u[0] === window ? "w" : "outerW") + "idth"](),
                    scrollLeft: t ? 0 : u.scrollLeft(),
                    scrollTop: t ? 0 : u.scrollTop(),
                    offset: u.offset() || {
                        left: 0,
                        top: 0
                    }
                },
                w = {
                    elem: w,
                    scrollLeft: w.scrollLeft(),
                    scrollTop: w.scrollTop(),
                    offset: w.offset() || {
                        left: 0,
                        top: 0
                    }
                },
                v.adjusted = {
                    left: C.horizontal !== "none" ? C.left(v.left) : 0,
                    top: C.vertical !== "none" ? C.top(v.top) : 0
                },
                v.adjusted.left + v.adjusted.top && D.attr("class", D[0].className.replace(/ui-tooltip-pos-\w+/i, j + "-pos-" + i.abbrev())),
                x && v.adjusted.left && (v.left += x.left),
                x && v.adjusted.top && (v.top += x.top)) : v.adjusted = {
                    left: 0,
                    top: 0
                },
                r.originalEvent = a.extend({}, b),
                D.trigger(r, [y, v, u.elem || u]);
                if (r.isDefaultPrevented())
                    return y;
                delete v.adjusted,
                d === c || isNaN(v.left) || isNaN(v.top) || e === "mouse" || !a.isFunction(f.effect) ? D.css(v) : a.isFunction(f.effect) && (f.effect.call(D, y, a.extend({}, v)),
                D.queue(function(b) {
                    a(this).css({
                        opacity: "",
                        height: ""
                    }),
                    a.browser.msie && this.style.removeAttribute("filter"),
                    b()
                })),
                B = 0;
                return y
            },
            redraw: function() {
                if (y.rendered < 1 || C)
                    return y;
                var a = s.position.container, b, c, d, e;
                C = 1,
                s.style.height && D.css("height", s.style.height),
                s.style.width ? D.css("width", s.style.width) : (D.css("width", "").addClass(q),
                c = D.width() + 1,
                d = D.css("max-width") || "",
                e = D.css("min-width") || "",
                b = (d + e).indexOf("%") > -1 ? a.width() / 100 : 0,
                d = (d.indexOf("%") > -1 ? b : 1) * parseInt(d, 10) || c,
                e = (e.indexOf("%") > -1 ? b : 1) * parseInt(e, 10) || 0,
                c = d + e ? Math.min(Math.max(c, e), d) : c,
                D.css("width", Math.round(c)).removeClass(q)),
                C = 0;
                return y
            },
            disable: function(b) {
                "boolean" !== typeof b && (b = !D.hasClass(l) && !G.disabled),
                y.rendered ? (D.toggleClass(l, b),
                a.attr(D[0], "aria-disabled", b)) : G.disabled = !!b;
                return y
            },
            enable: function() {
                return y.disable(c)
            },
            destroy: function() {
                var b = r[0]
                  , c = a.attr(b, t)
                  , d = r.data("qtip");
                y.rendered && (D.stop(1, 0).remove(),
                a.each(y.plugins, function() {
                    this.destroy && this.destroy()
                })),
                clearTimeout(y.timers.show),
                clearTimeout(y.timers.hide),
                Q();
                if (!d || y === d)
                    a.removeData(b, "qtip"),
                    s.suppress && c && (a.attr(b, "title", c),
                    r.removeAttr(t)),
                    r.removeAttr("aria-describedby");
                r.unbind(".qtip-" + v),
                delete i[y.id];
                return r
            }
        })
    }
    function w(b) {
        var e;
        if (!b || "object" !== typeof b)
            return c;
        if (b.metadata === d || "object" !== typeof b.metadata)
            b.metadata = {
                type: b.metadata
            };
        if ("content"in b) {
            if (b.content === d || "object" !== typeof b.content || b.content.jquery)
                b.content = {
                    text: b.content
                };
            e = b.content.text || c,
            !a.isFunction(e) && (!e && !e.attr || e.length < 1 || "object" === typeof e && !e.jquery) && (b.content.text = c);
            if ("title"in b.content) {
                if (b.content.title === d || "object" !== typeof b.content.title)
                    b.content.title = {
                        text: b.content.title
                    };
                e = b.content.title.text || c,
                !a.isFunction(e) && (!e && !e.attr || e.length < 1 || "object" === typeof e && !e.jquery) && (b.content.title.text = c)
            }
        }
        if ("position"in b)
            if (b.position === d || "object" !== typeof b.position)
                b.position = {
                    my: b.position,
                    at: b.position
                };
        if ("show"in b)
            if (b.show === d || "object" !== typeof b.show)
                b.show.jquery ? b.show = {
                    target: b.show
                } : b.show = {
                    event: b.show
                };
        if ("hide"in b)
            if (b.hide === d || "object" !== typeof b.hide)
                b.hide.jquery ? b.hide = {
                    target: b.hide
                } : b.hide = {
                    event: b.hide
                };
        if ("style"in b)
            if (b.style === d || "object" !== typeof b.style)
                b.style = {
                    classes: b.style
                };
        a.each(g, function() {
            this.sanitize && this.sanitize(b)
        });
        return b
    }
    function v() {
        v.history = v.history || [],
        v.history.push(arguments);
        if ("object" === typeof console) {
            var a = console[console.warn ? "warn" : "log"], b = Array.prototype.slice.call(arguments), c;
            typeof arguments[0] === "string" && (b[0] = "qTip2: " + b[0]),
            c = a.apply ? a.apply(console, b) : a(b)
        }
    }
    "use strict";
    var b = !0, c = !1, d = null, e, f, g, h, i = {}, j = "ui-tooltip", k = "ui-widget", l = "ui-state-disabled", m = "div.qtip." + j, n = j + "-default", o = j + "-focus", p = j + "-hover", q = j + "-fluid", r = "-31000px", s = "_replacedByqTip", t = "oldtitle", u;
    f = a.fn.qtip = function(g, h, i) {
        var j = ("" + g).toLowerCase()
          , k = d
          , l = a.makeArray(arguments).slice(1)
          , m = l[l.length - 1]
          , n = this[0] ? a.data(this[0], "qtip") : d;
        if (!arguments.length && n || j === "api")
            return n;
        if ("string" === typeof g) {
            this.each(function() {
                var d = a.data(this, "qtip");
                if (!d)
                    return b;
                m && m.timeStamp && (d.cache.event = m);
                if (j !== "option" && j !== "options" || !h)
                    d[j] && d[j].apply(d[j], l);
                else if (a.isPlainObject(h) || i !== e)
                    d.set(h, i);
                else {
                    k = d.get(h);
                    return c
                }
            });
            return k !== d ? k : this
        }
        if ("object" === typeof g || !arguments.length) {
            n = w(a.extend(b, {}, g));
            return f.bind.call(this, n, m)
        }
    }
    ,
    f.bind = function(d, j) {
        return this.each(function(k) {
            function r(b) {
                function d() {
                    p.render(typeof b === "object" || l.show.ready),
                    m.show.add(m.hide).unbind(o)
                }
                if (p.cache.disabled)
                    return c;
                p.cache.event = a.extend({}, b),
                p.cache.target = b ? a(b.target) : [e],
                l.show.delay > 0 ? (clearTimeout(p.timers.show),
                p.timers.show = setTimeout(d, l.show.delay),
                n.show !== n.hide && m.hide.bind(n.hide, function() {
                    clearTimeout(p.timers.show)
                })) : d()
            }
            var l, m, n, o, p, q;
            q = a.isArray(d.id) ? d.id[k] : d.id,
            q = !q || q === c || q.length < 1 || i[q] ? f.nextid++ : i[q] = q,
            o = ".qtip-" + q + "-create",
            p = y.call(this, q, d);
            if (p === c)
                return b;
            l = p.options,
            a.each(g, function() {
                this.initialize === "initialize" && this(p)
            }),
            m = {
                show: l.show.target,
                hide: l.hide.target
            },
            n = {
                show: a.trim("" + l.show.event).replace(/ /g, o + " ") + o,
                hide: a.trim("" + l.hide.event).replace(/ /g, o + " ") + o
            },
            /mouse(over|enter)/i.test(n.show) && !/mouse(out|leave)/i.test(n.hide) && (n.hide += " mouseleave" + o),
            m.show.bind("mousemove" + o, function(a) {
                h = {
                    pageX: a.pageX,
                    pageY: a.pageY,
                    type: "mousemove"
                },
                p.cache.onTarget = b
            }),
            m.show.bind(n.show, r),
            (l.show.ready || l.prerender) && r(j)
        })
    }
    ,
    g = f.plugins = {
        Corner: function(a) {
            a = ("" + a).replace(/([A-Z])/, " $1").replace(/middle/gi, "center").toLowerCase(),
            this.x = (a.match(/left|right/i) || a.match(/center/) || ["inherit"])[0].toLowerCase(),
            this.y = (a.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase();
            var b = a.charAt(0);
            this.precedance = b === "t" || b === "b" ? "y" : "x",
            this.string = function() {
                return this.precedance === "y" ? this.y + this.x : this.x + this.y
            }
            ,
            this.abbrev = function() {
                var a = this.x.substr(0, 1)
                  , b = this.y.substr(0, 1);
                return a === b ? a : a === "c" || a !== "c" && b !== "c" ? b + a : a + b
            }
            ,
            this.clone = function() {
                return {
                    x: this.x,
                    y: this.y,
                    precedance: this.precedance,
                    string: this.string,
                    abbrev: this.abbrev,
                    clone: this.clone
                }
            }
        },
        offset: function(b, c) {
            function j(a, b) {
                d.left += b * a.scrollLeft(),
                d.top += b * a.scrollTop()
            }
            var d = b.offset(), e = b.closest("body")[0], f = c, g, h, i;
            if (f) {
                do
                    f.css("position") !== "static" && (h = f.position(),
                    d.left -= h.left + (parseInt(f.css("borderLeftWidth"), 10) || 0) + (parseInt(f.css("marginLeft"), 10) || 0),
                    d.top -= h.top + (parseInt(f.css("borderTopWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0),
                    !g && (i = f.css("overflow")) !== "hidden" && i !== "visible" && (g = f));
                while ((f = a(f[0].offsetParent)).length);
                g && g[0] !== e && j(g, 1)
            }
            return d
        },
        iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".")) || c,
        fn: {
            attr: function(b, c) {
                if (this.length) {
                    var d = this[0]
                      , e = "title"
                      , f = a.data(d, "qtip");
                    if (b === e && f && "object" === typeof f && f.options.suppress) {
                        if (arguments.length < 2)
                            return a.attr(d, t);
                        f && f.options.content.attr === e && f.cache.attr && f.set("content.text", c);
                        return this.attr(t, c)
                    }
                }
                return a.fn["attr" + s].apply(this, arguments)
            },
            clone: function(b) {
                var c = a([])
                  , d = "title"
                  , e = a.fn["clone" + s].apply(this, arguments);
                b || e.filter("[" + t + "]").attr("title", function() {
                    return a.attr(this, t)
                }).removeAttr(t);
                return e
            }
        }
    },
    a.each(g.fn, function(c, d) {
        if (!d || a.fn[c + s])
            return b;
        var e = a.fn[c + s] = a.fn[c];
        a.fn[c] = function() {
            return d.apply(this, arguments) || e.apply(this, arguments)
        }
    }),
    a.ui || (a["cleanData" + s] = a.cleanData,
    a.cleanData = function(b) {
        for (var c = 0, d; (d = b[c]) !== e; c++)
            try {
                a(d).triggerHandler("removeqtip")
            } catch (f) {}
        a["cleanData" + s](b)
    }
    ),
    f.version = "nightly",
    f.nextid = 0,
    f.inactiveEvents = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
    f.zindex = 15e3,
    f.defaults = {
        prerender: c,
        id: c,
        overwrite: b,
        suppress: b,
        content: {
            text: b,
            attr: "title",
            title: {
                text: c,
                button: c
            }
        },
        position: {
            my: "top left",
            at: "bottom right",
            target: c,
            container: c,
            viewport: c,
            adjust: {
                x: 0,
                y: 0,
                mouse: b,
                resize: b,
                method: "flip flip"
            },
            effect: function(b, d, e) {
                a(this).animate(d, {
                    duration: 200,
                    queue: c
                })
            }
        },
        show: {
            target: c,
            event: "mouseenter",
            effect: b,
            delay: 90,
            solo: c,
            ready: c,
            autofocus: c
        },
        hide: {
            target: c,
            event: "mouseleave",
            effect: b,
            delay: 0,
            fixed: c,
            inactive: c,
            leave: "window",
            distance: c
        },
        style: {
            classes: "",
            widget: c,
            width: c,
            height: c,
            def: b
        },
        events: {
            render: d,
            move: d,
            show: d,
            hide: d,
            toggle: d,
            visible: d,
            hidden: d,
            focus: d,
            blur: d
        }
    },
    g.ajax = function(a) {
        var b = a.plugins.ajax;
        return "object" === typeof b ? b : a.plugins.ajax = new z(a)
    }
    ,
    g.ajax.initialize = "render",
    g.ajax.sanitize = function(a) {
        var b = a.content, c;
        b && "ajax"in b && (c = b.ajax,
        typeof c !== "object" && (c = a.content.ajax = {
            url: c
        }),
        "boolean" !== typeof c.once && c.once && (c.once = !!c.once))
    }
    ,
    a.extend(b, f.defaults, {
        content: {
            ajax: {
                loading: b,
                once: b
            }
        }
    })
});
(function($, p) {
    var i, m = Array.prototype.slice, r = decodeURIComponent, a = $.param, c, l, v, b = $.bbq = $.bbq || {}, q, u, j, e = $.event.special, d = "hashchange", A = "querystring", D = "fragment", y = "elemUrlAttr", g = "location", k = "href", t = "src", x = /^.*\?|#.*$/g, w = /^.*\#/, h, C = {};
    function E(F) {
        return typeof F === "string"
    }
    function B(G) {
        var F = m.call(arguments, 1);
        return function() {
            return G.apply(this, F.concat(m.call(arguments)))
        }
    }
    function n(F) {
        return F.replace(/^[^#]*#?(.*)$/, "$1")
    }
    function o(F) {
        return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }
    function f(H, M, F, I, G) {
        var O, L, K, N, J;
        if (I !== i) {
            K = F.match(H ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/);
            J = K[3] || "";
            if (G === 2 && E(I)) {
                L = I.replace(H ? w : x, "")
            } else {
                N = l(K[2]);
                I = E(I) ? l[H ? D : A](I) : I;
                L = G === 2 ? I : G === 1 ? $.extend({}, I, N) : $.extend({}, N, I);
                L = a(L);
                if (H) {
                    L = L.replace(h, r)
                }
            }
            O = K[1] + (H ? "#" : L || !K[1] ? "?" : "") + L + J
        } else {
            O = M(F !== i ? F : p[g][k])
        }
        return O
    }
    a[A] = B(f, 0, o);
    a[D] = c = B(f, 1, n);
    c.noEscape = function(G) {
        G = G || "";
        var F = $.map(G.split(""), encodeURIComponent);
        h = new RegExp(F.join("|"),"g")
    }
    ;
    c.noEscape(",/");
    $.deparam = l = function(I, F) {
        var H = {}
          , G = {
            true: !0,
            false: !1,
            null: null
        };
        $.each(I.replace(/\+/g, " ").split("&"), function(L, Q) {
            var K = Q.split("="), P = r(K[0]), J, O = H, M = 0, R = P.split("]["), N = R.length - 1;
            if (/\[/.test(R[0]) && /\]$/.test(R[N])) {
                R[N] = R[N].replace(/\]$/, "");
                R = R.shift().split("[").concat(R);
                N = R.length - 1
            } else {
                N = 0
            }
            if (K.length === 2) {
                J = r(K[1]);
                if (F) {
                    J = J && !isNaN(J) ? +J : J === "undefined" ? i : G[J] !== i ? G[J] : J
                }
                if (N) {
                    for (; M <= N; M++) {
                        P = R[M] === "" ? O.length : R[M];
                        O = O[P] = M < N ? O[P] || (R[M + 1] && isNaN(R[M + 1]) ? {} : []) : J
                    }
                } else {
                    if ($.isArray(H[P])) {
                        H[P].push(J)
                    } else {
                        if (H[P] !== i) {
                            H[P] = [H[P], J]
                        } else {
                            H[P] = J
                        }
                    }
                }
            } else {
                if (P) {
                    H[P] = F ? i : ""
                }
            }
        });
        return H
    }
    ;
    function z(H, F, G) {
        if (F === i || typeof F === "boolean") {
            G = F;
            F = a[H ? D : A]()
        } else {
            F = E(F) ? F.replace(H ? w : x, "") : F
        }
        return l(F, G)
    }
    l[A] = B(z, 0);
    l[D] = v = B(z, 1);
    $[y] || ($[y] = function(F) {
        return $.extend(C, F)
    }
    )({
        a: k,
        base: k,
        iframe: t,
        img: t,
        input: t,
        form: "action",
        link: k,
        script: t
    });
    j = $[y];
    function s(I, G, H, F) {
        if (!E(H) && typeof H !== "object") {
            F = H;
            H = G;
            G = i
        }
        return this.each(function() {
            var L = $(this)
              , J = G || j()[(this.nodeName || "").toLowerCase()] || ""
              , K = J && L.attr(J) || "";
            L.attr(J, a[I](K, H, F))
        })
    }
    $.fn[A] = B(s, A);
    $.fn[D] = B(s, D);
    b.pushState = q = function(I, F) {
        if (E(I) && /^#/.test(I) && F === i) {
            F = 2
        }
        var H = I !== i
          , G = c(p[g][k], H ? I : {}, H ? F : 2);
        p[g][k] = G + (/#/.test(G) ? "" : "#")
    }
    ;
    b.getState = u = function(F, G) {
        return F === i || typeof F === "boolean" ? v(F) : v(G)[F]
    }
    ;
    b.removeState = function(F) {
        var G = {};
        if (F !== i) {
            G = u();
            $.each($.isArray(F) ? F : arguments, function(I, H) {
                delete G[H]
            })
        }
        q(G, 2)
    }
    ;
    e[d] = $.extend(e[d], {
        add: function(F) {
            var H;
            function G(J) {
                var I = J[D] = c();
                J.getState = function(K, L) {
                    return K === i || typeof K === "boolean" ? l(I, K) : l(I, L)[K]
                }
                ;
                H.apply(this, arguments)
            }
            if ($.isFunction(F)) {
                H = F;
                return G
            } else {
                H = F.handler;
                F.handler = G
            }
        }
    })
}
)(jQuery, this);
(function($, i, b) {
    var j, k = $.event.special, c = "location", d = "hashchange", l = "href", f = $.browser, g = document.documentMode, h = f.msie && (g === b || g < 8), e = "on" + d in i && !h;
    function a(m) {
        m = m || i[c][l];
        return m.replace(/^[^#]*#?(.*)$/, "$1")
    }
    $[d + "Delay"] = 100;
    k[d] = $.extend(k[d], {
        setup: function() {
            if (e) {
                return false
            }
            $(j.start)
        },
        teardown: function() {
            if (e) {
                return false
            }
            $(j.stop)
        }
    });
    j = function() {
        var m = {}, r, n, o, q;
        function p() {
            o = q = function(s) {
                return s
            }
            ;
            if (h) {
                n = $('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;
                q = function() {
                    return a(n.document[c][l])
                }
                ;
                o = function(u, s) {
                    if (u !== s) {
                        var t = n.document;
                        t.open().close();
                        t[c].hash = "#" + u
                    }
                }
                ;
                o(a())
            }
        }
        m.start = function() {
            if (r) {
                return
            }
            var t = a();
            o || p();
            (function s() {
                var v = a()
                  , u = q(t);
                if (v !== t) {
                    o(t = v, u);
                    $(i).trigger(d)
                } else {
                    if (u !== t) {
                        i[c][l] = i[c][l].replace(/#.*/, "") + "#" + u
                    }
                }
                r = setTimeout(s, $[d + "Delay"])
            }
            )()
        }
        ;
        m.stop = function() {
            if (!n) {
                r && clearTimeout(r);
                r = 0
            }
        }
        ;
        return m
    }()
}
)(jQuery, this);
