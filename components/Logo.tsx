type LogoVariant = "full" | "horizontal" | "text" | "icon";

interface LogoProps {
  variant?: LogoVariant;
  /** Width in px. Height is calculated automatically from aspect ratio. */
  width?: number;
  className?: string;
  /** Use white text — for rendering on dark/black backgrounds */
  onDark?: boolean;
}

// ─── Shared icon geometry ───────────────────────────────────────────────────
function AztecIcon({ id }: { id: string }) {
  return (
    <>
      <defs>
        <clipPath id={id}>
          <circle cx="61" cy="61" r="50" />
        </clipPath>
      </defs>

      {/* Outer ring */}
      <circle cx="61" cy="61" r="59" fill="#000000" />
      {/* Inner teal */}
      <circle cx="61" cy="61" r="50" fill="#1fa39e" />

      <g clipPath={`url(#${id})`}>
        {/* Headdress teeth */}
        <rect x="27" y="24" width="12" height="14" fill="#ffffff" />
        <rect x="41" y="19" width="12" height="19" fill="#000000" />
        <rect x="55" y="12" width="12" height="26" fill="#ffffff" />
        <rect x="69" y="19" width="12" height="19" fill="#000000" />
        <rect x="83" y="24" width="12" height="14" fill="#ffffff" />
        {/* Headdress base bar */}
        <rect x="24" y="38" width="74" height="6" fill="#000000" />
        {/* Brow separator */}
        <rect x="24" y="44" width="74" height="5" fill="#0f5f5a" />
        {/* Eyes */}
        <rect x="28" y="52" width="19" height="13" fill="#ffffff" />
        <rect x="75" y="52" width="19" height="13" fill="#ffffff" />
        {/* Nose block with nostril cutouts */}
        <rect x="47" y="67" width="28" height="14" fill="#ffffff" />
        <rect x="48" y="73" width="9"  height="7"  fill="#1fa39e" />
        <rect x="65" y="73" width="9"  height="7"  fill="#1fa39e" />
        {/* Mouth with stepped corners */}
        <rect x="24" y="84" width="8"  height="4"  fill="#ffffff" />
        <rect x="30" y="82" width="8"  height="8"  fill="#ffffff" />
        <rect x="36" y="80" width="50" height="10" fill="#ffffff" />
        <rect x="84" y="82" width="8"  height="8"  fill="#ffffff" />
        <rect x="90" y="84" width="8"  height="4"  fill="#ffffff" />
        {/* Chin accent */}
        <rect x="40" y="92" width="42" height="7"  fill="#0f5f5a" />
      </g>
    </>
  );
}

// ─── Text block ─────────────────────────────────────────────────────────────
function TextBlock({ x, color }: { x: number; color: string }) {
  return (
    <g transform={`translate(${x}, 0)`}>
      <text
        x="0" y="36"
        fontFamily="'Arial Black','Franklin Gothic Heavy','Impact',sans-serif"
        fontSize="20"
        fontWeight="800"
        fill={color}
        letterSpacing="4"
      >TAQUERIA</text>

      <text
        x="-2" y="80"
        fontFamily="'Arial Black','Franklin Gothic Heavy','Impact',sans-serif"
        fontSize="42"
        fontWeight="900"
        fill={color}
        letterSpacing="2"
      >AZTECA</text>

      <rect x="0" y="87" width="210" height="2" fill="#1fa39e" />

      <text
        x="0" y="106"
        fontFamily="'Arial Narrow','Arial','Helvetica Neue',sans-serif"
        fontSize="15"
        fontWeight="600"
        fill={color}
        letterSpacing="5"
      >Y ANTOJITOS</text>
    </g>
  );
}

// ─── Logo component ──────────────────────────────────────────────────────────
export default function Logo({
  variant = "full",
  width = 200,
  className = "",
  onDark = false,
}: LogoProps) {
  const textColor = onDark ? "#ffffff" : "#000000";

  if (variant === "icon") {
    const h = Math.round(width);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122 122"
        width={width}
        height={h}
        className={className}
        aria-label="Taqueria Azteca icon"
        role="img"
      >
        <AztecIcon id="iconOnly" />
      </svg>
    );
  }

  if (variant === "text") {
    const h = Math.round(width * (95 / 230));
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 230 95"
        width={width}
        height={h}
        className={className}
        aria-label="Taqueria Azteca y Antojitos"
        role="img"
      >
        <text
          x="0" y="26"
          fontFamily="'Arial Black','Franklin Gothic Heavy','Impact',sans-serif"
          fontSize="20" fontWeight="800" fill={textColor} letterSpacing="4"
        >TAQUERIA</text>
        <text
          x="-2" y="66"
          fontFamily="'Arial Black','Franklin Gothic Heavy','Impact',sans-serif"
          fontSize="42" fontWeight="900" fill={textColor} letterSpacing="2"
        >AZTECA</text>
        <rect x="0" y="72" width="230" height="2" fill="#1fa39e" />
        <text
          x="0" y="90"
          fontFamily="'Arial Narrow','Arial','Helvetica Neue',sans-serif"
          fontSize="15" fontWeight="600" fill={textColor} letterSpacing="5"
        >Y ANTOJITOS</text>
      </svg>
    );
  }

  // "full" and "horizontal" — same layout, different rendered size
  const viewW = 360;
  const viewH = 122;
  const h = Math.round(width * (viewH / viewW));
  const clipId = `logoClip_${variant}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewW} ${viewH}`}
      width={width}
      height={h}
      className={className}
      aria-label="Taqueria Azteca y Antojitos"
      role="img"
    >
      <AztecIcon id={clipId} />
      <TextBlock x={137} color={textColor} />
    </svg>
  );
}
