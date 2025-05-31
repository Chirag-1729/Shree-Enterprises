
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/6053017c-61a0-4cff-a832-6db30a047128.png"
          alt="Chemical Innovation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Shree Enterprises
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-200 font-light">
          Excellence Quality • Reliability Trust
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Leading provider of industrial chemicals, excipients, pharmaceuticals, and innovative business solutions
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-white text-shree-blue hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Enquire Online
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
