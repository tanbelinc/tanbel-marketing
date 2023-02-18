import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "./container";
import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import Slider from "react-slick";

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

export default function Testimonials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 5 }).map((_, i) => ({
      key: i,
    }));
    const handleResize = () => {
      const windowSize = window.innerWidth;
      const groupSize = windowSize > 1600 ? 3 : windowSize > 1200 ? 2 : 1;
      const groupedArr = [];
      for (let i = 0; i < arr.length; i += groupSize) {
        const newArr = arr.slice(i, i + groupSize);
        const newArrLength = newArr.length;
        if (newArrLength < groupSize) {
          const extraArr = arr.slice(0, groupSize - newArrLength);
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
            <div className="flex">
              {group.map((data, i2) => (
                <div className="mx-3 flex-col justify-between bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                  <p className="text-2xl leading-normal ">
                    {data?.key} Share a real <Mark>testimonial</Mark>
                    that hits some of your benefits from one of your popular
                    customer.
                  </p>
                  <Avatar
                    image={userOneImg}
                    name="Sarah Steiner"
                    title="VP Sales at Google"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
