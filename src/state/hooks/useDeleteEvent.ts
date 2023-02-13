import { IEvent } from "interfaces/IEvent";
import { useSetRecoilState } from "recoil";
import { stateEventList } from "state/atom";

const useDeleteEvent = () => {
  const setStateEventList = useSetRecoilState<IEvent[]>(stateEventList);

  return (event: IEvent) => {
    setStateEventList((oldStateEventList) => [
      ...oldStateEventList.filter((evt) => event.id !== evt.id),
    ]);
  };
};

export default useDeleteEvent;
