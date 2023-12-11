export const vaccineInfo = [
  {
    service: "Rabies Vaccine",
    nextDue: "1 year from when vaccine was administered",
    nextDueYrs: "(1 yr)",
    domBlurb: "Next due - ",
  },
  {
    service: "Rabies Vaccine (3 yr)",
    nextDue: "3 years from when vaccine was administered",
    nextDueYrs: "3",
    domBlurb: "Next due - ",

  },
  {
    service: "Pure Vax Rabies (1 yr)",
    nextDue: "1 year from when vaccine was administered",
    nextDueYrs: "1",
    domBlurb: "Next due - ",
  },
  {
    service: "FVRCP (1 yr)",
    nextDue: "1 year from when vaccine was administered",
    nextDueYrs: "1",
    domBlurb: "Next due - ",
  },
  {
    service: "FVRCP (booster)",
    nextDue: "3-4 weeks from booster",
    nextDueYrs: "",
    booster: "3-4 weeks",
    domBlurb: "Next due - ",
  },
  {
    service: "FVRCP (3 yr)",
    nextDue: "3 years from when vaccine was administered",
    nextDueYrs: "3",
    domBlurb: "Next due - ",
  },
  {
    service: "Bordatella (1 yr)",
    nextDue: "1 year from when vaccine was administered",
    nextDueYrs: "1",
    domBlurb: "Next due - ",
  },
  {
    service: "FeLV (1 yr)",
    nextDue: "1 year from when vaccine was administered",
    nextDueYrs: "1",
    domBlurb: "Next due - ",
  },
  {
    service: "FeLV (booster)",
    nextDue: "3-4 weeks from booster",
    nextDueYrs: "",
    booster: "3-4 weeks",
    domBlurb: "Next due - ",
  },
  {
    service: "DHPP (1 yr)",
    nextDue: "1 year from when vaccine was administered",
    nextDueYrs: "1",
    domBlurb: "Next due - ",
  },
  {
    service: "DHPP (booster)",
    nextDue: "3-4 weeks from booster",
    nextDueYrs: "",
    booster: "3-4 weeks",
    domBlurb: "Next due - ",
  },
  {
    service: "DHPP (3yr)",
    nextDue: "3 years from when vaccine was administered",
    nextDueYrs: "3",
    domBlurb: "Next due - ",
  },
  {
    service: "Lepto (1 yr)",
    nextDue: "1 year from when vaccine was administered",
    nextDueYrs: "1",
    domBlurb: "Next due - ",
  },
  {
    service: "Lepto (booster)",
    nextDue: "3-4 weeks from booster",
    nextDueYrs: "",
    booster: "3-4 weeks",
    domBlurb: "Next due - ",
  },
];

export const standardServicesInfo = [
  {
    service: "Dewormer",
    blurb:
      "petName also heShe received a dose of oral deworming medication during this appointment. We have sent home an additional dose of this same medication which should be given in 14 days. Please give the provided dose by mouth as instructed on the label.",
      domBlurb: "<p>petName also received a dose of oral deworming medication during this appointment. We have sent home an additional dose of this same medication which should be given in 14 days. Please give the provided dose by mouth as instructed on the label</p>"
        
      ,
  },
  {
    service: "Microchip Placed",
    blurb:
      "A microchip was placed during petName's appointment. Microchip services are provided by 24Petwatch. To create an online account, please visit www.mypethealth.com. Microchips are programmed with the information you provided at the time of the appointment, and all future changes must go through 24Petwatch. Your pet's microchip number can be found in the pet info section of your records.",
      domBlurb: "<p>A microchip was placed during petName's appointment. Microchip services are provided by 24Petwatch. To create an online account, please visit <a href='https://mypethealth.com' target='_blank'>www.mypethealth.com</a>. Microchips are programmed with the information you provided at the time of the appointment, and all future changes must go through 24Petwatch. Your pet's microchip number can be found in the pet info section of your records.</p>"
  },
  {
    service: "Microchip Recommended",
    blurb:
      "Microchipping is also available through the wellness clinic. Microchipping is minimally invasive and makes it easy for others to identify your pet if they are lost. Each chip number is unique and is registered with a national database. This number links to your address and phone number. Most animal organizations and veterinary clinics have the ability to scan and read microchips and will notify you if heShe is ever found. Please let us know if you would like this service performed at your next wellness appointment.",
      domBlurb: "<p>Microchipping is also available through the wellness clinic. Microchipping is minimally invasive and makes it easy for others to identify your pet if they are lost. Each chip number is unique and is registered with a national database. This number links to your address and phone number. Most animal organizations and veterinary clinics have the ability to scan and read microchips and will notify you if heShe is ever found. Please let us know if you would like this service performed at your next wellness appointment.</p>"

  },
  {
    service: "Microchip Found",
    blurb:
      "petName has a microchip registered with (MC COMPANY NAME). The microchip number is ###.  Please contact (MC COMPANY NAME) directly to make any necessary changes to the microchip information.",
      domBlurb: "<p>petName has a microchip registered with MCCOMPANYNAME. The microchip number is ###.  Please contact MCCOMPANYNAME directly to make any necessary changes to the microchip information.</p>"
  },
  {
    service: "FeLV/FIV Results",
    blurb: `An FeLV / FIV test was performed. The results are listed below: 
        - FeLV results: Negative 
        - FIV results: Negative 
        Following exposure to either virus, it can take 1 to 3 months for an infection to develop. One negative test for FELV or FIV does not guarantee that a cat is truly negative. Due to lag time between a potential initial infection and the development of positive test results, retesting for confirmation of negative FIV and FeLV status may be recommended in the future.`,
    domBlurb: "<p>An FeLV / FIV test was performed on petName. The results are listed below:</p><ul><li>1FeLV results: Negative</li><li>2FIV results: Negative</li></ul><p>Following exposure to either virus, it can take 1 to 3 months for an infection to develop for himHer. One negative test for FELV or FIV does not guarantee that a cat is truly negative. Due to lag time between a potential initial infection and the development of positive test results, retesting for confirmation of negative FIV and FeLV status may be recommended in the future.</p>",
  },
  {
    service: "FeLV Vaccine Info",
    blurb:
      "There is also an FeLV vaccine available through the wellness clinic, which is recommended for cats that will be spending unsupervised time outdoors or frequently interacting with other cats. This vaccine is a series of two, meaning that a booster is required 3-4 weeks following the initial vaccine, after which it can be administered annually. Please let us know if you would be interested in starting this vaccine series at a future visit. Additional information about FeLV and FIV can be found here: https://catvets.com/public/PDFs/ClientBrochures/AAFPFeLV-FIV%20Broch_Print.pdf",
      domBlurb: "<p>There is also an FeLV vaccine available through the wellness clinic, which is recommended for cats that will be spending unsupervised time outdoors or frequently interacting with other cats. This vaccine is a series of two, meaning that a booster is required 3-4 weeks following the initial vaccine, after which it can be administered annually. Please let us know if you would be interested in starting this vaccine series at a future visit. Additional information about FeLV and FIV can be found <a href='https://catvets.com/public/PDFs/ClientBrochures/AAFPFeLV-FIV%20Broch_Print.pdf' target='_blank' >here</a></p>"
  },
  {
    service: "Bordetella Vaccine Info",
    blurb:
      "We also offer Bordetella vaccines through the wellness clinic. This is a vaccine that helps prevent the main bacterial component “Kennel Cough”, a disease that causes a persistent cough with potential to progress to severe pneumonia. This disease is readily transmitted between dogs through nose to nose contact, aerosol transmission (eg. one dog sneezing near another) and through freshly contaminated fomites (eg. one dog sneezing on a ball that another dog picks up). While this is not considered a core vaccine, it is highly recommended for dogs that frequent dog parks, doggy day care/ puppy classes and boarding facilities. We can start vaccinating for this at age 8 weeks. This vaccine will need to be repeated annually for continuous prevention. Please let us know if you would be interested in having this vaccine administered in the future.",
      domBlurb: "<p>We also offer Bordetella vaccines through the wellness clinic. This is a vaccine that helps prevent the main bacterial component “Kennel Cough”, a disease that causes a persistent cough with potential to progress to severe pneumonia. This disease is readily transmitted between dogs through nose to nose contact, aerosol transmission (eg. one dog sneezing near another) and through freshly contaminated fomites (eg. one dog sneezing on a ball that another dog picks up). While this is not considered a core vaccine, it is highly recommended for dogs that frequent dog parks, doggy day care/ puppy classes and boarding facilities. We can start vaccinating for this at age 8 weeks. This vaccine will need to be repeated annually for continuous prevention. Please let us know if you would be interested in having this vaccine administered in the future.</p>"
  },
  {
    service: "Leptospirosis",
    blurb:
      "In addition to rabies, DHPP and bordetella vaccines, we also carry a vaccine for Leptospirosis. This is a bacterial disease that can be deadly and mainly affects the liver and kidneys. This disease is transmitted through urine of wild animals, mainly rodents such as rats, which contaminate water sources in the environment. We can start this vaccine at age 12 weeks. Your pet will need to have a second booster 3-4 weeks after the initial vaccine in order to be considered fully vaccinated for a year. After the initial vaccine series, your pet will only need one leptospirosis vaccine a year to continue being covered for this disease. Please let us know if you would be interested in having this vaccine administered in the future. For more information about Leptospirosis- please see: https://www.avma.org/resources/pet-owners/petcare/leptospirosis",
      domBlurb: "<p>In addition to rabies, DHPP and bordetella vaccines, we also carry a vaccine for Leptospirosis. This is a bacterial disease that can be deadly and mainly affects the liver and kidneys. This disease is transmitted through urine of wild animals, mainly rodents such as rats, which contaminate water sources in the environment. We can start this vaccine at age 12 weeks. Your pet will need to have a second booster 3-4 weeks after the initial vaccine in order to be considered fully vaccinated for a year. After the initial vaccine series, your pet will only need one leptospirosis vaccine a year to continue being covered for this disease. Please let us know if you would be interested in having this vaccine administered in the future. For more information about Leptospirosis- please visit <a href='https://www.avma.org/resources/pet-owners/petcare/leptospirosis' target='_blank'>here</a></p>"
  },
  {
    service: "Recommend Brushing",
    blurb:
      "As heShe continues to age, you may consider starting to brush his/her teeth using toothpaste formulated for pets. If this is not possible, adding some dental treats, dental wipes or gel daily can help with this as well. Your pet may eventually need a dental procedure done but keeping up on oral care may help prolong the time until this is needed. You can check out the VOHC.org website for dentist approved treats and toys.",
      domBlurb: "<p>As heShe continues to age, you may consider starting to brush his/her teeth using toothpaste formulated for pets. If this is not possible, adding some dental treats, dental wipes or gel daily can help with this as well. Your pet may eventually need a dental procedure done but keeping up on oral care may help prolong the time until this is needed. You can check out the VOHC.org website for dentist approved treats and toys.</p>"
  },
];
