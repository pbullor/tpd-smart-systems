import QRCode from "qrcode";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public", "qr");
const URL = "https://tpdsmart.com/c/pablo";

mkdirSync(PUBLIC_DIR, { recursive: true });

const qrOptions = {
  errorCorrectionLevel: "H",
  margin: 4,
  color: {
    dark: "#000000",
    light: "#ffffff",
  },
};

async function generatePlainSVG() {
  const svg = await QRCode.toString(URL, {
    ...qrOptions,
    type: "svg",
    width: 1200,
  });
  writeFileSync(join(PUBLIC_DIR, "pablo-contact-print.svg"), svg);
  console.log("✓ pablo-contact-print.svg (plain)");
  return svg;
}

async function generateLogoSVG(plainSvg) {
  const viewBoxMatch = plainSvg.match(/viewBox="([^"]+)"/);
  if (!viewBoxMatch) throw new Error("No viewBox found in SVG");
  const [, , , vbW, vbH] = viewBoxMatch[1].split(" ").map(Number);

  const cx = vbW / 2;
  const cy = vbH / 2;
  const logoSize = Math.min(vbW, vbH) * 0.12;
  const padding = logoSize * 0.25;
  const totalR = logoSize / 2 + padding;
  const rectSize = logoSize * 0.72;
  const rectR = rectSize * 0.15;
  const rectX = cx - rectSize / 2;
  const rectY = cy - rectSize / 2;

  const logoOverlay = `
  <circle cx="${cx}" cy="${cy}" r="${totalR}" fill="#ffffff" />
  <rect x="${rectX}" y="${rectY}" width="${rectSize}" height="${rectSize}" rx="${rectR}" fill="url(#tpd-grad)" />
  <defs>
    <linearGradient id="tpd-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>
  <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="${rectSize * 0.55}"
  >T</text>`;

  const svgWithLogo = plainSvg.replace("</svg>", `${logoOverlay}\n</svg>`);
  writeFileSync(join(PUBLIC_DIR, "pablo-contact.svg"), svgWithLogo);
  console.log("✓ pablo-contact.svg (with logo)");
}

async function generatePNG() {
  await QRCode.toFile(join(PUBLIC_DIR, "pablo-contact.png"), URL, {
    ...qrOptions,
    type: "png",
    width: 1200,
    rendererOpts: { quality: 1 },
  });
  console.log("✓ pablo-contact.png (1200×1200)");
}

async function verify() {
  const segments = QRCode.create(URL, { errorCorrectionLevel: "H" });
  const decoded = segments.segments
    .map((s) => {
      if (typeof s.data === "string") return s.data;
      if (Buffer.isBuffer(s.data)) return s.data.toString("utf-8");
      return Buffer.from(s.data).toString("utf-8");
    })
    .join("");

  if (decoded === URL) {
    console.log(`✓ Verified: QR encodes exactly "${URL}"`);
  } else {
    console.error(`✗ Mismatch! Expected "${URL}", got "${decoded}"`);
    process.exit(1);
  }

  console.log(
    `  Error correction: H (30%)`,
    `\n  Modules: ${segments.modules.size}×${segments.modules.size}`,
    `\n  Version: ${segments.version}`
  );
}

async function main() {
  console.log(`Generating QR codes for: ${URL}\n`);
  const plainSvg = await generatePlainSVG();
  await generateLogoSVG(plainSvg);
  await generatePNG();
  console.log("");
  await verify();
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
