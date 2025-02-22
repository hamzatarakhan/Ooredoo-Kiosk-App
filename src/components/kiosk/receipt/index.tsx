import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Printer, Download, CheckCircle2 } from "lucide-react";

export default function Receipt() {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString();
  const transactionId = Math.random()
    .toString(36)
    .substring(2, 10)
    .toUpperCase();

  const handleDownload = () => {
    const receiptContent = `
OOREDOO PAYMENT RECEIPT
=====================
Date: ${currentDate}
Transaction ID: ${transactionId}
Amount Paid: $45.99
Payment Method: NFC Payment
Status: Successful
=====================
Thank you for choosing Ooredoo!
    `;

    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ooredoo-receipt-${transactionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div
      className="min-h-screen bg-background p-8"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center mb-12 bg-white/90 p-6 rounded-lg backdrop-blur-sm">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Payment Receipt
          </h1>
          <p className="text-lg text-muted-foreground">
            Transaction Successful
          </p>
        </div>

        <Card className="border-2 shadow-xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100">
            <div className="flex justify-center mb-4">
              <img
                src="https://www.ooredoo.qa/web/assets/images/ooredoo-logo.svg"
                alt="Ooredoo Logo"
                className="h-12"
              />
            </div>
            <CardTitle className="text-center text-2xl bg-primary/10 py-2 rounded-md text-primary">
              Payment Receipt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 mt-4">
            <div className="space-y-4 border-t border-b py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm text-muted-foreground font-medium">
                  Date:
                </div>
                <div className="text-sm font-bold">{currentDate}</div>

                <div className="text-sm text-muted-foreground font-medium">
                  Transaction ID:
                </div>
                <div className="text-sm font-bold font-mono">
                  {transactionId}
                </div>

                <div className="text-sm text-muted-foreground font-medium">
                  Amount Paid:
                </div>
                <div className="text-sm font-bold text-primary">$45.99</div>

                <div className="text-sm text-muted-foreground font-medium">
                  Payment Method:
                </div>
                <div className="text-sm font-bold">NFC Payment</div>

                <div className="text-sm text-muted-foreground font-medium">
                  Status:
                </div>
                <div className="text-sm font-bold text-green-600">
                  Successful
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                variant="outline"
                onClick={() => window.print()}
              >
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                variant="outline"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary/90 shadow-lg"
              onClick={() => navigate("/services")}
            >
              Back to Services
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-white text-sm mt-6 bg-black/50 p-4 rounded-lg backdrop-blur-sm">
          Thank you for choosing Ooredoo!
        </div>
      </div>
    </div>
  );
}
