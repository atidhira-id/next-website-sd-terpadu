import { getPayloadClient } from "../payload";

export async function getMediaById(id: string) {
  const payload = await getPayloadClient();

  return payload.findByID({
    collection: "media",
    id,
  });
}
