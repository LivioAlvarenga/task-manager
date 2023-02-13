import { IEvent } from "interfaces/IEvent";
import React from "react";
import { useSetRecoilState } from "recoil";
import { stateEventList } from "state/atom";

const EventCheckbox: React.FC<{
  event: IEvent;
}> = ({ event: event }) => {
  const styles = ["far", "fa-2x", event.complete ? "fa-check-square" : "fa-square"];

  const setStateEventList = useSetRecoilState<IEvent[]>(stateEventList);

  const changeState = () => {
    const changeEvent = { ...event };
    changeEvent.complete = !changeEvent.complete;

    setStateEventList((oldStateEventList) =>
      oldStateEventList.map((thisEvent) =>
        thisEvent.id === changeEvent.id ? changeEvent : thisEvent
      )
    );
  };

  return <i className={styles.join(" ")} onClick={changeState}></i>;
};

export default EventCheckbox;
