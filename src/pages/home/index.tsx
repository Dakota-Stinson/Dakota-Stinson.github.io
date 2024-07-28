import dakotaImage from "@images/DakotaStinson.jpg";
import echoedBeasts from "@images/eb_coverkindle.jpg";
import { EntryDescription } from "@/components/entry-description";
import { BookGallery } from "@/components/gallery/book-gallery";
import { HeroSection } from "@/components/hero-section";
import { BackgroundVariants, FontVariants } from "@/constants/colors";
import { echoedBeastsLink } from "@/constants/links";

export const Home = () => {
  return (
    <>
      <HeroSection />

      <EntryDescription
        entryTitle={"About Echoed Beasts:"}
        description={` A blend of Dark and Epic Fantasy inspired by tabletop games and
              Japanese Manga, Sign of The Trident is the first in a nine part
              series about the adventures of Sophia and her companions as they
              embark on a quest to obtain the Holy Grail before it can fall into
              the hands of the nefarious Trident Cult. But more than that, it’s
              a story about overcoming trauma and learning to rely on others.
              Political Intrigue, interpersonal philosophies, and a healthy dose
              of good old fashioned bloody violence await in the lands of
              Soreth.`}
        imageURL={echoedBeasts}
        imageAlt={"Echoed Beast Book Cover"}
        titleColor={FontVariants.accent}
        sectionBG={BackgroundVariants.fontColor}
        buttonProps={{
          onClick: () => window.open(echoedBeastsLink),
          buttonTitle: "Buy it now!",
        }}
      />

      <BookGallery galleryTitle="Also by Dakota Stinson" />

      <EntryDescription
        entryTitle={"About the Author:"}
        description={`I was born in Upstate New York in 1996, and have lived there for
              just about all my life until moving to Alabama and then eventually
              Kentucky. For about most of the time I've been sentient, I've been
              drawing and coming up with stories, and I’m so glad to finally be
              able to bring my ideas to life. What really inspired me to write
              though was discovering tabletop gaming like Dungeons & Dragons™
              back in 2017. I had played in a few campaigns, and DM’d a few
              myself, and seeing my friends get invested in the characters and
              world I had created convinced me that it was worth it to spread my
              work to a wider audience.`}
        imageURL={dakotaImage}
        imageAlt={"A photo image of Dakota Stinson"}
        imageOnLeft
        titleColor={FontVariants.accent}
        sectionBG={BackgroundVariants.fontColor}
      />
    </>
  );
};
