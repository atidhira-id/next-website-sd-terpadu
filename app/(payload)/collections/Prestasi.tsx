import type { CollectionConfig } from "payload";

const Prestasi: CollectionConfig = {
  slug: "prestasi",
  labels: {
    singular: "Prestasi",
    plural: "Prestasi",
  },
  admin: {
    useAsTitle: "prestasi",
    defaultColumns: ["tanggalPublikasi", "status"],
    description: "Kelola berita prestasi siswa di sini.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "prestasi",
      label: "Nama Perlombaan atau Prestasi yang diraih",
      type: "text",
      required: true,
    },
    {
      name: "pemilik",
      label: "Nama pemilik prestasi",
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
          "Diisi otomatis dari prestasi + pemilik. Contoh: osn-ipa-2026-namaSiswa",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            // Auto-generate slug from judul if empty
            if (!value && data?.prestasi && data?.pemilik) {
              return `${data.prestasi} ${data.pemilik}`
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
      label: "Gambar",
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
        description: "Deskripsi singkat berita prestasi.",
        rows: 3,
      },
    },

    {
      name: "body",
      label: "Isi Berita prestasi",
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

export default Prestasi;
