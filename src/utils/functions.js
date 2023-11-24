export const petPronouns = (maleOrFemale) => {
  if (maleOrFemale === "male") {
    let pronounsObject = {
      heShe: "he",
      himHer: "him",
      hisHer: "his",
      hisHers: "his",
      they: "they",
      capHeShe: "He",
      capHimHer: "Him",
      capHisHer: "His",
      capHisHers: "His",
      capThey: "They",
    };
    // console.log(pronounsObject);
    return pronounsObject;
  } else {
    let pronounsObject = {
      heShe: "she",
      himHer: "her",
      hisHer: "her",
      hisHers: "hers",
      they: "they",
      capHeShe: "She",
      capHimHer: "Her",
      capHisHer: "Her",
      capHisHers: "Hers",
      capThey: "They",
    };
    // console.log(pronounsObject);
    return pronounsObject;
  }
};

export const stringToHTML = ( servicesArr, pronounsObject, petName ) => { 
  // console.log(servicesArr)
  let dynamicBlurb = servicesArr.map((sA, i) => {
    // console.log(sA.domBlurb)
    let replaceWords = sA.domBlurb.split("petName").join(petName).split("heShe").join(pronounsObject.heShe).split("himHer").join(pronounsObject.himHer).split("hisHers").join(pronounsObject.hisHers).split("capHisHer").join(pronounsObject.capHisHer).split("capHeShe").join(pronounsObject.capHeShe).split("capHimHer").join(pronounsObject.capHimHer).split("capHisHers").join(pronounsObject.capHisHers).split("hisHer").join(pronounsObject.hisHer).split("capThey").join(pronounsObject.capThey);
    // console.log(replaceWords)
    let parser = new DOMParser();
    let doc = parser.parseFromString(replaceWords, 'text/html')
    sA.cleanBlurb = doc.body
    // console.log(sA.cleanBlurb)
    return sA

  });
  return dynamicBlurb
}

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
