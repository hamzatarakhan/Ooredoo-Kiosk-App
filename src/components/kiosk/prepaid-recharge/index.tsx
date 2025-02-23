import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export default function PrepaidRecharge() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const rechargeAmounts = [5, 10, 20, 50, 100];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto space-y-4 sm:space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/services")}
          className="mb-8"
        >
          ← Back to Services
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Prepaid Recharge
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Enter your mobile number and select recharge amount
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recharge Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Input
                type="tel"
                placeholder="Enter Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Select Amount</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                {rechargeAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={
                      selectedAmount === amount && !isCustomAmount
                        ? "default"
                        : "outline"
                    }
                    onClick={() => {
                      setSelectedAmount(amount);
                      setIsCustomAmount(false);
                      setCustomAmount("");
                    }}
                    className="h-16"
                  >
                    ${amount}
                  </Button>
                ))}
                <Button
                  variant={isCustomAmount ? "default" : "outline"}
                  onClick={() => {
                    setIsCustomAmount(true);
                    setSelectedAmount(null);
                  }}
                  className="h-16"
                >
                  Custom
                </Button>
              </div>
              {isCustomAmount && (
                <div className="mt-4">
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCustomAmount(value);
                      setSelectedAmount(Number(value));
                    }}
                    className="text-lg"
                  />
                </div>
              )}
            </div>

            {phoneNumber &&
              (selectedAmount || (isCustomAmount && customAmount)) && (
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                  onClick={() => navigate("/payment")}
                >
                  Proceed to Payment
                </Button>
              )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
