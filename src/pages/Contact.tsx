
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="heading-lg mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Get in touch with us for any questions about our treks or tours.
                We're here to help you plan your perfect adventure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="heading-sm mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="w-full min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-mountain-600 hover:bg-mountain-700">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="heading-sm mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-mountain-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">Thamel, Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-mountain-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone/WhatsApp</h3>
                      <p className="text-gray-600">
                        <a href="tel:+9779864535410" className="hover:text-mountain-600">
                          +977 9864535410
                        </a>
                        <br />
                        <a href="tel:+9779849260607" className="hover:text-mountain-600">
                          +977 9849260607
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-mountain-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:excesstohimalayas@gmail.com"
                          className="hover:text-mountain-600"
                        >
                          excesstohimalayas@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2704812255874!2d85.31089661506464!3d27.715431982785293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4f7%3A0x58099b8d37a4c09a!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1642842291175!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
