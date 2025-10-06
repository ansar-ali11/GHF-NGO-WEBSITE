import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Smartphone, DollarSign, Heart } from "lucide-react";
import paymentQR from "@/assets/payment-qr.jpg";

const Donate = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("card");

  const predefinedAmounts = [500, 1000, 2500, 5000];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: `Your contribution of ₹${amount} will help us make a difference.`,
    });
  };

  const paymentMethods = [
    { id: "upi", name: "UPI", icon: <Smartphone className="h-5 w-5" /> },
    { id: "card", name: "Card", icon: <CreditCard className="h-5 w-5" /> },
    { id: "paypal", name: "PayPal", icon: <DollarSign className="h-5 w-5" /> },
  ];

  const transparencyData = [
    { category: "Education", percentage: 35, color: "bg-primary" },
    { category: "Healthcare", percentage: 30, color: "bg-success" },
    { category: "Food Distribution", percentage: 20, color: "bg-accent" },
    { category: "Women Empowerment", percentage: 10, color: "bg-primary" },
    { category: "Operations", percentage: 5, color: "bg-muted" },
  ];

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
              {/* Donation Form */}
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Choose Your Donation Amount
                </h2>

                <form onSubmit={handleDonate} className="space-y-6">
                  {/* Predefined Amounts */}
                  <div className="grid grid-cols-2 gap-4">
                    {predefinedAmounts.map((amt) => (
                      <Button
                        key={amt}
                        type="button"
                        variant={amount === amt.toString() ? "default" : "outline"}
                        size="lg"
                        onClick={() => setAmount(amt.toString())}
                        className="font-semibold text-lg"
                      >
                        ₹{amt.toLocaleString()}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Or Enter Custom Amount
                    </label>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="text-lg"
                      min="1"
                      required
                    />
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Select Payment Method
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setSelectedMethod(method.id)}
                          className={`p-4 rounded-xl border-2 transition-smooth hover-lift ${
                            selectedMethod === method.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex flex-col items-center gap-2">
                            {method.icon}
                            <span className="text-sm font-medium">
                              {method.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Payment Details */}
                  {selectedMethod === "card" && (
                    <div className="space-y-4 p-4 rounded-xl bg-muted/30">
                      <Input placeholder="Card Number" />
                      <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="MM/YY" />
                        <Input placeholder="CVV" />
                      </div>
                    </div>
                  )}

                  {selectedMethod === "upi" && (
                    <div className="p-4 rounded-xl bg-muted/30">
                      <Input placeholder="UPI ID (e.g., name@upi)" />
                    </div>
                  )}

                  {selectedMethod === "paypal" && (
                    <div className="p-4 rounded-xl bg-muted/30">
                      <Input placeholder="PayPal Email" type="email" />
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-semibold text-lg"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Donate ₹{amount || "0"}
                  </Button>
                </form>
              </div>

              {/* QR Code & Info */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-2xl shadow-card">
                  <h3 className="font-heading font-bold text-2xl mb-4 text-center">
                    Scan to Pay
                  </h3>
                  <div className="flex justify-center mb-4">
                    <img
                      src={paymentQR}
                      alt="Payment QR Code"
                      className="w-64 h-64 rounded-xl shadow-md"
                    />
                  </div>
                  <p className="text-center text-muted-foreground">
                    Scan this QR code with your UPI app or payment gateway to
                    donate instantly.
                  </p>
                </div>

                <div className="bg-success/10 p-6 rounded-2xl border border-success/20">
                  <h3 className="font-heading font-bold text-xl mb-3">
                    Why Your Donation Matters
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>₹500 provides school supplies for one child</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>₹1,000 funds a health checkup for a family</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>₹2,500 feeds a community for a week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>₹5,000 sponsors vocational training for women</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Transparency */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-4xl mb-4 text-center">
              Donation Transparency
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              See exactly how your contributions are making a difference.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-2xl shadow-card">
                {transparencyData.map((item, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{item.category}</span>
                      <span className="font-bold text-primary">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">95%</strong> of your
                    donation directly funds our programs.{" "}
                    <strong className="text-foreground">5%</strong> covers
                    essential operational costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Donate;
