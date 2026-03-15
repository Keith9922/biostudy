import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="surface-strong max-w-xl rounded-[36px] p-10 text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#101a43]">
          这个页面还没被装进申请工作流里
        </h1>
        <p className="mt-4 text-base leading-8 text-[#59617a]">
          你访问的页面不存在，或者还没有被设计完成。
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">返回首页</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
