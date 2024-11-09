import { FaGraduationCap, FaCalendar, FaLandmark, } from "react-icons/fa";

export default function MyResume() {
    const resumes = [
        { id: 1, degree: "Bachelor in Computer Science & Information Technology", college: "Kailali Multiple Campus, Dhangadhi", date: "2021 - Present"},
        { id: 2, degree: "+2 Science", college: "Aishwarya Multiple Campus, Dhangadhi", date: "2018 - 2020" },
        { id: 3, degree: "SEE", college: "Aishwarya Vidya Niketen, Dhangadhi", date: "2016" }
    ];
    return (
        <>
            <div className="myResume py-12 ">
                <h2 className="text-center pb-12 font-bold text-4xl">Resume</h2>
                <div className="resumes">
                    <div className="mx-32 text-center text-xl">
                        <span className="bg-purple-800 rounded-sm p-2 font-bold">EDUCATION</span>
                        <div className="content">
                            {resumes.map((resume) => (
                                <div className="resume " key={resume.id}>
                                    <div className="rContent py-8 px-4 mx-48 bg-purple-800 my-8 rounded-xl hover:shadow-xl">
                                        <div className="flex pb-2">
                                            <span className=""><FaGraduationCap className="text-3xl "/></span>
                                            <div className="title font-bold text-2xl ml-2 ">{resume.degree}</div>
                                        </div>
                                        <div className="flex pb-3">
                                            <div className=""><FaCalendar className="text-2xl"/></div>
                                            <div className="college ml-2 text-xl text-gray-300">{resume.date}</div>
                                        </div>
                                        <div className="flex ">
                                            <div className="text-2xl"><FaLandmark/></div>
                                            <div className="college ml-2 text-xl ">{resume.college}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
