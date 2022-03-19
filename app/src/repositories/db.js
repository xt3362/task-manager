import Dexie from 'dexie';
import TaskModel from '../models/TaskModel';
import TaskMasterModel from '../models/TaskMasterModel';
const SCHEMA_VERSION = 4;
export const db = new Dexie('myDatabase');
db.version(SCHEMA_VERSION).stores({
  tasks: '++id',
  taskMasters: '++id, start, end',
});
db.tasks.mapToClass(TaskModel);
db.taskMasters.mapToClass(TaskMasterModel);
