
export const Products = () => {
  const pharmaProducts = [
    "Sodium Carboxymethyl Cellulose (IP / BP / USP / EP)",
    "Carboxymethyl Cellulose Calcium (IP / BP / USP / EP / JP)",
    "Croscarmellose Sodium (IP / BP / USP / EP)",
    "Microcrystalline Cellulose (IP / BP / USP / EP)",
    "Sodium Starch Glycollate (IP / BP / USP / EP)",
    "Purified Talc (IP / BP / USP / EP)",
    "Lactose (BP / EP / USP)",
    "Lactose Monohydrate (BP / EP / USP)",
    "Povidone (IP / BP / USP / EP)",
    "CrosPovidone (IP / BP / USP / EP)",
    "Starch/Maize/Corn Starch (IP / BP / USP / EP)"
  ];

  const chemicals = [
    "SODIUM LAURYL SULPHATE (SLS)",
    "LAURYL ALCOHOL ETHOXYLATED 2EO, 3EO, 5EO, 7EO",
    "PEG100, PEG200, PEG300, PEG400, PEG1500",
    "CETYL STEARYL ALCOHOL ETHOXYLATED 25EO ISOTRIDECYL ALCOHOL ETHOXYLATED 5EO",
    "C12-14 ALCOHOL ETHOXYLATED 8EO",
    "CETO STEARYL ALCOHOL ETHOXYLATED 12EO",
    "OLEIC ACID ETHOXYLATED 8EO, 10EO",
    "OLEIC ACID ETHOXYLATED 9EO",
    "CETYL STEARYL ALCOHOL ETHOXYLATED 25EO ISOTRIDECYL ALCOHOL ETHOXYLATED 5EO",
    "TRIDECYL ALCOHOL ETHOXYLATED 3EO, 5EO, 8EO",
    "C16-18 ALCOHOL ETHOXLYALTED 50EO",
    "C16-18 ALCOHOL ETHOXYLATED 5EO",
    "HYDROGENATED TALLOW AMINE ALKOXYLATE",
    "OLEIC ACID ETHOXYLATED 9EO",
    "C10 3EO, C9-11 9EO, C16-18 3EO, C16-18 6EO",
    "CASTOR OIL ETHOXYLATED 35EO, 40EO",
    "PEG200 PEG300 PEG400",
    "C16-18 ALCOHOL ETHOXYALTED 2EO",
    "TRIDECYL ALCOHOL ETHOXYLATED 7EO, 8EO, 9EO",
    "CASTOR OIL ETHOXYLATED 40EO",
    "STEARIC ACID ETHOXYLATED 20EO, 25EO, 30EO",
    "CETIL OLEIC 3EO",
    "TRIDECYL ALCOHOL ETHOXYLATED GEO"
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-shree-blue mb-6">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-shree-light-blue mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Pharma & Nutraceutical */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-shree-blue mb-8 pb-4 border-b-2 border-shree-light-blue">
                PHARMA & NUTRACEUTICAL
              </h3>
              <div className="space-y-4">
                {pharmaProducts.map((product, index) => (
                  <div 
                    key={index}
                    className="text-shree-gray hover:text-shree-blue transition-colors duration-300 py-2 border-b border-gray-100 hover:border-shree-light-blue cursor-pointer"
                  >
                    {product}
                  </div>
                ))}
              </div>
            </div>

            {/* Chemicals */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-shree-blue mb-8 pb-4 border-b-2 border-shree-light-blue">
                CHEMICALS
              </h3>
              <div className="space-y-4">
                {chemicals.map((chemical, index) => (
                  <div 
                    key={index}
                    className="text-shree-gray hover:text-shree-blue transition-colors duration-300 py-2 border-b border-gray-100 hover:border-shree-light-blue cursor-pointer"
                  >
                    {chemical}
                  </div>
                ))}
                <div className="text-shree-gray font-medium pt-4">
                  ... and more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
