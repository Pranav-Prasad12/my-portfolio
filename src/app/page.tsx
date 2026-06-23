import { Card3D } from "@/components/Card3D";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 bg-black text-white selection:bg-white selection:text-black">
      
      <div className="mb-16 text-center mt-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Portfolio
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl font-medium tracking-wide">
          Computer Science & Engineering Student
        </p>
      </div>

      {/* Changed to md:grid-cols-2 so your 4 cards make a perfect square */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        
        <Card3D 
          category="Web App"
          title="EduConnect Platform" 
          description="A complete console-based social and note-sharing ecosystem built for Kerala syllabus students using Python, SQLite database integration, and structural file management."
        />

        <Card3D 
          category="IoT Hardware"
          title="Project Split-Jaw" 
          description="An innovative smart helmet concept featuring a custom motorized split-chin locking mechanism and real-time automated SOS crash detection routing."
        />

        <Card3D 
          category="Experience"
          title="STEM Robotics International" 
          description="Completed a specialized internship program focused on applied Artificial Intelligence and Robotics engineering." 
        />
        
        <Card3D 
          category="Skills"
          title="Technical Foundation" 
          description="Currently building a strong foundation in Python, Java, C, and SQL, with an active focus on learning and applying computer science concepts."
        />

      </div>
    </main>
  );
}