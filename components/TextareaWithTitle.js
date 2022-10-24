import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";

const TextareaWithTitle = ({ title, name }) => {
  const invoice = useInvoice();
  const updateInvoice = useUpdateInvoice();
  return (
    <div className="mt-3">
      <h4 className="font-medium text-[18px]">{title}</h4>
      <textarea
        className="w-full resize-y"
        name={name}
        rows="2"
        placeholder={`Write your ${title} here!`}
        onChange={(e) =>
          updateInvoice((prevData) => ({
            ...prevData,
            [`${name}`]: { ...prevData[`${name}`], text: e.target.value },
          }))
        }
        value={invoice[`${name}`].text}
      />
    </div>
  );
};

export default TextareaWithTitle;
