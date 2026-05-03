export function Scanlines() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(232, 168, 124, 0.15) 2px, rgba(232, 168, 124, 0.15) 3px)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[99]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />
    </>
  );
}
