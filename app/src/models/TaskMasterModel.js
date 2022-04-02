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
    /**
     * 対象日付を含む1タスクの開始日を計算します
     * @param {Date} date
     * @returns 開始日
     */
    getStartOfTargetDate(date) {
        let start = new Date(this.start);
        start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        let intervalNumber = this.__intervalNumber();
        const baseDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const x = Math.trunc(((baseDate - start) / 24 / 60 / 60 / 1000) / intervalNumber);
        const todayStart = x * intervalNumber;
        start.setTime(start.getTime() + todayStart * 24 * 60 * 60 * 1000);
        return start;
    }
    /**
     * 対象日付を含む1タスクの終了日を計算します
     * @param {Data} date 
     * @returns 終了日
     */
    getEndOfTargetDate(date) {
        let start = new Date(this.start);
        //yyyy/MM/dd 以降を切り落とす
        start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        let end = new Date(this.start);
        //yyyy/MM/dd 以降を切り落とす
        end = new Date(end.getFullYear(), end.getMonth(), end.getDate());

        //yyyy/MM/dd 以降を切り落とす
        const baseDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        
        let intervalNumber = this.__intervalNumber();

        const x = Math.trunc(((baseDate - start) / 24 / 60 / 60 / 1000) / intervalNumber);
        const todayEnd = (x + 1) * intervalNumber - 1;
        end.setTime(end.getTime() + todayEnd * 24 * 60 * 60 * 1000);
        return end;
    }
    /**
     * 対象日付を含む期間があと何日で終了するかを計算します
     * @param {Date} date 
     * @returns 終了までの残り日数
     */
    getDaysLeft(date){
        let end = this.getEndOfTargetDate(date);
        end = new Date(end.getFullYear(), end.getMonth() , end.getDate());
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