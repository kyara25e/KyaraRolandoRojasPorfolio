"use client";

import { useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";

export default function ContactoPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [error, setError] = useState("");

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setError("");
      setLoadingImage(true);

      const file = e.target.files?.[0];
      if (!file) return;

      const url = await uploadToCloudinary(file, "image");
      setImageUrl(url);
    } catch (err) {
      setError("No se pudo subir la imagen.");
      console.error(err);
    } finally {
      setLoadingImage(false);
    }
  };

  const handleVideoUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setError("");
      setLoadingVideo(true);

      const file = e.target.files?.[0];
      if (!file) return;

      const url = await uploadToCloudinary(file, "video");
      setVideoUrl(url);
    } catch (err) {
      setError("No se pudo subir el video.");
      console.error(err);
    } finally {
      setLoadingVideo(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
          Contacto + Media
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">Hablemos</h1>

        <p className="mt-5 max-w-2xl text-white/70">
          Esta página también te sirve para subir imágenes y videos a Cloudinary
          y después usar esas URLs en tu portfolio.
        </p>

        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <h2 className="text-xl font-semibold text-white">Subir imagen</h2>
            <p className="mt-2 text-sm text-white/60">
              Elegí una imagen para tu proyecto.
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-4 block w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white"
            />

            {loadingImage && (
              <p className="mt-4 text-sm text-orange-300">Subiendo imagen...</p>
            )}

            {imageUrl && (
              <div className="mt-5">
                <img
                  src={imageUrl}
                  alt="Preview subida"
                  className="h-52 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-sm text-white/60">URL de la imagen:</p>
                <textarea
                  readOnly
                  value={imageUrl}
                  className="mt-2 h-24 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white"
                />
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <h2 className="text-xl font-semibold text-white">Subir video</h2>
            <p className="mt-2 text-sm text-white/60">
              Elegí un video para mostrar un proyecto en acción.
            </p>

            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="mt-4 block w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white"
            />

            {loadingVideo && (
              <p className="mt-4 text-sm text-orange-300">Subiendo video...</p>
            )}

            {videoUrl && (
              <div className="mt-5">
                <video
                  src={videoUrl}
                  controls
                  className="h-52 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-sm text-white/60">URL del video:</p>
                <textarea
                  readOnly
                  value={videoUrl}
                  className="mt-2 h-24 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <a
            href="https://github.com/kyara25e"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/5"
          >
            <p className="text-sm text-white/50">GitHub</p>
            <p className="mt-2 font-semibold text-white">Ver perfil</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kyara-rojas-279bb7256/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/5"
          >
            <p className="text-sm text-white/50">LinkedIn</p>
            <p className="mt-2 font-semibold text-white">Conectar</p>
          </a>

          <a
            href="mailto:kyara_177@protonmail.com"
            className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/5"
          >
            <p className="text-sm text-white/50">Email</p>
            <p className="mt-2 font-semibold text-white">kyara_177@protonmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}