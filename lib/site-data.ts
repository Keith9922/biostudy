import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BadgeCheck,
  Binary,
  BrainCircuit,
  FlaskConical,
  Globe2,
  GraduationCap,
  LineChart,
  Microscope,
  Orbit,
  ScanSearch,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "服务内容", href: "#capabilities" },
  { label: "申请流程", href: "#workflow" },
  { label: "录取结果", href: "#results" },
  { label: "常见问题", href: "#faq" },
];

export const marqueeItems = [
  "分子与细胞生物学",
  "遗传与基因组学",
  "神经科学",
  "生物信息学",
  "计算生物学",
  "癌症生物学",
  "免疫学",
  "公共卫生与流行病学",
];

export type FeatureCard = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image?: string;
  className: string;
  icon: LucideIcon;
};

export const featureCards: FeatureCard[] = [
  {
    eyebrow: "背景诊断",
    title: "先看你的课程、科研和目标，再建立真正可申的项目池",
    description:
      "不是先列学校，而是先判断你的学术兴趣、实验基础、语言条件和时间窗口，再决定冲刺、稳妥和保底项目。",
    bullets: [
      "按硕士、博士、暑研和 RA 目标拆分申请路径",
      "同步项目门槛、奖学金窗口和申请时间线变化",
    ],
    image: "/mentor-cloud.svg",
    className: "lg:col-span-7",
    icon: Orbit,
  },
  {
    eyebrow: "导师匹配",
    title: "把研究兴趣、未来方向和导师偏好放到同一张图里判断",
    description:
      "针对生物、神经、生信、遗传、公共卫生等不同轨道，我们会先看研究方向是否匹配，再决定是否需要套磁、如何沟通。",
    bullets: [
      "梳理导师兴趣点、实验室风格与回信概率",
      "为博士申请和研究型项目设计更克制、更有针对性的沟通策略",
    ],
    image: "/mentor-cloud.svg",
    className: "lg:col-span-5",
    icon: ScanSearch,
  },
  {
    eyebrow: "材料叙事",
    title: "简历、文书、推荐信和套磁邮件必须说同一种语言",
    description:
      "我们会把课程、实验、课题、论文、比赛和实习整理成一条清楚的研究叙事，让招生方知道你为什么适合这个方向。",
    bullets: [
      "围绕研究问题、方法和结果重写经历表达",
      "统一个人陈述、CV、推荐信提纲与邮件口径",
    ],
    image: "/material-governance.svg",
    className: "lg:col-span-5",
    icon: BrainCircuit,
  },
  {
    eyebrow: "递交执行",
    title: "从时间线、面试到 offer 选择，关键节点都有人盯住",
    description:
      "申请最容易失误的往往不是想法，而是执行。我们会把截止时间、版本管理、面试准备和后续选择放进同一套节奏里。",
    bullets: [
      "递交前检查材料完整性、逻辑一致性和细节风险",
      "面试、奖学金、签证与最终去向一起统筹安排",
    ],
    image: "/offer-radar.svg",
    className: "lg:col-span-7",
    icon: Microscope,
  },
];

export const capabilityCards = [
  {
    icon: Globe2,
    title: "首轮背景诊断",
    description: "先判断你当前背景能申什么、缺什么、该往哪个方向补，而不是直接丢给你一串学校名单。",
  },
  {
    icon: FlaskConical,
    title: "项目池与导师清单",
    description: "围绕研究方向、项目梯度和导师偏好，建立一份真正可执行的申请池。",
  },
  {
    icon: Binary,
    title: "文书与简历共线改写",
    description: "从科研经历、课程能力到未来计划，所有材料都围绕同一条学术叙事展开。",
  },
  {
    icon: LineChart,
    title: "套磁与沟通策略",
    description: "针对博士、研究型硕士和暑研项目，分别设计更合适的联系节奏和表达方式。",
  },
  {
    icon: GraduationCap,
    title: "面试与后续决策",
    description: "把面试问答、奖学金判断和多个 offer 的取舍放在一起做整体决策。",
  },
  {
    icon: Sparkles,
    title: "顾问与 AI 协同执行",
    description: "AI 负责整理、检索与版本对比，顾问负责最终判断、表达校准和关键节点把关。",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "背景诊断",
    detail: "从 GPA、课程、实验技能、科研经历、语言成绩和目标国家出发，判断你当前最强的申请信号与最需要补的短板。",
  },
  {
    step: "02",
    title: "项目池建立",
    detail: "把生物大类进一步细化到分子、细胞、遗传、神经、公共卫生、生信等具体轨道，再建立匹配的项目池和导师清单。",
  },
  {
    step: "03",
    title: "材料打磨",
    detail: "围绕研究问题、方法、结果和未来方向，重写简历、个人陈述、推荐信提纲和套磁邮件，确保所有材料互相强化。",
  },
  {
    step: "04",
    title: "递交与跟进",
    detail: "把递交、补件、面试、奖学金判断和最终去向选择串成同一条时间线，避免在最后阶段失速。",
  },
];

export const proofStats = [
  { value: "48h", label: "完成首轮背景诊断与定位建议" },
  { value: "120+", label: "覆盖生物与交叉方向项目样本" },
  { value: "6 大类", label: "覆盖分子、细胞、神经、生信等方向" },
  { value: "1 对 1", label: "顾问深度策略跟进模式" },
];

export const results = [
  {
    name: "张雨桐",
    track: "分子生物学 / MSc",
    outcome: "UCL, King’s College London",
    quote:
      "以前我只知道自己想学分子生物，但完全不知道怎么把课程、实验和未来研究兴趣讲成一条完整主线。现在每所学校为什么申、为什么适合我，都说得非常清楚。",
    badge: "英国方向",
  },
  {
    name: "周明哲",
    track: "生物信息 / PhD",
    outcome: "ETH Zurich, KU Leuven",
    quote:
      "最有价值的是导师匹配和沟通逻辑。不是简单列项目，而是先帮我筛出真正对我这类背景友好的实验室，再决定什么时候联系、怎么联系。",
    badge: "博士申请",
  },
  {
    name: "林可心",
    track: "神经科学 / RA + Master",
    outcome: "Melbourne, Monash",
    quote:
      "我原本背景不够完整，团队先帮我重组科研经历，再给出分阶段补强方案。最后不仅拿到 offer，申请过程中也第一次感觉自己知道下一步该做什么。",
    badge: "背景补强",
  },
];

export const faqItems = [
  {
    question: "你们适合什么阶段的申请者？",
    answer:
      "更适合准备申请生物相关硕士、博士、暑研、RA 或研究型项目的学生。尤其适合已经意识到自己不能只靠通用留学模板，而是需要围绕研究方向来做申请的人。",
  },
  {
    question: "只改文书，还是会一起做选校和流程管理？",
    answer:
      "我们更像一个申请策略中台。文书只是其中一部分，还会覆盖背景评估、项目池建立、导师匹配、套磁、面试、时间线和最终 offer 选择。",
  },
  {
    question: "没有论文或者科研比较弱，还适合做吗？",
    answer:
      "可以。重点不是论文数量，而是你有没有可以被整理成研究潜力的课程训练、实验技能、项目经历、比赛或相关实习。我们会先判断哪些内容值得重点放大。",
  },
  {
    question: "顾问和 AI 各自负责什么？",
    answer:
      "AI 负责信息组织、项目检索、版本对比和初步整理，顾问负责最终策略判断、表达校准、关键文书修改和重要节点决策。效率交给工具，判断交给有经验的人。",
  },
];

export const footerLinks = {
  platform: [
    { label: "服务内容", href: "#capabilities" },
    { label: "申请流程", href: "#workflow" },
    { label: "录取结果", href: "#results" },
  ],
  company: [
    { label: "预约评估", href: "#contact" },
    { label: "服务方式", href: "#capabilities" },
    { label: "常见问题", href: "#faq" },
  ],
};

export const heroMiniStats = [
  { label: "首轮诊断", value: "48h" },
  { label: "项目池构建", value: "分梯度建立" },
  { label: "材料版本", value: "实时同步" },
];

export const trustPillItems = [
  "硕士申请",
  "博士申请",
  "暑研 / RA",
  "生物信息",
  "神经科学",
  "公共卫生",
  "奖学金规划",
];

export const heroHighlights = [
  {
    icon: Atom,
    title: "先定位再选校",
    description: "先判断研究方向和背景信号，再建立一份真正可执行的项目池。",
  },
  {
    icon: BadgeCheck,
    title: "材料统一一条主线",
    description: "简历、文书、推荐信和套磁邮件围绕同一条研究叙事推进。",
  },
];
