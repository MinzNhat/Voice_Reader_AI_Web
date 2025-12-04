"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function Partners() {
  const stack = [
    { name: "CLOVA OCR", detail: "High-accuracy text extraction", logo: "/clova_ocr.png", logoBg: "bg-white" },
    { name: "CLOVA Voice", detail: "Natural TTS streaming", logo: "/clova_voice.png", logoBg: "bg-white" },
    { name: "Gemini", detail: "Reasoning + summaries", logo: "/gemini.png", logoBg: "bg-white" },
    { name: "LangChain", detail: "Retrieval orchestration", logo: "/langchain.png", logoBg: "bg-white" },
    { name: "Pinecone", detail: "Long-term memory", logo: "/pinecone.png", logoBg: "bg-white" },
    { name: "Express.js", detail: "Realtime API layer", logo: "/expressjs.png", logoBg: "bg-white" },
    { name: "Naver Cloud", detail: "Deploy + security", logo: "/naver_cloud.jpg", logoBg: "bg-white" },
    { name: "Android Jetpack", detail: "Floating overlay UX", logo: "/jetpack.jpg", logoBg: "bg-white" },
  ];

  return (
    <section
      id="tech"
      className="max-w-6xl w-full mx-auto px-4 py-24 gap-10 md:px-8 flex flex-col justify-center items-center text-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          NAVER-friendly AI stack
        </h2>
        <p className="text-sm text-muted-foreground">
          Every layer is already compatible with NAVER Cloud services.
        </p>
      </motion.div>
      <TooltipProvider>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, index) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
                  whileInView={{
                    y: 0,
                    filter: "blur(0px)",
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.05,
                    type: "spring",
                    bounce: 0,
                  }}
                  className="rounded-2xl border bg-card/80 px-5 py-6 text-left shadow-sm flex flex-col gap-4 hover:-translate-y-1 hover:border-primary/40 transition-all h-full"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "size-11 rounded-xl border border-border/60 flex items-center justify-center",
                        item.logoBg ?? "bg-card"
                      )}
                    >
                      <div className="relative size-10 overflow-hidden rounded-xl aspect-square w-10! h-10!">
                        <Image
                          src={item.logo}
                          alt={`${item.name} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-lg font-semibold leading-tight">{item.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>{item.detail}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}
