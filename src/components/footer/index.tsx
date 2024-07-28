import { emailLink, twitterLink } from "@/constants/links";

export const Footer = () => {
  return (
    <footer className="bg-black relative mt-auto bottom-0 flex justify-center flex-col text-center">
      <div className="mx-auto w-full max-w-screen-xl py-6 text-center text-fontColor text-[1.5rem]">
        <div className="flex flex-col text-center gap-[25px] md:gap-[10px]">
          <p className=" text-[1.75rem]">Contact:</p>
          <div className="flex flex-col md:flex-row mx-auto gap-[25px]">
            <a
              className=" hover:text-accent transition ease-in-out duration-[.5s] hover:transform hover:scale-110"
              href={`mailto:${emailLink}`}
            >
              {emailLink}
            </a>
            <p className="hidden md:block">•</p>
            <a
              className=" hover:text-accent transition ease-in-out duration-[.5s] hover:transform hover:scale-110"
              href={twitterLink}
            >
              Follow me on Twitter
            </a>
          </div>
        </div>
        <hr className="my-9 sm:mx-auto" />
        <p className="text-sm text-fontColor">
          Copyright © 2024 Dakota Stinson
        </p>
      </div>
    </footer>
  );
};
