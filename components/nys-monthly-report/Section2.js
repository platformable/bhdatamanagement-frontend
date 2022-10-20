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
  export const Section2 = () => [
    new Paragraph({
        children: [
          new TextRun({
            text: "II. Challenges/Issues ",
            bold: true,
            break: 3,
            shading: {
              type: ShadingType.REVERSE_DIAGONAL_STRIPE,
              color: "00FFFF",
              fill: "00FFFF",
            },
          }),
          new TextRun({
            text: "Provide a brief narrative description for each question below, if applicable.",
            underline: true,
            break: 2,
          }),
          new TextRun({
            text: "a) Describe activities undertaken this month to conduct target recruitment of priority populations. Be sure to indicate any adjustments or innovations made to strategies designed to improve targeting. (Priorities 1,2,3)",
            bold: true,
            break: 3,
            alignment: AlignmentType.CENTER,
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
                children: [new Paragraph("")],
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
                children: [new Paragraph("No chanllenges reported")],
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
            text: "b) Describe any challenges/issues that impacted the targeted recruitment of priority populations.",
            bold: true,
            break: 3
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
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "",
                        break: 2,
                      }),
                      new TextRun({
                        text: "",
                        break:2,
                      }),
                      new TextRun({
                        text: "6 delivery challenges were reported and are listed below. ",
                        break:2,
                      }),
                    ]
                  }),
                  new Paragraph({
                    text: "Due to weather conditions, this outreach event took place indoors. However, patrons were tested for HIV at the testing mobile parked at the library's parting lot, they had to wait for the rain to stop",
                    bullet: {
                        level: 0 // How deep you want the bullet to be. Maximum level is 9
                    }
                }),
                new Paragraph({
                    text: "There were no challenges at the event, however, due to hot weather and school graduations, the attendance was lower than expected.",
                    bullet: {
                        level: 0
                    }
                }),
                new Paragraph({
                  text: "Challenge was getting community members to come inside for vaccination during Juneteenth activities was outside, overcame by making stage announcements repeatedly especially at the end of event.",
                  bullet: {
                      level: 0 // How deep you want the bullet to be. Maximum level is 9
                  }
              }),
              new Paragraph({
                  text: "Challenge was getting community members to get HIV test or COVID Vaccination while they waited in line, overcame was reminding community members after receiving food and before they got in line.",
                  bullet: {
                      level: 0
                  }
              }),
              new Paragraph({
                text: "Challenge was completing training within the 6hrs allowing time for engagement and questions. any question not answered could be addressed after training.",
                bullet: {
                    level: 0 // How deep you want the bullet to be. Maximum level is 9
                }
            }),
            new Paragraph({
                text: "Challenges were community members getting a Booster shot wanting $25 gift card, Community members were told while waiting in line for lunch the stipulation for gift cards.",
                bullet: {
                    level: 0
                }
            })

                ],
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
            text: "c) If program/agency is not meeting projections, describe any challenges/issues with delivery of services (i.e. administrative, fiscal, training needs, staffing changes).",
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
          }),
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 20,
                  type: WidthType.PERCENTAGE,
                },
                children: [new Paragraph("")],
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
            text: "d) Were there any challenges/issues regarding data entry/reporting at your agency this month?",
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
          }),
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
                children: [new Paragraph("Enter brief and outcomes-oriented narrative")],
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
            text: "e) Have any of your interventions/services fallen below 90% of year to date projections? If so, please indicate. ",
            bold: true,
            break: 3
          }),
          
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "f) Describe the specific steps taken or that will be taken to resolve each challenges/issue reported in questions a to e. ",
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
                children: [new Paragraph("Enter brief and outcomes-oriented narrative")],
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