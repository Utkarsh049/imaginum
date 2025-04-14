import hexa from "/Hexagons.svg";
import element from "/element.svg";
import Card from "./Cards";
import laptop from "/laptop.svg";
// import Light from './Light'
import { motion, animate, useMotionValue } from "framer-motion";
const Projects = () => {
  const img1X = useMotionValue(0);
  const img1Y = useMotionValue(0);
  return (
    <>
      <motion.img
        style={{ x: img1X, y: img1Y }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.5}
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ zIndex: 50 }}
        onDragEnd={() => {
          animate(img1X, 0, { type: "spring", stiffness: 200 });
          animate(img1Y, 0, { type: "spring", stiffness: 200 });
        }}
        src={element}
        alt="#"
        className="absolute h-28 md:h-40 md:top-[112rem] md:left-32 left-64 top-[130rem] z-20 cursor-grab active:cursor-grabbing"
      />
      <img
        src={hexa}
        alt="#"
        className="md:h-[30rem] h-[24rem] ml-12 absolute"
      />
      <div className="relative mt-48">
        <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[8rem] flex flex-col gap-4">
          <h1 className="pl-4 md:pl-[2rem]">Our Projects</h1>
          <div className="border-gradient-custom w-[4rem]"></div>
        </div>

        <div className="px-6 md:px-[8rem] text-3xl md:text-6xl mt-4">
          <h1 className="text-[#A1B0D1] font-figtree font-bold">
            We build <br />
            real world <span className="text-white">Projects</span> that <br />
            create impact
          </h1>
        </div>
      </div>
      <Card
        image={laptop}
        name="CSED VIT"
        subtitle="Official Website"
        description="Cloud-based control system for fleet management of autonomous drones with real-time telemetry and mission planning."
        tags={["HTML", "CSS"]}
        liveUrl="https://csedvit.com/"
        buttonText="View Website"
        imagePosition="right"
      />
      <Card
        image={laptop}
        name="CAMPUSMART"
        subtitle="Shopping platform"
        description="Cloud-based control system for fleet management of autonomous drones with real-time telemetry and mission planning."
        tags={["HTML", "CSS"]}
        liveUrl="https://csedvit.com/"
        buttonText="View Website"
        imagePosition="left"
      />
      <Card
        image={laptop}
        name="CABSYNC"
        subtitle="A Travel Partner"
        description="Cloud-based control system for fleet management of autonomous drones with real-time telemetry and mission planning."
        tags={["HTML", "CSS"]}
        liveUrl="https://csedvit.com/"
        buttonText="View Website"
        imagePosition="right"
      />
      <Card
        image={laptop}
        name="YOUR NEXT PROJECT"
        subtitle="Start building here"
        description="Cloud-based control system for fleet management of autonomous drones with real-time telemetry and mission planning."
        tags={["HTML", "CSS"]}
        liveUrl="https://csedvit.com/"
        buttonText="View Website"
        imagePosition="left"
      />

      {/* <Light top={170} left={20}></Light>
<Light top={265} left={60}></Light> */}

<div className="absolute top-[336vh] left-1/2 -translate-x-1/2 md:left-[36rem] md:translate-x-0 -z-[80]">
  <div className="h-[24rem] w-[24rem] md:h-[36rem] md:w-[36rem] rounded-full bg-[#006fff] opacity-[75%] blur-[400px] md:blur-[600px]"></div>
</div>

      <div className="absolute top-[460vh] left-1/2 -translate-x-1/2 md:top-[520vh] md:left-[60rem] md:translate-x-0 -z-[80]">
  <div className="h-[24rem] w-[24rem] md:h-[36rem] md:w-[36rem] rounded-full bg-[#006fff] opacity-[75%] blur-[400px] md:blur-[600px]"></div>
</div>

    </>
  );
};

export default Projects;
