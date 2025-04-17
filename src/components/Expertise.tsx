import TechCards from "./TechCards";
import logo from "/logo.svg";
const Expertise = () => {
  return (
    <>
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[8rem] flex flex-col gap-4 mt-36">
        <h1 className="pl-4 md:pl-[2rem]">Expertise</h1>
        <div className="border-gradient-custom w-[4rem]"></div>
      </div>

      <div className="px-6 md:px-[8rem] text-3xl md:text-6xl mt-4">
        <h1 className="text-[#A1B0D1] font-figtree font-bold">
          We combine <span className="text-white">technical</span> <br />
          <span className="text-white">excellence</span> with creative
          innovation <br />
          to deliver outstanding solutions.
        </h1>
      </div>
      <div className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-12 mt-24 w-full max-w-7xl ">
        <TechCards
          icon={logo}
          title="Web Development"
          description="Building responsive and dynamic web applications using the latest technologies."
          techStack={["react", "next"]}
        />
        <TechCards
          icon={logo}
          title="Web Development"
          description="Building responsive and dynamic web applications using the latest technologies."
          techStack={["react", "next"]}
        />
        <TechCards
          icon={logo}
          title="Web Development"
          description="Building responsive and dynamic web applications using the latest technologies."
          techStack={["react", "next"]}
        />
        <TechCards
          icon={logo}
          title="Web Development"
          description="Building responsive and dynamic web applications using the latest technologies."
          techStack={["react", "next"]}
        />
        <TechCards
          icon={logo}
          title="Web Development"
          description="Building responsive and dynamic web applications using the latest technologies."
          techStack={["react", "next"]}
        />
        <TechCards
          icon={logo}
          title="Web Development"
          description="Building responsive and dynamic web applications using the latest technologies."
          techStack={["react", "next"]}
        />
        </div>
      </div>
    </>
  );
};

export default Expertise;
