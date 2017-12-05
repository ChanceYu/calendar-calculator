# month-calculator
[![Build Status](https://travis-ci.org/ChanceYu/month-calculator.svg?branch=master)](https://travis-ci.org/ChanceYu/month-calculator)
[![](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)](https://github.com/ChanceYu/month-calculator)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 

一个月份日期计算器插件，[English](./README.md)


## 安装

```bash
npm install month-calculator
```


## 特点

- 高度可定制
- 不依赖任何UI, 你可以自己设计
- 支持浏览器、Node端、小程序


## 使用

```javascript
var oMonth = new MonthCalculator({
    startDate: '2017-07-17',
    endDate: '2018-08-18'
});

var months = oMonth.getTotal();

console.log(months);
```


## 参数

- `startDate` - 开始日期，形如 `YYYY-MM-DD`
- `endDate` -  结束日期，形如 `YYYY-MM-DD`


## 方法

- `getTotal` - 获取开始日期到结束日期之间的所有月份
- `getToday` - 如果今天的日期在开始日期和结束日期之间, 将会返回一个对象 `{ monthIndex, date }`, 其中值 `monthIndex` 就是今天的月份对应的索引（所有月份中的第几个月），否则返回`undefined`


## 结果

使用 `getTotal` 方法将会返回以下数据结构

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


### 每条数据的属性（也就是每一天的数据）
- `date` - 当天完整的日期 ，格式 `YYYY-MM-DD`
- `day` - 当天的日期 ，格式 `DD`
- `weekday` - 数字从 `0` 到 `6` 的每周值
- `week` - 中文的每周值，`日一二三四五六`
- `isPrevMonth` - 如果是上个月份的日期, 就是 `true`
- `isNextMonth` - 如果是下个月份的日期, 就是 `true`
- `disabled` - 如果是上个月份的日期、下个月份的日期，或者当月不可用的日期(不在 `startDate`开始日期和`endDate`结束日期范围之内),  就是 `true`


## 案例

- [react-calendar-picker](https://github.com/ChanceYu/react-calendar-picker)
- [小程序 weapp.CalendarPicker](https://github.com/ChanceYu/weapp#weappcalendarpicker)


## 协议

[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 
