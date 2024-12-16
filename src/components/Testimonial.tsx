"use client";

import { Link } from "react-scroll";

const Testimonial = () => {
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <>
      <section className="px-3 py-10 text-center md:px-20 md:py-14 bg-gradient-to-r from-primary1 to-secondary1">
        <h1 className="pb-12 text-3xl text-center capitalize text-text">
          What Clients Say
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 ">
          {testimonial.map((test) => (
            <div
              className="w-full px-6 py-8 text-left rounded-md h-fit bg-secondary1 text-text"
              key={test.id}
            >
              <p className="pb-3 text-lg">{test.text}</p>
              <p className="text-lg text-right">{test.name}</p>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="py-3 lg:px-4 px-3 border-none mt-10  shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] text-base rounded-3xl hover:opacity-50 bg-text text-primary font-semibold capitalize inline-block cursor-pointer"
          onClick={() => {
            handleSetActive("/contact");
          }}
        >
          Start your Project today
        </Link>
      </section>
    </>
  );
};

export default Testimonial;

const testimonial = [
  {
    id: 1,
    text: "Oplano's expertise in React transformed our project. His dedication and skill set are unmatched!",
    name: "- Stephen., Data Scientist",
  },
  {
    id: 2,
    text: "Working with Oplano was a game-changer. His front-end skills brought our vision to life",
    name: "- Eric Pewee Flomo",
  },
  {
    id: 3,
    text: "Oplano's attention to detail and problem-solving abilities made our complex project a success.",
    name: "- Emily T., Senior Developer",
  },
];
