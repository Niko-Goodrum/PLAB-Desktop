import { ThemeType } from "@/design/color/themeColor";

export interface IconProps {
  size?: number;
  color?: keyof typeof ThemeType | string;
}
