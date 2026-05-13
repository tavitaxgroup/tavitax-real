"use client";
import { MapTrifold, Compass, ArrowsOut, ArrowRight, Buildings } from "@phosphor-icons/react";

export default function Products() {
  return (
    <section id="products" className="products-section section-dark">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <div className="section-badge-center">Sản Phẩm Cốt Lõi</div>
          <h2>Bộ Sưu Tập <span className="text-gold">Tinh Hoa</span></h2>
          <div className="divider"></div>
          <p>Mỗi sản phẩm tại Phúc An Asuka đều được chăm chút tỉ mỉ từ kiến trúc đến công năng, là không gian sống lý tưởng và cơ hội kinh doanh sinh lời bền vững.</p>
        </div>
        <div className="product-grid mt-5">
          {/* Card 1 */}
          <div className="product-card glass-card-dark" data-aos="fade-up" data-aos-delay="100">
            <div className="product-image" style={{ backgroundImage: "url('/assets/shophouse_real.png')" }}>
              <div className="product-tag text-uppercase">Hot</div>
            </div>
            <div className="product-info">
              <h3>Shophouse Thương Mại</h3>
              <div className="product-meta">
                <span><MapTrifold /> Trục chính dự án</span>
                <span><Compass /> Đông Nam</span>
              </div>
              <div className="product-specs">
                <div className="spec-tag"><ArrowsOut /> Diện tích: 100m² - 120m²</div>
                <div className="spec-tag"><Buildings /> Kết cấu: 1 trệt 2 lầu</div>
              </div>
              <a href="#lead-magnet" className="btn btn-outline-gold btn-block mt-auto">Nhận Báo Giá <ArrowRight /></a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="product-card glass-card-dark" data-aos="fade-up" data-aos-delay="200">
            <div className="product-image" style={{ backgroundImage: "url('/assets/nhapho_real.png')" }}>
              <div className="product-tag text-uppercase">Bán chạy</div>
            </div>
            <div className="product-info">
              <h3>Nhà Phố Liền Kề</h3>
              <div className="product-meta">
                <span><MapTrifold /> Đường nội bộ</span>
                <span><Compass /> Đa hướng</span>
              </div>
              <div className="product-specs">
                <div className="spec-tag"><ArrowsOut /> Diện tích: 80m² - 100m²</div>
                <div className="spec-tag"><Buildings /> Kết cấu: 1 trệt 2 lầu</div>
              </div>
              <a href="#lead-magnet" className="btn btn-outline-gold btn-block mt-auto">Nhận Báo Giá <ArrowRight /></a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="product-card glass-card-dark" data-aos="fade-up" data-aos-delay="300">
            <div className="product-image" style={{ backgroundImage: "url('/assets/bietthu_real.png')" }}>
              <div className="product-tag text-uppercase">Cao cấp</div>
            </div>
            <div className="product-info">
              <h3>Biệt Thự Vườn</h3>
              <div className="product-meta">
                <span><MapTrifold /> Ven hồ điều hòa</span>
                <span><Compass /> Nam & Đông Nam</span>
              </div>
              <div className="product-specs">
                <div className="spec-tag"><ArrowsOut /> Diện tích: 150m² - 200m²</div>
                <div className="spec-tag"><Buildings /> Kết cấu: 1 trệt 1 lầu</div>
              </div>
              <a href="#lead-magnet" className="btn btn-outline-gold btn-block mt-auto">Nhận Báo Giá <ArrowRight /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
