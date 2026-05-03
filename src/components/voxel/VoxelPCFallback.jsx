export function VoxelPCFallback() {
  return (
    <svg
      viewBox="0 0 320 280"
      className="w-full max-w-[360px] md:max-w-[420px] h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="case" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d9cdb8" />
          <stop offset="1" stopColor="#9e9279" />
        </linearGradient>
        <linearGradient id="screen" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2a1f1a" />
          <stop offset="1" stopColor="#120a08" />
        </linearGradient>
      </defs>
      <rect x="40" y="175" width="230" height="60" fill="url(#case)" />
      <rect x="40" y="175" width="230" height="6" fill="#efe3ce" />
      <rect x="120" y="195" width="60" height="16" fill="#1a1410" />
      <rect x="190" y="195" width="60" height="16" fill="#1a1410" />
      <rect x="60" y="40" width="200" height="150" fill="url(#case)" />
      <rect x="60" y="40" width="200" height="8" fill="#efe3ce" />
      <rect x="78" y="58" width="164" height="112" fill="#0e0708" />
      <rect x="82" y="62" width="156" height="104" fill="url(#screen)" />
      {Array.from({ length: 90 }).map((_, i) => {
        const x = 86 + (i % 18) * 8;
        const y = 66 + Math.floor(i / 18) * 16;
        const isPeach = (i * 7) % 5 !== 0;
        const h = 4 + ((i * 13) % 10);
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="5"
            height={h}
            fill={isPeach ? "#e8a87c" : "#6ec7bd"}
            opacity={0.4 + ((i * 3) % 6) / 10}
          />
        );
      })}
      <rect x="70" y="240" width="190" height="30" fill="#2a231d" />
      <rect x="70" y="240" width="190" height="4" fill="#4a3e34" />
      <rect x="278" y="228" width="24" height="16" fill="#d9cdb8" />
      <path
        d="M278 244 Q 300 260 280 270"
        stroke="#4a3e34"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M42 245 Q 10 260 20 272"
        stroke="#4a3e34"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
