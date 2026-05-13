"use client";
import { DownloadSimple, ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: "url('/assets/hero-asuka.png')" }}></div>
      <div className="container hero-content-wrapper">
        <div className="hero-content glass-card" data-aos="fade-up" style={{ maxWidth: "800px" }}>
          <div className="hero-badge">Dự Án Hạng Sang</div>
          <h1 className="hero-title text-dark">
            Tuyệt Tác Kiến Trúc <br /><span className="text-primary-red" style={{ color: "var(--primary-red)" }}>Nhật Bản</span> Tại Châu Đốc
          </h1>
          <p className="hero-subtitle text-dark opacity-90">
            Sở hữu vị trí độc tôn ngay mặt tiền Tôn Đức Thắng, Phúc An Asuka là khu đô thị kiểu mẫu tích hợp tiện ích đỉnh cao, mang đến chuẩn mực sống mới và cơ hội đầu tư sinh lời vượt trội.
          </p>
          <div className="hero-cta-group">
            <a href="#lead-magnet" className="btn btn-primary">Nhận Bảng Giá <ArrowRight size={20} /></a>
            <a href="ASUKA_SLIDE_SHORT.pdf" download className="btn btn-outline-gold">Tải Tài Liệu <DownloadSimple size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
