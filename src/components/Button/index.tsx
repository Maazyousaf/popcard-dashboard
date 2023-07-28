import clsx from "clsx";
import { ImSpinner9 } from "react-icons/im";
import { BsProps, IButtonProps, SsProps, VsProps } from "./button.interface";
import React from "react";

const baseStyles: BsProps = {
  solid:
    "inline-flex justify-center items-center font-display font-semibold rounded-md shadow-sm disabled:cursor-not-allowed",
  outline:
    "inline-flex justify-center items-center font-display font-semibold border rounded-md disabled:cursor-not-allowed",
};

const variantStyles: VsProps = {
  solid: {
    primary:
      "text-white border border-yellow bg-yellow hover:bg-yellow/80 active:bg-yellow/90 active:text-black/80 disabled:opacity-30 disabled:hover:bg-yellow",
    secondary:
      "text-[#6B7280] border border-lightBorder dark:border-borderColor bg-lightHover dark:bg-gray17 hover:bg-lightHover/80 dark:hover:bg-gray17/80  active:bg-lightHover/90 dark:active:bg-gray17/90 active:text-[#6B7280]/80 disabled:opacity-30 disabled:hover:bg-lightHover dark:disabled:hover:bg-gray17",
    danger:
      "text-black border border-danger bg-danger hover:bg-danger/80 active:bg-danger/90 active:text-black/80 disabled:opacity-30 disabled:hover:bg-danger",
  },
  outline: {
    primary:
      "border-yellow text-yellow hover:border-yellow/70 hover:bg-yellow/10 active:border-yellow/20 active:bg-yellow/10 active:text-yellow/70 disabled:opacity-40 disabled:hover:border-yellow disabled:hover:bg-transparent",
    secondary:
      "border-borderColor text-secondary hover:border-borderColor/70 hover:bg-secondary/10 active:border-borderColor/20 active:bg-secondary/10 active:text-secondary/70 disabled:opacity-40 disabled:hover:border-borderColor disabled:hover:bg-transparent",
    danger:
      "border-danger text-danger hover:border-danger/70 hover:bg-danger/10 active:border-danger/20 active:bg-danger/10 active:text-danger/70 disabled:opacity-40 disabled:hover:border-danger disabled:hover:bg-transparent",
  },
};

const sizeStyles: SsProps = {
  sm: "px-2.5 py-1 text-xs font-display",
  md: "px-4 py-2 text-sm font-display",
  lg: "px-7 py-2 text-base font-display",
};
export function Button({
  variant = "solid",
  color = "primary",
  size = "md",
  className,
  type,
  disabled,
  isLoading,
  children,
  loaderClass,
  ...props
}: IButtonProps) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        sizeStyles[size],
        className,
        isLoading &&
          "relative !cursor-wait !text-transparent hover:!text-transparent"
      )}
      type={type ? type : "button"}
      disabled={disabled ? true : false}
      {...props}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-black ">
          <ImSpinner9 className={clsx("animate-spin text-sm ", loaderClass)} />
        </div>
      )}
      {children}
    </button>
  );
}
