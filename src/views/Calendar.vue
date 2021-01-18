<template>
  <div id="calendar"></div>

  <transition v-if="showModal" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>Set Appointment</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div>
                <span>Are you sure you want to set an appointment on:</span>
                <div>
                  <span class="emp">{{ dateFormatter }}</span>
                </div>
                <div>
                  <span class="emp">{{ timeFormatter }}</span>
                </div>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <Button content="Save" color="teal" @onclick="saveAppointment" />
              <Button
                content="Cancel"
                color="basic"
                @onclick="toggleMeetingModal"
              />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Calendar } from "@fullcalendar/core";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import Button from "@/components/Button.vue";

/**
 * -- CREATE FAKE DATA FOR EVENTS --
 * Load based on month if on calendar
 * Load based on month if weekly
 * Load based on month if daily View
 *
 * -- Create Modal When Week/Day clicked --
 * -- Barber vs Client View --
 */

export default {
  name: "Calendar",
  components: {
    Button
  },
  data() {
    return {
      calendar: null,
      showModal: false,
      dateMeeting: "",
      events: this.$store.state.events
    };
  },
  computed: {
    dateFormatter() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      return new Date(this.dateMeeting.split(" - ")[0]).toLocaleDateString(
        "en-US",
        options
      );
    },
    timeFormatter() {
      const options = {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        seconds: "numeric"
      };
      return new Date(this.dateMeeting.split(" - ")[0]).toLocaleTimeString(
        "en-US",
        options
      );
    }
  },
  methods: {
    toggleMeetingModal() {
      this.showModal = !this.showModal;
    },
    setDateMeeting(dateMeeting) {
      this.dateMeeting = dateMeeting;
    },
    saveAppointment() {
      const newEvent = {
        title: "Ever",
        start: this.dateMeeting.split(" - ")[0],
        end: this.dateMeeting.split(" - ")[1]
      };
      this.$store.commit("addEvent", {
        newEvent
      });
      this.toggleMeetingModal();
    },
    setTitleDate(titleDate) {
      this.titleDate = titleDate;
    }
  },
  mounted() {
    // https://vuejs.org/v2/api/#mounted
    const events = this.events;
    const toggleMeetingModal = this.toggleMeetingModal;
    const setDateMeeting = this.setDateMeeting;
    const commit = this.$store.commit;
    const eventsLoaded = this.$store.state.eventsLoaded;

    this.$nextTick(function() {
      console.log("mounted");
      const calendarEl = document.getElementById("calendar");
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "dayGridMonth", // if client then month if barber then week
        nowIndicator: true,
        allDaySlot: false,
        height: "auto",
        // Custom header buttons https://fullcalendar.io/docs/customButtons
        headerToolbar: {
          left: "dayGridMonth,timeGridWeek,timeGridDay",
          center: "title",
          right: "today prev,next"
        },
        businessHours: {
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
          startTime: "05:00",
          endTime: "23:00"
        },
        events,
        dateClick(info) {
          if (info.view.type === "dayGridMonth")
            calendar.changeView("timeGridDay", info.dateStr);

          const pickDate =
            info.view.type === "timeGridDay" ||
            info.view.type === "timeGridWeek";

          if (pickDate) {
            const startDate = info.dateStr.substring(0, 16);
            const minuteTimeIndex = startDate.indexOf("T") + 1;
            let minuteTime = String(
              Number(startDate.substring(minuteTimeIndex).replace(":", "")) +
                100
            );
            minuteTime =
              minuteTime.length === 3 ? `0${minuteTime}` : minuteTime;
            minuteTime = `${minuteTime.slice(0, 2)}:${minuteTime.slice(2, 4)}`;
            const endDate = `${startDate.slice(
              0,
              minuteTimeIndex
            )}${minuteTime}`;

            console.log(`${startDate} - ${endDate}`);
            toggleMeetingModal();
            setDateMeeting(`${startDate} - ${endDate}`);
          }
        }
      });

      commit("setCalendar", { calendar });
      if (!eventsLoaded) {
        commit("setEventsLoading", { eventsLoaded: true });
        commit("initEvents");
      }
      calendar.render();
    });
  }
};
</script>

<style scoped>
.emp {
  font-weight: bold;
  color: #42b983;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 150px;
  /* width: 300px; */
  /* width: 50%; */
  border-radius: 30px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  height: 15%;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-footer {
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-default-button {
  /*  */
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media only screen and (max-width: 600px) {
  #calendar {
    font-size: 10px !important;
  }
}
</style>
