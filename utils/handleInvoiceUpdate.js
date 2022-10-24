const handleInvoiceUpdate = async ({
  invoice,
  updateInvoice,
  updatedInvoiceItems,
  discount,
  tax,
}) => {
  let invoiceItems;

  //Check for Item updates
  if (updatedInvoiceItems) {
    invoiceItems = updatedInvoiceItems;
  } else {
    invoiceItems = invoice.items;
  }

  //Calculate Subtotal
  let subtotal = 0;
  invoiceItems.forEach((item) => {
    subtotal += item.total;
    return;
  }),
    updateInvoice((prevData) => {
      const taxPercentage = tax ? tax : prevData.tax.percentage;
      console.log(taxPercentage);
      const discountPercentage = discount
        ? discount
        : prevData.discount.percentage;
      const totalDiscount = (subtotal * discountPercentage) / 100;
      const taxableAmount = subtotal - totalDiscount;
      const totalTax = (taxableAmount * taxPercentage) / 100;
      const total = taxableAmount + totalTax;
      return {
        ...prevData,
        items: invoiceItems,
        subtotal,
        tax: {
          ...prevData.tax,
          total: totalTax,
          percentage: taxPercentage,
        },
        discount: {
          ...prevData.discount,
          total: totalDiscount,
          percentage: discountPercentage,
        },
        total,
      };
    });
};

export default handleInvoiceUpdate;
