"use client";
import { Drop, Tree, Waves } from "@phosphor-icons/react";

export default function Utilities() {
  return (
    <section id="utilities" className="utilities-section section-light">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">Đặc Quyền Thượng Lưu</div>
          <h2>Hệ Sinh Thái <span className="text-gold">Tiện Ích 5 Sao</span></h2>
          <div className="divider-left"></div>
          <p style={{ marginLeft: 0 }}>Khởi nguồn cho một cuộc sống thịnh vượng với mảng xanh rộng lớn và không gian thanh tịnh xứ Phù Tang.</p>
        </div>
        <div className="utilities-wrapper mt-5">
          <div className="utilities-visual-grid" data-aos="zoom-in">
            <img src="/assets/tienich_1.png" alt="Tiện ích 1" className="img-main luxury-shadow rounded-lg" />
            <div className="sub-images">
              <img src="/assets/tienich_2.png" alt="Tiện ích 2" className="img-sub luxury-shadow rounded-lg" />
            </div>
          </div>
          <div className="utilities-content">
            <div className="utility-list">
              <div className="utility-item glass-card" data-aos="fade-left" data-aos-delay="100">
                <div className="utility-icon text-gold">
                  <Drop weight="fill" />
                </div>
                <div>
                  <h4 className="text-dark">Clubhouse Yamato</h4>
                  <p className="text-muted text-sm">Hồ bơi tràn bờ, phòng GYM hiện đại, Spa thư giãn và khu cà phê sang trọng đáp ứng mọi nhu cầu giải trí.</p>
                </div>
              </div>
              <div className="utility-item glass-card" data-aos="fade-left" data-aos-delay="200">
                <div className="utility-icon text-gold">
                  <Tree weight="fill" />
                </div>
                <div>
                  <h4 className="text-dark">Công Viên Kazuko</h4>
                  <p className="text-muted text-sm">Không gian xanh đậm chất Nhật Bản với vườn bonsai, cầu gỗ đỏ và đường dạo bộ rợp bóng cây.</p>
                </div>
              </div>
              <div className="utility-item glass-card" data-aos="fade-left" data-aos-delay="300">
                <div className="utility-icon text-gold">
                  <Waves weight="fill" />
                </div>
                <div>
                  <h4 className="text-dark">Hồ Điều Hòa Kiyoko</h4>
                  <p className="text-muted text-sm">Điểm nhấn cảnh quan mang lại luồng sinh khí mát mẻ, thịnh vượng và tài lộc cho cư dân.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
