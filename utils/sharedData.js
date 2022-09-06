export const shareData = {
  workArea: [
    "NYC",
    "Buffalo",
    "Nassau/Suffolk",
    "Rochester",
    "Syracuse",
    "Other (please specify)",
  ],
  roles: [
    "Organizer",
    "Facilitator/Presenter/MC",
    "Volunteer",
    "Support team member",
    "Community ambassador",
    "Intern/apprentice",
    "Other (please specify)",
  ],
  nysActivity: [
    "Block Association",
    "Strategic Planning Group",
    "Campus Approach",
    "Conscientious Clinician",
    "Health Disparities Workshop",
    "Faith Without Walls",
    "Other (please specify)",
  ],
  nysPrograms: ["Leadership Training Institute", "HIV High Impact"],
  languages: [
    "English",
    "Spanish",
    "French",
    "African languages",
    "Haitian-Creole",
  ],
  eventChecklist: [
    "Participants completed a sign in registration at the start of the session (online).",
    "The event started on time.",
    "The event finished on time.",
    "For meetings/workshops/training/town halls/webinars: Participants were greeted by someone from the program.",
    "Resources were available to participants.",
    "If photos were taken, participants signed a photo usage form.",
    "Hand sanitizer was available.",
    "For meetings/workshops/training/town halls/webinars: Participants were reminded that the workshop area is a safe space and to treat each other respectfully and within the workshop guidelines.",
    "For meetings/workshops/training/town halls/webinars: Participants completed a post-workshop evaluation form",
  ],
  gender: [
    "Female",
    "Male",
    "Transgender female",
    "Transgender male",
    "Gender non-conforming",
    "Non-binary",
    "Other gender identity",
  ],
  age: [
    "Under 15",
    "16-19",
    "20-24",
    "25-29",
    "30-34",
    "35-39",
    "40-44",
    "45-49",
    "50-54",
    "55-59",
    "60-64",
    "65-69",
    "70+",
  ],
  race: [
    "Black or African American",
    "Hispanic, Latino/a or Spanish",
    "Asian",
    "American Indian or Alaska Native",
    "Middle Eastern or North African",
    "Native Hawaiian or Other Pacific Islander",
    "White",
    "Some other race or origin (please specify)",
    "Declined to answer",
  ],
  ethnicity: [
    "Not of Hispanic, Latino/a or Spanish origin",
    "Mexican, Mexican American or Chicano",
    "Puerto Rican",
    "Cuban",
    "Dominican",
    "Ecuadorian",
    "Other Hispanic, Latino/a, or Spanish origin",
    "Declined to answer",
  ],
  sexualOrientation: [
    "Gay or lesbian",
    "Straight or heterosexual",
    "Bisexual",
    "Queer",
    "Questioning or not sure",
    "Unknown",
    "Declined to answer",
  ],
  resourcesDistributed: [
    "Masks",
    "COVID literature",
    "Vaccine related literature",
    "HIV literature",
    "HepC literature",
    "PrEP literature",
    "Safer sex kits",
    "Health disparities literature",
    "Bags/boxes of food",
    "Posters",
    "Other event leaflets",
    "Prepared meals",
    "Hand sanitizers",
    "COVID vaccine site referral information/details",
  ],
};

export const workArea = [
  "NYC",
  "Buffalo",
  "Nassau/Suffolk",
  "Rochester",
  "Syracuse",
  "Other",
];

export const roles = [
  "Organizer",
  "Facilitator/Presenter/MC",
  "Volunteer",
  "Support team member",
  "Community ambassador",
  "Intern/apprentice",
  "Other ",
];

export const nysActivity = [
  "Block Association",
  "Strategic Planning Group",
  "Campus Approach",
  "Conscientious Clinician",
  "Health Disparities Workshop",
  "Faith Without Walls",
  "Other ",
];

export const nysPrograms = ["Leadership Training Institute", "HIV High Impact"];

export const languages = [
  "English",
  "Spanish",
  "French",
  "African languages",
  "Haitian-Creole",
];

export const eventChecklist = [
  {event:"Participants completed a sign in registration at the start of the session (online).",
  dataField:"participantRegistrationForm"},
  {event:"The event started on time.",
dataField:"eventStartedOnTime"},
  {event:"The event finished on time.",
dataField:"eventFinishedOnTime"},
  {event:"For meetings/workshops/training/town halls/webinars: Participants were greeted by someone from the program.",
dataField:"participantGreeted"},
  {event:"Resources were available to participants.",
dataField:"resourcesAvailable"},
  {event:"If photos were taken, participants signed a photo usage form.",
dataField:"photoRelease"},
  {event:"Hand sanitizer was available.",
dataField:"handSanitizerAvailable"},
  {event:"For meetings/workshops/training/town halls/webinars: Participants were reminded that the workshop area is a safe space and to treat each other respectfully and within the workshop guidelines.",
dataField:"reminderSafeSpace"},
  {event:"For meetings/workshops/training/town halls/webinars: Participants completed a post-workshop evaluation form",
dataField:"reminderPostEvaluationSurvey"},
];

export const gender = [
  {id:1,value:"Female"},
  {id:2,value:"Male"},
  {id:3,value:"Transgender female"},
  {id:4,value:"Transgender male"},
  {id:5,value:"Gender non-conforming"},
  {id:6,value:"Non-binary"},
  {id:7,value:"Other gender identity"},
];

export const age = [
  {id:1,value:"Under 15"},
  {id:2,value:"16-19"},
  {id:3,value:"20-24"},
  {id:4,value:"25-29"},
  {id:5,value:"30-34"},
  {id:6,value:"35-39"},
  {id:7,value:"40-44"},
  {id:8,value:"45-49"},
  {id:9,value:"50-54"},
  {id:10,value:"55-59"},
  {id:11,value:"60-64"},
  {id:12,value:"65-69"},
  {id:13,value:"70+"},
];

export const race = [
  {id:1,value:"Black or African American"},
  {id:2,value:"Hispanic, Latino/a or Spanish"},
  {id:3,value:"Asian"},
  {id:4,value:"American Indian or Alaska Native"},
  {id:5,value:"Middle Eastern or North African"},
  {id:6,value:"Native Hawaiian or Other Pacific Islander"},
  {id:7,value:"White"},
  {id:8,value:"Some other race or origin (please specify)"},
  {id:9,value:"Declined to answer"},
];

export const ethnicity = [
  {id:1,value:"Not of Hispanic, Latino/a or Spanish origin"},
  {id:2,value:"Mexican, Mexican American or Chicano"},
  {id:3,value:"Puerto Rican"},
  {id:4,value:"Cuban"},
  {id:5,value:"Dominican"},
  {id:6,value:"Ecuadorian"},
  {id:7,value:"Other Hispanic, Latino/a, or Spanish origin"},
  {id:8,value:"Declined to answer"},
];

export const sexualOrientation = [
  {id:1,value:"Gay or lesbian"},
  {id:2,value:"Straight or heterosexual"},
  {id:3,value:"Bisexual"},
  {id:4,value:"Queer"},
  {id:5,value:"Questioning or not sure"},
  {id:6,value:"Unknown"},
  {id:7,value:"Declined to answer"},
];

export const resourcesDistributed= [
  {
    source: "/post_Event_report/mask_icon.svg",
    name:"Masks",
    dataFieldName:"masks"
  },
  {
    source: "/post_Event_report/COVID_literature_icon.svg",
    name:"COVID literature",
    dataFieldName:"covidLiterature"
  },
  {
    source: "/post_Event_report/COVID_literature_icon.svg",
    name:"Vaccine related literature",
    dataFieldName:"vaccineRelatedLiterature"
  },
  {
    source: "/post_Event_report/COVID_literature_icon.svg",
    name:"HIV literature",
    dataFieldName:"hivLiterature"
  },
  {
    source: "/post_Event_report/COVID_literature_icon.svg",
    name:"HepC literature",
    dataFieldName:"hepCLiterature"
  },
  {
    source: "/post_Event_report/COVID_literature_icon.svg",
    name:"PrEP literature",
    dataFieldName:"prepLiterature"
  },
  {
    source: "/post_Event_report/safer_sex_kit_icon.svg",
    name:"Safer sex kits",
    dataFieldName:"saferSexKits"
  },
  {
    source: "/post_Event_report/COVID_literature_icon.svg",
    name:"Health disparities literature",
    dataFieldName:"healthDisparitiesLiterature"
  },
  {
    source: "/post_Event_report/bags_boxes_of_food_icon.svg",
    name:"Bags/boxes of food",
    dataFieldName:"bagsBoxesFood"
  },
  {
    source: "/post_Event_report/poster_icon.svg",
    name:"Posters",
    dataFieldName:"posters"
  },
  {
    source: "/post_Event_report/ther_event_leaflets_icon.svg",
    name:"Other event leaflets",
    dataFieldName:"otherEventLeaflets"
  },
  {
    source: "/post_Event_report/prepared_meal_icon.svg",
    name:"Prepared meals",
    dataFieldName:"preparedMeals"
  },
  {
    source: "/post_Event_report/hand_sanitizers_icon.svg",
    name:"Hand sanitizers",
    dataFieldName:"handSanitizers"
  },
  {
    source: "/post_Event_report/COVID_site_referral_icon.svg",
    name:"COVID vaccine site referral information/details",
    dataFieldName:"covidVaccineSiteReferralDetails"
},]

