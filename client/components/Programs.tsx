import { BookOpen, Microscope, Users, Brain, GraduationCap, Zap } from "lucide-react";

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "本科留学",
      description:
        "申请全球顶尖大学的生物、遗传学、海洋生物等本科项目。提供语言培训、申请指导、面试辅导。",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Microscope,
      title: "硕士研究",
      description:
        "进入全球著名研究型大学的生物科学硕士项目。包括项目选择、导师匹配、研究方向指导。",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Brain,
      title: "博士深造",
      description:
        "申请顶级高校的生物学博士项目，助您成为独立研究者。提供论文润色、研究计划书撰写。",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Users,
      title: "交换生项目",
      description:
        "1-2学年海外交换机会，体验国际学术环境。包括学分互认、住宿安排、学习适应指导。",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: Zap,
      title: "暑期研究",
      description:
        "参加全球知名实验室的夏季研究项目。获得国际科研经历，发表论文机会。",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: GraduationCap,
      title: "求职指导",
      description:
        "毕业后职业发展规划。包括简历优化、面试准备、行业内推、实习推荐。",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="programs" className="relative w-full bg-gradient-to-b from-[hsl(220,30%,15%)] via-background to-[hsl(220,32%,14%)] py-20 sm:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-40 right-1/3 w-[350px] h-[350px] bg-gradient-to-tl from-blue-500/6 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs sm:text-sm text-cyan-400 font-semibold uppercase tracking-wider">
            核心项目
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            我们提供的服务
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            从申请到录取，从入学到求职，全方位助力你的生物学国际化之路
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl glass-1 hover:glass-2 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* Icon Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 relative z-10`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 relative z-10">
                  {program.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground relative z-10 leading-relaxed">
                  {program.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 rounded-b-2xl transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
