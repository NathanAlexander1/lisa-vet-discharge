import React, { useState, useEffect } from "react";
import {
  petPronouns,
  stringToHTML,
  convertPreviousReportToHTML,
} from "../utils/functions";

function PreviousReport(props) {
  let previousReportArray = [{ domBlurb: props.previousReport }];
  console.log(previousReportArray);

  const [pronounsObject, setPronounsObject] = useState(
    petPronouns(props.petSex)
  );

  const copyOutput = () => {
    let report = document.getElementById("regen-discharge-report").innerText;
    // console.log(report);
    navigator.clipboard.writeText(report);
  };

  const newReport = () => {
    window.location.reload();
  };
  return (
    <div id="regen-discharge-report">
      <button class="btn" onClick={() => newReport()}>
        New Report
      </button>{" "}
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
      <button class="btn" onClick={() => copyOutput()}>
        COPY
      </button>
    </div>
  );
}

export default PreviousReport;
