"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://sanchodev.vercel.app/${src}?w=${width}&q=${quality || 75}`;
}
