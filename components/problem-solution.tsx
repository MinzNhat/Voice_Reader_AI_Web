"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
    const problemPoints = [
        "Long-form reading drains focus and energy within minutes",
        "ADHD and dyslexic readers must constantly re-read to retain anything",
        "Existing screen readers require app switching and manual copy/paste",
    ];

    const solutionPoints = [
        "Floating overlay captures any on-screen text instantly",
        "CLOVA OCR + Voice delivers human-like narration and summaries",
        "Automatic clean notes keep key ideas organized without extra effort",
    ];

    const startSteps = [
        "Download VoiceReaderAI beta",
        "Enable the floating overlay permission",
        "Tap any screen to hear audio, summary, and saved notes",
    ];

    return (
        <section
            id="problem"
            className="w-full max-w-6xl mx-auto px-4 py-24 md:px-6 grid gap-12"
        >
            <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-3"
            >
                <span className="text-sm uppercase tracking-[0.2em] text-primary/70">
                    VoiceReaderAI · NAVER Vietnam AI Hackathon 2025
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Built for readers who lose focus, then lose momentum
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    VoiceReaderAI keeps attention anchored by reading aloud, explaining,
                    and remembering every screen so users stay in the flow instead of
                    fighting distractions.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="p-6 rounded-2xl border bg-card/60 backdrop-blur"
                >
                    <p className="text-sm font-semibold text-red-500">The Problem</p>
                    <h3 className="text-2xl font-semibold mt-2">Reading is exhausting</h3>
                    <ul className="mt-4 space-y-3 text-muted-foreground">
                        {problemPoints.map((point) => (
                            <li key={point} className="flex gap-3">
                                <span className="mt-1 size-2 rounded-full bg-red-400"></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-6 rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-background"
                >
                    <p className="text-sm font-semibold text-primary">Our Solution</p>
                    <h3 className="text-2xl font-semibold mt-2">
                        Instant audio, summary, and notes for any screen
                    </h3>
                    <ul className="mt-4 space-y-3 text-muted-foreground">
                        {solutionPoints.map((point) => (
                            <li key={point} className="flex gap-3">
                                <span className="mt-1 size-2 rounded-full bg-primary"></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-2xl border bg-muted/30"
            >
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    ADHD user insight
                </p>
                <p className="text-lg md:text-xl font-medium mt-2 text-foreground">
                    “I always drift off when reading on my phone. With VoiceReaderAI reading
                    things out loud and summarizing them, I finally stay engaged - it feels
                    like the app is focusing for me.”
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl border bg-card p-6"
            >
                <p className="text-sm font-semibold text-primary mb-4">How to get started</p>
                <div className="grid gap-4 md:grid-cols-3">
                    {startSteps.map((step, index) => (
                        <div key={step} className="flex gap-3">
                            <div className="min-w-10 min-h-8 rounded-full border border-primary/40 flex items-center justify-center font-semibold">
                                {index + 1}
                            </div>
                            <p className="text-sm text-muted-foreground text-center flex justify-center items-center">{step}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
