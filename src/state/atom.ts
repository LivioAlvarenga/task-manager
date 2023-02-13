import { IEvent } from "interfaces/IEvent";
import { atom } from "recoil";

export const stateEventList = atom<IEvent[]>({
  key: "stateEventList",
  default: [
    {
      description: "Estudar React",
      start: new Date("2023-02-18T09:00"),
      end: new Date("2023-02-18T13:00"),
      complete: false,
      id: 1642342747,
    },
    {
      description: "Estudar Recoil",
      start: new Date("2023-02-17T09:00"),
      end: new Date("2023-02-17T11:00"),
      complete: false,
      id: 1642342959,
    },
  ],
});
