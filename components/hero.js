import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import { Navigation } from "../constants/Nav";
import { products } from "../resources/products";

export default function Hero() {
  return (
    <>
      <Container
        id={Navigation.Home}
        className="flex h-[100vh] max-w-[1300px] mx-auto flex-col-reverse lg:flex-row gap-10 justify-center items-center mt-10"
      >
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              We are <span className="text-primary">Tanbel</span>
            </h1>
            <p className="pt-2 pb-10 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Designers, developers and dreamers. We design, develop and test
              mobile and web apps. Research new ideas and technologies.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="flex mx-auto max-h-[400px] max-w-[400px]">
          {/* <Image
            src={heroImg}
            width="400"
            height="400"
            alt="Hero Illustration"
            layout="intrinsic"
            loading="eager"
            placeholder="blur"
          /> */}
          <img src="./img/hero.png" />
        </div>
      </Container>
      <Container id={Navigation.Clients}>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Our top selling products <span className="text-indigo-600">worldwide</span>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {products.map((p) => (
              <TeamCard link={p.link}>{p.name}</TeamCard>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

const TeamCard = ({ children, link }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="cursor-pointer w-full md:w-[250px] h-[200px] flex justify-center items-center text-3xl font-extrabold dark:bg-gray-800 text-primary rounded-md p-5 shadow-primary border-t-2 border-primary"
    >
      {children}
    </a>
  );
};
