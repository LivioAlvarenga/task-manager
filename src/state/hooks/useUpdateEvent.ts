import { IEvent } from "interfaces/IEvent";
import { useSetRecoilState } from "recoil";
import { stateEventList } from "state/atom";

const useUpdateEvent = () => {
  const setStateEventList = useSetRecoilState<IEvent[]>(stateEventList);

  return (event: IEvent) => {
    setStateEventList((prevEventList) => {
      const index = prevEventList.findIndex((e) => e.id === event.id);
      return [...prevEventList.slice(0, index), event, ...prevEventList.slice(index + 1)];
    });
  };
};

export default useUpdateEvent;
