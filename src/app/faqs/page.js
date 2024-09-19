import InnerHeader from "@/components/General/InnerHeader";
import PlanContentArea from "@/components/General/PlanContentArea";
import React from "react";

const Index = () => {
  const content = `
    <h2>1. How do I place an order?</h2>
    <p>
        Placing an order is simple! Browse through our collection of Japanese snacks, add your favorite items to the cart, and proceed to checkout. You’ll be automatically entered into our giveaway for a chance to win a custom mod car with each purchase.
    </p>

    <h2>2. What payment methods do you accept?</h2>
    <p>
        We accept all major credit cards, including Visa, MasterCard, American Express, Zelle, CashApp, and PayPal for secure transactions.
    </p>

    <h2>3. How do I know if my order has been placed successfully?</h2>
    <p>
        Once you complete your purchase, you’ll receive a confirmation email with your order details. If you don’t receive it within a few minutes, please check your spam/junk folder or contact us at support@jjapangiveaways.com.
    </p>

    <h2>4. When will my order ship?</h2>
    <p>
        Orders are typically processed within 2-3 business days and shipped out with tracking information. You will receive an email with tracking details once your order is on its way!
    </p>

    <h2>5. Can I track my order?</h2>
    <p>
        Yes! Once your order is shipped, you’ll receive a tracking number in your confirmation email. You can use this number to monitor your package’s progress in real time.
    </p>

    <h2>6. What happens if I receive damaged or incorrect items?</h2>
    <p>
        We’re sorry for the inconvenience! Please contact us within 7 days of receiving your order, and we will gladly arrange for a replacement or refund. Just email us at support@jjapangiveaways.com with your order number and a photo of the damaged or incorrect item.
    </p>

    <h2>Giveaway Entries & Chances to Win</h2>

    <h2>1. How does the giveaway work?</h2>
    <p>
        For every purchase you make, you’re automatically entered into our giveaway for a chance to win a custom mod car. The more products you buy, the more giveaway entries you receive, increasing your chances of winning!
    </p>

    <h2>2. How many giveaway entries do I get per purchase?</h2>
    <p>
        Each product you purchase qualifies you for one giveaway entry. If you buy multiple products in a single order, you’ll get multiple entries into the giveaway. The more products you purchase, the higher your chances of winning the prize!
    </p>

    <h2>3. Can I win more than once?</h2>
    <p>
        Yes! Every month can be a new opportunity. As long as you make a purchase, you'll be entered into a giveaway, even if you’ve won in the past.
    </p>

    <h2>4. How will I know if I’ve won the giveaway?</h2>
    <p>
        We will notify the winner via email and phone, using the contact information you provided during checkout. Be sure to keep an eye on your inbox!
    </p>

    <h2>5. Can I enter the giveaway without making a purchase?</h2>
    <p>
        Our giveaway is exclusively for customers who make a purchase on our website. Every product you buy increases your chances of winning, so the more you shop, the more entries you get!
    </p>

    <h2>6. How are winners chosen?</h2>
    <p>
        Winners are selected randomly at the end of each month. All qualifying purchases are entered into the giveaway, and a winner is drawn at random to receive the custom mod car.
    </p>

    <h2>7. What happens if I don’t win the giveaway this month?</h2>
    <p>
        Don’t worry! We host a new giveaway almost every month, so you’ll have another chance to win with your next purchase. Keep an eye on our website and social media for updates about upcoming giveaways and prizes.
    </p>

    <h2>8. Can I transfer my giveaway prize to someone else?</h2>
    <p>
        Giveaway prizes are non-transferable and must be claimed by the winner.
    </p>

    <h2>9. Is there a limit to how many giveaway entries I can get?</h2>
    <p>
        There’s no limit! The more products you buy, the more entries you receive, giving you even greater chances to win.
    </p>

    <p>If you have any more questions, feel free to reach out to us at support@jjapangiveaways.com. We’re here to help!</p>
`;

  return (
    <div className="term-n-condition">
      <InnerHeader pageTitle="FAQS" />
      <PlanContentArea content={content} />
    </div>
  );
};

export default Index;
