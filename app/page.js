import MainSlider from "@/components/mainSlider";
import FeaturedCategories from "@/components/ featuredCategories";
import FeaturedProducts from "@/components/featuredProducts";
import BrandLogos from "@/components/brandLogos";
import MixProducts from "@/components/mixProducts";
import WhyUs from "@/components/whyUs";

export default function Home() {
  const sliders = [
    {
      image: "/slider-1.webp",
      url: "/search?categoryIDs=500",
      alt: "Şapka",
      bgColor: "bg-red-100",
    },
    {
      image: "/slider-2.webp",
      url: "/search?categoryIDs=400",
      alt: "Tshirt",
      bgColor: "bg-amber-100",
    },
    {
      image: "/slider-3.webp",
      url: "/search?categoryIDs=200",
      alt: "Pantolon",
      bgColor: "bg-cyan-100",
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
