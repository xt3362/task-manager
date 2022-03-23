<script setup>
import { ref } from 'vue';
import { taskMasterRepository } from '../../repositories/TaskMasterRepository';
const attributes = ref([]);
const masks = {
  weekdays: 'WWW',
};
const updateDisplayDate = async (calendarDate) => {
  const start = new Date(calendarDate.year, calendarDate.month - 1, 1);//月初
  const end = new Date(calendarDate.year, calendarDate.month, 0);//月末
  const taskData = await taskMasterRepository.getByStartEnd(start, end);
  const dateData = taskData.map(task => {
    const taskStart = new Date(task.start);
    const taskEnd = new Date(task.end);
    const days = (taskEnd - taskStart) / (24 * 60 * 60 * 1000) + 1;
    return [...Array(days).keys()].map(i => {
      return {
        key: task.id,
        customData: {
          title: task.name,
          class: 'task-center'
        },
        dates: new Date(taskStart.getFullYear(), taskStart.getMonth(), taskStart.getDate() + i)
      }
    });
  });
  attributes.value = dateData.flat();
}
</script>
<template>
  <div class="container m-1">
    <v-calendar
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
      @update:to-page="updateDisplayDate"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="day-container">
          <span class="day-header">{{ day.day }}</span>
          <div>
            <p
              v-for="task in attributes"
              :key="task.key"
              :class="task.customData.class"
            >{{ task.customData.title }}</p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<style>
.day1 {
  color: red;
}
.weekday-1 {
  background-color: rgba(201, 26, 26, 0.151);
}
.weekday-7 {
  background-color: rgba(26, 175, 201, 0.089);
}
.is-today{
  background-color: rgba(221, 235, 30, 0.089);
}
.day-container {
  width: 13.5rem;
  height: 10rem;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
}
.day-header {
  border-bottom: 1px solid rgb(0, 0, 0);
}
.day-item {
  margin-top: 3px;
  margin-left: 3px;
  margin-right: 3px;
  border: 1px solid rgba(61, 60, 60, 0.438);
  border-radius: 5px;
}
.is-not-in-month {
  background-color: rgba(168, 168, 168, 0.253);
}
.task-right-end {
  border-bottom: 1px solid rgba(61, 60, 60, 0.438);
  border-right: 1px solid rgba(61, 60, 60, 0.438);
}
.task-left-end {
  border-bottom: 1px solid rgba(61, 60, 60, 0.438);
  border-left: 1px solid rgba(61, 60, 60, 0.438);
}
.task-center {
  border: 1px solid rgba(61, 60, 60, 0.438);
  border-radius: 5px;
  margin-left: 2px;
  margin-right: 2px;
}
.task-top {
  border-top: 1px solid rgba(61, 60, 60, 0.438);
}
</style>