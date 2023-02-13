import { IKalendEvent } from "interfaces/IKalendEvent";
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";
import React from "react";
import { useRecoilValue } from "recoil";
import { stateEventList } from "state/atom";
import ptBR from "../Calendar/localization/ptBR.json";
import style from "./Calendar.module.scss";

const Calendar: React.FC = () => {
  const events = useRecoilValue(stateEventList);

  const eventosKalend = new Map<string, IKalendEvent[]>();

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
      />
    </div>
  );
};

export default Calendar;
