"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Solnary?",
    answer:
      "Solnary is a Canada-based company specializing in website and phone application development. We work on projects ranging from simple portfolio websites to complex React Native apps.",
  },
  {
    question: "What type of apps does Solnary develop?",
    answer:
      "Solnary develops Android apps, iOS apps, React Native apps, Flutter apps, and Web apps.",
  },
  {
    question: "What type of websites does Solnary develop?",
    answer:
      "Solnary develops Business Websites, E-Commerce (Custom or CMS), ReactJs/Angular/Vue Web applications, WordPress sites, Shopify stores, Portfolios, Real Estate Web Projects, Social Media sites, and more.",
  },
  {
    question: "Is Solnary specialized in website and app maintenance?",
    answer:
      "Yes, Solnary maintains websites and apps by providing different packages. Customers can choose from simple, affordable packages to custom packages designed to meet specific needs.",
  },
  {
    question: "Does Solnary have SEO packages?",
    answer:
      "Yes, Solnary offers Search Engine Optimization (SEO) packages. Please see our service section for more details.",
  },
  {
    question: "Is there a custom project option available?",
    answer:
      "Yes, the Solnary development team can meet custom project requirements. Please contact one of our representatives via the 'Contact Us' section.",
  },
  {
    question: "How do I contact Solnary?",
    answer:
      "You can contact Solnary via email at Sales@solnary.com for sales inquiries or Info@solnary.com for general inquiries. You can also submit your inquiry directly through the 'Contact Us' section on our website.",
  },
  {
    question: "Why do I have to sign up?",
    answer:
      "Signing up allows customers to see the progress of their project and communicate directly with our development team through our website www.Solnary.com.",
  },
  {
    question: "Can I see the progress of my project from the Solnary website?",
    answer:
      "Yes, customers can see the progress of their project and communicate with our development team directly through their account.",
  },
  {
    question: "Can I request changes from the dashboard?",
    answer:
      "Yes, customers can see project progress, communicate with the development team, and request updates and changes directly from the dashboard.",
  },
  {
    question: "How long do projects take?",
    answer:
      "Project duration varies case by case, ranging from two weeks to several months. Solnary provides a time estimate for each customer after gathering all necessary project information.",
  },
  {
    question: "Why do I need monthly packages?",
    answer:
      "Solnary offers monthly packages to ease the workload for customers. These packages, including custom options, are designed to keep websites functioning optimally through critical maintenance and to enhance each client's success in web and app aspects.",
  },
];

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className=" py-20 w-full">
      <div className=" mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FAQ
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Frequently asked questions
        </motion.p>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="text-white hover:text-[#F47458] transition-colors"
              >
                {faq.question}
              </AccordionTrigger>
              <AnimatePresence>
                {expandedIndex === index && (
                  <AccordionContent forceMount>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-400">{faq.answer}</p>
                    </motion.div>
                  </AccordionContent>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
