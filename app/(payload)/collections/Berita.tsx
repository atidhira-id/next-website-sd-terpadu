import type { CollectionConfig } from "payload";

const Berita: CollectionConfig = {
  slug: "berita",
  labels: {
    singular: "Berita",
    plural: "Berita",
  },
  admin: {
    useAsTitle: "judul",
    defaultColumns: ["judul", "tanggalPublikasi", "status"],
    description: "Kelola berita dan pengumuman sekolah di sini.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "judul",
      label: "Judul Berita",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug (URL)",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "Diisi otomatis dari judul. Contoh: berita-penerimaan-siswa-baru",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            // Auto-generate slug from judul if empty
            if (!value && data?.judul) {
              return data.judul
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .trim()
                .replace(/\s+/g, "-");
            }
            return value;
          },
        ],
      },
    },
    {
      name: "imageUrl",
      label: "Gambar Berita",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Upload atau pilih gambar utama untuk berita ini.",
      },
    },
    {
      name: "ringkasan",
      label: "Ringkasan",
      type: "textarea",
      admin: {
        description:
          "Deskripsi singkat berita (tampil di halaman daftar berita).",
        rows: 3,
      },
    },

    {
      name: "body",
      label: "Isi Berita",
      type: "richText",
      required: true,
    },

    {
      name: "tanggalPublikasi",
      label: "Tanggal Publikasi",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "dd MMMM yyyy",
        },
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      defaultValue: "draft",
      required: true,
      options: [
        { label: "Draft", value: "draft" },
        { label: "Publikasi", value: "published" },
      ],
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "penulis",
      label: "Penulis",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
  ],
  hooks: {
    beforeOperation: [],
  },
};

export default Berita;
