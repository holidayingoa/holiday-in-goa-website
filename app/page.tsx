import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedTours from "@/components/FeaturedTours";
import WhyUs from "@/components/WhyUs";
import OfferBand from "@/components/OfferBand";
import MoodGrid from "@/components/MoodGrid";
import Reviews from "@/components/Reviews";
import BlogTeaser from "@/components/BlogTeaser";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedTours />
      <WhyUs />
      <OfferBand />
      <MoodGrid />
      <Reviews />
      <BlogTeaser />
      <FinalCTA />
    </main>
  );
}
