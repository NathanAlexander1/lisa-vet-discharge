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

export const moveThroughHTMLChildren = (htmlChild) => {
  console.log(htmlChild)
  
  // let singlePartBlurb = htmlChild.props.children;
  // // console.log(typeof singlePartBlurb)
  // if (!singlePartBlurb.length) {
  //   // console.log(singlePartBlurb.props.children)
  //   return singlePartBlurb.props.children;
  // } 
  // if (singlePartBlurb.length) {
  //   singlePartBlurb.map((sPB, i) => {
  //     console.log(sPB.props.children)
  //     return sPB.props.children;
  //   })
  // }
}


export const insertPronounsIntoBlurb = ( servicesArr, pronounsObject, petName ) => {
  // console.log(servicesArr)
  let dynamicallyRenderedServiceArr = servicesArr.map((sA, i) => {
    // console.log(moveThroughHTMLChildren(sA.htmlBlurb))
    // let placeholder = moveThroughHTMLChildren(sA.htmlBlurb);
    // console.log(sA.domBlurb)

    
    let replaceWords = sA.domBlurb.split("petName").join(petName).split("heShe").join(pronounsObject.heShe).split("himHer").join(pronounsObject.himHer).split("hisHers").join(pronounsObject.hisHers).split("hisHer").join(pronounsObject.hisHer);
    // console.log(replaceWords)

    let doc = new DOMParser().parseFromString(replaceWords, "text/html")
    console.log(doc.body)

    // let replaceWords = sA.blurb.split("petName").join(petName).split("heShe").join(pronounsObject.heShe).split("himHer").join(pronounsObject.himHer).split("hisHers").join(pronounsObject.hisHers).split("hisHer").join(pronounsObject.hisHer);
    // sA.blurb = replaceWords;
    // console.log(sA)
    sA.newBlurb = doc.body;
    console.log(sA.newBlurb)
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
