import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer, { FollowUs } from "../../components/footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Text from "../../components/text";
import Textarea from "../../components/Input/textarea";
import Logo from "../../components/Logo";
import { toast } from "react-toastify";
import { sendMail } from "../../utils/email";

export default function Home() {
  const [loader, setLoader] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
   console.log(form);
    if (form.name === "" || form.email === "" || form.message === "") {
      toast.error("Please fill all fields", {
        position: "bottom-left",
        theme: "dark",
      });
      return;
    }
    try {
      setLoader(true);
      await sendMail({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      setLoader(false);
      toast.success("Message send successfully", {
        position: "bottom-left",
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="min-h-[100vh] mt-[50px] lg:px-7 flex">
        <div className="max-w-7xl mx-auto my-auto bg-gray-100 dark:bg-gray-900 flex lg:flex-row flex-col">
          <div className="flex flex-col justify-center w-full p-14">
            <Text className="text-4xl font-bold">Contact</Text>
            <Text className="my-3">
              Get in touch and let us know how we can help.
            </Text>
            <hr className="mt-2 mb-10" />
            <div className="mt-3">
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="mt-3">
              <Input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="mt-3">
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
              />
            </div>
            <div className="flex mt-10">
              <Button
                loading={loader}
                loaderText="Sending"
                onClick={handleSubmit}
              >
                Send
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full w-full bg-gray-800 p-14">
            <div>
              <img className="h-full w-full" src="/img/contact.png" />
            </div>
            <div className="lg:col-span-2">
              <Logo dark />
              <div className="max-w-md mt-4 text-gray-500">
                We are designers, developers and dreamers. We design, develop
                and test mobile and web apps. Research new ideas and
                technologies.
              </div>
              <FollowUs className="mt-10" title={<></>} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
