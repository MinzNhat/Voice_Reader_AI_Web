import Hero from "@/components/hero";
import ProblemSolution from "@/components/problem-solution";
import Workflow from "@/components/workflow";
import Partners from "@/components/partners";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";
import Pricing from "@/components/pricing";
import NextSteps from "@/components/next-steps";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Reveal from "@/components/ui/reveal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <ProblemSolution />
      </Reveal>
      <Reveal>
        <Workflow />
      </Reveal>
      <Reveal>
        <Partners />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <NextSteps />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}
