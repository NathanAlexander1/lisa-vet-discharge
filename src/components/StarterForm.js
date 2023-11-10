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
  const [showDischarge, setShowDischarge] = useState(false);

  const handleInitialScreenForm = (e) => {
    e.preventDefault();
    setShowDischarge(true);
  };

  return (
    <div>
      {!showDischarge ? (
        <form class="initialScreenForm" onSubmit={handleInitialScreenForm}>
          <input
            class="form-input"
            name="name"
            placeholder="Pet Name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
          <select
            class="form-input"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
          >
            <option value="">Select Pet type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
          </select>
          <select
            class="form-input"
            value={petSex}
            onChange={(e) => setPetSex(e.target.value)}
          >
            <option value="">Select Pet Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            class="form-input"
            onChange={(e) => setDate(e.target.value)}
            type="date"
            id="start"
            name="date"
            value={date}
            min="2018-01-01"
            max="2018-12-31"
          />
          <select
            class="form-input"
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
            class="form-input"
            id="abnormalities"
            name="abnormalities"
            onChange={(e) => setNoAbnormalities(e.target.checked)}
            type="checkbox"
            checked={noAbnormalities}
          />
          {noAbnormalities === false ? null : (
            <form>
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
            </form>
          )}
          <label htmlFor="vaccines">Vaccines?</label>
          <input
            class="form-input"
            id="vaccines"
            name="vaccines"
            onChange={(e) => setVaccines(e.target.checked)}
            type="checkbox"
            checked={vaccines}
          />
          {vaccines === false ? null : (
            <form>
              <select multiple>
                {vaccineInfo.map((vi, i) => {
                  return (
                    <option value={vi.vaccineName}>{vi.vaccineName}</option>
                  );
                })}
              </select>
            </form>
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
        />
      )}
    </div>
  );
}

export default StarterForm;
