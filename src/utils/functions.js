export const petPronouns = (maleOrFemale) => {
    // console.log(maleOrFemale);

    if (maleOrFemale === "male") {
        let pronounsObject = {
            heShe: "He",
            himHer: "Him",
            hisHers: "His",
            they: "They"
        }
        // console.log(pronounsObject);
        return pronounsObject;
    } else {
        let pronounsObject = {
            heShe: "She",
            himHer: "Her",
            hisHers: "Hers",
            they: "They"
        }
        // console.log(pronounsObject);
        return pronounsObject;
    }
};