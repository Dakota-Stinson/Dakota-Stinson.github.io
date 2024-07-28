import { echoedBeastsLink } from "@/constants/links";
import { Button } from "@components/ui/button";
import echoedBeasts from "@images/eb_cover3d.png";

export const HeroSection = () => {
  return (
    <section className="bg-hero-banner bg-cover bg-center bg-no-repeat bg-[length:100%_100vh] flex justify-center">
      <div className="flex flex-col md:flex-row justify-center align-center max-w-[1440px] mx-auto py-[1rem] md:p-[2rem] gap-[50px]">
        <div className="mr-auto place-self-center lg:col-span-7 text-justify flex flex-col justify-center items-center flex-wrap">
          <p
            className="max-w-2xl mb-6 lg:mb-8 p-3 sm:p-6 md:p-0 text-[1.375rem] sm:text-[1.5rem] md:text-[1.375rem] lg:text-[28px] text-white md:leading-10"
            style={{ textAlignLast: "center" }}
          >
            As the mercenary named Sophia sails to unfamiliar lands in the
            pursuit of strength, she gets swept up into the affairs of a cult
            whose machinations are as of yet unknown…
            <br className="mb-[2rem] md:mb-[1.5rem] lg:mb-[2rem]" />
            The prelude to the epic saga, Echoed Beasts: Sign of The Trident, is
            available now on Amazon and Kindle!
          </p>
          <Button
            title="Buy it now!"
            onClick={() => window.open(echoedBeastsLink)}
          />
        </div>
        <div className="max-w-[400px] md:min-w-[250px] text-center pr-[2.5rem] sm:pr-[5rem] md:pr-0 mx-auto">
          <img src={echoedBeasts} alt="mockup" />
        </div>
      </div>
    </section>
  );
};
