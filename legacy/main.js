document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS Animation Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true, // whether animation should happen only once - while scrolling down
            offset: 100, // offset (in px) from the original trigger point
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: 'ease-out-cubic', // default easing for AOS animations
        });
    }

    // 2. Sticky Header with Background Change
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // 4. CRM Form Submission Mock (Simulate API Call)
    const CRMForm = document.getElementById('crm-lead-form');
    if (CRMForm) {
        CRMForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = CRMForm.querySelector('.btn-primary');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Đang xử lý...';
            btn.style.pointerEvents = 'none';

            // Simulate Network Request
            setTimeout(() => {
                const name = document.getElementById('lead-name').value;
                btn.innerHTML = '<i class="ph ph-check-circle"></i> Đăng ký thành công!';
                btn.style.background = '#2e7d32'; // Success Green
                
                setTimeout(() => {
                    alert(`Cảm ơn ${name}! Tài liệu và Bảng giá Phúc An Asuka đã được gửi. Chuyên viên sẽ liên hệ lại với bạn trong 5 phút nữa.`);
                    CRMForm.reset();
                    btn.innerHTML = originalText;
                    btn.style.background = ''; // reset to default CSS
                    btn.style.pointerEvents = 'auto';
                }, 1000);
            }, 1500);
        });
    }
});
