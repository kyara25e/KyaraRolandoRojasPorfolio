export const uploadToCloudinary = async (
  file: File,
  resourceType: "image" | "video" = "image"
) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "kr_porfolio");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dzslmv02r/${resourceType}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Error al subir el archivo a Cloudinary");
  }

  const data = await res.json();
  return data.secure_url as string;
};