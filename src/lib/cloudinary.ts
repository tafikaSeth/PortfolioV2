import { Cloudinary } from "@cloudinary/url-gen";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "dlurulc0f",
  },
});

export const getImage = (path: string, width = 1200) => {
  return cld
    .image(path)
    .resize(fill().width(width))
    .delivery(quality(auto()))
    .delivery(format(auto()))
};
