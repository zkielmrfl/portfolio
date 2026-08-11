import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export function Button({ variant = "secondary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cx("btn", variant, className)} {...props}>
      {children}
    </button>
  );
}
