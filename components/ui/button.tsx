import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[18px] text-sm font-semibold tracking-[0.01em] transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33539b]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#16233f] text-white shadow-[0_18px_42px_-22px_rgba(22,35,63,0.65)] hover:-translate-y-0.5 hover:bg-[#1c2d51] hover:shadow-[0_24px_54px_-24px_rgba(22,35,63,0.72)] active:translate-y-0",
        secondary:
          "border border-[rgba(22,35,63,0.12)] bg-[rgba(255,255,255,0.78)] text-[#16233f] shadow-[0_14px_38px_-26px_rgba(22,35,63,0.35)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_42px_-26px_rgba(22,35,63,0.4)] active:translate-y-0",
        ghost:
          "text-[#16233f] hover:-translate-y-0.5 hover:bg-[rgba(22,35,63,0.05)] hover:text-[#16233f] active:translate-y-0",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
        sm: "h-9 px-4 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
