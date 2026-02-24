import {
  Wifi, UtensilsCrossed, Car, Snowflake, Dog, Laptop,
  Waves, Gamepad2, Tv
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: UtensilsCrossed, label: "Kitchen" },
  { icon: Car, label: "Free parking" },
  { icon: Snowflake, label: "Air conditioning" },
  { icon: Waves, label: "Pool" },
  { icon: Dog, label: "Pet friendly" },
  { icon: Laptop, label: "Laptop friendly" },
  { icon: Gamepad2, label: "Games" },
  { icon: Tv, label: "Smart TV" },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Features</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          A sparkling inground swimming pool is the central feature of the extensive outdoor area,
          with a covered alfresco, sun loungers, gas BBQ and flat lawn area for a game of backyard
          cricket or surrounded by well-established gardens.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
          {amenities.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3"
            >
              <a.icon className="h-5 w-5 text-secondary-foreground" />
              <span className="text-sm font-medium text-secondary-foreground">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
