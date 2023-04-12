import React, { useState } from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import ProgramCard from "../components/ProgramCard";
import PageTopHeading from "../components/PageTopHeading";
export default function HistoricalData() {
  const [searchWord, setSearchWord] = useState("");

  const datasets = [
    {
      program: "T2",
      datasetName: "Test and Trace (T2) Database",
      link: "https://drive.google.com/uc?export=download&id=1hrMVh2Kpwm1pK64h9Eggi3NlDcusJcXl",
      description: "COVID-19 Outreach activities for the T2 program",
      records: "2674",
      dateRange: "8/6/2020-6/30/2022",
      programImage: "/T2_HRSA_icon.svg",
    },
    {
      program: "HRSA",
      datasetName: "HRSA Outreach Worker Daily Activity",
      link: "https://drive.google.com/uc?export=download&id=1-SWEeEeftx8MN5MemkqWnHlL01tMZPE1",
      description:
        "Daily Outreach Worker reports for activities from the HRSA program in NY, AL, SC, LA, GA ",
      records: "884",
      dateRange: "9/27/2021-7/30/2022",
      programImage: "/T2_HRSA_icon.svg",
    },
    {
      program: "HRSA",
      datasetName:
        "Vaccine Profile: HRSA Community Based Vaccine Outreach Database",
      link: "https://drive.google.com/uc?export=download&id=1JoE5B6gXCcBQq41zHExHaJdabxgYNNQW",
      description:
        "Referrals to COVID-19 vaccines and boosters as part of the HRSA program in NY, AL, SC, LA, GA ",
      records: "1708",
      dateRange: "9/3/2021-08/02/2022",
      programImage: "/T2_HRSA_icon.svg",
    },
    {
      program: "OEF",
      datasetName: "OEF FBOs Directory 2021/22 Public",
      link: "https://drive.google.com/uc?export=download&id=1C1iwPps51qKmjljRLrQWb_g2aDJLC7M3",
      description: "OEF Program directory participating FBOs",
      records: "35",
      date: "FY 2021-2022",
      programImage: "/OEF_icon.svg",
    },
    {
      program: "OEF",
      datasetName: "OEF HIV Outreach Events FY 2021-2022 Database",
      link: "https://drive.google.com/uc?export=download&id=1r-N6nPLuGo972j9YB4LOxUnif0a9SmtR",
      description: "OEF HIV Outreach Events data",
      records: "159",
      dateRange: "FY 2021-2022",
      programImage: "/OEF_icon.svg",
    },
    {
      program: "OEF",
      datasetName:
        "OEF HIV Outreach Events Participant (sign-in sheet) 2021/22",
      link: "https://drive.google.com/uc?export=download&id=1WYZlDAlFNGVPpoRNCICamlpUcMx5ML38",
      description: "OEF HIV Outreach Events Participant Sign in Sheets",
      records: "6820",
      dateRange: "FY 2021-2022",
      programImage: "/OEF_icon.svg",
    },
    {
      program: "OEF",
      datasetName: "OEF FBO Site Visits Database 2021-2022",
      link: "https://drive.google.com/uc?export=download&id=1YBgvbbPhMHBU17zvKYKKAh7JsTsl3DPk",
      description: "OEF FBO Site Visit Evaluations",
      records: "30",
      dateRange: "FY 2021-2022",
      programImage: "/OEF_icon.svg",
    },
    {
      program: "NYS",
      datasetName:
        "NYS HIV Activity Database September 2021 to end of June 2022",
      link: "https://drive.google.com/uc?export=download&id=1ZPrCLaKt6b5cd24kbjyuw4tDhUi6qPtO",
      description: "Outreach activities for the NYS HIV program",
      records: "74",
      dateRange: "09/30/2022-06/30/2022",
      programImage: "/NYS_programs_icon.svg",
    },
    {
      program: "NYS",
      datasetName: "NYS HIV Activity Database January 2021 - November 2021",
      link: "https://drive.google.com/uc?export=download&id=1p6qKJ-R6EBm4t3qH2TuBYIrguItBfD5R",
      description: "Outreach activities for the NYS HIV program",
      records: "86",
      dateRange: "01/27/2021-11/05/2021",
      programImage: "/NYS_programs_icon.svg",
    },
    {
      program: "Social Media",
      datasetName: "Social Media Database Black Health",
      link: "https://drive.google.com/uc?export=download&id=1qUeiOTzUaMAJf1vQc0K0UU_CdTWLuDJq",
      description:
        "Record of Black Health social media posts from Facebook, Instagram, Twitter, YouTube and Mailchimp.",
      records: "1119",
      dateRange: "7/23/21-06/30/2022",
      programImage: "/BH_social_media_icon.svg",
    },

{   program:'OEF',
   datasetName: 'OEF - ALI Meetings Database - April 2022',
   link:'https://www.dropbox.com/s/k52u7dvjvj8sjod/OEF%20-%20ALI%20Meetings%20Database%20-%20April%202022.csv?dl=0',
   description:"ALI Meetings post-event FBO report",
records:"4",
dateRange:"4/21/2022",
programImage: "/OEF_icon.svg",}
,

{program:'OEF',
datasetName:'OEF HIV Outreach Events Participant (sign-in sheet) 2022/23',
link:'https://www.dropbox.com/s/1ml99xbuqc8drka/OEF%20-%20CBT%20-%20HIV%20Outreach%20Event%20Participant%20%28sign-in%20sheet%29%20July%202022%20-%20Feb%202023.csv?dl=0 ',
description:'OEF HIV Outreach Events Participant Sign in Sheets',
records:'4507 ',
dateRange:'7/9/2022-2/28/23',
programImage:'/OEF_icon.svg',},


{program:'OEF',
datasetName:'OEF - CAB Meetings Database Aug 2021 - Feb 2023',
link:'https://www.dropbox.com/s/sveo3mfxbgi2sg0/OEF%20-%20CAB%20Meetings%20Database%20Aug%202021%20-%20Feb%202023.csv?dl=0 ',
description:'CAB Meetings post-event FBO report',
records:'51 ',
dateRange:'8/19/2021-2/6/2023',
programImage:'/OEF_icon.svg',},

{program:'OEF',
datasetName:'OEF CBT Pre-workshop Participant Survey 2021',
link:'https://www.dropbox.com/s/x0gdyfpc0e4zpcd/OEF%20-%20CBT%20Pre-workshop%20Participation%20Database%202021.csv?dl=0 ',
description:'OEF CBT Pre-workshop Participant Surveys',
records:'36 ',
dateRange:'8/3/21-11/18/21',
programImage:'/OEF_icon.svg',},

{program:'OEF',
datasetName:'OEF CBT Post-Workshop Participant Survey 2021/23',
link:'https://www.dropbox.com/s/mopubn9zso6z82x/OEF%20-%20CBT%20Post%20Workshop%20%20Participant%20Survey%20Aug%202021%20-%20Feb%202023%20.csv?dl=0 ',
description:'OEF CBT post-workshop participant surveys',
records:'531 ',
dateRange:'8/12/21-2/16/23',
programImage:'/OEF_icon.svg',}
,
{program:'OEF',
datasetName:'OEF - CBT Workshop Facilitator Reflection Database Aug 2021 - Jan 2023',
link:'https://www.dropbox.com/s/mzzpy7sp3ok35d0/OEF%20-%20CBT%20Workshop%20Facilitator%20Reflection%20Database%20Aug%202021%20-%20Jan%202023.csv?dl=0 ',
description:'CBT facilitator post-event survey data',
records:'17 ',
dateRange:'8/12/2021-1/26/2023',
programImage:'/OEF_icon.svg',}
,
{program:'OEF',
datasetName:'OEF - HIV Outreach Event Database July 2021 - Feb 2023 ',
link:'https://www.dropbox.com/s/35wbrz5pabl7zdm/OEF%20-%20HIV%20Outreach%20Event%20Database%20July%202021%20-%20Feb%202023%20.csv?dl=0 ',
description:'OEF HIV Outreach Events data',
records:'243  ',
dateRange:'7/24/2021-2/12/2023',
programImage:'/OEF_icon.svg',}
,
{program:'OEF',
datasetName:'OEF - PAB Meetings Database Oct 2021',
link:'https://www.dropbox.com/s/5b7khsxnqous97r/OEF%20-%20PAB%20Meetings%20Database%20Oct%202021.csv?dl=0 ',
description:'PAB Meetings post-event FBO report',
records:'1 ',
dateRange:'10/21/2021',
programImage:'/OEF_icon.svg',}

,
{program:'OEF',
datasetName:'OEF - Technical Assistance Request and Follow Up Database June 2021 - Jan 2023 ',
link:'https://www.dropbox.com/s/0eqsw3g3spy87n8/OEF%20-%20Technical%20Assistance%20Request%20and%20Follow%20Up%20Database%20June%202021%20-%20Jan%202023%20.csv?dl=0 ',
description:'Technical assistance request follow up records',
records:'629 ',
dateRange:'4/8/21-1/27/23',
programImage:'/OEF_icon.svg',}
,
{
program:'OEF',
datasetName:'OEF - Technical Assistance Request Database July 2022 - Feb 2023',
link:'https://www.dropbox.com/s/s5augbg8eapctpd/OEF%20-%20Technical%20Assistance%20Request%20Database%20July%202022%20-%20Feb%202023.csv?dl=0 ',
description:'OEF Technical assistance requests made through Survey Monkey',
records:'160 ',
dateRange:'7/1/2022-2/8/2023',
programImage:'/OEF_icon.svg',},
,
{program:'OEF',
datasetName:'OEF FBOs Directory 2022/23 Public - FBOs',
link:'https://www.dropbox.com/s/tjp5eai07o9f47v/OEF%20FBOs%20Directory%202022%3A23%20Public%20-%20FBOs.csv?dl=0 ',
description:'OEF Program directory participating FBOs',
records:'31 ',
dateRange:'-',
programImage:'/OEF_icon.svg',},

{program:"OEF",
datasetName: "OEF - YIP Database - YIP Facilitator Workshop Reflections",
description:"Facilitator feedback after delivering a YIP session",
link: "https://www.dropbox.com/s/cg7r39u3f7c2vij/OEF%20-%20YIP%20Database%20-%20YIP%20Facilitator%20Workshop%20Reflections.csv?dl=0" ,
records: "21",
dateRange: "7/27/21 - 11/29/22",
programImage: "OEF_icon.svg"
},

{program:"OEF",
datasetName: "OEF - YIP Database - Workshops for Community Projects",
description:"Participant feedback after community projects workshops",
link: "https://www.dropbox.com/s/1s5e6h9wwhfpw03/OEF%20-%20YIP%20Database%20-%20Workshops%20for%20Community%20Projects.csv?dl=0" ,
records: "35",
dateRange: "1/5/23 - 2/1/23",
programImage: "OEF_icon.svg"
},

{program:"OEF",
datasetName: "OEF - YIP Database - Workshop #4 Jobs, Careers, Opportunities",
description:"Participant feedback after doing workshop 4",
link: "https://www.dropbox.com/s/7dkmeff6e1m8yrg/OEF%20-%20YIP%20Database%20-%20Workshop%20%234%20Jobs%2C%20Careers%2C%20Opportunities.csv?dl=0" ,
records: "41",
dateRange: "8/4/21 - 11/8/22",
programImage: "OEF_icon.svg"
},

{program:"OEF",
datasetName: "OEF - YIP Database - Workshop #3 Contraceptives, STI_HIV",
description:"Participant feedback after doing workshop 3",
link: "https://www.dropbox.com/s/zrsqbu3qw48gcr5/OEF%20-%20YIP%20Database%20-%20Workshop%20%233%20Contraceptives%2C%20STI_HIV.csv?dl=0",
records: "60",
dateRange: "8/11/21 - 1/12/23",
programImage: "OEF_icon.svg"
},


{program:"OEF",
datasetName: "OEF - YIP Database - Workshop #2 Mental Health",
description:"Participant feedback after doing workshop 2",
link: "https://www.dropbox.com/s/19n828ikjkpiy4m/OEF%20-%20YIP%20Database%20-%20Workshop%20%232%20Mental%20Health.csv?dl=0" ,
records: "45",
dateRange: "8/5/21 - 11/29/22",
programImage: "OEF_icon.svg"
},

{program:"OEF",
datasetName: "OEF - YIP Database - Workshop #1 Healthy Relationships",
description:"Participant feedback after doing workshop 1",
link: "https://www.dropbox.com/s/r7914i6tpiexv3u/OEF%20-%20YIP%20Database%20-%20Workshop%20%231%20Healthy%20Relationships.csv?dl=0",
records: "33",
dateRange: "8/5/21 - 11/1/22",
programImage: "OEF_icon.svg"
},

{program:"OEF",
datasetName: "OEF - YIP Database - YIP Pre Survey",
description:"YIP participant survey before starting the workshops",
link: "https://www.dropbox.com/s/1wfyf72ssqrs7qk/OEF%20-%20YIP%20Database%20-%20YIP%20Pre%20Survey.csv?dl=0",
records: "39",
dateRange: "7/20/21 - 11/8/22",
programImage: "OEF_icon.svg"
},


  ];

  const searchFunction = (word) => {
    setSearchWord(word);
  };

  return (
    <Layout showStatusHeader={true}>
      <div id="historicalData">
        <section className="py-5 bg-white">
          <div className="container mx-auto ">
           
            <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Which dataset do you want to download?"}
      />
 
            <div className="search-box grid w-full  grid-cols-1  items-center my-5 justify-end">

              <Search searchFunction={searchFunction} />
            </div>
          </div>
        </section>

        <section className="h-full py-10 ">
          <div className="container mx-auto grid grid-cols-1 gap-10">
            {datasets
              ?.filter((program, index) => {
                if (searchWord === "") {
                  return program;
                } else if (
                  program.program
                    .toLowerCase()
                    .includes(searchWord.toLowerCase())
                ) {
                  return program;
                }
              })
              .map((program, index) => {
                return (
                  <ProgramCard
                    key={index}
                    program={program.program}
                    datasetName={program.datasetName}
                    description={program.description}
                    dateRange={program.dateRange}
                    records={program.records}
                    programImage={program.programImage}
                    link={program.link}
                  />
                );
              })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
