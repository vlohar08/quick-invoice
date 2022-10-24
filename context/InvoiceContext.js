import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

const InvoiceUpdateContext = createContext();

export const useInvoice = () => {
  return useContext(InvoiceContext);
};

export const useUpdateInvoice = () => {
  return useContext(InvoiceUpdateContext);
};

export const InvoiceProvider = ({ children }) => {
  const [invoice, setInvoice] = useState({
    date: "",
    dueDate: "",
    id: "",
    fromName: "",
    fromAddress: "",
    toName: "",
    toAddress: "",
    note: { display: false, text: "It was great doing business with you." },
    termsAndConditions: {
      display: false,
      text: "Please make the payment by the due date.",
    },
    items: [
      {
        id: "O1xiYRr4ScBgk9JRK6C-F",
        name: "",
        quantity: 1,
        price: 0,
        total: 0,
      },
    ],
    subtotal: 0,
    tax: { display: false, percentage: 0, total: 0 },
    discount: { display: false, percentage: 0, total: 0 },
    total: 0,
    paymentMethod: { display: false, name: "Online Payment" },
    currency: "INR",
  });

  return (
    <InvoiceContext.Provider value={invoice}>
      <InvoiceUpdateContext.Provider value={setInvoice}>
        {children}
      </InvoiceUpdateContext.Provider>
    </InvoiceContext.Provider>
  );
};
