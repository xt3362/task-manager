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
  border: 1px solid rgba(0, 0, 0, 0.103);
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
  border: 1px solid rgba(61, 60, 60, 0.438);
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 3px;
  font-size: small;
}
.task-top {
  border-top: 1px solid rgba(61, 60, 60, 0.438);
}
</style>