class TaskModel{
    id;
    name;
    content;
    category;
    start;
    end;
    constructor(id,name,content,category,start,end){
        this.id = id;
        this.name = name;
        this.content = content;
        this.category = category;
        this.start = start;
        this.end = end;
    }
    isValid(){
    }
}