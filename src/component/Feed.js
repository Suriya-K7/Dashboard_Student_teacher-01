import React from "react";
import { FaCheck } from "react-icons/fa";
import { profile } from "../assets/index";
import { Link } from "react-router-dom";

const Feed = ({ students, handleDelete }) => {
  return (
    <>
      {students.map((e, i) => (
        <div key={i} className="row">
          <div className="d-flex align-items-center flex-wrap justify-content-between row p-2 col-12">
            <div className="img col-0">
              <img
                src={profile}
                className="rounded-circle"
                style={{ width: "40px" }}
                alt="..."
              />
            </div>
            <div className="px-2 col-3 ">{e.name}</div>
            <div className="taskTime px-1 col-1">{e.course}</div>
            <div className="taskTime px-1 col-2">{e.mentor}</div>
            <Link className="taskTime " data-set={e.id} to={`student/${e.id}`}>
              <button className="btn btn-info mx-1">Edit</button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(e.id)}
            >
              Delete
            </button>
          </div>

          {/* <button className="btn btn-primary" onClick={() => {}}>
            <FaCheck className="fontAwesome" />
          </button> */}
        </div>
      ))}
    </>
  );
};

export default Feed;