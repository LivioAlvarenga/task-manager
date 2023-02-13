import { IEvent } from "interfaces/IEvent";
import { useSetRecoilState } from "recoil";
import { stateEventList } from "state/atom";

const useUpdateEvent = () => {
  const setStateEventList = useSetRecoilState<IEvent[]>(stateEventList);

  return (event: IEvent) => {
    const today = new Date();
    if (event.start < today) {
      throw new Error("Eventos não podem ser cadastrados no passado.");
    }

    event.id = Math.random();
    return setStateEventList((oldEventList) => [...oldEventList, event]);
  };
};

export default useUpdateEvent;
