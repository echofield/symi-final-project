import Link from 'next/link';

export const metadata = { title: 'Sample Report — Symi System' };

export default function SampleReportPage() {
  const pdfPath = process.env.NEXT_PUBLIC_SAMPLE_PDF || '/sample.pdf';
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-light">Sample Intelligence Report</h1>
        <p className="mt-4 text-lg">Preview the structure and level of analysis we deliver.</p>

        <div className="mt-8 rounded-none border border-black bg-white p-4">
          <object data={pdfPath} type="application/pdf" className="h-[75vh] w-full">
            <p className="text-black">
              Your browser can’t display the PDF inline.
              <Link href={pdfPath} className="underline ml-2">Download the report</Link>.
            </p>
          </object>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/contact" className="btn btn-primary">Request Intelligence Analysis</Link>
          <Link href="/" className="btn border border-black bg-white text-black hover:opacity-80">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}


