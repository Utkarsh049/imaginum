import logo from '../../public/Imaginum.svg'
import arrow from '../../public/arrow.svg'
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[15vh] z-[20] px-[6rem]">
        <img
          src={logo}
          alt="logo"
          className="h-[2.5rem]"
        ></img>

        <button className="shadow-[0px_4px_20px_0px_#398FFF66] bg-black text-white px-8 rounded-full py-2 flex">
          <p className="font-poppins">Contact us</p>
          <img src={arrow} alt="#"/>
        </button>
      </div>
    </>
  );
};

export default Navbar;
