import InvoiceForm from "../components/InvoiceForm";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col xl:flex-row justify-center gap-[30px]">
        <main className="rounded-lg min-h-[90vh] bg-white w-full xl:w-4/5 xl:max-w-[1000px] p-5">
          <InvoiceForm />
        </main>
        <Sidebar />
      </section>
    </div>
  );
}
