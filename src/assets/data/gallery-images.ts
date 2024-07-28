import { ImagePositions } from "@/constants/object-positions"
import { ImageEntryData } from "@/types"
import sophia from "@images/gallery/1-Sophia.jpg"
import hookIsland from "@images/gallery/2-Hook_Island.jpg"
import lee from "@images/gallery/3-Lee.jpg"
import ingor from "@images/gallery/4-Ingor.jpg"
import fahim from "@images/gallery/5-Fahim.jpg"
import katerina from "@images/gallery/6-Katerina_and_Vex.jpg"
import soreth from "@images/gallery/7-Soreth.jpg"
import jupiter from "@images/gallery/8-Planet_Jupiter.jpg"
  
/*
    In order to make add new image to the gallery, follow these steps: 

    1. I want to add my image called "Duck.jpg" to the image gallery.
    First I need to make sure it is in the gallery folder found inside the images folder.
    The location is assets/images/gallery.
    Then I would add the following import above: import duck from "@images/gallery/duck.jpg"

    2. After creating the import, I would then need to go and add it to the array below. 
    Keep in mind that both where it is added in the array AND it's sizes will matter to how the gallery looks.
    Copy and paste the following into the imageEntries array below:
    
        {
            imgTitle: "NAME",
            imgAlt: "IMAGE DESCRIPTION",
            imgUrl: new-image-import-you-created,
            imageWidth: 1,
            imageHeight: 1,
            stretchImage: false,
            imagePosition: ImagePositions.center,
        },

    3. Now the new image's entry needs to be modified. Here is what each value does:

    ----REQUIRED VALUES---- These are required for the gallery to run
    imgTitle - This is what text title to be displayed with the image. This needs to be wrapped around quotes!
 
    imgAlt - This is what the image's alt tag's description will be. This is used if the imgae fails to load and more importantly, by E-readers!
    So if you care about your seeing impared or blind viewers, be descriptive with your alt tags! This needs to be wrapped around quotes!

    imgUrl - This takes in the image import you created in step 1! So for my duck example, it would take in just the word duck

    ----OPTIONAL VALUES---- Any or all of these options can be added or removed and the gallery will run fine
    imageWidth - This sets how big the image will be horizontally in the image gallery. 
    If the gallery's images don't fill out the whole gallery horizontally, the aspect ratios may get a little wonky!
    This takes in a number from 1 to 12. 1 will be the smallest the image can get, while 12 will be the whole size of the gallery.

    imageHeight - This sets how big the image will be vertically in the image gallery.
    This takes in any number, but try to keep them lower, as much bigger numbers will add to the screen's length.

    stretchImage - This determines if you want the image to stretch to fit it's container fully, but could mess with it's clarity and aspect ratio.
    Set this to true if you want it to stretch, or set it to false or don't add this entry at all if you don't.

    imagePosition - This will set where the image's preview will be focused. By default, it is focused on the center.
    To set this value, enter in ImagePositions and add a period to it. This will let you choose any of positioning options.
    Setting it to the top will have the image be focused at the top of it, while the bottom will focus on it's bottom.
    If I wanted the image to be focused on the right, I would set it as ImagePositions.right
  */

export const imageEntries: ImageEntryData[] = [
    {
        imgTitle: "Sophia",
        imgAlt: "Sophia",
        imgUrl: sophia,
        imageWidth: 2,
        imageHeight: 3,
        stretchImage: true,
        imagePosition: ImagePositions.center,
    },
    {
        imgTitle: "Map of Hook Island",
        imgAlt: "A Map of Hook Island",
        imgUrl: hookIsland,
        imageWidth: 2,
        imageHeight: 3,
        imagePosition: ImagePositions.top,
        stretchImage: true,
    },
    {
        imgTitle: "Lee",
        imgAlt: "Lee",
        imgUrl: lee,
        imageWidth: 2,
        imageHeight: 2,
        imagePosition: ImagePositions.top,
    },
    {
        imgTitle: "Ingor",
        imgAlt: "Ingor",
        imgUrl: ingor,
        imageWidth:1,
        imageHeight: 2,

    },

    {
        imgTitle: "Katerina & Vex",
        imgAlt: "Katerina & Vex",
        imgUrl: katerina,
        imageWidth: 2,
        imageHeight: 3,
    },
    {
        imgTitle: "Planet Jupiter",
        imgAlt: "Planet Jupiter",
        imgUrl: jupiter,
        imageWidth: 2,
        imageHeight: 2,
        //stretchImage: true
        imagePosition: ImagePositions.top,
    },
    {
        imgTitle: "Map of Soreth",
        imgAlt: "A Map of Soreth",
        imgUrl: soreth,
        imageWidth: 2,
        imageHeight: 2,
        //imagePosition: ImagePositions.top,
       // stretchImage: true
    },
    {
        imgTitle: "Fahim",
        imgAlt: "Fahim",
        imgUrl: fahim,
        imageWidth: 1,
        imageHeight: 2,
        imagePosition: ImagePositions.top
    },
  ];