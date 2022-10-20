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
  export const Section3 = () => [
    new Paragraph({
        children: [
          new TextRun({
            text: "III. Continuous Quality Improvement  ",
            bold: true,
            break: 3, 
            shading: {
              type: ShadingType.REVERSE_DIAGONAL_STRIPE,
              color: "00FFFF",
              fill: "00FFFF",
            },
          }),
          new TextRun({
            text: "Provide a brief narrative description for each question below.",
            underline: true,
            break: 2,
          }),
         
        ],
      }),


      new Paragraph({
        children: [
          new TextRun({
            text: "a) What Continuous Quality Improvement (CQI) activities did you use during this reporting period to measure and report the effectiveness of funded interventions/services to ensure that progress is being made toward achieving contract expectations and that staff have the resources needed to effectively implement the program.",
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
            text: "b) How is your program using findings from CQI activities noted above to guide programming and make program changes? How are changes documented and communicated to program staff (i.e. updates to policies and procedures, staff meetings)? ",
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