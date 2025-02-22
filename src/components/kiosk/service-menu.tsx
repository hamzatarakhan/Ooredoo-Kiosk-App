import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { PhoneCall, Receipt, Package } from "lucide-react";

export default function ServiceMenu() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Bundle Subscription",
      description: "Subscribe to our latest mobile bundles",
      icon: Package,
      path: "/bundle-subscription",
    },
    {
      title: "Bill Payment",
      description: "Pay your outstanding bills",
      icon: Receipt,
      path: "/bill-payment",
    },
    {
      title: "Prepaid Recharge",
      description: "Recharge your prepaid number",
      icon: PhoneCall,
      path: "/prepaid-recharge",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Select a Service</h1>
          <p className="text-lg text-muted-foreground">
            Choose from our available services below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.path}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(service.path)}
            >
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <service.icon className="w-12 h-12 text-primary hover:text-primary/90" />
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
