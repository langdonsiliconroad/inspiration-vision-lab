import { Clock, Ban, PawPrint, LogOut } from "lucide-react";

const notes = [
  { icon: Clock, title: "Check in time", value: "From 2pm" },
  { icon: LogOut, title: "Check out", value: "Before 10am" },
  { icon: Ban, title: "No smoking", value: "Inside the house or in yard" },
  { icon: Ban, title: "No parties or events", value: "This is a quiet residential area" },
  { icon: PawPrint, title: "Pets allowed", value: "Please confirm before booking" },
];

const ThingsToNote = () => {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Things to Note</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {notes.map((n) => (
            <div key={n.title} className="flex items-start gap-3">
              <n.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{n.title}</p>
                <p className="text-sm text-muted-foreground">{n.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToNote;
