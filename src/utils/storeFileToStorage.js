import "server-only";
import { fromEnv } from "@aws-sdk/credential-providers";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 } from "uuid";

const client = new S3Client({
  credentials: fromEnv(),
  region: process.env.AWS_S3_REGION,
});

export const storeFileToStorage = async (file) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const type = file.name.split(".").at(-1);
  const fileName = `${v4()}.${type}`;

  const res = await client.send(
    new PutObjectCommand({
      Bucket: "fiddle-notes-alpha",
      Key: `images/${fileName}`,
      Body: buffer,
      ContentType: file.type,
    })
  );

  return { slug: `images/${fileName}` };
};
