import SvgWrapper from "./SvgWrapper";
import pdfGenerator from "../utils/pdfGenerator";
import { useInvoice } from "../context/InvoiceContext";

const SendInvoiceBtn = () => {
  const invoice = useInvoice();
  return (
    <button
      type="button"
      className="flex justify-center gap-3 items-center font-medium w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-500 text-white rounded-md p-2"
      onClick={() => pdfGenerator("share", invoice)}
    >
      <SvgWrapper className="fill-white">
        <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
      </SvgWrapper>
      Send Invoice
    </button>
  );
};

export default SendInvoiceBtn;
