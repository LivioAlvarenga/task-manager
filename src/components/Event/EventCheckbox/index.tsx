import { IEvent } from "interfaces/IEvent";
import React from "react";
import useUpdateEvent from "state/hooks/useUpdateEvent";

const EventCheckbox: React.FC<{ event: IEvent }> = ({ event: event }) => {
  const styles = ["far", "fa-2x", event.complete ? "fa-check-square" : "fa-square"];

  const updateEvent = useUpdateEvent();

  const changeState = () => {
    const changeEvent = { ...event };
    changeEvent.complete = !changeEvent.complete;

    updateEvent(changeEvent);
  };

  return <i className={styles.join(" ")} onClick={changeState}></i>;
};

export default EventCheckbox;
