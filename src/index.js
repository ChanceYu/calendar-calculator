import moment from 'moment';
import assign from 'object-assign';
import { toDouble } from './tool';
import SingleMonth from './SingleMonth';

class CalendarCalculator {
  static defaultOptions = {
    startDate: '',
    endDate: '',
    format: 'YYYY-MM-DD'
  }
  constructor(options) {
    this.options = assign({}, CalendarCalculator.defaultOptions, options);
  }
  isInvalidDate(){
    let startDate = this.options.startDate;
    let endDate = this.options.endDate;

    let valid = (date) => {
      date = date.split(/\D/);

      return date.length === 3;
    }

    return valid(startDate)
      && valid(endDate)
      && moment(startDate).isValid()
      && moment(endDate).isValid()
  }
  getTotal() {
    let startDate = this.options.startDate;
    let endDate = this.options.endDate;
    let format = this.options.format;

    let oStartDate = moment(startDate);
    let oEndDate = moment(endDate);

    let monthData = [];
    let startEdgeDateOfStartDate = oStartDate.clone().startOf('month').format(format);
    let startEdgeDateOfEndDate = oEndDate.clone().startOf('month').format(format);

    let oMonth;

    if (startEdgeDateOfStartDate === startEdgeDateOfEndDate) {
      oMonth = new SingleMonth({
        startDate: startDate,
        endDate: endDate
      });

      monthData.push({
        title: moment(startDate).format('YYYY-MM'),
        dates: oMonth.getTotalDateCell()
      });

      if (oMonth.existToday) {
        this.todayDate = {};
        this.todayDate.date = oMonth.todayDate;
        this.todayDate.monthIndex = monthData.length - 1;
      }
    } else {
      let _startDate = startDate;
      let _endDate = moment(startDate).endOf('month').format(format);

      while (_startDate !== startEdgeDateOfEndDate) {
        oMonth = new SingleMonth({
          startDate: _startDate,
          endDate: _endDate
        });

        monthData.push({
          title: moment(_startDate).format('YYYY-MM'),
          dates: oMonth.getTotalDateCell()
        });

        if (oMonth.existToday) {
          this.todayDate = {};
          this.todayDate.date = oMonth.todayDate;
          this.todayDate.monthIndex = monthData.length - 1;
        }

        let nextMonth = moment(_endDate).subtract(-1, "days");

        _startDate = nextMonth.startOf('month').format(format);
        _endDate = nextMonth.endOf('month').format(format);
      }

      oMonth = new SingleMonth({
        startDate: startEdgeDateOfEndDate,
        endDate: endDate
      });

      monthData.push({
        title: moment(startEdgeDateOfEndDate).format('YYYY-MM'),
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
  getToday(){
    return this.todayDate;
  }
};

module.exports = CalendarCalculator;