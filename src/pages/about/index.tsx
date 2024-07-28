import { echoedBeastsLink, twitterLink } from "@/constants/links";
import guy from "@images/fhantom.jpg";
import ebCover from "@images/eb_coverkindle.jpg";

export const About = () => {
  return (
    <div className="max-w-full bg-fontColor flex flex-row justify-center align-center">
      <article className="max-w-[960px] flex justify-between flow-root">
        <div className="mx-auto align-center">
          <div>
            <h1 className="font-bold font-universal mb-[10px]">Bio</h1>
          </div>
          <img
            src={guy}
            alt="agga"
            className="float-left pr-[25px] pb-[25px]"
          />
          <p>
            I was born in Upstate New York in 1996, and have lived there for
            just about all my life until moving to Alabama and then eventually
            Kentucky. For about most of the time I've been sentient, I've been
            drawing and coming up with stories, and I’m so glad to finally be
            able to bring my ideas to life. What really inspired me to write
            though was discovering tabletop gaming like Dungeons & Dragons™ back
            in 2017. I had played in a few campaigns, and DM’d a few myself, and
            seeing my friends get invested in the characters and world I had
            created convinced me that it was worth it to spread my work to a
            wider audience.
          </p>
        </div>
      </article>
      <aside className="flex flex-col p-5 bg-background-20 gap-[10px] max-w-[300px]">
        <img
          src={ebCover}
          alt="Echoed BEasts Cover"
          className=" max-w-[200px]"
        />
        <h3 className="font-bold">On Sale Now!</h3>
        <a href={echoedBeastsLink}>Amazon</a>
        <br />
        <h3 className="font-bold">Follow on Twitter!</h3>
        <a href={twitterLink}>{twitterLink}</a>
      </aside>
    </div>
  );
};
