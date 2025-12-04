"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Pricing() {
  const plans = [
    {
      name: "Focus Free",
      desc: "Instant listening + notes for \n personal use",
      price: 0,
      isMostPop: false,
      features: [
        "Unlimited live listening",
        "CLOVA OCR for any mobile screen",
        "Gemini daily summary",
        "Note export to email",
      ],
    },
    {
      name: "Focus Pro",
      desc: "Power users who want \n AI summaries + org",
      price: 19,
      isMostPop: true,
      features: [
        "Everything in Free",
        "Advanced Gemini synthesis + action items",
        "Foldered note library",
        "Cross-device sync (Android + desktop overlay)",
        "Priority beta invites",
      ],
    },
    {
      name: "Team Sync",
      desc: "Schools & companies deploying \n VoiceReaderAI",
      price: 49,
      isMostPop: false,
      features: [
        "Everything in Pro",
        "Shared Pinecone knowledge spaces",
        "Admin dashboards + governance",
        "Dedicated success engineer",
        "SLA + private Naver Cloud deployments",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full max-w-7xl mx-auto px-4 py-24 md:px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 flex flex-col gap-3"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Pricing built around focus
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground text-center">
          Freemium for everyday readers, scalable plans for classrooms and teams piloting VoiceReaderAI after the NAVER Hackathon.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative ${plan.isMostPop ? "scale-105" : ""}`}
          >
            <Card
              className={`relative h-full ${plan.isMostPop ? "border-2 border-primary shadow-xl" : ""
                } flex flex-col`}
            >
              {plan.isMostPop && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-card border-2 border-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-6 pt-8 flex h-full flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
                    {plan.desc}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-4 border-t border-border/60">
                  <Button
                    className="w-full"
                    variant={plan.isMostPop ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.price === 0 ? "Get Started Free" : "Choose Plan"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
