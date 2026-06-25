export default function Table() {
  const customerList = [
    {
      customerName: "kirubhakaran",
      customerEmail: "kirubhak047@gmail.com",
      customerContact: 99999999999,
    },
    {
      customerName: "saravanan",
      customerEmail: "saravanan@gmail.com",
      customerContact: 9999900000,
    },
    {
      customerName: "vignesh",
      customerEmail: "vignesh@gmail.com",
      customerContact: 9999000000,
    },
  ];
  const tableStyle={
    border:"10px solid black"
  }
  const tbodyStyle = {
    border:"2px solid black",
    backgroundColor: "green"
  };
    const theadStyle = {
    border:"3px solid black",

    backgroundColor: "brown",
  };

  return (
    <div>
      <table style={tableStyle}  >
        <thead style={theadStyle}>
          <tr>
            <th>S.NO</th>
            <th>CUSTOMER NAME</th>
            <th> CUSTOMER EMAIL</th>
            <th>CUSTOMER CONTACT</th>
          </tr>
        </thead>
        <tbody style={tbodyStyle}>
          {customerList.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {value?.customerName} </td>
                <td> {value?.customerEmail} </td>
                <td> {value?.customerContact} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
