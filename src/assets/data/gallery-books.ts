import { echoedBeastsLink, evolverBladeLink } from "@/constants/links"
import { BookEntryData } from "@/types"
import echoedBeasts from "@images/eb_coverkindle.jpg"
import evolverBlade from "@images/evbcoverthumb.jpg"

/*
    In order to make add new book to the gallery, follow these steps: 

    1. I want to add my book called "The Adventures of Duck Jones" to the book gallery.
    First I need to make sure it is found inside the images folder.
    The cover's name is "duck-jones-cover.jpg" for this example,
    So I would add the following import above: import duck from "@assets/images/duck-jones-cover.jpg"

    2. After creating the import, I would then need to go and add it to the array below. 
    Keep in mind that both where it is added in the array AND it's sizes will matter to how the gallery looks.
    Copy and paste the following into the imageEntries array below:
    
        {
            imgTitle: "NAME",
            imgAlt: "IMAGE DESCRIPTION",
            imgUrl: new-image-import-you-created,
            imageRedirect: "WEBSITE REDIRECT HERE"
        },

    3. Now the new image's entry needs to be modified. Here is what each value does:

    ----REQUIRED VALUES---- These are required for the gallery to run
    imgTitle - This is what text title to be displayed with the image when hovered over. This needs to be wrapped around quotes!
 
    imgAlt - This is what the image's alt tag's description will be. This is used if the imgae fails to load and more importantly, by E-readers!
    So if you care about your seeing impared or blind viewers, be descriptive with your alt tags! This needs to be wrapped around quotes!

    imgUrl - This takes in the image import you created in step 1! So for my duck example, it would take in just the word duck

    imageRedirect - This is what website will open when the image is clicked on. This needs to be wrapped around quotes!
  */

export const bookEntries: BookEntryData[] = [
    /*
    {
        imgTitle: "Echoed Beasts",
        imgUrl: echoedBeasts,
        imgAlt: "Echoed Beasts Cover",
        imgRedirect: echoedBeastsLink
    },
    */
    {
        imgTitle: "Evolver Blade",
        imgUrl: evolverBlade,
        imgAlt: "Evolver Blade Cover",
        imgRedirect: evolverBladeLink
    },
    
]
