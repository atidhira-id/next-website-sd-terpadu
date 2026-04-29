import type { GlobalConfig } from "payload";

const SchoolProfile: GlobalConfig = {
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
      label: "Nomor Telepon",
      type: "text",
    },
    {
      name: "mobilePhone",
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
    {
      name: "fotoKepalaSekolah",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "sambutanKepalaSekolah",
      label: "Sambutan Kepala Sekolah",
      type: "richText",
    },
    {
      name: "strukturOrganisasi",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default SchoolProfile;
