import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonColor = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  children: ReactNode;
}

const colorVariants: Record<ButtonColor, string> = {
  primary: "bg-purple-600 border border-purple-600 text-white hover:bg-purple-100 hover:text-purple-600",
  secondary: "border border-purple-600 text-purple-600 hover:bg-purple-100",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = "primary", className, children, disabled, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`px-4 py-1 rounded capitalize transition font-medium
           ${disabled && "opacity-50 cursor-not-allowed"}
          ${colorVariants[color]}
          ${className}
        `}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
