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
