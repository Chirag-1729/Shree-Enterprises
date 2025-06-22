
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-shree-blue mb-6">
              About Shree Ventures
            </h2>
            <div className="w-24 h-1 bg-shree-light-blue mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <img 
                src="/lovable-uploads/ChemicalFac.jpg"
                alt="Industrial Chemical Facility"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-shree-blue mb-4">
                BUY EXCIPIENTS & CHEMICAL PRODUCTS
              </h3>
              
              <p className="text-shree-gray text-lg leading-relaxed">
                Based in the United Kingdom, Shree Ventures is dedicated to sourcing high-quality products such as industrial chemicals, excipients, natural oils and extracts, fragrances, flavors, and more. Our goal is to connect manufacturers with the finest materials from a diverse range of channels.
              </p>

              <p className="text-shree-gray text-lg leading-relaxed">
                At Shree Ventures, we are committed to excellence and uncompromising standards. Our team of competitive and experienced professionals leverages their deep expertise to meet the unique needs of our customers. By utilizing their valuable knowledge, they ensure maximum customer satisfaction and strive to deliver only the best quality products.
              </p>

              <p className="text-shree-gray text-lg leading-relaxed">
                We take pride in our relentless pursuit of sourcing the highest quality products from various sources, ensuring that our clients receive nothing but the best. Trust Shree Ventures for reliable, top-tier sourcing solutions that support your manufacturing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
