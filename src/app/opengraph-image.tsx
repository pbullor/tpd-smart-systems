import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TPD Smart Systems - Industrial IoT Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0f1a 0%, #0f172a 50%, #0a0f1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
              display: "flex",
            }}
          >
            TPD Smart Systems
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#0d9488",
              fontWeight: 500,
              display: "flex",
            }}
          >
            Industrial IoT Solutions
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "20px",
              color: "#94a3b8",
              maxWidth: "700px",
              textAlign: "center",
              lineHeight: 1.6,
              display: "flex",
            }}
          >
            Smart Lockers · ESL · Access Control · IoT Platform
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#0d9488",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "16px",
              color: "#64748b",
              display: "flex",
            }}
          >
            tpdsmart.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
