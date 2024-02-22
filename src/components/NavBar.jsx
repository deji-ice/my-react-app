import { PiHouseBold } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { SiBurgerking } from "react-icons/si";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex h-[54px]  fixed w-screen justify-between gap-10  items-center drop-shadow-md px-10 py-5 bg-white">
      <img
        className="h-14  hover:h-20"
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1708072327/pngwing.com_2_nqabyj.png"
        alt=""
      />
      <div className="hidden lg:block ">
        <input
          type="text"
          placeholder="Search"
          className="border bg-gray-100 border-slate-900 text-center "
        />
      </div>
      <div className="flex lg:hidden ">
        {toggle ? (
          <GrClose
            className=" cursor-pointer"
            onClick={() => setToggle(false)}
          />
        ) : (
          <SiBurgerking
            className=" cursor-pointer"
            onClick={() => setToggle(true)}
          />
        )}

        {toggle && (
          <div className="flex gap-3 flex-col absolute w-screen left-0 top-14 px-10 py-5 bg-slate-400">
            <p>Home</p>
            <p>Message</p>
            <p>Navigate</p>
            <p>About</p>
            <p>profile</p>
          </div>
        )}
      </div>

      <div className="hidden lg:flex *:text-2xl w-80 justify-end *:cursor-pointer gap-5 items-center ">
        <PiHouseBold className="hover:text-3xl" />
        <IoPaperPlaneOutline className="hover:text-3xl" />
        <FaRegCompass className="hover:text-3xl" />
        <FaRegHeart className="hover:text-3xl" />
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-224c8562e36bb65dd57873a71a827b90"
          alt=""
          className="h-8 hover:h-9 rounded-full"
        />
      </div>
    </nav>
  );
};

export default NavBar;
