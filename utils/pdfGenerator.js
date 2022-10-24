import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const createPdf = (mode, invoice) => {
  const invoiceItems = [
    [
      {
        text: "Item",
        bold: true,
        fillColor: "#6b6b6b",
        fontSize: "13",
        margin: [5, 5, 0, 5],
        color: "white",
      },
      {
        text: "Qty",
        bold: true,
        fillColor: "#6b6b6b",
        fontSize: "13",
        margin: [0, 5, 0, 5],
        color: "white",
      },
      {
        text: "Price",
        bold: true,
        fillColor: "#6b6b6b",
        fontSize: "13",
        margin: [0, 5, 0, 5],
        color: "white",
      },
      {
        text: "Total",
        bold: true,
        fillColor: "#6b6b6b",
        fontSize: "13",
        margin: [0, 5, 0, 5],
        color: "white",
      },
    ],
  ];

  invoice.items.forEach((item) => {
    invoiceItems.push(invoiceItem(item));
  });

  const finalBilling = [
    [
      { text: "Subtotal", margin: [0, 30, 0, 5], fontSize: "14" },
      {
        text: `${invoice.subtotal} ${invoice.currency}`,
        margin: [0, 30, 0, 5],
        bold: true,
        fontSize: "14",
      },
    ],
  ];
  const paymentMethod = [
    { text: "Payment method", margin: [0, 0, 0, 5], fontSize: "14" },
    {
      text: invoice.paymentMethod.name,
      margin: [0, 0, 0, 5],
      bold: true,
      fontSize: "14",
    },
  ];

  const tax = [
    {
      text: `Tax (${invoice.tax.percentage}%)`,
      margin: [0, 0, 0, 5],
      fontSize: "14",
    },
    {
      text: `${invoice.tax.total} ${invoice.currency}`,
      bold: true,
      margin: [0, 0, 0, 5],
      fontSize: "14",
    },
  ];

  const discount = [
    {
      text: `Discount (${invoice.discount.percentage}%)`,
      margin: [0, 0, 0, 5],
      fontSize: "14",
    },
    {
      text: `${invoice.discount.total} ${invoice.currency}`,
      bold: true,
      margin: [0, 0, 0, 5],
      fontSize: "14",
    },
  ];

  const total = [
    { text: "Total", margin: [0, 0, 0, 5], fontSize: "14" },
    {
      text: `${invoice.total} ${invoice.currency}`,
      margin: [0, 0, 0, 5],
      bold: true,
      fontSize: "14",
    },
  ];

  invoice.discount.display && finalBilling.push(discount);
  invoice.tax.display && finalBilling.push(tax);
  invoice.paymentMethod.display && finalBilling.push(paymentMethod);
  finalBilling.push(total);

  const note = [
    {
      text: "Notes",
      bold: true,
      fontSize: "15",
      color: "#444444",
      margin: [0, 30, 0, 0],
    },
    {
      text: invoice.note.text,
      fontSize: "14",
      color: "#222222",
      margin: [0, 5, 0, 0],
    },
  ];

  const termsAndConditions = [
    {
      text: "Terms & Conditions",
      bold: true,
      fontSize: "15",
      color: "#444444",
      margin: [0, 30, 0, 0],
    },
    {
      text: invoice.termsAndConditions.text,
      fontSize: "14",
      color: "#222222",
      margin: [0, 5, 0, 0],
    },
  ];

  const docDefinition = {
    footer: {
      columns: [
        {
          text: "Powered by Quick Invoice",
          alignment: "right",
          fontSize: "15",
          margin: [0, 0, 30, 0],
        },
      ],
    },
    content: [
      {
        columns: [
          {
            width: "50%",
            text: "",
          },
          {
            width: "50%",
            alignment: "right",
            fontSize: "40",
            text: "INVOICE",
          },
        ],
      },
      {
        columns: [
          {
            width: "50%",
            text: invoice.fromName,
            bold: true,
            fontSize: "17",
            alignment: "left",
          },
          {
            width: "50%",
            text: "",
          },
        ],
      },
      {
        columns: [
          {
            width: "30%",
            margin: [0, 10, 0, 30],
            text: invoice.fromAddress,
            fontSize: "14",
            alignment: "left",
          },
          {
            width: "70%",
            text: "",
          },
        ],
      },
      {
        columns: [
          {
            width: "40%",
            margin: [0, 40, 0, 0],
            text: "Bill to:",
            fontSize: "16",
            bold: true,
            alignment: "left",
          },
          {
            width: "50%",
            text: "",
          },
        ],
      },
      {
        columns: [
          {
            width: "60%",
            margin: [0, 10, 100, 60],
            fontSize: "14",
            alignment: "left",
            layout: "noBorders", // optional
            table: {
              headerRows: 0,
              widths: ["85%"],
              body: [
                [
                  {
                    text: invoice.toName,
                    bold: true,
                  },
                ],
                [
                  {
                    text: invoice.toAddress,
                  },
                ],
              ],
            },
          },
          {
            width: "40%",
            alignment: "right",
            fontSize: "14",

            layout: "noBorders", // optional
            table: {
              headerRows: 0,
              widths: ["*", "auto"],
              body: [
                [
                  { text: "Invoice#", bold: true, margin: [0, 0, 30, 0] },
                  invoice.id,
                ],
                [
                  { text: "Invoice Date", bold: true, margin: [0, 0, 30, 0] },
                  invoice.date,
                ],
                [
                  { text: "Due Date", bold: true, margin: [0, 0, 30, 0] },
                  invoice.dueDate,
                ],
              ],
            },
          },
        ],
      },
      {
        layout: "noBorders", // optional
        table: {
          headerRows: 1,
          widths: [250, "*", "*", "*"],

          body: invoiceItems,
        },
      },
      {
        columns: [
          {
            width: "*",
            text: "",
          },
          {
            width: "*",
            layout: "noBorders",
            table: {
              headerRows: 0,
              widths: ["50%", "50%"],
              body: finalBilling,
            },
          },
        ],
      },
      ...(invoice.note.display ? note : []),
      ...(invoice.termsAndConditions.display ? termsAndConditions : []),
    ],
  };

  let pdf = undefined;

  if (mode === "download") {
    pdf = pdfMake.createPdf(docDefinition).download();
    return pdf;
  } else if (mode === "preview") {
    pdf = pdfMake.createPdf(docDefinition).open();
  } else if (mode === "share") {
    pdf = pdfMake.createPdf(docDefinition);
    pdf.getBase64((data) => {
      let file = new File([data], `Invoice_${invoice.id}.pdf`, {
        type: "application/pdf",
      });
      let filesArray = [file];
      navigator
        .share({
          files: filesArray,
        })
        .then(() => console.log("Share was successful."))
        .catch((error) => console.log("Sharing failed", error));
    });
  }
};

export default createPdf;

const invoiceItem = (item) => {
  return [
    {
      fontSize: "13",
      margin: [5, 5, 0, 5],
      layout: "noBorders", // optional

      table: {
        headerRows: 0,
        widths: ["90%"],
        body: [
          [
            {
              text: item.name,
            },
          ],
        ],
      },
    },
    {
      text: item.quantity,
      fontSize: "13",
      margin: [0, 5, 0, 5],
    },
    {
      text: item.price,
      fontSize: "13",
      margin: [0, 5, 0, 5],
    },
    {
      text: item.total,
      fontSize: "13",
      margin: [0, 5, 0, 5],
    },
  ];
};
