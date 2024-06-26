import Heroimg from "../images/Hero-images.png";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  const config = {
    linkedin: "https://www.linkedin.com/in/sughan-rithvik-k-506b0a236/",
    github: "https://github.com/sughan21",
    instagram: "https://www.instagram.com/hyper_ride_100?igsh=bDM3b3g3ZnV4a21i",
  };

  return (
    <section className="flex flex-col md:flex-row px-7 py-36 pb- bg-blue-700 justify-center ">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="font-Hero-font  text-white text-6xl">
          Hi..
          <br />
          <span className="text-black">I'm</span> Sughan Rithvik
          <p className="text-2xl">
            I'm <span className="text-black">Frontend Developer</span>
          </p>
        </h1>
        <div className="flex gap-8 pt-4 text-2xl">
          <a className="hover:text-white" href={config.instagram}>
            <LuInstagram />
          </a>

          <a className="hover:text-white" href={config.linkedin}>
            <FaLinkedin />
          </a>
          <a className="hover:text-white" href={config.github}>
            <FaGithub />
          </a>
        </div>
      </div>

      <img className="md:w-1/3 " src={Heroimg} />
    </section>
  );
}
