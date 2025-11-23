import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import EducationSection from './components/EducationSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
