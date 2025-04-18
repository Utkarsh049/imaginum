import linkedin from "/link-black.svg";
import x from "/xblack.svg";
import sarthak from "/sarthak.png";
import kamal from "/kamal.png";
import anurag from "/anurag.png";
import cube from "/cube.svg";

export default function Team() {
  return (
    <>
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[8rem] flex flex-col gap-4 mt-36 mb-16">
        <div className="flex items-center">
        <img src={cube} alt="" className="h-12" />
        <h1 className="pl-4 md:pl-[2rem]">Our Team</h1>
        </div>
        <div className="border-gradient-custom w-[8rem] h-[0.25rem]"></div>
      </div>

      <div className=" md:my-24 md:mx-24  grid gap-12 lg:grid-cols-4 md:grid-cols-1 grid-cols-1">
        <div className="min-h-[50vh] w-full max-w-[300px] lg:max-w-[16vw] md:max-w-[50vw] rounded-md flex flex-col justify-between bg-gradient-to-tl from-[#000000] to-[#002774] mx-auto overflow-hidden border-[#575757] border">
          {/* Top Section */}
          <div className="max-h-[30vh] flex flex-col px-4 rounded-tr-md rounded-tl-md bg-[#f1f1f1] relative overflow-hidden">
            {/* Social icons */}
            <div className="flex justify-end w-full gap-4 pt-4">
              <a href="#"><img
                src={x}
                alt="Twitter"
                className=" h-8 w-8 rounded-full p-1"
              /></a>
              
              <a href=""><img
                src={linkedin}
                alt="LinkedIn"
                className="h-8 w-8 rounded-full p-1"
              /></a>
            </div>

            {/* Image container - responsive positioning */}
            <div className="flex-1 flex items-end justify-center pt-2 md:pb-4 relative">
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-transparent via-[#1f2937] to-transparent"></div>
              <img
                src={sarthak}
                alt="Sarthak"
                className="min-h-[15vh] md:min-h-[25vh] w-auto object-cover relative    lg:mt-0"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-4 py-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl text-white">Sarthak</h1>
            <h2 className="text-[#ADCC00] text-md">Co-founder | CEO</h2>
            <p className="text-[#a2a2a2] text-sm md:text-base">
              Human-centered design advocate with a background in cognitive
              psychology.
            </p>
          </div>
        </div>
        <div className="min-h-[50vh] w-full max-w-[300px] lg:max-w-[16vw] md:max-w-[50vw] rounded-md flex flex-col justify-between bg-gradient-to-tl from-[#000000] to-[#002774] mx-auto overflow-hidden border-[#575757] border">
          {/* Top Section */}
          <div className="max-h-[30vh] flex flex-col px-4 rounded-tr-md rounded-tl-md bg-[#f1f1f1] relative overflow-hidden">
            {/* Social icons */}
            <div className="flex justify-end w-full gap-4 pt-4">
            <a href="#"><img
                src={x}
                alt="Twitter"
                className=" h-8 w-8 rounded-full p-1"
              /></a>
              
              <a href=""><img
                src={linkedin}
                alt="LinkedIn"
                className="h-8 w-8 rounded-full p-1"
              /></a>
            </div>

            {/* Image container - responsive positioning */}
            <div className="flex-1 flex items-end justify-center pt-2 md:pb-4 relative">
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-transparent via-[#1f2937] to-transparent"></div>
              <img
                src={kamal}
                alt="Sarthak"
                className="min-h-[180px] md:min-h-[200px] w-auto object-contain relative md:mt-8 lg:mt-0 "
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-4 py-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl text-white">Sarthak</h1>
            <h2 className="text-[#ADCC00] text-md">Co-founder | CTO</h2>
            <p className="text-[#a2a2a2] text-sm md:text-base">
              Innovative CTO with expertise in tech development, driving
              user-centered, cutting-edge solutions.
            </p>
          </div>
        </div>
        <div className="min-h-[50vh] w-full max-w-[300px] lg:max-w-[16vw] md:max-w-[50vw] rounded-md flex flex-col justify-between bg-gradient-to-tl from-[#000000] to-[#002774] mx-auto overflow-hidden border-[#575757] border">
          {/* Top Section */}
          <div className="max-h-[30vh] flex flex-col px-4 rounded-tr-md rounded-tl-md bg-[#f1f1f1] relative overflow-hidden">
            {/* Social icons */}
            <div className="flex justify-end w-full gap-4 pt-4">
            <a href="#"><img
                src={x}
                alt="Twitter"
                className=" h-8 w-8 rounded-full p-1"
              /></a>
              
              <a href=""><img
                src={linkedin}
                alt="LinkedIn"
                className="h-8 w-8 rounded-full p-1"
              /></a>
            </div>

            {/* Image container - responsive positioning */}
            <div className="flex-1 flex items-end justify-center pt-2 md:pb-4 relative">
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-transparent via-[#1f2937] to-transparent"></div>
              <img
                src={anurag}  
                alt="Sarthak"
                className="min-h-[180px] md:min-h-[200px] w-auto object-contain relative mt-4 md:mt-8 lg:mt-4"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-4 py-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl text-white">Anurag Adarsh</h1>
            <h2 className="text-[#ADCC00] text-md">CPO | Head of Design</h2>
            <p className="text-[#a2a2a2] text-sm md:text-base">
              Creative CPO and Head of Design, shaping product vision and user
              experiences to drive innovation.
            </p>
          </div>
        </div>
        <div className="min-h-[50vh] w-full max-w-[300px] lg:max-w-[16vw] md:max-w-[50vw] rounded-md flex flex-col justify-between bg-gradient-to-tl from-[#000000] to-[#002774] mx-auto overflow-hidden border-[#575757] border">
          {/* Top Section */}
          <div className="max-h-[30vh] flex flex-col px-4 rounded-tr-md rounded-tl-md bg-[#f1f1f1] relative overflow-hidden">
            {/* Social icons */}
            <div className="flex justify-end w-full gap-4 pt-4">
            <a href="#"><img
                src={x}
                alt="Twitter"
                className=" h-8 w-8 rounded-full p-1"
              /></a>
              
              <a href=""><img
                src={linkedin}
                alt="LinkedIn"
                className="h-8 w-8 rounded-full p-1"
              /></a>
            </div>

            {/* Image container - responsive positioning */}
            <div className="flex-1 flex items-end justify-center pt-2 md:pb-4 relative">
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-transparent via-[#1f2937] to-transparent"></div>
              <img
                src={sarthak}
                alt="Sarthak"
                className="min-h-[180px] md:min-h-[200px] w-auto object-fill relative md:mt-8 lg:mt-0"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-4 py-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl text-white">Utkarsh</h1>
            <h2 className="text-[#ADCC00] text-md">Head of Development</h2>
            <p className="text-[#a2a2a2] text-sm md:text-base">
              Visionary Head of Development, leading teams to build innovative
              and scalable technology solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
