"use client";
import { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="container header-inner">
        <a href="#" className="logo">
          <img src="/assets/logo.png" alt="Tavitax Asuka" className="logo-img" />
        </a>
        <nav className="nav-menu">
          <a href="#overview" onClick={(e) => scrollToSection(e, "overview")} className="nav-link">Tổng quan</a>
          <a href="#products" onClick={(e) => scrollToSection(e, "products")} className="nav-link">Sản phẩm</a>
          <a href="#utilities" onClick={(e) => scrollToSection(e, "utilities")} className="nav-link">Tiện ích</a>
          <a href="#presentation" onClick={(e) => scrollToSection(e, "presentation")} className="nav-link">Brochure Dự Án</a>
          <a href="#lead-magnet" onClick={(e) => scrollToSection(e, "lead-magnet")} className="nav-link">Liên hệ</a>
        </nav>
        <div className="header-cta">
          <a href="#lead-magnet" onClick={(e) => scrollToSection(e, "lead-magnet")} className="btn btn-outline-gold btn-sm">
            Nhận Báo Giá
          </a>
        </div>
        <button className="mobile-menu-btn">
          <List size={32} />
        </button>
      </div>
    </header>
  );
}
