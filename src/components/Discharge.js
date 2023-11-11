import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";

function Discharge(props) {
  return (
    <div>
      <p>
        It was a pleasure to see {props.petName} today({props.date}), who is
        obviously a {props.petSex} {props.petType} for {props.reasonForVisit}.
      </p>
      {props.noAbnormalities === false ? (
        <p>Your pet has no abnormalities</p>
      ) : null}
      <p>
        {props.petName} received the following vaccines during this appointment:
      </p>
      <ul>
        {props.vaccineArray.map((va, i) => {
          let nextDue = moment(
            moment(props.date).add(va.nextDueYrs, "years")._d
          ).format("MM/DD/YYYY");
          //   console.log(nextDue);

          return (
            <>
              {va.nextDueYrs !== "" ? (
                <li key={"vaccine array" + i}>
                  {va.vaccineName} (next due {nextDue}).
                </li>
              ) : (
                <li>{va.vaccineName} (booster in {va.booster})</li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Discharge;
