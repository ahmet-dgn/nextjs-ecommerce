import Image from "next/image";
import MainSlider from "@/components/mainSlider";

export default function Home() {
  const sliders = [
    {
      image: "/Untitled-2a.jpg",
      url: "/product/8",
      alt: "Magnhild Organik Pamuk Tshirt",
      bgColor: "bg-orange-300",
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
    </>
  );
}
