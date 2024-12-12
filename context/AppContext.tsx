"use client";
import { createContext, ReactNode, useState } from "react";
export type dataType = {
  column: string[];
  data: number[][];
  si?: number[];
};
interface AppContextType {
  search: string;
  setSearch: (value: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (value: string) => void;
  selectedChart: number;
  setSelectedChart: (value: number) => void;
  data: dataType;
  setData: (data: dataType) => void;
  getChartData: () => any;
  loading: boolean;
  setLoading: (bool: boolean) => any;
  chartDataDemo: any[];
  setChartData: (data: any) => void;
  checked: boolean;
  setChecked: (data: any) => void;
}

export const AppContext = createContext<AppContextType>({
  search: "BABA",
  setSearch: (value: string) => {},
  selectedPeriod: "1D",
  setSelectedPeriod: (value: string) => {},
  selectedChart: 1,
  setSelectedChart: () => {},
  data: {
    column: [],
    data: [[]],
    si: [],
  },
  setData: () => {},
  getChartData: () => {},
  loading: false,
  setLoading: () => {},
  chartDataDemo: [],
  setChartData: () => {},
  checked: false,
  setChecked: () => {},
});

// const chartData = data.map((entry, index) => ({
//   day: `Day ${index + 1}`, // or format this as a date
//   open: entry[0],
//   high: entry[1],
//   low: entry[2],
//   close: entry[3],
//   adjClose: entry[4],
//   volume: entry[5],
// }));

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState<string>("BABA");
  const [selectedPeriod, setSelectedPeriod] = useState("1D");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<dataType>({
    column: [],
    data: [[]],
    si: [],
  });
  const [chartDataDemo, setChartData] = useState<any[]>([]);
  const [selectedChart, setSelectedChart] = useState<number>(1);

  function getChartData() {
    console.log(data.data);
    let chartData = data.data.map((entry, index) => {
      return {
        date: entry[0],
        open: entry[1],
        High: entry[2],
        Low: entry[3],
        Close: entry[4],
        AdjClose: entry[5],
        Volume: entry[6] / 1000000,
        Anomaly: entry[7],
        si: (data.si && data.si[index]) || 100,
      };
    });

    return chartData;
  }
  const [checked, setChecked] = useState(false);
  // function setDataProps(data: dataType) {
  //   setData(data);
  // }
  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        selectedPeriod,
        setSelectedPeriod,
        selectedChart,
        setSelectedChart,
        data,
        setData,
        getChartData,
        loading,
        setLoading,
        chartDataDemo,
        setChartData,
        checked,
        setChecked,
      }}>
      {children}
    </AppContext.Provider>
  );
}
