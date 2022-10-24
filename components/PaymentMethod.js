import React from "react";
import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";

const PaymentMethod = () => {
  const paymentMethod = useInvoice().paymentMethod.name;
  const updateInvoice = useUpdateInvoice();
  return (
    <div className="flex gap-x-[15px] justify-between items-center">
      <h4>Payment Method</h4>
      <select
        className="w-1/2"
        name="paymentMethod"
        onChange={(e) =>
          updateInvoice((prevData) => ({
            ...prevData,
            paymentMethod: { ...prevData.paymentMethod, name: e.target.value },
          }))
        }
        value={paymentMethod}
      >
        <option value="Online Payment">Online Payment</option>
        <option value="Cash On Delivery">Cash On Delivery</option>
      </select>
    </div>
  );
};

export default PaymentMethod;
