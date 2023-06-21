import React, { useEffect, useState } from "react";
import Wrapper from "./component/Wrapper";
import { useNavigate } from "react-router-dom";

const App = () => {
  let [toggle, setToggle] = useState(true);
  let cardDatas = [
    {
      title: "Earnings (Monthly)",
      value: "$40,000",
      color: "primary",
      icon: "fa-calendar",
      isProgress: false,
    },
    {
      title: "Earnings (Annual)",
      value: "$215,000",
      color: "success",
      icon: "fa-dollar-sign",
      isProgress: false,
    },
    {
      title: "Tasks",
      value: "50",
      color: "info",
      icon: "fa-clipboard-list",
      isProgress: true,
    },
    {
      title: "Pending Requests",
      value: "18",
      color: "warning",
      icon: "fa-comments",
      isProgress: false,
    },
  ];
  window.addEventListener("resize", () => {
    if (window.innerWidth < 600) {
      setToggle(false);
    } else if (window.innerWidth > 600 && window.innerWidth < 768) {
      setToggle(true);
    }
  });
  let handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  let [students, setStudents] = useState([
    {
      id: 1,
      name: "Suriya",
      course: "MERN",
      mentor: "Rupan",
    },
    {
      id: 2,
      name: "Udhaya",
      course: "MEAN",
      mentor: "Sathish",
    },
    {
      id: 3,
      name: "Suriya-K7",
      course: "MEVN",
      mentor: "Nag",
    },
  ]);
  let [newStudentName, setNewStudentName] = useState("");
  let [course, setCourse] = useState("");
  let [mentor, setMentor] = useState("");
  let [editStudentName, setEditStudentName] = useState("");
  let [editcourse, setEditCourse] = useState("");
  let [editMentor, setEditMentor] = useState("");
  let navigator = useNavigate();
  useEffect(() => {}, []);
  let handleSubmit = () => {
    let id = students.length ? students[students.length - 1].id + 1 : 1;
    if (newStudentName === "" || course === "Course" || mentor === "Mentor") {
      alert("Kindly fill all inputs");
    } else {
      let student = {
        id: id,
        name: newStudentName,
        course: course,
        mentor: mentor,
      };
      let allStudents = [...students, student];
      localStorage.setItem("students", JSON.stringify(allStudents));
      setStudents(allStudents);
      setNewStudentName("");
      setCourse("");
      navigator("/student");
    }
  };
  let handleCancel = () => {
    setNewStudentName("");
    setCourse("");
    navigator("/student");
  };
  let handleUpdate = (id) => {
    if (
      editStudentName === "" ||
      editcourse === "Course" ||
      editMentor === "Mentor"
    ) {
      alert("Kindly fill all inputs");
    } else {
      let student = students.find((e) => e.id === id);
      let updatedStudent = {
        id: student.id,
        name: editStudentName,
        course: editcourse,
        mentor: editMentor,
      };
      let newStudents = students.map((student) =>
        student.id === id ? { ...updatedStudent } : student
      );
      setStudents(newStudents);
      localStorage.setItem("students", JSON.stringify(newStudents));
      setEditStudentName("");
      setEditCourse("");
      setEditMentor("");
      navigator("/student");
    }
  };

  let handleDelete = (id) => {
    let filteredStudents = students.filter((e) => e.id !== id);
    setStudents(filteredStudents);
    navigator("/student");
  };
  return (
    <div>
      <Wrapper
        cardDatas={cardDatas}
        handleToggle={handleToggle}
        toggle={toggle}
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
  );
};

export default App;
