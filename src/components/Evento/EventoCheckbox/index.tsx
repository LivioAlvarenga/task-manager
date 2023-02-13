import { IEvent } from "interfaces/IEvent";
import React from "react";

const EventoCheckbox: React.FC<{
  evento: IEvent;
  aoAlterarStatus: (id: number) => void;
}> = ({ evento, aoAlterarStatus }) => {
  const estilos = ["far", "fa-2x", evento.complete ? "fa-check-square" : "fa-square"];

  return (
    <i className={estilos.join(" ")} onClick={() => aoAlterarStatus(evento.id!)}></i>
  );
};

export default EventoCheckbox;
