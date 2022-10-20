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
  export const Section4 = () => [
    new Paragraph({
      children: [
        new TextRun({
          text: "IV. Fiscal ",
          bold: true,
          break: 3, 
          shading: {
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: "00FFFF",
            fill: "00FFFF",
          },
        }),

      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "a) What activities did you implement this reporting period to ensure the contract(s) is on track with spending (i.e. review of internal reports, discuss budget/spending with program staff, discuss need for budget modification with contract manager? ",
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
              children: [new Paragraph("Enter brief and outcomes-oriented narrative")],
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
              children: [new Paragraph("Enter brief and outcomes-oriented narrative")],
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
          text: "b) Do you currently have any staff vacancies? If yes, list positions, hiring efforts, and indicate impact to program implementation.",
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
              children: [new Paragraph("CMP")],
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
              children: [new Paragraph("Enter brief and outcomes-oriented narrative")],
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
  ]