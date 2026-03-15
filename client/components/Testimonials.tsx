import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "李明",
      university: "Harvard University - 博士",
      location: "北京",
      content:
        "BioStudy 团队从申请到录取全程指导，他们的专业知识和耐心让整个过程变得轻松得多。现在我已在哈佛开展了激动人心的研究项目。",
      avatar: "🧬",
      rating: 5,
    },
    {
      name: "王欣怡",
      university: "Oxford University - 硕士",
      location: "上海",
      content:
        "推荐给每个想出国学习生物学的朋友。顾问们对每所大学的申请要求了如指掌，帮我避免了很多申请陷阱。",
      avatar: "🧫",
      rating: 5,
    },
    {
      name: "张浩",
      university: "Stanford University - 本科",
      location: "深圳",
      content:
        "从SAT准备到大学申请，再到现在在Stanford做暑期研究，BioStudy 一直陪伴着我。他们真的很关心每个学生的长远发展。",
      avatar: "🔬",
      rating: 5,
    },
    {
      name: "陈思语",
      university: "MIT - 研究生",
      location: "西安",
      content:
        "最棒的是他们的个性化方案。他们没有给我一个模板化的申请策略，而是根据我的兴趣和背景量身定制的方案。",
      avatar: "🧬",
      rating: 5,
    },
  ];

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-background via-[hsl(220,32%,14%)] to-[hsl(220,30%,15%)] py-20 sm:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-1/3 w-[380px] h-[380px] bg-gradient-to-tr from-blue-500/8 to-transparent rounded-full blur-3xl opacity-35" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs sm:text-sm text-cyan-400 font-semibold uppercase tracking-wider">
            成功故事
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            来自我们学生的真实评价
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            数千名学生通过我们的指导，成功申请到全球顶尖大学。看看他们怎么说。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl glass-1 hover:glass-2 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.university}
                  </p>
                  <p className="text-xs text-blue-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-16 pt-16 border-t border-white/5">
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              98%
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">客户满意度</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              15年
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">行业经验</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              1000+
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">名校录取</p>
          </div>
        </div>
      </div>
    </section>
  );
}
