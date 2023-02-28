import { IEvent } from "interfaces/IEvent";
import { IEventsFilter } from "interfaces/IEventsFilter";
import { atom, selector } from "recoil";

export const eventsAsync = selector({
  key: "eventsAsync",
  get: async () => {
    const responseHttp = await fetch("http://localhost:8000/events");
    const eventsJson: IEvent[] = await responseHttp.json();

    return eventsJson.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
  },
});

export const stateEventList = atom<IEvent[]>({
  key: "stateEventList",
  default: eventsAsync,
});

export const stateEventFilter = atom<IEventsFilter>({
  key: "stateEventFilter",
  default: {},
});
