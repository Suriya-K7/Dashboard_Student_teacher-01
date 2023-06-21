import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Wrapper = ({
  cardDatas,
  toggle,
  handleToggle,
  newStudentName,
  setNewStudentName,
  course,
  setCourse,
  handleSubmit,
  handleCancel,
  students,
  mentor,
  setMentor,
  editStudentName,
  setEditStudentName,
  editcourse,
  setEditCourse,
  editMentor,
  setEditMentor,
  handleUpdate,
  handleDelete,
}) => {
  return (
    <>
      <div id="wrapper">
        <Sidebar toggle={toggle} handleToggle={handleToggle} />
        <Content
          cardDatas={cardDatas}
          handleToggle={handleToggle}
          newStudentName={newStudentName}
          setNewStudentName={setNewStudentName}
          course={course}
          setCourse={setCourse}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          students={students}
          mentor={mentor}
          setMentor={setMentor}
          editStudentName={editStudentName}
          setEditStudentName={setEditStudentName}
          editcourse={editcourse}
          setEditCourse={setEditCourse}
          editMentor={editMentor}
          setEditMentor={setEditMentor}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Wrapper;
