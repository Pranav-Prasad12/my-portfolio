import { Meteors } from "@/components/Meteors";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="relative overflow-hidden flex min-h-screen flex-col items-center justify-center p-6 md:p-24 bg-black text-white">
      
      {/* 1. The Meteor Background Effect */}
      <Meteors number={20} />

      {/* 2. The Foreground Content Wrapper (Keeps your grid on top of the meteors) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Portfolio</h1>
          <p className="text-neutral-400 text-sm md:text-base">Computer Science & Engineering Student</p>
        </div>

        <BentoGrid>
          <BentoGridItem 
            title="EduConnect Platform" 
            description="A complete console-based social and note-sharing ecosystem built for Kerala syllabus students using Python, SQLite database integration, and structural file management."
            className="md:col-span-2"
          />
          <BentoGridItem 
            title="Technical Stack" 
            description="Core proficiencies in structural programming, application logic, and systems engineering using Python, Java, C, and SQL."
            className="md:col-span-1"
          />
          <BentoGridItem 
            title="Project Split-Jaw (Ideathon Concept)" 
            description="An innovative smart helmet concept featuring a custom motorized split-chin locking mechanism and real-time automated SOS crash detection routing."
            className="md:col-span-3"
          />
        </BentoGrid>
      </div>
      
    </main>
  );
}