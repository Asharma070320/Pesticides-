import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Shield, Users, Clock, Award, ChevronRight, Star, Bug, Home, Building, Factory, CheckCircle, ArrowRight, ChevronLeft } from 'lucide-react';

export default function ProfessionalPestControlWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselServices = [
    {
      title: "TERMITE PIPELINE TREATMENT",
      originalPrice: "INR 13,000",
      currentPrice: "INR 11,000",
      image: "https://productimages.withfloats.com/tile/64a934f69057090001cb6180.jpeg"
    },
    {
      title: "SPIDERS CONTROL SERVICE",
      originalPrice: "INR 1,100",
      currentPrice: "INR 950",
      image: "https://productimages.withfloats.com/tile/64a932c79057090001cb5ee1.jpeg"
    },
    {
      title: "BED BUGS CONTROL SERVICE",
      originalPrice: "INR 2,500",
      currentPrice: "INR 2,000",
      image: "https://productimages.withfloats.com/tile/64a9323487cb8500014f98cd.jpeg"
    },
    {
      title: "CENTIPEDS CONTROL SERVICE",
      originalPrice: "INR 1,100",
      currentPrice: "INR 950",
      image: "https://productimages.withfloats.com/tile/64a92fce73e4c60001667c31.jpeg"
    },
    {
      title: "ANTS CONTROL SERVICE",
      originalPrice: "INR 1,200",
      currentPrice: "INR 1,000",
      image: "https://productimages.withfloats.com/tile/62fb478a86165e00015e1b08.jpg"
    },
    {
      title: "COCKROACH CONTROL SERVICE",
      originalPrice: "INR 1,500",
      currentPrice: "INR 1,200",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(carouselServices.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(carouselServices.length / 4)) % Math.ceil(carouselServices.length / 4));
  };

  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Residential Services",
      description: "Comprehensive home pest control solutions to protect your family's health and comfort.",
      features: ["Safe for families", "Eco-friendly options", "Follow-up inspections"],
      pests: ["🐜", "🪳", "🕷️", "🐭"]
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: "Commercial Solutions", 
      description: "Professional-grade treatments designed to protect your business reputation.",
      features: ["Flexible scheduling", "Minimal disruption", "Compliance reports"],
      pests: ["🦟", "🐛", "🪲", "🦗"]
    },
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      title: "Industrial Control",
      description: "Specialized pest management solutions for industrial facilities and warehouses.",
      features: ["24/7 monitoring", "Custom protocols", "Safety compliance"],
      pests: ["🐀", "🦅", "🐝", "🪰"]
    }
  ];

  const features = [
    {
      icon: <Shield className="w-16 h-16 text-blue-600" />,
      title: "Licensed & Certified",
      description: "Fully licensed professionals with ongoing training and certification in the latest pest control methods and safety protocols."
    },
    {
      icon: <Users className="w-16 h-16 text-blue-600" />,
      title: "Expert Technicians",
      description: "Our experienced team stays current with industry developments and shares knowledge to prevent future pest issues."
    },
    {
      icon: <Award className="w-16 h-16 text-blue-600" />,
      title: "Advanced Solutions",
      description: "We utilize cutting-edge research and technology to provide the most effective pest control treatments available."
    },
    {
      icon: <Clock className="w-16 h-16 text-blue-600" />,
      title: "Competitive Pricing",
      description: "Fair, transparent pricing with no hidden fees. We provide value that builds long-term customer relationships."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Homeowner",
      text: "Outstanding service from start to finish. The technician was knowledgeable, professional, and took time to explain the treatment process. Highly recommend!",
      rating: 5
    },
    {
      name: "Mike Davis", 
      title: "Property Manager",
      text: "They understood our unique situation and worked around our schedule. Professional, courteous, and extremely effective. Will definitely use again.",
      rating: 5
    },
    {
      name: "Emily Chen",
      title: "Business Owner",
      text: "Quick response time and excellent follow-up service. They resolved our pest issue professionally and provided great preventive advice.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Bug className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="font-bold text-2xl text-gray-900">Navkaar</span>
                <div className="text-sm text-gray-600">Pest Control Services</div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 font-medium transition duration-200">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Reviews</a>
                <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium">
                  Get Quote
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-900 hover:text-blue-600 font-medium py-2">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium py-2">About</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Reviews</a>
              <a href="#contact" className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-medium">
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Since 2008 • Licensed & Insured
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Pest Control 
                <span className="text-blue-600"> Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Protect your property with our comprehensive pest management services. We provide effective, safe, and reliable solutions for residential, commercial, and industrial clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center group">
                  Get Free Inspection 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Hero card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Response Team</h3>
                  <p className="text-gray-600">Professional pest control experts ready to help</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Emergency Hotline</div>
                      <div className="text-gray-600">+91-XXXX-XXXXXX</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Email Support</div>
                      <div className="text-gray-600">info@navkaarpestcontrol.com</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Service Hours</div>
                      <div className="text-gray-600">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-red-400 rounded-full opacity-15 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pest control solutions tailored to your specific needs with guaranteed results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common Pests Handled:</h4>
                  <div className="flex space-x-2">
                    {service.pests.map((pest, pestIndex) => (
                      <div key={pestIndex} className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl hover:bg-blue-50 hover:scale-110 transition duration-300 cursor-pointer">
                        {pest}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center p-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition duration-300 group-hover:border-blue-400">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional pest control solutions with competitive pricing and guaranteed results
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(carouselServices.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                      {carouselServices
                        .slice(slideIndex * 4, slideIndex * 4 + 4)
                        .map((service, index) => (
                          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                            <div className="relative overflow-hidden">
                              <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                            <div className="p-6">
                              <h3 className="font-bold text-gray-900 mb-4 text-lg leading-tight">
                                {service.title}
                              </h3>
                              <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-2xl font-bold text-blue-600">
                                    {service.currentPrice}
                                  </span>
                                  <span className="text-lg text-gray-400 line-through">
                                    {service.originalPrice}
                                  </span>
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                  Save {Math.round(((parseInt(service.originalPrice.replace(/[^\d]/g, '')) - parseInt(service.currentPrice.replace(/[^\d]/g, ''))) / parseInt(service.originalPrice.replace(/[^\d]/g, '')) * 100))}%
                                </div>
                              </div>
                              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:shadow-lg">
                                ENQUIRE
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(carouselServices.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6">
                Contact our experts for a personalized pest control plan tailored to your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Quote
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Navkaar Pest Control</h2>
            <p className="text-xl text-gray-600">Excellence in pest management with a commitment to customer satisfaction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">100% Satisfaction Guarantee</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  We stand behind our work with a comprehensive satisfaction guarantee. If pest problems return between scheduled visits, we'll provide additional treatments at no extra cost.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Eco-Friendly Options</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Follow-up Service</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Award Winning</div>
                <div className="text-gray-600">Excellence in pest control services since 2008</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of satisfied customers across the region</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">2008</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Solve Your Pest Problem?</h2>
            <p className="text-xl text-slate-300">Get a free consultationand professional pest control services today</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone Number</div>
                    <div className="text-slate-300">+91-XXXX-XXXXXX</div>
                    <div className="text-slate-300">24/7 Emergency Hotline</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email Address</div>
                    <div className="text-slate-300">info@navkaarpestcontrol.com</div>
                    <div className="text-slate-300">Quick response guaranteed</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Service Area</div>
                    <div className="text-slate-300">Ajmer, Rajasthan</div>
                    <div className="text-slate-300">And surrounding areas</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-800 rounded-xl">
                <h4 className="font-bold text-xl mb-4">Emergency Service Available</h4>
                <p className="text-slate-300 mb-4">
                  We understand pest problems can't wait. Our emergency response team is available 24/7 for urgent situations.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Call
                </button>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Free Quote</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500" 
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500" 
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500" 
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500" 
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option value="">Select service type</option>
                    <option value="residential">Residential Service</option>
                    <option value="commercial">Commercial Service</option>
                    <option value="industrial">Industrial Service</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500" 
                    placeholder="Describe your pest problem..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Bug className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-xl">Navkaar</span>
                  <div className="text-sm text-slate-400">Pest Control Services</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Professional pest control solutions with over 15 years of experience. Protecting homes and businesses across Rajasthan.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition duration-200">Residential Pest Control</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Commercial Services</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Industrial Solutions</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Termite Treatment</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Rodent Control</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Emergency Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#home" className="hover:text-white transition duration-200">Home</a></li>
                <li><a href="#services" className="hover:text-white transition duration-200">Services</a></li>
                <li><a href="#about" className="hover:text-white transition duration-200">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition duration-200">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Info</h4>
              <div className="space-y-4 text-slate-400">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+91-XXXX-XXXXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>info@navkaarpestcontrol.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                  <span>Ajmer, Rajasthan, India</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Navkaar Pest Control Services. All rights reserved. | Licensed & Insured Professional Pest Control Company</p>
          </div>
        </div>
      </footer>
    </div>
  );
}