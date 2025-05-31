
export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-shree-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Shree Enterprises</h3>
              <p className="text-gray-300 mb-4">
                Leading provider of industrial chemicals, excipients, pharmaceuticals, and innovative business solutions in the UK.
              </p>
              <div className="text-gray-300">
                <p>4th Floor, Silverstream House</p>
                <p>45 Fitzroy St, Fitzrovia</p>
                <p>London W1T 6EB</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <a href="mailto:info@shree-enterprises.co.uk" className="hover:text-white transition-colors duration-300">
                    info@shree-enterprises.co.uk
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+44 73 868 53 858</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🕒</span>
                  <span>Mon-Fri: 07:00-18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                Copyright © 2024 Shree Enterprises - All Rights Reserved.
              </p>
              <div className="flex space-x-6">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Home
                </button>
                <span className="text-gray-300 text-sm">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
