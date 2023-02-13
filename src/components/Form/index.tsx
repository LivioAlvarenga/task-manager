import { IEvent } from "interfaces/IEvent";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { stateEventList } from "state/atom";
import style from "./Form.module.scss";

const Form: React.FC = () => {
  const setStateEventList = useSetRecoilState<IEvent[]>(stateEventList);

  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startClock, setStartClock] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endClock, setEndClock] = useState("");

  const assembleDate = (date: string, clock: string) => {
    const dateString = date.slice(0, 10);
    return new Date(`${dateString}T${clock}`);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const eventData = {
      id: Math.random(),
      description: description,
      start: assembleDate(startDate, startClock),
      end: assembleDate(endDate, endClock),
      complete: false,
    };

    setStateEventList((oldStateEventList) => [...oldStateEventList, eventData]);
    setDescription("");
    setStartDate("");
    setStartClock("");
    setEndDate("");
    setEndClock("");
  };
  return (
    <form className={style.Form} onSubmit={submitForm}>
      <h3 className={style.title}>Novo evento</h3>

      <label>Descrição</label>
      <input
        type="text"
        name="description"
        id="description"
        className={style.input}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Descrição"
        value={description}
        autoComplete="off"
        required
      />

      <label>Data de início</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="startDate"
          className={style.input}
          onChange={(event) => setStartDate(event.target.value)}
          value={startDate}
          required
        />
        <input
          type="time"
          name="startClock"
          className={style.input}
          onChange={(event) => setStartClock(event.target.value)}
          value={startClock}
          required
        />
      </div>

      <label>Data de término</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="endDate"
          className={style.input}
          onChange={(event) => setEndDate(event.target.value)}
          value={endDate}
          required
        />
        <input
          type="time"
          name="endClock"
          className={style.input}
          onChange={(event) => setEndClock(event.target.value)}
          value={endClock}
          required
        />
      </div>

      <button className={style.button}>Salvar</button>
    </form>
  );
};

export default Form;
