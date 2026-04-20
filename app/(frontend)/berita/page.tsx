import {
  Section,
  SectionTitle,
  PageTitleSection,
} from "@/components/ui/Section";
import { getPayloadClient } from "@/lib/payload";
import { Badge } from "@/components/shadcn/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import Link from "next/link";
import { getDateString } from "@/utils/dateFormat";
import { ArrowRight } from "lucide-react";
import { BreadcrumbMenu } from "@/components/ui/Breadcrumb";

export default async function ListBerita() {
  const payload = await getPayloadClient();
  const { docs: beritaList } = await payload.find({
    collection: "berita",
    where: { status: { equals: "published" } },
    sort: "-tanggalPublikasi",
  });

  const { docs: beritaTerbaru } = await payload.find({
    collection: "berita",
    where: { status: { equals: "published" } },
    sort: "-tanggalPublikasi",
    limit: 3,
  });

  return (
    <>
      <PageTitleSection title="Berita Sekolah" />
      <Section containerClassName="pt-4 md:pt-6">
        <BreadcrumbMenu items={[{ label: "Berita" }]} />
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 not-lg:order-2 ">
            {beritaList.map((berita) => (
              <Card
                className="relative bg-card mx-auto mb-4 w-full pt-0 rounded-none border-none shadow-none overflow-hidden"
                key={berita.id}
              >
                <img
                  src={berita.imageUrl.url}
                  alt="Gamber Berita"
                  className="relative z-20 aspect-video w-full object-cover brightness-80 grayscale dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge>{getDateString(berita.tanggalPublikasi)}</Badge>
                  </CardAction>
                  <CardTitle className="text-xl">{berita.judul}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{berita.ringkasan}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end-safe">
                  <Link
                    href={`/berita/${berita.slug}`}
                    className="flex items-center gap-1 italic hover:underline"
                  >
                    <p>Selengkapnya</p> <ArrowRight size={18} />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="not-lg:order-1">
            <SectionTitle>Berita Terbaru</SectionTitle>
            {beritaTerbaru.map((berita) => (
              <Card
                className="relative bg-inherit mx-auto mb-8 p-0 w-full flex flex-row gap-4 rounded-none border-none shadow-none"
                key={berita.id}
              >
                <div className="flex-1/4">
                  <img
                    src={berita.imageUrl.url}
                    alt="Gamber Berita"
                    className="relative z-20 aspect-square object-cover"
                  />
                </div>
                <CardDescription className="flex-3/4 flex flex-col">
                  <Link href={`/berita/${berita.slug}`}>
                    <CardTitle className="not-lg:text-[1.2rem] lg:text-[0.8rem] xl:text-[1rem] text-gray-700 hover:text-black">
                      {berita.judul}
                    </CardTitle>
                  </Link>
                  <div className="flex gap-4 mt-2 text-xs uppercase">
                    <p>{getDateString(berita.tanggalPublikasi)}</p>
                    <p>{berita.penulis}</p>
                  </div>
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
