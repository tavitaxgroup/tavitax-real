"use client";
import { MapPin, Buildings, Leaf, FileText } from "@phosphor-icons/react";

export default function Overview() {
  return (
    <section id="overview" className="overview-section section-light">
      <div className="container">
        <div className="overview-grid">
          <div className="overview-text" data-aos="fade-right">
            <div className="section-badge">Tổng Quan</div>
            <h2>Quy Mô Đẳng Cấp <br /><span className="text-gold">Hơn 100 Ha</span></h2>
            <div className="divider-left"></div>
            <p className="overview-desc">Phúc An Asuka là biểu tượng mới của sự phồn vinh tại Châu Đốc, An Giang do <strong>Trần Anh Group</strong> phát triển. Dự án được quy hoạch bài bản với hệ thống tiện ích đặc quyền, pháp lý minh bạch 1/500 và định hướng trở thành khu đô thị kiểu mẫu hàng đầu khu vực miền Tây.</p>
            <div className="overview-features-grid mt-4">
              <div className="feature-box">
                <MapPin weight="fill" className="text-gold feature-icon" />
                <div>
                  <h4 className="text-dark">Vị trí vàng</h4>
                  <p className="text-muted text-sm">Mặt tiền Tôn Đức Thắng (QL91), Phường Vĩnh Mỹ, TP. Châu Đốc.</p>
                </div>
              </div>
              <div className="feature-box">
                <Buildings weight="fill" className="text-gold feature-icon" />
                <div>
                  <h4 className="text-dark">Sản phẩm đa dạng</h4>
                  <p className="text-muted text-sm">Nhà phố liền kề, Shophouse, Biệt thự cao cấp.</p>
                </div>
              </div>
              <div className="feature-box">
                <Leaf weight="fill" className="text-gold feature-icon" />
                <div>
                  <h4 className="text-dark">Kiến trúc</h4>
                  <p className="text-muted text-sm">Thiết kế chuẩn Nhật Bản, tinh tế và hài hòa với thiên nhiên.</p>
                </div>
              </div>
              <div className="feature-box">
                <FileText weight="fill" className="text-gold feature-icon" />
                <div>
                  <h4 className="text-dark">Pháp lý</h4>
                  <p className="text-muted text-sm">Đã có quy hoạch 1/500, sở hữu lâu dài.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-visual" data-aos="fade-left">
            <div className="image-stack">
              <img src="/assets/asuka-visual.png" alt="Phúc An Asuka Tổng Quan" className="img-main luxury-shadow" />
              <div className="experience-badge glass-card-dark">
                <span className="number text-gold">100+</span>
                <span className="text text-white">Ha Quy Mô</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
