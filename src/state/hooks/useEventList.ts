import { useRecoilValue } from "recoil";
import { stateEventList } from "state/atom";

const useEventList = () => {
  return useRecoilValue(stateEventList);
};

export default useEventList;
