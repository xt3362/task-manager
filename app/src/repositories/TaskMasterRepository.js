import { db } from './db';
class TaskMasterRepository {
    async getAll() {
        try {
            return await db.taskMasters.toArray();
        } catch {
            throw Error("error 'getAll taskMaster'");
        }
    }
    async getById(taskId) {
        try {
            return await db.taskMasters.get(taskId);
        } catch {
            throw Error("error 'get taskMaster'");
        }
    }
    async getByIds(taskIds) {
        try {
            return await db.taskMasters.bulkGet(taskIds);
        } catch {
            throw Error("error 'get taskMasters'");
        }
    }
    async put(task) {
        try {
            return await db.taskMasters.put(task);
        } catch {
            throw Error("error 'put taskMaster'");
        }
    }
    async add(task) {
        try {
            return await db.taskMasters.add(task);
        } catch {
            throw Error("error 'add taskMaster'");
        }
    }
    async delete(taskId) {
        return await db.taskMasters.delete(taskId);
    }
    async delete(taskIds) {
        return await db.taskMasters.bulkDelete(taskIds);
    }
}
export const taskMasterRepository = new TaskMasterRepository();