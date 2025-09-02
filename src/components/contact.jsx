import { IoSend } from "react-icons/io5";

export default function Contact() {
    return(
        <>
                        <h1 className="text-3xl font-bold mb-[4vh] p-1 underline-offset-16 underline decoration-[2px]  decoration-yellow-500">Contact Me</h1>
  <div className="flex flex-col items-center justify-center mt-4 bg-neutral-900 text-white px-4 py-2">
  <p className="text-lg my-4 text-center text-gray-300">Woulds love to hear from you!</p>

  {/* Contact Form */}
<form className="w-full max-w-2xl space-y-4 border-b-1 border-neutral-700 p-4 rounded-3xl shadow-lg">
  <div className="flex flex-col md:flex-row gap-4">
    <input
      type="text"
      placeholder="Full Name"
      className="flex-1 p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
      required
    />
    <input
      type="email"
      placeholder="Email Address"
      className="flex-1 p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
      required
    />
  </div>

  <textarea
    placeholder="Your Message"
    className="w-full p-4 h-32 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
    required
  ></textarea>

  {/* Button aligned right */}
  <div className="flex justify-end">
    <button
      type="submit"
      className="flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 transition-colors rounded-xl text-black font-semibold text-lg"
    >
      <span>Send Message</span>
      <IoSend className="text-xl mt-[2px]" />
    </button>
  </div>
</form>


  {/* Social Links */}
    <h1 className="text-xl font-semibold mt-4 text-center">Let’s Connect</h1>

  <div className="mt-2 flex flex-wrap justify-center gap-6 text-2xl">
    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <i className="fab fa-linkedin hover:text-yellow-400"></i>
    </a>
    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <i className="fab fa-instagram hover:text-yellow-400"></i>
    </a>
    <a href="https://www.pinterest.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
      <i className="fab fa-pinterest hover:text-yellow-400"></i>
    </a>
    <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <i className="fab fa-youtube hover:text-yellow-400"></i>
    </a>
    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <i className="fab fa-github hover:text-yellow-400"></i>
    </a>
    <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <i className="fab fa-twitter hover:text-yellow-400"></i>
    </a>
    <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <i className="fab fa-facebook hover:text-yellow-400"></i>
    </a>
  </div>
</div>

</>
    )
}