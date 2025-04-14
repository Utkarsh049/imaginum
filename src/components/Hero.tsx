import explore from '/explore.svg'
import element from '/element.svg'
import { TextHoverEffect } from "./ui/text-hover-effect"
import { motion, useMotionValue, animate } from 'framer-motion'

const Hero = () => {
  // For img1
  const img1X = useMotionValue(0)
  const img1Y = useMotionValue(0)
  
  // For img2
  const img2X = useMotionValue(0)
  const img2Y = useMotionValue(0)

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

      <div className="hidden h-[20rem] md:h-[25rem] lg:flex items-center justify-center font-raleway mt-12 mx-4 ">
        <TextHoverEffect text="IMAGINUM" />
      </div>

      <motion.img
        style={{ x: img1X, y: img1Y }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.5}
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ zIndex: 50 }}
        onDragEnd={() => {
          animate(img1X, 0, { type: "spring", stiffness: 200 })
          animate(img1Y, 0, { type: "spring", stiffness: 200 })
        }}
        src={element}
        alt="#"
        className='absolute h-28 md:h-40 md:top-[22rem] md:left-6 left-3 top-[26rem] cursor-grab active:cursor-grabbing'
      />

      <motion.img
        style={{ x: img2X, y: img2Y }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.5}
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ zIndex: 50 }}
        onDragEnd={() => {
          animate(img2X, 0, { type: "spring", stiffness: 200 })
          animate(img2Y, 0, { type: "spring", stiffness: 200 })
        }}
        src={element}
        alt="#"
        className='absolute h-24 md:h-28 top-[10rem] md:right-12 right-6 cursor-grab active:cursor-grabbing'
      />
    </div>
  )
}

export default Hero