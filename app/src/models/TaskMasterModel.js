import { IntervalType } from "./Constant";
export default class TaskMasterModel {
    id;
    name;
    content;
    category;
    start;
    end;
    intervalType;
    intervalNumber;
    getStartOfTargetDate(date) {
        const start = new Date(this.start);
        let intervalNumber = this.__intervalNumber();
        const x = Math.trunc(((date - start) / 24 / 60 / 60 / 1000) / intervalNumber);
        const todayStart = x * intervalNumber;
        start.setTime(start.getTime() + todayStart * 24 * 60 * 60 * 1000);
        return start;
    }
    getEndOfTargetDate(date) {
        const start = new Date(this.start);
        const end = new Date(this.start);
        let intervalNumber = this.__intervalNumber();
        const x = Math.trunc(((date - start) / 24 / 60 / 60 / 1000) / intervalNumber);
        const todayEnd = (x + 1) * intervalNumber - 1;
        end.setTime(end.getTime() + todayEnd * 24 * 60 * 60 * 1000);
        return end;
    }
    getDaysLeft(date){
        let end = this.getEndOfTargetDate(date);
        end = new Date(end.getFullYear(), end.getMonth() , end.getDate())
        const today = new Date(date.getFullYear(), date.getMonth() , date.getDate());
        return (end - today) / 86400000;
    }
    __intervalNumber() {
        let intervalNumber = this.intervalNumber;
        switch (this.intervalType) {
            case IntervalType.Daily:
                break;
            case IntervalType.Weekly:
                intervalNumber = 7 * this.intervalNumber;
                break;
            case IntervalType.Monthly:
                intervalNumber = 30 * this.intervalNumber;
                break;
            case IntervalType.EveryYear:
                intervalNumber = 365 * this.intervalNumber;
                break;
        }
        return intervalNumber;
    }
}