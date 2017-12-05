/*!
 * month-calculator.js
 * Version: 1.0.8
 * Address: (https://github.com/ChanceYu/month-calculator)
 * Author: ChanceYu
 * Licensed under the MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define("MonthCalculator", ["moment"], factory);
	else if(typeof exports === 'object')
		exports["MonthCalculator"] = factory(require("moment"));
	else
		root["MonthCalculator"] = factory(root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    toDouble: function toDouble(n) {
        return n < 10 ? '0' + n : n + '';
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * month-calculator.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Address: (https://github.com/ChanceYu/month-calculator)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Author: ChanceYu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Licensed under the MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _tool = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingleMonth = function () {
  function SingleMonth(options) {
    _classCallCheck(this, SingleMonth);

    this.options = (0, _objectAssign2.default)({}, SingleMonth.defaultOptions, options);

    this.init();
  }

  _createClass(SingleMonth, [{
    key: 'init',
    value: function init() {
      var oStartDate = (0, _moment2.default)(this.options.startDate);
      var oEndDate = (0, _moment2.default)(this.options.endDate);

      var oFirstDate = oStartDate.clone().startOf('month');
      var oLastDate = oStartDate.clone().endOf('month');

      var oFirstWeekDate = oFirstDate.clone().startOf('week');
      var oPrevMonthLastDate = oFirstWeekDate.clone().endOf('month');

      var oLastWeekDate = oLastDate.clone().endOf('week');
      var oNextMonthFirstDate = oLastWeekDate.clone().startOf('month');

      if (!oFirstDate.isSame(oFirstWeekDate)) {
        this.existPrevMonthDays = true;
      }

      if (!oFirstDate.isSame(oStartDate)) {
        this.existStartDisableDays = true;
      }

      if (!oLastDate.isSame(oEndDate)) {
        this.existEndDisableDays = true;
      }

      if (!oLastDate.isSame(oLastWeekDate)) {
        this.existNextMonthDays = true;
      }

      this.startDate = oStartDate.date();
      this.endDate = oEndDate.date();

      this.firstDate = oFirstDate.date();
      this.lastDate = oLastDate.date();

      this.prevMonthFirstDate = oFirstWeekDate.date();
      this.prevMonthLastDate = oPrevMonthLastDate.date();

      this.nextMonthLastDate = oLastWeekDate.date();

      this.YYYY = oStartDate.format('YYYY');
      this.MM = oStartDate.format('MM');
      this.prevMM = oFirstWeekDate.format('MM');
      this.nextMM = oLastWeekDate.format('MM');
      this.todayDate = (0, _moment2.default)().format('YYYY-MM-DD');
    }
  }, {
    key: 'getTotalDateCell',
    value: function getTotalDateCell() {
      var cells = [];

      var weekTitle = '日一二三四五六'.split('');
      var weekIndex = 0;
      var i = 0;

      // prev month disabled days
      if (this.existPrevMonthDays) {
        for (i = this.prevMonthFirstDate; i <= this.prevMonthLastDate; i++) {
          var day = (0, _tool.toDouble)(i);
          var date = this.YYYY + '-' + this.prevMM + '-' + day;
          var week = weekTitle[weekIndex];
          var item = {
            date: date,
            weekday: weekIndex,
            week: week,
            day: day,
            isPrevMonth: true,
            disabled: true
          };

          if (date === this.todayDate) {
            this.existToday = true;
            item.isToday = true;
          }

          cells.push(item);

          weekIndex++;

          if (weekIndex === 7) weekIndex = 0;
        }
      }

      // current month disabled days `start`
      if (this.existStartDisableDays) {
        for (i = 1; i < this.startDate; i++) {
          var _day = (0, _tool.toDouble)(i);
          var _date = this.YYYY + '-' + this.MM + '-' + _day;
          var _week = weekTitle[weekIndex];
          var _item = {
            date: _date,
            weekday: weekIndex,
            week: _week,
            day: _day,
            disabled: true
          };

          if (_date === this.todayDate) {
            this.existToday = true;
            _item.isToday = true;
          }

          cells.push(_item);

          weekIndex++;

          if (weekIndex === 7) weekIndex = 0;
        }
      }

      // current month enabled days
      for (i = this.startDate; i <= this.endDate; i++) {
        var _day2 = (0, _tool.toDouble)(i);
        var _date2 = this.YYYY + '-' + this.MM + '-' + _day2;
        var _week2 = weekTitle[weekIndex];
        var _item2 = {
          date: _date2,
          weekday: weekIndex,
          week: _week2,
          day: _day2,
          enabled: true
        };

        if (_date2 === this.todayDate) {
          this.existToday = true;
          _item2.isToday = true;
        }

        cells.push(_item2);

        weekIndex++;

        if (weekIndex === 7) weekIndex = 0;
      }

      // current month disabled days `end`
      if (this.existEndDisableDays) {
        for (i = this.endDate + 1; i <= this.lastDate; i++) {
          var _day3 = (0, _tool.toDouble)(i);
          var _date3 = this.YYYY + '-' + this.MM + '-' + _day3;
          var _week3 = weekTitle[weekIndex];
          var _item3 = {
            date: _date3,
            weekday: weekIndex,
            week: _week3,
            day: _day3,
            disabled: true
          };

          if (_date3 === this.todayDate) {
            this.existToday = true;
            _item3.isToday = true;
          }

          cells.push(_item3);

          weekIndex++;

          if (weekIndex === 7) weekIndex = 0;
        }
      }

      // next month disabled days
      if (this.existNextMonthDays) {
        for (i = 1; i <= this.nextMonthLastDate; i++) {
          var _day4 = (0, _tool.toDouble)(i);
          var _date4 = this.YYYY + '-' + this.nextMM + '-' + _day4;
          var _week4 = weekTitle[weekIndex];
          var _item4 = {
            date: _date4,
            weekday: weekIndex,
            week: _week4,
            day: _day4,
            isNextMonth: true,
            disabled: true
          };

          if (_date4 === this.todayDate) {
            this.existToday = true;
            _item4.isToday = true;
          }

          cells.push(_item4);

          weekIndex++;

          if (weekIndex === 7) weekIndex = 0;
        }
      }

      return cells;
    }
  }]);

  return SingleMonth;
}();

SingleMonth.defaultOptions = {
  startDate: '',
  endDate: ''
};


module.exports = SingleMonth;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * month-calculator.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Address: (https://github.com/ChanceYu/month-calculator)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Author: ChanceYu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Licensed under the MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _tool = __webpack_require__(0);

var _SingleMonth = __webpack_require__(3);

var _SingleMonth2 = _interopRequireDefault(_SingleMonth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MonthCalculator = function () {
  function MonthCalculator(options) {
    _classCallCheck(this, MonthCalculator);

    this.options = (0, _objectAssign2.default)({}, MonthCalculator.defaultOptions, options);
  }

  _createClass(MonthCalculator, [{
    key: 'isInvalidDate',
    value: function isInvalidDate() {
      var startDate = this.options.startDate;
      var endDate = this.options.endDate;

      var valid = function valid(date) {
        date = date.split(/\D/);

        return date.length === 3;
      };

      return valid(startDate) && valid(endDate) && (0, _moment2.default)(startDate).isValid() && (0, _moment2.default)(endDate).isValid();
    }
  }, {
    key: 'getTotal',
    value: function getTotal() {
      var startDate = this.options.startDate;
      var endDate = this.options.endDate;
      var format = this.options.format;

      var oStartDate = (0, _moment2.default)(startDate);
      var oEndDate = (0, _moment2.default)(endDate);

      var monthData = [];
      var startEdgeDateOfStartDate = oStartDate.clone().startOf('month').format(format);
      var startEdgeDateOfEndDate = oEndDate.clone().startOf('month').format(format);

      var oMonth = void 0;

      if (startEdgeDateOfStartDate === startEdgeDateOfEndDate) {
        oMonth = new _SingleMonth2.default({
          startDate: startDate,
          endDate: endDate
        });

        monthData.push({
          title: (0, _moment2.default)(startDate).format('YYYY-MM'),
          dates: oMonth.getTotalDateCell()
        });

        if (oMonth.existToday) {
          this.todayDate = {};
          this.todayDate.date = oMonth.todayDate;
          this.todayDate.monthIndex = monthData.length - 1;
        }
      } else {
        var _startDate = startDate;
        var _endDate = (0, _moment2.default)(startDate).endOf('month').format(format);

        while (_startDate !== startEdgeDateOfEndDate) {
          oMonth = new _SingleMonth2.default({
            startDate: _startDate,
            endDate: _endDate
          });

          monthData.push({
            title: (0, _moment2.default)(_startDate).format('YYYY-MM'),
            dates: oMonth.getTotalDateCell()
          });

          if (oMonth.existToday) {
            this.todayDate = {};
            this.todayDate.date = oMonth.todayDate;
            this.todayDate.monthIndex = monthData.length - 1;
          }

          var nextMonth = (0, _moment2.default)(_endDate).subtract(-1, "days");

          _startDate = nextMonth.startOf('month').format(format);
          _endDate = nextMonth.endOf('month').format(format);
        }

        oMonth = new _SingleMonth2.default({
          startDate: startEdgeDateOfEndDate,
          endDate: endDate
        });

        monthData.push({
          title: (0, _moment2.default)(startEdgeDateOfEndDate).format('YYYY-MM'),
          dates: oMonth.getTotalDateCell()
        });

        if (oMonth.existToday) {
          this.todayDate = {};
          this.todayDate.date = oMonth.todayDate;
          this.todayDate.monthIndex = monthData.length - 1;
        }
      }

      return monthData;
    }
  }, {
    key: 'getToday',
    value: function getToday() {
      return this.todayDate;
    }
  }]);

  return MonthCalculator;
}();

MonthCalculator.defaultOptions = {
  startDate: '',
  endDate: '',
  format: 'YYYY-MM-DD'
};
;

module.exports = MonthCalculator;

/***/ })
/******/ ]);
});