"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 } from "uuid";

const client = new S3Client({
  credentials: fromEnv(),
  region: process.env.AWS_S3_REGION,
});

const EXPIRATION_TIME = 3600;

// TODO: env
export const createUploadUrl = async ({ contentType }) => {
  const name = `static/${v4()}`;

  const command = new PutObjectCommand({
    Bucket: "fiddle-notes-alpha",
    Key: name,
    ContentType: contentType,
  });

  const url = await getSignedUrl(client, command, {
    expiresIn: EXPIRATION_TIME,
  });

  return { url, name };
};
