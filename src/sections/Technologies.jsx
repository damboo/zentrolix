const tech = ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker', 'Tailwind CSS']

export default function Technologies() {
  return (
    <section id="technologies" className="section bg-white border-y border-slate-200">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold">Technology Stack</h2>
          <p className="mt-4 text-slate-600">
            We use modern technologies and tools to deliver scalable digital solutions.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {tech.map((item) => (
            <div key={item} className="card p-6 text-center font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
 )}