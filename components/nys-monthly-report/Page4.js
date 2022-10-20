import {
    Document,
    Header,
    Paragraph,
    TextRun,
    Packer,
    AlignmentType,
    ShadingType,
    FrameAnchorType,
    HorizontalPositionAlign,
    VerticalPositionAlign,
    BorderStyle,
  } from "docx";
  
export const Page4 = (image ) => new Paragraph({
    children: [image ],
    break: 2,
  });
