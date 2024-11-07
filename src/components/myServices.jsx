import { FaCode, FaMobileAlt,  FaUserTie, FaChalkboardTeacher, FaBullhorn, FaSearch} from "react-icons/fa";
export default function MyServices() {
    const services = [
        { id: 1, title: "Web Development", description: "Responsive, custom websites using HTML, CSS, JavaScript, React, and Next.js", icon: <FaCode/>},
        { id: 2, title: "Digital Marketing", description: "SEO, content, and social media strategies to grow online reach", icon: <FaBullhorn/>},
        { id: 3, title: "Freelancing", description: "Flexible development and digital marketing services tailored to project needs", icon: <FaUserTie/>},
        { id: 4, title: "SEO Optimization", description: "Improve website ranking and visibility on search engines", icon: <FaSearch/>},
        { id: 5, title: "App Development", description: "Cross-platform mobile applications using Flutter", icon: <FaMobileAlt/>},
        { id: 6, title: "Teaching & Mentorship", description: "Web development and digital marketing lessons for learners at beginner level", icon:<FaChalkboardTeacher/>}
    ];
    return (
        <>
            <div className="myServices py-12 ">
                <h2 className="text-center pb-12 font-bold text-4xl"><span className="">My Services</span></h2>
                <div className="services px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                    {services.map((service) => (
                        <div key={service.id} className="service p-6 bg-purple-800 rounded-lg shadow-md text-center hover:bg-gray-900 hover:border-b-4 hover:border-blue-400 hover:-translate-y-2 hover:translate-x-2 transition duration-1000">
                            <div className="icon flex justify-center text-6xl pb-4">{service.icon}</div>
                            <div className="title font-bold text-3xl pt-4">{service.title}</div>
                            <div className="description text-xl text-gray-200 pt-6">{service.description}</div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </>
    );
}