import React from "react";
import MyResponsiveLine from "./MyResponsiveLine"; // Adjust the path as per your file structure

const data = [
  {
    id: "First dataset",
    data: [
      { x: "Jan", y: 33 },
      { x: "Feb", y: 53 },
      { x: "Mar", y: 85 },
      { x: "Apr", y: 41 },
      { x: "May", y: 44 },
      { x: "Jun", y: 65 },
    ],
  },
  {
    id: "Second dataset",
    data: [
      { x: "Jan", y: 33 },
      { x: "Feb", y: 25 },
      { x: "Mar", y: 35 },
      { x: "Apr", y: 51 },
      { x: "May", y: 54 },
      { x: "Jun", y: 76 },
    ],
  },
];

const App = () => (
  <div style={{ height: "400px" }}>
    {" "}
    {/* Ensure a defined height */}
    <MyResponsiveLine data={data} />
  </div>
);

export default App;
