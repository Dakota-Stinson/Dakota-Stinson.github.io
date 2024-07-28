import { FunctionComponent } from "react";
import { BookEntryData } from "@/types";

interface PublicProps {
  // holds book's name, alt tag, url, and page to open on click
  bookEntry: BookEntryData;
}

export const BookEntry: FunctionComponent<PublicProps> = ({ bookEntry }) => {
  return (
    <div
      className="relative w-full max-w-[400px] md:max-w-[275px] md:w-auto h-auto cursor-pointer overflow-hidden"
      onClick={() => window.open(bookEntry.imgRedirect)}
    >
      <img
        src={bookEntry.imgUrl}
        alt={bookEntry.imgAlt}
        className={`w-full h-full transition ease-in-out duration-[.5s] hover:transform hover:scale-[112.5%]`}
      />
    </div>
  );
};
