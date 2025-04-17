
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PaymentForm from "@/components/payment/PaymentForm";
import { allTreks } from "@/data/treksData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TrekPayment = () => {
  const { trekId } = useParams();
  const navigate = useNavigate();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Find the trek by ID
  const trek = allTreks.find(trek => trek.id === trekId);

  if (!trek) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <h1 className="heading-lg mb-4">Trek Not Found</h1>
          <p className="mb-8">The trek you're looking for could not be found.</p>
          <Button onClick={() => navigate('/treks')}>Back to Treks</Button>
        </div>
      </Layout>
    );
  }

  const handleSuccess = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      navigate(`/treks/${trekId}`);
    }, 3000);
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="mb-8">
          <Button 
            variant="outline"
            onClick={() => navigate(`/treks/${trekId}`)}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Trek Details
          </Button>
          <h1 className="heading-lg mb-2">{trek.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-2">Booking Reference:</span>
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">{`ETH-${trekId}-${Date.now().toString().slice(-6)}`}</span>
          </div>
        </div>

        {paymentSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-green-800 mb-2">Booking Completed!</h2>
            <p className="text-green-700">
              Thank you for your booking. You will be redirected back to the trek details page in a few seconds.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PaymentForm 
                trekName={trek.title}
                trekPrice={trek.price}
                onSuccess={handleSuccess}
              />
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
                <h3 className="font-bold text-lg mb-4">Trip Summary</h3>
                <div className="space-y-3 divide-y">
                  <div className="flex justify-between py-2">
                    <span>Trip:</span>
                    <span className="font-medium">{trek.title}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Duration:</span>
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Difficulty:</span>
                    <span>{trek.difficulty}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Best Season:</span>
                    <span>{trek.bestSeason}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Base Price:</span>
                    <span className="font-bold">${trek.price}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${trek.price}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    * The total price is per person, based on shared accommodation. 
                    Private room supplements may apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TrekPayment;
