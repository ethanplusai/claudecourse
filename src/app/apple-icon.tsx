import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "#c45a3c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 110,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
            marginTop: -5,
          }}
        >
          C
        </div>
      </div>
    ),
    { ...size }
  );
}
