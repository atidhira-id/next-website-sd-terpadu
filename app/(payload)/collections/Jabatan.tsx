import type { CollectionConfig } from "payload";

const Jabatan: CollectionConfig = {
  slug: "jabatan",
  labels: {
    singular: "Jabatan",
    plural: "Jabatan",
  },
  admin: {
    useAsTitle: "nama",
    defaultColumns: ["nama", "guru", "divisi", "urutan"],
    description: "Kelola daftar jabatan untuk guru dan pegawai sekolah.",
  },
  access: {
    read: () => true,
  },
  fields: [
    // ─── Nama Jabatan ─────────────────────────────────────────
    {
      name: "nama",
      label: "Nama Jabatan",
      type: "text",
      required: true,
      admin: {
        description: "Contoh: Kepala Sekolah, Guru Kelas 1, Staf TU",
      },
    },

    // ─── Guru yang Menjabat ───────────────────────────────────
    {
      name: "guru",
      label: "Guru / Pegawai yang Menjabat",
      type: "relationship",
      relationTo: "guru",
      hasMany: true,
      admin: {
        description: "Pilih guru atau pegawai yang memegang jabatan ini.",
      },
    },

    // ─── Divisi / Kelompok ────────────────────────────────────
    {
      name: "divisi",
      label: "Divisi",
      type: "select",
      required: true,
      options: [
        { label: "Pimpinan", value: "pimpinan" },
        { label: "Guru", value: "guru" },
        { label: "Tata Usaha", value: "tata_usaha" },
        { label: "Operator", value: "operator" },
        { label: "Lainnya", value: "lainnya" },
      ],
      admin: {
        description:
          "Digunakan untuk mengelompokkan jabatan di struktur organisasi.",
      },
    },

    // ─── Urutan di Struktur Org ───────────────────────────────
    {
      name: "urutan",
      label: "Urutan Tampil",
      type: "number",
      defaultValue: 99,
      admin: {
        description: "Angka lebih kecil tampil lebih awal dalam satu level.",
        position: "sidebar",
      },
    },
  ],
};

export default Jabatan;
