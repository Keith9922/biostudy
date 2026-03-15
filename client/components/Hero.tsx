import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background to-[hsl(220,30%,15%)]">
      {/* Top decorative glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />

      {/* Left accent glow */}
      <div className="absolute top-40 -left-32 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/12 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Right accent glow */}
      <div className="absolute top-60 -right-40 w-[500px] h-[500px] bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 py-24 sm:py-32 md:py-40 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs sm:text-sm font-medium text-cyan-400">
            <span>🎓 开启国际教育之旅</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-xl">
              全球生物研究机会
            </span>
            <br />
            <span className="text-foreground">就在你指尖</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            连接全球顶尖大学，为中国学生提供最优质的生物学、微生物学、遗传学等专业留学项目，助您成为国际科研人才。
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="#contact"
              className="px-8 py-3.5 text-sm sm:text-base font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              立即咨询
              <ArrowRight size={18} />
            </Link>
            <Link
              to="#programs"
              className="px-8 py-3.5 text-sm sm:text-base font-semibold text-foreground rounded-full glass-1 hover:glass-2 transition-all duration-300 flex items-center gap-2"
            >
              查看项目
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 pt-16 border-t border-white/10">
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">200+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">合作大学</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-600">5000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">成功案例</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">95%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">录取率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
