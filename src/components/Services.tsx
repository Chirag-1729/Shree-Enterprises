
export const Services = () => {
  const services = [
    {
      title: "Business Solutions",
      description: "At Shree Enterprises, we offer a wide range of effective and innovative business solutions designed to tackle the complex challenges of today's industry. Our services include workplace service management and data & analytics. Leveraging competitive technology, our skilled",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "Logistics Support",
      description: "At Shree Enterprises, we promise to deliver excellent and timely service in the most efficient and cost-effective way. By blending effective planning, strategy, and management with remarkable execution, we analyze, manage, and implement the entire supply chain.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      title: "Formulation Development",
      description: "We assist our customers in enhancing their formulations and processes, as well as in developing new ones. Our talented team can identify customer objectives and design innovative solutions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Technical Support",
      description: "At Shree Enterprises, our team of experienced professionals is dedicated to providing exceptional technical and application support to our clients.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-shree-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-shree-blue mb-6">
            WELCOME TO SHREE ENTERPRISES TRADING
          </h2>
          <div className="w-24 h-1 bg-shree-light-blue mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-shree-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-shree-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
