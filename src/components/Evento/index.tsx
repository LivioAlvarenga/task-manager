import { IEvent } from "interfaces/IEvent";
import React from "react";
import style from "./Evento.module.scss";
import EventoCheckbox from "./EventoCheckbox";

const Evento: React.FC<{
  evento: IEvent;
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
}> = ({ evento, aoAlterarStatus, aoDeletarEvento }) => {
  const estilos = [style.Evento];

  if (evento.complete) {
    estilos.push(style.completo);
  }

  return (
    <div className={estilos.join(" ")}>
      <EventoCheckbox evento={evento} aoAlterarStatus={aoAlterarStatus} />
      <div className="cards-info">
        <h3 className={style.descricao}>
          {evento.description} - {evento.start.toLocaleDateString()}
        </h3>
      </div>
      <i
        className="far fa-times-circle fa-2x"
        onClick={() => aoDeletarEvento(evento.id!)}
      ></i>
    </div>
  );
};

export default Evento;
