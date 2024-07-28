import { FunctionComponent } from "react";
import { ImageEntryData } from "@/types";

interface PublicProps {
  // Takes in the image's url, name, and alt-tag + any optional styling
  galleryEntry: ImageEntryData;
  // function to be called when an image is clicked
  onClick: () => void;
}

export const ImageEntry: FunctionComponent<PublicProps> = ({
  galleryEntry,
  onClick,
}) => {
  const col = `span ${galleryEntry.imageWidth ? galleryEntry.imageWidth : 1}`;
  const row = `span ${galleryEntry.imageHeight ? galleryEntry.imageHeight : 1}`;

  return (
    <figure
      className="w-full h-full flex flex-col overflow-hidden cursor-pointer border-[1px] rounded-sm border-black/[.75]"
      style={{
        gridRow: row,
        gridColumn: col,
      }}
      onClick={onClick}
    >
      <img
        src={galleryEntry.imgUrl}
        alt={galleryEntry.imgAlt}
        className={`${
          galleryEntry.stretchImage ? "object-fill" : "object-cover"
        } w-full h-[calc(100%_-_30px)] transition ease-in-out duration-[.5s] hover:transform hover:scale-150
          ${
            galleryEntry.imagePosition
              ? galleryEntry.imagePosition
              : "object-center"
          }
        `}
      />
      <figcaption className="mt-0 text-slate-900 border-[1px] border-black/[.75] border-t-[2px] text-image-description font-semibold">
        {galleryEntry.imgTitle}
      </figcaption>
    </figure>
  );
};
