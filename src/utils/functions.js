// import React, { useState } from "react";

export const petPronouns = (maleOrFemale) => {
  // console.log(maleOrFemale);

  if (maleOrFemale === "male") {
    let pronounsObject = {
      heShe: "He",
      himHer: "Him",
      hisHers: "His",
      they: "They",
    };
    // console.log(pronounsObject);
    return pronounsObject;
  } else {
    let pronounsObject = {
      heShe: "She",
      himHer: "Her",
      hisHers: "Hers",
      they: "They",
    };
    // console.log(pronounsObject);
    return pronounsObject;
  }
};

// export const updateVaccineArray = (i, infoArray, e) => {
//   e.preventDefault();
//   let checkedState = new Array(infoArray.length).fill(false);
//   // console.log(checkedState)
//   let vaccineArray = [];
//   const updatedCheckedState = checkedState.map((vaccine, index) => {
//     if (index === i) {
//         console.log(index, i)

//         return !vaccine
//     } else {
//         console.log(index, i)
//         return vaccine
//       }
//   }
//     // index === i ? !vaccine : vaccine
//     );
    
//     checkedState = [...updatedCheckedState];
//     console.log(checkedState);

//   let selectedVaccinesArray = [];
  
//   const total = updatedCheckedState.reduce((sum, currentState, i) => {
//     if (currentState === true) {
//       selectedVaccinesArray.push(infoArray[i]);
//     }
//     return selectedVaccinesArray;
//     // console.log(selectedVaccinesArray);
//   }, 0);
//   // console.log(total);

//   vaccineArray = total;
//   console.log(vaccineArray);
//   return vaccineArray;
// };
