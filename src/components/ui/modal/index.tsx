import { useContext } from "react";
import { ModalContext } from "@/providers/modal-ctx";

export const Modal = () => {
  const modalCtx = useContext(ModalContext);

  const onClick = () => {
    modalCtx.setIsModalOpen(false);
  };

  const getImage = () => {
    //If the modal context doesn't have an image array set, bail out.
    if (!modalCtx.isModalOpen) {
      return;
    }

    //If the image's width is greater than it's height, set the width & auto the height
    if (modalCtx.imageSizeData.width > modalCtx.imageSizeData.height) {
      return (
        <img
          className="block w-full md:w-[80%] md:max-w-[800px] h-auto py-[50px] md:py-0 translate-y-[12.5%] md:translate-y-0"
          alt={modalCtx.modalImage.imgAlt}
          src={modalCtx.modalImage.imgUrl}
        />
      );
    }

    //Otherwise, the image's height is greater, so we set the height & auto the width
    return (
      <img
        className="block w-auto sm:h-[80%] sm:max-h-[800px]"
        alt={modalCtx.modalImage.imgAlt}
        src={modalCtx.modalImage.imgUrl}
      />
    );
  };

  return (
    <div
      //Modal Container
      className={`z-[51]  pt-[5vh]  left-0  top-0  max-w-full max-h-full w-full  h-full overflow-hidden bg-black/[.9] md:bg-black/[.8]
  ${modalCtx.isModalOpen ? "fixed" : "hidden"}`}
    >
      <div
        //Modal Background
        className="flex flex-col justify-center items-center align-center text-center w-full h-full mx-auto"
        onClick={onClick}
      >
        <span
          //X button
          className={`
            ${
              modalCtx.isModalOpen ? "absolute" : "none"
            } top-[10px] md:top-[15px] right-[10px] md:right-[35px] text-[#f1f1f1] text-[30px] md:text-[40px] font-bold cursor-pointer bg-black md:bg-black/[.0] rounded-[100vw] h-[30px] md:h-[40px] w-[30px] md:w-[40px] vertical-center leading-[26px] md:leading-[36px]`}
          onClick={onClick}
        >
          &times;
        </span>

        {getImage()}

        <div className="mx-auto block w-[80%] max-w-[700px] text-center text-[24px] text-[#ccc] px-[10px] my-[25px] py-[0] h-[150px]">
          {modalCtx.modalImage.imgTitle}
        </div>
      </div>

      <a
        //Left Arrow Button
        className="cursor-pointer absolute top-1/2 left-[5vw] lg:left-[200px] w-auto p-[16px] -mt-[50px] text-[#FFFFFF] font-bold text-[20px] md:text-[40px] 
        bg-black/[.5] md:bg-black/[.85] ease duration-[.5s] hover:bg-black"
        onClick={() => modalCtx.updateImage(modalCtx.imageIndex - 1)}
      >
        &#10094;
      </a>
      <a
        //Right Arrow Button
        className="cursor-pointer absolute top-1/2 right-[5vw] lg:right-[200px] w-auto p-[16px] -mt-[50px] text-[#FFFFFF] font-bold text-[20px] md:text-[40px] 
        bg-black/[.5] md:bg-black/[.85] ease duration-[.5s] hover:bg-black"
        onClick={() => modalCtx.updateImage(modalCtx.imageIndex + 1)}
      >
        &#10095;
      </a>
    </div>
  );
};
