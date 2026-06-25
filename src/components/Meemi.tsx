type MeemiProps = {
  className?: string;
  /** Eye / mouth expression */
  mood?: "happy" | "wink" | "love" | "wave";
  title?: string;
};

/**
 * Meemi — the Sakura Speak mascot.
 * Default look: white fur, blue eyes, soft pink cheeks. Built as pure SVG
 * so it scales crisply everywhere and inherits brand colors via CSS vars.
 */
export default function Meemi({
  className,
  mood = "happy",
  title = "Meemi, the Sakura Speak mascot",
}: MeemiProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <radialGradient id="meemi-body" cx="42%" cy="34%" r="72%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="78%" stopColor="#fff5f9" />
          <stop offset="100%" stopColor="#ffe6f0" />
        </radialGradient>
        <radialGradient id="meemi-eye" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#bfeaff" />
          <stop offset="55%" stopColor="#8fd6ff" />
          <stop offset="100%" stopColor="#5cb8ee" />
        </radialGradient>
        <linearGradient id="meemi-ear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffe1ec" />
        </linearGradient>
      </defs>

      {/* soft shadow */}
      <ellipse cx="120" cy="214" rx="62" ry="12" fill="#f7a8c4" opacity="0.18" />

      {/* ears */}
      <g>
        <path
          d="M70 70 C58 34 70 18 86 30 C96 38 100 54 100 70 Z"
          fill="url(#meemi-ear)"
          stroke="#ffd6e5"
          strokeWidth="2"
        />
        <path d="M78 58 C72 42 78 34 86 40 C90 46 92 54 92 62 Z" fill="#ffc2d8" />
        <path
          d="M170 70 C182 34 170 18 154 30 C144 38 140 54 140 70 Z"
          fill="url(#meemi-ear)"
          stroke="#ffd6e5"
          strokeWidth="2"
        />
        <path
          d="M162 58 C168 42 162 34 154 40 C150 46 148 54 148 62 Z"
          fill="#ffc2d8"
        />
      </g>

      {/* head / body */}
      <circle
        cx="120"
        cy="124"
        r="74"
        fill="url(#meemi-body)"
        stroke="#ffd6e5"
        strokeWidth="2.5"
      />

      {/* sakura flower accent on the ear */}
      <g transform="translate(158 44)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse
            key={a}
            cx="0"
            cy="-7"
            rx="4.4"
            ry="6.6"
            fill="#f7a8c4"
            transform={`rotate(${a})`}
          />
        ))}
        <circle r="2.6" fill="#ffce4d" />
      </g>

      {/* cheeks */}
      <ellipse cx="82" cy="138" rx="13" ry="9" fill="#ffb3cf" opacity="0.75" />
      <ellipse cx="158" cy="138" rx="13" ry="9" fill="#ffb3cf" opacity="0.75" />

      {/* eyes */}
      {mood === "wink" ? (
        <>
          <path
            d="M86 116 q12 -10 24 0"
            fill="none"
            stroke="#4a3340"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="146" cy="118" r="15" fill="url(#meemi-eye)" />
          <circle cx="141" cy="113" r="5" fill="#ffffff" />
          <circle cx="150" cy="122" r="2.4" fill="#ffffff" opacity="0.8" />
        </>
      ) : mood === "love" ? (
        <>
          {[94, 146].map((cx) => (
            <path
              key={cx}
              d={`M${cx} 124 c -8 -12 -22 -4 -11 7 l 11 11 l 11 -11 c 11 -11 -3 -19 -11 -7 Z`}
              fill="#ec6fa0"
            />
          ))}
        </>
      ) : (
        <>
          <circle cx="94" cy="118" r="15" fill="url(#meemi-eye)" />
          <circle cx="89" cy="113" r="5" fill="#ffffff" />
          <circle cx="98" cy="122" r="2.4" fill="#ffffff" opacity="0.8" />
          <circle cx="146" cy="118" r="15" fill="url(#meemi-eye)" />
          <circle cx="141" cy="113" r="5" fill="#ffffff" />
          <circle cx="150" cy="122" r="2.4" fill="#ffffff" opacity="0.8" />
        </>
      )}

      {/* nose + mouth */}
      <ellipse cx="120" cy="138" rx="4" ry="3" fill="#ec6fa0" />
      <path
        d="M120 141 q-9 11 -18 4 M120 141 q9 11 18 4"
        fill="none"
        stroke="#4a3340"
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      {/* waving paw */}
      {mood === "wave" && (
        <g className="origin-[196px_150px] animate-float">
          <ellipse
            cx="196"
            cy="150"
            rx="16"
            ry="18"
            fill="url(#meemi-body)"
            stroke="#ffd6e5"
            strokeWidth="2.5"
          />
          <ellipse cx="196" cy="156" rx="8" ry="6" fill="#ffc2d8" />
        </g>
      )}
    </svg>
  );
}
