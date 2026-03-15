import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[hsl(220,30%,15%)] via-background to-[hsl(220,28%,14%)] py-20 sm:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/12 via-blue-500/6 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/8 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs sm:text-sm font-medium text-cyan-300">
            <span className="animate-pulse">●</span>
            立即获得免费咨询
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
            准备好改变你的{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              学术人生
            </span>
            了吗？
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            我们的专业顾问已准备好帮你制定完美的留学计划。无论你在何处，我们都在这里支持你。
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="#contact"
              className="px-8 py-3.5 text-sm sm:text-base font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              免费咨询
            </Link>
            <Link
              to="#"
              className="px-8 py-3.5 text-sm sm:text-base font-semibold text-foreground rounded-full glass-1 hover:glass-2 transition-all duration-300"
            >
              预约电话咨询
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 border-t border-white/5">
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              受到数千名学生信任
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {["24/7客服支持", "零隐藏费用", "个性化方案", "成功保障"].map(
                (feature) => (
                  <div
                    key={feature}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-xs sm:text-sm text-foreground">
                      {feature}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
