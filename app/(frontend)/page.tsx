import { getPayloadClient } from "@/lib/payload";
import HomeClient from "./HomeClient";

export default async function Home() {
  const payload = await getPayloadClient();
  const { docs: beritaTerbaru } = await payload.find({
    collection: "berita",
    where: { status: { equals: "published" } },
    sort: "-tanggalPublikasi",
    limit: 3,
  });

  const { docs: prestasi } = await payload.find({
    collection: "prestasi",
    where: { status: { equals: "published" } },
    sort: "-tanggalPublikasi",
    limit: 2,
  });

  return <HomeClient berita={beritaTerbaru} prestasi={prestasi} />;
}
