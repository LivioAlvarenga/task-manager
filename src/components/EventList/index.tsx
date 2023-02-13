import Evento from "components/Evento";
import Filtro from "components/Filtro";
import React from "react";
import { useRecoilValue } from "recoil";
import { stateEventList } from "state/atom";
import style from "./EventList.module.scss";

const EventList: React.FC<{
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
  aoFiltroAplicado: (data: Date | null) => void;
}> = ({ aoDeletarEvento, aoAlterarStatus, aoFiltroAplicado }) => {
  const events = useRecoilValue(stateEventList);

  return (
    <section>
      <Filtro aoFiltroAplicado={aoFiltroAplicado} />
      <div className={style.Scroll}>
        {events.map((event) => (
          <Evento
            aoAlterarStatus={aoAlterarStatus}
            aoDeletarEvento={aoDeletarEvento}
            evento={event}
            key={event.id}
          />
        ))}
      </div>
    </section>
  );
};

export default EventList;
