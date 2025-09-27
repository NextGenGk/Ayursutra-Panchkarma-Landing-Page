"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  link?: {
    url: string;
    text: string;
  };
}

export const FAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Why are you implementing a waitlist?",
      answer: "We're currently in the final stages of development and want to ensure a smooth launch. The waitlist helps us onboard users in a controlled manner and provide the best possible experience."
    },
    {
      question: "I joined the waitlist. When will I hear back?",
      answer: "We'll be sending out invitations on a rolling basis. You'll receive an email as soon as your spot in line comes up, typically within 5-6 months."
    },
    {
      question: "How can I increase my chances of getting early access?",
      answer: "We prioritize early signups and healthcare professionals. Sharing about us on social media can also help move you up the list!"
    },
    {
      question: "What features does AyurSutra offer?",
      answer: "AyurSutra provides comprehensive Panchakarma patient management including appointment scheduling, treatment tracking, patient history, and personalized care plans - all integrated with traditional Ayurvedic principles."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! AyurSutra will be available on both iOS and Android platforms. You'll receive download instructions when you get access to the platform."
    },
    {
      question: "How much does AyurSutra cost?",
      answer: "We offer flexible pricing plans based on practice size and needs. Early access users will receive special introductory pricing. Complete pricing details will be shared when you're invited to join."
    },
    {
      question: "Can I use AyurSutra for multiple locations?",
      answer: "Absolutely! Our platform supports multi-location management, making it easy to oversee multiple clinics or centers from a single dashboard."
    },
    {
      question: "Is my data secure with AyurSutra?",
      answer: "Data security is our top priority. We are fully compliant with the Digital Personal Data Protection (DPDP) Act 2023 and implement FHIR (Fast Healthcare Interoperability Resources) standards for healthcare data. Your information is protected with end-to-end encryption, regular security audits, and strict access controls to ensure maximum privacy and security."
    },
    {
      question: "About AyurSutra",
      answer: "AyurSutra is revolutionizing Panchakarma patient management by combining modern technology with ancient Ayurvedic wisdom. Learn more about our vision and team at",
      link: {
        url: "https://foyer-poster-75653596.figma.site/",
        text: "Our Website"
      }
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">Find answers to common questions about AyurSutra</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg border border-border bg-card/80 overflow-hidden transition-all hover:shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-card/50 transition-colors"
              onClick={() => toggleFaq(index)}
              aria-expanded={openFaqIndex === index}
              aria-controls={`faq-${index}`}
            >
              <h3 className="text-base font-medium text-foreground">{faq.question}</h3>
              <svg
                className={`w-4 h-4 text-foreground/60 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`faq-${index}`}
              className={`px-4 transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'}`}
              style={{
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding-bottom 0.3s ease-in-out',
                willChange: 'max-height, opacity, padding-bottom'
              }}
              aria-hidden={openFaqIndex !== index}
            >
              <p className="text-foreground/80 text-sm">
                {faq.answer}
                {faq.link && (
                  <a 
                    href={faq.link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-1 transition-colors duration-200"
                  >
                    {faq.link.text}
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
