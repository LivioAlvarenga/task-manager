import { RecoilRoot } from "recoil";
import style from "./App.module.scss";
import Calendar from "./components/Calendar";
import Card from "./components/Card";
import EventList from "./components/EventList";
import Form from "./components/Form";

function App() {
  return (
    <RecoilRoot>
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Form />
          </Card>
          <hr />
          <Card>
            <EventList />
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
