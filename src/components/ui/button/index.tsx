import { FunctionComponent } from "react";

interface PublicProps {
  // holds the buttons label.
  title: string;
  // handles the button's onclick event
  onClick?: () => void;
  // holds the button's color
  buttonColor?: string;
  //holds the button's hover color
  buttonHover?: string;
}

export const Button: FunctionComponent<PublicProps> = ({
  title,
  onClick,
  buttonColor = "bg-secondary-5",
  buttonHover = "hover:bg-secondary-dark",
}) => {
  return (
    <button
      className={`${buttonColor} ${buttonHover} text-white font-semibold py-2 px-4 rounded text-[20px] transition ease-in-out duration-[.5s] hover:transform hover:scale-110`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
