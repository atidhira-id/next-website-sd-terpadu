import { BreadcrumbMenu } from "@/components/ui/Breadcrumb";
import {
  PageTitleSection,
  Section,
  SectionTitle,
} from "@/components/ui/Section";
import { getPayloadClient } from "@/lib/payload";
import GuruCard from "@/components/ui/GuruCard";

export default async function GuruDanPegawaiPage() {
  const breadcrumbItems = [
    { label: "Tentang", href: "/tentang" },
    { label: "Guru dan Pegawai" },
  ];

  const payload = await getPayloadClient();

  const { docs: guruList } = await payload.find({
    collection: "guru",
    sort: "jenis",
    limit: 0,
    depth: 2,
  });

  const daftarGuru = guruList.filter((g) => g.jenis === "guru");
  const daftarPegawai = guruList.filter((g) => g.jenis === "pegawai");

  return (
    <>
      <PageTitleSection title="Daftar Guru dan Pegawai" />
      <Section containerClassName="pt-4 md:pt-6">
        <BreadcrumbMenu items={breadcrumbItems} />
        <SectionTitle className="mb-8">Daftar Guru</SectionTitle>
        {daftarGuru && (
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-y-12">
            {daftarGuru.map((guru) => (
              <li
                key={guru.nama}
                className="mx-auto w-64 h-96 flex flex-col rounded-tr-2xl rounded-bl-2xl overflow-hidden text-primary"
              >
                <GuruCard data={guru} />
              </li>
            ))}
          </ul>
        )}
      </Section>
      <Section>
        {daftarPegawai.length > 0 && (
          <>
            <SectionTitle className="mb-8">Daftar Pegawai</SectionTitle>
            <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-y-12">
              {daftarPegawai.map((pegawai) => (
                <li
                  key={pegawai.nama}
                  className="mx-auto w-64 h-96 flex flex-col rounded-tr-2xl rounded-bl-2xl overflow-hidden text-primary"
                >
                  <GuruCard data={pegawai} />
                </li>
              ))}
            </ul>
          </>
        )}
      </Section>
    </>
  );
}
