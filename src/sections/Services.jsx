import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-slate-600">
            We provide modern IT services designed to improve operational
            efficiency and business growth.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-6 rounded-2xl border bg-white p-8 shadow-sm"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="text-primary" size={32} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
