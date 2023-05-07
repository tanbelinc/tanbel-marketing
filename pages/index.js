import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team from "../components/Team";
import { Navigation } from "../constants/Nav";

export default function Home() {
  const nav = Navigation;
  return (
    <>
      <Head>
        <title>Tanbel Inc.</title>
        <meta
          name="description"
          content="Tanbel is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        id={nav.Services}
        pretitle="At a glance"
        title="Why Tanbel?"
      >
        Our products are both affordable and high-quality, produced through the
        implementation of leading-edge techniques and development methodologies
        that facilitate efficient and structured production of advanced
        technological solutions.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        id={nav.Team}
        pretitle="Our Team"
        title="Know our internal power"
      >
        Tanbel Executive Leadership and Senior Management bring decades of
        industry experience, a global perspective and a passion for achieving
        results.
      </SectionTitle>
      <Team />
      <br />
      <br />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        We are proud to have worked with Wecycle, a leading rental solution
      </SectionTitle>
      <Video />
      <SectionTitle
        id={nav.Pricing}
        pretitle="Pricing"
        title="How Tanbel cost you?"
      >
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </SectionTitle>
      <Pricing />
      <SectionTitle
        id={nav.Review}
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Tanbel has been helping technology startups, global brands, and Fortune
        companies create impactful software solutions. Learn why they have
        chosen us and how we have helped them to change people’s lives.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        id={nav.FAQ}
        pretitle="FAQ"
        title="Frequently Asked Questions"
      >
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq /> */}
      <Cta />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
}
