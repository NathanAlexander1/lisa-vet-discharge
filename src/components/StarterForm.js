import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import Discharge from "./Discharge";
import { vaccineInfo, standardServicesInfo } from "../const";
import { updateMulticheckArr } from "../utils/functions"

function StarterForm() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petSex, setPetSex] = useState("");
  const [date, setDate] = useState(moment().format("MM-DD-YYYY"));
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [noAbnormalities, setNoAbnormalities] = useState(false);
  const [vaccines, setVaccines] = useState(false);
  const [appliedStrdPrc, setAppliedStrdPrc] = useState(false);
  const [checkedStateOne, setCheckedStateOne] = useState(
    new Array(vaccineInfo.length).fill(false)
  );
  const [checkedStateTwo, setCheckedStateTwo] = useState(
    new Array(standardServicesInfo.length).fill(false)
  );
  const [vaccineArray, setVaccineArray] = useState([]);
  const [standardProcArr, setStandardProcArr] = useState([]);
  const [showDischarge, setShowDischarge] = useState(false);

  const handleInitialScreenForm = (e) => {
    e.preventDefault();
    setShowDischarge(true);
  };

  return (
    <div>
      {!showDischarge ? (
        <form className="initialScreenForm" onSubmit={handleInitialScreenForm}>
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
            <select multiple>
              <option value="overweight dog">Overweight Dog</option>
              <option value="overweight cat">Overweight Cat</option>
              <option value="mild dental disease">Mild Dental Disease</option>
              <option value="moderate to severe dental disease">
                Moderate to Severe Dental Disease
              </option>
              <option value="fleas">Fleas</option>
              <option value="tapeworms">Tapeworms</option>
              <option value="mild URI">Mild URI</option>
            </select>
          )}
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
            // <form className="vaccinesSelect">
            <>
              {vaccineInfo.map((vi, i) => {
                return (
                  <div>
                    <input
                      id={vi.vaccineName}
                      type="checkbox"
                      name={vi.vaccineName}
                      key={"vaccine" + i}
                      checked={checkedStateOne[i]}
                      onChange={() => updateMulticheckArr(i, vaccineInfo, [checkedStateOne, setCheckedStateOne], [vaccineArray, setVaccineArray])}
                    />
                    <label htmlFor={vi.vaccineName}>{vi.vaccineName}</label>
                  </div>
                );
              })}
            </>
            // </form>
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
                      onChange={() => updateMulticheckArr(i, standardServicesInfo, [checkedStateTwo, setCheckedStateTwo], [standardProcArr, setStandardProcArr])}
                    />
                    <label htmlFor={sSI.service}>{sSI.service}</label>
                  </div>
                );
              })}
            </>
          )}
          <button>Proceed</button>
        </form>
      ) : (
        <Discharge
          petName={petName}
          petType={petType}
          petSex={petSex}
          date={date}
          reasonForVisit={reasonForVisit}
          noAbnormalities={noAbnormalities}
          vaccineArray={vaccineArray}
          standardProcArr={standardProcArr}
        />
      )}
    </div>
  );
}

export default StarterForm;
