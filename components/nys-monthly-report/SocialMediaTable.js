import {
    Document,
    Header,
    Paragraph,
    convertInchesToTwip,
    TextRun,
    Packer,
    AlignmentType,
    FrameAnchorType,
    HorizontalPositionAlign,
    VerticalPositionAlign,
    ShadingType,
    percentageValue,
    ImageRun,
    Table,
    TableCell,
    TableRow,
    BorderStyle,
    VerticalAlign,
    WidthType,
    TextDirection,
    HeadingLevel
  } from "docx";
  
const newRow = (head1, head2, head3, head4, color) => {
    const colors = {
        blue: "39a2bf",
        middleBlue: "bad2e8",
        lightBlue: "e6eff7",
    }
    return new TableRow({
    children: [
        new TableCell({
            children: [new Paragraph({text: head1, bold: true})],
            shading: {
                fill: colors[color],
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: colors[color],
            },
            verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
            children: [new Paragraph({text: head2, bold: true})],
            shading: {
                fill: colors[color],
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: colors[color],
            },
            verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
            children: [new Paragraph({text: head3, bold: true})],
            shading: {
                fill: colors[color],
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: colors[color],
            },
            verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
            children: [new Paragraph({text: head4, bold: true})],
            shading: {
                fill: colors[color],
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: colors[color],
            },
            verticalAlign: VerticalAlign.CENTER,
        }), 
    ],
})}
export const SocialMediaTable = () => new Table({
    
    rows: [
        newRow("", "Facebook", "Twitter", "Instagram", "blue"),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Reach of Posts",
                            bold: true
                        }),
                    ],
                    columnSpan: 4,
                    shading: {
                        fill: "77c4d9",
                        type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                        color: "77c4d9",
                    },
                }),
             
            ],
        }),
        newRow("Reach", "", "", "", "lightBlue"),
        newRow("Impresions", "", "", "", "middleBlue"),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "",
                            bold: true
                        }),
                    ],
                    columnSpan: 4,
                    shading: {
                        fill: "77c4d9",
                        type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                        color: "77c4d9",
                    },
                }),
             
            ],
        }),
        newRow("Total engagement", "", "", "", "middleBlue"),
        newRow("Likes", "", "", "", "lightBlue"),
        newRow("Retweet/Shares", "", "", "", "middleBlue"),
        newRow("Replies/Comments", "", "", "", "lightBlue"),
    ],
    width: {
        size: 100,
        type: WidthType.PERCENTAGE,
    },
    margins: {
        top: convertInchesToTwip(0.10),
        bottom: convertInchesToTwip(0.10),
        right: convertInchesToTwip(0),
        left: convertInchesToTwip(0.05),
    },
    // columnWidths: [percentageValue("25%"), percentageValue("25%"), percentageValue("25%"), percentageValue("25%")],
})