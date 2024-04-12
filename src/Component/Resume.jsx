import Resume from "../images/Resume.png";

export default function Reusme() {
  const config = {
    link: "https://drive.google.com/file/d/1nUClyCj5i2sKmlz8F0QfO3LJOi08RbJM/view",
  };
  return (
    <section
      id="resume"
      className="flex flex-col px-5 py-10 md:flex-row bg-purple-500 "
    >
      <div className="md:w-1/2 flex justify-end">
        <img className="py-5 w-[500px] md:ml-[5rem]" src={Resume} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 border-[#1c1fd0] mb-3 w-[120px] font-bold font-Hero-font">
            Resume
          </h1>
          <p className="text-white font-Hero-font w-[24.2rem] text-xl">
            You can view my resume{" "}
            <a
              className="bg-blue-700 px-2 py-[0.5px] font-bold  hover:border-[0.5px]  border-white rounded"
              href={config.link}
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
