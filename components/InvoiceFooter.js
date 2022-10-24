import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";
import { nanoid } from "nanoid";
import handleInvoiceUpdate from "../utils/handleInvoiceUpdate";
import InvoiceCalculations from "./InvoiceCalculations";
import PaymentMethod from "./PaymentMethod";
import TextareaWithTitle from "./TextareaWithTitle";

const InvoiceFooter = () => {
  const id = nanoid();
  const invoice = useInvoice();
  const updateInvoice = useUpdateInvoice();
  const updatedInvoiceItems = [
    ...invoice.items,
    { id, name: "", price: 0, quantity: 0, total: 0 },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-y-[15px] text-[18px] font-medium">
        <h5
          className="w-full text-[18px] sm:w-1/2 font-medium cursor-pointer h-fit"
          onClick={() =>
            handleInvoiceUpdate({ invoice, updateInvoice, updatedInvoiceItems })
          }
        >
          Add Item
        </h5>
        <div className="w-full sm:w-1/2 flex flex-col gap-y-[15px]">
          <InvoiceCalculations />
          {invoice.paymentMethod.display && <PaymentMethod />}
        </div>
      </div>
      {invoice.note.display && <TextareaWithTitle title="Note" name="note" />}
      {invoice.termsAndConditions.display && (
        <TextareaWithTitle
          title="Terms & Conditions"
          name="termsAndConditions"
        />
      )}
    </>
  );
};

export default InvoiceFooter;
