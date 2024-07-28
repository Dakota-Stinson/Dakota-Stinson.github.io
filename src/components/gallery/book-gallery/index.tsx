import { FunctionComponent } from "react";
import { BookEntry } from "./book-entry";
import { bookEntries } from "@/assets/data/gallery-books";

interface PublicProps {
  // holds the buttons label.
  galleryTitle: string;
  // boolean to see if you want to center unfilled rows' content
  centerItems?: boolean;
}

export const BookGallery: FunctionComponent<PublicProps> = ({
  galleryTitle,
  centerItems = false,
}) => {
  return (
    <section className="max-w-full px-[5px] md:px-0 py-[25px] ">
      <h1 className="text-center text-white pb-[20px] text-[2.25rem]">
        {galleryTitle}
      </h1>
      <div
        className="flex flex-wrap justify-evenly max-w-[1280px] mx-auto  px-[20px] md:p-0"
        style={{
          justifyContent: centerItems ? "center" : "space-evenly",
          gap: centerItems ? "0px" : "50px",
        }}
      >
        {bookEntries.map((entry, i) => {
          return (
            <BookEntry bookEntry={entry} key={`Book-Gallery-Entry-${i}`} />
          );
        })}
      </div>
    </section>
  );
};
