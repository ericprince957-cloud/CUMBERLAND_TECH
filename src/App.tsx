import { useState, useRef, useEffect } from 'react';

const WHATSAPP_LINK = 'https://wa.me/2347066350488';
const PHONE_NUMBER = '07066350488';
const EMERGENCY_LINK = 'https://wa.me/2347066350488?text=' + encodeURIComponent('Hi Cumberland Tech, I have an urgent AC repair emergency. Please call me ASAP.');

const services = [
  { name: 'Industrial and Domestic Air Conditioning', icon: 'fa-industry' },
  { name: 'Repair of Freezers', icon: 'fa-snowflake' },
  { name: 'Split AC Unit Installation & Repair', icon: 'fa-fan' },
  { name: 'Standing/Floor AC Unit Services', icon: 'fa-temperature-low' },
  { name: 'Central HVAC Systems', icon: 'fa-building' },
  { name: 'Installation, Maintenance & Repair Services', icon: 'fa-wrench' },
  { name: 'Installation and Servicing of Kitchen Canopy', icon: 'fa-ventilator' },
];

const galleryImages = [
  { url: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/b7fa0e36-7236-493f-bdf5-80f653a0a543.jpg', label: 'Project 1' },
  { url: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/636108f0-9953-48c6-99f4-e524b0815355.jpg', label: 'Project 2' },
  { url: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/4caa7926-09c5-4f0b-92b9-0f6094b84ec3.jpg', label: 'Project 3' },
  { url: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/21d2b35b-511f-4909-9c6c-b02df3e0a885.jpg', label: 'Project 4' },
];

const heroImage = 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/daf58869-765e-407b-8aec-60ebfeae3ae6.jpg';

const serviceAreas = [
  { name: 'Warri', icon: 'fa-city', description: 'Full coverage' },
  { name: 'Effurun', icon: 'fa-location-dot', description: 'Headquarters' },
  { name: 'Ughelli', icon: 'fa-map-pin', description: 'Fast service' },
  { name: 'Sapele', icon: 'fa-map-location-dot', description: 'Same-day service' },
  { name: 'Delta State', icon: 'fa-map', description: 'Statewide coverage' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleSliderMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const getWhatsAppLink = (serviceName?: string) => {
    if (serviceName) {
      return `https://wa.me/2347066350488?text=${encodeURIComponent(`Hi Cumberland Tech, I'm interested in ${serviceName}.`)}`;
    }
    return WHATSAPP_LINK;
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-snowflake text-white text-lg"></i>
            </div>
            <span className="font-bold text-blue-900 text-lg tracking-tight">CUMBERLAND TECH</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Contact</a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-blue-900 p-2"
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col px-4 py-4 gap-3">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-800 font-medium py-2">Home</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-800 font-medium py-2">Services</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-800 font-medium py-2">Gallery</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-800 font-medium py-2">Contact</a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2 mt-2"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                Call Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="HVAC Professional Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/75 to-blue-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center md:text-left">
          <div className="max-w-2xl">
            <p className="text-orange-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
              Professional Industrial & Domestic Air Conditioning Solutions in Delta State
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert HVAC Solutions for Your Home & Business in Warri/Delta.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              From Split AC repairs to Industrial Central HVAC systems. Fast, reliable, and professional service.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-2xl hover:shadow-green-500/30 hover:scale-105"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              Book a Service via WhatsApp
            </a>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-white/80">
                <i className="fas fa-phone text-orange-400"></i>
                <span>{PHONE_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <i className="fas fa-map-marker-alt text-orange-400"></i>
                <span>Effurun, Warri</span>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <i className="fas fa-chevron-down text-white/60 text-2xl"></i>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">About Us</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cumberland Tech (Nig.) is your trusted partner for all air conditioning and refrigeration needs in Effurun, Warri, and Delta State. We specialize in both industrial and domestic solutions, ensuring your comfort and efficiency.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Certified Experts</h3>
                <p className="text-gray-600 text-sm">Professional technicians with years of experience</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bolt text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Fast Response Time</h3>
                <p className="text-gray-600 text-sm">Quick service delivery across Delta State</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tags text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Affordable Pricing</h3>
                <p className="text-gray-600 text-sm">Quality service at competitive rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive HVAC solutions for residential and commercial properties</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className={`fas ${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-bold text-blue-900 text-lg mb-3">{service.name}</h3>
                <a
                  href={getWhatsAppLink(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
                >
                  <i className="fab fa-whatsapp"></i>
                  Request Quote
                  <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Recent Work</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600">Professional Installation & Maintenance</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg aspect-square">
                <img
                  src={image.url}
                  alt={image.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold">{image.label}</p>
                  <p className="text-white/80 text-sm">Professional Installation & Maintenance</p>
                </div>
                {/* Always visible label on mobile */}
                <div className="sm:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-blue-900/80 to-transparent">
                  <p className="text-white font-semibold text-sm">{image.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Slider Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">See Our Quality Work</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600">Drag the slider to see the transformation</p>
          </div>
          
          <div 
            ref={sliderRef}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
            style={{ aspectRatio: '16/9' }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image (Full width background) */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=1200"
                alt="Before - Dirty AC unit"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                BEFORE
              </div>
            </div>
            
            {/* After Image (Clipped) */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1631545806609-35d4ae440e93?auto=format&fit=crop&q=80&w=1200"
                alt="After - Clean AC unit"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                AFTER
              </div>
            </div>
            
            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-col-resize hover:scale-110 transition-transform"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
              >
                <div className="flex gap-1">
                  <div className="w-1 h-6 bg-blue-800 rounded-full"></div>
                  <div className="w-1 h-6 bg-blue-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 mt-6 text-sm">
            <i className="fas fa-hand-pointer mr-2"></i>
            Drag the handle left or right to compare
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <i className="fas fa-check text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certified Experts</h3>
              <p className="text-blue-100">Our team consists of certified HVAC professionals with extensive training and experience.</p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
                <i className="fas fa-clock text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Response Time</h3>
              <p className="text-blue-100">We understand urgency. Our team responds quickly to ensure minimal downtime for your systems.</p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                <i className="fas fa-hand-holding-usd text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Affordable Pricing</h3>
              <p className="text-blue-100">Quality service doesn't have to break the bank. We offer competitive rates for all our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Areas We Serve</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600">Professional HVAC services across Delta State</p>
          </div>
          
          {/* Service Area Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <i className={`fas ${area.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-bold text-blue-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">{area.name}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
          
          {/* Map Placeholder */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="text-center mb-6">
              <i className="fas fa-map-marked-alt text-blue-800 text-5xl mb-4"></i>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Our Service Coverage</h3>
              <p className="text-gray-600">Fast response across all major cities in Delta State</p>
            </div>
            
            {/* Visual Map Representation */}
            <div className="relative h-64 bg-white rounded-xl overflow-hidden shadow-inner">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a5f" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Location Dots */}
              <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-xs font-bold text-blue-900 mt-1">Warri</span>
              </div>
              
              <div className="absolute top-1/2 left-1/3 flex flex-col items-center">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-xs font-bold text-blue-900 mt-1">Effurun</span>
              </div>
              
              <div className="absolute top-1/4 right-1/3 flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-xs font-bold text-blue-900 mt-1">Ughelli</span>
              </div>
              
              <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-xs font-bold text-blue-900 mt-1">Sapele</span>
              </div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="25%" y1="33%" x2="33%" y2="50%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                <line x1="33%" y1="50%" x2="67%" y2="25%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                <line x1="67%" y1="25%" x2="75%" y2="67%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                <line x1="33%" y1="50%" x2="75%" y2="67%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
              </svg>
            </div>
            
            <div className="text-center mt-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-800 hover:text-orange-600 font-semibold transition-colors"
              >
                <i className="fas fa-phone"></i>
                Check if we serve your area - Call us!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Visit Us or Call Today</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-blue-800 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Our Address</h4>
                    <p className="text-gray-600">ShopRite Km 1, Refinery Road, Effurun Roundabout, Delta State.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-green-600 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">WhatsApp</h4>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold text-lg hover:underline">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-blue-800 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-blue-800 font-semibold text-lg hover:underline">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-orange-600 text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1234567890!2d5.7417!3d5.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzEnMjcuOCJOIDXCsDQ0JzMwLjEiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cumberland Tech Location"
                  className="absolute inset-0"
                ></iframe>
                {/* Fallback if map doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50 pointer-events-none">
                  <div className="text-center p-8">
                    <i className="fas fa-map-marked-alt text-blue-300 text-6xl mb-4"></i>
                    <p className="text-blue-800 font-semibold">ShopRite Km 1, Refinery Road</p>
                    <p className="text-blue-600">Effurun Roundabout, Delta State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need HVAC Service? We're Just a Message Away!</h2>
          <p className="text-orange-100 mb-6 text-lg">Get a free consultation and quote for your air conditioning needs.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            Get Free Quote Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <i className="fas fa-snowflake text-white text-lg"></i>
                </div>
                <span className="font-bold text-lg">CUMBERLAND TECH</span>
              </div>
              <p className="text-blue-300 text-sm">Professional Industrial & Domestic Air Conditioning Solutions in Delta State.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Contact Info</h4>
              <ul className="space-y-2 text-blue-300 text-sm">
                <li className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-orange-400"></i>
                  ShopRite Km 1, Refinery Road, Effurun
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-phone text-orange-400"></i>
                  {PHONE_NUMBER}
                </li>
                <li className="flex items-center gap-2">
                  <i className="fab fa-whatsapp text-green-400"></i>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-6 text-center">
            <p className="text-blue-400 text-sm">&copy; 2026 Cumberland Tech (Nig.). All Rights Reserved.</p>
            <p className="text-blue-500 text-xs mt-2">Built by Vector Codes.</p>
          </div>
        </div>
      </footer>

      {/* Emergency Repair Button */}
      <a
        href={EMERGENCY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-20 right-4 md:top-24 md:right-6 z-50 bg-red-600 hover:bg-red-700 text-white px-4 py-2 md:px-5 md:py-3 rounded-full font-bold shadow-2xl transition-all hover:scale-105 flex items-center gap-2 animate-pulse-red"
        aria-label="Emergency Repair"
      >
        <span className="text-lg md:text-xl">🆘</span>
        <span className="text-sm md:text-base">Urgent Repair?</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/40 transition-all hover:scale-110 animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </a>
    </div>
  );
}

export default App;
