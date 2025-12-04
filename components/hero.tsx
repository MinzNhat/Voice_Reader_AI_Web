"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaAndroid } from "react-icons/fa";

const highlights = [
  "CLOVA OCR + Voice = instant narration",
  "Gemini + LangChain summaries",
  "Pinecone memory keeps context",
];

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section className="max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
        >
          <span className="w-fit text-xs sm:text-sm bg-card px-3 py-1 border border-border rounded-full tracking-[0.2em] uppercase flex items-center gap-2">
            <Image
              src="/logo_2.png"
              alt="VoiceReaderAI logo"
              width={28}
              height={28}
              className="h-6 w-6"
              priority
            />
            NAVER Vietnam AI Hackathon 2025
          </span>
          <h1 className="text-4xl font-semibold tracking-tighter mx-auto md:text-6xl text-pretty bg-linear-to-b from-sky-600 dark:from-sky-300 to-foreground bg-clip-text text-transparent">
            Your mobile reading assistant that never loses focus
          </h1>
          <p className="max-w-3xl text-lg mx-auto text-muted-foreground text-balance">
            Turn on the floating overlay and VoiceReaderAI reads any screen aloud, summarizes it with Gemini, and stores clean notes automatically. No app switching, no copy-paste, just instant audio + AI understanding.
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="items-center justify-center gap-3 flex flex-col sm:flex-row"
          >
            <Button asChild size="lg" className="shadow-lg gap-2">
              <a href="/voicereaderai.apk" download className="flex items-center gap-2">
                <FaAndroid className="text-xl" />
                Download APK
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#how-it-works">See the architecture</Link>
            </Button>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-3 w-full mt-6">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none"
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-15 sm:rotate-35 will-change-transform"></div>
        </div>
      </motion.div>
    </div>
  );
}
