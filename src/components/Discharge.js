import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import {
  petPronouns,
  stringToHTML,
  convertPreviousReportToHTML,
} from "../utils/functions";

function Discharge(props) {
  // let previousReportArray = [{ domBlurb: props.previousReport }];
  // console.log(previousReportArray);

  const [pronounsObject, setPronounsObject] = useState(
    petPronouns(props.petSex)
  );

  const copyOutput = () => {
    let report = document.getElementById("discharge-output").innerText;
    console.log(report);
    navigator.clipboard.writeText(report);
  };

  const setLocalStorage = () => {
    let reportToStore = document.getElementById("discharge-output").innerHTML;
    localStorage.setItem("mostRecentReport", reportToStore);
    // console.log(reportToStore);
  };

  useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <>
      {/* {!props.showPreviousReport ? console.log(document.getElementById("discharge-output")) : (
        <p>
          {" "}
          {stringToHTML(previousReportArray, pronounsObject, props.petName).map(
            (iPIB, i) => {
              // console.log(iPIB)
              // console.log(iPIB.cleanBlurb.innerHTML)
              return (
                <>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: iPIB.cleanBlurb.innerHTML,
                    }}
                  />
                </>
              );
            }
          )}
        </p>
      )} */}
      <div className="discharge-report">
        {/* <img id="random-dog-img" width="200px" src={props.randomDogImage} /> */}
        <div id="discharge-output">
          <p>
            It was a pleasure to see {props.petName} for a{" "}
            {props.reasonForVisit}.
          </p>
          {/* {props.noAbnormalities === false ? (
          <p>There were no abnormalities on your pet's exam, which is great!</p>
        ) : null} */}
          <div id="vaccine-discharge-section">
            {props.vaccineArray.length <= 0 ? null : (
              <p>
                {props.petName} received the following vaccines during this
                appointment:
              </p>
            )}
            <ul id="vaccine-list">
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
                          - {iPIB.serviceWithoutYears} (booster in{" "}
                          {iPIB.booster})
                        </li>
                      </>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
          <div id="vaccine-reminders-discharge-section">
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
          </div>
          <div id="standard-proc-discharge-section">
            {props.standardProcArr.length <= 0 ? null : (
              <p>
                {pronounsObject.petName} received the following standard
                procedures during this appointment:
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
          </div>
          <div id="abnormalities-discharge-section">
            {props.abnormalities.length <= 0 ? (
              <p>
                There were no abnormalities on your pet's exam, which is great!
              </p>
            ) : (
              <p>
                We noticed the following abnormalities during {props.petName}'s
                appointmnet:
              </p>
            )}
            <ul id="abnormalitiesList">
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
          </div>
          <div id="presurgical-exam-discharge-section">
            {props.presurgicalExamArr.length <= 0 ? null : (
              <p>Below is some presurgical exam info:</p>
            )}
            <ul id="presurgicalExamList">
              {stringToHTML(
                props.presurgicalExamArr,
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
          <div id="custom-blurb-discharge-section">
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

            <ul id="customBlurbsList">
              {stringToHTML(
                props.textareaValuesArray,
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
          <div id="reminders-discharge-section">
            {props.reminders.length <= 0 ? null : (
              <p>
                We want to remind you of the following regarding {props.petName}
                's appointment:
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
        </div>
        <button onClick={() => copyOutput()}>COPY</button>
      </div>
    </>
  );
}

export default Discharge;
