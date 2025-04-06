import explore from '../../public/explore.svg';
import { TextHoverEffect } from "./ui/text-hover-effect";
import element from '../../public/element.svg';

const Hero = () => {
  return (
    <>
    <div className='h-[85vh] flex flex-col justify-between mt-16 py-8'>
      <div className="flex justify-center flex-col items-center gap-6 ">
        <div className="px-4 py-1 text-[#D4FA00] border border-[#D4FA00] rounded-full text-[0.75rem]   text-center font-lexend font-light">
          Innovate • Design • Build
        </div>
        <h1 className="font-bold text-white text-[3rem] text-center capitalize leading-[140%] tracking-[0]">
          Building the future with smart,
          <br />
          seamless technology.
        </h1>
        <button className="bg-white flex px-4 py-2 rounded-md shadow-[0px_4px_60px_0px_#398FFF99]">
          <p className="pl-2">Explore Now</p>{" "}
          <img src={explore} alt="" />
        </button>
      </div>
      <div className="h-[25rem] flex items-center justify-center font-raleway mt-8">
        <TextHoverEffect text="IMAGINUM" />
      </div>
      <img src={element} alt="#" className='absolute h-40 top-[22rem] left-[6rem]' />
      <img src={element} alt="#" className='absolute h-28 top-[10rem] right-[12rem]' />
    </div>
    </>
  );
};

export default Hero;
