import { exprtise } from "@/data/expertise";
import AboutCode from "./AboutCode";

const AboutMe: React.FC = () => {
  return (
    <>
      <section
        className="bg-primary1 md:px-20 px-2 md:py-12 py-8 grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-14 w-full place-items-center"
        id="/about"
      >
        <div className="w-full ">
          <div className="w-full">
            <h1 className="md:text-4xl text-3xl text-text md:pb-4 pb-2">
              About Me
            </h1>
            <p className="text-text pb-6">
              As a passionate Front-end React Developer, I bring ideas to life
              through clean, efficient code. With a keen eye for design and a
              love for problem-solving, I create responsive and user-friendly
              web experiences that leave a lasting impression.
            </p>
            <p className="text-text pb-8 ">My Expertise Includes:</p>
          </div>
          <div className="w-full flex items-center gap-4 flex-wrap">
            {/* Mapping over the expertise array and rendering a button for each expertise */}
            {exprtise.map((exp) => (
              <button
                className="text-primary bg-text py-2 px-6 rounded-full"
                key={exp.id}
              >
                {exp.name}
              </button>
            ))}
          </div>
        </div>
        {/*//? contet two  */}
        <div className="w-full bg-secondary1 text-text md:px-6 px-3 md:py-7 py-5 rounded-md">
          <AboutCode />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
