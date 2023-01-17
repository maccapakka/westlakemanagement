export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-200 px-4 py-12">
      <section className="bg-white rounded max-w-[800px] mx-auto p-8 space-y-4">
        {children}
      </section>
    </div>
  );
}
