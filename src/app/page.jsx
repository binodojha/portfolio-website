import Image from "next/image";
import Navbar from "@/components/navbar";
import myImage from "@/images/binod.png"
// import TypeAnimation from "@/components/typing-animation";
import AboutMe from "@/components/aboutMe"
import MyServices from "@/components/myServices";
import MyResume from "@/components/myResume";
import MySkills from "@/components/skills";
import ContactMe from "@/components/contactMe";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="main bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 scroll-smooth">

        <Navbar />
        <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Binod Ojha</h1>
        <p className="text-2xl font-light max-w-2xl text-center mb-8">
          Crafting digital experiences that are beautiful, functional, and impactful.
        </p>
        <p className="text-lg mb-4 italic">"Building the web, one line of code at a time."</p>

        {/* Taglines */}
        <div className="text-center space-y-2 mb-8">
          <p>• Transforming ideas into digital reality •</p>
          <p>• Frontend Enthusiast | Backend Builder | Tech Explorer •</p>
          <p>• Empowering businesses through web innovation •</p>
        </div>
        </section>
        <hr className="border-purple-500" />
        <AboutMe />
        <hr className="border-purple-500" />
        <MyServices />
        <hr className="border-purple-500" />
        <MyResume />
        <hr className="border-purple-500" />
        <MySkills />
        <hr className="border-purple-500" />
        <ContactMe />
        <hr className="border-purple-500" />
        <Footer/>
      </div>
    </>
  );
}
