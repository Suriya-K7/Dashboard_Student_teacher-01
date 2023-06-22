import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../Context/DataContext";

const Dashboard = () => {
  const { data } = useContext(DataContext);
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-center mb-4">
        <h1 className="h1 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="row">
        {data.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;
