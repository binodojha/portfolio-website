import { FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link";
export default function Footer(){
    return(
        <>
        <footer className="mx-auto p-4 flex items-center justify-between text-sm">
          <div className="flex-1 text-center">
            <p className="">&copy; {new Date().getFullYear()} Binod Ojha. All rights reserved.</p>
          </div>
          <div className="text-3xl ml-auto mr-10 flex gap-5 ">
            <Link href="https://www.linkedin.com/in/binodojha30/" target="_blank" ><FaLinkedin className="hover:text-cyan-500"/></Link>
            <Link href="https://github.com/binodojha" target="_blank" ><FaGithub className="hover:text-cyan-500"/></Link>
            </div>
        </footer>
        
        </>
    );
}