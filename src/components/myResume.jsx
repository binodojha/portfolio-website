import { FaGraduationCap } from "react-icons/fa";

export default function MyResume() {
    return (
        <>
            <div className="myResume py-16">
                <h2 className="text-center pb-20 font-bold text-4xl">Resume</h2>
                <div className="resumes">
                    <div className="text-center text-xl">
                        <div className=" w-0.5 h-10 bg-gray-500 mx-auto"></div>
                        <span className="bg-gray-500 rounded-sm p-2">EDUCATION</span>
                        <div className=" w-0.5 h-10 bg-gray-500 mx-auto"></div>
                        <div className="icon flex justify-center text-4xl"><span className="bg-gray-600 rounded-full p-1"><FaGraduationCap /></span></div>
                    </div>
                </div>
            </div>
        </>

    );
}
