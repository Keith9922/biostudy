import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/landing/hero-scene";
import { Reveal } from "@/components/landing/reveal";
import { ResearchSigil } from "@/components/landing/research-sigil";
import { SectionHeading } from "@/components/landing/section-heading";
import { SiteHeader } from "@/components/landing/site-header";
import {
  capabilityCards,
  faqItems,
  featureCards,
  footerLinks,
  heroHighlights,
  marqueeItems,
  navItems,
  proofStats,
  results,
  trustPillItems,
  workflowSteps,
} from "@/lib/site-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="hero-mesh pointer-events-none absolute inset-x-0 top-0 h-[980px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[520px] h-px bg-[linear-gradient(90deg,rgba(22,35,63,0),rgba(22,35,63,0.12),rgba(22,35,63,0))]" />
      <SiteHeader items={navItems} />

      <main>
        <section className="relative overflow-hidden">
          <div className="container grid gap-12 pb-20 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:pb-32 lg:pt-14">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(22,35,63,0.08)] bg-[rgba(255,255,255,0.82)] px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-[#31528f] shadow-[0_18px_44px_-30px_rgba(22,35,63,0.24)] backdrop-blur">
                面向生物方向研究型申请
                <span className="inline-flex size-2 rounded-full bg-[#5c8b7a]" />
                2026 评估开放
              </div>

              <div className="mt-7 max-w-[47rem] space-y-7">
                <div className="max-w-[44rem]">
                  <span className="mb-5 hidden h-px w-28 bg-[linear-gradient(90deg,#31528f_0%,rgba(49,82,143,0.08)_100%)] lg:block" />
                  <h1 className="font-display text-[2.56rem] font-semibold leading-[1.05] tracking-[-0.045em] text-[#16233f] sm:text-[4rem] sm:leading-[1.01] lg:text-[3.95rem] lg:leading-[0.98] lg:tracking-[-0.05em]">
                    <span className="block lg:whitespace-nowrap">把生物背景整理成</span>
                    <span className="headline-gradient block lg:mt-2 lg:text-[3.28rem] lg:leading-[1.04] lg:whitespace-nowrap">
                      研究型项目认可的申请方案
                    </span>
                  </h1>
                </div>

                <p className="max-w-[39rem] text-[0.98rem] leading-8 text-[#576076] sm:text-[1.08rem] sm:leading-8">
                  面向分子生物、细胞生物、遗传、神经科学、生物信息与公共卫生等方向申请者。
                  我们先做背景诊断，再建立项目池、导师清单、材料主线与递交节奏，让复杂申请回到研究型项目真正关心的判断标准。
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#contact">
                    获取背景诊断
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#workflow">查看服务流程</Link>
                </Button>
              </div>

              <div className="mt-11 flex flex-wrap gap-3">
                {trustPillItems.map((item) => (
                  <span
                    key={item}
                    className="interactive-pill rounded-full border border-[rgba(22,35,63,0.08)] bg-[rgba(255,255,255,0.7)] px-4 py-2 text-sm font-medium text-[#546072] shadow-[0_16px_40px_-32px_rgba(22,35,63,0.2)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="group surface interactive-card rounded-[28px] p-5">
                      <div className="flex items-start gap-4">
                        <span className="flex size-12 items-center justify-center rounded-[18px] bg-[#eef2fb] text-[#31528f]">
                          <Icon className="size-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]" />
                        </span>
                        <div>
                          <h2 className="text-lg font-semibold text-[#16233f]">
                            {item.title}
                          </h2>
                          <p className="mt-2 text-sm leading-8 text-[#576076]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <HeroScene />
            </div>
          </div>
        </section>

        <section className="section-spacing border-y border-[rgba(22,35,63,0.08)] bg-[rgba(255,255,255,0.45)]">
          <div className="container">
            <Reveal className="mb-8 text-center">
              <p className="eyebrow">主流方向</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#16233f] sm:text-4xl">
                覆盖主流生物与交叉方向项目，用研究逻辑而不是通用模板来做申请
              </h2>
            </Reveal>

            <div className="grid-fade relative overflow-hidden">
              <div className="marquee-track flex gap-4">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex min-w-max items-center gap-3 rounded-full border border-[rgba(22,35,63,0.08)] bg-[rgba(255,255,255,0.78)] px-5 py-3 text-sm font-semibold text-[#16233f] shadow-[0_16px_40px_-34px_rgba(22,35,63,0.2)]"
                  >
                    <span className="inline-flex size-2 rounded-full bg-[#31528f]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-spacing">
          <div className="container space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="服务内容"
                title="围绕生物方向申请，重做每一个真正影响结果的环节"
                description="你需要的不是一套泛化模板，而是一套更贴近研究型项目判断逻辑的申请服务。选校、套磁、材料和递交节奏必须同时成立，结果才会更稳。"
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-12">
              {featureCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <Reveal
                    key={card.title}
                    delay={index * 0.08}
                    className={`${card.className} group surface-strong interactive-card rounded-[32px] p-6 sm:p-8`}
                  >
                    <div className="flex h-full flex-col gap-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-4">
                          <p className="eyebrow">{card.eyebrow}</p>
                          <div className="space-y-3">
                            <h3 className="font-display text-2xl font-semibold leading-[1.18] tracking-[-0.04em] text-[#16233f] sm:text-[2rem]">
                              {card.title}
                            </h3>
                            <p className="max-w-2xl text-base leading-8 text-[#576076]">
                              {card.description}
                            </p>
                          </div>
                        </div>

                        <span className="flex size-12 shrink-0 items-center justify-center rounded-[18px] bg-[#eef2fb] text-[#31528f]">
                          <Icon className="size-5" />
                        </span>
                      </div>

                      <ul className="grid gap-3 text-sm text-[#16233f]">
                        {card.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#31528f]" />
                            <span className="leading-7 text-[#576076]">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {card.image ? (
                        <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.85)] bg-[#f6f8fb] p-3 shadow-[0_24px_60px_-42px_rgba(22,35,63,0.24)]">
                          <Image
                            src={card.image}
                            alt={card.title}
                            width={1000}
                            height={680}
                            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                            className="h-auto w-full rounded-[22px] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.024]"
                          />
                        </div>
                      ) : (
                        <div className="grid gap-3 rounded-[28px] border border-[rgba(22,35,63,0.08)] bg-[linear-gradient(135deg,_rgba(22,35,63,0.04),_rgba(49,82,143,0.02))] p-5 sm:grid-cols-2">
                          {[
                            "选校层级自动排序",
                            "背景缺口自动提醒",
                            "导师偏好标签归类",
                            "奖学金窗口期同步",
                          ].map((item) => (
                            <div
                              key={item}
                              className="rounded-[22px] border border-[rgba(255,255,255,0.84)] bg-[rgba(255,255,255,0.84)] px-4 py-4 text-sm font-medium text-[#16233f]"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {capabilityCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.title}
                    delay={index * 0.06}
                    className="group surface interactive-card rounded-[28px] p-6"
                  >
                    <span className="flex size-12 items-center justify-center rounded-[18px] bg-[#16233f] text-white">
                      <Icon className="size-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-[8deg]" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-[#16233f]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#576076]">
                      {item.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="workflow" className="section-spacing bg-[rgba(255,255,255,0.35)]">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="服务流程"
                title="从背景诊断到递交跟进，每一步都按研究型申请逻辑推进"
                description="高标准申请不怕复杂，怕的是混乱。我们把背景评估、项目定位、材料打磨与递交跟进拆成明确阶段，让每一步都知道为什么现在做、下一步做什么。"
                align="center"
              />
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {workflowSteps.map((item, index) => (
                <Reveal
                  key={item.step}
                  delay={index * 0.08}
                  className="surface-strong interactive-card rounded-[30px] p-6"
                >
                  <div className="text-sm font-semibold tracking-[0.18em] text-[#31528f]">
                    {item.step}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-[#16233f]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-[#576076]">
                    {item.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="section-spacing">
          <div className="container space-y-12">
            <Reveal>
              <SectionHeading
                eyebrow="录取结果"
                title="过程要足够清楚，最后也要落到真实的阶段成果与录取结果"
                description="我们更关注能不能把你的背景、路径和材料整理清楚。过程越清楚，最终拿到结果时越不会是碰运气。"
              />
            </Reveal>

            <div className="grid gap-5 lg:grid-cols-4">
              {proofStats.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={index * 0.07}
                  className="surface interactive-card rounded-[28px] p-6"
                >
                  <p className="font-display text-4xl font-semibold tracking-[-0.04em] text-[#16233f] sm:text-5xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#576076]">
                    {item.label}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {results.map((item, index) => (
                <Reveal
                  key={item.name}
                  delay={index * 0.08}
                  className="surface-strong interactive-card rounded-[30px] p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#eef2fb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#31528f]">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-[#6b738c]">
                      {item.track}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-[#16233f]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[#31528f]">
                      {item.outcome}
                    </p>
                  </div>

                  <p className="mt-6 text-sm leading-8 text-[#576076]">
                    “{item.quote}”
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-spacing bg-[rgba(255,255,255,0.35)]">
          <div className="container grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="常见问题"
                title="在决定合作之前，先把合作方式、判断标准和分工边界问清楚"
                description="对研究型申请来说，策略清晰比承诺更重要。下面这些问题，决定双方是否真的适合在同一节奏里工作。"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <Accordion type="single" collapsible className="grid gap-4">
                {faqItems.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-spacing">
          <div className="container">
            <Reveal className="surface-strong relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
              <div className="pointer-events-none absolute right-12 top-8 hidden opacity-80 lg:block">
                <ResearchSigil className="h-28 w-28" />
              </div>
              <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
                <div>
                  <p className="eyebrow">预约评估</p>
                  <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.12] tracking-[-0.035em] text-[#16233f] sm:text-[3.25rem] sm:leading-[1.08] lg:text-[3.7rem]">
                    先做一次背景诊断，
                    <span className="block">再决定怎么申、申哪里、</span>
                    <span className="headline-gradient block">先改哪些材料。</span>
                  </h2>
                  <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[#576076] sm:text-[1.06rem]">
                    我们会先判断你的研究方向、目标国家、背景缺口和时间安排，再决定最适合的申请路径。先把关键变量看清楚，后面的动作才会更省力，也更接近结果。
                  </p>
                </div>

                <div className="space-y-5 rounded-[30px] border border-[rgba(22,35,63,0.08)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[0_24px_60px_-42px_rgba(22,35,63,0.24)]">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-[#31528f]">
                      联系方式
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#16233f]">
                      hello@biostudy.com
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#576076]">
                      北京 / 上海 / 线上远程协作
                      <span className="block">适合硕士、博士与研究导向型申请者</span>
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button asChild>
                      <Link href="mailto:hello@biostudy.com">发送邮件</Link>
                    </Button>
                    <Button variant="secondary" asChild>
                      <Link href="tel:+861055550001">预约电话</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-[rgba(22,35,63,0.08)] py-12">
        <div className="footer-wordmark pointer-events-none absolute inset-x-0 bottom-2" />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-[#16233f]">
              BioStudy
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#576076]">
              面向生物方向申请者的申请策略平台，用更清楚的方法管理定位、项目池、材料主线与递交节奏。
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#16233f]">平台</p>
              <ul className="mt-4 space-y-3 text-sm text-[#576076]">
                {footerLinks.platform.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-[#16233f]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#16233f]">更多</p>
              <ul className="mt-4 space-y-3 text-sm text-[#576076]">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-[#16233f]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
