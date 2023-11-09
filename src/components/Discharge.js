import React from "react";

function Discharge(props) {
  console.log(props);
  return (
    <div>
      <p>It was a pleasure to see {props.petName} today({props.date}), who is obviously a {props.petSex} {props.petType}.</p>
    </div>
  );
}

export default Discharge;
