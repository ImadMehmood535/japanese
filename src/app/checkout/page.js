import CheckoutComponent from "@/components/Checkout/CheckoutComponent";
import React from "react";

export const metadata = {
  title: "Check Out",
  description: "This is a checkout page",
};

const Index = () => {
  return (
    <div className="checkout">
      <CheckoutComponent />
    </div>
  );
};

export default Index;
