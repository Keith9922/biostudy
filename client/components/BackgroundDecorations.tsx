export function BackgroundDecorations() {
  return (
    <>
      {/* Floating orbs */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />
      <div className="fixed -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-cyan-500/4 rounded-full blur-3xl animate-glow-pulse pointer-events-none opacity-60" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-40 right-1/3 w-80 h-80 bg-gradient-to-tl from-cyan-500/6 to-transparent rounded-full blur-3xl animate-glow-pulse pointer-events-none opacity-40" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern overlay - subtle */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, 0.05) 25%, rgba(34, 211, 238, 0.05) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.05) 75%, rgba(34, 211, 238, 0.05) 76%, transparent 77%, transparent), 
                            linear-gradient(90deg, transparent 24%, rgba(34, 211, 238, 0.05) 25%, rgba(34, 211, 238, 0.05) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.05) 75%, rgba(34, 211, 238, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '60px 60px'
        }}
      />
    </>
  );
}
