import InnerHeader from "@/components/General/InnerHeader";
import PlanContentArea from "@/components/General/PlanContentArea";
import React from "react";

const Index = () => {
  const content = `
    <h2>1. Introduction</h2>
    <p>
        - At JJapan Giveaways, we are committed to protecting your privacy and handling your personal data in compliance with applicable laws, including in the USA and Puerto Rico.
    </p>

    <h2>2. Information Collection</h2>
    <p>
        - We collect personal data such as name, email, shipping address, payment information, and purchase history when you place an order or register on our website.
    </p>

    <h2>3. How We Use Information</h2>
    <p>
        - We use the information collected to process your orders, enter you into the giveaway, improve customer service, and communicate promotions.<br>
        - We may share your data with third-party providers to complete transactions (e.g., shipping companies, payment processors).
    </p>

    <h2>4. Data Retention</h2>
    <p>
        - We retain your personal data as long as necessary to fulfill your order and for the purposes outlined in this policy.
    </p>

    <h2>5. Your Rights</h2>
    <p>
        - You have the right to request access to or deletion of your personal data. For requests, contact us at support@jjapangiveaways.com.
    </p>

    <h2>6. Cookies</h2>
    <p>
        - Our website uses cookies to enhance user experience, track website performance, and manage the giveaway entry system. See our Cookie Policy for more details.
    </p>

    <h2>7. Data Security</h2>
    <p>
        - We employ encryption and secure data storage to protect your personal information.
    </p>

    <h2>8. Updates to the Policy</h2>
    <p>
        - This policy may be updated periodically. Any changes will be posted on this page.
    </p>
`;

  return (
    <div className="privacy-policy">
      <InnerHeader pageTitle="Privacy Policy" />
      <PlanContentArea content={content} />
    </div>
  );
};

export default Index;
