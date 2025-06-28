


import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3xvdjza",
        "template_90mld2j", // Replace with your EmailJS template ID
        formRef.current,
        "byKj8M6R8Y4Hvo8-a" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
          console.error(error.text);
        }
      );

    // Optionally, clear the form
    e.target.reset();
  };

  return (
    <section className="bg-slate-900 text-white pt-10 box-border" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white text-4xl font-bold mb-6 mt-10">CONTACT ME</h2>
        <h4 className="subtitle text-2xl italic">GET IN TOUCH</h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent"
              required
            ></textarea>
            <button
              type="submit"
              className="btn self-start bg-transparent hover:bg-blue-500 text-slate-100 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
            >
              Submit
            </button>
          </form>

          <div className="flex-1 flex flex-col gap-5">
            {/* Email */}
      <div
        data-aos="fade-down"
        data-aos-delay="0"
        className="flex items-center gap-2"
      >
        <h4 className="text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
            ></path>
          </svg>
        </h4>
        <a
          className="font-poppins"
          href="mailto:vishnumangattu03@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         vishnumangattu03@gmail.com
        </a>
      </div>

      {/* WhatsApp */}
      <div
        data-aos="fade-down"
        data-aos-delay="430"
        className="flex items-center gap-2"
      >
        <h4 className="text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
          </svg>
        </h4>
        <a
          className="font-poppins"
          href="https://wa.me/7736721396"
          target="_blank"
          rel="noopener noreferrer"
        >
          +91 7736721396
        </a>
      </div>

     
       {/* LinkedIn */}
       <div
        data-aos="fade-down"
        data-aos-delay="1290"
        className="flex items-center gap-2"
      >
        <h4 className="text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 0H4C1.791 0 0 1.791 0 4v16c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zM7 20H4V9h3v11zM5.5 7.5C4.672 7.5 4 6.828 4 6s.672-1.5 1.5-1.5S7 5.172 7 6s-.672 1.5-1.5 1.5zM20 20h-3v-5.5c0-3.59-4-3.324-4 0V20h-3V9h3v1.764C14.615 9.054 20 8.711 20 14.5V20z"></path>
          </svg>
        </h4>
        <a
          className="font-poppins"
          href="https://www.linkedin.com/in/vishnu-v-nair-8a0074341/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vishnu V Nair
        </a>
      </div>

      
      {/* Twitter */}
      <div
        data-aos="fade-down"
        data-aos-delay="2150"
        className="flex items-center gap-2"
      >
        <h4 className="text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.633 7.997c.013.176.013.354.013.531 0 5.429-4.132 11.689-11.689 11.689-2.318 0-4.471-.676-6.283-1.854.324.038.648.05.985.05 1.926 0 3.69-.648 5.1-1.737a4.11 4.11 0 01-3.833-2.85c.257.038.514.063.783.063.378 0 .752-.05 1.1-.138a4.102 4.102 0 01-3.292-4.02v-.05a4.15 4.15 0 001.85.514A4.102 4.102 0 012.83 5.23c0-.755.203-1.452.558-2.057a11.66 11.66 0 008.453 4.288 4.624 4.624 0 01-.102-.939 4.104 4.104 0 017.102-2.81 8.19 8.19 0 002.605-.992 4.088 4.088 0 01-1.803 2.268 8.258 8.258 0 002.357-.638 8.89 8.89 0 01-2.051 2.13z"></path>
          </svg>
        </h4>
        <a
          className="font-poppins"
          href="https://twitter.com/@vishnumangattu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vishnu V Nair
        </a>
      </div>
      {/* GitHub */}
      <div
        data-aos="fade-down"
        data-aos-delay="1720"
        className="flex items-center gap-2"
      >
        <h4 className="text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.85 2.33.65.07-.52.28-.85.51-1.05-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </h4>
        <a
          className="font-poppins"
          href="https://github.com/vishnumangattu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          vishnumangattu
        </a>
      </div>

           
          </div>
        </div>
        

      </div>
      <p className="text-slate-300 text-md text-center">&copy; 2024 VishnuvNair. All rights reserved.</p>
    </section>
  );
};

export default Contact;
