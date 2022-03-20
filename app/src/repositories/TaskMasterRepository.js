import { db } from './db';
import { formatDate } from '../utils/DateUtil';
class TaskMasterRepository {
    async getAll() {
        try {
            return await db.taskMasters.toArray();
        } catch {
            throw Error("error 'getAll taskMaster'");
        }
    }
    async getByStartEnd(start, end) {
        try {
            return await db.taskMasters
                .where('start')
                .belowOrEqual(formatDate(end))
                .and(item => Date.parse(item.end) >= Date.parse(start))
                .toArray();
        } catch {
            throw Error("error 'getByDate taskMaster'");
        }
    }
    async getByDate(date) {
        console.log(formatDate(date));
        try {
            return await db.taskMasters
                .where('start')
                .belowOrEqual(formatDate(date))
                .and(item => Date.parse(item.end) >= Date.parse(date))
                .toArray();
        } catch {
            throw Error("error 'getByDate taskMaster'");
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
    async deleteById(taskId) {
        try {
            return await db.taskMasters.delete(taskId);
        } catch {
            throw Error("error 'add taskMaster'");
        }
    }
    async delete(taskIds) {
        try {
            return await db.taskMasters.bulkDelete(taskIds);
        } catch {
            throw Error("error 'add taskMaster'");
        }
    }
}
export const taskMasterRepository = new TaskMasterRepository();