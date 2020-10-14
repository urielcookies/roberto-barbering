import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const store = createStore({
  state() {
    return {
      calendar: null,
      events: [],
      eventsLoaded: false
    };
  },
  mutations: {
    addEvent(state, { newEvent }) {
      state.calendar.addEvent(newEvent);
      state.events.push(newEvent);
    },
    initEvents(state) {
      const events = [
        {
          // title: "FirstName", // if barber show firstName
          start: "2020-10-08T22:00",
          end: "2020-10-08T23:00"
        }
      ];

      events.forEach(event => {
        state.calendar.addEvent(event);
        state.events.push(event);
      });
    },
    setCalendar(state, { calendar }) {
      state.calendar = calendar;
    },
    setEventsLoading(state, { eventsLoaded }) {
      state.eventsLoaded = eventsLoaded;
    }
  }
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
