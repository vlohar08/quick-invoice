import { useInvoice, useUpdateInvoice } from "../context/InvoiceContext";
import currencies from "../data/currencies.json";

const CurrencySelector = () => {
  const currency = useInvoice().currency;
  const setCurrency = useUpdateInvoice();
  return (
    <>
      <h4 className="text-[18px] font-medium my-2">Currency</h4>
      <select
        className="w-full mb-6"
        name="currency"
        onChange={(e) =>
          setCurrency((prevData) => ({ ...prevData, currency: e.target.value }))
        }
        value={currency}
      >
        {currencies.map(({ cc, name, symbol }) => (
          <option key={cc} value={cc}>
            {name} ({symbol})
          </option>
        ))}
      </select>
    </>
  );
};

export default CurrencySelector;
