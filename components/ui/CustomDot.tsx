import React from "react";

export default function CustomDot() {
  return <div>CustomDot</div>;
}

const CustomDot = (props) => {
  const { cx, cy, payload } = props; // Extract properties from Recharts
  if (payload.Anomaly) {
    return <circle cx={cx} cy={cy} r={6} fill="red" />;
  }
  return null;
};
