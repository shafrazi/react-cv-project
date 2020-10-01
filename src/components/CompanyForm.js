import React from "react";

function CompanyForm(props) {
  return (
    <div className="company-card">
      <form>
        <input
          type="text"
          placeholder="Company name"
          name="companyName"
          value={props.company.companyName}
          onChange={props.handleChange}
        />
        <input
          type="text"
          placeholder="Position held"
          name="position"
          value={props.company.position}
          onChange={props.handleChange}
        />
        <textarea
          name="tasks"
          placeholder="Tasks and duties"
          value={props.company.tasks}
          onChange={props.handleChange}
        ></textarea>
        <input
          type="text"
          placeholder="Start date"
          name="startDate"
          value={props.company.startDate}
          onChange={props.handleChange}
        />
        <input
          type="text"
          placeholder="End date"
          name="endDate"
          value={props.company.endDate}
          onChange={props.handleChange}
        />
        {props.editMode ? (
          <button onClick={props.saveCompany}>Save</button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default CompanyForm;
