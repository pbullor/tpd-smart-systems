import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TPD Smart Systems",
    short_name: "TPD Smart",
    description:
      "Soluciones tecnológicas para conectar, automatizar y administrar espacios físicos inteligentes.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1a",
    theme_color: "#0d9488",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
