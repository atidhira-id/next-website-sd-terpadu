import { cache } from "react";
import { getPayloadClient } from "../payload";

export const getSchoolProfile = cache(async () => {
  const payload = await getPayloadClient();
  console.log("GET PROFILE");

  return payload.findGlobal({
    slug: "school-profile",
  });
});
