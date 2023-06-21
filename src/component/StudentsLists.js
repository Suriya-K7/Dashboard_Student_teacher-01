import React from "react";
import Feed from "./Feed";

const StudentsLists = ({ students, handleDelete }) => {
  return (
    <div className="mt-5">
      <Feed students={students} handleDelete={handleDelete} />
    </div>
  );
};

export default StudentsLists;
