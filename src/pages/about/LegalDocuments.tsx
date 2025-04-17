
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download, FileCheck, ShieldCheck, AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const documents = [
  {
    title: "Company Registration Certificate",
    description: "Official registration with the Government of Nepal, Department of Industry, confirming our legal status as a tourism service provider.",
    issueDate: "March 2006",
    renewalDate: "March 2023",
    icon: FileCheck
  },
  {
    title: "Tourism Industry License",
    description: "License issued by the Ministry of Culture, Tourism and Civil Aviation authorizing us to operate trekking and tour services in Nepal.",
    issueDate: "April 2006",
    renewalDate: "April 2023",
    icon: FileText
  },
  {
    title: "Nepal Tourism Board Certification",
    description: "Official recognition from Nepal Tourism Board as an approved tour and trek operator meeting all quality standards.",
    issueDate: "May 2006",
    renewalDate: "May 2023",
    icon: FileCheck
  },
  {
    title: "TAAN Membership Certificate",
    description: "Membership with Trekking Agencies' Association of Nepal (TAAN), the official body representing trekking agencies in Nepal.",
    issueDate: "June 2006",
    renewalDate: "June 2023",
    icon: FileText
  },
  {
    title: "NMA Affiliation Certificate",
    description: "Official affiliation with Nepal Mountaineering Association for organizing climbing and mountaineering expeditions.",
    issueDate: "August 2007",
    renewalDate: "August 2023",
    icon: FileCheck
  },
  {
    title: "Tax Clearance Certificate",
    description: "Annual tax clearance document confirming compliance with Nepal's tax regulations and timely payment of all applicable taxes.",
    issueDate: "July 2022",
    renewalDate: "July 2023",
    icon: FileText
  }
];

const LegalDocuments = () => {
  return (
    <Layout>
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
            alt="Legal Documents Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Documents & Certifications</h1>
            <p className="text-lg text-gray-200 mb-8">
              Excess To Himalayas operates with full legal compliance and industry certifications, ensuring you're traveling with a legitimate, recognized, and accountable company.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-gray-50 p-8 rounded-lg mb-12 border border-gray-200">
            <div className="flex items-center mb-6">
              <ShieldCheck className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold">Our Commitment to Legitimacy</h2>
                <p className="text-gray-600">All documents available for verification upon request</p>
              </div>
            </div>
            <p className="text-gray-700">
              At Excess To Himalayas, we pride ourselves on operating with complete transparency and in full compliance with all legal requirements. We maintain all necessary licenses, permits, and certifications required by the Government of Nepal and industry associations. This ensures that when you book with us, you're traveling with a fully legitimate company that adheres to all regulations and industry standards.
            </p>
          </div>

          <div className="space-y-8">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <doc.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                      <p className="text-gray-600 mb-4">{doc.description}</p>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
                        <div>
                          <span className="font-medium">Issue Date:</span> {doc.issueDate}
                        </div>
                        <div>
                          <span className="font-medium">Last Renewal:</span> {doc.renewalDate}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50" asChild>
                      <a href="#">
                        <Download className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">Verify Our Credentials</h3>
                <p className="text-amber-700 mb-4">
                  We encourage all our clients to verify our credentials. If you wish to confirm the authenticity of our documents or have any questions about our legal status, please contact us or the relevant issuing authorities directly.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700">Contact Us for Verification</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Insurance & Financial Protection</h2>
          <Separator className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Business Liability Insurance</h3>
              <p className="text-gray-600 mb-4">
                We maintain comprehensive business liability insurance that covers all our operations. This ensures that in the unlikely event of any issues, we have the financial capacity to meet our obligations to clients and partners.
              </p>
              <p className="text-sm text-gray-500">
                Policy Number: ETH-BLI-2023-0125<br />
                Valid until: December 2023
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Staff Insurance</h3>
              <p className="text-gray-600 mb-4">
                All our guides, porters, and staff members are covered by appropriate insurance policies as required by Nepalese law and industry best practices, including coverage for medical emergencies and accidents.
              </p>
              <p className="text-sm text-gray-500">
                Renewed annually<br />
                Last renewal: January 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalDocuments;
