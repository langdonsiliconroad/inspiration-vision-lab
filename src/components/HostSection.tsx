import hostImg from "@/assets/host-craig.jpg";

const HostSection = () => {
  return (
    <section className="py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Host</h2>
        <img
          src={hostImg}
          alt="Craig, your host"
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-primary-foreground/30"
          loading="lazy"
        />
        <h3 className="text-xl font-bold mb-3">Craig</h3>
        <p className="opacity-90 leading-relaxed mb-6 max-w-lg mx-auto">
          I love surfing, diving, trekking any outdoors adventure, so can help you
          with exploring local activities if you like. This is our beach house on the Sunshine Coast,
          a short distance away and can be contacted if needed.
        </p>
        <a
          href="mailto:contact@thebeachhouse.com"
          className="inline-block bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Contact Craig
        </a>
      </div>
    </section>
  );
};

export default HostSection;
