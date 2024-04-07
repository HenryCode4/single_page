import Image from "next/image";
import profile from "@/images/profile.jpeg"
import image1 from "@/images/image1.jpeg"
import image2 from "@/images/image2.jpeg"
import image3 from "@/images/image3.jpeg"
import image4 from "@/images/image4.jpeg"
import { Github, Linkedin } from "lucide-react";



export default function Home() {

  return (
    <>
      <section id="home" className="pt-[80px] px-[20px] md:px-[150px] h-[100vh] bg-[#dee1e6]">
        <div className="flex flex-col-reverse gap-y-20 md:flex-row items-center justify-center md:justify-between h-full">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-5xl font-bold">Hello, I'm Chima. <br /> 
            
            </h1>

            <p>I'm a full-stack developer with years of experience. I enjoy building sites & apps.</p>

            <div className="pt-10 flex items-center gap-x-6">
              <a 
              href="/cv.pdf"
              download
              className="">
                <button  className="text-black border-2 px-4 py-3 rounded-lg font-semibold hover:scale-110">Download CV</button>
              </a>

              <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 shadow-lg"
          href="https://www.linkedin.com/in/chima-nnamani-21a614230"
          target="_blank"
        >
          <Linkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 shadow-lg"
          href="https://github.com/HenryCode4"
          target="_blank"
        >
          <Github />
        </a>
            </div>

            

          </div>
          <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
            <Image className="fil rounded-[80px] object-cover" src={profile} alt="profile" />
          </div>
        </div>
      </section>

      <section id="about" className=" pt-[80px] pb-[40px] px-[20px] md:px-[150px] bg-[#ffffff]">
        <div className=" w-full flex flex-col md:flex-row justify-between gap-y-8 gap-x-16">
            <h3 className="text-5xl font-bold text-start">About Me</h3>
            <div className="flex flex-col gap-y-4 w-full">
              <p className="text-wrap ">After graduating with a diploma degree in Theology, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, SQL, and MongoDB. I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies.

                  When I'm not coding, I enjoy watching funny movies, I also enjoy learning new things.
              </p>

              <div className="flex flex-col gap-y-2">

                <div className="gap-y-4">
                  <h3 className="text-xl font-bold">TECH STACK</h3>
                
                <div className=" font-medium text-[1.1rem] flex   gap-x-10 wrap w-full ">
        <ul >
            <li>Html</li>
            <li>Css</li>
            <li>Tailwindcss</li>
            <li>ReactJs</li>
            <li>TypeScript</li>
            <li>NodeJs</li>
          </ul>
            
            <ul>
              <li>MongoDB</li>
            <li>NextJs</li>
            <li>NestJs</li>
            <li>ExpressJs</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            </ul>
                </div>
                
      </div>
              </div>

              
              
            </div>
        </div>
      </section>

      <section id="project" className="pt-[80px] pb-[40px] px-[20px] md:px-[150px]  bg-[#dee1e6]">
        <div className="flex gap-y-8 flex-col justify-start  w-full ">
            <h3 className="font-bold text-5xl ">Project</h3>

        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4">

              <h4 className="text-xl font-semibold">Project Name: </h4>
            <p>SevenUp Payment Back office.</p>
            </div>

            <div className="flex gap-x-4">
              <h4 className="text-xl font-semibold">Description:</h4>
              <p> Built for tracking, reporting, reconciliation, and visualizing all inflow transactions done across all SBC collection channels with over 7 Nigerian banks as well as other administrative activities regarding organizational digital payment solutions.</p>
            </div>
            <div className="flex gap-x-4">
              <h4 className="text-xl font-semibold">URL:</h4>
              <a className="text-blue-500" href="https://bit.ly/Sbc-Payment-Backoffice" target="_blank" rel="noopener noreferrer">https://bit.ly/Sbc-Payment-Backoffice</a>
            </div>
            
          </div>

        </div>
          
        </div>
      </section>

      <section id="gallery" className="pt-[80px] pb-[40px] px-[20px] md:px-[150px]  bg-[#ffffff]">
      <div className="gap-y-6">
        <h3 className="text-5xl font-bold text-start pb-10">Gallery</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center items-center">
  <Image className="rounded-[30px]" width={250} height={250} src={image1} alt="profile" />
  <Image className="rounded-[30px]" width={250} height={250} src={image2} alt="profile" />
  <Image className="rounded-[30px]" width={250} height={250} src={image3} alt="profile" />
  <Image className="rounded-[30px]" width={250} height={250} src={image4} alt="profile" />
  <Image className="rounded-[30px]" width={250} height={250} src={profile} alt="profile" />
</div>
      </div>

      </section>


      
    </>
    
  );
}
