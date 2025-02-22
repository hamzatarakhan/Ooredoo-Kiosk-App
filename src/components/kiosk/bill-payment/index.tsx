import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export default function BillPayment() {
  const navigate = useNavigate();
  const [accountNumber, setAccountNumber] = useState("");

  // Mock bill details - in real app, this would come from an API
  const billDetails = {
    amount: 45.99,
    dueDate: "2024-04-30",
    status: "Unpaid",
  };

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
          <h1 className="text-4xl font-bold mb-4">Bill Payment</h1>
          <p className="text-lg text-muted-foreground">
            Enter your account number to view and pay your bill
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>

            {accountNumber && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Amount Due:</div>
                  <div className="font-semibold">${billDetails.amount}</div>
                  <div>Due Date:</div>
                  <div className="font-semibold">{billDetails.dueDate}</div>
                  <div>Status:</div>
                  <div className="font-semibold text-red-500">
                    {billDetails.status}
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                  onClick={() => navigate("/payment")}
                >
                  Proceed to Payment
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
