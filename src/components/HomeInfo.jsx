import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, buttonText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {buttonText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I`m <span className="font-bold">Illia</span>👋! <br /> A passionate
      front-end developer with a knack for crafting engaging web experiences.
      Welcome to my 3D portfolio!`
    </h1>
  ),
  2: (
    <InfoBox
      text="Learn more about me by clicking here"
      link="/about"
      buttonText="About Me"
    />
  ),
  3: (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        Check out my projects to see my work and skills in action!
      </p>
      <div className="neo-brutalism-white neo-btn">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kliuha"
        >
          My Personal GitHub
        </a>
        <img src={arrow} className="w-4 h-4 object-contain" />
      </div>
    </div>
  ),
  4: (
    <InfoBox
      text="Looking for a developer? Get in touch with me!"
      link="/contact"
      buttonText="Contact Me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || "";
};

export default HomeInfo;
