import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  tasks: '++id, name, content, start, end, intervalType, intervalNumber', // Primary key and indexed props
});
