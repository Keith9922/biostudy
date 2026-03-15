import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/site-config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BioStudy",
    short_name: "BioStudy",
    description: "AI 驱动的生物留学申请中台，聚合定位、材料、导师匹配与申请节奏。",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#f7f4ec",
    theme_color: "#101a43",
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "预约咨询",
        short_name: "咨询",
        url: withBasePath("/#contact"),
        description: "快速跳转到咨询入口",
      },
      {
        name: "查看流程",
        short_name: "流程",
        url: withBasePath("/#workflow"),
        description: "查看 BioStudy 的研究型申请流程",
      },
    ],
    screenshots: [
      {
        src: withBasePath("/hero-command-center.svg"),
        sizes: "1280x900",
        type: "image/svg+xml",
        form_factor: "wide",
        label: "BioStudy 申请工作台",
      },
    ],
  };
}
