const insights = [
  {
    title: 'Digital Transformation',
    description: 'Modern businesses require scalable digital systems to remain competitive and efficient.',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Cloud platforms improve flexibility, security, and operational efficiency.',
  },
  {
    title: 'Business Automation',
    description: 'Automation helps businesses streamline workflows and reduce operational overhead.',
  },
]

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

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item) => (
            <div key={item.title} className="card p-8">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 )}