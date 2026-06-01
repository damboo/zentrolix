const stats = [
  { label: 'Projects Planned', value: '50+' },
  { label: 'Technology Solutions', value: '20+' },
  { label: 'Support Availability', value: '24/7' },
  { label: 'Delivery Focus', value: '100%' },
]

export default function Stats() {
  return (
    <section className="section">
      <div className="container-custom grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="card p-8 text-center">
            <h3 className="text-5xl font-bold text-primary">{item.value}</h3>
            <p className="mt-4 text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
 )}