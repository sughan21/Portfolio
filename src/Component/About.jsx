import Aboutimg from "../images/About.png";

export default function About() {
  return (
    <section className="flex flex-col px-5 py-10 md:flex-row bg-purple-500 ">
      <div className="md:w-1/2 ">
        <img className="py-5 w-[35rem] md:ml-[5rem]" src={Aboutimg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 border-[#1c1fd0] mb-3 w-[160px] font-bold w-full font-Hero-font">
            About Me
          </h1>
          <p className="text-white font-Hero-font w-[24.2rem] text-xl">
            Hi.., My Name is Sughan Rithvik K. I'm a
            <span className="text-black"> Frontend Web Developer</span>. I Built
            Websites with
            <span className="text-black"> React</span>
          </p>
          <br />
          <p className="text-white font-Hero-font w-[22rem] text-xl">
            In Frontend I Know
            <span className="text-black">
              [HTML, CSS, TAILWIND CSS, JAVASCRIPT, REACT]
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
