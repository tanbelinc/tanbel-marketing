import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "./container";
import Slider from "react-slick";

const members = [
  {
    name: "Tanvir Ahmed",
    title: "CEO at Tanbel",
    image: "./member/Tanvir.png",
  },
  {
    name: "Tamzeed Ahmed",
    title: "CTO at Tanbel",
    image: "./member/Tamzeed.png",
  },
  {
    name: "Zahin Afsar",
    title: "Software Engineer",
    image: "./member/Zahin.png",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoPlay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
};

export default function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const windowSize = window.innerWidth;
      const groupSize = windowSize > 900 ? 3 : 1;
      const groupedArr = [];
      for (let i = 0; i < members.length; i += groupSize) {
        const newArr = members.slice(i, i + groupSize);
        const newArrLength = newArr.length;
        if (newArrLength < groupSize) {
          const extraArr = members.slice(0, groupSize - newArrLength);
          groupedArr.push([...newArr, ...extraArr]);
        } else {
          groupedArr.push(newArr);
        }
      }
      setData(groupedArr);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Slider {...settings}>
        {data.map((group, i1) => (
          <div>
            <div className="flex justify-center">
              {group.map((data, i2) => (
                <div className="mx-3 flex-col justify-center px-14">
                  <img width={200} src={data.image} className="mb-4"/>
                  <p className="text-center text-xl font-bold text-primary">{data.name}</p>
                  <p className="text-center">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}