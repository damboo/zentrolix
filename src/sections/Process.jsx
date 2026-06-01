const steps = [
  'Requirement Analysis',
  'Strategy & Planning',
  'Development',
  'Deployment & Support',
]

export default function Process() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold">Our Process</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="card p-8">
              <span className="text-sm font-semibold text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
 )}