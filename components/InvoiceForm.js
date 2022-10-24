import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";
import handleRemoveItem from "../utils/handleRemoveItem";
import DatePicker from "./DatePicker";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceId from "./InvoiceId";
import InvoiceItem from "./InvoiceItem";
import InvoiceItemLabels from "./InvoiceItemLabels";
import NameAndAddress from "./NameAndAddress";

const InvoiceForm = () => {
  const invoice = useInvoice();
  const updateInvoice = useUpdateInvoice();
  return (
    <form>
      <div className="flex flex-wrap justify-between">
        <DatePicker title="Date:" name="date" />
        <DatePicker title="Due Date:" name="dueDate" />
      </div>
      <InvoiceId />
      <div className="flex flex-col gap-y-[15px] md:flex-row md:gap-x-[15px]">
        <NameAndAddress
          title="Bill From"
          inputName="fromName"
          textareaName="fromAddress"
        />
        <NameAndAddress
          title="Bill From"
          inputName="toName"
          textareaName="toAddress"
        />
      </div>
      <InvoiceItemLabels />
      {invoice.items.map(({ id }) => (
        <InvoiceItem
          onRemove={() => handleRemoveItem(id, invoice, updateInvoice)}
          key={id}
          id={id}
        />
      ))}
      <InvoiceFooter />
    </form>
  );
};

export default InvoiceForm;
