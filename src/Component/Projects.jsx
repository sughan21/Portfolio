import projectimg1 from "../images/sony.png";
import projectimg2 from "../images/Book.png";
import projectimg3 from "../images/website.png";

export default function About() {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-blue-700 text-white font-Hero-font">
      <div className="w-full flex flex-col px-10 py-5">
        <h1 className="text-4xl text-white border-b-4 border-[#9d1cd0] mb-3 w-[140px] font-bold w-full font-Hero-font">
          Projects
        </h1>
        <p className="text-black text-xl">
          There are some fo my Best Project I have built these with React, Check
          them out
        </p>
      </div>
      <div className="w-[full]">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img className=" h-[200px] w-[500px]" src={projectimg1} />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-purple-400 opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                Sony Ecommerce Website. Built with Frontend
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={projectimg2} />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-purple-400 opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                Book Finder Website. Built with Frontend
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={projectimg3} />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-purple-400 opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                Trainer and Student Website. Built with Frontend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
