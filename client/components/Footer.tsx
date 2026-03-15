import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "产品",
      links: [
        { name: "项目", href: "#programs" },
        { name: "大学", href: "#universities" },
        { name: "定价", href: "#pricing" },
      ],
    },
    {
      title: "公司",
      links: [
        { name: "关于我们", href: "#about" },
        { name: "博客", href: "#blog" },
        { name: "联系", href: "#contact" },
      ],
    },
    {
      title: "法律",
      links: [
        { name: "隐私政策", href: "#privacy" },
        { name: "服务条款", href: "#terms" },
        { name: "Cookie政策", href: "#cookies" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "微信",
      icon: "💬",
      href: "#wechat",
    },
    {
      name: "微博",
      icon: "📱",
      href: "#weibo",
    },
    {
      name: "小红书",
      icon: "🔴",
      href: "#xiaohongshu",
    },
    {
      name: "YouTube",
      icon: "▶️",
      href: "#youtube",
    },
  ];

  return (
    <footer id="contact" className="relative w-full bg-gradient-to-b from-background to-[hsl(220,35%,11%)] border-t border-white/5 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-20 relative z-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center text-white font-bold text-xs">
                BIO
              </div>
              <span className="text-foreground">BioStudy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              连接全球，成就未来。为中国学生提供最优质的国际生物学教育机会。
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  to={social.href}
                  className="w-10 h-10 rounded-lg glass-1 hover:glass-2 flex items-center justify-center transition-all text-lg"
                  title={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">联系我们</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">邮箱</p>
                  <a
                    href="mailto:hello@biostudy.com"
                    className="text-sm text-foreground hover:text-blue-500 transition-colors"
                  >
                    hello@biostudy.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">电话</p>
                  <a
                    href="tel:+86-10-5555-0001"
                    className="text-sm text-foreground hover:text-cyan-500 transition-colors"
                  >
                    +86-10-5555-0001
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">地址</p>
                  <p className="text-sm text-foreground">
                    北京市朝阳区<br />
                    BioStudy总部
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} BioStudy. 保留所有权利。
          </p>
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              隐私政策
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              服务条款
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie设置
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
