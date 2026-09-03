import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustFeatures from './components/TrustFeatures';
import AboutSection from './components/AboutSection';
import FeaturedFleet from './components/FeaturedFleet';
import ServiceCoverage from './components/ServiceCoverage';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FleetPage from './pages/FleetPage';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import LocationsPage from './pages/LocationsPage';

export function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'fleet' | 'locations'
  const [selectedVehicleData, setSelectedVehicleData] = useState(null); // { vehicle, categoryTitle }
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to top immediately whenever page route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage, selectedVehicleData]);

  useEffect(() => {
    if (currentPage !== 'home' || selectedVehicleData) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'fleet', 'locations', 'customers', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, selectedVehicleData]);

  const handleNavigate = (sectionId) => {
    setSelectedVehicleData(null);
    if (sectionId === 'fleet') {
      setCurrentPage('fleet');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else if (sectionId === 'locations') {
      setCurrentPage('locations');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        setActiveSection(sectionId);
        document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectVehicle = (vehicle, categoryTitle, isSwitching = false) => {
    setSelectedVehicleData({ vehicle, categoryTitle });
    
    if (isSwitching) {
      setTimeout(() => {
        const showcaseEl = document.getElementById('vehicle-showcase-section');
        if (showcaseEl) {
          showcaseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 120, behavior: 'smooth' });
        }
      }, 30);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const handleBackToFleet = () => {
    setSelectedVehicleData(null);
    if (currentPage !== 'fleet') setCurrentPage('fleet');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-red selection:text-white">
      
      {/* STICKY NAVBAR */}
      <Navbar 
        activeSection={currentPage === 'fleet' || selectedVehicleData ? 'fleet' : currentPage === 'locations' ? 'locations' : activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* RENDER PAGE INSTANTLY WITH 0MS DELAY & 60FPS SMOOTHNESS */}
      {selectedVehicleData ? (
        <div className="animate-smooth-enter">
          <VehicleDetailsPage
            vehicle={selectedVehicleData.vehicle}
            categoryTitle={selectedVehicleData.categoryTitle}
            onBackToFleet={handleBackToFleet}
            onSelectVehicle={handleSelectVehicle}
          />
        </div>
      ) : currentPage === 'fleet' ? (
        <div className="animate-smooth-enter">
          <FleetPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
            onSelectVehicle={handleSelectVehicle}
          />
        </div>
      ) : currentPage === 'locations' ? (
        <div className="animate-smooth-enter">
          <LocationsPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
          />
        </div>
      ) : (
        <main className="animate-smooth-enter">
          {/* HERO SECTION WITH FLOATING ENQUIRY CARD */}
          <HeroSection onExploreFleet={() => {
            setCurrentPage('fleet');
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }} />

          {/* TRUST FEATURES SECTION */}
          <TrustFeatures />

          {/* ABOUT SECTION */}
          <AboutSection />

          {/* FEATURED FLEET (3 INTERACTIVE VEHICLES ON HOME) */}
          <FeaturedFleet 
            onViewAllFleet={() => {
              setCurrentPage('fleet');
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
            onSelectVehicle={handleSelectVehicle}
          />

          {/* SERVICE COVERAGE SECTION */}
          <ServiceCoverage onViewLocations={() => handleNavigate('locations')} />

          {/* HOW IT WORKS SECTION */}
          <HowItWorks />

          {/* CUSTOMER TESTIMONIALS */}
          <Testimonials />

          {/* FINAL CTA BANNER */}
          <FinalCTA />

          {/* DEDICATED CONTACT SECTION ON LANDING PAGE */}
          <ContactSection />
        </main>
      )}

      {/* FOOTER */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

export default App;
