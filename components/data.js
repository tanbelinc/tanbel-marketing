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
    {
      title: "Web App Development",
      desc: "We have a proven track record of delivering web apps.",
      icon: <CursorClickIcon />,
    },
    {
      title: "Mobile App Development",
      desc: "We use latest technologies to build mobile apps.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Analytical Solutions",
      desc: "We are working with big data for data Analytics.",
      icon: <ChartSquareBarIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Benefits you will get",
  desc: "Using deep domain expertise of our software developers, we create impactful digital solutions that drive meaningful change with a strategic vision.",
  image: "./img/benefit-two.png",
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "We deliver a device responsive software for your system.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Accessibility",
      desc: "Full access to the client during the development process.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Modern and Clean Design",
      desc: "We offers a modern and clean design for your system.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
