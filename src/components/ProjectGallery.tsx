"use client";

import { useEffect, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const validImages = images.filter(Boolean);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % validImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [validImages.length]);

  if (validImages.length === 0) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white/40">
        Sin imágenes
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
      <div className="relative w-full aspect-video md:h-[500px] ">
        {validImages.map((image, index) => (
          <img
            key={image + index}
            src={image}
            alt={`${title} ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-contain md:object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {validImages.length > 1 && (
        <div className="flex justify-center gap-2 py-4">
          {validImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === current ? "bg-orange-400" : "bg-white/30"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}