import { useState } from "react";

export default function Project() {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      year: "2023",
      description: "A personal portfolio website showcasing my projects and skills.",
      link: "https://myportfolio.com",
    },
    {
      title: "E-commerce Platform",
      year: "2022",
      description: "An e-commerce platform built with React and Node.js.",
      link: "https://ecommerceplatform.com",
    },
    {
      title: "Blog Application",
      year: "2021",
      description: "A blog application with user authentication and CRUD operations.",
      link: "https://myblogapp.com",
    },
  ]);

  const [projectInput, setProjectInput] = useState({
    title: "",
    year: "",
    description: "",
    link: "",
  });

  const handleAddProject = (e) => {
    e.preventDefault();
    const { title, year, description, link } = projectInput;
    if (title && year && description && link) {
      setProjects([...projects, projectInput]);
      setProjectInput({ title: "", year: "", description: "", link: "" });
    }
  };

  return (
    <section className="px-6 md:px-0 relative">
      <h1 className="text-3xl font-[700] mb-[6vh] p-1 underline-offset-16 underline decoration-[2px] decoration-yellow-500">
        Projects
      </h1>

      {projects.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col ml-2 md:flex-row gap-6 group ${
            idx !== projects.length - 1 ? "border-b border-neutral-700 pb-4 mb-4" : ""
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-[40%] group-hover:border-1 border-yellow-400 rounded-2xl overflow-hidden">
            <img
              className="rounded-2xl w-full h-full object-cover shadow-md"
              src={'blog-1.jpg'} // Replace with dynamic or default thumbnail logic if needed
              alt={item.title}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center w-full">
            <h3 className="text-2xl transition-colors duration-400 ease-in-out font-semibold text-white group-hover:text-yellow-400 mb-1">
              {item.title} ({item.year})
            </h3>
            <p className="text-sm text-gray-400">React, Node.js, Express</p>
            <p className="text-gray-300 mt-2">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline mt-3 inline-block transition-colors duration-200 ease-in-out"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Form to Add New Project */}
      <form onSubmit={handleAddProject} className="mt-10 bg-neutral-800 p-6 rounded-2xl space-y-4 shadow-lg">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">Add New Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={projectInput.title}
          onChange={(e) => setProjectInput({ ...projectInput, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Year"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={projectInput.year}
          onChange={(e) => setProjectInput({ ...projectInput, year: e.target.value })}
        />
        <textarea
          placeholder="Project Description"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={projectInput.description}
          onChange={(e) => setProjectInput({ ...projectInput, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Project Link"
          className="w-full p-2 bg-neutral-900 text-white border border-neutral-600 rounded"
          value={projectInput.link}
          onChange={(e) => setProjectInput({ ...projectInput, link: e.target.value })}
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-all"
        >
          Add Project
        </button>
      </form>
    </section>
  );
}
