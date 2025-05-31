
export const MapSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-shree-blue mb-6">
              FIND US
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-shree-gray mb-8">
              Visit our office in the heart of London
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Location Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-shree-blue mb-4">
                  Our Location
                </h3>
                <div className="space-y-3 text-shree-gray">
                  <p className="flex items-start space-x-3">
                    <span className="text-blue-500 mt-1">📍</span>
                    <span>
                      <strong>Address:</strong><br />
                      4th Floor, Silverstream House<br />
                      45 Fitzroy St, Fitzrovia<br />
                      London W1T 6EB, United Kingdom
                    </span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-blue-500">🚇</span>
                    <span><strong>Nearest Tube:</strong> Warren Street, Goodge Street</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-blue-500">🚌</span>
                    <span><strong>Bus Routes:</strong> Multiple routes available on Tottenham Court Road</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-blue-500">🚗</span>
                    <span><strong>Parking:</strong> Street parking and nearby car parks available</span>
                  </p>
                </div>
              </div>
              
              <div className="bg-shree-bg p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-shree-blue mb-3">Office Hours</h4>
                <div className="space-y-1 text-sm text-shree-gray">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>07:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>09:00 - 17:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.566447934632!2d-0.14047560000000002!3d51.5238466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3f97a9be25%3A0xcd032d171c5d97be!2sLondon%20Virtual%20Offices%20-%20Virtually%20There%20%C2%AE!5e0!3m2!1sen!2suk!4v1714878045846!5m2!1sen!2suk"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Enterprises Location"
                  className="w-full"
                ></iframe>
              </div>
              <div className="absolute top-4 right-4">
                <a 
                  href="https://www.google.com/maps/dir//London+Virtual+Offices+-+Virtually+There+%C2%AE,+4th+Floor,+Silverstream+House,+45+Fitzroy+St,+Greater,+London+W1T+6EB,+United+Kingdom/@51.5238177,-0.2228758,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48761b3f97a9be25:0xcd032d171c5d97be!2m2!1d-0.1404756!2d51.5238466?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-shree-blue text-white px-4 py-2 rounded-lg shadow-lg hover:bg-shree-light-blue transition-colors duration-300 text-sm font-medium"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
