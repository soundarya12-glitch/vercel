import { useState } from 'react';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all unused products in original packaging.',
  },
  {
    question: 'How can I track my order?',
    answer: 'After placing an order, you will receive a tracking ID via email. Use it on the Track Us page.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship internationally. Shipping charges and times may vary based on location.',
  },
];

export default function Fre() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-200">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left text-lg font-medium text-gray-800 focus:outline-none flex justify-between"
            >
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
