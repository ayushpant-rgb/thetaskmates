"use client";

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-body font-semibold transition-all duration-200 rounded-lg";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-orange-md",
    secondary:
      "bg-white text-primary border-2 border-primary hover:bg-neutral-50 shadow-sm",
    ghost: "text-primary hover:underline underline-offset-4",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
