import heroImg from "@/assets/hero-beach-house.jpg";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
        <img
          src={heroImg}
          alt="The Beach House exterior with tropical garden and ocean views"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
