
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock, CheckCircle } from "lucide-react";

interface PaymentFormProps {
  trekName: string;
  trekPrice: number;
  onSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ trekName, trekPrice, onSuccess }) => {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('confirmation');
      toast({
        title: "Payment successful!",
        description: "Your payment has been processed successfully.",
      });
    }, 1500);
  };

  if (step === 'confirmation') {
    return (
      <Card className="w-full max-w-xl mx-auto">
        <CardHeader className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription>Your booking has been confirmed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-t border-b py-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Trip:</span>
              <span>{trekName}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Amount paid:</span>
              <span>${trekPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Booking reference:</span>
              <span className="font-mono">ETH-{Math.floor(Math.random() * 1000000)}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            A confirmation email has been sent to your email address with all the details of your booking.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={onSuccess} className="w-full">Return to Trip Details</Button>
        </CardFooter>
      </Card>
    );
  }

  if (step === 'payment') {
    return (
      <Card className="w-full max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>Please enter your payment information securely</CardDescription>
        </CardHeader>
        <form onSubmit={handlePaymentSubmit}>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span>Total amount:</span>
              <span className="text-xl font-bold">${trekPrice}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <div className="relative">
                <Input 
                  id="card-number"
                  placeholder="4242 4242 4242 4242"
                  required
                  minLength={16}
                  maxLength={19}
                  className="pl-10"
                />
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input 
                  id="expiry"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <div className="relative">
                  <Input 
                    id="cvc"
                    placeholder="123"
                    required
                    minLength={3}
                    maxLength={4}
                    className="pl-10"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input 
                id="name"
                placeholder="John Smith"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Pay Now"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setStep('details')}
              disabled={isProcessing}
            >
              Back
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Your payment information is encrypted and secure. We never store your full card details.
            </p>
          </CardFooter>
        </form>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Booking Information</CardTitle>
        <CardDescription>Please fill in your details for {trekName}</CardDescription>
      </CardHeader>
      <form onSubmit={handleDetailsSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <select 
              id="country"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="JP">Japan</option>
              <option value="IN">India</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="travelers">Number of Travelers</Label>
            <select 
              id="travelers"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6+">6+</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Start Date</Label>
            <Input id="date" type="date" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="special-requests">Special Requests (Optional)</Label>
            <textarea 
              id="special-requests"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Continue to Payment</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PaymentForm;
