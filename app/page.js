import MainSlider from "@/components/mainSlider";
import FeaturedCategories from "@/components/ featuredCategories";
import FeaturedProducts from "@/components/featuredProducts";
import BrandLogos from "@/components/brandLogos";
import MixProducts from "@/components/mixProducts";
import WhyUs from "@/components/whyUs";
import getData from "@/lib/query";
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
export default async function Home() {
  const bannersQuery = await getData("banners");
  const bannersData = bannersQuery.props.data;
  return (
    <>
      <MainSlider sliders={bannersData} />
      <FeaturedCategories />
      <FeaturedProducts />
      <BrandLogos />
      <MixProducts />
      <WhyUs />
    </>
  );
}
