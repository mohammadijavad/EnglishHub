import React, { ComponentProps, cloneElement } from "react";
import Loading from "../Loading";
interface ButtonProps extends ComponentProps<"button"> {
  startIcon?: any;
  endIcon?: any;
  endIconClass?: string;
  loading?: boolean;
  onClick?: () => void;
}
function Button({
  children,
  endIcon,
  startIcon,
  className,
  loading,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
    button group flex items-center justify-center border border-customBlue p-[9px] rounded-[10px]  transition-all ${disabled || loading ? "disabled:opacity-50" : ""} ${className}
  `}
      disabled={disabled || loading}
      {...rest}
    >
      {startIcon &&
        cloneElement(
          startIcon,
          { innerClass: "transition-all group-hover:stroke-white" },
          children
        )}
      {children && children}
      {loading && <Loading inline />}
      {endIcon &&
        cloneElement(
          endIcon,
          {
            innerClass: "transition-all group-hover:stroke-white",
            className: endIcon?.props?.className,
          },
          children
        )}
    </button>
  );
}

export default Button;
