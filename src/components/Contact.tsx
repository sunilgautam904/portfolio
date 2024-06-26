"use client";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Snackbar, Alert } from "@mui/material";

import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

/**
 * This component renders the footer section of the website, providing various functionalities such as
 * an about section, quick navigation links, contact information, and a contact form.
 */
const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  useEffect(() => {
    if (message) {
      setShowSnackbar(true);
      const timer = setTimeout(() => {
        setShowSnackbar(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  /**
   * This method handles the change event for form inputs.
   * Updates the formData state with the new input values.
   * @param event - The event object from the input change event.
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * This method handles the form submission event.
   * Prevents the default form submission, constructs the email parameters,
   * sends an email using EmailJS, and resets the form data.
   * @param event - The event object from the form submission event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Sunil Gautam",
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("Message sent successfully!");
          setIsError(false);
        },
        (error) => {
          console.error("FAILED...", error);
          setMessage("Failed to send message. Please try again later.");
          setIsError(true);
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  /**
   * This method handles the close event for the Snackbar.
   * Sets the state to hide the Snackbar.
   */
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div id="contact" className="text-black py-16">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Hi, I'm Sunil, a passionate web developer specializing in creating
            interactive and responsive web applications. Let's connect and build
            something amazing together!
          </p>
          <div className="flex justify-start space-x-4 my-6">
            <FaLinkedin
              className="hover:text-blue-500"
              size={30}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sunil-gautam-308937170/",
                  "_blank"
                )
              }
            />
            <FaInstagram
              className="hover:text-pink-500"
              size={30}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/sunilgautam08/",
                  "_blank"
                )
              }
            />
            <FaTwitterSquare
              className="hover:text-blue-400"
              size={30}
              onClick={() =>
                window.open("https://x.com/sunilgautam08/", "_blank")
              }
            />
            <FaGithubSquare
              className="hover:text-gray-400"
              size={30}
              onClick={() =>
                window.open("https://github.com/sunilgautam904", "_blank")
              }
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li className="mb-2">
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">Email: sunil904gautam@gamil.com</p>
          <p className="mb-2">Phone: +91 8837877083</p>
          <p className="mb-2">Address: Chandigarh, India</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 mb-4 rounded-md text-gray-900"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 mb-4 rounded-md text-gray-900"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-2 mb-4 rounded-md text-gray-900"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-[#240046] rounded-md py-2 hover:bg-purple-400 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={isError ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <div className="text-center mt-8">
        <p>&copy; 2024 Sunil Gautam. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
