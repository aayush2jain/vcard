import { IoMdStarOutline } from "react-icons/io";
import { useState } from "react";

export default function About() {
    const [about, setabout] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit...');
    const [Achievements, setachievements] = useState([]);
    const [Achievement, setachievement] = useState('');
    const [skillset, setskillset] = useState([]);
    const [skill, setskill] = useState({ title: '', description: '' });

    const addskill = (e) => {
        e.preventDefault();
        if (skill.title.trim() !== '' && skill.description.trim() !== '') {
            setskillset([...skillset, skill]);
            setskill({ title: '', description: '' });
        }
    };

    const removeSkill = (indexToRemove) => {
        setskillset(skillset.filter((_, index) => index !== indexToRemove));
    };

    const addachievement = (e) => {
        e.preventDefault();
        if (Achievement.trim() !== '') {
            setachievements([...Achievements, Achievement]);
            setachievement('');
        }
    };

    const removeAchievement = (indexToRemove) => {
        setachievements(Achievements.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="about me text-white px-4">
            {/* About Me Section */}
            <div className="h-full">
                <h1 className="text-3xl font-bold mb-[4vh] underline decoration-yellow-500">About Me</h1>
                <textarea
                    className="min-w-[100%] h-full bg-neutral-800 p-2 rounded-lg text-white"
                    value={about}
                    onChange={(e) => setabout(e.target.value)}
                />
            </div>

            {/* What I'm Doing Section (Skills) */}
            <div className="group mt-[5vh]">
                <h1 className="text-2xl font-semibold mb-4">What I'm Doing</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillset.map((s, i) => (
                        <div
                            key={i}
                            className="relative md:w-[30vw] w-full border border-neutral-700 hover:border-yellow-400 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center"
                        >
                            <button
                                className="absolute top-2 right-3 text-red-400 hover:text-red-600"
                                onClick={() => removeSkill(i)}
                            >
                                ❌
                            </button>
                            <h1 className="font-semibold text-xl text-yellow-400">{s.title}</h1>
                            <p className="text-center">{s.description}</p>
                        </div>
                    ))}
                </div>

                {/* Add Skill Form */}
                <form onSubmit={addskill} className="mt-4 space-y-2">
                    <input
                        type="text"
                        className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-600 text-white"
                        placeholder="Skill Title"
                        value={skill.title}
                        onChange={(e) => setskill({ ...skill, title: e.target.value })}
                    />
                    <textarea
                        className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-600 text-white"
                        placeholder="Skill Description"
                        value={skill.description}
                        onChange={(e) => setskill({ ...skill, description: e.target.value })}
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500"
                    >
                        Add Skill
                    </button>
                </form>
            </div>

            {/* Achievements Section */}
            <div className="mt-[6vh]">
                <h1 className="text-2xl font-semibold mb-2">Achievements</h1>
                {Achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between gap-2 mt-2 bg-neutral-800 p-2 rounded-md">
                        <div className="flex items-center gap-2">
                            <IoMdStarOutline className="text-lg text-yellow-400" />
                            <div>{achievement}</div>
                        </div>
                        <button
                            className="text-red-400 hover:text-red-600 text-sm"
                            onClick={() => removeAchievement(index)}
                        >
                            ❌
                        </button>
                    </div>
                ))}

                {/* Add Achievement Form */}
                <form onSubmit={addachievement} className="mt-4 flex gap-2">
                    <input
                        type="text"
                        className="flex-1 p-2 rounded-md bg-neutral-800 border border-neutral-600 text-white"
                        placeholder="Add a new achievement"
                        value={Achievement}
                        onChange={(e) => setachievement(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
