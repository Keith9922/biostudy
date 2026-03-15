"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarRange, ChartNoAxesCombined, Radar } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { heroMiniStats } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function HeroScene() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from("[data-scene-entry]", {
        y: 28,
        opacity: 0,
        scale: 0.985,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.to("[data-float-card='primary']", {
        y: 6,
        duration: 6.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-float-card='secondary']", {
        y: -5,
        duration: 6.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((card) => {
        const depth = Number(card.dataset.parallaxDepth ?? "12");

        gsap.to(card, {
          y: depth,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top+=40",
            end: "bottom top",
            scrub: 0.35,
          },
        });
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto flex w-full max-w-[680px] items-center justify-center py-8 lg:py-0"
    >
      <div className="absolute inset-x-12 top-10 h-80 rounded-full bg-[radial-gradient(circle,_rgba(72,106,190,0.14),_transparent_72%)] blur-3xl" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 720 620"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-scene-gradient" x1="90" y1="70" x2="610" y2="520">
            <stop offset="0" stopColor="rgba(49,82,143,0.38)" />
            <stop offset="1" stopColor="rgba(92,139,122,0.18)" />
          </linearGradient>
        </defs>
        <path
          d="M112 142C158 92 254 60 372 62C521 64 642 120 644 220C645 320 520 381 386 394C222 410 112 468 112 554"
          stroke="url(#hero-scene-gradient)"
          strokeWidth="1.3"
        />
        <path
          d="M160 86C212 118 274 132 344 132C430 132 522 108 602 74"
          stroke="rgba(22,35,63,0.12)"
          strokeWidth="1"
        />
        <circle cx="112" cy="142" r="8" fill="rgba(22,35,63,0.16)" />
        <circle cx="344" cy="132" r="6" fill="rgba(92,139,122,0.24)" />
        <circle cx="602" cy="74" r="8" fill="rgba(49,82,143,0.22)" />
        <circle cx="386" cy="394" r="7" fill="rgba(22,35,63,0.16)" />
        <circle cx="112" cy="554" r="9" fill="rgba(92,139,122,0.22)" />
      </svg>

      <motion.div
        data-float-card="primary"
        data-scene-entry
        className="pointer-events-none absolute -left-14 top-20 z-20 hidden w-[200px] rounded-[28px] border border-[rgba(22,35,63,0.08)] bg-[rgba(255,255,255,0.76)] p-4 shadow-[0_24px_50px_-36px_rgba(22,35,63,0.22)] backdrop-blur xl:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-[16px] bg-[#eef2fb] text-[#31528f]">
            <Radar className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-[#6d7587]">
              策略复核
            </p>
            <p className="mt-1 text-[13px] font-semibold leading-5 text-[#16233f]">
              重点项目进入最终复核
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 text-[12px] leading-6 text-[#576076]">
          <div className="rounded-[18px] bg-[#f6f8fb] px-4 py-3">
            导师偏好、奖学金窗口与背景缺口已统一标记。
          </div>
          <div className="flex items-center justify-between border-t border-[rgba(22,35,63,0.08)] pt-3 text-[10px] uppercase tracking-[0.16em] text-[#7b8292]">
            <span>项目池</span>
            <span>校准完成</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        data-float-card="secondary"
        data-scene-entry
        className="pointer-events-none absolute bottom-6 right-1 z-20 hidden w-[220px] rounded-[28px] border border-[rgba(22,35,63,0.08)] bg-[rgba(255,255,255,0.78)] p-4 shadow-[0_26px_56px_-40px_rgba(22,35,63,0.22)] backdrop-blur lg:block"
        initial={{ opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-[16px] bg-[#16233f] text-white">
            <CalendarRange className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-[#6d7587]">
              本周节点
            </p>
            <p className="mt-1 text-[13px] font-semibold leading-5 text-[#16233f]">
              两项材料需要最终确认
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2.5">
          {[
            "个人陈述终稿确认",
            "推荐信时间点确认",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-[16px] bg-[#f6f8fb] px-3.5 py-2.5 text-[12px] text-[#576076]"
            >
              <span>{item}</span>
              <span className="text-[11px] tracking-[0.12em] text-[#31528f]">
                处理中
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 grid w-full gap-4">
        <div
          data-scene-entry
          data-parallax="board"
          data-parallax-depth="16"
          className="surface-strong interactive-frame overflow-hidden rounded-[34px] border border-[rgba(255,255,255,0.86)] p-3 shadow-[0_42px_118px_-72px_rgba(22,35,63,0.44)]"
        >
          <div className="mb-3 flex items-center justify-between rounded-[24px] border border-[rgba(22,35,63,0.08)] bg-[rgba(244,246,249,0.82)] px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-2 rounded-full bg-[#31528f]" />
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[#6d7587]">
                申请总控台
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] tracking-[0.08em] text-[#7b8292]">
              <ChartNoAxesCombined className="size-4 text-[#5c8b7a]" />
              研究导向
            </div>
          </div>
          <Image
            src="/hero-command-center.svg"
            alt="BioStudy 申请工作台界面"
            width={1060}
            height={760}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 620px, 100vw"
            className="h-auto w-full rounded-[24px]"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
          <div
            data-scene-entry
            data-parallax="thumb"
            data-parallax-depth="24"
            className="surface interactive-frame overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.82)] p-3 shadow-[0_28px_74px_-52px_rgba(22,35,63,0.32)]"
          >
            <Image
              src="/mentor-cloud.svg"
              alt="导师匹配图谱"
              width={760}
              height={540}
              sizes="(min-width: 768px) 340px, 100vw"
              className="h-auto w-full rounded-[20px]"
            />
          </div>

          <div
            data-scene-entry
            data-parallax="thumb"
            data-parallax-depth="28"
            className="surface interactive-frame overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.82)] p-3 shadow-[0_28px_74px_-52px_rgba(22,35,63,0.32)]"
          >
            <Image
              src="/offer-radar.svg"
              alt="申请时间线和 offer 雷达"
              width={760}
              height={540}
              sizes="(min-width: 768px) 280px, 100vw"
              className="h-auto w-full rounded-[20px]"
            />
          </div>
        </div>
      </div>

      <div
        data-scene-entry
        className="pointer-events-none absolute inset-x-20 bottom-[-18px] z-30 hidden origin-bottom scale-[0.95] grid-cols-3 gap-3 rounded-[26px] border border-[rgba(255,255,255,0.78)] bg-[rgba(255,255,255,0.76)] p-3 shadow-[0_24px_52px_-42px_rgba(22,35,63,0.22)] backdrop-blur xl:grid 2xl:inset-x-16 2xl:bottom-[10px] 2xl:scale-100"
      >
        {heroMiniStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[20px] bg-[#f6f8fb] px-4 py-3 text-left"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#7b8196]">
              {stat.label}
            </p>
            <p className="mt-1 text-base font-semibold text-[#16233f]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
