export default function Hero() {
  return (
    <section id="top" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-slate-50"></div>

      <div className="container-custom relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-primary">
            Smart IT Solutions
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Technology Solutions Designed For Business Growth
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Zentrolix helps businesses build scalable digital infrastructure,
            streamline operations, and modernize their technology ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-2xl bg-primary px-6 py-3 text-white">
              Get Started
            </a>

            <a href="#services" className="rounded-2xl border border-slate-300 px-6 py-3">
              Explore Services
            </a>
          </div>
        </div>

        <div className="card p-8">
          <div className="grid gap-4">
            <div className="rounded-2xl bg-blue-50 p-5">
              <h3 className="font-semibold">Business-Focused IT Services</h3>
              <p className="mt-2 text-sm text-slate-600">
                Scalable solutions tailored for modern business operations.
              </p>
            </div>

            <div className="rounded-2xl bg-indigo-50 p-5">
              <h3 className="font-semibold">Modern Technology Stack</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reliable and future-ready technologies for long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
 )}