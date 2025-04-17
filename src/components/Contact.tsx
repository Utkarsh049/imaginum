import box from '/box.svg'
import mail from '/mail.svg'
import linkedin from '/linkedin.svg'
import whatsapp from '/whatsapp.svg'
// import noise from '/noise.svg'
const Contact = () => {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className='bg-[url(../../public/noise.svg)] rounded-3xl px-8 py-16 md:p-24  mx-[2rem] md:mx-[8rem] text-center  w-full text-white shadow-2xl'>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something <span className="text-lime-400">Amazing?</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with our technical expertise and creative approach.
          </p>
  
          <div className="flex justify-center mb-6">
            <img src={box} alt="logo" className="w-12 h-12" />
          </div>
  
          <p className="text-gray-300 text-sm uppercase tracking-widest mb-6">Get in Touch</p>
  
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <div className="flex items-center gap-2 bg-[#0f172a] px-10 py-4  rounded-md text-sm justify-between md:justify-around">
              <img src={mail} alt="mail" className="w-5 h-5" />
              Imaginum.org@gmail.com
            </div>
            <div className="flex items-center gap-2 bg-[#0f172a] px-10 py-4   rounded-md text-sm justify-between md:justify-around">
              <img src={linkedin} alt="linkedin" className="w-5 h-5" />
              /imaginumorgg
            </div>
            <div className="flex items-center gap-2 bg-[#0f172a] px-10  py-4   rounded-md text-sm justify-between md:justify-around">
              <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
              +91 91455 88965
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact
  