import { IEvent } from "interfaces/IEvent";
import { IEventsFilter } from "interfaces/IEventsFilter";
import { atom } from "recoil";
import { eventsAsync } from "./selectors";

export const stateEventList = atom<IEvent[]>({
  key: "stateEventList",
  default: eventsAsync,
});

export const stateEventFilter = atom<IEventsFilter>({
  key: "stateEventFilter",
  default: {},
});
