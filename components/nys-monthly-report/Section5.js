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
export const Section5 = () => [
    new Paragraph({
        children: [
          new TextRun({
            text: "V. Corrective Action Updates",
            bold: true,
            break: 3, 
            shading: {
              type: ShadingType.REVERSE_DIAGONAL_STRIPE,
              color: "00FFFF",
              fill: "00FFFF",
            },
          }),
        new TextRun({
          text: "Provide a brief narrative description for the question below, if applicable.",
          underline: true,
          break:2,
        })
        ],
      }),
      
      
      new Paragraph({
        children: [
          new TextRun({
            text: "a) Describe strategic actions taken during this reporting period to correct programmatic, fiscal and data-related deficiencies as identified by your contract manager/fiscal reviewer (i.e. monitoring report, data calls)",
            bold: true,
            break: 3, 
            
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
                children: [new Paragraph("Enter Initiative Name")],
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
      })
]