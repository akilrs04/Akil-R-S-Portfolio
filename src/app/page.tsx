import { Loader } from "@/components/common/Loader";
import { HeroSection } from "@/components/home/HeroSection";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Loader />
      <HeroSection />
      <ShowcaseSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

