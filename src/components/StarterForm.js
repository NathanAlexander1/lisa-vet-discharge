import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Moment from "react-moment";
import moment from "moment";
import Discharge from "./Discharge";
import Vaccine from "./Vaccine";
import {
  vaccineInfo,
  vaccineReminderInfo,
  standardServicesInfo,
  abnormalitiesInfo,
  presurgicalExamInfo,
  remindersInfo,
} from "../const";
import { updateMulticheckArr } from "../utils/functions";
import PreviousReport from "./PreviousReport";

function StarterForm() {
  // const [randomDogImage, setRandomDogImage] = useState({});
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petSex, setPetSex] = useState("");
  const [date, setDate] = useState(moment().format("MM-DD-YYYY"));
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [vaccines, setVaccines] = useState(false);
  const [vaccineReminders, setVaccineReminders] = useState(false);
  const [appliedStrdPrc, setAppliedStrdPrc] = useState(false);
  const [noPresurgicalExams, setNoPresurgicalExams] = useState(false);
  const [noAbnormalities, setNoAbnormalities] = useState(false);
  const [noReminders, setNoReminders] = useState(false);
  const [noCustom, setNoCustom] = useState(false);

  const [checkedStateOne, setCheckedStateOne] = useState(
    new Array(vaccineInfo.length).fill(false)
  );
  const [checkedStateFive, setCheckedStateFive] = useState(
    new Array(vaccineReminderInfo.length).fill(false)
  );
  const [checkedStateTwo, setCheckedStateTwo] = useState(
    new Array(standardServicesInfo.length).fill(false)
  );
  const [checkedStateThree, setCheckedStateThree] = useState(
    new Array(abnormalitiesInfo.length).fill(false)
  );
  const [checkedStateSix, setCheckedStateSix] = useState(
    new Array(presurgicalExamInfo.length).fill(false)
  );
  const [checkedStateFour, setCheckedStateFour] = useState(
    new Array(remindersInfo.length).fill(false)
  );

  const [vaccineArray, setVaccineArray] = useState([]);
  const [vaccineRemindersArray, setVaccineRemindersArray] = useState([]);
  const [standardProcArr, setStandardProcArr] = useState([]);
  const [abnormalityArr, setAbnormalityArr] = useState([]);
  const [presurgicalExamArr, setPresurgicalExamArr] = useState([]);
  const [remindersArr, setRemindersArr] = useState([]);
  const [customBlurb, setCustomBlurb] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaValuesArray, setTextareaValuesArray] = useState([]);

  const [showDischarge, setShowDischarge] = useState(false);
  const [showPreviousReport, setShowPreviousReport] = useState(false);
  const [previousReport, setPreviousReport] = useState("");
  // useEffect(() => {
  //   API.getRandomDog().then((data) => {
  //     console.log(data);
  //     setRandomDogImage(data);
  //   });

  // }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleInitialScreenForm = (e) => {
    e.preventDefault();
    setShowDischarge(true);
  };

  const handleTextArea = (event) => {
    console.log(event.target.value);
    setCustomBlurb(event.target.value);
    console.log(customBlurb);
    navigator.clipboard.writeText(customBlurb);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (textareaValue.trim() !== "") {
      setTextareaValuesArray((prevArray) => [
        ...prevArray,
        { domBlurb: textareaValue.trim() },
      ]);
      setTextareaValue(""); // Clear the textarea after adding its value to the array
    }
    console.log(textareaValuesArray);
  };

  const handleRenerateLastReport = () => {
    console.log(localStorage.getItem("mostRecentReport"));
    setPreviousReport(localStorage.getItem("mostRecentReport"));
    setShowPreviousReport(true);
    setShowDischarge(false);
  };

  const editReport = () => {
    console.log("start new");
    setShowDischarge(false);
  };

  return (
    <>
      {!showPreviousReport ? (
        <div>
          {!showDischarge ? (
            <div className="form-container">
              <form
                className="initialScreenForm"
                onSubmit={handleInitialScreenForm}
              >
                {/* <img width="200px" src={randomDogImage.image} /> */}
                <input
                  className="form-input"
                  name="name"
                  placeholder="Pet Name"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                />
                <select
                  className="form-input"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                >
                  <option value="">Select Pet type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="rabbit">Rabbit</option>
                </select>
                <select
                  className="form-input"
                  value={petSex}
                  onChange={(e) => setPetSex(e.target.value)}
                >
                  <option value="">Select Pet Sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <input
                  className="form-input"
                  onChange={handleDateChange}
                  type="date"
                  id="start"
                  name="date"
                  value={date}
                />
                <select
                  className="form-input"
                  value={reasonForVisit}
                  onChange={(e) => setReasonForVisit(e.target.value)}
                >
                  <option value="">Select Reason For Visit</option>
                  <option value="a wellness exam">Wellness Exam</option>
                  <option value="a wellness exam and vaccines">
                    Wellness Exam & Vaccines
                  </option>
                  <option value="a pre-surgical exam">Pre-surgical Exam</option>
                  <option value="a post-surgery recheck exam">
                    Post-surgery recheck Exam
                  </option>
                  <option value="a post-adoption exam">
                    Post-adoption Exam
                  </option>
                </select>
                {/* < Vaccine /> */}
                <div className="section">
                  <label htmlFor="vaccines">Vaccines?</label>
                  <input
                    className="form-input"
                    id="vaccines"
                    name="vaccines"
                    onChange={(e) => setVaccines(e.target.checked)}
                    type="checkbox"
                    checked={vaccines}
                  />
                  {vaccines === false ? null : (
                    <>
                      {vaccineInfo.map((vi, i) => {
                        return (
                          <div>
                            <input
                              id={vi.service}
                              type="checkbox"
                              name={vi.service}
                              key={"vaccine" + i}
                              checked={checkedStateOne[i]}
                              onChange={() =>
                                updateMulticheckArr(
                                  i,
                                  vaccineInfo,
                                  [checkedStateOne, setCheckedStateOne],
                                  [vaccineArray, setVaccineArray]
                                )
                              }
                            />
                            <label htmlFor={vi.service}>{vi.service}</label>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="section">
                  <label htmlFor="vaccineReminders">Vaccine Reminders?</label>
                  <input
                    className="form-input"
                    id="vaccineReminders"
                    name="vaccineReminders"
                    onChange={(e) => setVaccineReminders(e.target.checked)}
                    type="checkbox"
                    checked={vaccineReminders}
                  />
                  {vaccineReminders === false ? null : (
                    <>
                      {vaccineReminderInfo.map((vir, i) => {
                        return (
                          <div>
                            <input
                              id={vir.service}
                              type="checkbox"
                              name={vir.service}
                              key={"vaccineReminder" + i}
                              checked={checkedStateFive[i]}
                              onChange={() =>
                                updateMulticheckArr(
                                  i,
                                  vaccineReminderInfo,
                                  [checkedStateFive, setCheckedStateFive],
                                  [
                                    vaccineRemindersArray,
                                    setVaccineRemindersArray,
                                  ]
                                )
                              }
                            />
                            <label htmlFor={vir.service}>{vir.service}</label>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="section">
                  <label htmlFor="abnormalities">Abnormalities?</label>
                  <input
                    className="form-input"
                    id="abnormalities"
                    name="abnormalities"
                    onChange={(e) => setNoAbnormalities(e.target.checked)}
                    type="checkbox"
                    checked={noAbnormalities}
                  />
                  {noAbnormalities === false ? null : (
                    <>
                      {abnormalitiesInfo.map((ai, i) => {
                        return (
                          <div>
                            <input
                              id={ai.abnormalityBlurb}
                              type="checkbox"
                              name={ai.abnormalityBlurb}
                              key={"abnormality" + i}
                              checked={checkedStateThree[i]}
                              onChange={() =>
                                updateMulticheckArr(
                                  i,
                                  abnormalitiesInfo,
                                  [checkedStateThree, setCheckedStateThree],
                                  [abnormalityArr, setAbnormalityArr]
                                )
                              }
                            />
                            <label htmlFor={ai.abnormalityBlurb}>
                              {ai.abnormalityBlurb}
                            </label>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="section">
                  <label htmlFor="applied-standard-proc">
                    Applied Standard Procedures?
                  </label>
                  <input
                    className="form-input"
                    id="applied-standard-proc"
                    name="applied-standard-proc"
                    onChange={(e) => setAppliedStrdPrc(e.target.checked)}
                    type="checkbox"
                    checked={appliedStrdPrc}
                  />
                  {appliedStrdPrc === false ? null : (
                    <>
                      {standardServicesInfo.map((sSI, i) => {
                        // console.log(sSI)
                        return (
                          <div>
                            <input
                              id={sSI.service}
                              type="checkbox"
                              name={sSI.service}
                              key={"Standard Service" + i}
                              checked={checkedStateTwo[i]}
                              onChange={() =>
                                updateMulticheckArr(
                                  i,
                                  standardServicesInfo,
                                  [checkedStateTwo, setCheckedStateTwo],
                                  [standardProcArr, setStandardProcArr]
                                )
                              }
                            />
                            <label htmlFor={sSI.service}>{sSI.service}</label>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="section">
                  <label htmlFor="presurgicalExam">
                    Pre-Surgical Exam Info?
                  </label>
                  <input
                    className="form-input"
                    id="presurgicalExam"
                    name="presurgicalExam"
                    onChange={(e) => setNoPresurgicalExams(e.target.checked)}
                    type="checkbox"
                    checked={noPresurgicalExams}
                  />
                  {noPresurgicalExams === false ? null : (
                    <>
                      {presurgicalExamInfo.map((pei, i) => {
                        return (
                          <div>
                            <input
                              id={pei.service}
                              type="checkbox"
                              name={pei.service}
                              key={"presurgicalExam" + i}
                              checked={checkedStateSix[i]}
                              onChange={() =>
                                updateMulticheckArr(
                                  i,
                                  presurgicalExamInfo,
                                  [checkedStateSix, setCheckedStateSix],
                                  [presurgicalExamArr, setPresurgicalExamArr]
                                )
                              }
                            />
                            <label htmlFor={pei.service}>{pei.service}</label>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="section">
                  <label htmlFor="customBlurb">Custom Blurb?</label>
                  <input
                    className="form-input"
                    id="customBlurb"
                    name="customBlurb"
                    onChange={(e) => setNoCustom(e.target.checked)}
                    type="checkbox"
                    checked={noCustom}
                  />
                  {noCustom === false ? null : (
                    <>
                      {/* <textarea
                  value={customBlurb}
                  onChange={handleTextArea}
                  placeholder="Enter text here"
                  id="customBlurb"
                  name="customBlurb"
                  rows="4"
                  cols="50"
                ></textarea> */}
                      <textarea
                        id="customBlurbTextArea"
                        placeholder="Enter text here"
                        value={textareaValue}
                        onChange={handleTextareaChange}
                      />
                      <button
                        class="btn"
                        type="button"
                        onClick={handleButtonClick}
                      >
                        Set Blurb
                      </button>
                    </>
                  )}
                </div>
                <div className="section">
                  <label htmlFor="abnormalities">Reminders?</label>
                  <input
                    className="form-input"
                    id="reminders"
                    name="reminders"
                    onChange={(e) => setNoReminders(e.target.checked)}
                    type="checkbox"
                    checked={noReminders}
                  />
                  {noReminders === false ? null : (
                    <>
                      {remindersInfo.map((ri, i) => {
                        return (
                          <div>
                            <input
                              id={ri.reminderBlurb}
                              type="checkbox"
                              name={ri.reminderBlurb}
                              key={"reminder" + i}
                              checked={checkedStateFour[i]}
                              onChange={() =>
                                updateMulticheckArr(
                                  i,
                                  remindersInfo,
                                  [checkedStateFour, setCheckedStateFour],
                                  [remindersArr, setRemindersArr]
                                )
                              }
                            />
                            <label htmlFor={ri.reminderBlurb}>
                              {ri.reminderBlurb}
                            </label>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
                <button class="btn">Proceed</button>
                <button
                  class="btn"
                  type="button"
                  onClick={handleRenerateLastReport}
                >
                  Regenerate last report
                </button>
              </form>
            </div>
          ) : (
            <div className="discharge-container">
              <button class="btn" onClick={() => editReport()}>
                Edit current report
              </button>
              <Discharge
                // randomDogImage={randomDogImage.image}
                petName={petName}
                petType={petType}
                petSex={petSex}
                date={date}
                reasonForVisit={reasonForVisit}
                noAbnormalities={noAbnormalities}
                vaccineArray={vaccineArray}
                vaccineRemindersArray={vaccineRemindersArray}
                standardProcArr={standardProcArr}
                abnormalities={abnormalityArr}
                presurgicalExamArr={presurgicalExamArr}
                reminders={remindersArr}
                customBlurb={customBlurb}
                textareaValuesArray={textareaValuesArray}
                showPreviousReport={showPreviousReport}
                previousReport={previousReport}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="regenerated-report-container">
          <PreviousReport
            showPreviousReport={showPreviousReport}
            previousReport={previousReport}
          />
        </div>
      )}
    </>
  );
}

export default StarterForm;
