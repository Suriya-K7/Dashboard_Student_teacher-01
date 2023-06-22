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
  newMentor,
  setNewMentor,
  editMentorName,
  setEditMentorName,
  mentorLists,
  setMentorLists,
  handleDeleteMentor,
  handleUpdateMentor,
  handleCancelMentor,
  handleEditMentor,
  width,
  setToggle,
}) => {
  return (
    <>
      <div id="wrapper">
        <Sidebar
          toggle={toggle}
          setToggle={setToggle}
          width={width}
          handleToggle={handleToggle}
        />
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
          newMentor={newMentor}
          setNewMentor={setNewMentor}
          editMentorName={editMentorName}
          setEditMentorName={setEditMentorName}
          mentorLists={mentorLists}
          setMentorLists={setMentorLists}
          handleDeleteMentor={handleDeleteMentor}
          handleUpdateMentor={handleUpdateMentor}
          handleCancelMentor={handleCancelMentor}
          handleEditMentor={handleEditMentor}
        />
      </div>
    </>
  );
};

export default Wrapper;
