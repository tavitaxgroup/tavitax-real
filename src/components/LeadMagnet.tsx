"use client";
import { useState } from "react";
import { CheckCircle, Spinner, CaretRight, Star } from "@phosphor-icons/react";

export default function LeadMagnet() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API Call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        alert("Đăng ký thành công! Chuyên viên sẽ liên hệ lại với bạn trong 5 phút nữa.");
        setStatus("idle");
        (e.target as HTMLFormElement).reset();
      }, 1000);
    }, 1500);
  };

  return (
    <section id="lead-magnet" className="lead-magnet-section section-gradient">
      <div className="container">
        <div className="flex flex-col lg:flex-row glass-card p-0 overflow-hidden luxury-shadow">
          <div className="lead-magnet-text padding-large text-dark">
            <h2 className="text-dark mb-4" style={{ fontSize: "2.5rem" }}>Sở Hữu Bất Động Sản <br /><span className="text-primary-red" style={{ color: "var(--primary-red)" }}>Trung Tâm Châu Đốc</span></h2>
            <p className="opacity-90 mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Đừng bỏ lỡ cơ hội đầu tư sinh lời vượt trội tại Phúc An Asuka. Đăng ký ngay hôm nay để nhận trọn bộ tài liệu:
            </p>
            <ul className="project-features">
              <li><CheckCircle weight="fill" className="text-gold" /> Bảng giá gốc trực tiếp từ CĐT Trần Anh Group</li>
              <li><CheckCircle weight="fill" className="text-gold" /> Chính sách chiết khấu & ưu đãi mới nhất</li>
              <li><CheckCircle weight="fill" className="text-gold" /> Cập nhật tiến độ thi công & hình ảnh thực tế</li>
              <li><CheckCircle weight="fill" className="text-gold" /> Giỏ hàng nội bộ các vị trí đẹp nhất dự án</li>
            </ul>
          </div>
          
          <div className="lead-magnet-form-wrapper bg-white padding-large">
            <h3 className="mb-2 text-dark" style={{ fontSize: "1.8rem" }}>Nhận Thông Tin Dự Án</h3>
            <p className="text-muted mb-4">Hoàn toàn bảo mật & Miễn phí tư vấn</p>
            
            <form id="crm-lead-form" className="crm-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="lead-name" placeholder="Họ và tên của bạn *" required />
              </div>
              <div className="form-group">
                <input type="tel" id="lead-phone" placeholder="Số điện thoại Zalo *" required />
              </div>
              <div className="form-group">
                <select id="lead-product" required defaultValue="">
                  <option value="" disabled>Bạn quan tâm sản phẩm nào?</option>
                  <option value="shophouse">Shophouse Thương Mại</option>
                  <option value="nhapho">Nhà Phố Liền Kề</option>
                  <option value="bietthu">Biệt Thự Vườn</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary btn-block mt-4" 
                disabled={status !== "idle"}
                style={{ backgroundColor: status === "success" ? "#2e7d32" : "" }}
              >
                {status === "idle" && <>Đăng Ký Nhận Báo Giá <CaretRight weight="bold" /></>}
                {status === "loading" && <><Spinner className="animate-spin" /> Đang xử lý...</>}
                {status === "success" && <><CheckCircle weight="fill" /> Đăng ký thành công!</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
