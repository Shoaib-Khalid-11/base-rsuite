import { PopoverProps, WhisperProps } from "rsuite";

export interface AppPopOverProps extends PopoverProps {
  children: React.ReactNode;
}
export interface AppWhisperProps<T = unknown>
  extends Omit<WhisperProps, "speaker"> {
  speaker: React.ReactElement<T>;
}
