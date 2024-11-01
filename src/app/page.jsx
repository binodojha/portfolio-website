import Image from "next/image";
import Navbar from "@/components/navbar";
import myImage from "@/images/binod.png"
import TypeAnimation from "@/components/typing-animation";
import AboutMe from "@/components/aboutMe"
import MyServices from "@/components/myServices";
import MyResume from "@/components/myResume";

export default function Home() {
  return (
    <>
      <div className="main bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">

        <Navbar />
        <div className="home_container flex  h-full">
          <div className="home_content border-2 border-red-600 w-1/2">
            {/* <TypeAnimation/> */}
          </div>
          <div className="home_photo border-2 border-red-600 w-1/2 pb-20">
            {/* <Image className="opacity-30"
              src={myImage}
              alt="This is my image"
              width={500}
              priority
            ></Image> */}
          </div>
        </div>
        <hr className="border-purple-500"/>
        <AboutMe/>
        <hr className="border-purple-500"/>
        <MyServices/>
        <hr className="border-purple-500"/>
        <MyResume/>
      </div>
    </>
  );
}
