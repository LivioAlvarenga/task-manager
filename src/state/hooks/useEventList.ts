import { useRecoilValue } from "recoil";
import { filteredEventStates } from "state/selectors";

const useEventList = () => {
  return useRecoilValue(filteredEventStates);
};

export default useEventList;
