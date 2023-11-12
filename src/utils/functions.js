export const petPronouns = (maleOrFemale) => {
  // console.log(maleOrFemale);

  if (maleOrFemale === "male") {
    let pronounsObject = {
      heShe: "He",
      himHer: "Him",
      hisHer: "His",
      hisHers: "His",
      they: "They",
    };
    // console.log(pronounsObject);
    return pronounsObject;
  } else {
    let pronounsObject = {
      heShe: "She",
      himHer: "Her",
      hisHer: "Her",
      hisHers: "Hers",
      they: "They",
    };
    // console.log(pronounsObject);
    return pronounsObject;
  }
};

export const insertPronounsIntoBlurb = (
  servicesArr,
  pronounsObject,
  petName
) => {
  // console.log(servicesArr)
  let dynamicallyRenderedServiceArr = servicesArr.map((sA, i) => {
    // console.log(sA)
    let replaceWords = sA.blurb.split("petName").join(petName).split("heShe").join(pronounsObject.heShe).split("himHer").join(pronounsObject.himHer).split("hisHers").join(pronounsObject.hisHers).split("hisHer").join(pronounsObject.hisHer);
    sA.blurb = replaceWords;
    return sA;
  });
  // console.log(dynamicallyRenderedServiceArr)
  return dynamicallyRenderedServiceArr;
};

export const updateMulticheckArr = (
  i,
  standardServicesInfo,
  [checkedState, setCheckedState],
  [treatmentArr, setTreatmentArr]
) => {
  const updatedCheckedState = checkedState.map(
    (treatmeantAdministeredQ, index) =>
      index === i ? !treatmeantAdministeredQ : treatmeantAdministeredQ
  );
  setCheckedState([...updatedCheckedState]);
  let selectedTreatmentcArray = [];
  const total = updatedCheckedState.reduce((sum, currentState, i) => {
    if (currentState === true) {
      selectedTreatmentcArray.push(standardServicesInfo[i]);
    }
    return selectedTreatmentcArray;
    // console.log(selectedTreatmentcArray);
  }, 0);
  // console.log(total);

  setTreatmentArr(total);
  // console.log(treatmentArr);
  return treatmentArr;
};
