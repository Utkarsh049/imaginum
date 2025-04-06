const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center h-24 z-[20]">
        <img
          src="/Imaginum.svg"
          alt="logo"
          className="h-[2.5rem]"
        ></img>
        <div className="pr-20">
          <ul className="text-white flex gap-12 font-poppins">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">What we Offer</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Work</a>
            </li>
          </ul>
        </div>
        <button className="shadow-[0px_4px_20px_0px_#398FFF66] text-white px-8 rounded-full py-2 flex">
          <p className="font-poppins">Contact us</p>
          <img src="./arrow.svg" alt=""/>
        </button>
      </div>
    </>
  );
};

export default Navbar;
