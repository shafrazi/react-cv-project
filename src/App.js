import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import General from "./components/General";
import Education from "./components/Education";
import Professional from "./components/Professional";
import CompleteResume from "./components/CompleteResume";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: "new",
      level: "home",
      general: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
      },
      education: {
        school: "",
        major: "",
        graduationDate: "",
      },
      professional: [],
    };
  }

  createResume = () => {
    this.setState({
      level: "general",
    });
  };

  handleChange = (event, level) => {
    event.persist();
    this.setState((prevState) => {
      return {
        [level]: {
          ...prevState[level],
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  handleClick = (event, previousLevel) => {
    event.preventDefault();
    let nextLevel = "";
    if (previousLevel === "general") {
      nextLevel = "education";
    } else if (previousLevel === "education") {
      nextLevel = "professional";
    } else {
      nextLevel = "complete";
    }

    this.setState({
      level: nextLevel,
    });
  };

  handleCancel = (event) => {
    event.preventDefault();
    if (this.state.mode === "new") {
      this.setState({
        level: "home",
      });
    } else {
      this.setState({
        level: "complete",
      });
    }
  };

  completeResume = (companies) => {
    this.setState({
      level: "complete",
      professional: companies,
    });
  };

  editSection = (level) => {
    this.setState({
      mode: "edit",
      level: level,
    });
  };

  saveSection = (event) => {
    event.preventDefault();
    this.setState({
      mode: "new",
      level: "complete",
    });
  };

  renderComponent(level) {
    const data = {
      level: level,
      mode: this.state.mode,
      handleChange: this.handleChange,
      handleCancel: this.handleCancel,
      levelObject: this.state[level],
      handleClick: this.handleClick,
      saveSection: this.saveSection,
    };

    if (level === "general") {
      return <General data={data} />;
    } else if (level === "education") {
      return <Education data={data} />;
    } else if (level === "professional") {
      return (
        <Professional
          data={data}
          completeResume={this.completeResume}
          companies={this.state.professional}
        />
      );
    } else if (level === "complete") {
      return (
        <CompleteResume data={this.state} editSection={this.editSection} />
      );
    } else {
      return <Welcome createResume={this.createResume} level={level} />;
    }
  }

  render() {
    return (
      <div className="main">
        <Header />
        <div className="container">
          {this.renderComponent(this.state.level)}
        </div>
      </div>
    );
  }
}

export default App;
