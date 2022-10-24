import handleInvoiceUpdate from "./handleInvoiceUpdate";

const handleRemoveItem = (id, invoice, updateInvoice) => {
  if (invoice.items.length !== 1) {
    const updatedInvoiceItems = invoice.items.filter((item) => item.id !== id);
    handleInvoiceUpdate({ invoice, updateInvoice, updatedInvoiceItems });
  } else {
    alert("Quick Invoice needs at least one Item to create an Invoice!");
  }
};

export default handleRemoveItem;
