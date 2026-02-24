import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map placeholder */}
          <div className="rounded-lg overflow-hidden h-[300px] bg-ocean-light">
            <iframe
              title="Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=153.08%2C-26.58%2C153.12%2C-26.55&layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* Description */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Location</h2>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4" />
              <p className="text-sm opacity-90">
                Marcoola / Sunshine Coast, Queensland, Australia
              </p>
            </div>
            <p className="leading-relaxed opacity-90 mb-4">
              Marcoola Beach is ideally located on the Sunshine Coast and around 15 minutes south of
              the capital of Queensland. It is a quiet beachside suburb with a small boutique
              shopping area with cafes and restaurants.
            </p>
            <p className="leading-relaxed opacity-90">
              The Marcoola Surf Club provides a safe patrolled beach. The beach is less than 300
              metres walk across the road. It is a great surfing beach with good fishing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
