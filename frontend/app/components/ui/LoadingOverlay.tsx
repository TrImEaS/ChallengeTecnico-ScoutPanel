export function LoadingOverlay() {
  return (
    <div className="absolute inset-4 md:inset-6 z-50 bg-black/40 backdrop-blur-md animate-pulse border border-white/5 rounded-2xl pointer-events-none flex items-center justify-center">
      <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Cargando...</span>
    </div>
  );
}
