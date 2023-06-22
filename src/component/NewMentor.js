import React from "react";

const NewMentor = ({
  newMentor,
  setNewMentor,
  handleUpdateMentor,
  handleCancelMentor,
}) => {
  return (
    <>
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="text">Mentor Name</label>
          <input
            type="text"
            id="text"
            placeholder="Mentor Name"
            value={newMentor}
            required
            className="form-control"
            onChange={(e) => setNewMentor(e.target.value)}
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
            onClick={handleUpdateMentor}
          >
            Save
          </button>
        </div>
        <hr />
      </form>
    </>
  );
};

export default NewMentor;
