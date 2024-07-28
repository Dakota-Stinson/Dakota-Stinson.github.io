import { FunctionComponent, useContext } from "react";
import { ImageEntry } from "./image-entry";
import { imageEntries } from "@/assets/data/gallery-images";
import { ModalContext } from "@/providers/modal-ctx";

interface PublicProps {
  // Takes in the gallery's title
  galleryTitle: string;
}

export const ImageGallery: FunctionComponent<PublicProps> = ({
  galleryTitle,
}) => {
  const modalCtx = useContext(ModalContext);

  const onClick = (index: number) => {
    modalCtx.updateImage(index);
    modalCtx.setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-full flex flex-col gap-[30px] text-center  overflow-hidden">
      <h1 className="text-[2.25rem] font-semibold font-universal tracking-[6px]">
        {galleryTitle}
      </h1>
      <div className="grid auto-rows-image-and-text gap-[.5rem] sm:grid-cols-6 md:grid-cols-auto-grid grid-flow-dense">
        {imageEntries.map((entry, i) => {
          return (
            <ImageEntry
              galleryEntry={entry}
              onClick={() => onClick(i)}
              key={`Image-Entry-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};
