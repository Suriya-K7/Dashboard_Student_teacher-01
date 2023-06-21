import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Students from "./Students";
import StudentsLists from "./StudentsLists";
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
}) => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Nav handleToggle={handleToggle} />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard cardDatas={cardDatas} />} />
            <Route path="/student" element={<Students />}>
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
                  />
                }
              />
            </Route>
            {/* <Route path="/student/student-list" element={<StudentsLists />} /> */}
          </Routes>
          <StudentsLists students={students} handleDelete={handleDelete} />

          {/* <Overview />
          <Projects /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
