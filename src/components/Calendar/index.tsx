import { IKalendEvent } from "interfaces/IKalendEvent";
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";
import React from "react";
import useEventList from "state/hooks/useEventList";
import useUpdateEvent from "state/hooks/useUpdateEvent";
import ptBR from "../Calendar/localization/ptBR.json";
import style from "./Calendar.module.scss";

const Calendar: React.FC = () => {
  const events = useEventList();
  const eventosKalend = new Map<string, IKalendEvent[]>();
  const updateEvent = useUpdateEvent();

  events.forEach((event) => {
    const key = event.start.toISOString().slice(0, 10);
    if (!eventosKalend.has(key)) {
      eventosKalend.set(key, []);
    }
    eventosKalend.get(key)?.push({
      id: event.id,
      startAt: event.start.toISOString(),
      endAt: event.end.toISOString(),
      summary: event.description,
      color: "blue",
    });
  });

  const onEventDragFinish: OnEventDragFinish = (
    kalendPrevEvent: CalendarEvent,
    kalendUpdatedEvent: CalendarEvent
  ) => {
    const event = events.find((event) => event.id === kalendUpdatedEvent.id);

    if (event) {
      const eventToBeUpdated = { ...event };
      eventToBeUpdated.start = new Date(kalendUpdatedEvent.startAt);
      eventToBeUpdated.end = new Date(kalendUpdatedEvent.endAt);

      updateEvent(eventToBeUpdated);
    }
  };

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"customLanguage"}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
};

export default Calendar;
