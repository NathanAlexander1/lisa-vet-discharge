import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import { petPronouns, stringToHTML } from "../utils/functions";

function Discharge(props) {
  const [pronounsObject, setPronounsObject] = useState(
    petPronouns(props.petSex)
  );
  // console.log(props)
  // console.log(document.getElementsByTagName('html')[0].innerText)
  // const text = "document.getElementsByTagName('html')[0].innerHTML";
  // console.log(props.standardProcArr);

  // console.log(pronounsObject.heShe, pronounsObject.himHer, pronounsObject.hisHers, pronounsObject.they)
  return (
    <div>
      {/* <button
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
      >
        Copy
      </button> */}
      <p>
        It was a pleasure to see {props.petName} today ({props.date}).{" "}
        {pronounsObject.heShe} is a wonderful {props.petType} and we loved
        seeing {pronounsObject.himHer.toLocaleLowerCase()} for{" "}
        {props.reasonForVisit}.
      </p>
      {props.noAbnormalities === false ? (
        <p>I am happy to report that {props.petName} has no abnormalities</p>
      ) : null}
      {props.vaccineArray.length <= 0 ? null : (
        <p>
          {pronounsObject.heShe} received the following vaccines during this
          appointment:
        </p>
      )}
      <ul>
      {stringToHTML(
          props.vaccineArray,
          pronounsObject,
          props.petName
        ).map((iPIB, i) => {
          let nextDue = moment(
            moment(props.date).add(iPIB.nextDueYrs, "years")._d
          ).format("MM/DD/YYYY");
          // console.log(iPIB)
          return (
            <>
              {iPIB.nextDueYrs !== "" ? (
                <>
                  <li dangerouslySetInnerHTML ={{__html: iPIB.cleanBlurb.outerHTML}}/> <p>- (next due {nextDue})</p>
                </>
              ) : (
                <>
                  <li dangerouslySetInnerHTML ={{__html: iPIB.cleanBlurb.outerHTML}}/> <p>- (booster in {iPIB.booster})</p>
                </>
              )}
            </>
          );
        })}
      </ul>
      {props.standardProcArr.length <= 0 ? null : (
        <p>
          {pronounsObject.heShe} received the following standard procedures
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
              <li dangerouslySetInnerHTML ={{__html: iPIB.cleanBlurb.innerHTML}}/>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Discharge;
