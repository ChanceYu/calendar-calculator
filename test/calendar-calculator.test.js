var expect = require('chai').expect;
var CalendarCalculator = require('../dist/calendar-calculator.js');

describe('CalendarCalculator测试', function(){
  
  it('是否能返回', function(){
    var oCalendar = new CalendarCalculator({
      startDate: '2017-07-17',
      endDate: '2017-08-18'
    });

    expect(oCalendar.getTotal().length).to.eq(2);
  });

  it('时间校验-正确的时候', function(){
    var oCalendar = new CalendarCalculator({
      startDate: '2017-07-17',
      endDate: '2017-08-18'
    });

    expect(oCalendar.isInvalidDate()).to.eq(true);
  });

  it('时间校验-错误的时候', function(){
    var oCalendar = new CalendarCalculator({
      startDate: '2017-07-'
    });

    expect(oCalendar.isInvalidDate()).to.eq(false);
  });

});