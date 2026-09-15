import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f6f4ef",
          color: "#14181f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} width={72} height={72} alt="" />
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 4 }}>
            WORLD WIDEE DIGITAL MEDIA MARKETING
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 68,
            lineHeight: 1.1,
            maxWidth: 950,
          }}
        >
          <span>Media, PR & global trade.</span>
          <span style={{ color: "#a97d3f" }}>Run from one wire.</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#4a5162" }}>
          UAE · IRAN · MIDDLE EAST · AUSTRALIA
        </div>
      </div>
    ),
    { ...size }
  );
}
