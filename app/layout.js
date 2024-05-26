import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import getData from "@/lib/query";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/footer";
import NewsLetter from "@/components/newsLetter";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smile İle Tarzını Keşfet! | Trend ve Enerjik Moda ",
  description:
    "En yeni moda trendleri, göz alıcı tasarımlar ve enerjik koleksiyonlar Smile'da! Kıyafetlerinle fark yarat ve tarzını ortaya koy. Şimdi keşfet ve stil sahibi ol!",
  openGraph: {
    title: "Smile İle Tarzını Keşfet! | Trend ve Enerjik Moda",
    description:
      "En yeni moda trendleri, göz alıcı tasarımlar ve enerjik koleksiyonlar Smile'da! Kıyafetlerinle fark yarat ve tarzını ortaya koy. Şimdi keşfet ve stil sahibi ol!",
    url: `${process.env.WEB_SITE_URL}`,
    siteName: "Smile",
    images: [
      {
        url: "/why-us.jpg",
        width: 576,
        height: 384,
        alt: "Smile",
      },
    ],
    locale: "tr-TR",
    type: "website",
  },
};
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const navbarQuery = await getData("navigation");
  const navbarData = navbarQuery.props.data;
  return (
    <html lang="tr">
      <body className={`${inter.className} `}>
        <CartProvider>
          <Navbar navigation={navbarData} />
          {children}
          <NewsLetter />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
