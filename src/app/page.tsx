"use client";
import { TextCard } from "@/components/TextCard";
import { BlobBackground } from "@/components/BlobBackground";
import { FluidSphere } from "@/components/FluidSphere";
import { Preloader } from "@/components/Preloader";
import { FadeUp } from "@/components/FadeUp";
import { LiquidBubbleCard } from "@/components/Card3D";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reusable styling for the bubble labels so they perfectly match the EduConnect card tags
  const bubbleLabelClass = "inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.1)] text-blue-600 dark:text-blue-400";

  return (
    <main className="relative min-h-screen text-slate-900 dark:text-white">
      {/* YOUR NEW 3D METALLIC BACKGROUND */}
      <BlobBackground />
      <Preloader />

      {/* --- LAYER 1: HERO --- */}
      <section className="min-h-screen flex items-center justify-between p-6 md:p-24 max-w-7xl mx-auto relative z-10">
        <FadeUp delay={2.2}> 
          <div className="max-w-2xl">
            <TextCard>
              <h1 className="text-6xl md:text-[7rem] font-extrabold tracking-tighter leading-none mb-6 text-transparent [-webkit-text-stroke:2px_#333] dark:[-webkit-text-stroke:2px_#ffffff]">
                PRANAV<br />PRASAD
              </h1>
              <p className="text-slate-600 dark:text-neutral-400 text-lg md:text-xl font-medium tracking-wide">
                From concepts to hardware. <br />
                Computer Science & Engineering Student.
              </p>
            </TextCard>
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
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-24 max-w-7xl mx-auto border-t border-slate-300/30 dark:border-white/10">
        <FadeUp>
          <div className="max-w-2xl mb-12 md:mb-0">
            <TextCard>
              {/* THE NEW ABOUT BUBBLE */}
              <div className="mb-6">
                <span className={bubbleLabelClass}>
                  About
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-slate-800 dark:text-neutral-300">
                I design, build, and prototype <span className="text-black dark:text-white font-bold">full-stack software</span> and <span className="text-black dark:text-white font-bold">robotic hardware</span>.
              </h2>
              <p className="text-slate-600 dark:text-neutral-500 mt-8 text-lg max-w-lg">
                Currently specializing in structural programming and IoT systems at APJ Abdul Kalam Technological University.
              </p>
            </TextCard>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="w-full max-w-md aspect-[3/4] overflow-hidden rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
            <img src="/profile.jpg" alt="Pranav Prasad" className="w-full h-full object-cover" />
          </div>
        </FadeUp>
      </section>

      {/* --- LAYER 3: CONTRIBUTIONS / WORK --- */}
      <section className="min-h-screen p-6 md:p-24 max-w-7xl mx-auto border-t border-slate-300/30 dark:border-white/10 flex flex-col justify-center">
        <FadeUp>
          {/* THE NEW SELECTED WORK BUBBLE */}
          <div className="mb-12 ml-4">
            <span className={bubbleLabelClass}>
              Selected Work
            </span>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <a href="https://github.com/Pranav-Prasad12/EduConnect" target="_blank" rel="noopener noreferrer" className="block cursor-pointer outline-none">
              <LiquidBubbleCard category="Web App" title="EduConnect Platform" description="A complete console-based social and note-sharing ecosystem built for Kerala syllabus students using Python, SQLite, and structural file management. Click to view the source code." imageSrc="/educonnect.jpg" />
            </a>
            <a href="/split-jaw-presentation.pdf" target="_blank" rel="noopener noreferrer" className="block cursor-pointer outline-none">
              <LiquidBubbleCard category="IoT Hardware" title="Project Split-Jaw" description="An innovative smart helmet concept featuring a custom motorized split-chin locking mechanism and automated SOS crash detection. Click to view the concept presentation." imageSrc="/split-jaw-v2.jpg" />
            </a>
            <a href="https://www.linkedin.com/in/pranav-prasad-5b6597323/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer outline-none">
              <LiquidBubbleCard category="Certifications" title="Professional Achievements" description="Click here to explore my latest technical certifications, milestone projects, and professional updates directly on LinkedIn." imageSrc="/internship-cert-v2.jpg" />
            </a>
            <LiquidBubbleCard category="Skills" title="Technical Foundation" description="Currently building a strong foundation in Python, Java, C, and SQL, with an active focus on learning and applying computer science concepts." imageSrc="/technical-foundation-v2.jpg" />
          </div>
        </FadeUp>
      </section>

      {/* --- LAYER 4: CONTACT & FOOTER --- */}
      <section className="min-h-screen p-6 md:p-24 max-w-7xl mx-auto border-t border-slate-300/30 dark:border-white/10 flex flex-col justify-between">
        <FadeUp>
          <div className="mt-20 max-w-3xl">
            <TextCard>
              {/* THE NEW GET IN TOUCH BUBBLE */}
              <div className="mb-6">
                <span className={bubbleLabelClass}>
                  Get In Touch
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-slate-900 dark:text-white">
                Let's build something<br />
                <span className="text-transparent [-webkit-text-stroke:2px_#333] dark:[-webkit-text-stroke:2px_#ffffff]">extraordinary</span>
              </h2>
              <a href="mailto:pranavkarthika12@gmail.com" className="inline-block mt-4 text-2xl md:text-4xl text-slate-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                pranavkarthika12@gmail.com
              </a>
            </TextCard>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-end mt-32 pb-10 border-b border-slate-300/30 dark:border-white/10">
            <div className="flex gap-8 mb-8 md:mb-0 ml-4">
              <a href="https://github.com/Pranav-Prasad12" target="_blank" className="text-slate-600 dark:text-neutral-500 hover:text-black dark:hover:text-white uppercase tracking-widest text-sm font-bold transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/pranav-prasad-5b6597323/" target="_blank" className="text-slate-600 dark:text-neutral-500 hover:text-black dark:hover:text-white uppercase tracking-widest text-sm font-bold transition-colors">LinkedIn</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="text-5xl md:text-[8rem] font-extrabold tracking-tighter leading-none text-transparent [-webkit-text-stroke:2px_#cbd5e1] dark:[-webkit-text-stroke:2px_#333333] hover:[-webkit-text-stroke:2px_#333] dark:hover:[-webkit-text-stroke:2px_#ffffff] transition-all duration-500 cursor-pointer"
            >
              Back to top
            </button>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}