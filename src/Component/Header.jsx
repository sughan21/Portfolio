import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between bg-blue-400 px-4 py-6">
      <a href="#" className="font-bold text-2xl">
        <span className="text-white">P</span>rotfolio
      </a>
      <nav className=" hidden md:block">
        <ul className="flex gap-5 text-white text-xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className=" block md:hidden">
          <ul className="flex flex-col gap-3 text-purple-400 text-xl fixed top-20 left-0 w-full p-4 text-center font-bold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Reusme</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="text-white text-3xl block md:hidden"
      >
        <CiMenuFries />
      </button>
    </div>
  );
}
