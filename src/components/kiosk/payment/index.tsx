import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { CreditCard, Nfc } from "lucide-react";

export default function Payment() {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState<
    "waiting" | "processing" | "success" | "error"
  >("waiting");

  // Simulate NFC payment process
  const simulatePayment = () => {
    setPaymentStatus("processing");
    setTimeout(() => {
      setPaymentStatus("success");
      setTimeout(() => {
        navigate("/receipt");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Payment</h1>
          <p className="text-lg text-muted-foreground">
            Tap your card or device to pay
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Amount to Pay: $45.99</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-6 p-6">
              {paymentStatus === "waiting" && (
                <>
                  <Nfc className="w-24 h-24 text-primary animate-pulse" />
                  <p className="text-lg">Waiting for contactless payment...</p>
                </>
              )}

              {paymentStatus === "processing" && (
                <>
                  <CreditCard className="w-24 h-24 text-primary animate-spin" />
                  <p className="text-lg">Processing payment...</p>
                </>
              )}

              {paymentStatus === "success" && (
                <div className="text-center space-y-4">
                  <div className="text-green-500 text-2xl">✓</div>
                  <p className="text-lg font-semibold">Payment Successful!</p>
                  <p>Redirecting to home...</p>
                </div>
              )}

              {paymentStatus === "error" && (
                <div className="text-center space-y-4">
                  <div className="text-red-500 text-2xl">×</div>
                  <p className="text-lg font-semibold">Payment Failed</p>
                  <Button onClick={() => setPaymentStatus("waiting")}>
                    Try Again
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* For demo purposes only - remove in production */}
        <Button
          className="w-full bg-primary hover:bg-primary/90"
          onClick={simulatePayment}
          disabled={paymentStatus !== "waiting"}
        >
          Simulate NFC Payment
        </Button>
      </div>
    </div>
  );
}
