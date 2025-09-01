'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqs = [
    {
      question: "Are your products 100% authentic Ethiopian food?",
      answer: "Yes! We source all products directly from trusted Ethiopian producers to ensure authenticity and high quality.",
    },
    {
      question: "Do you offer organic or natural products?",
      answer: "Absolutely! Many of our products are natural and organically produced to preserve traditional Ethiopian flavors.",
    },
    {
      question: "Can I use your products for commercial purposes?",
      answer: "Yes, our products are suitable for both personal use and commercial purposes, including restaurants and catering.",
    },
    {
      question: "How should I store your products to keep them fresh?",
      answer: "We provide storage instructions for each product, usually keeping them in a cool, dry place away from direct sunlight.",
    },
  ];
  

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="pt-20 bg-[#fef7ef]">

        {/* Hero Section */}
        <section className="bg-[#f8e8d8] py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6b4226]">Contact Megeb Export</h1>
          <p className="text-lg max-w-2xl mx-auto text-[#5a3e2b]">
            Have questions or want to place an order? Reach out to us!
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#7a4e2d] mb-8 text-center">Send a Message</h2>
            <form
              action="https://formsubmit.co/favumail20@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Contact Form Submission - Megeb Export" />
              <input type="hidden" name="_next" value="https://megeb-export.vercel.app/" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:ring-[#a67c52] focus:border-[#a67c52]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:ring-[#a67c52] focus:border-[#a67c52]"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:ring-[#a67c52] focus:border-[#a67c52]"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:ring-[#a67c52] focus:border-[#a67c52]"
              />
              <button
                type="submit"
                className="bg-[#6b4226] hover:bg-[#a67c52] text-white px-6 py-3 rounded font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-[#fdf5ec]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#7a4e2d] mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#e0cfc1] rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-[#5a3e2b]">{faq.question}</span>
                    <span className="text-xl text-[#a67c52]">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-[#5a3e2b]">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
