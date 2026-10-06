"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
};

export default function ImageLightbox({
  src,
  alt,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const lightbox = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="absolute right-5 top-5 z-[10000] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl leading-none text-white backdrop-blur-md transition hover:bg-white/20"
        aria-label="Close image preview"
      >
        ×
      </button>

      <div
        className="relative flex max-h-[92vh] max-w-[92vw] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={1800}
          className="max-h-[92vh] w-auto max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          priority
        />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl text-left"
        aria-label={`Expand image: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1600}
          className="mx-auto h-auto max-h-[520px] w-auto max-w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />

        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
          Click to expand
        </span>
      </button>

      {mounted && open && createPortal(lightbox, document.body)}
    </>
  );
}