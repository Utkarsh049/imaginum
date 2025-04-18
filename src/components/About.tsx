import square from "/square.svg";
import { useEffect, useState } from "react";
import { OrbitingCircles, Icons } from "./magicui/orbiting-circles";
import img1 from "/img1.svg";
import img2 from "/img2.svg";
import img3 from "/img3.svg";
import img4 from "/img4.svg";

// import { OrbitingCircles } from "./magicui/orbiting-circles";
// import OrbitComponent from "./Orbit";
const title = ["Innovation", "Integrity", "Creativity", "Excellence"];
const desc = ["Constantly pushing boundaries and exploring new technologies", "Building trust through honesty and transparency", "Bringing unique and artistic perspectives to every project", "Delivering nothing short of the highest quality work"];
const image = [img1, img2, img3, img4];

const About = () => {
  const [radiusLarge, setRadiusLarge] = useState(200);
  const [radiusSmall, setRadiusSmall] = useState(130);
  const [sizeset, setSizeset] = useState(38);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // You can tweak the values based on your design
      setRadiusLarge(width < 768 ? 150 : 200);
      setRadiusSmall(width < 768 ? 100 : 130);
      setSizeset(width < 768? 32 : 48);
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="about-home" className="relative">
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[8rem] flex flex-col gap-4">
        <div className="flex items-center">
          <img src={square} alt="image" className="size-9"/>
          <h1 className="pl-4 md:pl-[1rem]">About us</h1>
        </div>
        <div className="border-gradient-custom w-[6rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.50px] outline-cyan-400/40 rounded"></div>
      </div>

      <div className="px-6 md:px-[8rem] text-3xl md:text-6xl mt-4">
        <h1 className="text-[#A1B0D1] font-geist font-bold">
          Innovating <br />
          with <span className="text-white">technology</span> to create <br />a
          smarter future.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row px-6 md:px-[6rem] mt-12 gap-10 items-center justify-between">
        <div className="grid grid-cols-2 gap-10">
          {title
            .map((e, i) => (
              <div
                key={i}
                className="max-w-[90vw] sm:w-[15rem] flex flex-col items-center gap-3"
              >
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={image[i]}
                    alt=""
                    className="h-[2.5rem] md:h-[2.5rem]"
                  />
                  <h1 className="text-white text-[1.25rem] md:text-[1.5rem] font-bold font-geist">
                    {e}
                  </h1>
                </div>
                <p className="text-white text-center px-4 sm:px-10 font-figtree text-base tracking-tighter">
                  {desc[i]}
                </p>
              </div>
            ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-[95vw] lg:h-[95vw] max-w-[700px] max-h-[700px] min-w-[320px] min-h-[320px] aspect-square">
            <OrbitingCircles iconSize={sizeset} radius={radiusLarge}>
              <Icons.figma />
              <Icons.github />
              <Icons.nextjs />
              <Icons.mongodb />
            </OrbitingCircles>
            <OrbitingCircles iconSize={sizeset} radius={radiusSmall} reverse speed={1}>
              <Icons.react />
              <Icons.node />
              <Icons.tailwind />
              <Icons.js />
              <Icons.html />
            </OrbitingCircles>
          </div>
        </div>
      </div>

      <div className="absolute top-[32vh] md:top-[20vh] left-1/2 -translate-x-1/2 md:left-[-20rem] md:translate-x-0 -z-[20]">
        <div className="h-[24rem] w-[24rem] md:h-[36rem] md:w-[36rem] rounded-full bg-[#006fff] opacity-[75%] blur-[300px]"></div>
      </div>
    </div>
  );
};

export default About;
