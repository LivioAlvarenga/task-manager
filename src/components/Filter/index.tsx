import { IEventsFilter } from "interfaces/IEventsFilter";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { stateEventFilter } from "state/atom";
import style from "./Filter.module.scss";

const Filter: React.FC = () => {
  const [date, setDate] = useState("");
  const setStateEventList = useSetRecoilState<IEventsFilter>(stateEventFilter);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filter: IEventsFilter = {};
    if (date) {
      filter.date = new Date(date);
    } else {
      filter.date = null;
    }

    setStateEventList(filter);
  };

  return (
    <form className={style.Filter} onSubmit={submitForm}>
      <h3 className={style.title}>Filtrar por data</h3>
      <input
        type="date"
        name="date"
        className={style.input}
        onChange={(event) => setDate(event.target.value)}
        placeholder="Por data"
        value={date}
      />

      <button className={style.button}>Filtrar</button>
    </form>
  );
};

export default Filter;
