import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/primitives/navbar";
import getData from "@/lib/query";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/primitives/footer";
import NewsLetter from "@/components/primitives/newsLetter";
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="iKDEfqKb4-4uqJmhytmD12cSlupk3-Ree3BuhEdE2nc"
        />
      </head>
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
