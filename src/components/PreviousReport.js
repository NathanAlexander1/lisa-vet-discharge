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
  return (
    <div>
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
    </div>
  );
}

export default PreviousReport;
