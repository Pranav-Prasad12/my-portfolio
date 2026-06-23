import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description }: { className?: string; title: string; description: string }) => {
  return (
    <div className={cn("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 p-6 dark:bg-zinc-900 dark:border-white/[0.1] bg-white border border-neutral-200 justify-between flex flex-col space-y-4", className)}>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-800 dark:text-neutral-200 mb-2 mt-2 text-lg">{title}</div>
        <div className="font-sans font-normal text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{description}</div>
      </div>
    </div>
  );
};