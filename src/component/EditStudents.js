import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditStudents = ({
  editStudentName,
  setEditStudentName,
  editcourse,
  setEditCourse,
  editMentor,
  setEditMentor,
  handleUpdate,
  handleCancel,
  students,
}) => {
  let { id } = useParams();
  let student = students.find((e) => e.id.toString() === id);
  useEffect(() => {
    if (student) {
      setEditStudentName(student.name);
      setEditCourse(student.course);
      setEditMentor(student.mentor);
    }
  }, [student, setEditStudentName, setEditCourse, setEditMentor]);
  return (
    <>
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="text"
            placeholder="Name"
            value={editStudentName}
            required
            className="form-control"
            onChange={(e) => setEditStudentName(e.target.value)}
          />
        </div>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="time">Course</label>
          <select
            name="course"
            id="course"
            required
            value={editcourse}
            className="form-control"
            onChange={(e) => setEditCourse(e.target.value)}
          >
            <option value="">Course</option>
            <option value="MERN">MERN Stack</option>
            <option value="MEAN">MEAN Stack</option>
            <option value="MEVN">MEVN Stack</option>
            <option value="DevOps">DevOps</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="mentor">Mentor</label>
          <select
            name="mentor"
            id="mentor"
            required
            value={editMentor}
            className="form-control"
            onChange={(e) => setEditMentor(e.target.value)}
          >
            <option value="">Mentor</option>
            <option value="Rupan">Rupan</option>
            <option value="Sathish">Sathish</option>
            <option value="Nag">Nagarajan</option>
            <option value="Aktar">Aktar</option>
          </select>
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center g-2">
          <button className="btn btn-danger mr-2 col-3" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="btn btn-primary col-3"
            onClick={() => handleUpdate(student.id)}
          >
            Update
          </button>
        </div>
        <hr />
      </form>
    </>
  );
};

export default EditStudents;
