import { IEvent } from "interfaces/IEvent";
import React from "react";
import { useSetRecoilState } from "recoil";
import { stateEventList } from "state/atom";
import style from "./Event.module.scss";
import EventCheckbox from "./EventCheckbox";

const Event: React.FC<{ event: IEvent }> = ({ event: event }) => {
  const setStateEventList = useSetRecoilState<IEvent[]>(stateEventList);

  const deleteEvent = () => {
    setStateEventList((oldStateEventList) =>
      oldStateEventList.filter((thisEvent) => thisEvent.id !== event.id)
    );
  };

  const styles = [style.Event];
  if (event.complete) {
    styles.push(style.complete);
  }

  return (
    <div className={styles.join(" ")}>
      <EventCheckbox event={event} />
      <div className="cards-info">
        <h3 className={style.description}>
          {event.description} - {event.start.toLocaleDateString()}
        </h3>
      </div>
      <i className="far fa-times-circle fa-2x" onClick={deleteEvent}></i>
    </div>
  );
};

export default Event;
