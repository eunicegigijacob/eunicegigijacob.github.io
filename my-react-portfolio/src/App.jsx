import { useEffect } from 'react';
// animate on scroll library imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// page components imports
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <section className="hero">
        <Navbar />
        <HomeSection />
      </section>
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
