import Image from "next/image";
interface GuruCardProps {
  data: any;
}

export default function GuruCard({ data }: GuruCardProps) {
  const namaJabatan = data.nama;
  const guruList = data.guru;

  return (
    <>
      <div className="bg-secondary-foreground p-2 tracking-wide uppercase font-bold">
        {namaJabatan}
      </div>
      <div className="relative w-full h-full bg-gray-200">
        {guruList.length == 1 && (
          <Image
            src={guruList[0].foto.url}
            alt="Foto guru"
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="bg-secondary-foreground p-2 text-right tracking-wide">
        {guruList.length == 1 ? guruList[0].nama : "Kosong"}
      </div>
    </>
  );
}
