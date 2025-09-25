"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "./background-beams";

const WaitlistSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const waitlistLink = "https://docs.google.com/forms/d/e/1FAIpQLScaJqZUDR1F-sHXeBi6pjeZqXu_gzPxB-xjdgmKjVBTa1FFDQ/viewform";

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why are you implementing a waitlist?",
      answer: "We're currently in the final stages of development and want to ensure a smooth launch. The waitlist helps us onboard users in a controlled manner and provide the best possible experience."
    },
    {
      question: "I joined the waitlist. When will I hear back?",
      answer: "We'll be sending out invitations on a rolling basis. You'll receive an email as soon as your spot in line comes up, typically within 1-2 weeks."
    },
    {
      question: "How can I increase my chances of getting access?",
      answer: "We prioritize early signups and healthcare professionals. Sharing about us on social media can also help move you up the list!"
    },
    {
      question: "I already installed and signed up for AyurSutra. Can I continue using it?",
      answer: "Yes! Existing users will continue to have full access. The waitlist is only for new users joining our platform."
    },
    {
      question: "I keep getting retry errors or am experiencing slowness, what can I do?",
      answer: "We apologize for the inconvenience. Please try refreshing your browser or clearing your cache. If issues persist, contact our support team at support@ayursutra.com"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-neutral-950 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          Join the Waitlist
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
          Thank you for your amazing interest in AyurSutra! We're seeing unprecedented demand. Join our waitlist and we'll notify you as soon as access is available.
        </p>
        
        <div className="mt-8">
          <a
            href={waitlistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Join Waitlist
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <div id="faq" className="mx-auto mt-16 max-w-3xl scroll-mt-20">
        <h3 className="text-center text-2xl font-semibold text-white">Common questions</h3>
        <div className="mt-6 space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-neutral-800 bg-neutral-900/50 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-3 text-left focus:outline-none md:p-4"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaqIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h4 className="text-base font-medium text-white">{faq.question}</h4>
                <svg
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-${index}`}
                className={`px-3 pb-3 pt-0 transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'block' : 'hidden'} md:px-4`}
                aria-hidden={openFaqIndex !== index}
              >
                <p className="text-neutral-400 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BackgroundBeams className="opacity-20" />
    </div>
  );
};

export default WaitlistSection;
