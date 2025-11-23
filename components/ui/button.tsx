import Link from "next/link";
import React from "react";
import { classNames } from "../../utils/classNames";

// Map of variant names to Tailwind class strings
const variants = {
  default:
    "py-2.5 lg:py-3.5 bg-primary-default text-gray-1 hover:bg-primary-hover focus:bg-primary-active",
  outline:
    "py-2 lg:py-3 bg-gray-1 text-primary-default hover:text-gray-1 border border-solid border-primary-default hover:bg-primary-default focus:bg-primary-default",
} as const;

type Variant = keyof typeof variants;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: any;
  form?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  // choose which visual variant to use
  variant?: Variant;
  startingIcon?: React.ReactNode;
  
}

const baseStyles =
  "px-6 lg:px-8 text-bodyLarge lg:text-headingExtraSmall cursor-pointer rounded-lg flex-center gap-[10px] font-medium  disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out";

export default function Button({
  text,
  onClick,
  className,
  type = "button",
  disabled,
  form,
  href,
  icon,
  variant = "default",
  startingIcon,
  ...props
}: ButtonProps) {
  const buttonContent = (
    <button
      disabled={disabled}
      type={type}
      form={form}
      onClick={onClick}
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      {startingIcon}
      {text}
      {icon}
    </button>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" className="w-fit">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
