import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import WhyChooseUs from './sections/WhyChooseUs'
import Technologies from './sections/Technologies'
import Process from './sections/Process'
import Insights from './sections/Insights'
import Stats from './sections/Stats'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Technologies />
        <Process />
        <Insights />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
