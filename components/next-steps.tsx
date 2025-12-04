"use client";

import { motion } from "framer-motion";

const roadmap = [
    {
        title: "Public Beta Launch",
        description:
            "Ship the Android beta to ADHD and dyslexic communities, gather OCR/TTS feedback, and fine-tune UX loops before scaling.",
        label: "Now",
    },
    {
        title: "Expand Platform Support",
        description:
            "Bring overlays to iOS and desktop, letting users keep the same notes library across every screen they read on.",
        label: "Q2",
    },
    {
        title: "Improve AI Understanding",
        description:
            "Deepen the RAG system with contextual summaries, spaced-repetition prompts, and voice-driven Q&A to reinforce learning.",
        label: "Q3",
    },
    {
        title: "Marketing & Partnerships",
        description:
            "Co-create pilots with schools, accessibility advocates, and enterprises to prove measurable gains in focus.",
        label: "Q4",
    },
];

export default function NextSteps() {
    return (
        <section
            id="next-steps"
            className="w-full max-w-5xl mx-auto px-4 py-24 md:px-6 space-y-10"
        >
            <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-3"
            >
                <span className="text-sm uppercase tracking-[0.3em] text-primary/70">
                    Next steps
                </span>
                <h2 className="text-3xl font-semibold">What we build after the hackathon</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Each milestone makes VoiceReaderAI a calmer companion for distracted readers - and a stronger contender for NAVER Vietnam AI Hackathon 2025.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
                {roadmap.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ y: 24, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="p-6 rounded-2xl border bg-card/70"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <span className="text-xs uppercase tracking-[0.3em] text-primary">
                                {item.label}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
