import React, { useContext, useEffect } from "react";
import Button from "./Button";
import { AppContext } from "@/context/AppContext";

export default function Period({
  setSelectedChart,
}: {
  setSelectedChart: any;
}) {
  const { selectedPeriod, setSelectedPeriod, setLoading } =
    useContext(AppContext);

  useEffect(() => {
    setSelectedChart = selectedPeriod;
  }, [selectedPeriod]);
  function onSelectPeroid(e: React.MouseEvent<HTMLButtonElement>) {
    setLoading(true);
    setSelectedPeriod(e.currentTarget.innerHTML);
  }
  return (
    <div className="font-bold justify-center items-center w-full my-5 flex text-white">
      <div className="w-[75%] flex text-xs">
        <div className="pl-3">
          <Button
            onClick={onSelectPeroid}
            className={
              selectedPeriod === "1D"
                ? "bg-white text-black border-black "
                : " bg-black border-black"
            }>
            1D
          </Button>
        </div>
        <div className="pl-3">
          <Button
            onClick={onSelectPeroid}
            className={
              selectedPeriod === "3M"
                ? "bg-white text-black border-black"
                : " bg-black border-black"
            }>
            3M
          </Button>
        </div>
        <div className="pl-3">
          <Button
            onClick={onSelectPeroid}
            className={
              selectedPeriod === "6M"
                ? "bg-white text-black  border-black"
                : " bg-black border-black"
            }>
            6M
          </Button>
        </div>
        <div className="pl-3">
          <Button
            onClick={onSelectPeroid}
            className={
              selectedPeriod === "1Y"
                ? "bg-white text-black border-black"
                : " bg-black border-black "
            }>
            1Y
          </Button>
        </div>
        <div className="pl-3">
          <Button
            onClick={onSelectPeroid}
            className={
              selectedPeriod === "All"
                ? "bg-white text-black border-black "
                : " bg-black border-black"
            }>
            All
          </Button>
        </div>
      </div>
    </div>
  );
}
