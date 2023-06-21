import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Students = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-start justify-content-between">
          <h2>Students List</h2>
          <Link to={"newstudent"}>
            <button className="addBtn btn btn-primary">
              Add <FaPlus />
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Students;
