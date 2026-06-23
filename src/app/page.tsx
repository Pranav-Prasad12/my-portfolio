import { Card3D } from "@/components/Card3D";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 bg-black text-white selection:bg-white selection:text-black">
      
      {/* --- NEW HERO SECTION --- */}
      <div className="flex flex-col items-center mb-20 text-center mt-10 relative z-10">
        
        {/* Profile Picture */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-6 transition-transform hover:scale-105 duration-300">
          {/* This looks for profile.jpg in your public folder */}
          <img 
            src="/profile.jpg" 
            alt="Pranav Prasad" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Creative Gradient Name */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 drop-shadow-2xl pb-2">
          Pranav Prasad
        </h1>

        {/* Subtitle with Details */}
        <p className="text-neutral-400 text-lg md:text-xl font-medium tracking-wide mb-8 max-w-2xl leading-relaxed">
          Computer Science & Engineering Student at APJ Abdul Kalam Technological University. 
          Specializing in structural programming, robotics, and full-stack development.
        </p>

        {/* Email Contact Button */}
        {/* Replace your-email@gmail.com with your actual email address! */}
        <a 
          href="mailto:pranavkarthika12@gmail.com" 
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Let's Talk
        </a>
      </div>
      {/* --- END HERO SECTION --- */}

      {/* The 3D Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto relative z-10">
        
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