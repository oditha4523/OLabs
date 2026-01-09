import './index.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import Welcome from './components/sections/Welcome';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Work from './components/sections/Work';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Services />
        <Work />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
