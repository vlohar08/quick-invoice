import React from "react";

const InvoiceItemLabels = () => {
  return (
    <div className="grid grid-cols-5 gap-3 font-medium text-[18px] my-2">
      <p className="col-span-2">Name</p>
      <p>Qty</p>
      <p>Price</p>
      <p>Total</p>
    </div>
  );
};

export default InvoiceItemLabels;
