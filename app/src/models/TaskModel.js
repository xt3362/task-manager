class TaskModel{
    id;
    name;
    content;
    category;
    start;
    end;
    interval;
    constructor(id,name,content,category,start,end,interval){
        this.id = id;
        this.name = name;
        this.content = content;
        this.category = category;
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    isValid(){
    }
}