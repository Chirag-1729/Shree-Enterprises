
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-shree-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-shree-blue mb-6">
              CONTACT US
            </h2>
            <div className="w-24 h-1 bg-shree-light-blue mx-auto mb-8"></div>
            <p className="text-xl text-shree-gray mb-8">
              Drop us a line!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white border border-gray-300 focus:border-shree-blue"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white border border-gray-300 focus:border-shree-blue"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white border border-gray-300 focus:border-shree-blue"
                />
                <Textarea
                  placeholder="Other notes"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white border border-gray-300 focus:border-shree-blue min-h-32"
                />
                <Button 
                  type="submit"
                  className="w-full bg-shree-blue hover:bg-shree-light-blue text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send
                </Button>
              </form>
            </div>

            {/* Company Details */}
            <div className="animate-slide-in space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-shree-blue mb-6">Get in touch</h3>
                <p className="text-shree-gray mb-6">
                  We go the extra mile for our customers, so feel free to call us during the below business hours.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-shree-blue mb-4">
                    Shree Ventures Trading Limited<br />
                    (S.E.T.L)
                  </h4>
                  <p className="text-shree-gray mb-4">
                    4th Floor, Silverstream House, 45 Fitzroy St.<br />
                    Fitzrovia, London W1T 6EB
                  </p>
                  <p className="text-shree-gray mb-4">
                    Country of Registration: England & Wales<br />
                    Company Registered Office: 4th Floor,<br />
                    Silverstream House, 45 Fitzroy St. W1T 6EB
                  </p>
                  <p className="text-shree-gray">
                    Tel: + 44 73 868 53 858 (if from abroad)
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-shree-blue mb-4">Hours</h4>
                  <div className="space-y-2 text-shree-gray">
                    <div>Mon 07:00 – 18:00</div>
                    <div>Tue 07:00 – 18:00</div>
                    <div>Wed 07:00 – 18:00</div>
                    <div>Thu 07:00 – 18:00</div>
                    <div>Fri 07:00 – 18:00</div>
                    <div>Sat 09:00 – 17:00</div>
                    <div>Sun 09:00 – 17:00</div>
                  </div>
                  <div className="mt-6">
                    <p className="text-shree-blue font-semibold">For All Enquiries</p>
                    <a href="mailto:info@shree-enterprises.co.uk" className="text-shree-blue hover:underline">
                      info@shree-ventures.co.uk
                    </a>
                    <p className="text-shree-gray mt-2">Tel: 073 868 53 858</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
