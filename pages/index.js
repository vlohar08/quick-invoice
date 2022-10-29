import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import InvoiceForm from "../components/InvoiceForm";
const Sidebar = dynamic(() => import("../components/Sidebar"));

export default function Home() {
  return (
    <div>
      <section className="flex flex-col xl:flex-row justify-center gap-[30px]">
        <main className="rounded-lg min-h-[90vh] bg-white w-full xl:w-4/5 xl:max-w-[1000px] p-5">
          <InvoiceForm />
        </main>
        <LazyLoad
          once
          className="w-full bg-white p-5 rounded-lg xl:w-1/5"
          offset={100}
        >
          <Sidebar />
        </LazyLoad>
      </section>
    </div>
  );
}
