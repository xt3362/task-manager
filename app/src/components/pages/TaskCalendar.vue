<script setup>
import { ref } from 'vue';
import { taskMasterRepository } from '../../repositories/TaskMasterRepository';
const tasks = ref([]);
const month = new Date().getMonth();
const year = new Date().getFullYear();
const masks = {
  weekdays: 'WWW',
};
const attributes = [
  {
    key: 1,
    customData: {
      title: 'Lunch with mom.',
      class: 'day1',
    },
    dates: new Date(year, month, 1),
  }
];
const updateDisplayDate = async (calendarDate) => {
  const start = new Date(calendarDate.year, calendarDate.month - 1, 1);//月初
  const end = new Date(calendarDate.year, calendarDate.month, 0);//月末
  // const startString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}}`
  // date.setMonth(date.getMonth() + 1);
  // date.setDate(0); //月末
  // const endString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}}`
  tasks.value = await taskMasterRepository.getByDate(start, end);
  console.log(tasks.value);
}
</script>
<template>
  <div class="text-center section">
    <h2>Custom Calendars</h2>
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
          <div class>
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="day-item"
              :class="attr.customData.class"
            >{{ attr.customData.title }}</p>
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
.day-container {
  width: 13.5rem;
  height: 8rem;
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
</style>