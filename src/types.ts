export interface BookEntryData {
    //holds the image's title to be shown on hover
    imgTitle: string;
    //holds the image's url
    imgUrl: string;
    //holds the image's alt tag description
    imgAlt: string;
    // holds the website redirect for when the image is clicked on
    imgRedirect: string;
  }
  

  export interface ImageEntryData {
    //holds the image's title to be shown in the gallery
    imgTitle: string;
    //holds the image's url
    imgUrl: string;
    //holds the image's alt tag description
    imgAlt: string;
    // handles the image's row span, which sets the image's width
    imageWidth?: number;
    // handles the image's column span, which sets the image's height
    imageHeight?: number;
    // a boolean to see if the image should stretch to fill the container, or retain it's aspect ratio
    stretchImage?: boolean;
    // a string to read in the image's object-position ruling
    imagePosition?: string;
  }