import React from 'react';
import './FAQBox.css';

const FAQBox = ({ question, answer }) => {
  return (
    <div className="faq-item">
      <h3 className="faq-question">{question}</h3>
      <p className="faq-answer">{answer}</p>
    </div>
  );
};

export default FAQBox;