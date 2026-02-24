import { Star } from "lucide-react";

const reviews = [
  {
    name: "Wendy",
    date: "September 2023",
    text: "Great space for the extended family. Loved the family-size rooms and the heated pool! Bedrooms are the spaces in between. WiFi is fast, own Netflix, easy.",
  },
  {
    name: "Ronald",
    date: "June 2022",
    text: "The house was great. We had three young children, plenty of room and space to run around. The backyard is excellent and a very short walk to the beach as well.",
  },
  {
    name: "Stephen",
    date: "June 2024",
    text: "Amazing house, close to Marcoola beach and beautiful coffee shops. Got well lit rooms to many bathrooms and catering rooms. Way more valuable than any Airbnb.",
  },
  {
    name: "Simon",
    date: "August 2020",
    text: "This house was perfect. We had three young children, plenty of room and space to run. The backyard is excellent and a very short walk to the beach as well.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Reviews</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <h3 className="font-bold text-foreground">{r.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{r.date}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
