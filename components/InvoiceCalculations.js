import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";
import handleInvoiceUpdate from "../utils/handleInvoiceUpdate";

const InvoiceCalculations = () => {
  const invoice = useInvoice();
  const updateInvoice = useUpdateInvoice();

  return (
    <>
      <div className="flex justify-between items-center ">
        <h4>Subtotal</h4>
        <p>
          {invoice.subtotal} <span>{invoice.currency}</span>
        </p>
      </div>
      {invoice.discount.display && (
        <div className="flex gap-x-[15px] justify-between items-center ">
          <h4>
            Discount (
            <input
              className="border-0 focus:border-0 p-0 w-8 text-center"
              type="number"
              placeholder="%"
              name="tax"
              min={0}
              max={100}
              onChange={(e) => {
                handleInvoiceUpdate({
                  invoice,
                  updateInvoice,
                  discount: e.target.value,
                });
              }}
              value={invoice.discount.percentage}
            />
            % )
          </h4>
          <p>
            {invoice.discount.total} <span>{invoice.currency}</span>
          </p>
        </div>
      )}
      {invoice.tax.display && (
        <div className="flex justify-between items-center">
          <h4>
            Tax (
            <input
              className="border-0 focus:border-0 p-0 w-8 text-center"
              type="number"
              placeholder="%"
              name="tax"
              min={0}
              max={100}
              onChange={(e) => {
                handleInvoiceUpdate({
                  invoice,
                  updateInvoice,
                  tax: e.target.value,
                });
              }}
              value={invoice.tax.percentage}
            />
            % )
          </h4>
          <p>
            {invoice.tax.total} <span>{invoice.currency}</span>
          </p>
        </div>
      )}
      <div className="flex justify-between items-center">
        <h4>Total</h4>
        <p>
          {invoice.total} <span>{invoice.currency}</span>
        </p>
      </div>
    </>
  );
};

export default InvoiceCalculations;
