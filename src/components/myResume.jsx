import { FaGraduationCap, FaCalendar, FaLandmark, } from "react-icons/fa";

export default function MyResume() {
    const resumes = [
        { id: 1, degree: "Bachelor in Computer Science & Information Technology", college: "Kailali Multiple Campus, Dhangadhi", date: "2021 - Present"},
        { id: 2, degree: "+2 Science", college: "Aishwarya Multiple Campus, Dhangadhi", date: "2018 - 2020" },
        { id: 3, degree: "SEE", college: "Aishwarya Vidya Niketen, Dhangadhi", date: "2016" }
    ];
    return (
        <>
            <div className="myResume py-16 ">
                <h2 className="text-center pb-20 font-bold text-5xl">Resume</h2>
                <div className="resumes">
                    <div className="mx-32 text-center text-xl">
                        <span className="bg-gray-500 rounded-sm p-2">EDUCATION</span>
                        <div className="content">
                            {resumes.map((resume) => (
                                <div className="resume " key={resume.id}>
                                    <div className="rContent py-8 mx-48 bg-gray-600 my-8 rounded-xl hover:shadow-xl">
                                        <div className="flex px-2 pb-2">
                                            <span className=""><FaGraduationCap className="text-3xl text-blue-500"/></span>
                                            <div className="title font-bold text-2xl ml-2 ">{resume.degree}</div>
                                        </div>
                                        <div className="flex pl-2 pb-3">
                                            <div className=""><FaCalendar className="text-2xl"/></div>
                                            <div className="college ml-2 text-xl text-gray-300">{resume.date}</div>
                                        </div>
                                        <div className="flex pl-2">
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
