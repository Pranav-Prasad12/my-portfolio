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

  const bubbleLabelClass = "inline-block px-4 py-1.5 font-mono text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.1)] text-blue-600 dark:text-blue-400";
  
  const glassButtonClass = "px-6 py-3 rounded-full font-mono text-sm font-bold tracking-widest uppercase bg-white/20 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] text-slate-900 dark:text-white hover:bg-white/40 dark:hover:bg-white/10 hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex items-center justify-center";

  return (
    <main className="relative min-h-screen text-slate-900 dark:text-white">
      <BlobBackground />
      <Preloader />

      {/* --- LAYER 1: HERO --- */}
      <section className="min-h-screen flex items-center justify-between p-6 md:p-24 max-w-7xl mx-auto relative z-10">
        <FadeUp delay={2.2}> 
          <div className="max-w-2xl">
            <TextCard>
              <h1 className="font-sinistre font-bold text-6xl md:text-8xl tracking-tight text-slate-900 dark:text-white mb-6">
  Pranav Prasad
</h1>
              <p className="font-sans text-slate-700 dark:text-gray-200 text-lg md:text-xl font-medium tracking-wide [text-shadow:_0_2px_10px_rgba(0,0,0,0.15)] mt-4">
                From concepts to hardware. <br />
                Computer Science & Engineering Student.
              </p>
            </TextCard>
          </div>
        </FadeUp>
        
        <FadeUp delay={2.4}>
          <div className="hidden lg:block relative z-50">
            <FluidSphere />
          </div>
        </FadeUp>
      </section>

      {/* --- LAYER 2: ABOUT --- */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-24 max-w-7xl mx-auto border-t border-slate-300/30 dark:border-white/10">
        <FadeUp className="w-full">
          <TextCard>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="flex-1">
                <div className="mb-6">
                  <span className={bubbleLabelClass}>
                    About
                  </span>
                </div>
                <h2 className="font-heading tracking-wide text-3xl md:text-5xl font-normal leading-tight text-slate-800 dark:text-neutral-300">
                  I design, build, and prototype <span className="font-bold text-slate-900 dark:text-white">full-stack software</span> and <span className="font-bold text-slate-900 dark:text-white">robotic hardware</span>.
                </h2>
                <p className="font-sans text-slate-600 dark:text-neutral-500 mt-8 text-lg">
                  Currently specializing in structural programming and IoT systems at APJ Abdul Kalam Technological University.
                </p>
              </div>
              
              <div className="w-full md:w-64 aspect-[3/4] shrink-0 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                <img src="/profile.jpg" alt="Pranav Prasad" className="w-full h-full object-cover" />
              </div>
            </div>
          </TextCard>
        </FadeUp>
      </section>

      {/* --- LAYER 3: CONTRIBUTIONS / WORK --- */}
      <section className="min-h-screen p-6 md:p-24 max-w-7xl mx-auto border-t border-slate-300/30 dark:border-white/10 flex flex-col justify-center">
        <FadeUp>
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
              <div className="mb-6">
                <span className={bubbleLabelClass}>
                  Get In Touch
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-normal tracking-tight mb-8 text-slate-800 dark:text-neutral-300">
                Turning complex concepts into<br />
                <span className="font-bold text-slate-900 dark:text-white">functional hardware</span> and <span className="font-bold text-slate-900 dark:text-white">scalable code</span>.
              </h2>
              
              {/* UPDATED: Gmail button now has the same pill shape and bouncing animation */}
              <a 
                href="mailto:pranavkarthika12@gmail.com" 
                className="inline-flex mt-6 w-fit px-6 py-3 rounded-full font-mono text-sm font-bold tracking-wider bg-white/20 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] text-slate-900 dark:text-white hover:bg-white/40 dark:hover:bg-white/10 hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-out items-center justify-center"
              >
                pranavkarthika12@gmail.com
              </a>
            </TextCard>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-end mt-32 pb-10 border-b border-slate-300/30 dark:border-white/10">
            
            <div className="flex flex-wrap gap-4 md:gap-6 mb-8 md:mb-0 ml-4">
              <a 
                href="https://github.com/Pranav-Prasad12" 
                target="_blank" 
                rel="noopener noreferrer"
                className={glassButtonClass}
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/pranav-prasad-5b6597323/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={glassButtonClass}
              >
                LinkedIn
              </a>
            </div>

            <button 
              onClick={scrollToTop}
              className="font-heading text-5xl md:text-[6rem] font-black tracking-tighter text-slate-900/80 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer text-right"
            >
              Back to top
            </button>
            
          </div>
        </FadeUp>
      </section>

    </main>
  );
}