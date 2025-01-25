import { HeaderProps, TextProps, HighlightProps } from "rsuite";

export interface AppHeadingProps extends HeaderProps {
  children?: React.ReactNode;
}
export interface AppTextProps extends TextProps {
  children?: React.ReactNode;
}
export interface AppHighlightProps extends HighlightProps {
  children?: React.ReactNode;
}
