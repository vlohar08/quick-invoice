import { useUpdateInvoice } from "../context/InvoiceContext";

const DatePicker = ({ title, name }) => {
  const updateInvoice = useUpdateInvoice();
  return (
    <div className="flex gap-x-[15px] items-center flex-wrap">
      <h4 className="font-medium">{title}</h4>
      <input
        className="p-0 bg-transparent border-0 focus:border-0"
        type="date"
        name={name}
        required
        onChange={(e) =>
          updateInvoice((prevData) => ({
            ...prevData,
            [`${name}`]: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default DatePicker;
