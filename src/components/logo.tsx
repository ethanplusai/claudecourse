export function Logo({
  size = "default",
  variant = "dark",
}: {
  size?: "default" | "small";
  variant?: "dark" | "light";
}) {
  const color = variant === "light" ? "text-white" : "text-text";

  const textClass =
    size === "small"
      ? `text-lg font-bold ${color} tracking-tight`
      : `text-2xl font-bold ${color} tracking-tight`;

  const regSize = size === "small" ? "10px" : "12px";
  const regTop = size === "small" ? "3px" : "4px";

  return (
    <span className={textClass}>
      The Client Engine
      <span
        className="ml-0.5 relative"
        style={{ fontSize: regSize, fontWeight: 100, top: regTop }}
      >
        ®
      </span>
    </span>
  );
}
