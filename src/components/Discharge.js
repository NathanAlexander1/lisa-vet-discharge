import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import { petPronouns, stringToHTML } from "../utils/functions";

function Discharge(props) {
  console.log(props)
  const [pronounsObject, setPronounsObject] = useState(
    petPronouns(props.petSex)
  );
  const copyOutput = () => {
    let report = document.getElementById('discharge-output').innerText;
    console.log(report)
    navigator.clipboard.writeText(report);
  };
  return (
    <div className="discharge-report">
      <img id="random-dog-img" width="200px" src={props.randomDogImage} />
      <div id="discharge-output">
        <p>
          It was a pleasure to see {props.petName} for a {props.reasonForVisit}.
        </p>
        {props.noAbnormalities === false ? (
          <p>There were no abnormalities on your pet's exam, which is great!</p>
        ) : null}
        {props.vaccineArray.length <= 0 ? null : (
          <p>
            {props.petName} received the following vaccines during this
            appointment:
          </p>
        )}
        <ul id="vaccine-list">
          {stringToHTML(props.vaccineArray, pronounsObject, props.petName).map(
            (iPIB, i) => {
              let nextDue = moment(
                moment(props.date).add(iPIB.nextDueYrs, "years")._d
              ).format("MM/DD/YYYY");
              // console.log(iPIB)
              return (
                <>
                  {iPIB.nextDueYrs !== "" ? (
                    // <>
                    //   <li dangerouslySetInnerHTML ={{__html: iPIB.cleanBlurb.outerHTML}}/> <p>- (next due {nextDue})</p>
                    // </>
                    <>
                      <li>
                        {" "}
                        - {iPIB.serviceWithoutYears} (next due {nextDue})
                      </li>
                    </>
                  ) : (
                    <>
                      {/* <li dangerouslySetInnerHTML ={{__html: iPIB.cleanBlurb.outerHTML}}/> <p>- (booster in {iPIB.booster})</p> */}
                      <li>
                        {" "}
                        - {iPIB.serviceWithoutYears} (booster in {iPIB.booster})
                      </li>
                    </>
                  )}
                </>
              );
            }
          )}
        </ul>
        {props.standardProcArr.length <= 0 ? null : (
          <p>
            {pronounsObject.petName} received the following standard procedures
            during this appointment:
          </p>
        )}
        <ul>
          {stringToHTML(
            props.standardProcArr,
            pronounsObject,
            props.petName
          ).map((iPIB, i) => {
            // console.log(iPIB)
            // console.log(iPIB.cleanBlurb.innerHTML)
            return (
              <>
                <li
                  dangerouslySetInnerHTML={{
                    __html: iPIB.cleanBlurb.innerHTML,
                  }}
                />
              </>
            );
          })}
        </ul>
      </div>
      <button onClick={() => copyOutput()}>COPY</button>
    </div>
  );
}

export default Discharge;
