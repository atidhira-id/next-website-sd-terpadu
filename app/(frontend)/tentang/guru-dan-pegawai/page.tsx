import { BreadcrumbMenu } from "@/components/ui/Breadcrumb";
import { PageTitleSection, Section } from "@/components/ui/Section";
import { getPayloadClient } from "@/lib/payload";
import GuruCard from "@/components/ui/GuruCard";

export default async function GuruDanPegawaiPage() {
  const breadcrumbItems = [
    { label: "Tentang", href: "/tentang" },
    { label: "Guru dan Pegawai" },
  ];

  const payload = await getPayloadClient();

  const { docs: jabatanList } = await payload.find({
    collection: "jabatan",
    sort: "urutan",
    limit: 0,
    depth: 2,
  });

  return (
    <>
      <PageTitleSection title="Daftar Guru dan Pegawai" />
      <Section containerClassName="pt-4 md:pt-6">
        <BreadcrumbMenu items={breadcrumbItems} />
        {jabatanList && (
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-y-12">
            {jabatanList.map((jabatan) => (
              <li
                key={jabatan.nama}
                className="mx-auto w-64 h-96 flex flex-col rounded-tr-2xl rounded-bl-2xl overflow-hidden text-primary"
              >
                <GuruCard data={jabatan} />
              </li>
            ))}
          </ul>
        )}
        {!jabatanList && <div>Belum ada data</div>}
      </Section>
    </>
  );
}
