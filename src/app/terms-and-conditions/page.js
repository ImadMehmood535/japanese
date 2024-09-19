import InnerHeader from "@/components/General/InnerHeader";
import PlanContentArea from "@/components/General/PlanContentArea";
import React from "react";

const Index = () => {
    const content = `
        <h2>1. Introduction</h2>
        <p>
            - This document governs the terms and conditions of JJapan Giveaways for users purchasing products and entering into our giveaway.<br>
            - By purchasing any product, you automatically enter into our giveaway and agree to these terms.
        </p>

        <h2>2. Eligibility</h2>
        <p>
            - You must be 18 years or older to make a purchase and enter the giveaway.<br>
            - Residents of the USA and Puerto Rico are eligible to participate.<br>
            - The giveaway is void where prohibited by law.
        </p>

        <h2>3. Purchasing and Giveaway Entry</h2>
        <p>
            - Every purchase of a product automatically enters you into the giveaway. The entry is proportional to the amount spent.<br>
            - The prize includes a custom mod car, details of which are posted on our website.<br>
            - Giveaway winners are selected randomly and announced at the end of each month.
        </p>

        <h2>4. Product Availability</h2>
        <p>
            - All products are subject to availability. We reserve the right to limit quantities, discontinue products, or refuse service to anyone for any reason.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
            - JJapan Giveaways will not be liable for any damages or losses related to your use of our services or products, including participation in the giveaway.
        </p>

        <h2>6. Governing Law</h2>
        <p>
            - These terms are governed by the laws of the USA and Puerto Rico.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
            - JJapan Giveaways reserves the right to modify these terms at any time. Changes will be effective upon posting.
        </p>
    `;
  
    return (
        <div className="term-n-condition">
            <InnerHeader pageTitle="Terms and Conditions" />
            <PlanContentArea content={content} />
        </div>
    );
};

export default Index;
