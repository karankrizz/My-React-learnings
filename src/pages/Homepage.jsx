export default function Homepage() {
  const details = ["kirubhakaran", "25", "Msc mathematics", "R"];
  const [name, age, degree, initial] = details;
  const skills = ["html", "css", "bootstrap", "javascript", "React"];
  const workingStatus = false;
  const headingStyle = {
    color: "red",
    backgroundColor: "black",
    width: 150,
  };
  const noStyle = {
    color: "red",
  };
  const yesStyle = {
    color: "green",
  };
  const status = () => {
    console.log("submit button is clicked")
    console.log("Details submitted ")
  };
  return (
    <div>
      <h1 style={headingStyle}>About Me</h1>

      <p>
        <strong>NAME : </strong>
        {name.toUpperCase() + " " + initial}
      </p>
      <p>
        <strong>AGE : </strong>
        {age}
      </p>
      <p>
        <strong>DEGREE : </strong>
        {degree.toUpperCase()}
      </p>
      <div>
        <p> skills: {skills + ""}</p>
        {/* Skills:{skills.map((value,index)=><p key={index}>{value}</p>) } */}
      </div>

      <p>
        <strong> Currently working: </strong>
        {workingStatus ? (
          <strong style={yesStyle}>Yes</strong>
        ) : (
          <strong style={noStyle}>NO</strong>
        )}
      </p>
      <button onClick={status}>Submit</button>
    </div>
  );
}
