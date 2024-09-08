import React, { ReactNode } from "react";
interface buttonProp {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any | void | undefined;
  className?: string;
}
export default function Button({ children, onClick, className }: buttonProp) {
  return (
    <button
      onClick={onClick}
      className={` rounded-full border p-3 hover:cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
