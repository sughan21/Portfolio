import Resume from "../images/Resume.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col px-5 py-32 bg-blue-700 text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl  border-b-4 border-[#1c1fd0] mb-3 w-[120px] font-bold font-Hero-font">
          Contact
        </h1>
        <p className="text-black font-Hero-font text-xl">
          You Want to discuss more in detail, please contact me
        </p>
        <p className="py-2">
          {" "}
          <span className="font-bold">Email:</span> sughanrithvik1@gmail.com
        </p>
        <p className="py-2">
          {" "}
          <span className="font-bold">Phone:</span> 9698970896
        </p>
      </div>
    </section>
  );
}
