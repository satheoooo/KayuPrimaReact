interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

function Logo({ size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-[16px]" },
    md: { icon: 32, text: "text-[22px]" },
    lg: { icon: 48, text: "text-[32px]" },
  };

  const { icon, text } = sizes[size];

  return (
    <div className="flex items-center gap-2">
      {/* Icon - Tree/Leaf */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tree Crown */}
        <path
          d="M24 4L36 20H30L38 32H10L18 20H12L24 4Z"
          fill="#2F5E2F"
        />
        {/* Tree Trunk */}
        <rect x="22" y="32" width="4" height="12" fill="#8B5A2B" />
        {/* Ground */}
        <ellipse cx="24" cy="44" rx="12" ry="2" fill="#2F5E2F" opacity="0.3" />
      </svg>

      {/* Text */}
      {showText && (
        <span className={`font-bold text-[#2F5E2F] ${text}`}>
          KayuPrima
        </span>
      )}
    </div>
  );
}

export default Logo;
