import { FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PublicProps {
  // Holds the page's title
  pageTitle: string;
}

export const PageTitle: FunctionComponent<PublicProps> = ({ pageTitle }) => {
  const location = useLocation();

  //Update the site's title whenever we load a new page
  useEffect(() => {
    document.title = pageTitle + " - Dakota Stinson";
  }, [location, pageTitle]);

  return null;
};
