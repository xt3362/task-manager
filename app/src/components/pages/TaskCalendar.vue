<template>
  <div class="text-center section">
    <h2>Custom Calendars</h2>
    <v-calendar
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="day-container">
          <span class="day-header">{{ day.day }}</span>
          <div class="">
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

<script>
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: 'WWW',
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: 'Lunch with mom.',
            class: 'day1',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Take Noah to basketball practice',
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Take car to the shop',
            class: 'bg-indigo-500 text-white',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Meeting with new client.',
            class: 'bg-teal-500 text-white',
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: 'bg-pink-500 text-white',
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Cookout with friends.',
            class: 'bg-orange-500 text-white',
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: 'bg-pink-500 text-white',
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: 'Visit great grandma.',
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 25),
        },
      ],
    };
  },
};
</script>

<style>
.day1{
  color: red;
}
.weekday-1{
  background-color: rgba(201, 26, 26, 0.151);
}
.weekday-7{
  background-color: rgba(26, 175, 201, 0.089);
}
.day-container{
  width: 13.5rem;
  height: 8rem;
  border-bottom:1px solid grey;
  border-left:1px solid grey;
}
.day-header{
  border-bottom:1px solid rgb(0, 0, 0);
}
.day-item{
  margin-top: 3px;
  margin-left: 3px;
  margin-right: 3px;
  border:1px solid rgba(61, 60, 60, 0.438);
  border-radius: 5px;
}
.is-not-in-month{
  background-color: rgba(168, 168, 168, 0.253);
}
</style>