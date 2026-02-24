import { Palmtree } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary py-6 text-center">
      <div className="flex items-center justify-center gap-3 mb-1">
        <Palmtree className="h-10 w-10 text-primary-foreground" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-wide">
        THE BEACH HOUSE
      </h1>
      <p className="text-primary-foreground/80 text-sm mt-1 tracking-widest uppercase">
        Marcoola Beach, Sunshine Coast
      </p>
    </header>
  );
};

export default Header;
