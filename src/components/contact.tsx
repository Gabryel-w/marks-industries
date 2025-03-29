"use client"
import { Phone, Mail, Clock, Facebook, Instagram, MapPin, MessageSquare } from "lucide-react";


export default function Contact() {
  const openWhatsApp = () => {
    const whatsappNumber = "5551234567";
    const message = "Hello! I'm interested in Thompson Metalcraft's services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 rounded-lg px-3 py-1 text-primary font-medium text-sm mb-3">
            Get In Touch
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
            Contact Our <span className="text-primary">Family Business</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our metalwork services? We're just a message away. Get in touch with our family team for personalized attention to your project needs.
          </p>
          
          <button 
            onClick={openWhatsApp}
            className="bg-[#25D366] hover:bg-[#22c35e] text-white font-medium rounded-full px-8 flex items-center gap-3"
          >
            <MessageSquare className="h-5 w-5" />
            Contact Us on WhatsApp
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            We typically respond within 1-2 hours during business hours
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full text-primary mb-4 mt-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-gray-900 text-lg mb-2">Workshop Location</h3>
              <p className="text-gray-600 mb-4">
                123 Craftsman Way<br />
                Industrial District<br />
                Anytown, ST 12345
              </p>
              <button className="text-primary border-primary hover:bg-primary/5 mt-auto">
                Get Directions
              </button>
            </div>
          </div>
          
          <div className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full text-primary mb-4 mt-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-gray-900 text-lg mb-2">Phone & Email</h3>
              <p className="text-gray-600 mb-2">(555) 123-4567</p>
              <p className="text-gray-600 mb-4">info@thompsonmetalcraft.com</p>
              <div className="flex gap-2 mt-auto">
                <button className="text-primary border-primary hover:bg-primary/5">
                  Call Now
                </button>
                <button className="text-primary border-primary hover:bg-primary/5">
                  Email Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full text-primary mb-4 mt-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-gray-900 text-lg mb-2">Business Hours</h3>
              <div className="text-gray-600 space-y-1 mb-4">
                <p className="flex justify-between gap-4">
                  <span className="font-medium">Mon - Fri:</span> 
                  <span>8:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span className="font-medium">Saturday:</span> 
                  <span>By appointment</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span className="font-medium">Sunday:</span> 
                  <span>Closed</span>
                </p>
              </div>
              <div className="flex space-x-3 mt-auto">
                <a href="#" className="bg-gray-100 hover:bg-primary/10 text-primary p-2 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-primary/10 text-primary p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-sm max-w-5xl mx-auto h-80 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-gray-500">
              Interactive map would be integrated here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
