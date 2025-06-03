import React from "react";
import hero1 from "../assets/images/hero-1.png";
import hero2 from "../assets/images/hero-2.png";
import hero3 from "../assets/images/hero-3.png";
import hero4 from "../assets/images/hero-4.png";
import hero5 from "../assets/images/hero-5.png";

const sideNewsData = [
  {
    img: hero2,
    author: "Daniel Albarta",
    date: "October 22, 2023",
    title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’...",
    category: "Our Planet",
    readTime: "8 mins read",
  },
  {
    img: hero3,
    author: "Donn Robinson",
    date: "October 21, 2023",
    title: "Rocket Lab Expects to Resume Electron Launches...",
    category: "Space and Universe",
    readTime: "4 mins read",
  },
  {
    img: hero4,
    author: "Natalia Freigman",
    date: "October 21, 2023",
    title: "Curiosity Rover Discovers New Evidence Mars Once...",
    category: "Space and Universe",
    readTime: "7 mins read",
  },
  {
    img: hero5,
    author: "Antonio Roberto",
    date: "October 19, 2023",
    title: "Satellite Data Reveals Ancient Landscape Preserved...",
    category: "Space and Universe",
    readTime: "8 mins read",
  },
];

const footerNewsData = [
  {
    author: "Donn Robinson",
    date: "October 22, 2023",
    title:
      "If Alien Life is Artificially Intelligent, it May be Stranger than We Can imagine",
    category: "Space and Universe",
    readTime: "9 mins read",
  },
  {
    author: "Max Wellerman",
    date: "October 21, 2023",
    title: "Climate change has pushed Earth into 'Uncharted territory': report",
    category: "Our Planet",
    readTime: "3 mins read",
  },
  {
    author: "Sean Paula",
    date: "October 19, 2023",
    title: "Humanity at Risk from AI ‘Race to the Bottom’, Says Tech Expert",
    category: "Technology",
    readTime: "8 mins read",
  },
  {
    author: "Laura Fransisco",
    date: "October 19, 2023",
    title: "UN Science Body Head Fears Lower Chance of Keeping Global...",
    category: "Our Planet",
    readTime: "10 mins read",
  },
];

const Hero = () => {
  return (
    <div className="mt-12">
      {/* main news */}
      <div className="flex flex-col lg:flex-row gap-5 text-[72px]">
        <div className="mx-10 order-1 lg:order-none ">
          <h2 className="leading-[40px] lg:leading-[80px] text-[25px] lg:text-[52px] max-w-full lg:max-w-[450px]">
            Russia’s Youngest-ever Astronauts Blast Off to Space Station
          </h2>
          <p className="text-sm leading-6 text-[#fff]/80 mt-3 max-w-full lg:max-w-[350px]">
            On Thursday, three Russian astronauts lifted off on the Moscow-17
            spacecraft from the Sputnik 1 Satellite Launch Center deep in the
            Gobi Desert, heading for the Mir space station for a six-month stay.
          </p>
          <span className="leading-5 text-sm text-[#fff]/80 block mt-10 lg:mt-20 ">
            Space and Universe | Daniel Albarta | October 22, 2023{" "}
          </span>
        </div>
            {/* main image */}
        <div className="mx-10 order-first lg:order-none">
            <img src={hero1} className="w-[359px] h-auto lg:h-[598px] object-cover" alt="" />
        </div>
            {/* right hero */}
        <div className="flex flex-col gap-5 text-base max-w-full lg-max-w-[350px] h-auto lg:h-[598px] order-last lg:order-none px-4 lg:px-0">
            {
                sideNewsData.map((news , index) => (
                    <div className="flex gap-3 w-full lg:w-[409px]" key={index}>
                        <img src={news.img} alt={news.title} className="w-[130px] h-[134px] rounded-sm object-cover " />
                        <div className="flex flex-col justify-between">
                            <span className="">{news.author} | {news.date}</span>
                            <p className="">{news.title}</p>
                            <span className="">{news.category} | {news.readTime}</span>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
      {/* hero footer */}
      <div className="flex flex-col lg:flex-row gap-5 m-4 lg:m-10 border-t-[1px] border-gray-400">
            {footerNewsData.map((news , index) => (
                <div className="flex flex-col gap-1 max-w-full mt-3 lg:max-w-[400px]" key={index}>
                    <span className="">{news.author} | {news.date}</span>
                    <p className="mt-1">{news.title}</p>
                    <span className="">{news.category} | {news.readTime}</span>
                </div>
            ))}
      </div>
    </div>
  );
};

export default Hero;
