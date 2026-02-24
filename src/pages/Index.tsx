import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import SpaceSection from "@/components/SpaceSection";
import FeaturesSection from "@/components/FeaturesSection";
import LocationSection from "@/components/LocationSection";
import BookingBar from "@/components/BookingBar";
import ThingsToNote from "@/components/ThingsToNote";
import ReviewsSection from "@/components/ReviewsSection";
import HostSection from "@/components/HostSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <OverviewSection />
      <SpaceSection />
      <FeaturesSection />
      <LocationSection />
      <BookingBar />
      <ThingsToNote />
      <ReviewsSection />
      <HostSection />
      <footer className="bg-foreground py-6 text-center">
        <p className="text-sm text-background/60">
          © 2025 The Beach House — Marcoola Beach, Sunshine Coast
        </p>
      </footer>
    </div>
  );
};

export default Index;
