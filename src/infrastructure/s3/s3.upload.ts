import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "./s3.client";
import { env } from "../../env";

export async function uploadToS3(params: { key: string; body: Buffer; contentType: string }) {
  const command = new PutObjectCommand({
    Bucket: env.AWS_S3_BUCKET,
    Key: params.key,
    Body: params.body,
    ContentType: params.contentType
  });

  await s3.send(command);

  return {
    key: params.key,
    url: `https://${env.AWS_S3_BUCKET}.s3.${env.AWS_REGION}.amazonaws.com/${params.key}`
  };
}
