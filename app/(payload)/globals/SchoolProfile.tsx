import type { GlobalConfig } from "payload";

export const SchoolProfile: GlobalConfig = {
  slug: "school-profile",
  label: "Profil Sekolah",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Nama Sekolah",
      type: "text",
      required: true,
    },
    {
      name: "address",
      label: "Alamat",
      type: "textarea",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      label: "Nomor HP",
      type: "text",
    },
    {
      name: "vision",
      label: "Visi",
      type: "textarea",
    },
    {
      name: "visionDescription",
      label: "Deskripsi Visi",
      type: "textarea",
    },
    {
      name: "mission",
      type: "array",
      fields: [
        {
          name: "text",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
  ],
};
