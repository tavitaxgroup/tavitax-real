import { PhoneCall } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <>
      <footer className="footer section-dark py-4 text-center">
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <img src="/assets/logo.png" alt="Tavitax Logo" className="footer-logo" />
          <p className="opacity-90" style={{ fontSize: "0.95rem" }}>
            Landing Page chính thức Dự án Phúc An Asuka - Châu Đốc.<br />
            Phát triển bởi Trần Anh Group. Phân phối & Tư vấn chiến lược bởi Tavitax.
          </p>
          <p className="opacity-90 mt-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Tavitax. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Chat Widgets */}
      <div className="floating-chat-container">
        <a href="tel:0900000000" className="chat-btn phone-btn" style={{ background: "linear-gradient(135deg, #28a745, #218838)" }}>
          <div className="chat-icon"><PhoneCall weight="fill" /></div>
          <span className="chat-tooltip">Gọi Hotline: 0900.000.000</span>
        </a>
        <a href="https://zalo.me/0900000000" target="_blank" rel="noopener noreferrer" className="chat-btn zalo-btn">
          <div className="chat-icon">Zalo</div>
          <span className="chat-tooltip">Chat Zalo CĐ Tư Vấn</span>
        </a>
      </div>
    </>
  );
}
