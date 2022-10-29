import { useInvoice } from "../context/InvoiceContext";
import pdfGenerator from "../utils/pdfGenerator";
import CurrencySelector from "./CurrencySelector";
import DefaultButton from "./DefaultButton";
import InvoiceOptions from "./InvoiceOptions";
import SendInvoiceBtn from "./SendInvoiceBtn";

const Sidebar = () => {
  const invoice = useInvoice();
  return (
    <aside className="w-full flex flex-col">
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
