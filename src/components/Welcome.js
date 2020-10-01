import React from "react";

function Welcome(props) {
  return (
    <div className="card">
      <h2>Welcome to the Resume Creator</h2>
      <button className="btn btn-primary" onClick={props.createResume}>
        Create My Resume
      </button>
    </div>
  );
}

export default Welcome;
