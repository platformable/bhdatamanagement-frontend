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
export const TopSection = () => [
    new Paragraph({
        children: [
            new TextRun({
                text: "Instructions ",
                bold: true,
                shading: {
                  type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                  color: "00FFFF",
                  fill: "00FFFF",
                },
              }),

        ]
    }),
    new Paragraph({
        text: "The monthly report is due to your contract manager 15 calendar days after the month being reported.",
        bullet: {
            level: 0 // How deep you want the bullet to be. Maximum level is 9
        }
    }),
    new Paragraph({
        text: "Keep responses brief and outcome focused.",
        bullet: {
            level: 0
        }, 
        bold: true,
    }),
    new Paragraph({
      text: "The strongest narratives are those that include relevant data points from AIRS data whenever possible. ",
      bullet: {
          level: 0 // How deep you want the bullet to be. Maximum level is 9
      }
  }),
  new Paragraph({
      bullet: {
          level: 0
      },
      children: [
        new TextRun({
            text: "Responses must be aligned with Governor Cuomo’s plan to end the HIV/AIDS Epidemic in New York State",
            underline: true
        }),
        new TextRun({
            text: "(see Ending the Epidemic Priorities section below)",
        })
      ]
  }),
  new Paragraph({
    text: "For agencies with multiple initiatives (contracts), responses to questions within each section must address each initiative.  If you are funded as a Criminal Justice Initiative Provider, you must complete a separate report.",
    bullet: {
        level: 0 // How deep you want the bullet to be. Maximum level is 9
    },
    bold: true
}),
new Paragraph({
    children: [
        new TextRun({
            text: "Ending the Epidemic Priorities.",
            bold: true,
            break: 2,
            shading: {
              type: ShadingType.REVERSE_DIAGONAL_STRIPE,
              color: "00FFFF",
              fill: "00FFFF",
            },
          }),

    ]
}),
new Paragraph({
    children: [
        new TextRun({
            text: "1) Identify Persons with HIV who remain undiagnosed and link them to medical care",
            bold: true,
            break: 2,
          }),
    ]
}),
new Paragraph({
    children: [
        new TextRun({
            text: "2) Link and retain person diagnosed with HIV in healthcare to maximize viral load suppression so they remain healthy and prevent further transmission",
            bold: true,
            break: 2,
          }),
    ]
}),
new Paragraph({
    children: [
        new TextRun({
            text: "3) Provide education/information about PrEP for High Risk person to keep them HIV-negative",
            bold: true,
            break: 2,
          }),
    ]
}),
new Paragraph({
    children: [
        new TextRun({
            text: "4) Implement Interventions that decrease new infections and disease progression",
            bold: true,
            break: 2,
          }),
    ]
}),
new Paragraph({
    children: [
        new TextRun({
            text: "5) Promote “Undetectable = Untransmittable” messagin",
            bold: true,
            break: 2,
          }),
    ]
}),
]