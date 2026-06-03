const tech = [
  "Generative AI",
  "Data Engineering",
  "Microsoft Azure",
  "Amazon Web Services (AWS)",
  "Java Development",
  "Python Development",
  "Full Stack Development",
  "Cloud Solutions",
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="section bg-white border-y border-slate-200"
    >
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold">Technology Stack</h2>
          <p className="mt-4 text-slate-600">
            We use modern technologies and tools to deliver scalable digital
            solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
