import React from "react";
export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      canditateFirstName: "kirubha",
      canditateAge: 25,
      degree: "Msc mathematics",
      skills: ["html", "css", "javascript", "bootstrap"],
    };
  }

  render() {
    return (
      <div>
        <p>
          <strong>Name :</strong> {this.state.canditateFirstName}
        </p>
        <p>
          <strong>Age :</strong> {this.state.canditateAge}
        </p>
        <p>
          <strong>Degree :</strong> {this.state.degree}
        </p>
        <p>
          <strong>Skills :</strong>{" "}
          {this.state.skills[0] +
            " , " +
            this.state.skills[1] +
            " , " +
            this.state.skills[2] +
            " , " +
            this.state.skills[3] +
            "."}
        </p>
      </div>
    );
  }
}
