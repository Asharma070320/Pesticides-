import React, { useState, useEffect } from 'react';
import { ChevronDown, Leaf, Shield, Zap, Users, Award, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

const PesticidesWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      name: "BioShield Pro",
      category: "Organic Insecticide",
      description: "Advanced bio-based formula for comprehensive pest control",
      image: "🛡️",
      features: ["Eco-friendly", "Long-lasting", "Safe for beneficial insects"]
    },
    {
      name: "GreenGuard Max",
      category: "Herbicide",
      description: "Selective weed control with minimal environmental impact",
      image: "🌿",
      features: ["Selective targeting", "Biodegradable", "Rain-resistant"]
    },
    {
      name: "CropDefender",
      category: "Fungicide",
      description: "Systemic protection against fungal diseases",
      image: "⚡",
      features: ["Systemic action", "Preventive care", "Crop-safe formula"]
    }
  ];

  const stats = [
    { number: "500+", label: "Products", icon: "📦" },
    { number: "98%", label: "Success Rate", icon: "📈" },
    { number: "1M+", label: "Acres Protected", icon: "🌾" },
    { number: "50+", label: "Countries", icon: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/20 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              🌱 AgriShield
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-green-400 transition-colors duration-300">Home</a>
              <a href="#products" className="hover:text-green-400 transition-colors duration-300">Products</a>
              <a href="#about" className="hover:text-green-400 transition-colors duration-300">About</a>
              <a href="#contact" className="hover:text-green-400 transition-colors duration-300">Contact</a>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block hover:text-green-400 transition-colors duration-300">Home</a>
              <a href="#products" className="block hover:text-green-400 transition-colors duration-300">Products</a>
              <a href="#about" className="block hover:text-green-400 transition-colors duration-300">About</a>
              <a href="#contact" className="block hover:text-green-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-pulse mb-8">
            <div className="text-8xl mb-4">🌾</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            AgriShield
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Revolutionary pesticide solutions for sustainable agriculture. Protect your crops, preserve the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-green-400 hover:to-emerald-400 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Explore Products
            </button>
            <button className="border-2 border-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-green-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Cutting-edge pesticide solutions designed for maximum efficacy and environmental responsibility
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/50 transition-all duration-300 group hover:scale-105 border border-green-500/20">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-400">{product.name}</h3>
                <p className="text-green-300 mb-4 font-medium">{product.category}</p>
                <p className="text-green-100 mb-6">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-600 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-green-400">
                Why Choose AgriShield?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eco-Friendly Formula</h3>
                    <p className="text-green-100">Biodegradable compounds that protect crops without harming the environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-full">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Protection</h3>
                    <p className="text-green-100">Multi-spectrum defense against insects, weeds, and diseases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 p-3 rounded-full">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Acting</h3>
                    <p className="text-green-100">Rapid results with long-lasting effectiveness</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-8xl text-center mb-4">🧬</div>
                <h3 className="text-2xl font-bold text-center mb-4">Scientific Innovation</h3>
                <p className="text-center text-green-100">
                  Our research team develops cutting-edge solutions using the latest agricultural science and biotechnology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              About AgriShield
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              For over two decades, AgriShield has been at the forefront of agricultural innovation. We combine cutting-edge science with environmental responsibility to create pesticide solutions that protect crops while preserving our planet's ecosystem.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Users size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-green-100">Leading agricultural scientists and researchers</p>
              </div>
              <div className="text-center">
                <Award size={48} className="mx-auto mb-4 text-emerald-400" />
                <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                <p className="text-green-100">Multiple awards for innovation and sustainability</p>
              </div>
              <div className="text-center">
                <Leaf size={48} className="mx-auto mb-4 text-teal-400" />
                <h3 className="text-xl font-bold mb-2">Sustainability Focus</h3>
                <p className="text-green-100">Committed to environmental protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-green-100">
                Ready to revolutionize your crop protection? Contact our experts today.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-green-100">info@agrishield.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-green-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-500 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-green-100">123 Agriculture Blvd, Farm City, FC 12345</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full bg-black/50 border border-green-500/50 rounded-lg px-4 py-3 text-white">
                  Your Name
                </div>
                <div className="w-full bg-black/50 border border-green-500/50 rounded-lg px-4 py-3 text-white">
                  Your Email
                </div>
                <div className="w-full bg-black/50 border border-green-500/50 rounded-lg px-4 py-3 text-white h-24">
                  Your Message
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 py-3 rounded-lg font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              🌱 AgriShield
            </div>
            <p className="text-green-100 mb-6">
              Leading the future of sustainable agriculture
            </p>
            <div className="border-t border-green-500/30 pt-6">
              <p className="text-sm text-green-200">
                © 2024 AgriShield. All rights reserved. | Protecting crops, preserving nature.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PesticidesWebsite;