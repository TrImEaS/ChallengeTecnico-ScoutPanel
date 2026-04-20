import type { NavActionProps } from "../types";

export default function NavAction({ 
  icon: Icon, 
  label, 
  badge, 
  className = "" 
}: NavActionProps) {
  return (
    <button
      title={label}
      className={`relative flex items-center justify-center w-10 h-10 rounded-xl text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-all duration-200 ${className}`}
    >
      <Icon size={20} strokeWidth={1.8} />
      {badge && (
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary border-2 border-zinc-950" />
      )}
    </button>
  );
}
