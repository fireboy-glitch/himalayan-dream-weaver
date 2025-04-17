
import React from "react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-200 mb-8">
              Have questions or ready to plan your adventure? Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
                <p className="text-gray-600 max-w-2xl">
                  Whether you're planning a trek, have questions about our tours, or need some advice on your Nepal adventure, we're here to help. Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>
              
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-8 sticky top-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-mountain-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Address</h4>
                      <p className="text-gray-600">
                        Thamel, Kathmandu<br />
                        Nepal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-mountain-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">excesstohimalayas@gmail.com</p>
                      <p className="text-gray-600">rizanmk27@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-mountain-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+977 9864535410</p>
                      <p className="text-gray-600">+977 9849260607</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-mountain-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="text-mountain-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Social Media</h4>
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="text-gray-600 hover:text-mountain-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-mountain-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.29.6 1.887 1.197.596.596.944 1.22 1.192 1.887.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427-.248.667-.596 1.29-1.192 1.887-.596.596-1.22.945-1.887 1.192-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465-.668-.248-1.29-.596-1.887-1.192-.595-.595-.944-1.22-1.192-1.887-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.248-.668.6-1.29 1.197-1.887.596-.596 1.22-.944 1.887-1.192.636-.247 1.363-.416 2.427-.465 1.024-.047 1.379-.06 3.808-.06h.63zm-.63 1.802h-.63c-2.506 0-2.784.011-3.757.058-.909.041-1.402.193-1.73.321-.433.168-.748.368-1.077.698-.33.33-.529.644-.697 1.076-.128.33-.28.822-.321 1.73-.047.975-.058 1.253-.058 3.76 0 2.506.011 2.784.058 3.758.041.909.193 1.402.321 1.73.168.432.368.747.698 1.077.33.33.644.529 1.076.697.33.128.822.28 1.73.321.975.047 1.253.058 3.76.058 2.508 0 2.786-.011 3.76-.058.909-.041 1.402-.193 1.73-.321.433-.168.747-.368 1.077-.698.33-.33.529-.644.697-1.076.128-.33.28-.822.321-1.73.048-.975.058-1.253.058-3.76 0-2.506-.01-2.784-.058-3.757-.041-.909-.193-1.402-.321-1.73-.168-.433-.368-.748-.697-1.077-.33-.33-.644-.529-1.077-.697-.328-.128-.82-.28-1.729-.321-.974-.047-1.254-.058-3.76-.058zM12 4.617c2.86 0 5.383 1.43 6.899 3.613.678.978 1.19 2.097 1.517 3.323.329 1.227.484 2.507.484 3.816 0 1.31-.157 2.591-.484 3.817-.327 1.226-.839 2.344-1.517 3.322-1.516 2.183-4.039 3.613-6.899 3.613-2.86 0-5.383-1.43-6.899-3.613-.678-.978-1.19-2.096-1.517-3.322-.329-1.227-.484-2.507-.484-3.817 0-1.309.155-2.589.484-3.816.327-1.226.839-2.345 1.517-3.323C6.617 6.047 9.14 4.617 12 4.617zm0 1.802c-2.67 0-4.833 1.336-6.187 3.387-.592.895-1.049 1.921-1.349 3.025-.3 1.104-.44 2.259-.44 3.433 0 1.175.14 2.325.44 3.433.3 1.104.757 2.131 1.349 3.026C7.167 16.88 9.33 18.215 12 18.215c2.67 0 4.833-1.334 6.187-3.387.592-.895 1.049-1.922 1.349-3.026.3-1.108.44-2.258.44-3.433 0-1.174-.14-2.329-.44-3.433-.3-1.104-.757-2.13-1.349-3.025C16.833 7.753 14.67 6.419 12 6.419zm0 11.351c-2.392 0-4.333-1.94-4.333-4.33 0-2.39 1.94-4.33 4.333-4.33 2.392 0 4.333 1.94 4.333 4.33 0 2.39-1.941 4.33-4.333 4.33zm0-1.802c1.392 0 2.521-1.129 2.521-2.528 0-1.4-1.129-2.528-2.521-2.528-1.392 0-2.521 1.129-2.521 2.528 0 1.4 1.13 2.528 2.521 2.528z" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-mountain-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">How can I book a trek or tour?</h3>
                <p className="text-gray-600">
                  You can book directly through our website by navigating to the specific trek or tour page and clicking the "Book Now" button. Alternatively, you can contact us via email or phone to make arrangements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">What is your cancellation policy?</h3>
                <p className="text-gray-600">
                  Our cancellation policy varies depending on the trek or tour. Generally, cancellations made 30 days or more before the start date receive a full refund minus the deposit. Please refer to the specific terms and conditions for your booking or contact us for details.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Do you arrange airport pickups?</h3>
                <p className="text-gray-600">
                  Yes, we provide complimentary airport pickup and drop-off services for all our clients who book a trek or tour with us. Please provide your flight details at least 3 days before your arrival.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Can you help with visa arrangements?</h3>
                <p className="text-gray-600">
                  While we don't directly process visas, we can provide you with all the necessary information and supporting documents required for your Nepal visa application. Most tourists can also obtain a visa on arrival at Tribhuvan International Airport.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Find Us</h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0376967524504!2d85.3085565!3d27.715843100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4f7%3A0x8de42087abb936fa!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1650450221018!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
