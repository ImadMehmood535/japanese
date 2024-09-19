import InnerHeader from "@/components/General/InnerHeader";
import PlanContentArea from "@/components/General/PlanContentArea";
import React from "react";

const Index = () => {
  const content = `
    <h2>1. Refunds</h2>
    <p>
        - Due to the nature of our product (Japanese snacks and giveaway entry), we do not offer refunds for opened or used products.<br>
        - Refunds are only available for unopened items returned within 14 days of delivery.
    </p>

    <h2>2. Damaged or Incorrect Items</h2>
    <p>
        - If you receive a damaged or incorrect item, please contact us at [email] within 7 days of delivery. We will send a replacement or issue a refund.
    </p>

    <h2>3. Giveaway Entry</h2>
    <p>
        - Purchases that qualify for a giveaway entry are final. The giveaway entry will not be refunded or canceled.
    </p>

    <h2>4. Return Process</h2>
    <p>
        - To return a product, please contact us for a return authorization. Items must be in their original packaging.
    </p>

    <h2>5. Refund Processing</h2>
    <p>
        - Refunds will be processed back to the original payment method within 5-7 business days of receiving the returned product.
    </p>
`;

  return (
    <div className="term-n-condition">
      <InnerHeader pageTitle="Refund Policy" />
      <PlanContentArea content={content} />
    </div>
  );
};

export default Index;
