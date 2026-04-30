import logoImage from "../asset/LOGO.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  textColor?: "dark" | "light" | "custom";
  textClassName?: string;
}

const sizeMap = {
  sm: {
    width: 40,
    height: 40,
  },
  md: {
    width: 56,
    height: 56,
  },
  lg: {
    width: 72,
    height: 72,
  },
  xl: {
    width: 96,
    height: 96,
  },
};

export default function Logo({
  size = "md",
  className = "",
  showText = false,
  textColor = "dark",
  textClassName = "",
}: LogoProps) {
  const dimensions = sizeMap[size];
  const logoSrc = typeof logoImage === "string" ? logoImage : logoImage.src;

  const textColorClass =
    textColor === "light"
      ? "text-white"
      : textColor === "custom"
        ? textClassName
        : "text-[#0f766e]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoSrc}
        alt="BUK Innovation Hubs Logo"
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
      />
      {showText && (
        <div>
          <h1
            className={`text-2xl uppercase tracking-widest font-semibold ${
              textColor === "light" ? "text-[#a8d8e6]" : textColorClass
            }`}
          >
            BUK
          </h1>
          <p
            className={`font-bold ${
              textColor === "light"
                ? "text-white"
                : "text-[#006b85]"
            }`}
          >
            Innovation Hubs
          </p>
        </div>
      )}
    </div>
  );
}
