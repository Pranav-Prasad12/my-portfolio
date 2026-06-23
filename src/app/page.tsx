"use client";
import { FluidSphere } from "@/components/FluidSphere";
import { Preloader } from "@/components/Preloader";
import { FadeUp } from "@/components/FadeUp";
import { Card3D } from "@/components/Card3D";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
     <Preloader />

      {/* --- LAYER 1: HERO --- */}
      <section className="min-h-screen flex items-center justify-between p-6 md:p-24 max-w-7xl mx-auto relative z-10">
        <FadeUp delay={2.2}> {/* Delayed so it loads AFTER the preloader finishes */}
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-[8rem] font-extrabold tracking-tighter leading-none mb-6 text-transparent [-webkit-text-stroke:2px_#ffffff]">
              PRANAV<br />PRASAD
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl font-medium tracking-wide">
              From concepts to hardware. <br />
              Computer Science & Engineering Student.
            </p>
          </div>
        </FadeUp>
        
        {/* 3D Liquid Sphere Animation */}
        <FadeUp delay={2.4}>
          <div className="hidden lg:block relative z-50">
            <FluidSphere />
          </div>
        </FadeUp>
      </section>

      {/* --- LAYER 2: ABOUT --- */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-24 max-w-7xl mx-auto border-t border-white/10">
        <FadeUp>
          <div className="max-w-2xl mb-12 md:mb-0">
            <p className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-8">About</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-neutral-300">
              I design, build, and prototype <span className="text-white font-bold">full-stack software</span> and <span className="text-white font-bold">robotic hardware</span>.
            </h2>
            <p className="text-neutral-500 mt-8 text-lg max-w-lg">
              Currently specializing in structural programming and IoT systems at APJ Abdul Kalam Technological University.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
            <img src="/profile.jpg" alt="Pranav Prasad" className="w-full h-full object-cover" />
          </div>
        </FadeUp>
      </section>

      {/* --- LAYER 3: CONTRIBUTIONS / WORK --- */}
      <section className="min-h-screen p-6 md:p-24 max-w-7xl mx-auto border-t border-white/10 flex flex-col justify-center">
        <FadeUp>
          <p className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-16">Selected Work</p>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <Card3D category="Web App" title="EduConnect Platform" description="A complete console-based social and note-sharing ecosystem built for Kerala syllabus students using Python, SQLite, and structural file management." />
            <Card3D category="IoT Hardware" title="Project Split-Jaw" description="An innovative smart helmet concept featuring a custom motorized split-chin locking mechanism and real-time automated SOS crash detection routing." />
            <Card3D category="Experience" title="STEM Robotics International" description="Completed a specialized internship program focused on applied Artificial Intelligence and Robotics engineering." />
            <Card3D category="Skills" title="Technical Foundation" description="Currently building a strong foundation in Python, Java, C, and SQL, with an active focus on learning and applying computer science concepts." />
          </div>
        </FadeUp>
      </section>

      {/* --- LAYER 4: CONTACT & FOOTER --- */}
      <section className="min-h-screen p-6 md:p-24 max-w-7xl mx-auto border-t border-white/10 flex flex-col justify-between">
        <FadeUp>
          <div className="mt-20">
            <p className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-8">Get In Touch</p>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4">
              Let's build something<br />
              <span className="text-transparent [-webkit-text-stroke:1px_#ffffff]">extraordinary</span>
            </h2>
            {/* MASSIVE EMAIL LINK */}
            <a href="mailto:pranavkarthika12@gmail.com" className="text-3xl md:text-5xl text-neutral-400 hover:text-white transition-colors duration-300">
              pranavkarthika12@gmail.com
            </a>
          </div>
        </FadeUp>

        {/* Footer Links & Back to Top */}
        <FadeUp delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-end mt-32 pb-10 border-b border-white/10">
            <div className="flex gap-8 mb-8 md:mb-0">
              <a href="https://github.com/Pranav-Prasad12" target="_blank" className="text-neutral-500 hover:text-white uppercase tracking-widest text-sm font-bold transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/pranav-prasad-5b6597323/" target="_blank" className="text-neutral-500 hover:text-white uppercase tracking-widest text-sm font-bold transition-colors">LinkedIn</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="text-6xl md:text-[10rem] font-extrabold tracking-tighter leading-none text-transparent [-webkit-text-stroke:2px_#333333] hover:[-webkit-text-stroke:2px_#ffffff] transition-all duration-500 cursor-pointer"
            >
              Back to top
            </button>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}