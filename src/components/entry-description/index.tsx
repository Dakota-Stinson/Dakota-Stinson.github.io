import { FunctionComponent } from "react";
import { Button } from "../ui/button";

interface ButtonProps {
  // handles the button's onclick event
  onClick?: () => void;
  // holds the buttons label.
  buttonTitle: string;
  // holds the button's color
  buttonColor?: string;
  // holds the button's color
  hoverColor?: string;
}

interface PublicProps {
  // holds the buttons label.
  entryTitle: string;
  // holds the section's description
  description: string;
  // holds the image URL
  imageURL: string;
  // holds the image's alt tag description
  imageAlt: string;
  // determines if the section's image is on the left or right
  imageOnLeft?: boolean;

  //holds the section's background color
  sectionBG?: string;
  //holds the title's color
  titleColor?: string;
  //holds the text's color
  fontColor?: string;

  //holds the button's data
  buttonProps?: ButtonProps;
}

export const EntryDescription: FunctionComponent<PublicProps> = ({
  entryTitle,
  description,
  imageURL,
  imageAlt,
  imageOnLeft = false,
  sectionBG = "bg-background",
  fontColor = "text-auto",
  titleColor = fontColor,
  buttonProps,
}) => {
  return (
    <section
      className={`max-w-full p-0 sm:p-5 md:p-[25px] ${sectionBG} ${fontColor}`}
    >
      <div
        className={`max-w-[960px] flex items-center justify-center md:justify-between mx-auto gap-[40px] md:gap-[50px] p-[25px] flex-col shadow-innerBorder sm:rounded-md border-[1px] border-black ${
          imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
        style={{ borderStyle: "outset" }}
      >
        <div className="flex flex-col items-center md:items-start max-w-full">
          <h2
            className={`text-[2.25rem] mb-[15px] text-center md:text-left ${titleColor}`}
          >
            {entryTitle}
          </h2>
          <p className={`${buttonProps ? "mb-[30px]" : "mb-0"}`}>
            {description}
          </p>
          {buttonProps ? (
            <Button
              title={buttonProps.buttonTitle}
              buttonColor={buttonProps.buttonColor}
              buttonHover={buttonProps.hoverColor}
              onClick={buttonProps.onClick}
            />
          ) : null}
        </div>
        <img
          className={`w-full max-w-[400px] md:w-auto h-auto ${
            buttonProps ? "md:max-w-[275px]" : "md:max-w-[200px]"
          } md:object-contain`}
          src={imageURL}
          alt={imageAlt}
        />
      </div>
    </section>
  );
};
