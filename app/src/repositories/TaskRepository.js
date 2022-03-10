class BaseRepository{
    constructor(){

    }
}
class TaskRepository extends BaseRepository{
    constructor(){
        super();
    }
    selectTaskById(taskId){
        // 永続化層から取得する
        return {};
    }
    insertTask(task){
        // 永続化層に保存する
    }
}