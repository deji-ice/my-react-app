import { PiHouseThin } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex h-[54px] w-screen justify-between  items-center drop-shadow-md px-10 py-5 bg-white">
      <img className="h-16" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1708015534/WhatsApp_Image_2024-02-15_at_17.43.39_lyqf7i.jpg" alt="" />
      <div>
        <input type="text" placeholder="Search" className="border border-slate-900 text-center " />
      </div>
      <div className="flex *:text-2xl hover:text-3xl *:cursor-pointer gap-5 items-center ">
        <PiHouseThin  className="hover:text-3xl" />
        <IoPaperPlaneOutline className="hover:text-3xl" />
        <FaRegCompass  className="hover:text-3xl"/>
        <FaRegHeart className="hover:text-3xl" />
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-224c8562e36bb65dd57873a71a827b90"
          alt=""
          className="h-8 hover:h-9 rounded-full "
        />
      </div>
    </nav>
  );
};

export default NavBar;
