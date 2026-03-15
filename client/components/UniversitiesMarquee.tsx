export function UniversitiesMarquee() {
  const universities = [
    { name: "Harvard", flag: "🇺🇸" },
    { name: "Oxford", flag: "🇬🇧" },
    { name: "Cambridge", flag: "🇬🇧" },
    { name: "Stanford", flag: "🇺🇸" },
    { name: "MIT", flag: "🇺🇸" },
    { name: "ETH Zurich", flag: "🇨🇭" },
    { name: "Tokyo University", flag: "🇯🇵" },
    { name: "NUS", flag: "🇸🇬" },
    { name: "Melbourne", flag: "🇦🇺" },
    { name: "UBC", flag: "🇨🇦" },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[hsl(220,32%,15%)] via-background to-[hsl(220,32%,15%)] py-16 sm:py-20 border-y border-white/5 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/6 to-transparent rounded-full blur-2xl opacity-40" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-2">
            全球合作伙伴
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            与世界顶级大学合作
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 sm:gap-12">
            {/* First set of universities */}
            {universities.map((uni, idx) => (
              <div
                key={`first-${idx}`}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-xl glass-1 hover:glass-2 transition-all duration-300 min-w-max"
              >
                <span className="text-2xl sm:text-3xl">{uni.flag}</span>
                <span className="text-sm sm:text-base font-medium text-foreground whitespace-nowrap">
                  {uni.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {universities.map((uni, idx) => (
              <div
                key={`second-${idx}`}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-xl glass-1 hover:glass-2 transition-all duration-300 min-w-max"
              >
                <span className="text-2xl sm:text-3xl">{uni.flag}</span>
                <span className="text-sm sm:text-base font-medium text-foreground whitespace-nowrap">
                  {uni.name}
                </span>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
