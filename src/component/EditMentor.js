import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditMentor = ({
  editMentorName,
  setEditMentorName,
  handleEditMentor,
  handleCancelMentor,
  mentorLists,
}) => {
  let { id } = useParams();
  let mentor = mentorLists.find((e) => e.id.toString() === id);
  useEffect(() => {
    if (mentor) {
      setEditMentorName(mentor.name);
    }
  }, [mentor, setEditMentorName]);
  return (
    <>
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="text"
            placeholder="Name"
            value={editMentorName}
            required
            className="form-control"
            onChange={(e) => setEditMentorName(e.target.value)}
          />
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center g-2">
          <button
            className="btn btn-danger mr-2 col-3"
            onClick={handleCancelMentor}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary col-3"
            onClick={() => handleEditMentor(mentor.id)}
          >
            Update
          </button>
        </div>
        <hr />
      </form>
    </>
  );
};

export default EditMentor;