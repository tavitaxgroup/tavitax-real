"use client";
import { useEffect } from "react";
import { DownloadSimple } from "@phosphor-icons/react";

export default function Presentation() {
  useEffect(() => {
    // DFlip depends on jQuery which is loaded globally via Script in layout
    const initFlipBook = () => {
      if (typeof window !== "undefined" && (window as any).$) {
        const $ = (window as any).$;
        if ($.fn.flipBook) {
          const options = {
            webgl: true,
            backgroundColor: "#1a1a1a",
            pageMode: 1, // 1 = Single page mode
            autoEnableOutline: false,
            autoEnableThumbnail: false
          };
          $("#df_manual_book").flipBook("ASUKA_SLIDE_SHORT.pdf", options);
        } else {
          // Retry if script isn't fully initialized yet
          setTimeout(initFlipBook, 500);
        }
      }
    };
    
    initFlipBook();
  }, []);

  return (
    <section id="presentation" className="presentation-section section-dark">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <div className="section-badge-center">Tài Liệu Trực Quan</div>
          <h2>Brochure <span className="text-gold">Dự Án</span></h2>
          <div className="divider"></div>
          <p>Xem toàn bộ thông tin quy hoạch, vị trí, tiện ích và các mẫu nhà thực tế của Phúc An Asuka qua brochure chính thức từ Chủ Đầu Tư.</p>
        </div>
        <div className="pdf-container mt-5" data-aos="zoom-in" style={{ width: "100%", margin: "0 auto" }}>
          <div id="df_manual_book" style={{ height: "80vh", minHeight: "600px" }}></div>
        </div>
        <div className="text-center mt-5" data-aos="fade-up">
          <a href="ASUKA_SLIDE_SHORT.pdf" download className="btn btn-primary">
            Tải Brochure Về Máy <DownloadSimple size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
