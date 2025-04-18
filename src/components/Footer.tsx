import insta from "/insta.svg";
import whatsapp from "/whatsapp.svg";
import linkedin from "/linkedin.svg";
import x from "/x.svg";
import { FaArrowUp } from "react-icons/fa";
// import footerbg from '/herobg.svg'
import Footerbg from "./Footerbg";
const Footer = () => {

  const handleClick = () => {
   window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  }

  return (
    <>
      <div className="relative overflow-hidden">
        <footer className="w-full text-white px-8 md:px-48 py-10 lg:py-[30vh] md:mb-0">
          <div className="max-w-7xl mx-auto flex gap-8 border-b border-white/75 pb-24 justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-blue-500 mb-3 font-figtree">
                Imaginum
              </h2>
              <p className="text-md text-gray-300 max-w-xs font-figtree lg:w-60">
                Building next-generation digital experiences with cutting-edge technology and futuristic design.
              </p>
            </div>

            <div className="flex justify-between gap-24">
            <div>
              <h3 className="text-xl font-semibold mb-4 font-figtree">Quick Links</h3>
              <ul className="space-y-1 text-lg text-gray-300 font-figtree">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Expertise</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 font-figtree">Follow Us</h3>
              <div className="flex items-center gap-4 text-2xl aspect-auto">
                <a href="#">
                  <img src={insta} alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="#">
                  <img src={x} alt="Twitter" className="w-8 h-8" />
                </a>
                <a href="#">
                  <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
                </a>
              </div>
            </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-10 text-base text-white font-semibold">
            <p>© 2025 Imaginum. All rights reserved.</p>
            <button
              title="Scroll to top"
              className="p-3 flex items-center justify-center rounded-full bg-white text-black"
              onClick={handleClick}
            >
              <i className=""><FaArrowUp size={18}/></i>
            </button>
          </div>
        </footer>
        <Footerbg />
      </div>
    </>
  );
};

export default Footer;
