import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function BannerScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-background flex flex-col items-center justify-center p-8 cursor-pointer relative"
      onClick={() => navigate("/services")}
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1600&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      <div className="text-center space-y-6 max-w-3xl relative z-10">
        <div className="bg-white/90 p-8 rounded-xl backdrop-blur-sm shadow-2xl">
          <img
            src="https://www.ooredoo.qa/web/assets/images/ooredoo-logo.svg"
            alt="Ooredoo Banner"
            className="h-24 mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to Ooredoo Self-Service Kiosk
          </h1>
          <p className="text-xl text-muted-foreground mt-4 mb-8">
            Touch anywhere to begin your journey
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg"
          >
            Start Here
          </Button>
        </div>
      </div>
    </div>
  );
}
