import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import BannerScreen from "./components/kiosk/banner-screen";
import ServiceMenu from "./components/kiosk/service-menu";
import BillPayment from "./components/kiosk/bill-payment";
import BundleSubscription from "./components/kiosk/bundle-subscription";
import PrepaidRecharge from "./components/kiosk/prepaid-recharge";
import Payment from "./components/kiosk/payment";
import Receipt from "./components/kiosk/receipt";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<BannerScreen />} />
        <Route path="/services" element={<ServiceMenu />} />
        <Route path="/bill-payment" element={<BillPayment />} />
        <Route path="/bundle-subscription" element={<BundleSubscription />} />
        <Route path="/prepaid-recharge" element={<PrepaidRecharge />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </Suspense>
  );
}

export default App;
