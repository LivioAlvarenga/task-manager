import Event from "components/Event";
import Filter from "components/Filter";
import React from "react";
import useEventList from "state/hooks/useEventList";
import style from "./EventList.module.scss";

const EventList: React.FC = () => {
  const events = useEventList();

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
