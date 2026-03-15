import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";

import { PwaRegister } from "@/components/pwa-register";
import { siteUrl, withBasePath } from "@/lib/site-config";
import "@/app/globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: "BioStudy | 生物留学申请策略平台",
  description:
    "BioStudy 面向生物、神经、生信与公共卫生等方向申请者，提供背景诊断、项目池建立、材料打磨与递交跟进的一体化申请策略服务。",
  keywords: [
    "BioStudy",
    "生物留学",
    "生物学申请",
    "研究型申请",
    "博士申请",
    "生物信息留学",
    "神经科学留学",
  ],
  applicationName: "BioStudy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "BioStudy",
    title: "BioStudy | 生物留学申请策略平台",
    description:
      "把背景诊断、项目定位、材料治理与申请节奏整合到一套更清楚的生物留学申请工作流里。",
    url: "/",
    images: [
      {
        url: withBasePath("/social-card.svg"),
        width: 1200,
        height: 630,
        alt: "BioStudy 生物留学申请策略平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioStudy | 生物留学申请策略平台",
    description:
      "面向生物、神经、生信与公共卫生等方向申请者，提供背景诊断、项目池建立、材料打磨与递交跟进的一体化申请策略服务。",
    images: [withBasePath("/social-card.svg")],
  },
  category: "education",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BioStudy",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f3",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${notoSansSC.variable} ${notoSerifSC.variable} bg-background font-sans text-foreground antialiased`}
      >
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
