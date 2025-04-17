
import React from "react";
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Shambhu Subedi",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "With over 20 years of mountaineering experience, including multiple Everest summits, Shambhu founded Excess To Himalayas to share his passion for the Himalayas with the world. His extensive knowledge of the mountains and commitment to sustainable tourism have shaped our company's core values.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      email: "shambhu@excesstohimalayas.com"
    }
  },
  {
    name: "Dipak Sapkota",
    role: "Co-Office's Partnered Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Dipak brings over 15 years of experience in the tourism industry to Excess To Himalayas. As Co-Office's Partnered Head, he oversees strategic partnerships and business development, ensuring that we continue to provide exceptional experiences while growing our network of trusted partners.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      email: "dipak@excesstohimalayas.com"
    }
  },
  {
    name: "Dinesh Sapkota",
    role: "Office Executive Representative",
    image: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613",
    bio: "Dinesh manages day-to-day operations at Excess To Himalayas, ensuring that everything runs smoothly for both clients and staff. His organizational skills and attention to detail help maintain our high standards of service and efficiency.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      email: "dinesh@excesstohimalayas.com"
    }
  },
  {
    name: "Dilli Parsad Lamsal",
    role: "Senior Guide",
    image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc",
    bio: "With certification from the Nepal Mountaineering Association and 18 years of guiding experience, Dilli leads our team of trekking guides. His unmatched knowledge of Himalayan routes, culture, and safety protocols has made him one of Nepal's most respected guides and a valuable leader for our trekking operations.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      email: "dilli@excesstohimalayas.com"
    }
  },
  {
    name: "Rizan Subedi",
    role: "Media Manager & IT Head",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    bio: "Rizan oversees all digital initiatives and technology infrastructure at Excess To Himalayas. His expertise in digital marketing, web development, and IT systems ensures that we stay connected with our clients and leverage technology to enhance the customer experience.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      email: "rizanmk27@gmail.com"
    }
  },
  {
    name: "Tenzin Dolkar",
    role: "Sustainability Coordinator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Tenzin oversees our environmental initiatives and community projects, ensuring that our operations benefit local communities and minimize environmental impact. Her background in environmental science and sustainable development guides our responsible tourism practices.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      email: "tenzin@excesstohimalayas.com"
    }
  }
];

const Team = () => {
  return (
    <Layout>
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc"
            alt="Team Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-lg text-gray-200 mb-8">
              Meet the passionate experts behind Excess To Himalayas who make your Himalayan adventures unforgettable. Our team combines local knowledge, professional expertise, and genuine passion for sharing Nepal's wonders.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Leadership & Guides</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Our leadership team and guides bring decades of combined experience in adventure tourism, mountaineering, and cultural expertise. Each member contributes their unique skills and passion to ensure your journey exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <Separator className="mb-4" />
                  <div className="flex justify-center space-x-4">
                    <a href={member.socials.facebook} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={member.socials.instagram} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={member.socials.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.socials.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8 shadow-inner">
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">Our Extended Team</h3>
            <p className="text-gray-600 mb-6 text-center">
              Beyond our core team, we work with over 30 experienced guides, porters, cooks, and support staff who are integral to delivering exceptional experiences. Many have been with us for years, and all share our commitment to quality service and responsible tourism.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
                <p className="font-medium">Professional Guides</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">20+</div>
                <p className="font-medium">Experienced Porters</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">5+</div>
                <p className="font-medium">Admin & Support Staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
