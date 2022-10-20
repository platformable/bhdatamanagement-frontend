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
  
  export const Page5 = ([...args]) =>
    new Paragraph({
     
      children: [...args],
    });