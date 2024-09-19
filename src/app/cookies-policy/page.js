import InnerHeader from "@/components/General/InnerHeader";
import PlanContentArea from "@/components/General/PlanContentArea";
import React from "react";

const Index = () => {
    const content = `
    <h2>1. Introduction</h2>
    <p>
        - JJapan Giveaways uses cookies to improve website functionality and user experience. By continuing to browse our site, you agree to the use of cookies.
    </p>

    <h2>2. Types of Cookies We Use</h2>
    <p>
        - Essential Cookies: These are necessary for the website to function and cannot be turned off.<br>
        - Performance Cookies: These help us track website usage and improve performance.<br>
        - Marketing Cookies: These are used to show relevant ads to users based on their browsing behavior.
    </p>

    <h2>3. Managing Cookies</h2>
    <p>
        - You can manage or disable cookies by adjusting your browser settings. However, disabling cookies may affect website functionality.
    </p>

    <h2>4. Third-Party Cookies</h2>
    <p>
        - Some cookies are set by third-party services like Google Analytics or social media platforms. These cookies track user behavior for analytics or advertising purposes.
    </p>
`;


  return (
    <div className="term-n-condition">
      <InnerHeader pageTitle="Cookies Policy" />
      <PlanContentArea content={content} />
    </div>
  );
};

export default Index;
