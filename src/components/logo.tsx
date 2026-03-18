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

  return (
    <span className={textClass}>
      Claude Course
    </span>
  );
}
