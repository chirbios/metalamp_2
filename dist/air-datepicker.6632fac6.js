// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/air-datepicker.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.AirDatepicker = t() : e.AirDatepicker = t();
}(this, function () {
  return function () {
    "use strict";

    var e = {
      d: function d(t, i) {
        for (var n in i) {
          e.o(i, n) && !e.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: i[n]
          });
        }
      },
      o: function o(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
    },
        t = {};
    e.d(t, {
      default: function _default() {
        return Ce;
      }
    });
    var i = "days",
        n = "months",
        a = "years",
        s = "day",
        r = "month",
        o = "year",
        l = "changeViewDate",
        c = "changeCurrentView",
        u = "changeFocusDate",
        h = "changeSelectedDate",
        d = "changeTime",
        p = "changeLastSelectedDate",
        f = "selectDate",
        v = "unselectDate",
        m = "-weekend-",
        y = {
      classes: "",
      inline: !1,
      locale: {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        dateFormat: "dd.MM.yyyy",
        timeFormat: "HH:mm",
        firstDay: 1
      },
      startDate: new Date(),
      firstDay: "",
      weekends: [6, 0],
      dateFormat: "",
      altField: "",
      altFieldDateFormat: "T",
      toggleSelected: !0,
      keyboardNav: !0,
      selectedDates: !1,
      container: "",
      isMobile: !1,
      visible: !1,
      position: "bottom left",
      offset: 12,
      view: i,
      minView: i,
      showOtherMonths: !0,
      selectOtherMonths: !0,
      moveToOtherMonthsOnSelect: !0,
      showOtherYears: !0,
      selectOtherYears: !0,
      moveToOtherYearsOnSelect: !0,
      minDate: "",
      maxDate: "",
      disableNavWhenOutOfRange: !0,
      multipleDates: !1,
      multipleDatesSeparator: ", ",
      range: !1,
      dynamicRange: !0,
      buttons: !1,
      monthsField: "monthsShort",
      showEvent: "focus",
      autoClose: !1,
      prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
      nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
      navTitles: {
        days: "MMMM, <i>yyyy</i>",
        months: "yyyy",
        years: "yyyy1 - yyyy2"
      },
      timepicker: !1,
      onlyTimepicker: !1,
      dateTimeSeparator: " ",
      timeFormat: "",
      minHours: 0,
      maxHours: 24,
      minMinutes: 0,
      maxMinutes: 59,
      hoursStep: 1,
      minutesStep: 1,
      onSelect: !1,
      onChangeViewDate: !1,
      onChangeView: !1,
      onRenderCell: !1,
      onShow: !1,
      onHide: !1
    };

    function g(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    function D(e) {
      return D = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, D(e);
    }

    function b(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

        if (null != i) {
          var n,
              a,
              s = [],
              r = !0,
              o = !1;

          try {
            for (i = i.call(e); !(r = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); r = !0) {
              ;
            }
          } catch (e) {
            o = !0, a = e;
          } finally {
            try {
              r || null == i.return || i.return();
            } finally {
              if (o) throw a;
            }
          }

          return s;
        }
      }(e, t) || w(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function k(e) {
      return function (e) {
        if (Array.isArray(e)) return _(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || w(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function w(e, t) {
      if (e) {
        if ("string" == typeof e) return _(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _(e, t) : void 0;
      }
    }

    function _(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var i = 0, n = new Array(t); i < t; i++) {
        n[i] = e[i];
      }

      return n;
    }

    function M(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      return "string" == typeof e ? t.querySelector(e) : e;
    }

    function $() {
      var e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = t.tagName,
          n = void 0 === i ? "div" : i,
          a = t.className,
          s = void 0 === a ? "" : a,
          r = t.innerHtml,
          o = void 0 === r ? "" : r,
          l = t.id,
          c = void 0 === l ? "" : l,
          u = t.attrs,
          h = void 0 === u ? {} : u,
          d = document.createElement(n);
      if (s && (e = d.classList).add.apply(e, k(s.split(" "))), c && (d.id = c), o && (d.innerHTML = o), h) for (var p in h) {
        d.setAttribute(p, h[p]);
      }
      return d;
    }

    function C(e, t) {
      for (var i = 0, n = Object.entries(t); i < n.length; i++) {
        var a = b(n[i], 2),
            s = a[0],
            r = a[1];
        e.setAttribute(s, r);
      }

      return e;
    }

    function S(e) {
      return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    }

    function T(e) {
      var t = e.getHours(),
          i = t % 12 == 0 ? 12 : t % 12;
      return {
        year: e.getFullYear(),
        month: e.getMonth(),
        fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
        date: e.getDate(),
        fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
        day: e.getDay(),
        hours: t,
        fullHours: A(t),
        hours12: i,
        fullHours12: A(i),
        minutes: e.getMinutes(),
        fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
      };
    }

    function A(e) {
      return e < 10 ? "0" + e : e;
    }

    function F(e) {
      var t = 10 * Math.floor(e.getFullYear() / 10);
      return [t, t + 9];
    }

    function O() {
      for (var e = [], t = arguments.length, i = new Array(t), n = 0; n < t; n++) {
        i[n] = arguments[n];
      }

      return i.forEach(function (t) {
        if ("object" === D(t)) for (var i in t) {
          t[i] && e.push(i);
        } else t && e.push(t);
      }), e.join(" ");
    }

    function E(e, t) {
      var s,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
      if (!e || !t) return !1;
      var o = T(e),
          l = T(t),
          c = (g(s = {}, i, o.date === l.date && o.month === l.month && o.year === l.year), g(s, n, o.month === l.month && o.year === l.year), g(s, a, o.year === l.year), s);
      return c[r];
    }

    function V(e, t, i) {
      var n = H(e, !1).getTime(),
          a = H(t, !1).getTime();
      return i ? n >= a : n > a;
    }

    function x(e, t) {
      return !V(e, t, !0);
    }

    function H(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = new Date(e.getTime());
      return "boolean" != typeof t || t || I(i), i;
    }

    function I(e) {
      return e.setHours(0, 0, 0, 0), e;
    }

    function L(e, t, i) {
      e.length ? e.forEach(function (e) {
        e.addEventListener(t, i);
      }) : e.addEventListener(t, i);
    }

    function N(e, t) {
      return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : N(e.parentNode, t));
    }

    function j(e, t, i) {
      return e > i ? i : e < t ? t : e;
    }

    function P(e) {
      for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        i[n - 1] = arguments[n];
      }

      return i.filter(function (e) {
        return e;
      }).forEach(function (t) {
        for (var i = 0, n = Object.entries(t); i < n.length; i++) {
          var a = b(n[i], 2),
              s = a[0],
              r = a[1];

          if (void 0 !== r && "[object Object]" === r.toString()) {
            var o = void 0 !== e[s] ? e[s].toString() : void 0,
                l = r.toString(),
                c = Array.isArray(r) ? [] : {};
            e[s] = e[s] ? o !== l ? c : e[s] : c, P(e[s], r);
          } else e[s] = r;
        }
      }), e;
    }

    function R(e) {
      var t = e;
      return e instanceof Date || (t = new Date(e)), isNaN(t.getTime()) && (console.log('Unable to convert value "'.concat(e, '" to Date object')), t = !1), t;
    }

    function B(e) {
      var t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
      return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
    }

    function K(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var i = 0, n = new Array(t); i < t; i++) {
        n[i] = e[i];
      }

      return n;
    }

    function U(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function Y(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function W(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var q,
        J = function () {
      function e() {
        var t = this,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = i.type,
            a = i.date,
            s = i.dp,
            r = i.opts,
            o = i.body;
        U(this, e), W(this, "focus", function () {
          t.$cell.classList.add("-focus-"), t.focused = !0;
        }), W(this, "removeFocus", function () {
          t.$cell.classList.remove("-focus-"), t.focused = !1;
        }), W(this, "select", function () {
          t.$cell.classList.add("-selected-"), t.selected = !0;
        }), W(this, "removeSelect", function () {
          t.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), t.selected = !1;
        }), W(this, "onChangeSelectedDate", function () {
          t.isDisabled || (t._handleSelectedStatus(), t.opts.range && t._handleRangeStatus());
        }), W(this, "onChangeFocusDate", function (e) {
          if (e) {
            var i = E(e, t.date, t.type);
            i ? t.focus() : !i && t.focused && t.removeFocus(), t.opts.range && t._handleRangeStatus();
          } else t.focused && t.removeFocus();
        }), W(this, "render", function () {
          return t.$cell.innerHTML = t._getHtml(), t.$cell.adpCell = t, t.$cell;
        }), this.type = n, this.singleType = this.type.slice(0, -1), this.date = a, this.dp = s, this.opts = r, this.body = o, this.customData = !1, this.init();
      }

      var t, s;
      return t = e, (s = [{
        key: "init",
        value: function value() {
          var e = this.opts,
              t = e.range,
              i = e.onRenderCell;
          i && (this.customData = i({
            date: this.date,
            cellType: this.singleType,
            datepicker: this.dp
          })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), t && this._handleRangeStatus());
        }
      }, {
        key: "_bindDatepickerEvents",
        value: function value() {
          this.dp.on(h, this.onChangeSelectedDate), this.dp.on(u, this.onChangeFocusDate);
        }
      }, {
        key: "unbindDatepickerEvents",
        value: function value() {
          this.dp.off(h, this.onChangeSelectedDate), this.dp.off(u, this.onChangeFocusDate);
        }
      }, {
        key: "_createElement",
        value: function value() {
          var e = T(this.date),
              t = e.year,
              i = e.month,
              n = e.date;
          this.$cell = $({
            className: this._getClassName(),
            attrs: {
              "data-year": t,
              "data-month": i,
              "data-date": n
            }
          });
        }
      }, {
        key: "_getClassName",
        value: function value() {
          var e,
              t,
              s = new Date(),
              r = this.opts,
              o = r.selectOtherMonths,
              l = r.selectOtherYears,
              c = this.dp,
              u = c.minDate,
              h = c.maxDate,
              d = T(this.date).day,
              p = this._isOutOfMinMaxRange(),
              f = null === (e = this.customData) || void 0 === e ? void 0 : e.disabled,
              v = O("air-datepicker-cell", "-".concat(this.singleType, "-"), {
            "-current-": E(s, this.date, this.type),
            "-min-date-": u && E(u, this.date, this.type),
            "-max-date-": h && E(h, this.date, this.type)
          }),
              m = "";

          switch (this.type) {
            case i:
              m = O({
                "-weekend-": this.dp.isWeekend(d),
                "-other-month-": this.isOtherMonth,
                "-disabled-": this.isOtherMonth && !o || p || f
              });
              break;

            case n:
              m = O({
                "-disabled-": p || f
              });
              break;

            case a:
              m = O({
                "-other-decade-": this.isOtherDecade,
                "-disabled-": p || this.isOtherDecade && !l || f
              });
          }

          return O(v, m, null === (t = this.customData) || void 0 === t ? void 0 : t.classes);
        }
      }, {
        key: "_getHtml",
        value: function value() {
          var e,
              t = T(this.date),
              s = t.year,
              r = t.month,
              o = t.date,
              l = this.opts,
              c = l.showOtherMonths,
              u = l.showOtherYears;
          if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;

          switch (this.type) {
            case i:
              return !c && this.isOtherMonth ? "" : o;

            case n:
              return this.dp.locale[this.opts.monthsField][r];

            case a:
              return !u && this.isOtherDecade ? "" : s;
          }
        }
      }, {
        key: "_isOutOfMinMaxRange",
        value: function value() {
          var e = this.dp,
              t = e.minDate,
              n = e.maxDate,
              s = this.type,
              r = T(this.date),
              o = r.month,
              l = r.year,
              c = r.date,
              u = s === i,
              h = s === a,
              d = !!t && new Date(l, h ? t.getMonth() : o, u ? c : t.getDate()),
              p = !!n && new Date(l, h ? n.getMonth() : o, u ? c : n.getDate());
          return t && n ? x(d, t) || V(p, n) : t ? x(d, t) : n ? V(p, n) : void 0;
        }
      }, {
        key: "destroy",
        value: function value() {
          this.unbindDatepickerEvents();
        }
      }, {
        key: "_handleRangeStatus",
        value: function value() {
          var e,
              t,
              i,
              n,
              a,
              s = this.dp,
              r = s.rangeDateFrom,
              o = s.rangeDateTo,
              l = O({
            "-in-range-": r && o && (e = this.date, t = r, i = o, V(e, t) && x(e, i)),
            "-range-from-": r && E(this.date, r, this.type),
            "-range-to-": o && E(this.date, o, this.type)
          });
          this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), l && (n = this.$cell.classList).add.apply(n, function (e) {
            if (Array.isArray(e)) return K(e);
          }(a = l.split(" ")) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(a) || function (e, t) {
            if (e) {
              if ("string" == typeof e) return K(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? K(e, t) : void 0;
            }
          }(a) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }());
        }
      }, {
        key: "_handleSelectedStatus",
        value: function value() {
          var e = this.dp._checkIfDateIsSelected(this.date, this.type);

          e ? this.select() : !e && this.selected && this.removeSelect();
        }
      }, {
        key: "_handleInitialFocusStatus",
        value: function value() {
          E(this.dp.focusDate, this.date, this.type) && this.focus();
        }
      }, {
        key: "isDisabled",
        get: function get() {
          return this.$cell.matches(".-disabled-");
        }
      }, {
        key: "isOtherMonth",
        get: function get() {
          return this.dp.isOtherMonth(this.date);
        }
      }, {
        key: "isOtherDecade",
        get: function get() {
          return this.dp.isOtherDecade(this.date);
        }
      }]) && Y(t.prototype, s), e;
    }();

    function z(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function X(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var G = (X(q = {}, i, '<div class="air-datepicker-body--day-names"></div>' + '<div class="air-datepicker-body--cells -'.concat(i, '-"></div>')), X(q, n, '<div class="air-datepicker-body--cells -'.concat(n, '-"></div>')), X(q, a, '<div class="air-datepicker-body--cells -'.concat(a, '-"></div>')), q),
        Q = function () {
      function e(t) {
        var s = this,
            r = t.dp,
            o = t.type,
            l = t.opts;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), X(this, "handleClick", function (e) {
          var t = N(e.target, ".air-datepicker-cell");

          if (t) {
            var i = t.adpCell;
            if (!i.isDisabled) if (s.dp.isMinViewReached) {
              var n = s.dp._checkIfDateIsSelected(i.date, i.type);

              n ? s.dp._handleAlreadySelectedDates(n, i.date) : s.dp.selectDate(i.date);
            } else s.dp.down();
          }
        }), X(this, "onChangeCurrentView", function (e) {
          e !== s.type ? s.hide() : (s.show(), s.render());
        }), X(this, "onMouseOverCell", function (e) {
          var t = N(e.target, ".air-datepicker-cell");
          s.dp.setFocusDate(!!t && t.adpCell.date);
        }), X(this, "onMouseOutCell", function () {
          s.dp.setFocusDate(!1);
        }), X(this, "onClickCell", function (e) {
          s.handleClick(e);
        }), X(this, "onMouseDown", function (e) {
          s.pressed = !0;
          var t = N(e.target, ".air-datepicker-cell"),
              i = t && t.adpCell;
          E(i.date, s.dp.rangeDateFrom) && (s.rangeFromFocused = !0), E(i.date, s.dp.rangeDateTo) && (s.rangeToFocused = !0);
        }), X(this, "onMouseMove", function (e) {
          if (s.pressed && s.dp.isMinViewReached) {
            e.preventDefault();
            var t = N(e.target, ".air-datepicker-cell"),
                i = t && t.adpCell,
                n = s.dp,
                a = n.selectedDates,
                r = n.rangeDateTo,
                o = n.rangeDateFrom;

            if (i && !i.isDisabled) {
              var l = i.date;

              if (2 === a.length) {
                if (s.rangeFromFocused && !V(l, r)) {
                  var c = T(o),
                      u = c.hours,
                      h = c.minutes;
                  l.setHours(u), l.setMinutes(h), s.dp.rangeDateFrom = l, s.dp.replaceDate(o, l);
                }

                if (s.rangeToFocused && !x(l, o)) {
                  var d = T(r),
                      p = d.hours,
                      f = d.minutes;
                  l.setHours(p), l.setMinutes(f), s.dp.rangeDateTo = l, s.dp.replaceDate(r, l);
                }
              }
            }
          }
        }), X(this, "onMouseUp", function () {
          s.pressed = !1, s.rangeFromFocused = !1, s.rangeToFocused = !1;
        }), X(this, "onChangeViewDate", function (e, t) {
          if (s.isVisible) {
            var r = F(e),
                o = F(t);

            switch (s.dp.currentView) {
              case i:
                if (E(e, t, n)) return;
                break;

              case n:
                if (E(e, t, a)) return;
                break;

              case a:
                if (r[0] === o[0] && r[1] === o[1]) return;
            }

            s.render();
          }
        }), X(this, "render", function () {
          s.destroyCells(), s._generateCells(), s.cells.forEach(function (e) {
            s.$cells.appendChild(e.render());
          });
        }), this.dp = r, this.type = o, this.opts = l, this.cells = [], this.$el = "", this.pressed = !1, this.isVisible = !0, this.init();
      }

      var t, s;
      return t = e, s = [{
        key: "init",
        value: function value() {
          this._buildBaseHtml(), this.type === i && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
        }
      }, {
        key: "_bindEvents",
        value: function value() {
          var e = this.opts,
              t = e.range,
              i = e.dynamicRange;
          L(this.$el, "mouseover", this.onMouseOverCell), L(this.$el, "mouseout", this.onMouseOutCell), L(this.$el, "click", this.onClickCell), t && i && (L(this.$el, "mousedown", this.onMouseDown), L(this.$el, "mousemove", this.onMouseMove), L(window.document, "mouseup", this.onMouseUp));
        }
      }, {
        key: "_bindDatepickerEvents",
        value: function value() {
          this.dp.on(l, this.onChangeViewDate), this.dp.on(c, this.onChangeCurrentView);
        }
      }, {
        key: "_buildBaseHtml",
        value: function value() {
          this.$el = $({
            className: "air-datepicker-body -".concat(this.type, "-"),
            innerHtml: G[this.type]
          }), this.$names = M(".air-datepicker-body--day-names", this.$el), this.$cells = M(".air-datepicker-body--cells", this.$el);
        }
      }, {
        key: "_getDayNamesHtml",
        value: function value() {
          for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t = "", i = this.dp.isWeekend, n = e, a = 0; a < 7;) {
            var s = n % 7,
                r = O("air-datepicker-body--day-name", X({}, m, i(s))),
                o = this.dp.locale.daysMin[s];
            t += '<div class="'.concat(r, '">').concat(o, "</div>"), a++, n++;
          }

          return t;
        }
      }, {
        key: "_getDaysCells",
        value: function value() {
          var e = this.dp,
              t = e.viewDate,
              i = e.locale.firstDay,
              n = S(t),
              a = T(t),
              s = a.year,
              r = a.month,
              o = new Date(s, r, 1),
              l = new Date(s, r, n),
              c = o.getDay() - i,
              u = 6 - l.getDay() + i;
          u = u > 6 ? u - 7 : u;

          for (var h = function (e, t) {
            var i = T(e),
                n = i.year,
                a = i.month,
                s = i.date;
            return new Date(n, a, s - t);
          }(o, c = c < 0 ? c + 7 : c), d = n + c + u, p = h.getDate(), f = T(h), v = f.year, m = f.month, y = 0; y < d;) {
            var g = new Date(v, m, p + y);
            this._generateCell(g), y++;
          }
        }
      }, {
        key: "_generateCell",
        value: function value(e) {
          var t = this.type,
              i = this.dp,
              n = this.opts,
              a = new J({
            type: t,
            dp: i,
            opts: n,
            date: e,
            body: this
          });
          return this.cells.push(a), a;
        }
      }, {
        key: "_generateDayCells",
        value: function value() {
          this._getDaysCells();
        }
      }, {
        key: "_generateMonthCells",
        value: function value() {
          for (var e = this.dp.parsedViewDate.year, t = 0; t < 12;) {
            this.cells.push(this._generateCell(new Date(e, t))), t++;
          }
        }
      }, {
        key: "_generateYearCells",
        value: function value() {
          for (var e = F(this.dp.viewDate), t = e[0] - 1, i = e[1] + 1, n = t; n <= i;) {
            this.cells.push(this._generateCell(new Date(n, 0))), n++;
          }
        }
      }, {
        key: "renderDayNames",
        value: function value() {
          this.$names.innerHTML = this._getDayNamesHtml();
        }
      }, {
        key: "_generateCells",
        value: function value() {
          switch (this.type) {
            case i:
              this._generateDayCells();

              break;

            case n:
              this._generateMonthCells();

              break;

            case a:
              this._generateYearCells();

          }
        }
      }, {
        key: "show",
        value: function value() {
          this.isVisible = !0, this.$el.classList.remove("-hidden-");
        }
      }, {
        key: "hide",
        value: function value() {
          this.isVisible = !1, this.$el.classList.add("-hidden-");
        }
      }, {
        key: "destroyCells",
        value: function value() {
          this.cells.forEach(function (e) {
            return e.destroy();
          }), this.cells = [], this.$cells.innerHTML = "";
        }
      }, {
        key: "destroy",
        value: function value() {
          this.destroyCells(), this.dp.off(l, this.onChangeViewDate), this.dp.off(c, this.onChangeCurrentView);
        }
      }], s && z(t.prototype, s), e;
    }();

    function Z(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function ee(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var te = function () {
      function e(t) {
        var i = this,
            n = t.dp,
            a = t.opts;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), ee(this, "onClickNav", function (e) {
          var t = N(e.target, ".air-datepicker-nav--action");

          if (t) {
            var n = t.dataset.action;
            i.dp[n]();
          }
        }), ee(this, "onChangeViewDate", function () {
          i.render(), i._resetNavStatus(), i.handleNavStatus();
        }), ee(this, "onChangeCurrentView", function () {
          i.render(), i._resetNavStatus(), i.handleNavStatus();
        }), ee(this, "onClickNavTitle", function () {
          i.dp.isFinalView || i.dp.up();
        }), ee(this, "update", function () {
          var e = i.opts,
              t = e.prevHtml,
              n = e.nextHtml;
          i.$prev.innerHTML = t, i.$next.innerHTML = n, i._resetNavStatus(), i.render(), i.handleNavStatus();
        }), ee(this, "renderDelay", function () {
          setTimeout(i.render);
        }), ee(this, "render", function () {
          i.$title.innerHTML = i._getTitle(), function (e, t) {
            for (var i in t) {
              t[i] ? e.classList.add(i) : e.classList.remove(i);
            }
          }(i.$title, {
            "-disabled-": i.dp.isFinalView
          });
        }), this.dp = n, this.opts = a, this.init();
      }

      var t, s;
      return t = e, s = [{
        key: "init",
        value: function value() {
          this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
        }
      }, {
        key: "_defineDOM",
        value: function value() {
          this.$title = M(".air-datepicker-nav--title", this.$el), this.$prev = M('[data-action="prev"]', this.$el), this.$next = M('[data-action="next"]', this.$el);
        }
      }, {
        key: "_bindEvents",
        value: function value() {
          this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
        }
      }, {
        key: "_bindDatepickerEvents",
        value: function value() {
          this.dp.on(l, this.onChangeViewDate), this.dp.on(c, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(h, this.renderDelay), this.dp.opts.timepicker && this.dp.on(d, this.render));
        }
      }, {
        key: "destroy",
        value: function value() {
          this.dp.off(l, this.onChangeViewDate), this.dp.off(c, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(h, this.renderDelay), this.dp.opts.timepicker && this.dp.off(d, this.render));
        }
      }, {
        key: "_createElement",
        value: function value() {
          this.$el = $({
            tagName: "nav",
            className: "air-datepicker-nav"
          });
        }
      }, {
        key: "_getTitle",
        value: function value() {
          var e = this.dp,
              t = this.opts.navTitles[e.currentView];
          return "function" == typeof t ? t(e) : e.formatDate(e.viewDate, t);
        }
      }, {
        key: "handleNavStatus",
        value: function value() {
          var e = this.opts.disableNavWhenOutOfRange,
              t = this.dp,
              s = t.minDate,
              r = t.maxDate;

          if ((s || r) && e) {
            var o = this.dp.parsedViewDate,
                l = o.year,
                c = o.month,
                u = !!s && T(s),
                h = !!r && T(r);

            switch (this.dp.currentView) {
              case i:
                s && u.month >= c && u.year >= l && this._disableNav("prev"), r && h.month <= c && h.year <= l && this._disableNav("next");
                break;

              case n:
                s && u.year >= l && this._disableNav("prev"), r && h.year <= l && this._disableNav("next");
                break;

              case a:
                var d = F(this.dp.viewDate);
                s && u.year >= d[0] && this._disableNav("prev"), r && h.year <= d[1] && this._disableNav("next");
            }
          }
        }
      }, {
        key: "_disableNav",
        value: function value(e) {
          M('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
        }
      }, {
        key: "_resetNavStatus",
        value: function value() {
          !function (e) {
            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
              i[n - 1] = arguments[n];
            }

            var a;
            e.length ? e.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, i);
            }) : (a = e.classList).remove.apply(a, i);
          }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
        }
      }, {
        key: "_buildBaseHtml",
        value: function value() {
          var e = this.opts,
              t = e.prevHtml,
              i = e.nextHtml;
          this.$el.innerHTML = '<div class="air-datepicker-nav--action" data-action="prev">'.concat(t, "</div>") + '<div class="air-datepicker-nav--title"></div>' + '<div class="air-datepicker-nav--action" data-action="next">'.concat(i, "</div>");
        }
      }, {
        key: "isNavIsFunction",
        get: function get() {
          var e = this.opts.navTitles;
          return Object.keys(e).find(function (t) {
            return "function" == typeof e[t];
          });
        }
      }], s && Z(t.prototype, s), e;
    }();

    var ie = {
      today: {
        content: function content(e) {
          return e.locale.today;
        },
        onClick: function onClick(e) {
          return e.setViewDate(new Date());
        }
      },
      clear: {
        content: function content(e) {
          return e.locale.clear;
        },
        onClick: function onClick(e) {
          return e.clear();
        }
      }
    };

    function ne(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    var ae = function () {
      function e(t) {
        var i = t.dp,
            n = t.opts;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.dp = i, this.opts = n, this.init();
      }

      var t, i;
      return t = e, (i = [{
        key: "init",
        value: function value() {
          this.createElement(), this.render();
        }
      }, {
        key: "createElement",
        value: function value() {
          this.$el = $({
            className: "air-datepicker-buttons"
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          this.$el.parentNode.removeChild(this.$el);
        }
      }, {
        key: "clearHtml",
        value: function value() {
          return this.$el.innerHTML = "", this;
        }
      }, {
        key: "generateButtons",
        value: function value() {
          var e = this,
              t = this.opts.buttons;
          Array.isArray(t) || (t = [t]), t.forEach(function (t) {
            var i = t;
            "string" == typeof t && ie[t] && (i = ie[t]);
            var n = e.createButton(i);
            i.onClick && e.attachEventToButton(n, i.onClick), e.$el.appendChild(n);
          });
        }
      }, {
        key: "attachEventToButton",
        value: function value(e, t) {
          var i = this;
          e.addEventListener("click", function () {
            t(i.dp);
          });
        }
      }, {
        key: "createButton",
        value: function value(e) {
          var t = e.content,
              i = e.className,
              n = e.tagName,
              a = void 0 === n ? "button" : n,
              s = e.attrs,
              r = void 0 === s ? {} : s,
              o = "function" == typeof t ? t(this.dp) : t;
          return $({
            tagName: a,
            innerHtml: "<span tabindex='-1'>".concat(o, "</span>"),
            className: O("air-datepicker-button", i),
            attrs: r
          });
        }
      }, {
        key: "render",
        value: function value() {
          this.generateButtons();
        }
      }]) && ne(t.prototype, i), e;
    }();

    function se(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function re(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function oe(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var le = function () {
      function e() {
        var t = this,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = i.opts,
            a = i.dp;
        se(this, e), oe(this, "toggleTimepickerIsActive", function (e) {
          t.dp.timepickerIsActive = e;
        }), oe(this, "onChangeSelectedDate", function (e) {
          var i = e.date,
              n = e.updateTime,
              a = void 0 !== n && n;
          i && (t.setMinMaxTime(i), t.setCurrentTime(!!a && i), t.addTimeToDate(i));
        }), oe(this, "onChangeLastSelectedDate", function (e) {
          e && (t.setTime(e), t.render());
        }), oe(this, "onChangeInputRange", function (e) {
          var i = e.target,
              n = i.getAttribute("name");
          t[n] = i.value, t.updateText(), t.dp.trigger(d, {
            hours: t.hours,
            minutes: t.minutes
          });
        }), oe(this, "onMouseEnterLeave", function (e) {
          var i = e.target.getAttribute("name"),
              n = t.$minutesText;
          "hours" === i && (n = t.$hoursText), n.classList.toggle("-focus-");
        }), oe(this, "onFocus", function () {
          t.toggleTimepickerIsActive(!0);
        }), oe(this, "onBlur", function () {
          t.toggleTimepickerIsActive(!1);
        }), this.opts = n, this.dp = a;
        var s = this.dp.locale.timeFormat;
        s && (s.match(B("h")) || s.match(B("hh"))) && (this.ampm = !0), this.init();
      }

      var t, i;
      return t = e, (i = [{
        key: "init",
        value: function value() {
          this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
        }
      }, {
        key: "bindDatepickerEvents",
        value: function value() {
          this.dp.on(h, this.onChangeSelectedDate), this.dp.on(p, this.onChangeLastSelectedDate);
        }
      }, {
        key: "bindDOMEvents",
        value: function value() {
          var e = "input";
          navigator.userAgent.match(/trident/gi) && (e = "change"), L(this.$ranges, e, this.onChangeInputRange), L(this.$ranges, "mouseenter", this.onMouseEnterLeave), L(this.$ranges, "mouseleave", this.onMouseEnterLeave), L(this.$ranges, "focus", this.onFocus), L(this.$ranges, "blur", this.onBlur);
        }
      }, {
        key: "createElement",
        value: function value() {
          this.$el = $({
            className: O("air-datepicker-time", {
              "-am-pm-": this.dp.ampm
            })
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          this.dp.off(h, this.onChangeSelectedDate), this.dp.off(p, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
        }
      }, {
        key: "buildHtml",
        value: function value() {
          var e = this.ampm,
              t = this.hours,
              i = this.displayHours,
              n = this.minutes,
              a = this.minHours,
              s = this.minMinutes,
              r = this.maxHours,
              o = this.maxMinutes,
              l = this.dayPeriod,
              c = this.opts,
              u = c.hoursStep,
              h = c.minutesStep;
          this.$el.innerHTML = '<div class="air-datepicker-time--current">' + '   <span class="air-datepicker-time--current-hours">'.concat(A(i), "</span>") + '   <span class="air-datepicker-time--current-colon">:</span>' + '   <span class="air-datepicker-time--current-minutes">'.concat(A(n), "</span>") + "   ".concat(e ? "<span class='air-datepicker-time--current-ampm'>".concat(l, "</span>") : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + '      <input type="range" name="hours" value="'.concat(t, '" min="').concat(a, '" max="').concat(r, '" step="').concat(u, '"/>') + '   </div>   <div class="air-datepicker-time--row">' + '      <input type="range" name="minutes" value="'.concat(n, '" min="').concat(s, '" max="').concat(o, '" step="').concat(h, '"/>') + "   </div></div>";
        }
      }, {
        key: "defineDOM",
        value: function value() {
          var e = this,
              t = function t(_t) {
            return M(_t, e.$el);
          };

          this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = t('[name="hours"]'), this.$minutes = t('[name="minutes"]'), this.$hoursText = t(".air-datepicker-time--current-hours"), this.$minutesText = t(".air-datepicker-time--current-minutes"), this.$ampm = t(".air-datepicker-time--current-ampm");
        }
      }, {
        key: "setTime",
        value: function value(e) {
          this.setMinMaxTime(e), this.setCurrentTime(e);
        }
      }, {
        key: "addTimeToDate",
        value: function value(e) {
          e && (e.setHours(this.hours), e.setMinutes(this.minutes));
        }
      }, {
        key: "setMinMaxTime",
        value: function value(e) {
          if (this.setMinMaxTimeFromOptions(), e) {
            var t = this.dp,
                i = t.minDate,
                n = t.maxDate;
            i && E(e, i) && this.setMinTimeFromMinDate(i), n && E(e, n) && this.setMaxTimeFromMaxDate(n);
          }
        }
      }, {
        key: "setCurrentTime",
        value: function value(e) {
          var t = e ? T(e) : this,
              i = t.hours,
              n = t.minutes;
          this.hours = j(i, this.minHours, this.maxHours), this.minutes = j(n, this.minMinutes, this.maxMinutes);
        }
      }, {
        key: "setMinMaxTimeFromOptions",
        value: function value() {
          var e = this.opts,
              t = e.minHours,
              i = e.minMinutes,
              n = e.maxHours,
              a = e.maxMinutes;
          this.minHours = j(t, 0, 23), this.minMinutes = j(i, 0, 59), this.maxHours = j(n, 0, 23), this.maxMinutes = j(a, 0, 59);
        }
      }, {
        key: "setMinTimeFromMinDate",
        value: function value(e) {
          var t = this.dp.lastSelectedDate;
          this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
        }
      }, {
        key: "setMaxTimeFromMaxDate",
        value: function value(e) {
          var t = this.dp.lastSelectedDate;
          this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
        }
      }, {
        key: "getDayPeriod",
        value: function value(e, t) {
          var i = e,
              n = Number(e);
          e instanceof Date && (i = T(e), n = Number(i.hours));
          var a = "am";

          if (t || this.ampm) {
            switch (!0) {
              case 12 === n:
              case n > 11:
                a = "pm";
            }

            n = n % 12 == 0 ? 12 : n % 12;
          }

          return {
            hours: n,
            dayPeriod: a
          };
        }
      }, {
        key: "updateSliders",
        value: function value() {
          C(this.$hours, {
            min: this.minHours,
            max: this.maxHours
          }).value = this.hours, C(this.$minutes, {
            min: this.minMinutes,
            max: this.maxMinutes
          }).value = this.minutes;
        }
      }, {
        key: "updateText",
        value: function value() {
          this.$hoursText.innerHTML = A(this.displayHours), this.$minutesText.innerHTML = A(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
        }
      }, {
        key: "hours",
        get: function get() {
          return this._hours;
        },
        set: function set(e) {
          this._hours = e;
          var t = this.getDayPeriod(e),
              i = t.hours,
              n = t.dayPeriod;
          this.displayHours = i, this.dayPeriod = n;
        }
      }, {
        key: "render",
        value: function value() {
          this.updateSliders(), this.updateText();
        }
      }]) && re(t.prototype, i), e;
    }();

    function ce(e, t) {
      if (e) {
        if ("string" == typeof e) return ue(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ue(e, t) : void 0;
      }
    }

    function ue(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var i = 0, n = new Array(t); i < t; i++) {
        n[i] = e[i];
      }

      return n;
    }

    function he(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function de(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var pe = function () {
      function e(t) {
        var i = this,
            n = t.dp,
            a = t.opts;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), de(this, "pressedKeys", new Set()), de(this, "hotKeys", new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], function (e) {
          return e.month++;
        }], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], function (e) {
          return e.month--;
        }], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], function (e) {
          return e.year++;
        }], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], function (e) {
          return e.year--;
        }], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], function (e) {
          return e.year += 10;
        }], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], function (e) {
          return e.year -= 10;
        }], [["Control", "Shift", "ArrowUp"], function (e, t) {
          return t.up();
        }]])), de(this, "handleHotKey", function (e) {
          var t = i.hotKeys.get(e),
              n = T(i.getInitialFocusDate());
          t(n, i.dp);
          var a = n.year,
              s = n.month,
              r = n.date,
              o = S(new Date(a, s));
          o < r && (r = o);
          var l = i.dp.getClampedDate(new Date(a, s, r));
          i.dp.setFocusDate(l, {
            viewDateTransition: !0
          });
        }), de(this, "isHotKeyPressed", function () {
          var e,
              t = !1,
              n = i.pressedKeys.size,
              a = function a(e) {
            return i.pressedKeys.has(e);
          },
              s = function (e, t) {
            var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

            if (!i) {
              if (Array.isArray(e) || (i = ce(e))) {
                i && (e = i);

                var _n = 0,
                    a = function a() {};

                return {
                  s: a,
                  n: function n() {
                    return _n >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[_n++]
                    };
                  },
                  e: function e(_e2) {
                    throw _e2;
                  },
                  f: a
                };
              }

              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            var s,
                r = !0,
                o = !1;
            return {
              s: function s() {
                i = i.call(e);
              },
              n: function n() {
                var e = i.next();
                return r = e.done, e;
              },
              e: function e(_e3) {
                o = !0, s = _e3;
              },
              f: function f() {
                try {
                  r || null == i.return || i.return();
                } finally {
                  if (o) throw s;
                }
              }
            };
          }(i.hotKeys);

          try {
            var r = function r() {
              var i,
                  s,
                  r = (i = e.value, s = 1, function (e) {
                if (Array.isArray(e)) return e;
              }(i) || function (e, t) {
                var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

                if (null != i) {
                  var n,
                      a,
                      s = [],
                      r = !0,
                      o = !1;

                  try {
                    for (i = i.call(e); !(r = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); r = !0) {
                      ;
                    }
                  } catch (e) {
                    o = !0, a = e;
                  } finally {
                    try {
                      r || null == i.return || i.return();
                    } finally {
                      if (o) throw a;
                    }
                  }

                  return s;
                }
              }(i, s) || ce(i, s) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }())[0];
              if (t) return "break";
              if (Array.isArray(r[0])) r.forEach(function (e) {
                t || n !== e.length || (t = e.every(a) && r);
              });else {
                if (n !== r.length) return "continue";
                t = r.every(a) && r;
              }
            };

            for (s.s(); !(e = s.n()).done;) {
              if ("break" === r()) break;
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }

          return t;
        }), de(this, "isArrow", function (e) {
          return e >= 37 && e <= 40;
        }), de(this, "onKeyDown", function (e) {
          var t = e.key,
              n = e.which,
              a = i.dp,
              s = i.dp.focusDate,
              r = i.opts;
          i.registerKey(t);
          var o = i.isHotKeyPressed();
          if (o) return e.preventDefault(), void i.handleHotKey(o);
          if (i.isArrow(n)) return e.preventDefault(), void i.focusNextCell(t);

          if ("Enter" === t) {
            if (a.currentView !== r.minView) return void a.down();

            if (s) {
              var l = a._checkIfDateIsSelected(s);

              return void (l ? a._handleAlreadySelectedDates(l, s) : a.selectDate(s));
            }
          }

          "Escape" === t && i.dp.hide();
        }), de(this, "onKeyUp", function (e) {
          i.removeKey(e.key);
        }), this.dp = n, this.opts = a, this.init();
      }

      var t, s;
      return t = e, (s = [{
        key: "init",
        value: function value() {
          this.bindKeyboardEvents();
        }
      }, {
        key: "bindKeyboardEvents",
        value: function value() {
          var e = this.dp.$el;
          e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
        }
      }, {
        key: "destroy",
        value: function value() {
          var e = this.dp.$el;
          e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
        }
      }, {
        key: "getInitialFocusDate",
        value: function value() {
          var e = this.dp,
              t = e.focusDate,
              s = e.currentView,
              r = e.selectedDates,
              o = e.parsedViewDate,
              l = o.year,
              c = o.month,
              u = t || r[r.length - 1];
          if (!u) switch (s) {
            case i:
              u = new Date(l, c, new Date().getDate());
              break;

            case n:
              u = new Date(l, c, 1);
              break;

            case a:
              u = new Date(l, 0, 1);
          }
          return u;
        }
      }, {
        key: "focusNextCell",
        value: function value(e) {
          var t = this.getInitialFocusDate(),
              s = this.dp.currentView,
              r = i,
              o = n,
              l = a,
              c = T(t),
              u = c.year,
              h = c.month,
              d = c.date;

          switch (e) {
            case "ArrowLeft":
              s === r && (d -= 1), s === o && (h -= 1), s === l && (u -= 1);
              break;

            case "ArrowUp":
              s === r && (d -= 7), s === o && (h -= 3), s === l && (u -= 4);
              break;

            case "ArrowRight":
              s === r && (d += 1), s === o && (h += 1), s === l && (u += 1);
              break;

            case "ArrowDown":
              s === r && (d += 7), s === o && (h += 3), s === l && (u += 4);
          }

          var p = this.dp.getClampedDate(new Date(u, h, d));
          this.dp.setFocusDate(p, {
            viewDateTransition: !0
          });
        }
      }, {
        key: "registerKey",
        value: function value(e) {
          this.pressedKeys.add(e);
        }
      }, {
        key: "removeKey",
        value: function value(e) {
          this.pressedKeys.delete(e);
        }
      }]) && he(t.prototype, s), e;
    }(),
        fe = {
      on: function on(e, t) {
        this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [t];
      },
      off: function off(e, t) {
        this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter(function (e) {
          return e !== t;
        }));
      },
      removeAllEvents: function removeAllEvents() {
        this.__events = {};
      },
      trigger: function trigger(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
          i[n - 1] = arguments[n];
        }

        this.__events && this.__events[e] && this.__events[e].forEach(function (e) {
          e.apply(void 0, i);
        });
      }
    };

    function ve(e) {
      return function (e) {
        if (Array.isArray(e)) return ge(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || ye(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function me(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

        if (null != i) {
          var n,
              a,
              s = [],
              r = !0,
              o = !1;

          try {
            for (i = i.call(e); !(r = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); r = !0) {
              ;
            }
          } catch (e) {
            o = !0, a = e;
          } finally {
            try {
              r || null == i.return || i.return();
            } finally {
              if (o) throw a;
            }
          }

          return s;
        }
      }(e, t) || ye(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function ye(e, t) {
      if (e) {
        if ("string" == typeof e) return ge(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ge(e, t) : void 0;
      }
    }

    function ge(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var i = 0, n = new Array(t); i < t; i++) {
        n[i] = e[i];
      }

      return n;
    }

    function De(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function be(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    var ke,
        we = "",
        _e = "",
        Me = "",
        $e = !1,
        Ce = function () {
      function e(t, s) {
        var r = this;

        if (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), be(this, "viewIndexes", [i, n, a]), be(this, "next", function () {
          var e = r.parsedViewDate,
              t = e.year,
              s = e.month;

          switch (r.currentView) {
            case i:
              r.setViewDate(new Date(t, s + 1, 1));
              break;

            case n:
              r.setViewDate(new Date(t + 1, s, 1));
              break;

            case a:
              r.setViewDate(new Date(t + 10, 0, 1));
          }
        }), be(this, "prev", function () {
          var e = r.parsedViewDate,
              t = e.year,
              s = e.month;

          switch (r.currentView) {
            case i:
              r.setViewDate(new Date(t, s - 1, 1));
              break;

            case n:
              r.setViewDate(new Date(t - 1, s, 1));
              break;

            case a:
              r.setViewDate(new Date(t - 10, 0, 1));
          }
        }), be(this, "_finishHide", function () {
          r.hideAnimation = !1, r._destroyComponents(), r.$container.removeChild(r.$datepicker);
        }), be(this, "setPosition", function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

          if ("function" != typeof (e = e || r.opts.position)) {
            var i,
                n,
                a = r.opts.isMobile,
                s = r.$el.getBoundingClientRect(),
                o = r.$el.getBoundingClientRect(),
                l = r.$datepicker.offsetParent,
                c = r.$el.offsetParent,
                u = r.$datepicker.getBoundingClientRect(),
                h = e.split(" "),
                d = window.scrollY,
                p = window.scrollX,
                f = r.opts.offset,
                v = h[0],
                m = h[1];
            if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%";else {
              if (l === c && l !== document.body && (o = {
                top: r.$el.offsetTop,
                left: r.$el.offsetLeft,
                width: s.width,
                height: r.$el.offsetHeight
              }, d = 0, p = 0), l !== c && l !== document.body) {
                var y = l.getBoundingClientRect();
                o = {
                  top: s.top - y.top,
                  left: s.left - y.left,
                  width: s.width,
                  height: s.height
                }, d = 0, p = 0;
              }

              switch (v) {
                case "top":
                  i = o.top - u.height - f;
                  break;

                case "right":
                  n = o.left + o.width + f;
                  break;

                case "bottom":
                  i = o.top + o.height + f;
                  break;

                case "left":
                  n = o.left - u.width - f;
              }

              switch (m) {
                case "top":
                  i = o.top;
                  break;

                case "right":
                  n = o.left + o.width - u.width;
                  break;

                case "bottom":
                  i = o.top + o.height - u.height;
                  break;

                case "left":
                  n = o.left;
                  break;

                case "center":
                  /left|right/.test(v) ? i = o.top + o.height / 2 - u.height / 2 : n = o.left + o.width / 2 - u.width / 2;
              }

              r.$datepicker.style.cssText = "left: ".concat(n + p, "px; top: ").concat(i + d, "px");
            }
          } else r.customHide = e({
            $datepicker: r.$datepicker,
            $target: r.$el,
            $pointer: r.$pointer,
            isViewChange: t,
            done: r._finishHide
          });
        }), be(this, "_setInputValue", function () {
          var e = r.opts,
              t = r.$altField,
              i = r.locale.dateFormat,
              n = e.altFieldDateFormat;
          e.altField && t && (t.value = r._getInputValue(n)), r.$el.value = r._getInputValue(i);
        }), be(this, "_getInputValue", function (e) {
          var t = r.selectedDates,
              i = r.opts,
              n = i.multipleDates,
              a = i.multipleDatesSeparator;
          if (!t.length) return "";
          var s = "function" == typeof e,
              o = s ? e(n ? t : t[0]) : t.map(function (t) {
            return r.formatDate(t, e);
          });
          return s ? o : o.join(a);
        }), be(this, "_checkIfDateIsSelected", function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
              n = !1;
          return r.selectedDates.some(function (i) {
            var a = E(e, i, t);
            return n = a && i, a;
          }), n;
        }), be(this, "_scheduleCallAfterTransition", function (e) {
          r._cancelScheduledCall(), e && e(!1), r._onTransitionEnd = function () {
            e && e(!0);
          }, r.$datepicker.addEventListener("transitionend", r._onTransitionEnd, {
            once: !0
          });
        }), be(this, "_cancelScheduledCall", function () {
          r.$datepicker.removeEventListener("transitionend", r._onTransitionEnd);
        }), be(this, "setViewDate", function (e) {
          if ((e = R(e)) instanceof Date && !E(e, r.viewDate)) {
            var t = r.viewDate;
            r.viewDate = e;
            var i = r.opts.onChangeViewDate;

            if (i) {
              var n = r.parsedViewDate;
              i({
                month: n.month,
                year: n.year,
                decade: r.curDecade
              });
            }

            r.trigger(l, e, t);
          }
        }), be(this, "setFocusDate", function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (!e || (e = R(e)) instanceof Date) && (r.focusDate = e, r.opts.range && e && r._handleRangeOnFocus(), r.trigger(u, e, t));
        }), be(this, "setCurrentView", function (e) {
          if (r.viewIndexes.includes(e)) {
            if (r.currentView = e, r.elIsInput && r.visible && r.setPosition(void 0, !0), r.trigger(c, e), !r.views[e]) {
              var t = r.views[e] = new Q({
                dp: r,
                opts: r.opts,
                type: e
              });
              r.$content.appendChild(t.$el);
            }

            r.opts.onChangeView && r.opts.onChangeView(e);
          }
        }), be(this, "_updateLastSelectedDate", function (e) {
          r.lastSelectedDate = e, r.trigger(p, e);
        }), be(this, "destroy", function () {
          var e = r.opts,
              t = e.showEvent,
              i = e.isMobile,
              n = r.$datepicker.parentNode;
          n && n.removeChild(r.$datepicker), r.$el.removeEventListener(t, r._onFocus), r.$el.removeEventListener("blur", r._onBlur), i && r._removeMobileAttributes(), r.keyboardNav && r.keyboardNav.destroy(), r.views = null, r.nav = null, r.$datepicker = null, r.opts = null, r.$customContainer = null, r.viewDate = null, r.focusDate = null, r.selectedDates = null, r.rangeDateFrom = null, r.rangeDateTo = null;
        }), be(this, "update", function (e) {
          var t = P({}, r.opts);
          P(r.opts, e);
          var n = r.opts,
              a = n.timepicker,
              s = n.buttons,
              o = n.range,
              l = n.selectedDates,
              c = n.isMobile,
              u = r.visible || r.treatAsInline;
          r._createMinMaxDates(), r._limitViewDateByMaxMinDates(), r._handleLocale(), !t.selectedDates && l && r.selectDate(l), e.view && r.setCurrentView(e.view), r._setInputValue(), t.range && !o ? (r.rangeDateTo = !1, r.rangeDateFrom = !1) : !t.range && o && r.selectedDates.length && (r.rangeDateFrom = r.selectedDates[0], r.rangeDateTo = r.selectedDates[1]), t.timepicker && !a ? (u && r.timepicker.destroy(), r.timepicker = !1, r.$timepicker.parentNode.removeChild(r.$timepicker)) : !t.timepicker && a && r._addTimepicker(), !t.buttons && s ? r._addButtons() : t.buttons && !s ? (r.buttons.destroy(), r.$buttons.parentNode.removeChild(r.$buttons)) : u && t.buttons && s && r.buttons.clearHtml().render(), !t.isMobile && c ? (r.treatAsInline || Me || r._createMobileOverlay(), r._addMobileAttributes()) : t.isMobile && !c && r._removeMobileAttributes(), u && (r.nav.update(), r.views[r.currentView].render(), r.currentView === i && r.views[r.currentView].renderDayNames());
        }), be(this, "isOtherMonth", function (e) {
          return T(e).month !== r.parsedViewDate.month;
        }), be(this, "isOtherYear", function (e) {
          return T(e).year !== r.parsedViewDate.year;
        }), be(this, "isOtherDecade", function (e) {
          var t = T(e).year,
              i = me(F(r.viewDate), 2),
              n = i[0],
              a = i[1];
          return t < n || t > a;
        }), be(this, "_onChangeSelectedDate", function (e) {
          var t = e.silent;
          setTimeout(function () {
            r._setInputValue(), r.opts.onSelect && !t && r._triggerOnSelect();
          });
        }), be(this, "_onChangeFocusedDate", function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = t.viewDateTransition;

          if (e) {
            var n = !1;
            i && (n = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), n && r.setViewDate(e);
          }
        }), be(this, "_onChangeTime", function (e) {
          var t = e.hours,
              i = e.minutes,
              n = new Date(),
              a = r.lastSelectedDate,
              s = r.opts.onSelect,
              o = a;
          a || (o = n);
          var l = r.getCell(o),
              c = l && l.adpCell;
          c && c.isDisabled || (o.setHours(t), o.setMinutes(i), a ? (r._setInputValue(), s && r._triggerOnSelect()) : r.selectDate(o));
        }), be(this, "_onFocus", function (e) {
          r.visible || r.show();
        }), be(this, "_onBlur", function (e) {
          r.inFocus || !r.visible || r.opts.isMobile || r.hide();
        }), be(this, "_onMouseDown", function (e) {
          r.inFocus = !0;
        }), be(this, "_onMouseUp", function (e) {
          r.inFocus = !1, r.$el.focus();
        }), be(this, "_onClickOverlay", function () {
          r.visible && r.hide();
        }), be(this, "isWeekend", function (e) {
          return r.opts.weekends.includes(e);
        }), be(this, "getClampedDate", function (e) {
          var t = r.minDate,
              i = r.maxDate,
              n = e;
          return i && V(e, i) ? n = i : t && x(e, t) && (n = t), n;
        }), this.$el = M(t), this.$el) {
          this.$datepicker = $({
            className: "air-datepicker"
          }), this.opts = P({}, y, s), this.$customContainer = !!this.opts.container && M(this.opts.container), this.$altField = M(this.opts.altField || !1), we || (we = M("body"));
          var o = this.opts,
              h = o.view;
          o.startDate || (this.opts.startDate = new Date()), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), this.inited = !1, this.visible = !1, this.viewDate = R(this.opts.startDate), this.focusDate = !1, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, this.currentView = h, this.selectedDates = [], this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
        }
      }

      var t, m, g;
      return t = e, m = [{
        key: "init",
        value: function value() {
          var t,
              i = this.opts,
              n = this.treatAsInline,
              a = this.opts,
              s = a.inline,
              r = a.isMobile,
              o = a.selectedDates,
              l = a.keyboardNav,
              c = a.onlyTimepicker;
          $e || s || !this.elIsInput || (t = e.defaultContainerId, $e = !0, _e = $({
            className: t,
            id: t
          }), we.appendChild(_e)), !r || Me || n || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (s || this._bindEvents(), l && !c && (this.keyboardNav = new pe({
            dp: this,
            opts: i
          }))), o && this.selectDate(o, {
            silent: !0
          }), this.opts.visible && !n && this.show(), n && this._createComponents();
        }
      }, {
        key: "_createMobileOverlay",
        value: function value() {
          Me = $({
            className: "air-datepicker-overlay"
          }), _e.appendChild(Me);
        }
      }, {
        key: "_createComponents",
        value: function value() {
          var e,
              t = this.opts,
              i = this.treatAsInline,
              n = this.opts,
              a = n.inline,
              s = n.buttons,
              r = n.timepicker,
              o = n.position,
              l = n.classes,
              c = n.onlyTimepicker,
              u = n.isMobile;
          this._buildBaseHtml(), this.elIsInput && (a || this._setPositionClasses(o)), !a && this.elIsInput || this.$datepicker.classList.add("-inline-"), l && (e = this.$datepicker.classList).add.apply(e, ve(l.split(" "))), c && this.$datepicker.classList.add("-only-timepicker-"), u && !i && this._addMobileAttributes(), this.views[this.currentView] = new Q({
            dp: this,
            type: this.currentView,
            opts: t
          }), this.nav = new te({
            dp: this,
            opts: t
          }), r && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
        }
      }, {
        key: "_destroyComponents",
        value: function value() {
          for (var e in this.views) {
            this.views[e].destroy();
          }

          this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
        }
      }, {
        key: "_addMobileAttributes",
        value: function value() {
          Me.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", !0);
        }
      }, {
        key: "_removeMobileAttributes",
        value: function value() {
          Me.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
        }
      }, {
        key: "_createMinMaxDates",
        value: function value() {
          var e = this.opts,
              t = e.minDate,
              i = e.maxDate;
          this.minDate = !!t && R(t), this.maxDate = !!i && R(i);
        }
      }, {
        key: "_addTimepicker",
        value: function value() {
          this.$timepicker = $({
            className: "air-datepicker--time"
          }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new le({
            dp: this,
            opts: this.opts
          }), this.$timepicker.appendChild(this.timepicker.$el);
        }
      }, {
        key: "_addButtons",
        value: function value() {
          this.$buttons = $({
            className: "air-datepicker--buttons"
          }), this.$datepicker.appendChild(this.$buttons), this.buttons = new ae({
            dp: this,
            opts: this.opts
          }), this.$buttons.appendChild(this.buttons.$el);
        }
      }, {
        key: "_bindSubEvents",
        value: function value() {
          this.on(h, this._onChangeSelectedDate), this.on(u, this._onChangeFocusedDate), this.on(d, this._onChangeTime);
        }
      }, {
        key: "_buildBaseHtml",
        value: function value() {
          var e,
              t,
              i = this.opts.inline;
          this.elIsInput ? i ? (e = this.$datepicker, (t = this.$el).parentNode.insertBefore(e, t.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = M(".air-datepicker--content", this.$datepicker), this.$pointer = M(".air-datepicker--pointer", this.$datepicker), this.$nav = M(".air-datepicker--navigation", this.$datepicker);
        }
      }, {
        key: "_handleLocale",
        value: function value() {
          var e,
              t = this.opts,
              i = t.locale,
              n = t.dateFormat,
              a = t.firstDay,
              s = t.timepicker,
              r = t.onlyTimepicker,
              o = t.timeFormat,
              l = t.dateTimeSeparator;
          this.locale = (e = i, JSON.parse(JSON.stringify(e))), n && (this.locale.dateFormat = n), void 0 !== o && "" !== o && (this.locale.timeFormat = o);
          var c = this.locale.timeFormat;

          if ("" !== a && (this.locale.firstDay = a), s && "function" != typeof n) {
            var u = c ? l : "";
            this.locale.dateFormat = [this.locale.dateFormat, c || ""].join(u);
          }

          r && (this.locale.dateFormat = this.locale.timeFormat);
        }
      }, {
        key: "_setPositionClasses",
        value: function value(e) {
          var t;

          if ("function" != typeof e) {
            var i = (e = e.split(" "))[0],
                n = e[1],
                a = "air-datepicker -".concat(i, "-").concat(n, "- -from-").concat(i, "-");
            (t = this.$datepicker.classList).add.apply(t, ve(a.split(" ")));
          } else this.$datepicker.classList.add("-custom-position-");
        }
      }, {
        key: "_bindEvents",
        value: function value() {
          this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp);
        }
      }, {
        key: "_limitViewDateByMaxMinDates",
        value: function value() {
          var e = this.viewDate,
              t = this.minDate,
              i = this.maxDate;
          i && V(e, i) && this.setViewDate(i), t && x(e, t) && this.setViewDate(t);
        }
      }, {
        key: "formatDate",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate,
              i = arguments.length > 1 ? arguments[1] : void 0;

          if ((t = R(t)) instanceof Date) {
            var n = i,
                a = this.locale,
                s = T(t),
                r = F(t),
                o = e.replacer,
                l = "am";
            this.opts.timepicker && this.timepicker && (l = this.timepicker.getDayPeriod(t).dayPeriod);

            for (var c = {
              T: t.getTime(),
              m: s.minutes,
              mm: s.fullMinutes,
              h: s.hours12,
              hh: s.fullHours12,
              H: s.hours,
              HH: s.fullHours,
              aa: l,
              AA: l.toUpperCase(),
              E: a.daysShort[s.day],
              EEEE: a.days[s.day],
              d: s.date,
              dd: s.fullDate,
              M: s.month + 1,
              MM: s.fullMonth,
              MMM: a.monthsShort[s.month],
              MMMM: a.months[s.month],
              yy: s.year.toString().slice(-2),
              yyyy: s.year,
              yyyy1: r[0],
              yyyy2: r[1]
            }, u = 0, h = Object.entries(c); u < h.length; u++) {
              var d = me(h[u], 2),
                  p = d[0],
                  f = d[1];
              n = o(n, B(p), f);
            }

            return n;
          }
        }
      }, {
        key: "down",
        value: function value(e) {
          this._handleUpDownActions(e, "down");
        }
      }, {
        key: "up",
        value: function value(e) {
          this._handleUpDownActions(e, "up");
        }
      }, {
        key: "selectDate",
        value: function value(e) {
          var t,
              n = this,
              s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = this.currentView,
              o = this.parsedViewDate,
              l = this.selectedDates,
              c = s.updateTime,
              u = this.opts,
              d = u.moveToOtherMonthsOnSelect,
              p = u.moveToOtherYearsOnSelect,
              v = u.multipleDates,
              m = u.range,
              y = u.autoClose,
              g = l.length;
          if (Array.isArray(e)) return e.forEach(function (e) {
            n.selectDate(e, s);
          }), new Promise(function (e) {
            setTimeout(e);
          });

          if ((e = R(e)) instanceof Date) {
            if (r === i && e.getMonth() !== o.month && d && (t = new Date(e.getFullYear(), e.getMonth(), 1)), r === a && e.getFullYear() !== o.year && p && (t = new Date(e.getFullYear(), 0, 1)), t && this.setViewDate(t), v && !m) {
              if (g === v) return;
              this._checkIfDateIsSelected(e) || l.push(e);
            } else if (m) switch (g) {
              case 1:
                l.push(e), this.rangeDateTo || (this.rangeDateTo = e), V(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
                break;

              case 2:
                this.selectedDates = [e], this.rangeDateFrom = e, this.rangeDateTo = "";
                break;

              default:
                this.selectedDates = [e], this.rangeDateFrom = e;
            } else this.selectedDates = [e];

            return this.trigger(h, {
              action: f,
              silent: null == s ? void 0 : s.silent,
              date: e,
              updateTime: c
            }), this._updateLastSelectedDate(e), y && !this.timepickerIsActive && this.visible && (v || m ? m && 2 === g && this.hide() : this.hide()), new Promise(function (e) {
              setTimeout(e);
            });
          }
        }
      }, {
        key: "unselectDate",
        value: function value(e) {
          var t = this,
              i = this.selectedDates,
              n = this;
          if ((e = R(e)) instanceof Date) return i.some(function (a, s) {
            if (E(a, e)) return i.splice(s, 1), n.selectedDates.length ? n._updateLastSelectedDate(n.selectedDates[n.selectedDates.length - 1]) : (n.rangeDateFrom = "", n.rangeDateTo = "", n._updateLastSelectedDate(!1)), t.trigger(h, {
              action: v,
              date: e
            }), !0;
          });
        }
      }, {
        key: "replaceDate",
        value: function value(e, t) {
          var i = this,
              n = this.selectedDates.find(function (t) {
            return E(t, e, i.currentView);
          }),
              a = this.selectedDates.indexOf(n);
          a < 0 || E(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, this.trigger(h, {
            action: f,
            date: t,
            updateTime: !0
          }), this._updateLastSelectedDate(t));
        }
      }, {
        key: "clear",
        value: function value() {
          this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, this.trigger(h, {
            action: v
          });
        }
      }, {
        key: "show",
        value: function value() {
          var e = this.opts,
              t = e.onShow,
              i = e.isMobile;
          this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = !0, t && this._scheduleCallAfterTransition(t), i && Me.classList.add("-active-");
        }
      }, {
        key: "hide",
        value: function value() {
          var e = this,
              t = this.opts,
              i = t.onHide,
              n = t.isMobile,
              a = this._hasTransition();

          this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition(function (t) {
            !e.customHide && (t && a || !t && !a) && e._finishHide(), i && i(t);
          }), n && Me.classList.remove("-active-");
        }
      }, {
        key: "_triggerOnSelect",
        value: function value() {
          var e = this,
              t = [],
              i = [],
              n = this,
              a = n.selectedDates,
              s = n.locale,
              r = n.opts,
              o = r.onSelect,
              l = r.multipleDates,
              c = "function" == typeof s.dateFormat;
          a.length && (t = a.map(H), i = c ? l ? s.dateFormat(t) : t.map(function (e) {
            return s.dateFormat(e);
          }) : t.map(function (t) {
            return e.formatDate(t, s.dateFormat);
          })), o({
            date: l ? t : t[0],
            formattedDate: l ? i : i[0],
            datepicker: n
          });
        }
      }, {
        key: "_handleAlreadySelectedDates",
        value: function value(e, t) {
          var i = this.opts,
              n = i.range,
              a = i.toggleSelected;
          n ? a ? this.unselectDate(t) : 2 !== this.selectedDates.length && this.selectDate(t) : a && this.unselectDate(t), a || this._updateLastSelectedDate(e);
        }
      }, {
        key: "_handleUpDownActions",
        value: function value(e, t) {
          if ((e = R(e || this.focusDate || this.viewDate)) instanceof Date) {
            var i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
            i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i]);
          }
        }
      }, {
        key: "_handleRangeOnFocus",
        value: function value() {
          1 === this.selectedDates.length && (V(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
        }
      }, {
        key: "getCell",
        value: function value(e) {
          var t,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;

          if ((c = R(e)) instanceof Date) {
            var n = T(c),
                a = n.year,
                l = n.month,
                c = n.date,
                u = '[data-year="'.concat(a, '"]'),
                h = '[data-month="'.concat(l, '"]'),
                d = '[data-date="'.concat(c, '"]'),
                p = (be(t = {}, s, "".concat(u).concat(h).concat(d)), be(t, r, "".concat(u).concat(h)), be(t, o, "".concat(u)), t);
            return this.views[this.currentView].$el.querySelector(p[i]);
          }
        }
      }, {
        key: "_hasTransition",
        value: function value() {
          return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(function (e, t) {
            return parseFloat(t) + e;
          }, 0) > 0;
        }
      }, {
        key: "parsedViewDate",
        get: function get() {
          return T(this.viewDate);
        }
      }, {
        key: "curDecade",
        get: function get() {
          return F(this.viewDate);
        }
      }, {
        key: "viewIndex",
        get: function get() {
          return this.viewIndexes.indexOf(this.currentView);
        }
      }, {
        key: "isFinalView",
        get: function get() {
          return this.currentView === a;
        }
      }, {
        key: "hasSelectedDates",
        get: function get() {
          return this.selectedDates.length > 0;
        }
      }, {
        key: "isMinViewReached",
        get: function get() {
          return this.currentView === this.opts.minView || this.currentView === i;
        }
      }, {
        key: "$container",
        get: function get() {
          return this.$customContainer || _e;
        }
      }], g = [{
        key: "replacer",
        value: function value(e, t, i) {
          return e.replace(t, function (e, t, n, a) {
            return t + i + a;
          });
        }
      }], m && De(t.prototype, m), g && De(t, g), e;
    }();

    return be(Ce, "defaults", y), be(Ce, "version", "3.1.0"), be(Ce, "defaultContainerId", "air-datepicker-global-container"), ke = Ce.prototype, Object.assign(ke, fe), t.default;
  }();
});
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57885" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/air-datepicker.js"], null)
//# sourceMappingURL=/air-datepicker.6632fac6.js.map