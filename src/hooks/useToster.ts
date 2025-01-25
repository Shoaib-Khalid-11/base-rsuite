import { useToaster } from "rsuite";
import { IToaster } from "types";

export const useAppToster = () => {
  const toaster = useToaster();
  const setTostValue = ({
    message,
    placement = "topCenter",
    duration = 3000,
    mouseReset = true,
  }: IToaster) => {
    toaster.push(message, { placement, duration, mouseReset });
  };
  const clearTost = () => {
    toaster.clear();
  };
  const removeTost = (key: string) => {
    toaster.remove(key);
  };
  return { setTostValue, clearTost, removeTost };
};
