const expect = require('chai').expect;
const MonthCalculator = require('../lib/month-calculator');

describe('MonthCalculator测试', () => {
  
  it('是否能返回', () => {
    let oMonth = new MonthCalculator({
      startDate: '2017-07-17',
      endDate: '2017-08-18'
    });

    expect(oMonth.getTotal().length).to.eq(2);
  });

  it('时间校验-正确的时候', () => {
    let oMonth = new MonthCalculator({
      startDate: '2017-07-17',
      endDate: '2017-08-18'
    });

    expect(oMonth.isInvalidDate()).to.eq(true);
  });

  it('时间校验-错误的时候', () => {
    let oMonth = new MonthCalculator({
      startDate: '2017-07-'
    });

    expect(oMonth.isInvalidDate()).to.eq(false);
  });

});