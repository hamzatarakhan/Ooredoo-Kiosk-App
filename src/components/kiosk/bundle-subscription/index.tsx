import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../ui/card";
import { Wifi, Phone, Globe } from "lucide-react";

export default function BundleSubscription() {
  const navigate = useNavigate();

  const bundles = [
    {
      id: 1,
      name: "Basic Bundle",
      price: 15.99,
      features: ["5GB Data", "100 Minutes", "100 SMS"],
      icon: Wifi,
    },
    {
      id: 2,
      name: "Standard Bundle",
      price: 25.99,
      features: ["15GB Data", "Unlimited Minutes", "500 SMS"],
      icon: Phone,
    },
    {
      id: 3,
      name: "Premium Bundle",
      price: 35.99,
      features: ["Unlimited Data", "Unlimited Minutes", "Unlimited SMS"],
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/services")}
          className="mb-8"
        >
          ← Back to Services
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Bundle</h1>
          <p className="text-lg text-muted-foreground">
            Select from our available mobile bundles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <Card
              key={bundle.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate("/payment")}
            >
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <bundle.icon className="w-12 h-12 text-primary hover:text-primary/90" />
                </div>
                <CardTitle className="text-center">{bundle.name}</CardTitle>
                <CardDescription className="text-center text-2xl font-bold">
                  ${bundle.price}/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {bundle.features.map((feature, index) => (
                    <li key={index} className="text-center text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4">Select Bundle</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
