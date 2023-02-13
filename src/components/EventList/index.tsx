import Event from "components/Event";
import Filter from "components/Filter";
import { IEventsFilter } from "interfaces/IEventsFilter";
import React from "react";
import { useRecoilValue } from "recoil";
import { stateEventFilter } from "state/atom";
import useEventList from "state/hooks/useEventList";
import style from "./EventList.module.scss";

const EventList: React.FC = () => {
  const allEvents = useEventList();
  const filter = useRecoilValue<IEventsFilter>(stateEventFilter);

  const events = allEvents.filter((event) => {
    if (!filter.date) {
      return true;
    } else {
      const ehSameDay =
        filter.date.toISOString().slice(0, 10) === event.start.toISOString().slice(0, 10);
      return ehSameDay;
    }
  });

  return (
    <section>
      <Filter />
      <div className={style.Scroll}>
        {events.map((event) => (
          <Event event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
};

export default EventList;
