export default function About() {
  return (
    <section
      id="about"
      className="section bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-slate-600">
            Building Reliable Technology Solutions
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* About */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold">About Zentrolix</h3>

            <p className="mt-6 leading-8 text-slate-600">
              Zentrolix Technology is a technology-driven company specializing
              in IT solution sourcing and automotive testing services. We help
              organizations find reliable technology solutions, trusted vendors,
              and high-quality testing support to ensure performance, safety,
              and compliance.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              With a strong focus on innovation, quality, and efficiency,
              Zentrolix Technology connects businesses with the right IT
              resources, tools, and services required for modern digital and
              engineering environments. Our sourcing expertise ensures that
              clients receive cost-effective, reliable, and scalable solutions
              from trusted technology partners.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              In the automotive sector, we support testing and validation
              requirements by coordinating with certified laboratories and
              industry experts to ensure that products meet required industry
              standards and performance benchmarks.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              At Zentrolix Technology, our mission is to simplify technology
              sourcing and provide dependable testing solutions, enabling our
              clients to focus on innovation, product development, and business
              growth.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <div className="mb-4 text-primary font-semibold">OUR VISION</div>

            <h3 className="text-2xl font-bold">
              Driving Growth Through Innovation
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              To be a trusted and leading partner in resource management,
              sourcing, software and hardware development, and automotive
              testing by delivering innovative, reliable, and high-quality
              solutions.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              We strive to continuously enhance our capabilities, adopt advanced
              technologies, and build long-term relationships with our clients,
              contributing to their growth and success in a rapidly evolving
              industry.
            </p>
          </div>

          {/* Mission */}
          <div className="lg:col-span-2 rounded-3xl bg-primary p-8 text-white">
            <div className="mb-4 font-semibold uppercase tracking-wide">
              Our Mission
            </div>

            <h3 className="text-3xl font-bold">
              Delivering End-to-End Business Solutions
            </h3>

            <p className="mt-5 leading-8 text-white/90">
              To deliver integrated solutions across resource management,
              sourcing, software and hardware development, and automotive
              testing by combining technical expertise with a quality-driven
              approach.
            </p>

            <p className="mt-4 leading-8 text-white/90">
              We aim to provide reliable resources, efficient sourcing, and
              innovative development services while ensuring accurate and
              compliant automotive testing.
            </p>

            <p className="mt-4 leading-8 text-white/90">
              Our mission is to support our clients with timely, cost-effective,
              and dependable solutions that accelerate product development and
              market readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
