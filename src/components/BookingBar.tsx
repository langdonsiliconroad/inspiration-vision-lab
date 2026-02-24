import { DollarSign } from "lucide-react";

const BookingBar = () => {
  return (
    <section className="py-12 md:py-16 bg-sand">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground line-through">FROM</span>
          <span className="text-3xl md:text-4xl font-bold text-foreground flex items-center">
            <DollarSign className="h-7 w-7" />237
            <span className="text-base font-normal text-muted-foreground ml-1">/night</span>
          </span>
        </div>
        <p className="text-muted-foreground mb-6">
          Check availability and book your perfect beach getaway
        </p>
        <button className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-lg">
          Check Rates & Availability
        </button>
      </div>
    </section>
  );
};

export default BookingBar;
