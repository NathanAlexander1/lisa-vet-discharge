import React from "react";

function Discharge(props) {
  console.log(props.vaccineArray
    );
  return (
    <div>
      <p>
        It was a pleasure to see {props.petName} today({props.date}), who is
        obviously a {props.petSex} {props.petType} for {props.reasonForVisit}.
      </p>
      {props.noAbnormalities === false ? <p>Your pet has no abnormalities</p> : null}
    </div>
  );
}

export default Discharge;
