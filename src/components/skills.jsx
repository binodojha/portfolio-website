import React from "react";
export default function MySkills() {
    const skills = [
        { id: 1, name: "HTML/CSS", level: 90 },
        { id: 2, name: "NextJs", level: 80 },
        { id: 3, name: "JavaScript", level: 80 },
        { id: 4, name: "MySQL", level: 65 },
        { id: 5, name: "SEO", level: 75 },
        { id: 6, name: "Flutter", level: 85 },
    ];

    return (
        <>
            <div className="skills_container pt-10 pb-20">
                <h2 className="text-center font-bold text-4xl pb-12">Skills</h2>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 text-2xl  w-2/3">
                        {skills.map((skill) => (
                            <div className="skill" key={skill.id}>
                                <div className="flex justify-between text-lg mb-2">
                                    <span>{skill.name}</span>
                                    <span className="">{skill.level}%</span>
                                </div>
                                <div className="progressBar w-full bg-gray-600 rounded-md h-2.5">
                                    <div className=" bg-blue-500 h-2.5 rounded-md" style={{ width: `${skill.level}%`}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </>
    );
}