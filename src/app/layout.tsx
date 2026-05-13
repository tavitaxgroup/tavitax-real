import type { Metadata } from "next";
import { Montserrat, Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import 'aos/dist/aos.css';

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Phúc An Asuka - Biểu Tượng Phồn Vinh Châu Đốc",
  description: "Dự án khu đô thị kiểu mẫu Phúc An Asuka tại trung tâm thành phố lễ hội Châu Đốc, An Giang do Trần Anh Group phát triển.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/dflip/css/dflip.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/dflip/css/themify-icons.min.css" rel="stylesheet" type="text/css" />
      </head>
      <body className={`${montserrat.variable} ${beVietnam.variable}`}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/dflip/js/dflip.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
