import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Students from "./Students";
import Mentor from "./Mentor";
import NewMentor from "./NewMentor";
import EditMentor from "./EditMentor";
// import StudentsLists from "./delete/StudentsLists";
import NewStudent from "./NewStudent";
import EditStudents from "./EditStudents";

const Content = ({
  cardDatas,
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
  handleDeleteMentor,
  handleUpdateMentor,
  handleCancelMentor,
  handleEditMentor,
}) => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Nav handleToggle={handleToggle} />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard cardDatas={cardDatas} />} />
            <Route
              path="/student"
              element={
                <Students students={students} handleDelete={handleDelete} />
              }
            >
              <Route
                path="newstudent"
                element={
                  <NewStudent
                    newStudentName={newStudentName}
                    setNewStudentName={setNewStudentName}
                    course={course}
                    setCourse={setCourse}
                    handleSubmit={handleSubmit}
                    handleCancel={handleCancel}
                    mentor={mentor}
                    setMentor={setMentor}
                    mentorLists={mentorLists}
                  />
                }
              />
              <Route
                path=":id"
                element={
                  <EditStudents
                    students={students}
                    editStudentName={editStudentName}
                    setEditStudentName={setEditStudentName}
                    editcourse={editcourse}
                    setEditCourse={setEditCourse}
                    editMentor={editMentor}
                    setEditMentor={setEditMentor}
                    handleUpdate={handleUpdate}
                    handleCancel={handleCancel}
                    mentorLists={mentorLists}
                  />
                }
              />
            </Route>
            <Route
              path="/mentor"
              element={
                <Mentor
                  mentorLists={mentorLists}
                  handleDeleteMentor={handleDeleteMentor}
                />
              }
            >
              <Route
                path="newmentor"
                element={
                  <NewMentor
                    newMentor={newMentor}
                    setNewMentor={setNewMentor}
                    handleUpdateMentor={handleUpdateMentor}
                    handleCancelMentor={handleCancelMentor}
                  />
                }
              />
              <Route
                path=":id"
                element={
                  <EditMentor
                    editMentorName={editMentorName}
                    setEditMentorName={setEditMentorName}
                    handleEditMentor={handleEditMentor}
                    handleCancelMentor={handleCancelMentor}
                    mentorLists={mentorLists}
                  />
                }
              />
            </Route>
          </Routes>

          {/* <StudentsLists students={students} handleDelete={handleDelete} /> */}
          {/* <Overview />
          <Projects /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
