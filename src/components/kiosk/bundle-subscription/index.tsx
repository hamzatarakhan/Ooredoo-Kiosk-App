import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

type BundleType = "hala" | "voice-local" | "data" | "voice-international";

interface Bundle {
  title: string;
  price: number;
  features: string[];
}

export default function BundleSubscription() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<BundleType>("hala");
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);

  const bundles: Record<BundleType, Bundle[]> = {
    hala: [
      {
        title: "Plan Title",
        price: 33.5,
        features: [
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
        ],
      },
      {
        title: "Plan Title",
        price: 33.5,
        features: [
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
        ],
      },
    ],
    "voice-local": [
      {
        title: "Plan Title",
        price: 33.5,
        features: [
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
        ],
      },
    ],
    data: [
      {
        title: "Plan Title",
        price: 33.5,
        features: [
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
        ],
      },
    ],
    "voice-international": [
      {
        title: "Plan Title",
        price: 33.5,
        features: [
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
          "Data 50.0 GB",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#CC0000] p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/services")}
            className="text-white"
          >
            ← Back
          </Button>
          <h1 className="text-2xl font-medium text-white">
            Bundle Subscription
          </h1>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Choose Your Bundle
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-8">
            {[
              { id: "hala", label: "Hala base plan" },
              { id: "voice-local", label: "Voice local" },
              { id: "data", label: "Data add-ons" },
              { id: "voice-international", label: "Voice international" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id as BundleType)}
                className={cn(
                  "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap",
                  selectedType === tab.id
                    ? "bg-[#CC0000] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 hidden">
            {bundles[selectedType].map((bundle, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-[#CC0000] text-white p-4 text-center">
                  <h3 className="text-lg font-medium">{bundle.title}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Vat included</div>
                      <div className="text-[#00B5B8] text-2xl font-bold">
                        {bundle.price}
                      </div>
                      <div className="text-sm text-gray-500">QMR / month</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Valid for</div>
                      <div className="text-[#F3B71B] text-2xl font-bold">1</div>
                      <div className="text-sm text-gray-500">month</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Plan include :</div>
                    {bundle.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-4 h-4 rounded-full border border-[#00B5B8] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#00B5B8]"></div>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedBundle(bundle)}
                    className={cn(
                      "w-full mt-6 py-2 border-2 rounded-lg transition-colors",
                      selectedBundle === bundle
                        ? "bg-[#CC0000] text-white border-[#CC0000]"
                        : "border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white",
                    )}
                  >
                    {selectedBundle === bundle ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {bundles[selectedType].map((bundle, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="bg-[#CC0000] text-white p-4 text-center">
                        <h3 className="text-lg font-medium">{bundle.title}</h3>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500">
                              Vat included
                            </div>
                            <div className="text-[#00B5B8] text-2xl font-bold">
                              {bundle.price}
                            </div>
                            <div className="text-sm text-gray-500">
                              QMR / month
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">
                              Valid for
                            </div>
                            <div className="text-[#F3B71B] text-2xl font-bold">
                              1
                            </div>
                            <div className="text-sm text-gray-500">month</div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-medium">
                            Plan include :
                          </div>
                          {bundle.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-4 h-4 rounded-full border border-[#00B5B8] flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-[#00B5B8]"></div>
                              </div>
                              {feature}
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => setSelectedBundle(bundle)}
                          className={cn(
                            "w-full mt-6 py-2 border-2 rounded-lg transition-colors",
                            selectedBundle === bundle
                              ? "bg-[#CC0000] text-white border-[#CC0000]"
                              : "border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white",
                          )}
                        >
                          {selectedBundle === bundle ? "Selected" : "Select"}
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="w-2 h-2 rounded-full bg-[#CC0000]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8">
            <button
              onClick={() => selectedBundle && navigate("/payment")}
              className={cn(
                "mx-auto block px-8 py-3 rounded-full transition-colors",
                selectedBundle
                  ? "bg-[#CC0000] text-white hover:bg-[#CC0000]/90"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed",
              )}
            >
              Proceed To Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
