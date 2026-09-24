import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.16.11.116"],
  images: {
    // Netlify Lambda: filesystem is read-only; disable on-disk image cache.
    maximumDiskCacheSize: 0,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
