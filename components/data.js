import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our services",
  desc: "Tanbel has grown into an international contestant in software engineering with wide-ranging expertise in all the areas needed for reliable software development.",
  image: "./img/benefit-one.png",
  bullets: [
    // ecommerce, non- profit organization, e-commerce, marketplace, ed-tech and property management
    {
      title: "E-commerce",
      icon: <CursorClickIcon />,
    },
    {
      title: "Non-profit Organization",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Marketplace",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Education Technology",
      icon: <SunIcon />,
    },
    {
      title: "Property Management",
      icon: <AdjustmentsIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Benefits you will get",
  desc: "Using deep domain expertise of our software developers, we create impactful digital solutions that drive meaningful change with a strategic vision.",
  image: "./img/benefit-two.png",
  bullets: [
    {
      title: "Modern and clean design",
      desc: "Aesthetic and functional aspects of a software application or website that follow contemporary design principles.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Complete ownership of the codebase",
      desc: "Ability to fully control and modify the source code of a software application or website, without any external constraints or limitations.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Extensive production level support",
      desc: "Ongoing maintenance, updates, and technical assistance will be provided to ensure the optimal performance, security, and scalability",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
