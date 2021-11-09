/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */

const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      date: new Date(),
    };
  },

  computed: {
    localeMeetups() {
      if(!this.meetups) return false

      return this.meetups.map((meetup) => ({
        ...meetup,
        year: new Date(meetup.date).getFullYear(),
        month: new Date(meetup.date).getMonth(),
        day: new Date(meetup.date).getDate(),
      }));
    },
    month() {
      return this.date.getMonth()
    },
    year() {
      return this.date.getFullYear()
    },
    localeDate() {
      return this.date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
      });
    },
    prevMonthDays() {
      const prevMonth = new Date(this.year, this.month, 0).getDate();
      let days = [];
      if (this.curMonthDays[0].length > 0) {
        for (let i = this.curMonthDays[0].length; i < 7; i++) {
          days.push(prevMonth - 6 + i);
        }
      }
      return days;
    },
    nextMonthDays() {
      let days = [];
      if (this.curMonthDays[this.curMonthDays.length - 1].length > 0) {
        for (let i = this.curMonthDays[this.curMonthDays.length - 1].length, j = 1; i < 7; i++, j++) {
          days.push(j);
        }
      }
      return days;
    },
    curMonthDays() {
      let days = [],
          week = 0;
      
      const thisMonthDays = new Date(this.year, this.month + 1, 0).getDate();

      days[week] = [];
      for (let i = 1; i <= thisMonthDays; i++) {
        if (new Date(this.year, this.month, i).getDay() != 1) {
          days[week].push(i);
        } else {
          week++;
          days[week] = [];
          days[week].push(i);
        }
      }
      return days;
    },
  },

  methods: {
    decrease() {
      this.date = new Date(this.year, this.month - 1);
    },
    increase() {
      this.date = new Date(this.year, this.month + 1);
    },
  },

  template: `
  <div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="decrease"></button>
          <div>{{localeDate}}</div>
          <button class="rangepicker__selector-control-right" @click="increase"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div class="rangepicker__cell rangepicker__cell_inactive" v-for="day in prevMonthDays">
          {{ day }}
          <template v-for="meetup in localeMeetups">
            <a class="rangepicker__event" v-if="meetup.day === day && meetup.month === month && meetup.year === year">{{ meetup.title }}</a>
          </template>
        </div>
        <template v-for="week in curMonthDays">
          <div class="rangepicker__cell" v-for="day in week">
            {{ day }}
            <template v-for="meetup in localeMeetups">
              <a class="rangepicker__event" v-if="meetup.day === day && meetup.month === month && meetup.year === year">{{ meetup.title }}</a>
            </template>
          </div>
        </template>
        <div class="rangepicker__cell rangepicker__cell_inactive" v-for="day in nextMonthDays">
          {{ day }}
          <template v-for="meetup in localeMeetups">
            <a class="rangepicker__event" v-if="meetup.day === day && meetup.month === month && meetup.year === year">{{ meetup.title }}</a>
          </template>
        </div>
      </div>
    </div>
  </div>`,
};

export default MeetupsCalendar;