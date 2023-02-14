import { useRecoilValue } from "recoil";
import { filteredEventStates } from "../selectors";

const useEventListFiltered = () => {
  return useRecoilValue(filteredEventStates);
};

export default useEventListFiltered;
