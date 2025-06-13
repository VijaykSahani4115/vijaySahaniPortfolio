import { useTrail, animated } from "react-spring";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
  FaApplePay,
  FaApple,
  FaAndroid,
  FaTv,
  FaStopwatch,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiYarn,
  SiVite,
  SiMysql,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", label: "HTML5", Component: FaHtml5 },
  { id: "css", label: "CSS3", Component: FaCss3Alt },
  { id: "javascript", label: "JavaScript", Component: SiJavascript },
  { id: "typescript", label: "TypeScript", Component: SiTypescript },
  { id: "react", label: "React Native", Component: FaReact },
  { id: "react", label: "React", Component: FaReact },
  { id: "tailwind", label: "Tailwind", Component: SiTailwindcss },
  { id: "mui", label: "MUI", Component: SiMui },
  { id: "npm", label: "NPM", Component: FaNpm },
  { id: "yarn", label: "Yarn", Component: SiYarn },
  { id: "vite", label: "Vite", Component: SiVite },
  { id: "vscode", label: "VS Code", Component: SiVisualstudiocode },
  { id: "bootstrap", label: "Bootstrap", Component: FaBootstrap },
  { id: "github", label: "GitHub", Component: DiGithubBadge },
  { id: "gitlab", label: "Git Lab", Component: DiGithubBadge },
  { id: "apple", label: "Apple", Component: FaApple },
  { id: "applepay", label: "Apple Pay", Component: FaApplePay },
  { id: "android", label: "Android", Component: FaAndroid },
  { id: "tv", label: "TV", Component: FaTv },
  { id: "watch", label: "Apple watch", Component: FaStopwatch },
  { id: "watchandroid", label: "Android watch", Component: FaWatchmanMonitoring },
];

export default function Skills() {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });

  return (
    <div
      id="skills"
      className="bg-lightDesert rounded-lg shadow-md flex items-center justify-center min-h-screen"
    >
      <div className="text-center max-w-5xl w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-darkDesert mb-8">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {trail.map((style, index) => {
            const { Component, label, id } = skills[index];
            return (
              <animated.div
                key={id}
                style={style}
                className="flex flex-col items-center text-blue-800 hover:text-darkDesert transform transition duration-300 hover:scale-110"
              >
                <Component className="text-5xl mb-2" />
                <span className="text-sm font-medium text-center">{label}</span>
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
