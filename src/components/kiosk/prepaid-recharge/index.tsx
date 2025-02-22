import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export default function PrepaidRecharge() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const rechargeAmounts = [5, 10, 20, 50, 100];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/services")}
          className="mb-8"
        >
          ← Back to Services
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Prepaid Recharge</h1>
          <p className="text-lg text-muted-foreground">
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
              <div className="grid grid-cols-3 gap-4">
                {rechargeAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    onClick={() => setSelectedAmount(amount)}
                    className="h-16"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
            </div>

            {phoneNumber && selectedAmount && (
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
