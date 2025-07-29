import React from 'react';
import './FAQ.css';
import FAQBox from '../components/FAQBox.jsx';

const FAQ = () => {
  const faqItems = [
    {
      question: "Can DataWise's AI solutions be  business systems?",
      answer: "Yes, integration is a key strength of our AI solutions. DataWise's AI platform is designed for flexibility and can be integrated with a wide range of existing business systems."
    },
    {
      question: "What types of AI services does DataWise offer?",
      answer: "Absolutely, our services are scalable and designed to accommodate and process large amounts of data efficiently."
    },
    {
      question: "What customer support do you offer for your AI solutions?",
      answer: "We offer a range of support services from online resources, live chat support, to dedicated account representatives for enterprise customers."
    },
    {
      question: "Can your AI help improve my website's conversion rate?",
      answer: "We pride ourselves on our service's adaptability, user-centric design, and our continual commitment to pushing the boundaries of AI technology."
    },
    {
      question: "Can your AI identify areas for A/B testing and personalization?",
      answer: "Yes, our AI can analyze user behavior to identify optimal areas for A/B testing and personalization to enhance your customer experience."
    },
    {
      question: "How can your AI help improve my website's SEO ranking?",
      answer: "Our platform allows for custom model training with your proprietary datasets to optimize content and improve SEO performance."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-subtitle">FAQ</span>
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-intro">
            Explore to learn more about how DataWise can empower your business with AI-driven solutions.
          </p>
        </div>
        
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <FAQBox 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;