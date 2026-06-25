import type { AvatarConfig, AvatarMood } from "@/lib/avatar";

/* ---------- color helpers ---------- */
function clamp(n: number) {
  return Math.max(0, Math.min(255, n));
}
function shade(hex: string, amt: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const f = (c: number) => (amt < 0 ? c * (1 + amt) : c + (255 - c) * amt);
  const to = (c: number) => clamp(Math.round(f(c))).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}

type Props = {
  config: AvatarConfig;
  mood?: AvatarMood;
  uid?: string;
  className?: string;
};

export default function MeemiAvatar({
  config,
  mood = "happy",
  uid = "m",
  className,
}: Props) {
  const fur = config.fur;
  const line = shade(fur, -0.2);
  const furLight = shade(fur, 0.45);
  const earInner = "#ffc2d8";
  const gid = `fur-${uid}`;

  const eye = config.eye;
  const eyeDeep = shade(eye, -0.3);

  return (
    <svg
      viewBox="0 0 300 360"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Your Meemi avatar"
    >
      <defs>
        <radialGradient id={gid} cx="42%" cy="32%" r="75%">
          <stop offset="0%" stopColor={furLight} />
          <stop offset="100%" stopColor={fur} />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="150" cy="346" rx="74" ry="11" fill="#f7a8c4" opacity="0.16" />

      {/* ---------- back hair ---------- */}
      {config.hair && (
        <BackHair style={config.hair} color={config.hairColor} />
      )}

      {/* ---------- legs ---------- */}
      <g stroke={line} strokeWidth="2.5">
        <rect x="129" y="282" width="17" height="34" rx="8.5" fill={fur} />
        <rect x="154" y="282" width="17" height="34" rx="8.5" fill={fur} />
      </g>
      {/* socks */}
      {config.socks && (
        <g>
          <rect x="128" y="300" width="19" height="18" rx="6" fill={config.socks} stroke={shade(config.socks, -0.15)} strokeWidth="2" />
          <rect x="153" y="300" width="19" height="18" rx="6" fill={config.socks} stroke={shade(config.socks, -0.15)} strokeWidth="2" />
        </g>
      )}
      {/* shoes */}
      {config.shoes && (
        <g stroke={shade(config.shoes, -0.2)} strokeWidth="2.5">
          <path d="M124 316 q0 16 12 16 h12 q4 0 4 -6 v-10 q-14 4 -28 0 Z" fill={config.shoes} />
          <path d="M149 316 q0 16 12 16 h12 q4 0 4 -6 v-10 q-14 4 -28 0 Z" fill={config.shoes} />
        </g>
      )}

      {/* ---------- arms (behind torso) ---------- */}
      <g stroke={line} strokeWidth="2.5">
        <ellipse cx="102" cy="236" rx="15" ry="30" fill={fur} transform="rotate(8 102 236)" />
        <ellipse cx="198" cy="236" rx="15" ry="30" fill={fur} transform="rotate(-8 198 236)" />
      </g>

      {/* ---------- torso ---------- */}
      <path
        d="M114 188 C108 212 108 252 122 280 C140 300 160 300 178 280 C192 252 192 212 186 188 Z"
        fill={`url(#${gid})`}
        stroke={line}
        strokeWidth="2.5"
      />

      {/* bottoms */}
      {config.bottom && (
        <path
          d="M120 250 Q150 264 180 250 L176 286 Q168 296 156 288 L150 278 L144 288 Q132 296 124 286 Z"
          fill={config.bottom}
          stroke={shade(config.bottom, -0.18)}
          strokeWidth="2"
        />
      )}

      {/* top */}
      {config.top && (
        <g stroke={shade(config.top, -0.16)} strokeWidth="2">
          {/* sleeves */}
          <ellipse cx="106" cy="212" rx="13" ry="16" fill={config.top} transform="rotate(12 106 212)" />
          <ellipse cx="194" cy="212" rx="13" ry="16" fill={config.top} transform="rotate(-12 194 212)" />
          {/* shirt body */}
          <path
            d="M116 196 Q133 210 150 210 Q167 210 184 196 Q192 226 184 256 Q150 270 116 256 Q108 226 116 196 Z"
            fill={config.top}
          />
          {/* collar */}
          <path d="M136 200 Q150 212 164 200" fill="none" stroke={shade(config.top, -0.22)} strokeWidth="2.4" />
        </g>
      )}

      {/* ---------- ears ---------- */}
      <g stroke={line} strokeWidth="2.5">
        <path d="M96 70 C82 30 96 14 114 30 C124 40 126 58 124 74 Z" fill={fur} />
        <path d="M204 70 C218 30 204 14 186 30 C176 40 174 58 176 74 Z" fill={fur} />
      </g>
      <path d="M104 60 C98 38 106 30 114 38 C118 46 120 56 118 66 Z" fill={earInner} />
      <path d="M196 60 C202 38 194 30 186 38 C182 46 180 56 182 66 Z" fill={earInner} />

      {/* ---------- head ---------- */}
      <circle cx="150" cy="120" r="74" fill={`url(#${gid})`} stroke={line} strokeWidth="2.5" />

      {/* cheeks */}
      {config.cheek && (
        <>
          <ellipse cx="106" cy="144" rx="14" ry="9" fill={config.cheek} opacity="0.8" />
          <ellipse cx="194" cy="144" rx="14" ry="9" fill={config.cheek} opacity="0.8" />
        </>
      )}

      {/* eyes + mouth by mood */}
      <Face mood={mood} eye={eye} eyeDeep={eyeDeep} lashes={config.lashes} />

      {/* nose */}
      <ellipse cx="150" cy="146" rx="4.2" ry="3.2" fill="#ec6fa0" />

      {/* ---------- front hair ---------- */}
      {config.hair && <FrontHair style={config.hair} color={config.hairColor} />}

      {/* ---------- accessory ---------- */}
      {config.accessory && <Accessory id={config.accessory} />}

      {/* ---------- frame ---------- */}
      {config.frame && <Frame id={config.frame} />}
    </svg>
  );
}

/* ---------- Face ---------- */
function Face({
  mood,
  eye,
  eyeDeep,
  lashes,
}: {
  mood: AvatarMood;
  eye: string;
  eyeDeep: string;
  lashes: boolean;
}) {
  const Eye = ({ cx }: { cx: number }) => (
    <g>
      <circle cx={cx} cy="120" r="16" fill={eyeDeep} />
      <circle cx={cx} cy="120" r="13.5" fill={eye} />
      <circle cx={cx - 5} cy="114" r="5" fill="#ffffff" />
      <circle cx={cx + 5} cy="125" r="2.4" fill="#ffffff" opacity="0.85" />
    </g>
  );
  const Lash = ({ x, dir }: { x: number; dir: number }) => (
    <g stroke="#4a3340" strokeWidth="2.6" strokeLinecap="round">
      <path d={`M${x} 106 q${6 * dir} -5 ${10 * dir} -2`} />
      <path d={`M${x + 4 * dir} 104 q${5 * dir} -4 ${9 * dir} -1`} />
    </g>
  );

  const mouth = {
    happy: "M132 156 q18 16 36 0",
    wink: "M134 156 q16 14 32 0",
    love: "M132 156 q18 18 36 0",
    uwu: "M132 158 q18 14 36 0",
    cool: "M134 158 q16 8 32 0",
    surprised: "",
  }[mood];

  return (
    <>
      {mood === "uwu" ? (
        <>
          <path d="M108 122 q14 -14 28 0" fill="none" stroke="#4a3340" strokeWidth="5" strokeLinecap="round" />
          <path d="M164 122 q14 -14 28 0" fill="none" stroke="#4a3340" strokeWidth="5" strokeLinecap="round" />
        </>
      ) : mood === "love" ? (
        <>
          {[122, 178].map((cx) => (
            <path
              key={cx}
              d={`M${cx} 126 c -9 -13 -24 -4 -12 8 l 12 12 l 12 -12 c 12 -12 -3 -21 -12 -8 Z`}
              fill="#ec6fa0"
            />
          ))}
        </>
      ) : mood === "wink" ? (
        <>
          <path d="M108 120 q14 -12 28 0" fill="none" stroke="#4a3340" strokeWidth="5" strokeLinecap="round" />
          <Eye cx={178} />
          {lashes && <Lash x={190} dir={1} />}
        </>
      ) : mood === "surprised" ? (
        <>
          <Eye cx={122} />
          <Eye cx={178} />
          <ellipse cx="150" cy="162" rx="7" ry="9" fill="#b14a72" />
        </>
      ) : mood === "cool" ? (
        <>
          {/* sunglasses */}
          <rect x="100" y="110" width="40" height="22" rx="9" fill="#3a3a42" />
          <rect x="160" y="110" width="40" height="22" rx="9" fill="#3a3a42" />
          <rect x="138" y="116" width="24" height="5" rx="2.5" fill="#3a3a42" />
          <rect x="106" y="115" width="12" height="5" rx="2.5" fill="#ffffff" opacity="0.5" />
        </>
      ) : (
        <>
          <Eye cx={122} />
          <Eye cx={178} />
          {lashes && (
            <>
              <Lash x={108} dir={-1} />
              <Lash x={192} dir={1} />
            </>
          )}
        </>
      )}

      {mouth && (
        <path d={mouth} fill="none" stroke="#4a3340" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </>
  );
}

/* ---------- Hair ---------- */
function BackHair({ style, color }: { style: string; color: string }) {
  const dark = shade(color, -0.18);
  if (style === "bob")
    return (
      <path d="M70 120 C66 60 108 32 150 32 C192 32 234 60 230 120 C232 160 224 184 214 196 L214 120 C214 70 188 52 150 52 C112 52 86 70 86 120 L86 196 C76 184 68 160 70 120 Z" fill={color} stroke={dark} strokeWidth="2" />
    );
  if (style === "ponytail")
    return (
      <path d="M196 70 C236 84 246 150 232 196 C226 214 210 214 208 196 C214 150 206 110 184 92 Z" fill={color} stroke={dark} strokeWidth="2" />
    );
  if (style === "twin")
    return (
      <g fill={color} stroke={dark} strokeWidth="2">
        <circle cx="78" cy="96" r="26" />
        <circle cx="222" cy="96" r="26" />
      </g>
    );
  return null;
}

function FrontHair({ style, color }: { style: string; color: string }) {
  const dark = shade(color, -0.18);
  if (style === "bangs" || style === "bob" || style === "ponytail" || style === "twin")
    return (
      <path
        d="M82 96 C92 58 120 46 150 46 C180 46 208 58 218 96 C206 86 196 82 188 90 C180 76 168 72 158 84 C152 70 148 70 142 84 C132 72 120 76 112 90 C104 82 94 86 82 96 Z"
        fill={color}
        stroke={dark}
        strokeWidth="2"
      />
    );
  return null;
}

/* ---------- Accessory ---------- */
function Accessory({ id }: { id: string }) {
  if (id === "bow")
    return (
      <g transform="translate(150 50)" stroke="#d44f7d" strokeWidth="2">
        <path d="M0 0 L-22 -12 L-22 12 Z" fill="#ff7eaa" />
        <path d="M0 0 L22 -12 L22 12 Z" fill="#ff7eaa" />
        <circle r="6" fill="#ff5e94" />
      </g>
    );
  if (id === "glasses")
    return (
      <g fill="none" stroke="#5b5b63" strokeWidth="3.5">
        <circle cx="122" cy="120" r="20" fill="#ffffff" fillOpacity="0.25" />
        <circle cx="178" cy="120" r="20" fill="#ffffff" fillOpacity="0.25" />
        <path d="M142 120 h16" />
      </g>
    );
  if (id === "headphones")
    return (
      <g stroke="#3a3a42" strokeWidth="3">
        <path d="M76 110 A74 74 0 0 1 224 110" fill="none" />
        <rect x="66" y="104" width="22" height="34" rx="10" fill="#ec6fa0" />
        <rect x="212" y="104" width="22" height="34" rx="10" fill="#ec6fa0" />
      </g>
    );
  if (id === "crown")
    return (
      <g transform="translate(150 44)">
        {[-44, -22, 0, 22, 44].map((x, i) => (
          <g key={x} transform={`translate(${x} ${Math.abs(x) * 0.18})`}>
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse key={a} cx="0" cy="-5" rx="3.6" ry="5.4" fill={i % 2 ? "#ffd6e5" : "#f7a8c4"} transform={`rotate(${a})`} />
            ))}
            <circle r="2.4" fill="#ffce4d" />
          </g>
        ))}
      </g>
    );
  return null;
}

/* ---------- Frame ---------- */
function Frame({ id }: { id: string }) {
  const color =
    id === "gold" ? "#f5a623" : id === "holo" ? "#c9b6ff" : "#f7a8c4";
  return (
    <g fill="none">
      <rect x="6" y="6" width="288" height="348" rx="28" stroke={color} strokeWidth="6" />
      <rect x="14" y="14" width="272" height="332" rx="22" stroke={color} strokeWidth="2" opacity="0.5" />
      {[
        [22, 22],
        [278, 22],
        [22, 338],
        [278, 338],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-5" rx="3.4" ry="5" fill={color} transform={`rotate(${a})`} />
          ))}
          <circle r="2.2" fill="#ffce4d" />
        </g>
      ))}
    </g>
  );
}
