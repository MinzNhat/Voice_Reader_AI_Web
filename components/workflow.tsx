"use client";

import { motion } from "framer-motion";

const steps = [
    {
        title: "Text Extraction",
        description:
            "Capture PDFs, images, or live screens. CLOVA OCR cleans noisy text with >98% accuracy, even on messy scans.",
        bullets: ["Screenshots, PDFs, in-app text", "Latency under 1.2s", "Privacy-preserving pipeline"],
    },
    {
        title: "AI Understanding (RAG)",
        description:
            "Embeddings land in Pinecone, LangChain orchestrates retrieval, and Gemini answers, summarizes, and reinforces.",
        bullets: ["Context-aware prompts", "Session memory", "Interactive Q&A"],
    },
    {
        title: "Text-to-Speech",
        description:
            "CLOVA Voice streams natural audio back instantly so users can keep scrolling while listening.",
        bullets: ["Multi-voice library", "Offline caching", "Adaptive playback"],
    },
];

const lanes = [
    {
        name: "Path A · Understanding",
        detail: "Embeddings + Gemini deliver summaries, flashcards, and follow-up answers.",
    },
    {
        name: "Path B · Listening",
        detail: "CLOVA Voice streams narration in under two seconds for zero-friction focus.",
    },
];

export default function Workflow() {
    return (
        <section
            id="how-it-works"
            className="w-full max-w-6xl mx-auto px-4 py-24 md:px-6 space-y-12"
        >
            <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-3"
            >
                <span className="text-sm uppercase tracking-[0.25em] text-primary/70">
                    How it works
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold">
                    One capture, two powerful paths
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    VoiceReaderAI turns any on-screen text into instant audio plus AI insights, so comprehension keeps pace with curiosity.
                </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ y: 24, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="rounded-2xl border bg-card p-6 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            {step.description}
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {step.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {lanes.map((lane, index) => (
                    <motion.div
                        key={lane.name}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="rounded-2xl border bg-muted/30 p-6"
                    >
                        <p className="text-sm font-semibold text-primary mb-2">
                            {lane.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{lane.detail}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
