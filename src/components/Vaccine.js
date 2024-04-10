import React, { useState, useEffect } from "react";
import { vaccineInfo, standardServicesInfo } from "../const";
import { updateMulticheckArr } from "../utils/functions"

function Vaccine() {
  const [vaccines, setVaccines] = useState(false);
  const [appliedStrdPrc, setAppliedStrdPrc] = useState(false);
  const [checkedStateOne, setCheckedStateOne] = useState(
    new Array(vaccineInfo.length).fill(false)
  );
  const [vaccineArray, setVaccineArray] = useState([]);

  return (
    <div>
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
        // </form>
      )}
    </div>
  );
}

export default Vaccine;
