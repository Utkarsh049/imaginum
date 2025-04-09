import terminal from "/terminal.svg";
import about from "/about.svg";

const About = () => {
  return (
    <div className="relative">
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[8rem] flex flex-col gap-4">
        <h1 className="pl-4 md:pl-[2rem]">About us</h1>
        <div className="border-gradient-custom w-[4rem]"></div>
      </div>

      <div className="px-6 md:px-[8rem] text-3xl md:text-6xl mt-4">
        <h1 className="text-[#A1B0D1] font-figtree font-bold">
          Innovating <br />
          with <span className="text-white">technology</span> to create <br />a smarter future.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row px-6 md:px-[6rem] mt-12 gap-10 items-center justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="max-w-[90vw] sm:w-[15rem] flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <img src={terminal} alt="" className="h-[2.5rem] md:h-[3rem]" />
                <h1 className="text-white text-[1.25rem] md:text-[1.5rem] font-bold font-geist">
                  Excellence
                </h1>
              </div>
              <p className="text-white text-center px-4 sm:px-10 font-inconsolata text-sm tracking-tighter">
                We are committed to delivering the highest quality in everything we do,
                from code to design to client communication.
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <img src={about} alt="" className="h-[24rem] md:h-[36rem]" />
        </div>
      </div>

      <div className='absolute top-[20vh] -left-[20rem] -z-[20] hidden md:block'>
        <div className="h-[36rem] w-[36rem] rounded-full bg-[#006fff] opacity-[75%] blur-[150px]"></div>
      </div>
    </div>
  );
};

export default About;
