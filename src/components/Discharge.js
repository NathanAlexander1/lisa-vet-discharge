import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import { petPronouns, stringToHTML } from "../utils/functions";

function Discharge(props) {
  console.log(props);
  const [pronounsObject, setPronounsObject] = useState(
    petPronouns(props.petSex)
  );
  const copyOutput = () => {
    let report = document.getElementById("discharge-output").innerText;
    console.log(report);
    navigator.clipboard.writeText(report);
  };
  return (
    <div className="discharge-report">
      {/* <img id="random-dog-img" width="200px" src={props.randomDogImage} /> */}
      <div id="discharge-output">
        <p>
          It was a pleasure to see {props.petName} for a {props.reasonForVisit}.
        </p>
        {/* {props.noAbnormalities === false ? (
          <p>There were no abnormalities on your pet's exam, which is great!</p>
        ) : null} */}
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

        {props.vaccineRemindersArray.length <= 0 ? null : (
          <p>
            I want to remind you about a few pieces of vaccine information.
          </p>
        )}
        <ul id="vaccineReminders-list">
          {stringToHTML(
              props.vaccineRemindersArray,
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


        {props.standardProcArr.length <= 0 ? null : (
          <p>
            {pronounsObject.petName} received the following standard procedures
            during this appointment:
          </p>
        )}
        <ul id="standardProcList">
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
        {props.abnormalities.length <= 0 ? (
          <p>There were no abnormalities on your pet's exam, which is great!</p>
        ) : (
          <p>
            We noticed the following abnormalities during {props.petName}'s
            appointmnet:
          </p>
        )}
        <ul id="abnormalitiesList">
          {stringToHTML(props.abnormalities, pronounsObject, props.petName).map(
            (iPIB, i) => {
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
            }
          )}
        </ul>
        {props.customBlurb === "" ? null : <p>{props.customBlurb}</p>}
        {/* {props.textareaValuesArray.length <= 0 ? null : (
          <ul>
            {props.textareaValuesArray.map((tAVA, i) => {
              return (
                <>
                  <li>{tAVA.domBlurb}</li>
                </>
              )
            })}
          </ul>
        )} */}

        <ul id="remindersList">
          {stringToHTML(props.textareaValuesArray, pronounsObject, props.petName).map(
            (iPIB, i) => {
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
            }
          )}
        </ul>

        {/* {props.textareaValuesArray.length <= 0 ? null : (
          <ul id="customBlurbsList">
            {stringToHTML(
              props.abnormalities,
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
        )} */}

        {props.reminders.length <= 0 ? null : (
          <p>
            We want to remind you of the following regarding {props.petName}'s
            appointment:
          </p>
        )}
        <ul id="remindersList">
          {stringToHTML(props.reminders, pronounsObject, props.petName).map(
            (iPIB, i) => {
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
            }
          )}
        </ul>
      </div>
      <button onClick={() => copyOutput()}>COPY</button>
    </div>
  );
}

export default Discharge;
