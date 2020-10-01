import React from "react";

function General(props) {
  const data = props.data;
  return (
    <div className="card">
      <h2>General Information</h2>
      <form>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={(event) => {
            data.handleChange(event, data.level);
          }}
          value={data.levelObject.firstName}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={(event) => {
            data.handleChange(event, data.level);
          }}
          value={data.levelObject.lastName}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(event) => {
            data.handleChange(event, data.level);
          }}
          value={data.levelObject.email}
        />
        <input
          type="text"
          placeholder="Phone number"
          name="phone"
          onChange={(event) => {
            data.handleChange(event, data.level);
          }}
          value={data.levelObject.phone}
        />
        <input
          type="text"
          placeholder="Date of birth"
          name="dob"
          onChange={(event) => {
            data.handleChange(event, data.level);
          }}
          value={data.levelObject.dob}
        />
        <button
          className="btn btn-primary"
          onClick={(event) => {
            data.handleClick(event, data.level);
          }}
        >
          Next
        </button>
        <button className="btn btn-danger" onClick={data.handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default General;
