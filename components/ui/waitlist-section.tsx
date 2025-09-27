"use client";

import React, { useState } from "react";

// Mock BackgroundBeams component since it's not available
const BackgroundBeams = ({ className }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50"></div>
  </div>
);

const WaitlistSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Updated Google Forms URL - replace this with your actual form URL
  const waitlistUrl = "https://docs.google.com/forms/d/e/1FAIpQLScaJqZUDR1F-sHXeBi6pjeZqXu_gzPxB-xjdgmKjVBTa1FFDQ/viewform";

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Function to handle the waitlist button click
  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Open the Google Form in a new tab
    window.open(waitlistUrl, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
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
    <div className="relative w-full overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-8">
        <h2 className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
          Join the Waitlist
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/80">
          Thank you for your amazing interest in AyurSutra! We&apos;re seeing unprecedented demand. Join our waitlist and we&apos;ll notify you as soon as access is available.
        </p>
        
        <div className="mt-8">
          <button
            onClick={handleWaitlistClick}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-medium text-white transition-all hover:bg-primary-light hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer transform hover:-translate-y-0.5"
          >
            Join Waitlist
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>
      </div>

      <div id="faq" className="mx-auto mt-16 max-w-3xl scroll-mt-20 px-6 sm:px-8">
        <h3 className="text-center text-2xl font-semibold text-foreground">Common questions</h3>
        <div className="mt-6 space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-border bg-card/80 overflow-hidden transition-all hover:shadow-md">
              <button
                className="w-full flex justify-between items-center p-3 text-left focus:outline-none md:px-4 hover:bg-card/50 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaqIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h4 className="text-base font-medium text-foreground">{faq.question}</h4>
                <svg
                  className={`w-5 h-5 text-foreground/60 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-${index}`}
                className={`px-3 transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-48 opacity-100 pb-3' : 'max-h-0 opacity-0 pb-0'} md:px-4`}
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
                      className="text-blue-500 hover:text-blue-400 hover:underline ml-1 transition-colors duration-200"
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
      <BackgroundBeams className="opacity-20" />
    </div>
  );
};

export { WaitlistSection };