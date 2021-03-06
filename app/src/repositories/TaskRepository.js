import { db } from './db';
import { formatDate } from '../utils/DateUtil';
class TaskRepository {
    async getById(taskId) {
        try {
            return await db.tasks.get(taskId);
        } catch {
            throw Error("error 'get task'");
        }
    }
    async getByIds(taskIds) {
        try {
            return await db.tasks.bulkGet(taskIds);
        } catch {
            throw Error("error 'get tasks'");
        }
    }
    async getByTaskMasterId(taskMasterId){
        try {
            return await db.tasks
                .where({taskMasterId: taskMasterId})
                .toArray();
        } catch {
            throw Error("error 'getByTaskMasterId'");
        }
    }
    async getByDate(date) {
        const dateString = formatDate(date);
        try {
            return await db.tasks
                .where('start')
                .belowOrEqual(dateString)
                .and(item => Date.parse(item.end) >= date)
                .toArray();
        } catch {
            throw Error("error 'getByDate task'");
        }
    }
    async put(task) {
        try {
            return await db.tasks.put(task);
        } catch {
            throw Error("error 'put task'");
        }
    }
    async add(task) {
        try {
            return await db.tasks.add(task);
        } catch {
            throw Error("error 'add task'");
        }
    }
    async delete(taskId) {
        return await db.tasks.delete(taskId);
    }
    async delete(taskIds) {
        return await db.tasks.bulkDelete(taskIds);
    }
}
export const taskRepository = new TaskRepository();