export default function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl hover:bg-zinc-800/50 hover:border-zinc-700/80 transition-colors">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-base font-bold text-zinc-200 mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed max-w-[200px]">{description}</p>
    </div>
  );
}
