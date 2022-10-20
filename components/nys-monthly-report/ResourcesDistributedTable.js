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
 
  const colors = {
    blue: "39a2bf",
    middleBlue: "bad2e8",
    lightBlue: "e6eff7",
}
  const newRow = (head1, head2, number) => new TableRow({
    children: [
        new TableCell({
            children: [new Paragraph({text: head1})],
            verticalAlign: VerticalAlign.CENTER,
            shading: {
                fill: number % 2 === 0 ? colors["lightBlue"] : colors["middleBlue"],
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: number % 2 === 0 ? colors["lightBlue"] : colors["middleBlue"],
            },
        }),
        new TableCell({
            children: [new Paragraph({text: head2})],
            verticalAlign: VerticalAlign.CENTER,
            shading: {
                fill: number % 2 === 0 ? colors["lightBlue"] : colors["middleBlue"],
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: number % 2 === 0 ? colors["lightBlue"] : colors["middleBlue"],
            },
        }),
       
    ],
})
  export const ResourcesDistributedTable = (resourcesCounts) => new Table({
    
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph({text: "Promotion items"})],
                    verticalAlign: VerticalAlign.CENTER,
                    shading: {
                        fill: colors["blue"],
                        type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                        color: colors["blue"],
                    },
                }),
                new TableCell({
                    children: [new Paragraph({text: "Quantity"})],
                    verticalAlign: VerticalAlign.CENTER,
                    shading: {
                        fill: colors["blue"],
                        type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                        color: colors["blue"],
                    },
                }),
               
            ],
        }),
        newRow("Safer sex kits",String(resourcesCounts[0]), 1),
        newRow("HIV literature",String(resourcesCounts[1]), 2),
        newRow("HepC literature",String(resourcesCounts[2]), 3),
        newRow("PrEP literature",String(resourcesCounts[3]), 4),
        newRow("Health disparities literature",String(resourcesCounts[4]), 5),
        newRow("Masks",String(resourcesCounts[5]), 6),
        newRow("COVID literature",String(resourcesCounts[6]), 7),
        newRow("Vaccine related literature",String(resourcesCounts[7]), 8),
        newRow("Hand sanitizers",String(resourcesCounts[8]), 9),
        newRow("Male condoms",String(resourcesCounts[9]), 10),
        newRow("Female condoms",String(resourcesCounts[10]), 11),
        newRow("Lubricant",String(resourcesCounts[11]), 12),
        newRow("Referral lists",String(resourcesCounts[12]), 13),
        newRow("Dental dams",String(resourcesCounts[13]), 14),
        newRow("Promotional materials",String(resourcesCounts[14]), 15),
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