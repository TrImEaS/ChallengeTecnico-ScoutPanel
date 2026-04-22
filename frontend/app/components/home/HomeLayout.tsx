import { ArrowRight, Search, GitCompare } from "lucide-react";
import { Link } from "react-router";
import FeatureCard from "./FeatureCard";

export default function HomeLayout() {
  return (
    <div className="flex flex-col items-center justify-center py-10 min-h-[70vh] px-5 text-center w-full max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text">
          Welcome to <span className="text-primary">ScoutPanel</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Advanced platform for scouting football talents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <FeatureCard
          icon={<Search size={24} strokeWidth={1.5} />} 
          title="Search Players" 
          to="/search"
          description="Filter by name, position, nationality and age range." 
        />
        <FeatureCard 
          icon={<GitCompare size={24} strokeWidth={1.5} />} 
          title="Compare Players" 
          to={'/compare'}
          description="Compare players side by side with various metrics." 
        />
      </div>

      <div className="pt-4">
        <Link 
          to="https://github.com/trimeas/ChallengeTecnico-ScoutPanel" 
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-zinc-950 bg-primary rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,224,148,0.2)]"
        >
          Read documentation
          <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}
