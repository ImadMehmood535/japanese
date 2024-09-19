import InnerHeader from "@/components/General/InnerHeader";
import PlanContentArea from "@/components/General/PlanContentArea";
import React from "react";

const Index = () => {
  const content = `
    <h2>1. Shipping Locations</h2>
    <p>
        - We ship to all U.S. states and territories, including Puerto Rico. International shipping is not available at this time.
    </p>

    <h2>2. Processing Time</h2>
    <p>
        - Orders are processed within 2-3 business days and shipped via standard shipping. Shipping times may vary depending on your location.
    </p>

    <h2>3. Shipping Costs</h2>
    <p>
        - Shipping costs are calculated at checkout based on your delivery address and order weight. Free shipping may be available on orders over $50.
    </p>

    <h2>4. Tracking Information</h2>
    <p>
        - Once your order is shipped, you will receive an email with tracking information.
    </p>

    <h2>5. Delivery Issues</h2>
    <p>
        - If your order is delayed or lost, please contact us at support@jjapangiveaways.com. We will work with the carrier to resolve the issue.
    </p>

    <h2>6. International Shipping</h2>
    <p>
        - We currently only ship within the USA and Puerto Rico.
    </p>
`;

  return (
    <div className="term-n-condition">
      <InnerHeader pageTitle="Shipping Policy" />
      <PlanContentArea content={content} />
    </div>
  );
};

export default Index;
