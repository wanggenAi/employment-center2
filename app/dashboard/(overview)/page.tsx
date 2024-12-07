import { lusitana } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer';

export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const { totalPaidInvoices, numberOfCustomers, numberOfInvoices, totalPendingInvoices } = await fetchCardData();
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Welcome To The Employment Center!
        </h1>
        <p className="text-center mb-4 max-w-md">
          This employment center is designed to help you find your dream job. Browse through our extensive list of job postings, save your favorites, and download job descriptions for future reference.
        </p>
        <Footer />
      </div>
    </main>
  );
}