import React from 'react';

const faqs = [
  {
    question: 'What types of documents can I upload?',
    answer: 'We support various insurance document formats including PDF, JPG, PNG, and DOCX files. This includes policy documents, claim forms, and insurance cards.'
  },
  {
    question: 'How secure is my data?',
    answer: 'We use bank-level encryption to protect your data. Your documents are processed securely and never shared with third parties.'
  },
  {
    question: 'How accurate is the AI analysis?',
    answer: 'Our AI system has been trained on millions of insurance documents with a high accuracy rate. However, we recommend reviewing the extracted information for critical decisions.'
  },
  {
    question: 'How long does the analysis take?',
    answer: 'Most documents are analyzed within seconds. The exact time may vary depending on the document length and complexity.'
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}