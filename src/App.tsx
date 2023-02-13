import { useState } from "react";
import { RecoilRoot } from "recoil";
import style from "./App.module.scss";
import Calendar from "./components/Calendar";
import Card from "./components/Card";
import EventList from "./components/EventList";
import Form from "./components/Form";
import { IEvent } from "./interfaces/IEvent";

function App() {

  const [filtro, setFiltro] = useState<Date | null>();

  const adicionarEvento = (evento: IEvent) => {
    evento.id = Math.round(new Date().getTime() / 1000);
    /* eventos.push(evento);
    setEventos([...eventos]); */
  };

  const alterarStatusEvento = (id: number) => {
    /* const evento = eventos.find((evento) => evento.id === id);
    if (evento) {
      evento.complete = !evento.complete;
    }
    setEventos([...eventos]); */
  };

  const deletarEvento = (id: number) => {
    /* setEventos([...eventos.filter((evento) => evento.id !== id)]); */
  };

  const aplicarFiltro = (data: Date | null) => {
    setFiltro(data);
  };

  /* const filtrados = !filtro
    ? eventos
    : eventos.filter(
        (evento) =>
          filtro!.toISOString().slice(0, 10) === evento.start.toISOString().slice(0, 10)
      ); */

  /* 
  Corrigindo o erro acima, que é o seguinte:
    Forbidden non-null assertion.eslint@typescript-eslint/no-non-null-assertion

  filtro?.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10) ?? false
  */

  return (
    <RecoilRoot>
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Form aoSalvar={adicionarEvento} />
          </Card>
          <hr />
          <Card>
            <EventList
              aoFiltroAplicado={aplicarFiltro}
              aoAlterarStatus={alterarStatusEvento}
              aoDeletarEvento={deletarEvento}
            />
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendar />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
