import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Client Engine — Learn Claude by Building";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f0eee9",
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
            color: "#1a1a1a",
            letterSpacing: "-0.5px",
            marginBottom: 40,
          }}
        >
          The Client Engine®
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: "#1a1a1a",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "-1px",
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Learn Claude by building a system that gets you clients
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#6b6b6b",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          Free hands-on course. No coding experience needed.
        </div>
        <div
          style={{
            background: "#c45a3c",
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
