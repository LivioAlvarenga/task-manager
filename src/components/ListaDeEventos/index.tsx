import Evento from "components/Evento";
import Filtro from "components/Filtro";
import { IEvent } from "interfaces/IEvent";
import React from "react";
import style from "./ListaDeEventos.module.scss";

const ListaDeEventos: React.FC<{
  eventos: IEvent[];
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
  aoFiltroAplicado: (data: Date | null) => void;
}> = ({ eventos, aoDeletarEvento, aoAlterarStatus, aoFiltroAplicado }) => {
  return (
    <section>
      <Filtro aoFiltroAplicado={aoFiltroAplicado} />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento
            aoAlterarStatus={aoAlterarStatus}
            aoDeletarEvento={aoDeletarEvento}
            evento={evento}
            key={evento.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
