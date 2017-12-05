/**
* month-calculator.js
* Address: (https://github.com/ChanceYu/month-calculator)
* Author: ChanceYu
* Licensed under the MIT license
*/
import moment from 'moment';
import assign from 'object-assign';
import { toDouble } from './tool';

class SingleMonth{
  static defaultOptions = {
    startDate: '',
    endDate: ''
  }
  constructor(options) {
    this.options = assign({}, SingleMonth.defaultOptions, options);

    this.init();
  }
  init(){
    let oStartDate = moment(this.options.startDate);
    let oEndDate = moment(this.options.endDate);

    let oFirstDate = oStartDate.clone().startOf('month');
    let oLastDate = oStartDate.clone().endOf('month');

    let oFirstWeekDate = oFirstDate.clone().startOf('week');
    let oPrevMonthLastDate = oFirstWeekDate.clone().endOf('month');

    let oLastWeekDate = oLastDate.clone().endOf('week');
    let oNextMonthFirstDate = oLastWeekDate.clone().startOf('month');

    if(!oFirstDate.isSame(oFirstWeekDate)){
      this.existPrevMonthDays = true;
    }
    
    if(!oFirstDate.isSame(oStartDate)){
      this.existStartDisableDays = true;
    }
        
    if(!oLastDate.isSame(oEndDate)){
      this.existEndDisableDays = true;
    }

    if(!oLastDate.isSame(oLastWeekDate)){
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
    this.todayDate = moment().format('YYYY-MM-DD');
  }
  getTotalDateCell() {
    let cells = [];

    let weekTitle = '日一二三四五六'.split('');
    let weekIndex = 0;
    let i = 0;
    
    // prev month disabled days
    if(this.existPrevMonthDays){
      for(i = this.prevMonthFirstDate; i <= this.prevMonthLastDate; i++){
        let day = toDouble(i);
        let date = this.YYYY + '-' + this.prevMM + '-' + day;
        let week = weekTitle[weekIndex];
        let item = {
          date: date,
          weekday: weekIndex,
          week: week,
          day: day,
          isPrevMonth: true,
          disabled: true
        };

        if(date === this.todayDate){
          this.existToday = true;
          item.isToday = true;
        }

        cells.push(item);

        weekIndex++;

        if(weekIndex === 7) weekIndex = 0;
      }
    }

    // current month disabled days `start`
    if(this.existStartDisableDays){
      for(i = 1; i < this.startDate; i++){
        let day = toDouble(i);
        let date = this.YYYY + '-' + this.MM + '-' + day;
        let week = weekTitle[weekIndex];
        let item = {
          date: date,
          weekday: weekIndex,
          week: week,
          day: day,
          disabled: true
        }
        
        if(date === this.todayDate){
          this.existToday = true;
          item.isToday = true;
        }

        cells.push(item);

        weekIndex++;

        if(weekIndex === 7) weekIndex = 0;
      }
    }

    // current month enabled days
    for(i = this.startDate; i <= this.endDate; i++){
      let day = toDouble(i);
      let date = this.YYYY + '-' + this.MM + '-' + day;
      let week = weekTitle[weekIndex];
      let item = {
        date: date,
        weekday: weekIndex,
        week: week,
        day: day,
        enabled: true
      };
      
      if(date === this.todayDate){
        this.existToday = true;
        item.isToday = true;
      }

      cells.push(item);

      weekIndex++;

      if(weekIndex === 7) weekIndex = 0;
    }

    // current month disabled days `end`
    if(this.existEndDisableDays){
      for(i = this.endDate + 1; i <= this.lastDate; i++){
        let day = toDouble(i);
        let date = this.YYYY + '-' + this.MM + '-' + day;
        let week = weekTitle[weekIndex];
        let item = {
          date: date,
          weekday: weekIndex,
          week: week,
          day: day,
          disabled: true
        };
        
        if(date === this.todayDate){
          this.existToday = true;
          item.isToday = true;
        }

        cells.push(item);

        weekIndex++;

        if(weekIndex === 7) weekIndex = 0;
      }
    }

    // next month disabled days
    if(this.existNextMonthDays){
      for(i = 1; i <= this.nextMonthLastDate; i++){
        let day = toDouble(i);
        let date = this.YYYY + '-' + this.nextMM + '-' + day;
        let week = weekTitle[weekIndex];
        let item = {
          date: date,
          weekday: weekIndex,
          week: week,
          day: day,
          isNextMonth: true,
          disabled: true
        };
        
        if(date === this.todayDate){
          this.existToday = true;
          item.isToday = true;
        }

        cells.push(item);

        weekIndex++;

        if(weekIndex === 7) weekIndex = 0;
      }
    }

    return cells;
  }
}

module.exports = SingleMonth;