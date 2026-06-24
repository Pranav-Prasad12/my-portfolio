export function TextCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div 
      className={`
        relative overflow-hidden
        p-6 md:p-8 lg:p-10
        /* Exact match to LiquidBubbleCard style={{ borderRadius: "24px" }} */
        rounded-[24px]
        
        /* EXACT GLASS SETTINGS FROM LIQUID BUBBLE CARD */
        backdrop-blur-md
        bg-white/5
        dark:bg-black/10
        border border-white/10
        dark:border-white/20
        
        transition-colors duration-500
        ${className}
      `}
    >
      {/* Notice I removed the gradient inner-shine from the previous version. 
        LiquidBubbleCard doesn't have it, so removing it ensures a 100% visual match.
      */}

      {/* Content Container */}
      <div className="relative z-10 leading-relaxed text-slate-800 dark:text-slate-200">
        {children}
      </div>
    </div>
  );
}