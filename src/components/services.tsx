"use client"

import { ArrowRight, Heart, Shield, Clock, Award } from "lucide-react";
import { services } from "@/lib/constants";

export default function Services() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contact = document.getElementById("contact");
    if (contact) {
      window.scrollTo({
        top: contact.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#FFEED1]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 rounded-lg px-3 py-1 text-primary font-medium text-sm mb-4">
            Our Specialty
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Family Craftsmanship For Your <span className="text-primary">Metal Projects</span>
          </h2>
          <p className="text-lg text-gray-600">
            With over 25 years of experience, our family-owned business delivers quality metal fabrication with a personal touch. We treat every project as if it were our own.
          </p>
        </div>
        
        {/* Family values section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 mb-20">
          <div className="text-center px-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="font-medium text-gray-900 text-lg mb-2">Personal Care</h3>
            <p className="text-gray-600 text-sm">We treat every client like family, providing personalized attention to your unique needs.</p>
          </div>
          
          <div className="text-center px-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="font-medium text-gray-900 text-lg mb-2">Quality Guarantee</h3>
            <p className="text-gray-600 text-sm">Our family name is on every piece we craft, so quality is our highest priority.</p>
          </div>
          
          <div className="text-center px-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="font-medium text-gray-900 text-lg mb-2">On-Time Delivery</h3>
            <p className="text-gray-600 text-sm">We respect your timelines and always deliver as promised, without cutting corners.</p>
          </div>
          
          <div className="text-center px-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Award className="h-7 w-7" />
            </div>
            <h3 className="font-medium text-gray-900 text-lg mb-2">Legacy Expertise</h3>
            <p className="text-gray-600 text-sm">Skills and knowledge passed down through generations for unmatched craftsmanship.</p>
          </div>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-medium text-white text-xl">{service.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a 
                href="#contact"
                className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center"
                onClick={scrollToContact}
              >
                Request Service <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <button 
            className="rounded-full px-8"
          >
            <a href="#contact" onClick={scrollToContact}>
              Discuss Your Project With Us
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
