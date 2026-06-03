const expertise = [
  "Certification and development of automotive components and vehicle",
  "Automotive Components Development",
  "Li-Battery",
  "Engine & CNG/LPG",
];

export default function Insights() {
  return (
    <section className="section bg-white border-y border-slate-200">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold">Industry Insights</h2>
          <p className="mt-4 text-slate-600">
            Technology trends and insights shaping modern businesses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-5 rounded-2xl border bg-white p-6"
            >
              <span className="text-4xl font-bold text-primary/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
