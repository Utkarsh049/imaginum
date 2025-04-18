import box from "/box.svg";
import mail from "/mail.svg";
import linkedin from "/linkedin.svg";
import whatsapp from "/whatsapp.svg";
import contactbg from "/noise.svg";
// import noise from '/noise.svg'
const Contact = () => {
  return (
      <div id='contact-home' className="min-h-[70vh] flex items-center justify-center px-4 mt-24 mb-24">
      <div className={`rounded-2xl px-8 py-16 md:p-24  mx-[2rem] md:mx-[8rem] text-center  w-full text-white shadow-2xl flex flex-col gap-2`} style={{ backgroundImage:`url(${contactbg})` }}>

    <div className="min-h-[70vh] flex items-center justify-center px-4 mt-24 lg:mb-24  mb-12">
      <div
        className={`rounded-xl px-8 py-16 md:p-24  mx-[2rem] md:mx-[8rem] text-center  w-full text-white shadow-2xl flex flex-col gap-2`}
        style={{ backgroundImage: `url(${contactbg}) ` ,backgroundSize: 'cover', backgroundPosition: 'start'}}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
            <span className="text-lime-400"> Amazing?</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with our <br />
            technical expertise and creative approach.
          </p>
        </div>
        <div className="flex justify-center mb-6 mt-4">
          <img src={box} alt="logo" className="w-8 h-8" />
        </div>

        <p className="text-white text-lg tracking-widest mb-6">Get in Touch</p>

        <div className="flex flex-col lg:flex-row lg:pl-18 lg:pr-18 gap-2 justify-evenly">
          <div className="flex items-center gap-2 bg-black/60 px-10 py-4 font-semibold rounded-lg text-sm justify-between md:justify-around outline outline-1 outline-offset-[-1px] outline-neutral-700 lg:w-[19vw]">
            <img src={mail} alt="mail" className="w-5 h-5" />
            Imaginum.org@gmail.com
          </div>
          <div className="flex items-center  bg-black/60 px-10 py-4 font-semibold  rounded-md text-sm gap-2 justify-center lg:gap-4 outline outline-1 outline-offset-[-1px] outline-neutral-700 lg:w-[19vw]">
            <img src={linkedin} alt="linkedin" className="w-5 h-5" />
            /imaginumorgg
          </div>
          <div className="flex items-center bg-black/60 px-10  py-4  font-semibold rounded-md text-sm gap-2  justify-center lg:gap-4 outline outline-1 outline-offset-[-1px] outline-neutral-700 lg:w-[19vw]">
            <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
            +91 91455 88965
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
