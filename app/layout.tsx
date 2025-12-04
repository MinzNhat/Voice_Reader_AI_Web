import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoiceReaderAI · NAVER Vietnam AI Hackathon",
  description:
    "VoiceReaderAI keeps ADHD and dyslexic readers focused by narrating any screen with CLOVA Voice and Gemini summaries.",
  icons: {
    icon: "/public/logo_2.png",
    shortcut: "/public/logo_2.png",
    apple: "/public/logo_2.png",
  },
  openGraph: {
    title: "VoiceReaderAI",
    description:
      "Instant audio + AI summaries for every screen. Built for NAVER Vietnam AI Hackathon 2025.",
    images: [
      {
        url: "/preview.png",
        width: 1316,
        height: 768,
        alt: "VoiceReaderAI Landing Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceReaderAI",
    description:
      "Instant audio + AI summaries for every screen. Built for NAVER Vietnam AI Hackathon 2025.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
