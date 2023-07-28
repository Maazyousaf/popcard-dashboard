import { ButtonHTMLAttributes } from "react";

export interface BsProps {
  solid: string;
  outline: string;
}
export type VsProps = {
  solid: {
    primary: string;
    secondary: string;
    danger: string;
  };
  outline: {
    primary: string;
    secondary: string;
    danger: string;
  };
};
export interface SsProps {
  sm: string;
  lg: string;
  md: string;
}
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  color?: "primary" | "secondary" | "danger";
  className?: string;
  href?: string;
  children?: React.ReactNode;
  loaderClass?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isLoading?: boolean;
}
