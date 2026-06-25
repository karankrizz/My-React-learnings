export default function Homepage() {
  const details = ["kirubhakaran", "25", "Msc mathematics","R"];
  const [name, age, degree,initial] = details;
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
  return (
    <div>
      <h1 style={headingStyle}>About Me</h1>

      <p><strong>NAME : </strong>{name.toUpperCase()+' '+initial}</p>
      <p><strong>AGE : </strong>{age}</p>
      <p><strong>DEGREE : </strong>{degree.toUpperCase()}</p>

      <p>
       <strong> Currently working:{" "}</strong>
        {workingStatus ? (
          <strong style={yesStyle}>Yes</strong>
        ) : (
          <strong style={noStyle}>NO</strong>
        )}
      </p>
    </div>
  );
}
