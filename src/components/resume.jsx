import { useState } from "react";
import { TfiBook } from "react-icons/tfi";
import { MdOutlineWorkHistory } from "react-icons/md";

function TimelineItem({ title, year, description, isLast }) {
  return (
    <div className="flex gap-8 relative mb-6">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-yellow-400 border-[3px] border-neutral-600/70 rounded-full mt-1.5 -ml-1.5 z-10"></div>
        {!isLast && <div className="w-[1px] h-full -ml-1.5 bg-neutral-600/70"></div>}
      </div>
      <div className="mb-2.5">
        <h1 className="text-zinc-100 font-semibold">{title}</h1>
        <h2 className="text-sm mt-1 text-yellow-400">{year}</h2>
        {description && <h3 className="text-neutral-200 mt-1">{description}</h3>}
      </div>
    </div>
  );
}

export default function Education() {
  const [educationData, setEducationData] = useState([
    { title: "Delhi College of Engineering", year: "2023 — 2027" },
  ]);
  const [experienceData, setExperienceData] = useState([
    { title: "Software Engineer Intern", year: "2023 — Present", description: "Working on React and Node.js" },
  ]);
  const [skills, setSkills] = useState([
    { name: "Web Design", percent: 80 },
    { name: "Branding", percent: 90 },
  ]);

  // Form states
  const [eduInput, setEduInput] = useState({ title: "", year: "" });
  const [expInput, setExpInput] = useState({ title: "", year: "", description: "" });
  const [skillInput, setSkillInput] = useState({ name: "", percent: "" });

  const handleAddEducation = (e) => {
    e.preventDefault();
    if (eduInput.title && eduInput.year) {
      setEducationData([...educationData, eduInput]);
      setEduInput({ title: "", year: "" });
    }
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (expInput.title && expInput.year && expInput.description) {
      setExperienceData([...experienceData, expInput]);
      setExpInput({ title: "", year: "", description: "" });
    }
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skillInput.name && skillInput.percent) {
      setSkills([...skills, { name: skillInput.name, percent: parseInt(skillInput.percent) }]);
      setSkillInput({ name: "", percent: "" });
    }
  };

  return (
    <div className="px-6 md:px-0 relative text-white">
      <h1 className="text-3xl font-bold mb-[4vh] underline decoration-yellow-500">Resume</h1>

      {/* Education */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <span className="text-yellow-400 mr-4 text-xl p-3 border-l-[1px] border-t-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl ml-1.5">
            <TfiBook />
          </span>{" "}
          Education
        </h2>
        <div className="ml-7">
          {educationData.map((item, idx) => (
            <TimelineItem key={idx} {...item} isLast={idx === educationData.length - 1} />
          ))}
        </div>

        <form onSubmit={handleAddEducation} className="mt-4 space-y-2">
          <input type="text" placeholder="Institution" className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md" value={eduInput.title} onChange={(e) => setEduInput({ ...eduInput, title: e.target.value })} />
          <input type="text" placeholder="Years (e.g., 2020 - 2024)" className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md" value={eduInput.year} onChange={(e) => setEduInput({ ...eduInput, year: e.target.value })} />
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-500">Add Education</button>
        </form>
      </section>

      {/* Experience */}
      <section className="mt-[4vh]">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <span className="text-yellow-400 mr-4 text-xl p-3 border-l-[1px] border-t-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl ml-1.5">
            <MdOutlineWorkHistory />
          </span>{" "}
          Experience
        </h2>
        <div className="ml-7">
          {experienceData.map((item, idx) => (
            <TimelineItem key={idx} {...item} isLast={idx === experienceData.length - 1} />
          ))}
        </div>

        <form onSubmit={handleAddExperience} className="mt-4 space-y-2">
          <input type="text" placeholder="Job Title" className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md" value={expInput.title} onChange={(e) => setExpInput({ ...expInput, title: e.target.value })} />
          <input type="text" placeholder="Years" className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md" value={expInput.year} onChange={(e) => setExpInput({ ...expInput, year: e.target.value })} />
          <textarea placeholder="Description" className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md" value={expInput.description} onChange={(e) => setExpInput({ ...expInput, description: e.target.value })} />
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-500">Add Experience</button>
        </form>
      </section>

      {/* Skills */}
      <div className="mt-[5vh]">
        <h1 className="text-2xl font-bold mb-4">My Skills</h1>
        <div className="p-6 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-lg">
          {skills.map((skill, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-[#2e2e2e] h-2 rounded-full">
                <div className="h-2 rounded-full bg-yellow-400" style={{ width: `${skill.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddSkill} className="mt-4 space-y-2">
          <input type="text" placeholder="Skill Name" className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md" value={skillInput.name} onChange={(e) => setSkillInput({ ...skillInput, name: e.target.value })} />
          <input type="number" placeholder="Proficiency %" className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-md" value={skillInput.percent} onChange={(e) => setSkillInput({ ...skillInput, percent: e.target.value })} />
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-500">Add Skill</button>
        </form>
      </div>
    </div>
  );
}

