"use client";

import { useLenis } from "@/hooks/use-lenis";
import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";
import { About } from "@/components/sections/about";
import { Courses } from "@/components/sections/courses";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Facilities } from "@/components/sections/facilities";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Achievements } from "@/components/sections/achievements";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  useLenis();

  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Courses />
      <WhyChooseUs />
      <Facilities />
      <Testimonials />
      <Achievements />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}
