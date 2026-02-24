import { BedDouble } from "lucide-react";
import bedroomMain from "@/assets/bedroom-main.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import bedroom3 from "@/assets/bedroom-3.jpg";

const rooms = [
  { img: bedroomMain, title: "Main Bedroom", desc: "1 King Bed", detail: "Ensuite, aircon, ocean views and balcony" },
  { img: bedroom2, title: "Bedroom 2", desc: "1 Queen Bed", detail: "Bright, airy room with ensuite bath" },
  { img: bedroom3, title: "Bedroom 3", desc: "2 Single Beds", detail: "Single twins with small wardrobe" },
];

const SpaceSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Space</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Five bedrooms are spread across the two levels, with a spacious bedroom on the ground floor for those
          who may find it difficult to navigate stairs, with a separate toilet on the ground level as well.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.title} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={room.img} alt={room.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <BedDouble className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-foreground">{room.title}</h3>
                </div>
                <p className="text-sm font-medium text-primary">{room.desc}</p>
                <p className="text-xs text-muted-foreground mt-1">{room.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
