import { useEffect, useState } from "react";
import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";
import handleInvoiceUpdate from "../utils/handleInvoiceUpdate";
import SvgWrapper from "./SvgWrapper";

const InvoiceItem = ({ id, onRemove }) => {
  const invoice = useInvoice();
  const updateInvoice = useUpdateInvoice();
  const [invoiceItem, setInvoiceItem] = useState({
    id,
    name: "",
    quantity: 1,
    price: 0,
    total: 0,
  });

  useEffect(() => {
    const updatedInvoiceItems = invoice.items.map((item) => {
      if (item.id === id) {
        return invoiceItem;
      }
      return item;
    });
    handleInvoiceUpdate({ invoice, updateInvoice, updatedInvoiceItems });
  }, [invoiceItem]);

  return (
    <div className="relative border-2 border-[#e8ebf2] rounded-md p-2 grid grid-cols-5 gap-3 my-3">
      <input
        className="w-full col-span-2"
        type="text"
        id={`item${id}Name`}
        name={`item${id}Name`}
        placeholder="Item Name"
        required
        onChange={(e) =>
          setInvoiceItem((prevData) => ({
            ...prevData,
            name: e.target.value,
          }))
        }
        value={invoiceItem.name}
      />
      <input
        className="w-full"
        type="number"
        name={`item${id}Quantity`}
        placeholder="Qty"
        required
        onChange={(e) =>
          setInvoiceItem((prevData) => ({
            ...prevData,
            quantity: e.target.value,
            total: e.target.value * prevData.price,
          }))
        }
        value={invoiceItem.quantity}
      />
      <input
        className="w-full"
        type="number"
        name={`item${id}Price`}
        placeholder="Price"
        required
        onChange={(e) =>
          setInvoiceItem((prevData) => ({
            ...prevData,
            price: e.target.value,
            total: e.target.value * prevData.quantity,
          }))
        }
        value={invoiceItem.price}
      />
      <input
        className="w-full"
        type="number"
        name={`item${id}Total`}
        placeholder="Total"
        required
        disabled
        value={invoiceItem.total}
      />
      <SvgWrapper
        onClick={onRemove}
        className="absolute top-0 right-0 cursor-pointer transition-colors duration-500 hover:fill-red-500"
      >
        <path
          d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z"
          fillRule="nonzero"
        />
      </SvgWrapper>
    </div>
  );
};

export default InvoiceItem;
