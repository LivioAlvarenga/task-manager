import Event from "components/Event";
import Filtro from "components/Filtro";
import React from "react";
import useEventList from "state/hooks/useEventList";
import style from "./EventList.module.scss";

const EventList: React.FC<{
  aoFiltroAplicado: (data: Date | null) => void;
}> = ({ aoFiltroAplicado }) => {
  const events = useEventList();

  return (
    <section>
      <Filtro aoFiltroAplicado={aoFiltroAplicado} />
      <div className={style.Scroll}>
        {events.map((event) => (
          <Event event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
};

export default EventList;
