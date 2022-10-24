import { useUpdateInvoice } from "../context/InvoiceContext";

const NameAndAddress = ({ title, inputName, textareaName }) => {
  const updateInvoice = useUpdateInvoice();
  return (
    <div className="flex flex-col gap-y-[15px] w-full">
      <h4 className="font-medium text-[18px]">{title}</h4>
      <input
        type="text"
        name={inputName}
        placeholder="Name"
        required
        onChange={(e) =>
          updateInvoice((prevData) => ({
            ...prevData,
            [`${inputName}`]: e.target.value,
          }))
        }
      />
      <textarea
        name={textareaName}
        cols="30"
        rows="5"
        placeholder="Address"
        required
        onChange={(e) =>
          updateInvoice((prevData) => ({
            ...prevData,
            [`${textareaName}`]: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default NameAndAddress;
