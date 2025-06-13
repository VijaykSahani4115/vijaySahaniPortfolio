import { useSpring, animated, config } from "react-spring";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import React, { memo, useState, useEffect } from "react";
import { SiPerplexity } from "react-icons/si";

export default function ContactMe() {
  const contactSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 89805 32603",
      href: "tel:+918980532603",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "vijayksahani.vs@gmail.com",
      href: "mailto:vijayksahani.vs@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/VijaykSahani4115",
      href: "https://github.com/VijaykSahani4115",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/vijay-sahani-5009991b8",
      href: "https://www.linkedin.com/in/vijay-sahani-5009991b8/",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "@vijay_sahani0101",
      href: "https://www.instagram.com/vijay_sahani0101/",
    },
  ];
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
    <animated.section
      id="contact-me"
      className="flex flex-col items-center justify-center bg-lightDesert p-8 rounded-lg shadow-md min-h-screen"
      style={contactSpring}
    >
      <div className="w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold text-darkDesert mb-8">Contact Me</h1>
        <animated.div
          style={fadeIn}
          id="about"
          className="container mx-auto flex flex-col items-center justify-center bg-lightDesert mb-10"
        >
          <animated.img
            style={{ ...springProps }}
            src="images/profile.jpg"
            alt="Vijay"
            className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-4 mt-2"
            onMouseEnter={() => setScale(1.1)}
            onMouseLeave={() => setScale(1)}
          />
        </animated.div>
        <ul className="space-y-5 text-left">
          {contactDetails.map((detail, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 text-darkDesert text-lg"
            >
              <span className="text-2xl text-goldDesert">{detail.icon}</span>
              <a
                href={detail.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-words"
              >
                <span className="font-medium">{detail.label}:</span>{" "}
                {detail.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </animated.section>
  );
}
