import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { GallerySection } from "./sections/GallerySection";
import { InteriorSection } from "./sections/InteriorSection";
import { MenuSection } from "./sections/MenuSection";
import { PhilosophySection } from "./sections/PhilosophySection";

export const MySoul = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col">
      <div className="animate-fade-in-up">
        <PhilosophySection />
      </div>
      <div className="animate-fade-in-up animation-delay-200">
        <MenuSection />
      </div>
      <div className="animate-fade-in-up animation-delay-400">
        <InteriorSection />
      </div>
      <div className="animate-fade-in-up animation-delay-600">
        <FeaturesSection />
      </div>
      <div className="animate-fade-in-up animation-delay-800">
        <AboutSection />
      </div>
      <div className="animate-fade-in-up animation-delay-1000">
        <ContactSection />
      </div>
      <div className="animate-fade-in-up animation-delay-1200">
        <GallerySection />
      </div>
    </div>
  );
};
