import { createUploadUrl } from "@/actions/fileUpload/createUploadUrlAction";

// TODO: investigate
export const uploadFileOnBucket = async (file) => {
  const { url, name } = await createUploadUrl({
    contentType: file.type,
  });

  const buffer = Buffer.from(await file.arrayBuffer());

  await fetch(url, {
    method: "PUT",
    body: buffer,
  });

  return name;
};
