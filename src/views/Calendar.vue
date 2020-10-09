<template>
  <div id="calendar"></div>
</template>

<script>
import { Calendar } from "@fullcalendar/core";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
/**
 * -- CREATE FAKE DATA FOR EVENTS --
 * Load based on month if on calendar
 * Load week if weekly
 * Load daily if daily View
 *
 * -- Create Modal When Week/Day clicked --
 * -- Barber vs Client View --
 */

export default {
  name: "Calendar",
  mounted() {
    // https://vuejs.org/v2/api/#mounted
    this.$nextTick(function() {
      console.log("mounted");
      const calendarEl = document.getElementById("calendar");
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "dayGridMonth", // if client then month if barber then week
        nowIndicator: true,
        allDaySlot: false,
        height: "auto",
        headerToolbar: {
          left: "dayGridMonth,timeGridWeek,timeGridDay",
          center: "title",
          right: "prev,next"
        },
        businessHours: {
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
          startTime: "05:00",
          endTime: "23:00"
        },
        events: [
          {
            // title: "FirstName", // if barber show firstName
            start: "2020-10-08T22:00",
            end: "2020-10-08T23:00"
          }
        ],
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
          }
        }
      });

      calendar.render();
    });
  }
};
</script>
