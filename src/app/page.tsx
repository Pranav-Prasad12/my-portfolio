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

      {/* The Grid Layout for the 3D Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        
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

        {/* Added Engineering Project: Smartphone Drone Dock utilizing a vertically-oriented smartphone camera and separate battery */}
        <Card3D 
          category="Robotics"
          title="Smartphone Drone Dock" 
          description="An innovative drone chassis that uses a vertically-oriented smartphone as the pilot and camera, featuring a separate battery system." 
        />

        {/* Added Experience: Internship completed at STEM Robotics International */}
        <Card3D 
          category="Experience"
          title="STEM Robotics International" 
          description="Completed a specialized internship program focused on applied Artificial Intelligence and Robotics engineering." 
        />

        {/* Added Creative Project: Stage performance photography focusing on clear face captures amidst dynamic lighting */}
        <Card3D 
          category="Visual Arts"
          title="Stage Performance Photography" 
          description="High-contrast photography capturing clear subjects surrounded by dynamic light during live stage performances." 
        />
        
        <Card3D 
          category="Skills"
          title="Technical Stack" 
          description="Core proficiencies in structural programming, application logic, and systems engineering using Python, Java, C, and SQL."
        />

      </div>
    </main>
  );
}