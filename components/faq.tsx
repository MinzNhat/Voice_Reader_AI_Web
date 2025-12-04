"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What makes VoiceReaderAI unique?",
      content: (
        <div className="text-muted-foreground">
          We designed the overlay with ADHD and dyslexic readers, so listening,
          summarizing, and note-taking happen the moment focus slips. No copying
          text, no swapping apps - the app stays on top of any screen.
        </div>
      ),
    },
    {
      title: "How does the business model work?",
      content: (
        <div className="text-muted-foreground">
          Freemium: free listening + daily summary. Focus Pro unlocks advanced
          Gemini syntheses and syncing, while Team Sync brings shared Pinecone
          spaces, governance, and SLAs for schools or companies.
        </div>
      ),
    },
    {
      title: "Why will readers actually use this?",
      content: (
        <div className="text-muted-foreground">
          Because it reduces cognitive drag. VoiceReaderAI reads for them,
          explains what matters, and remembers key points automatically so they
          can keep scrolling without guilt.
        </div>
      ),
    },
    {
      title: "What powers the hackathon demo?",
      content: (
        <div className="text-muted-foreground">
          CLOVA OCR + Voice, Gemini via LangChain, Pinecone vector DB, Express.js
          APIs, Naver Cloud deploy, and Android Jetpack for the overlay UI.
        </div>
      ),
    },
    {
      title: "How do I try VoiceReaderAI?",
      content: (
        <div className="text-muted-foreground">
          Download the beta, enable accessibility permissions for the overlay,
          and tap a region of the screen. You instantly hear audio, receive a
          summary, and get clean notes saved to your Pinecone-backed library.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="faq"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
