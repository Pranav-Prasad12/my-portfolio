"use client";
import { TextCard } from "@/components/TextCard";
import { BlobBackground } from "@/components/BlobBackground";
import { CuteRobot } from "@/components/CuteRobot";
import { Preloader } from "@/components/Preloader";
import { FadeUp } from "@/components/FadeUp";
import { LiquidBubbleCard } from "@/components/Card3D";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bubbleLabelClass = "inline-block px-6 py-2 font-mono text-xl md:text-2xl font-bold tracking-[0.2em] uppercase rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-black/10 dark:border-white/20 shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.1)] text-blue-600 dark:text-blue-400";
  
  const glassButtonClass = "px-5 py-2 md:px-6 md:py-2.5 rounded-full font-mono text-xl md:text-2xl font-bold tracking-widest uppercase bg-slate-100/90 dark:bg-slate-800/90 border border-black/5 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex items-center justify-center";

  return (
    <main className="relative min-h-screen text-slate-900 dark:text-white overflow-x-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BlobBackground />
      </div>
      
      <Preloader />

      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-24 max-w-7xl mx-auto relative z-10 gap-8 lg:gap-16">
        <div className="flex-1 z-10 my-auto min-w-0">
          <FadeUp delay={2.2}> 
            <TextCard>
              <h1 className="font-hero font-black text-5xl md:text-6xl lg:text-[6rem] xl:text-[7rem] tracking-[0.1em] leading-none mb-6 shrink-0">
                Pranav Prasad
              </h1>
              <p className="font-sans text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide">
                From concepts to hardware.<br />
                Computer Science & Engineering Student.
              </p>
            </TextCard>
          </FadeUp>
        </div>
        
        <div className="shrink-0 w-full md:w-[350px] lg:w-[400px] h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center z-10 pointer-events-none md:pointer-events-auto">
          <CuteRobot />
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center p-6 md:p-24 max-w-7xl mx-auto border-t border-slate-300/30 dark:border-white/10 relative z-10">
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
                <p className="font-sans text-slate-600 dark:text-neutral-500 mt-8 text-3xl md:text-4xl">
                  Currently specializing in structural programming and IoT systems at APJ Abdul Kalam Technological University.
                </p>
              </div>
              
              <div className="w-full md:w-64 aspect-[3/4] shrink-0 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl relative z-20">
                <img src="/profile.jpg" alt="Pranav Prasad" className="w-full h-full object-cover relative z-20" />
              </div>
            </div>
          </TextCard>
        </FadeUp>
      </section>

      <section className="min-h-screen p-6 md:p-24 max-w-7xl mx-auto border-t border-slate-300/30 dark:border-white/10 flex flex-col justify-center relative z-10">
        <FadeUp>
          <div className="mb-12 ml-4">
            <span className={bubbleLabelClass}>
              Selected Work
            </span>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-20">
            <a href="https://github.com/Pranav-Prasad12/EduConnect" target="_blank" rel="noopener noreferrer" className="block cursor-pointer outline-none relative z-30">
              <LiquidBubbleCard category="Web App" title="EduConnect Platform" description="A complete console-based social and note-sharing ecosystem built for Kerala syllabus students using Python, SQLite, and structural file management. Click to view the source code." imageSrc="/educonnect.jpg" />
            </a>
            <a href="/split-jaw-presentation.pdf" target="_blank" rel="noopener noreferrer" className="block cursor-pointer outline-none relative z-30">
              <LiquidBubbleCard category="IoT Hardware" title="Project Split-Jaw" description="An innovative smart helmet concept featuring a custom motorized split-chin locking mechanism and automated SOS crash detection. Click to view the concept presentation." imageSrc="/split-jaw-v2.jpg" />
            </a>
            <a href="https://www.linkedin.com/in/pranav-prasad-5b6597323/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer outline-none relative z-30">
              <LiquidBubbleCard category="Certifications" title="Professional Achievements" description="Click here to explore my latest technical certifications, milestone projects, and professional updates directly on LinkedIn." imageSrc="/internship-cert-v2.jpg" />
            </a>
            <div className="relative z-30">
              <LiquidBubbleCard category="Skills" title="Technical Foundation" description="Currently building a strong foundation in Python, Java, C, and SQL, with an active focus on learning and applying computer science concepts." imageSrc="/technical-foundation-v2.jpg" />
            </div>
          </div>
        </FadeUp>
      </section>

      <section className="min-h-screen p-6 md:p-24 max-w-7xl mx-auto border-t border-slate-300/30 dark:border-white/10 flex flex-col justify-between relative z-10">
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
              <a 
                href="mailto:pranavkarthika12@gmail.com" 
                className="inline-flex mt-6 w-fit px-6 py-2.5 rounded-full font-sans text-2xl md:text-3xl font-bold tracking-widest bg-slate-100/90 dark:bg-slate-800/90 border border-black/5 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-out items-center justify-center relative z-20"
              >
                pranavkarthika12@gmail.com
              </a>
            </TextCard>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-end mt-32 pb-10 border-b border-slate-300/30 dark:border-white/10 relative z-20">
            
            <div className="flex flex-wrap gap-4 md:gap-6 mb-8 md:mb-0 ml-4 relative z-30">
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
              className="font-heading text-5xl md:text-[6rem] font-black tracking-tighter text-slate-900/80 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer text-right relative z-30"
            >
              Back to top
            </button>
            
          </div>
        </FadeUp>
      </section>
    </main>
  );
}