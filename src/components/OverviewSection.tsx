import { Users, Bath, BedDouble, Waves, MapPin, Wifi } from "lucide-react";
import poolImg from "@/assets/pool-area.jpg";

const highlights = [
  { icon: Users, label: "10", sub: "Guests" },
  { icon: Bath, label: "5", sub: "Bathrooms" },
  { icon: BedDouble, label: "7", sub: "Beds" },
];

const perks = [
  { icon: Waves, text: "Pool", desc: "Hot and sparkling, with lots of privacy" },
  { icon: MapPin, text: "Close to the beach", desc: "Just a few minutes walk away" },
  { icon: Wifi, text: "Free WiFi", desc: "High speed internet throughout" },
];

const OverviewSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left card */}
          <div className="bg-primary rounded-lg p-8 text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Entire spacious house to yourself
            </h2>
            <div className="flex gap-6 mb-6">
              {highlights.map((h) => (
                <div key={h.sub} className="text-center">
                  <h.icon className="h-5 w-5 mx-auto mb-1 opacity-80" />
                  <p className="text-2xl font-bold">{h.label}</p>
                  <p className="text-xs uppercase tracking-wider opacity-80">{h.sub}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {perks.map((p) => (
                <div key={p.text} className="flex items-start gap-3">
                  <p.icon className="h-5 w-5 mt-0.5 opacity-80" />
                  <div>
                    <p className="font-semibold">{p.text}</p>
                    <p className="text-sm opacity-80">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right description */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Perfect for anyone seeking a relaxed coastal break, this contemporary vacation house
              with ducted air conditioning and a fully fenced yard is spacious and positioned within
              the quiet beachside pocket of Marcoola Beach.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a relaxed open plan living space including a lounge and media room with TV, DVD
              and sound system as well as high ceilings and striking timber flooring, you&apos;re in for a
              comfortable and modern vacation experience. Family friendly, pet friendly and just
              footsteps from the sand and surf of patrolled Marcoola Beach — this home is sure to
              tick all the boxes.
            </p>
            <img
              src={poolImg}
              alt="Swimming pool with sun loungers"
              className="rounded-lg w-full h-48 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
