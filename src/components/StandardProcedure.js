import React from "react";
import { useState, useEffect } from "react";
import { vaccineInfo, standardServicesInfo } from "../const";
import { updateMulticheckArr } from "../utils/functions";

function StandardProcedure() {
  const [checkedStateTwo, setCheckedStateTwo] = useState(
    new Array(standardServicesInfo.length).fill(false)
  );
  const [standardProcArr, setStandardProcArr] = useState([]);
  const [appliedStrdPrc, setAppliedStrdPrc] = useState(false);
  return (
    <>
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
    </>
  );
}

export default StandardProcedure;
