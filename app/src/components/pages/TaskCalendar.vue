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
      const cursorDate = new Date(taskStart.getFullYear(), taskStart.getMonth(), taskStart.getDate() + i);
      const taskEndDate = task.getEndOfTargetDate(cursorDate);
      const taskStartDate = task.getStartOfTargetDate(cursorDate);
      let className = "task-between";
      if(cursorDate.getTime() == taskStartDate.getTime() && cursorDate.getTime() == taskEndDate.getTime()){
        className = "task-center";
      }else if(cursorDate.getTime() == taskStartDate.getTime()){
        className = "task-start";
      }else if(cursorDate.getTime() == taskEndDate.getTime()){
        className = "task-end";
      }
      return {
        key: task.id,
        customData: {
          title: task.name,
          class: className
        },
        dates: cursorDate
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
      class="custom-calendar"
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

<style scoped>
.custom-calendar.vc-container ::v-deep(.vc-day) {
  border: 1px solid rgba(0, 0, 0, 0.030);
  border-radius: 1px;
  height: 12vh;
}
.custom-calendar.vc-container ::v-deep(.is-today) {
  background-color: rgba(221, 235, 30, 0.089);
}
.custom-calendar.vc-container ::v-deep(.weekday-1) {
  background-color: rgba(201, 26, 26, 0.089);
}
.custom-calendar.vc-container ::v-deep(.weekday-7) {
  background-color: rgba(26, 175, 201, 0.089);
}
.custom-calendar.vc-container ::v-deep(.is-not-in-month) {
  background-color: rgba(168, 168, 168, 0.253);
}
.custom-calendar.vc-container ::v-deep(.is-not-in-month) {
  background-color: rgba(168, 168, 168, 0.253);
}
.task-center {
  border: 1px solid rgba(61, 60, 60, 0.15);
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 3px;
  font-size: small;
}
.task-start {
  border-top: 1px solid rgba(36, 36, 36, 0.15);
  border-bottom: 1px solid rgba(36, 36, 36, 0.15);
  border-left: 1px solid rgba(36, 36, 36, 0.15);
  margin-bottom: 1px;
  margin-left: 5px;
  font-size: small;
}
.task-between {
  border-top: 1px solid rgba(36, 36, 36, 0.15);
  border-bottom: 1px solid rgba(36, 36, 36, 0.15);
  margin-bottom: 1px;
  font-size: small;
}
.task-end {
  border-top: 1px solid rgba(36, 36, 36, 0.15);
  border-bottom: 1px solid rgba(36, 36, 36, 0.15);
  border-right: 1px solid rgba(36, 36, 36, 0.15);
  margin-bottom: 1px;
  margin-right: 5px;
  font-size: small;
}
</style>