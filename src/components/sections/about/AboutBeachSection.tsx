export default function AboutBeachSection() {
  return (
    <section
      className="w-full min-w-0 overflow-hidden bg-white"
      aria-label="Our vibe"
    >
      <div className="relative w-full">
        <div
          className="absolute inset-x-0 bottom-0 h-[45%] bg-primary pointer-events-none"
          aria-hidden
        />
        <img
          src="/assets/about-beach.svg"
          alt="Scribble — creative space and relaxed inspiration"
          className="relative block w-full min-w-full h-auto object-cover object-center"
          decoding="async"
        />
      </div>
    </section>
  );
}
