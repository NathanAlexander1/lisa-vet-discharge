import React, { useState } from "react";
import Discharge from "./Discharge";
import { vaccineInfo } from "../const";

function StarterForm() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petSex, setPetSex] = useState("");
  const [date, setDate] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [noAbnormalities, setNoAbnormalities] = useState(false);
  const [vaccines, setVaccines] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(vaccineInfo.length).fill(false)
  );
  const [vaccineArray, setVaccineArray] = useState([]);
  const [showDischarge, setShowDischarge] = useState(false);

  const handleInitialScreenForm = (e) => {
    e.preventDefault();
    setShowDischarge(true);
  };

  const updateVaccineArray = (i) => {
    const updatedCheckedState = checkedState.map((vaccine, index) =>
      index === i ? !vaccine : vaccine
    );
    setCheckedState([...updatedCheckedState]);
    let selectedVaccinesArray = [];
    const total = updatedCheckedState.reduce((sum, currentState, i) => {
      if (currentState === true) {
        selectedVaccinesArray.push(vaccineInfo[i]);
    }
    return selectedVaccinesArray;
      // console.log(selectedVaccinesArray);
    }, 0);
    console.log(total);

    setVaccineArray(total);
    // console.log(vaccineArray);
    return vaccineArray;
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
            onChange={(e) => setDate(e.target.value)}
            type="date"
            id="start"
            name="date"
            value={date}
            min="2018-01-01"
            max="2018-12-31"
          />
          <select
            className="form-input"
            value={reasonForVisit}
            onChange={(e) => setReasonForVisit(e.target.value)}
          >
            <option value="">Select Reason For Visit</option>
            <option value="a wellness exam">Wellness Exame</option>
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
                      // onChange={(e) => updateVaccineArray(e, vi)}
                      id={vi.vaccineName}
                      type="checkbox"
                      name={vi.vaccineName}
                      key={"vaccine" + i}
                      checked={checkedState[i]}
                      onChange={() => updateVaccineArray(i)}
                    />
                    <label htmlFor={vi.vaccineName}>{vi.vaccineName}</label>
                  </div>
                );
              })}
            </>
            // </form>
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
        />
      )}
    </div>
  );
}

export default StarterForm;
