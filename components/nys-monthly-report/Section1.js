import {
    Document,
    Header,
    Paragraph,
    TextRun,
    Packer,
    AlignmentType,
    FrameAnchorType,
    HorizontalPositionAlign,
    VerticalPositionAlign,
    convertInchesToTwip,
    ShadingType,
    ImageRun,
    Table,
    TableCell,
    TableRow,
    BorderStyle,
    VerticalAlign,
    WidthType,
  } from "docx";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Page5 } from "./Page5";
import { SocialMediaTable } from "./SocialMediaTable";
import { ResourcesDistributedTable } from "./ResourcesDistributedTable";


export const Section1 = (imagesRefs,eventsData, resourcesCounts) => [
    new Paragraph({
        children: [
          new TextRun({
            text: "I. Priorities and Program Accomplishments/Highlights ",
            bold: true,
            shading: {
              type: ShadingType.REVERSE_DIAGONAL_STRIPE,
              color: "00FFFF",
              fill: "00FFFF",
            },
          }),
          new TextRun({
            text: "Provide a brief narrative description for each question below (All questions must be answered).",
            underline: true,
            break: 2,
          }),
          new TextRun({
            text: "Describe activities undertaken this month to conduct target recruitment of priority populations. Be sure to indicate any adjustments or innovations made to strategies designed to improve targeting. (Priorities 1,2,3)",
            bold: true,
            break: 2,
            alignment: AlignmentType.CENTER,
          }),
        ],
      }),
      new Table({
        rows: [
          new TableRow({
            // cantSplit: true,

            children: [
              new TableCell({
                width: {
                  size: 20,
                  type: WidthType.PERCENTAGE,
                },
                children: [],
              }),
              new TableCell({
                // columnSpan: 2,
                border: {
                  top: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  bottom: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  left: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  right: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                },
                children: [
                  //new paragraph
                  Page2(
                    new ImageRun({
                      data: imagesRefs.typeOfEvent,
                      transformation: {
                        width: 400,
                        height: 350,
                      },
                      break: 2,
                    })
                  ),
                  Page3(
                    new ImageRun({
                      data: imagesRefs.eventLocation,
                      transformation: {
                        width: 400,
                        height: 350,
                      },
                    }),
                    eventsData?.map(
                      (event) =>
                        new TextRun({
                          text: `${new Date(event?.eventdate).toLocaleDateString()}: ${event?.eventdescription}`,
                          bold: true,
                          break: 2,
                        }),
                      
                    )
                  ),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "Let’s Talk about Mental Health: A Series",
                        break: 1,
                        bold: true,
                      }),
                      new TextRun({
                        text: "This is a series of online events on mental health. The Community Mental Health Project is a community-informed collaboration between The New York Public Library. Columbia University Department of Psychiatry, and Black Health to raise community awareness around mental health and highlight resources with a specific focus on Black and Latinx/a/o New Yorkers. Community Mental Health Project creates opportunities for people to learn and gain mental health resources through animated videos, books, and programs, in English and Spanish. The 10 short animations give voice to topics surfaced by teens, adults, and seniors in community roundtables. There was one event held in May ",
                        break: 2,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 20,
                  type: WidthType.PERCENTAGE,
                },
                children: [],
              }),
              new TableCell({
                // columnSpan: 2,
                border: {
                  top: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  bottom: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  left: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  right: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "Social Media",
                        break: 1,
                        bold: true,
                      }),
                      new TextRun({
                        text: "BLACK HEALTH’s social marketing campaign responds to AI and ETE goals:",
                        break: 1,
                      }),
                      new TextRun({
                        text: "(1) HIV/STI/Hep C Testing events (Know Your Status)",
                        break: 2,
                      }),
                      new TextRun({
                        text: "(2) Treatment as Prevention for HIV/STI/Hep C positive individuals",
                        break: 1,
                      }),
                      new TextRun({
                        text: "(3) PrEP & PEP",
                        break: 1,
                      }),
                      new TextRun({
                        text: "BLACK HEALTH also has access to various print and radio in English and Spanish markets which provides are larger reach for much of our messaging.",
                        break: 2,
                      }),
                      new TextRun({
                        text: "Table 2. Sums of Social Media Measures. Note: all numbers represent sums, other than the average engagement rate which is an average.",
                        break: 2,
                      }),
                    ],
                  }),
                  SocialMediaTable(),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "Social Marketing",
                        bold: true,
                        break: 1,
                      }),
                      new TextRun({
                        text: "Throughout this contract year, BLACK HEALTH will provide condom education and safer sex kits to gatekeepers. In turn, gatekeepers distribute safer sex kits to their networks to encourage safer sex behavior and dispel myths about condoms.",
                        break: 1,
                      }),
                    ],
                  }),
                  Page4(
                    new ImageRun({
                      data: imagesRefs.resourcesDistributed,
                      transformation: {
                        width: 400,
                        height: 350,
                      },
                    })
                  ),
                  ResourcesDistributedTable(resourcesCounts),
                ],
              }),
            ],
          }),
        ],
        margins: {
          top: convertInchesToTwip(0.10),
          bottom: convertInchesToTwip(0.10),
          right: convertInchesToTwip(0.10),
          left: convertInchesToTwip(0.10),
      },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "b) Indicate, if applicable, the number of previously undiagnosed individuals identified and/or the number of out-of-care individuals who were identified and linked to medical care (i.e. through CTR, HNS/LNS). ",
            bold: true,
            break: 2,
          }),
          new TextRun({
            text: "If not applicable, please describe what new strategies will be used to identify undiagnosed/out of care individuals in the next reporting period (Priorities 1,2,4, 5)",
            break: 2,
          }),
        ],
      }),
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 20,
                  type: WidthType.PERCENTAGE,
                },
                children: [new Paragraph("Community Mobilization Events")],
              }),
              new TableCell({
                border: {
                  top: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  bottom: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  left: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  right: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "There were 5 COVID-19 testing events, 4 HIV testing events,  and 1 COVID testing event held in June.",
                        break: 1,
                      }),
                      new TextRun({
                        text: "There was also 4 HIV testing event in June. 22 people were tested, 9 women and 13 men. (note this discrepancy could be the 6 reported non-binary people tested - or they were double counted?)",
                        break: 2,
                      }),
                      new TextRun({
                        text: "12 were Black or African American, 5 Hispanic/Latino/a, 1 American Indian or Alaska Native, and 4 white.",
                        break: 2,
                      }),
                      new TextRun({
                        text: "All were between 20 and 54 years old.",
                        break: 2,
                      }),
                      new TextRun({
                        text: "2 identified as gay or lesbian, 2 as bisexual and 18 identified as straight.",
                        break: 2,
                      }),
                    ],
                  }),
                  Page5(
                    [new ImageRun({
                      data: imagesRefs.participantGender,
                      transformation: {
                        width: 400,
                        height: 350,
                      },
                    }),
                    new ImageRun({
                      data: imagesRefs.participantAge,
                      transformation: {
                        width: 400,
                        height: 350,
                      },
                    }),
                    new ImageRun({
                      data: imagesRefs.participantRace,
                      transformation: {
                        width: 400,
                        height: 350,
                      },
                    }),
                    new ImageRun({
                      data: imagesRefs.participantSexualOrientation,
                      transformation: {
                        width: 400,
                        height: 350,
                      },
                    })]
                  ),
                ],
              }),
            ],
          }),
        ],
        margins: {
          top: convertInchesToTwip(0.10),
          bottom: convertInchesToTwip(0.10),
          right: convertInchesToTwip(0.10),
          left: convertInchesToTwip(0.10),
      },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "c) Describe successes facilitating access to PrEP for high-risk negatives (i.e. through CTR, HNS, PrEP Services, referrals) (Priorities 3,4)",
            bold: true,
            break: 2
          }),
          
        ],
      }),
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 20,
                  type: WidthType.PERCENTAGE,
                },
                children: [new Paragraph("CMP")],
              }),
              new TableCell({
                border: {
                  top: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  bottom: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  left: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  right: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                },
                children: [new Paragraph("N/A")],
              }),
            ],
          })
        ],
        margins: {
          top: convertInchesToTwip(0.10),
          bottom: convertInchesToTwip(0.10),
          right: convertInchesToTwip(0.10),
          left: convertInchesToTwip(0.10),
      },
      }),

      new Paragraph({
        children: [
          new TextRun({
            text: "d) Describe efforts and successes to improve and maintain treatment adherence among individuals living with diagnosed HIV (i.e. HNS/LNS, ARTAS, viral suppression) (Priorities 2,4,5).",
            bold: true,
            break: 2
          }),
          
        ],
      }),
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 20,
                  type: WidthType.PERCENTAGE,
                },
                children: [new Paragraph("Community Mobilization")],
              }),
              new TableCell({
                border: {
                  top: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  bottom: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  left: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  right: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                },
                children: [new Paragraph("N/A")],
              }),
            ],
          })
        ],
        margins: {
          top: convertInchesToTwip(0.10),
          bottom: convertInchesToTwip(0.10),
          right: convertInchesToTwip(0.10),
          left: convertInchesToTwip(0.10),
      },
      }),

      new Paragraph({
        children: [
          new TextRun({
            text: "e) Describe Behavioral Interventions (EBI, Locally Developed) designed to decrease new infections/disease progression carried out during the reporting period and highlight any significant successes (including intervention name and counts) (Priorities 4,5).",
            bold: true,
            break: 2
          }),
          
        ],
      }),
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 20,
                  type: WidthType.PERCENTAGE,
                },
                children: [new Paragraph("Enter Initiative Name")],
              }),
              new TableCell({
                border: {
                  top: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  bottom: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  left: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                  right: {
                    color: "000000",
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 6,
                  },
                },
                children: [new Paragraph("N/A")],
              }),
            ],
          })
        ],
        margins: {
          top: convertInchesToTwip(0.10),
          bottom: convertInchesToTwip(0.10),
          right: convertInchesToTwip(0.10),
          left: convertInchesToTwip(0.10),
      },
      }),
]