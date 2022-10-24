import { useUpdateInvoice } from "../context/InvoiceContext";

const InvoiceId = () => {
  const updateInvoice = useUpdateInvoice();
  return (
    <div className="flex flex-wrap gap-[15px] items-center justify-center my-5">
      <h2 className="text-[34px] font-medium">Invoice #</h2>
      <input
        type="text"
        name="invoiceId"
        placeholder="Invoice Id"
        required
        onChange={(e) =>
          updateInvoice((prevData) => ({
            ...prevData,
            id: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default InvoiceId;
