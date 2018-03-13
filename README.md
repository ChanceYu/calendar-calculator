# month-calculator
[![NPM][img-npm]][url-npm]

[![Build Status][img-travis]][url-travis]
[![Language][img-javascript]][url-github]
[![License][img-mit]][url-mit]

A plugin for month date calculator , [中文](./README-zh.md)


## Install

```bash
npm install month-calculator --save
```


## Features

- Highly customizable
- No dependence on UI, You can design by yourself
- Support browser、nodejs、miniProgram（小程序）


## Usage

```javascript
var oMonth = new MonthCalculator({
    startDate: '2017-07-17',
    endDate: '2018-08-18'
});

var months = oMonth.getTotal();

console.log(months);
```


## Parameter

- `startDate` - the start date formatted like `YYYY-MM-DD`
- `endDate` -  the end date formatted like `YYYY-MM-DD`


## Method

- `getTotal` - get the total months from `startDate` to `endDate`
- `getToday` - if today's date is between `startDate` and `endDate`, will return an Object `{ monthIndex, date }`, and the `monthIndex` is today's month index in total result, otherwise will return `undefined`


## Result

After use `getTotal` method will return the result structure below

```bash
[
    {
        title: '2017-07',
        dates: [
            {
                date: '2017-06-25',
                year: '2017',
                month: '06',
                day: '25',
                disabled: true,
                isPrevMonth: true,
                week: '日',
                weekday: 0
            }
            ...
        ]
    }
    ...
]
```


### Result date properties
- `date` - total date formatted `YYYY-MM-DD`
- `year` - date formatted `YYYY`
- `month` - date formatted `MM`
- `day` - date formatted `DD`
- `weekday` - weekday from `0` to `6`
- `week` - Chinese weekday `日一二三四五六`
- `isPrevMonth` - if it is previous month date, will be `true`
- `isNextMonth` - if it is next month date, will be `true`
- `disabled` - if it is `isPrevMonth`、`isNextMonth` or current month disabled date(not between `startDate` to `endDate`), will be `true`


## Examples

- [react-calendar-picker](https://github.com/ChanceYu/react-calendar-picker)
- [weapp-calendar-picker 微信小程序组件](https://github.com/ChanceYu/weapp#weapp-calendar-picker)


## License

[![license][img-mit]][url-mit]


[url-github]: https://github.com/ChanceYu/month-calculator
[url-npm]: https://www.npmjs.com/package/month-calculator
[url-travis]: https://travis-ci.org/ChanceYu/month-calculator
[url-david]: https://david-dm.org/ChanceYu/month-calculator
[url-mit]: https://opensource.org/licenses/mit-license.php

[img-npm]: https://nodei.co/npm/month-calculator.png?compact=true
[img-travis]: https://travis-ci.org/ChanceYu/month-calculator.svg?branch=master
[img-david]: https://david-dm.org/ChanceYu/month-calculator/status.svg
[img-javascript]: https://img.shields.io/badge/language-JavaScript-brightgreen.svg
[img-mit]: https://img.shields.io/badge/license-MIT-blue.svg
