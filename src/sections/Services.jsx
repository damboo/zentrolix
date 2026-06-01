import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-slate-600">
            We provide modern IT services designed to improve operational efficiency and business growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="card p-8">
              <service.icon className="text-primary" size={36} />
              <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 )}