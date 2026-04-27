import Image from "next/image";
interface GuruCardProps {
  data: any;
}

export default function GuruCard({ data }: GuruCardProps) {
  return (
    <>
      <div className="bg-secondary-foreground p-2 tracking-wide uppercase font-bold">
        {data.jenis}
      </div>
      <div className="relative w-full h-full bg-gray-200">
        <Image
          src={data.foto.url}
          alt="Foto guru"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-secondary-foreground p-2 text-right tracking-wide">
        {data.nama}
      </div>
    </>
  );
}
