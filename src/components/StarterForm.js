import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Moment from "react-moment";
import moment from "moment";
import Discharge from "./Discharge";
import Vaccine from "./Vaccine";
import { vaccineInfo, standardServicesInfo, abnormalitiesInfo, remindersInfo } from "../const";
import { updateMulticheckArr } from "../utils/functions";

function StarterForm() {
  // const [randomDogImage, setRandomDogImage] = useState({});
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petSex, setPetSex] = useState("");
  const [date, setDate] = useState(moment().format("MM-DD-YYYY"));
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [vaccines, setVaccines] = useState(false);
  const [appliedStrdPrc, setAppliedStrdPrc] = useState(false);
  const [noAbnormalities, setNoAbnormalities] = useState(false);
  const [noReminders, setNoReminders] = useState(false);

  const [checkedStateOne, setCheckedStateOne] = useState(
    new Array(vaccineInfo.length).fill(false)
  );
  const [checkedStateTwo, setCheckedStateTwo] = useState(
    new Array(standardServicesInfo.length).fill(false)
  );
  const [checkedStateThree, setCheckedStateThree] = useState(
    new Array(abnormalitiesInfo.length).fill(false)
  );
  const [checkedStateFour, setCheckedStateFour] = useState(
    new Array(remindersInfo.length).fill(false)
  );
  const [vaccineArray, setVaccineArray] = useState([]);
  const [standardProcArr, setStandardProcArr] = useState([]);
  const [abnormalityArr, setAbnormalityArr] = useState([]);
  const [remindersArr, setRemindersArr] = useState([]);
  const [showDischarge, setShowDischarge] = useState(false);
  // useEffect(() => {
  //   API.getRandomDog().then((data) => {
  //     console.log(data);
  //     setRandomDogImage(data);
  //   });

  // }, []);
  const handleInitialScreenForm = (e) => {
    e.preventDefault();
    setShowDischarge(true);
  };

  return (
    <div className="form-container">
      {!showDischarge ? (
        <form className="initialScreenForm" onSubmit={handleInitialScreenForm}>
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
            onChange={(e) =>
              setDate(moment(e.target.value).format("MM-DD-YYYY"))
            }
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
            <option value="a post-adoption exam">Post-adoption Exam</option>
          </select>
          {/* < Vaccine /> */}
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
                    <label htmlFor={ai.abnormalityBlurb}>{ai.abnormalityBlurb}</label>
                  </div>
                );
              })}
            </>
          )}


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
                    <label htmlFor={ri.reminderBlurb}>{ri.reminderBlurb}</label>
                  </div>
                );
              })}
            </>
          )}
          <button>Proceed</button>
        </form>
      ) : (
        <Discharge
          // randomDogImage={randomDogImage.image}
          petName={petName}
          petType={petType}
          petSex={petSex}
          date={date}
          reasonForVisit={reasonForVisit}
          noAbnormalities={noAbnormalities}
          vaccineArray={vaccineArray}
          standardProcArr={standardProcArr}
          abnormalities={abnormalityArr}
          reminders={remindersArr}
        />
      )}
    </div>
  );
}

export default StarterForm;
