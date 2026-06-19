export default function Homepage() {
  const details = ["kirubha", "25", "Msc mathematics"];
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

      {details.map((value, index) => (
        <p key={index}>
          <strong> {value}</strong>
        </p>
      ))}
      
      <p>
        Currently working:{" "}
        {workingStatus ? (
          <strong style={yesStyle}>Yes</strong>
        ) : (
          <strong style={noStyle}>NO</strong>
        )}
      </p>
    </div>
  );
}
