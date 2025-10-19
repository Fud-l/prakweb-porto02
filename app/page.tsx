import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      
      {/* FOTO */}
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-6 border-4 border-white shadow-lg"
      />

      {/* HERO */}
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Beta 👻</h1>
      <p className="text-gray-300 text-center max-w-md mb-12">
        Web Developer & UI Designer who builds Amazing Interactive websites.
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-400 text-center max-w-md mb-12">
        I have been very interested in technology, 
        some of which are internet networks, graphic design, game 
        developers, and website appearance.
        I also studied UI/UX and applied it in creating websites.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex gap-6 text-4xl mb-16">
          <SiHtml5 size={40} color="#F97316" />
          <SiCss3 size={40} color="#2563EB" />         
          <SiJavascript size={40} color="#FACC15" />   
          <SiReact size={40} color="#22D3EE" />        
          <SiNextdotjs size={40} color="#FFFFFF" />
          <SiTailwindcss size={40} color="#38BDF8" />
          {/* <SiIllustrator size={40} color="#FF7F00" /> */}
          {/* <SiFigma size={40} color="#F24E1E" />   */}
        </div>


      {/* CONTACT */}
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p className="text-gray-400 mb-4">Let’s build something together!</p>
      <a
        href="mailto:example@email.com"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
      >
        Email Me
      </a>
    </main>
  );
}
