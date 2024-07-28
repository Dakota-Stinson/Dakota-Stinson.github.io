import * as React from "react";
import { createContext, useState, useRef } from "react";
import { ImageEntryData } from "@/types";
import { imageEntries } from "@/assets/data/gallery-images";

interface ImageDimensions {
  width: number;
  height: number;
}

export const ModalContext = createContext({
  isModalOpen: false,
  setIsModalOpen: (newStatus: boolean) => {
    return;
  },

  //takes in in an array of images for the image gallery
  modalData: [] as ImageEntryData[],
  setModalData: (data: ImageEntryData[]) => {
    return;
  },

  //holds the current active modal image
  modalImage: {} as ImageEntryData,
  imageSizeData: {} as ImageDimensions,
  imageIndex: 0,
  updateImage: (newIndex: number) => {
    return;
  },
});

export const ModalCtxManager: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);

  //Set the image array manually, as we're currently only using the image modal for the gallery
  const images = useRef<ImageEntryData[]>(imageEntries);

  const imgSize = useRef<ImageDimensions>({ width: 0, height: 0 });
  const curImage = useRef<ImageEntryData>(imageEntries[0]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: isOpen,
        setIsModalOpen: (newStatus: boolean) => {
          setIsOpen(newStatus);
        },
        modalData: images.current,
        imageSizeData: imgSize.current,
        setModalData: (data: ImageEntryData[]) => {
          images.current = data;
        },
        imageIndex: imageIdx,
        updateImage: (newIndex: number) => {
          //First grab the newly sent in image array index
          let idx = newIndex;

          //Check if we've gone over or under the image array's length
          if (newIndex > images.current.length - 1) {
            idx = 0;
          } else if (newIndex < 0) {
            idx = images.current.length - 1;
          }

          //Set the new image index
          setImageIdx(idx);

          //Grab the new image's dimensions
          const newImage = new Image();
          newImage.src = images.current[idx].imgUrl;

          const newDimensions: ImageDimensions = {
            width: newImage.width,
            height: newImage.height,
          };

          //Set the new image's dimensions & reference
          imgSize.current = newDimensions;

          curImage.current = images.current[idx];
        },
        modalImage: curImage.current,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
