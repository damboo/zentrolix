const points = [
  'Expert IT Consulting Services',
  'Complete IT Solutions Under One Roof',
  'End-to-End Automotive Testing',
  'Innovative Hardware Design & Development',
  'Comprehensive HR & Talent Acquisition',
  'Your Single-Point Solution Provider',
]

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold">Why Choose Us</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="card p-6 text-lg font-medium">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
 )}