import React from "react";
import assets from "../assets/assets";
import toast from "react-hot-toast";

const Contact = ({ theme }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const contactInfo = [
    {
      icon: assets.newMailLight,
      icondark: assets.newMailDark,
      title: "Email",
      description: "qureshimohsinjameel@gmail.com",
      href: "mailto:qureshimohsinjameel@gmail.com",
    },
    {
      icon: assets.phonelight,
      icondark: assets.phonedark,
      title: "Phone",
      description: "+92 348 5482695",
      href: "tel:+923485482695",
    },
    {
      icon: assets.locationlight,
      icondark: assets.locationdark,
      title: "Location",
      description: "Rawalpindi, Pakistan",
      href: "",
    },
    {
      icon: assets.linkedinlight,
      icondark: assets.linkedindark,
      title: "LinkedIn",
      description: "Todo",
      href: "",
    },
  ];
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-18 scroll-mt-16"
    >
      <div>
        <h2 className="dark:text-white font-bold text-3xl">Contact Me</h2>
        <div className="mt-8 grid md:grid-cols-2">
          <div>
            {/*Left Side */}
            <h3 className="dark:text-white font-medium text-xl ">
              Get In Touch
            </h3>
            <div className="space-y-5 mt-10">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex space-x-4 items-center">
                  <div className="w-12 h-12 bg-neutral-100  dark:bg-iconbg flex justify-center items-center rounded-full">
                    <img
                      src={theme === "dark" ? contact.icondark : contact.icon}
                      alt=""
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-white/75 text-sm">
                      {contact.title}
                    </p>
                    <a
                      href={contact.href}
                      className="font-medium dark:text-white"
                    >
                      {contact.description}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/*Right Side */}
            <h3 className="dark:text-white font-medium text-xl ">
              Send Me a Message
            </h3>
            <form className="mt-10" onSubmit={onSubmit}>
              <div className="flex gap-5 flex-col md:flex-row">
                <div className="flex flex-col space-y-3 w-full md:w-1/2">
                  <label htmlFor="name" className="dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="p-2 border rounded-md border-gray-300 dark:border-gray-400 dark:placeholder:text-white/70 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-3 w-full md:w-1/2">
                  <label htmlFor="email" className="dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-2 border rounded-md border-gray-300 dark:border-gray-400 dark:placeholder:text-white/70 w-full"
                    required
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="dark:text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="p-2 border rounded-md border-gray-300 dark:border-gray-400 dark:placeholder:text-white/70 w-full mt-3"
                  required
                ></textarea>
              </div>
              <button
                className="bg-black text-white w-full p-2 rounded-lg mt-3 cursor-pointer text-md dark:bg-white dark:text-black font-medium"
                type="submit"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-end  mt-10 pb-5 text-sm text-gray-500 dark:text-white/75">
          <p>© 2025 Mohsin. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
