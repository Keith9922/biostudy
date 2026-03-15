"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Microscope, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  items: NavItem[];
};

export function SiteHeader({ items }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onHashChange = () => setOpen(false);

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
        isScrolled &&
          "border-[rgba(22,35,63,0.08)] bg-[rgba(248,246,241,0.84)] backdrop-blur-xl",
      )}
    >
      <div className="container flex h-[4.6rem] items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3 text-[#16233f]">
          <span className="flex size-11 items-center justify-center rounded-[18px] border border-[rgba(22,35,63,0.1)] bg-[rgba(255,255,255,0.82)] text-[#16233f] shadow-[0_18px_36px_-26px_rgba(22,35,63,0.4)]">
            <Microscope className="size-5" />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-lg font-semibold tracking-[-0.03em]">
              BioStudy
            </span>
            <span className="text-[11px] tracking-[0.06em] text-[#6a7285]">
              生物研究型申请策略室
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-[0.01em] text-[#556076] transition-colors hover:text-[#16233f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild>
            <Link href="#results">录取结果</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="#contact">预约评估</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-[18px] border border-[rgba(22,35,63,0.1)] bg-[rgba(255,255,255,0.8)] text-[#16233f] shadow-[0_16px_32px_-26px_rgba(22,35,63,0.35)] lg:hidden"
          aria-label="切换导航菜单"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[rgba(22,35,63,0.08)] bg-[rgba(248,246,241,0.94)] px-4 pb-5 pt-4 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[18px] px-4 py-3 text-sm font-medium tracking-[0.01em] text-[#16233f] transition-colors hover:bg-[rgba(255,255,255,0.82)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button variant="secondary" asChild>
                <Link href="#workflow" onClick={() => setOpen(false)}>
                  服务流程
                </Link>
              </Button>
              <Button asChild>
                <Link href="#contact" onClick={() => setOpen(false)}>
                  预约评估
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
