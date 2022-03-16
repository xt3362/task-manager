import { db } from './db';
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