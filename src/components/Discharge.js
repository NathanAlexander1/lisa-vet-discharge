import React from "react";

function Discharge(props) {
  console.log(props.noAbnormalities
    );
  return (
    <div>
      <p>
        It was a pleasure to see {props.petName} today({props.date}), who is
        obviously a {props.petSex} {props.petType} for {props.reasonForVisit}.
      </p>
      {props.noAbnormalities === false ? console.log(false) : <p>Your pet saddly has no abnormalities</p>}
    </div>
  );
}

export default Discharge;
