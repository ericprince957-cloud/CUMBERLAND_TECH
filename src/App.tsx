import { useState } from 'react';

const WHATSAPP_LINK = 'https://wa.me/2347066350488';
const PHONE_NUMBER = '07066350488';

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
  { url: 'https://image.qwenlm.ai/generated-images/dc48e7a4-f2f8-4d58-ae20-09a3e04fdfcd/_result.png', label: 'Project 1' },
  { url: 'https://image.qwenlm.ai/generated-images/6fa12746-2895-490b-a4b8-5879cb6c590a/_result.png', label: 'Project 2' },
  { url: 'https://image.qwenlm.ai/generated-images/b897f205-66ea-4f67-8e42-87d155a75d93/_result.png', label: 'Project 3' },
  { url: 'https://image.qwenlm.ai/generated-images/54929186-beeb-491a-bcd0-4b9d5a77f491/_result.png', label: 'Project 4' },
];

const heroImage = 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/daf58869-765e-407b-8aec-60ebfeae3ae6.jpg';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
