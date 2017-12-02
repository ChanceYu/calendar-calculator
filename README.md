# calendar-calculator
a plugin for calendar calculator


## Install

```bash
npm install calendar-calculator
```


## Features

- Highly customizable
- No dependence on UI, You can design by yourself


## Usage

```javascript
var oCalendar = new CalendarCalculator({
    startDate: '2017-07-17',
    endDate: '2018-08-18'
});

var months = oCalendar.getTotal();

console.log(months);
```


## Options

- `startDate` - the start date format like `YYYY-MM-DD`
- `endDate` -  the end date format like `YYYY-MM-DD`


## License

[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 
