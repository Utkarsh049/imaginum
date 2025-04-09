import explore from '/explore.svg'
import element from '/element.svg'
import { TextHoverEffect } from "./ui/text-hover-effect"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='lg:min-h-[85vh] min-h-[48vh] flex flex-col justify-between mt-16 py-8 px-6 md:px-12'>
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="px-4 py-1 text-[#D4FA00] border border-[#D4FA00] rounded-full text-xs md:text-sm font-lexend font-light">
          Innovate • Design • Build
        </div>

        <h1 className="font-bold text-white text-[2rem] md:text-[3rem] capitalize leading-[140%]">
          Building the future with smart,<br />seamless technology.
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden group rounded-full px-6 py-2 bg-white text-black font-poppins flex items-center gap-2 transition-all duration-300 shadow-[0px_4px_20px_0px_#398FFF33] hover:bg-black hover:text-white"
        >
          <span className="relative z-10">Explore Now</span>
          <img src={explore} alt="" className="relative z-10 w-4 h-4 transition duration-300 group-hover:invert" />
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#398FFF66] to-transparent translate-x-[-100%] group-hover:translate-x-full transition-transform duration-500 ease-in-out blur-md opacity-80" />
        </motion.button>
      </div>

      <div className="hidden h-[20rem] md:h-[25rem] lg:flex items-center justify-center font-raleway mt-12 mx-4">
        <TextHoverEffect text="IMAGINUM" />
      </div>

      <img src={element} alt="#" className='absolute h-32 md:h-40 top-[22rem] left-6 -z-20' />
      <img src={element} alt="#" className='absolute h-24 md:h-28 top-[10rem] right-12 -z-20' />
    </div>
  )
}

export default Hero
