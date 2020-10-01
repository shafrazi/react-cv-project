import React from "react";
import Company from "./Company";
import { FaEdit } from "react-icons/fa";

function CompleteResume(props) {
  const data = props.data;
  const companyComponents = data.professional.map((company, index) => {
    return <Company company={company} key={index} editMode={true} />;
  });
  return (
    <div>
      <div className="card">
        <FaEdit
          className="fa-icon"
          onClick={() => {
            props.editSection("general");
          }}
        />
        <div className="card-content">
          <h2>General Information</h2>
          <div className="company-field">
            <p>Name :</p>
            <p>
              {data.general.firstName} {data.general.lastName}
            </p>
          </div>
          <div className="company-field">
            <p>Email :</p>
            <p>{data.general.email}</p>
          </div>
          <div className="company-field">
            <p>Phone :</p>
            <p>{data.general.phone}</p>
          </div>
          <div className="company-field">
            <p>Date of birth :</p>
            <p>{data.general.dob}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <FaEdit
          className="fa-icon"
          onClick={() => {
            props.editSection("education");
          }}
        />
        <div className="card-content">
          <h2>Educational Information</h2>
          <div className="company-field">
            <p>School :</p>
            <p>{data.education.school}</p>
          </div>
          <div className="company-field">
            <p>Major :</p>
            <p>{data.education.major}</p>
          </div>
          <div className="company-field">
            <p>Graduation date :</p>
            <p>{data.education.graduationDate}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <FaEdit
          className="fa-icon"
          onClick={() => {
            props.editSection("professional");
          }}
        />
        <div className="card-content">
          <h2>Professional Experience</h2>
          {companyComponents}
        </div>
      </div>
    </div>
  );
}

export default CompleteResume;
