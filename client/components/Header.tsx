import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "首页", href: "/" },
    { name: "项目", href: "#programs" },
    { name: "大学", href: "#universities" },
    { name: "关于", href: "#about" },
    { name: "联系", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center text-white font-bold text-xs">
            BIO
          </div>
          <span className="text-foreground font-semibold">BioStudy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="#"
            className="px-4 py-2 text-sm font-medium text-foreground rounded-full border border-white/15 hover:bg-white/10 transition-all duration-200"
          >
            登录
          </Link>
          <Link
            to="#"
            className="px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200"
          >
            咨询
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/5 md:hidden">
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-white/5 mt-2 pt-2 flex flex-col gap-2">
                <Link
                  to="#"
                  className="px-4 py-2 text-sm font-medium text-foreground rounded-lg border border-white/15 hover:bg-white/5 transition-colors text-center"
                >
                  登录
                </Link>
                <Link
                  to="#"
                  className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-center"
                >
                  咨询
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
