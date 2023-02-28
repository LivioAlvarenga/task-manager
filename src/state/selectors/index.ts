import { selector } from "recoil";
import { stateEventFilter, stateEventList } from "state/atom";

export const filteredEventStates = selector({
  key: "filteredEventStates",
  get: ({ get }) => {
    const filter = get(stateEventFilter);
    const allEvents = get(stateEventList);

    const events = allEvents.filter((event) => {
      if (!filter.date) {
        return true;
      } else {
        const ehSameDay =
          filter.date.toISOString().slice(0, 10) ===
          event.start.toISOString().slice(0, 10);
        return ehSameDay;
      }
    });
    return events;
  },
});

/* export const eventsAsync = selector({
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
}); */
