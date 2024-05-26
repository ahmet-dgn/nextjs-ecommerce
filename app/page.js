import MainSlider from "@/components/mainSlider";
import FeaturedCategories from "@/components/ featuredCategories";
import FeaturedProducts from "@/components/featuredProducts";
import BrandLogos from "@/components/brandLogos";
import MixProducts from "@/components/mixProducts";
import WhyUs from "@/components/whyUs";
export default function Home() {
  const sliders = [
    {
      image: "/slider-1.jpg",
      url: "/product/8",
      alt: "Şapka",
      bgColor: "bg-red-200",
    },
    {
      image: "/Untitled-2.jpg",
      url: "/product/8",
      alt: "Slider-2",
      bgColor: "bg-purple-300",
    },
    {
      image: "/Untitled-2w.jpg",
      url: "/product/8",
      alt: "Magnhild Organik Pamuk Tshirt",
      bgColor: "bg-yellow-300",
    },
  ];
  return (
    <>
      <MainSlider sliders={sliders} />
      <FeaturedCategories />
      <FeaturedProducts />
      <BrandLogos />
      <MixProducts />
      <WhyUs />
    </>
  );
}
