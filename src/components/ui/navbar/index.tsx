import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderNavBarTab = (title: string, linkRef?: string) => {
    return (
      <Link to={linkRef ? linkRef : title}>
        <li
          className="
        relative after:bg-accent-20 after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-[25%] after:sm:left-[37.5%] after:md:left-0 hover:after:w-1/2 hover:sm:after:w-1/4 hover:md:after:w-full after:transition-all after:duration-[.35s]
        w-full block mt-4 lg:inline-block lg:mt-0 text-fontColor hover:text-accent mr-4 text-[24px] text-center transition ease-in-out duration-[.5s] hover:transform hover:scale-125"
        >
          {title}
        </li>
      </Link>
    );
  };

  return (
    <div className="w-full max-w-full bg-background">
      <nav className="flex flex-col justify-center sm:justify-between md:justify-center md:flex-col flex-wrap p-2 sm:p-6 max-w-fit mx-auto">
        <Link to="Home">
          <h1
            className="font-semibold text-[calc(24px_+_2.25vw)] px-[4px] sm:text-[36px] md:text-[40px] 
          font-universal text-center text-white mb-[10px] tracking-[16px] transition ease-in-out duration-[.5s] hover:text-accent"
          >
            Dakota Stinson
          </h1>
        </Link>
        <div className="block md:hidden mx-auto mt-[10px]">
          <button
            className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white bg-secondary-20 border-secondary-10 
            text-white hover:bg-secondary border:border-secondary-5 hover:text-slate-200 transition ease-in-out duration-[.45s]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          className={`w-full md:items-center md:flex-grow md:justify-between align-center text-center md:flex md:w-auto flex-col md:flex-row px-[25%] ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {renderNavBarTab("Home")}
          {renderNavBarTab("Gallery")}
        </ul>
      </nav>
    </div>
  );
};

//Code for the currently removed about page
//         {renderNavBarTab("About", "Bio")}
