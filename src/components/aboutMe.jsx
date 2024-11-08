import MyPhoto from "@/images/binod.png";
import Image from "next/image";
export default function aboutMe() {
    return (
        <>
            <div className="about_container text-white py-16">
                <h2 className="text-center font-bold text-4xl"><span className=""> About Me</span></h2>
                <div className="about_content pl-20 pr-10 flex space-x-10 pt-12">
                    <div className="flex items-center justify-center  photo_container w-1/2 ">
                        <div className="aPhoto mt-2 w-1/2 bg-slate-300 border-2 border-black rounded-full overflow-hidden">
                            <Image
                                src={MyPhoto}
                                alt="my Image"
                            >
                            </Image>
                        </div>
                    </div>
                    <div className="aContent_container  w-1/2  text-xl leading-9 text-justify">
                        <p>Hello! I’m Binod Ojha, a web developer passionate about creating interactive, user-friendly digital experiences. With expertise in HTML, CSS, JavaScript, React, and Next.js, I specialize in crafting responsive layouts and seamless designs. My projects range from e-commerce platforms to personal apps, all with a focus on functionality and scalability, supported by a solid understanding of MySQL.</p>
                        <p className="mt-10">My approach combines technical expertise with creative problem-solving, resulting in solutions that are not only functional but also visually stunning and user-friendly.</p>
                    </div>
                </div>
            </div>




        </>
    );
}