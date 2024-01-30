export class DateFormat {
    static datePure = new Date()
    static year = this.datePure.getFullYear();
    static month = this.datePure.getMonth();
    static day = this.datePure.getDay();
    static hour = this.datePure.getHours();
    static minutes = this.datePure.getMinutes();
    static seconds  = this.datePure.getSeconds();
    static getDate(){
        const dateFormat = [this.year,this.month + 1,this.day].join("-"); 
        return dateFormat
    }
    static getTimer(){
        return this.hour + ":" + this.minutes + ":" + this.seconds ;
    }
}