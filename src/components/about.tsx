"use client"

export default function About() {
  const stats = [
    { value: "25+", label: "Years Combined Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Industry Partners" },
    { value: "12", label: "Industry Awards" }
  ];

  return (
    <section id="about" className="py-20 bg-[#F2D0A4]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Sobre <span className="text-primary">Indústria Marks</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, Indústria Marks has grown to become a leading provider of advanced metallurgical solutions for industries worldwide. Our commitment to innovation, precision, and quality has established us as trusted partners for companies seeking exceptional metal manufacturing capabilities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With state-of-the-art facilities and a team of experienced metallurgists and engineers, we deliver comprehensive solutions from concept to production. Our expertise spans various industries including aerospace, automotive, energy, and industrial manufacturing.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1571586100127-cdaef780fc61?auto=format&fit=crop&w=640&q=80" 
                alt="Manufacturing facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1473621038790-b778b4750efe?auto=format&fit=crop&w=640&q=80" 
                alt="Metal fabrication" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=640&q=80" 
                alt="Quality inspection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1520586000964-d5d9ed8f8397?auto=format&fit=crop&w=640&q=80" 
                alt="Engineering team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
