import React from "react";

function Company(props) {
  return (
    <div className="company-card">
      {!props.editMode ? <button onClick={props.editCompany}>Edit</button> : ""}
      <div className="company-field">
        <p>Company name :</p>
        <p>{props.company.companyName}</p>
      </div>
      <div className="company-field">
        <p>Position :</p>
        <p>{props.company.position}</p>
      </div>
      <div className="company-field">
        <p>Tasks :</p>
        <p>{props.company.tasks}</p>
      </div>
      <div className="company-field">
        <p>Start date :</p>
        <p>{props.company.startDate}</p>
      </div>
      <div className="company-field">
        <p>End date :</p>
        <p>{props.company.endDate}</p>
      </div>
    </div>
  );
}

export default Company;
