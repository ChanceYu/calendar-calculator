# month-calculator
[![Build Status](https://travis-ci.org/ChanceYu/month-calculator.svg?branch=master)](https://travis-ci.org/ChanceYu/month-calculator)
[![](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)](https://travis-ci.org/ChanceYu/month-calculator)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 

A plugin for month date calculator , [中文](./README-zh.md)


## Install

```bash
npm install month-calculator
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


## Result

After use `getTotal` method will return the result structure below

```bash
[
    {
        title: '2017-07',
        dates: [
            {
                date: '2017-06-25',
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


### date properties
- `date` - total date formatted `YYYY-MM-DD`
- `day` - date formatted `DD`
- `weekday` - weekday from `0` to `6`
- `week` - Chinese weekday `日一二三四五六`
- `isPrevMonth` - if it is previous month date, will be `true`
- `isNextMonth` - if it is next month date, will be `true`
- `disabled` - if it is `isPrevMonth`、`isNextMonth` or current month disabled date(not between `startDate` to `endDate`), will be `true`


## Examples

- [react-calendar-picker](https://github.com/ChanceYu/react-calendar-picker)
- [小程序 weapp.CalendarPicker](https://github.com/ChanceYu/weapp#weappcalendarpicker)


## License

[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 
