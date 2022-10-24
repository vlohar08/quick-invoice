import { useState } from "react";
import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";
import handleInvoiceUpdate from "../utils/handleInvoiceUpdate";
import Toggle from "./Toggle";

const InvoiceOptions = () => {
  const invoice = useInvoice();
  const updateInvoice = useUpdateInvoice();
  const [displayTax, setDisplayTax] = useState(false);

  return (
    <>
      <h4 className="text-[18px] font-medium my-2">Options</h4>
      <Toggle title="Tax" name="tax" />
      <Toggle title="Discount" name="discount" />
      <Toggle title="Payment Method" name="paymentMethod" />
      <Toggle title="Note" name="note" />
      <Toggle title="Terms & Conditions" name="termsAndConditions" />
      <p>Note: Set Tax and Discount to 0 before disabling them.</p>
    </>
  );
};

export default InvoiceOptions;
