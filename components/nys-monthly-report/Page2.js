import {
  Document,
  Header,
  Paragraph,
  TextRun,
  Packer,
  AlignmentType,
  ShadingType,
  BorderStyle,
  FrameAnchorType,
  HorizontalPositionAlign,
  VerticalPositionAlign,
} from "docx";

export const Page2 = (image) =>
  new Paragraph({
    children: [
      new TextRun({
        text: "Community Mobilization (13 events)",
        bold: true,
        break: 2,
      }),
      image,
    ],
  });
