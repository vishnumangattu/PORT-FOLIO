import { createElement, useRef } from "react";

const Contact = () => {
 
  return (
    <section className="bg-slate-900 text-white pt-10" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white text-4xl font-bold mb-6 mt-10">
        CONTACT ME
        </h2>
        <h4 className="subtitle text-2xl italic">
          GET IN TOUCH
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form

            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input type="text"  name="from_name"  placeholder="Name"  required className="border border-slate-600 p-3 rounded bg-transparent"  />
            <input type="email"   name="user_email"  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"  placeholder="Email Id"  required  className="border border-slate-600 p-3 rounded bg-transparent"/>
            <textarea  name="message" placeholder="Message" className="border border-slate-600 p-3 rounded h-44 bg-transparent" required></textarea>
            
            <button class="btn self-start bg-transparent hover:bg-blue-500 text-slate-100 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded">
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

      {/* Instagram */}
      <div
        data-aos="fade-down"
        data-aos-delay="860"
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
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
          </svg>
        </h4>
        <a
          className="font-poppins"
          href="https://www.instagram.com/vishnu_mangattu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          vishnu_mangattu
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
    </section>
  );
};

export default Contact;
