import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '/Imaginum.svg'
import arrow from '/arrow.svg'

const Navbar = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="flex justify-between items-center h-[12vh] px-6 md:px-[6rem] z-20 w-full">
      <img src={logo} alt="logo" className="h-[2rem] md:h-[2.5rem]" />

      <motion.button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative overflow-hidden rounded-full px-4 md:px-6 py-2 flex items-center bg-black shadow-[0px_4px_20px_0px_#398FFF66]"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHover ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute left-0 top-0 h-full bg-white z-0"
        />

        <div className="relative z-10 flex items-center gap-2">
          <motion.p
            className="font-poppins text-sm md:text-base"
            animate={{ color: isHover ? '#000000' : '#FFFFFF' }}
            transition={{ duration: 0.3 }}
          >
            Contact us
          </motion.p>
          <motion.img
            src={arrow}
            alt="#"
            className="h-3 md:h-4"
            animate={{ filter: isHover ? 'invert(1)' : 'invert(0)' }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>
    </div>
  )
}

export default Navbar
