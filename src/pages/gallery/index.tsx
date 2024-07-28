import { ImageGallery } from "@/components/gallery/image-gallery";
import { Modal } from "@/components/ui/modal";

export const Gallery = () => {
  return (
    <>
      <div className="mx-auto bg-white w-full max-w-full flex flex-wrap justify-center items-center px-4 sm:px-6 py-8 md:px-[10vw] lg:px-[20vw]">
        <ImageGallery galleryTitle="Gallery" />
      </div>
      <Modal />
    </>
  );
};
