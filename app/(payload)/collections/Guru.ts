import type { CollectionConfig } from "payload";

const Guru: CollectionConfig = {
  slug: "guru",
  labels: {
    singular: "Guru & Pegawai",
    plural: "Guru & Pegawai",
  },
  admin: {
    useAsTitle: "nama",
    defaultColumns: ["nama", "jenis", "jabatan", "pendidikanTerakhir"],
    description: "Kelola data guru dan pegawai sekolah di sini.",
  },
  access: {
    read: () => true,
  },
  fields: [
    // ─── Foto ─────────────────────────────────────────────────
    {
      name: "foto",
      label: "Foto",
      type: "upload",
      relationTo: "media",
      required: true,
    },

    // ─── Nama ─────────────────────────────────────────────────
    {
      name: "nama",
      label: "Nama Lengkap",
      type: "text",
      required: true,
    },

    // ─── NIP ──────────────────────────────────────────────────
    {
      name: "nip",
      label: "NIP",
      type: "text",
      admin: {
        description: "Nomor Induk Pegawai. Kosongkan jika tidak memiliki NIP.",
      },
    },

    // ─── Jenis (Guru / Pegawai) ───────────────────────────────
    {
      name: "jenis",
      label: "Jenis",
      type: "select",
      required: true,
      defaultValue: "guru",
      options: [
        { label: "Guru", value: "guru" },
        { label: "Pegawai", value: "pegawai" },
      ],
      admin: {
        position: "sidebar",
      },
    },

    // ─── Mengajar (hanya untuk Guru) ──────────────────────────
    {
      name: "mengajar",
      label: "Mengajar",
      type: "text",
      admin: {
        description: "Contoh: Matematika, Bahasa Indonesia",
        condition: (data) => data.jenis === "guru",
        position: "sidebar",
      },
    },

    // ─── Posisi (hanya untuk Pegawai) ──────────────────────────
    {
      name: "posisi",
      label: "Posisi",
      type: "text",
      admin: {
        description: "Contoh: Staf TU, Satpam",
        condition: (data) => data.jenis === "pegawai",
        position: "sidebar",
      },
    },

    // ─── Pendidikan Terakhir ──────────────────────────────────
    {
      name: "pendidikanTerakhir",
      label: "Pendidikan Terakhir",
      type: "select",
      required: true,
      options: [
        { label: "SMA / SMK / Sederajat", value: "sma" },
        { label: "D3", value: "d3" },
        { label: "S1", value: "s1" },
        { label: "S2", value: "s2" },
        { label: "S3", value: "s3" },
      ],
      admin: {
        position: "sidebar",
      },
    },

    // ─── Nomor HP ─────────────────────────────────────────────
    {
      name: "nomorHp",
      label: "Nomor HP",
      type: "text",
      admin: {
        description: "Contoh: 08123456789",
        position: "sidebar",
      },
    },
  ],
};

export default Guru;
