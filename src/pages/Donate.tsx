import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";
import paymentQR from "@/assets/payment-qr.jpg";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Donate = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  
  // Donor details
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");

  const predefinedAmounts = [500, 1000, 2500, 5000];

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Step 1: Validate details and show payment
  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!donorName || !donorEmail || !donorPhone || !amount) {
      toast({
        title: "Missing Information",
        description: "Please fill all details before proceeding.",
        variant: "destructive",
      });
      return;
    }
    setShowPaymentForm(true);
  };

  // Step 2: Razorpay Payment
  const handleDonate = (e) => {
    e.preventDefault();

    const options = {
      key: "", // 🔹 Replace with your Razorpay Test Key
      amount: Number(amount) * 100, // in paise
      currency: "INR",
      name: "Giving Hands Foundation",
      description: "Donation Payment",
      handler: function (response) {
        toast({
          title: "Payment Successful",
          description: `Thank you for donating ₹${amount}! Payment ID: ${response.razorpay_payment_id}`,
        });
      },
      prefill: {
        name: donorName,
        email: donorEmail,
        contact: donorPhone,
      },
      theme: { color: "#00aaff" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Hero
        title="Make a Donation"
        subtitle="Your generosity creates lasting change. Every contribution helps us reach more communities in need."
        showCTA={false}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              {!showPaymentForm ? (
                <form onSubmit={handleProceedToPayment} className="space-y-6">
                  <h2 className="font-heading font-bold text-3xl mb-6">
                    Enter Your Details
                  </h2>

                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    required
                  />

                  <label className="block text-sm font-semibold mb-2">
                    Donation Amount
                  </label>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {predefinedAmounts.map((amt) => (
                      <Button
                        key={amt}
                        type="button"
                        variant={amount === amt.toString() ? "default" : "outline"}
                        onClick={() => setAmount(amt.toString())}
                        className="font-semibold text-lg"
                      >
                        ₹{amt.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Or Enter Custom Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                    required
                  />

                  <Button type="submit" size="lg" className="w-full font-semibold">
                    Proceed to Payment
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleDonate} className="space-y-6">
                  <h2 className="font-heading font-bold text-3xl mb-6">
                    Complete Payment
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Donation Amount: <strong>₹{amount}</strong>
                  </p>

                  <Button type="submit" size="lg" className="w-full font-semibold">
                    <Heart className="mr-2 h-5 w-5" />
                    Pay ₹{amount} with Razorpay
                  </Button>
                </form>
              )}
            </div>

            {/* Right Section remains same */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <h3 className="font-heading font-bold text-2xl mb-4 text-center">
                  Scan to Pay via UPI
                </h3>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    <img
                      src={paymentQR}
                      alt="UPI Payment QR Code"
                      className="w-56 h-56"
                    />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground">
                    Scan this QR code with any UPI app
                  </p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {["Google Pay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 text-center">UPI ID</h4>
                  <p className="text-center font-mono text-sm text-primary">
                    givinghands@upi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
