import React from "react";
import Card from "./Card";
// import Projects from "./Projects";
// import Overview from "./Overview";

const Dashboard = ({ cardDatas }) => {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-center mb-4">
        <h1 className="h1 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="row">
        {cardDatas.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
      {/* <Overview />
      <Projects /> */}
    </>
  );
};

export default Dashboard;
