import { Dispatch, useContext } from "react";
import axios from "axios";
import { AppContext, dataType } from "@/context/AppContext";

// const { setData } = useContext(AppContext);
export async function getData(
  search: string,
  selectedPeriod: string,
  setData: (data: dataType) => void,
  setLoading: (bool: boolean) => void
) {
  console.log("calling backend");
  setLoading(true);
  let end = new Date();
  let start: Date;
  if (selectedPeriod === "1D") {
    start = new Date(end.getTime() - 2 * 24 * 60 * 60 * 1000);
  } else if (selectedPeriod === "3M") {
    start = new Date(end.getTime() - 90 * 24 * 60 * 60 * 1000);
  } else if (selectedPeriod === "6M") {
    start = new Date(end.getTime() - 180 * 24 * 60 * 60 * 1000);
  } else if (selectedPeriod === "1Y") {
    start = new Date(end.getTime() - 365 * 24 * 60 * 60 * 1000);
  } else {
    start = new Date("2010-01-01");
  }
  try {
    console.log(
      "end: " + start.toISOString().slice(0, 10),
      "start: " + end.toISOString().slice(0, 10)
    );
    let res = await axios.post("http://localhost:5000/prediction", {
      stockName: search || "AAPL",
      start: start.toISOString().slice(0, 10),
      end: end.toISOString().slice(0, 10),
    });
    const fetchedData = res.data.df_info;

    // Log to verify correct data structure
    // console.log("Fetched Data:", fetchedData);

    if (fetchedData) {
      setData(fetchedData);
      setLoading(false);
    }
  } catch (error) {
    console.error("Error fetching stock data:", error);
  } finally {
  }
}
