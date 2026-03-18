import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Claude Course — Learn Claude Code by Building";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#f1f5f9",
            letterSpacing: "-0.5px",
            marginBottom: 40,
          }}
        >
          Claude Course
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: "#f1f5f9",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "-1px",
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Learn Claude Code by Building a Real Product
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          16 lessons. 20 skills files. No experience needed. Free.
        </div>
        <div
          style={{
            background: "#4f46e5",
            color: "white",
            fontSize: 20,
            fontWeight: 500,
            padding: "14px 40px",
            borderRadius: 50,
          }}
        >
          Start Building — It&apos;s Free
        </div>
      </div>
    ),
    { ...size }
  );
}
