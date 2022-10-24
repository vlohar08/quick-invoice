import { useInvoice } from "../context/InvoiceContext";
import pdfGenerator from "../utils/pdfGenerator";
import CurrencySelector from "./CurrencySelector";
import DefaultButton from "./DefaultButton";
import InvoiceOptions from "./InvoiceOptions";
import SendInvoiceBtn from "./SendInvoiceBtn";

const Sidebar = () => {
  const invoice = useInvoice();
  return (
    <aside className="w-full bg-white p-5 rounded-lg flex flex-col xl:w-1/5">
      <SendInvoiceBtn />
      <div className="flex justify-between my-3 flex-wrap gap-3">
        <DefaultButton
          title={"Preview"}
          onClick={() => pdfGenerator("preview", invoice)}
        />
        <DefaultButton
          title={"Download"}
          onClick={() => pdfGenerator("download", invoice)}
        />
      </div>
      <CurrencySelector />
      <InvoiceOptions />
    </aside>
  );
};

export default Sidebar;
