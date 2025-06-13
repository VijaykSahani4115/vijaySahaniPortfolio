import React, { memo, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, PERPLEXITY_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";
import { SiPerplexity } from "react-icons/si";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
    >
      <animated.img
        style={{ ...springProps }}
        src="images/profile.jpg"
        alt="Vijay"
        className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      />
      <animated.div style={slideUp}>
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
          Vijay Sahani
        </h1>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          As a React Native maestro with 4+ years of crafting seamless mobile
          experiences, I bridge cutting-edge tech with human-centric design. My
          code doesn't just function—it delivers gym gains (Gymnago), and powers
          TV ecosystems (Afasto TV OS), with 7+ live apps on Play Store and App
          Store. By day, I architect cross-platform solutions with React Native,
          Firebase, and blockchain tech (Indy SDK/Aries).
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          By night? A perpetual upskiller who speaks TypeScript fluently and
          wrestles Kotlin/Swift for native module integrations. My Gold Medalist
          MCA background fuels my obsession with clean architecture and
          Jest-tested reliability.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Beyond the IDE, I'm a mentor who's trained Builder.ai teams and led
          developer squads to 40% faster deployments. When offline, you'll find
          me reverse-engineering app animations for fun or chasing the next
          breakthrough in wearable tech (yes, I code for Apple Watch too!). My
          superpower? Turning complex problems into intuitive interfaces—one
          snackable component at a time.
          <a
            className="text-tealDesert hover:text-goldDesert transition-colors duration-300"
            href="https://www.icard.com.sa/en/category/jeem-gym?srsltid=AfmBOopR7O6BYNAQ8k4sbmtcjk0YoKhJ3scN5RwBCiTDAyFXC9D1YJgR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeem gym
          </a>
          ,{" "}
          --pure bliss!
        </p>

        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Let's collab!
        </p>
        <div className="flex justify-center items-center pb-8">
          <Anchor href={GITHUB_URL}>
            <FaGithub size={32} />
          </Anchor>
          <Anchor href={LINKEDIN_URL}>
            <FaLinkedin size={32} />
          </Anchor>
          {/* <Anchor href={PERPLEXITY_URL}>
            <SiPerplexity size={32} />
          </Anchor> */}
        </div>
        <div></div>
      </animated.div>
    </animated.div>
  );
};

export default memo(About);
