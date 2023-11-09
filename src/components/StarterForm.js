import React, { useState } from "react";
import Discharge from "./Discharge";

function StarterForm() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petSex, setPetSex] = useState("");
  const [date, setDate] = useState("");
  const [showDischarge, setShowDischarge] = useState(false);

  const handleInitialScreenForm = (e) => {
    e.preventDefault();
    setShowDischarge(true)
  };

  return (
    <div>
      {!showDischarge ?
      <form onSubmit={handleInitialScreenForm}>
        <input
          name="name"
          placeholder="Pet Name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <select value={petType} onChange={(e) => setPetType(e.target.value)}>
          <option value="">Select Pet type</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Rabbit">Rabbit</option>
        </select>
        <select value={petSex} onChange={(e) => setPetSex(e.target.value)}>
          <option value="">Select Pet Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="start"
          name="date"
          value={date}
          min="2018-01-01"
          max="2018-12-31"
        />
        <button>Proceed</button>
      </form>
      :
      <Discharge
        petName={petName}
        petType={petType}
        petSex={petSex}
        date={date}
      />
}
    </div>
  );
}

export default StarterForm;
