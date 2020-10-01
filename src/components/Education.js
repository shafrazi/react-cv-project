import React from "react";

function Education(props) {
  const data = props.data;
  return (
    <div className="card">
      <div className="card-content">
        <h2>Educational Information</h2>
        <form>
          <input
            type="text"
            placeholder="School"
            name="school"
            onChange={(event) => {
              data.handleChange(event, data.level);
            }}
            value={data.levelObject.school}
          />
          <input
            type="text"
            placeholder="Major"
            name="major"
            onChange={(event) => {
              data.handleChange(event, data.level);
            }}
            value={data.levelObject.major}
          />
          <input
            type="text"
            placeholder="Graduation date"
            name="graduationDate"
            onChange={(event) => {
              data.handleChange(event, data.level);
            }}
            value={data.levelObject.graduationDate}
          />
          <button
            className="btn btn-primary"
            onClick={
              props.data.mode === "new"
                ? (event) => {
                    data.handleClick(event, data.level);
                  }
                : (event) => {
                    data.saveSection(event);
                  }
            }
          >
            {props.data.mode === "new" ? "Next" : "Save"}
          </button>
          <button className="btn btn-danger" onClick={data.handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Education;
