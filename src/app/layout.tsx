import type { Metadata } from "next";
import { poppins, inter } from "@/lib/fonts";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { MouseGlow } from "@/components/shared/mouse-glow";
import { BackToTop } from "@/components/shared/back-to-top";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { AnimatedCursor } from "@/components/shared/animated-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "After School Learning Center | Best Coaching Institute in Meerut",
  description:
    "After School Learning Center provides personalized coaching, homework support, mathematics, science, English, and skill development classes for students in Meerut.",
  keywords: [
    "After School Learning Center",
    "Coaching in Meerut",
    "Best Tuition Centre",
    "Homework Classes",
    "School Coaching",
    "Education Center Meerut",
    "Math Coaching",
    "Science Coaching",
    "English Classes",
  ],
  openGraph: {
    title: "After School Learning Center | Best Coaching Institute in Meerut",
    description:
      "After School Learning Center provides personalized coaching, homework support, mathematics, science, English, and skill development classes for students in Meerut.",
    type: "website",
    locale: "en_IN",
    siteName: "After School Learning Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "After School Learning Center | Best Coaching Institute in Meerut",
    description:
      "After School Learning Center provides personalized coaching, homework support, mathematics, science, English, and skill development classes for students in Meerut.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://afterschoollearningcenter.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/images/hero-bg.png)" }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10">
          <LoadingScreen />
          <div className="noise-overlay" />
          <ScrollProgress />
          <MouseGlow />
          <AnimatedCursor />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                name: "After School Learning Center",
                description:
                  "After School Learning Center provides personalized coaching, homework support, mathematics, science, English, and skill development classes for students in Meerut.",
                url: "https://afterschoollearningcenter.in",
                telephone: "+918433035613",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "T Point, Taxsila School Road, Near Naale Ki Puliya, Hari Nagar, Kanker Khera",
                  addressLocality: "Meerut",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "250001",
                  addressCountry: "IN",
                },
                foundingDate: "2021",
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://afterschoollearningcenter.in" },
                  { "@type": "ListItem", position: 2, name: "Courses", item: "https://afterschoollearningcenter.in/#courses" },
                  { "@type": "ListItem", position: 3, name: "Contact", item: "https://afterschoollearningcenter.in/#contact" },
                ],
              }),
            }}
          />
        </div>
      </body>
    </html>
  );
}
