import { FullWidthSection, Section } from "@/components/ui/Section";
import { getPayloadClient } from "@/lib/payload";
import {
  RichText,
  defaultJSXConverters,
  type JSXConverters,
} from "@payloadcms/richtext-lexical/react";
import { getDateObject } from "@/utils/dateFormat";

export default async function BeritaDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "berita",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  const berita = result.docs[0];

  const { day, month, year } = getDateObject(berita.tanggalPublikasi);

  return (
    <>
      <FullWidthSection>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-stretch self-start gap-6">
            <div className="h-min text-center">
              <p className="text-3xl font-extrabold">{day}</p>
              <p className="text-sm uppercase font-extralight tracking-wider">
                {month}
              </p>
            </div>
            <div className="w-px bg-muted not-md:hidden" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{berita?.judul}</h1>
            <div>
              <p className="text-sm uppercase font-semibold">
                BY {berita.penulis}
              </p>
            </div>
          </div>
        </div>
      </FullWidthSection>
      <Section>
        <div className="h-100 md:h-150 flex justify-center">
          <img
            src={berita.imageUrl.url}
            alt="Image Berita"
            className="aspect-video object-contain"
          />
        </div>
        <div className="prose max-w-4xl mx-auto mt-16 text-black">
          <RichText data={berita.body} converters={converters} />
        </div>
      </Section>
    </>
  );
}

const converters: JSXConverters = {
  ...defaultJSXConverters,
  paragraph: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    return <p className="mb-4 leading-relaxed">{children}</p>;
  },

  heading: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    if (node.tag === "h1") {
      return <h1 className="text-3xl font-bold mb-4">{children}</h1>;
    }

    if (node.tag === "h3") {
      return <h2 className="text-xl font-semibold mb-3">{children}</h2>;
    }

    return <p>{children}</p>;
  },

  list: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    if (node.listType === "number") {
      return <ol className="list-decimal pl-6 mb-4">{children}</ol>;
    }

    return <ul className="list-disc pl-6 mb-4">{children}</ul>;
  },
};
