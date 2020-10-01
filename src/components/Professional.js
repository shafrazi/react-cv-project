import React from "react";
import CompanyForm from "./CompanyForm";
import Company from "./Company";

class WorkExperience {
  constructor(companyName, position, tasks, startDate, endDate) {
    this.companyName = companyName;
    this.position = position;
    this.tasks = tasks;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isReadOnly = true;
  }
}

class Professional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: props.companies,
      currentCompany: {
        companyName: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
      },
      editMode: false,
      editIndex: "",
    };
  }

  addCompany = (event) => {
    event.preventDefault();
    const company = new WorkExperience(
      this.state.currentCompany.companyName,
      this.state.currentCompany.position,
      this.state.currentCompany.tasks,
      this.state.currentCompany.startDate,
      this.state.currentCompany.endDate
    );
    this.setState((prevState) => {
      if (prevState.editMode) {
        prevState.companies.splice(prevState.editIndex, 0, company);
      } else {
        prevState.companies.push(company);
      }

      return {
        companies: prevState.companies,
        currentCompany: {
          companyName: "",
          position: "",
          tasks: "",
          startDate: "",
          endDate: "",
        },
        editMode: false,
        editIndex: "",
      };
    });
  };

  handleChange = (event) => {
    event.persist();
    this.setState((prevState) => {
      return {
        currentCompany: {
          ...prevState.currentCompany,
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  editCompany = (index) => {
    const company = this.state.companies[index];
    this.setState((prevState) => {
      prevState.companies.splice(index, 1);
      return {
        companies: prevState.companies,
        editMode: true,
        editIndex: index,
        currentCompany: {
          companyName: company.companyName,
          position: company.position,
          tasks: company.tasks,
          startDate: company.startDate,
          endDate: company.endDate,
        },
      };
    });
  };

  renderCompanyComponents = () => {
    const companyComponents = this.state.companies.map((company, index) => {
      return (
        <Company
          key={index}
          editMode={this.state.editMode}
          company={company}
          editCompany={() => {
            this.editCompany(index);
          }}
        />
      );
    });

    if (this.state.editMode) {
      const companyComponent = (
        <CompanyForm
          key={this.state.editIndex}
          company={this.state.currentCompany}
          handleChange={this.handleChange}
          editMode={this.state.editMode}
          saveCompany={this.addCompany}
        />
      );

      companyComponents.splice(this.state.editIndex, 0, companyComponent);
    }

    return companyComponents;
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>Professional Information</h2>
          {this.renderCompanyComponents()}
          {!this.state.editMode ? (
            <CompanyForm
              company={this.state.currentCompany}
              handleChange={this.handleChange}
            />
          ) : (
            ""
          )}
          <button
            className="btn btn-primary add-company"
            onClick={this.addCompany}
          >
            Add company
          </button>
          <button
            className="btn btn-primary btn-resume"
            onClick={() => {
              this.props.completeResume(this.state.companies);
            }}
          >
            View my resume
          </button>
        </div>
      </div>
    );
  }
}

export default Professional;
