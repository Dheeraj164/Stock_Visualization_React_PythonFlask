"use client";

import { useContext, useEffect, useState } from "react";
import Period from "@/components/ui/Period";
import SearchBar from "@/components/ui/SearchBar";
import { AppContext, AppContextProvider } from "@/context/AppContext";
import { motion } from "framer-motion";
import { selectedVariant, unselectedVariant } from "@/Styles/ChartStyle";
import { charts } from "@/model/chart_model";
import { getData } from "@/controller/controllers";

export default function Home() {
  const {
    search,
    selectedPeriod,
    selectedChart,
    setSelectedChart,
    setData,
    data,
    setLoading,
    loading,
    getChartData,

    setChartData,
  } = useContext(AppContext);
  // const [data, setData] = useState<any>({});
  useEffect(() => {
    console.log(" use effect workingcalling");
    if (!loading && data && data.data.length > 0) {
      const newChartData = getChartData();
      setChartData(newChartData);
    } else if (loading) {
      console.log("calling");
      getData(search, selectedPeriod, setData, setLoading);
    }
  }, [search, selectedPeriod, loading]);
  return (
    <>
      <div className="flex flex-col h-screen">
        <SearchBar />
        <Period setSelectedChart={setSelectedChart} />
        <div className="w-full flex items-center justify-center">
          <div className="w-[75%]">
            {/* Full Screen for Selected Chart */}
            <div className="flex-grow flex items-center justify-center">
              <motion.div
                key={selectedChart}
                variants={selectedVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full h-full">
                {charts.find((chart) => chart.id === selectedChart)?.component}
              </motion.div>
            </div>

            {/* Unselected charts at the bottom */}
            <div className="h-24 flex justify-around items-center">
              {charts
                .filter((chart) => chart.id !== selectedChart)
                .map((chart) => (
                  <motion.div
                    key={chart.id}
                    className="w-1/5 h-full p-2 cursor-pointer"
                    variants={unselectedVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setSelectedChart(chart.id)}>
                    {chart.component}
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
