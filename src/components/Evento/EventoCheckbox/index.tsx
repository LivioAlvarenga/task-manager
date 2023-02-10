import { IEvento } from "interfaces/IEvento";
import React from "react";

const EventoCheckbox: React.FC<{
  evento: IEvento;
  aoAlterarStatus: (id: number) => void;
}> = ({ evento, aoAlterarStatus }) => {
  const estilos = ["far", "fa-2x", evento.completo ? "fa-check-square" : "fa-square"];

  return (
    <i className={estilos.join(" ")} onClick={() => aoAlterarStatus(evento.id!)}></i>
  );
};

export default EventoCheckbox;
