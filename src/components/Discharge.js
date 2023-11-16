import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import { petPronouns, insertPronounsIntoBlurb } from "../utils/functions";

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
      {insertPronounsIntoBlurb(
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
                <li key={"vaccine array" + i}>
                  {iPIB.service} (next due {nextDue}).
                </li>
              ) : (
                <li>
                  {iPIB.service} (booster in {iPIB.booster})
                </li>
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
        {insertPronounsIntoBlurb(
          props.standardProcArr,
          pronounsObject,
          props.petName
        ).map((iPIB, i) => {
          let domChildren = iPIB.newBlurb.children
          console.log(iPIB.newBlurb.children)
          let cleanTextArr = [];
          for (let k = 0; k < domChildren.length; k++) {
            // console.log('hlelo')
            let domChild = domChildren[k];
            console.log(domChild.innerText)
            cleanTextArr.push(domChild.innerText)
            iPIB.cleanText = cleanTextArr;
          }
          console.log(iPIB)
          
          return (
            <>
              {/* <li>{iPIB.service} - {iPIB.htmlBlurb}</li> */}
              <li>{iPIB.cleanText.map((cT, j) => {
                return(
                  <p>{cT}</p>
                )
              })}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Discharge;
