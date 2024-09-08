import React from "react";
interface cardProp {
  children: React.ReactNode;
}
export default function Card({ children }: cardProp) {
  return (
    <div className=" p-2 m-2 z-10 rounded-xl shadow-xl shadow-black bg-[#fffdd0]">
      {children}
    </div>
  );
}
