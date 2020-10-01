import React from "react";

function Welcome(props) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Welcome to the Resume Creator</h2>
        <button className="btn btn-primary" onClick={props.createResume}>
          Create My Resume
        </button>
      </div>
    </div>
  );
}

export default Welcome;
