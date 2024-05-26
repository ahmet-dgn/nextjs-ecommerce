import ProductInfoArea from "@/components/productInfoArea";
import Image from "next/image";
import Slider from "@/components/slider";
import getData from "@/lib/query";
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.API_URL}products`, {
      next: { revalidate: 0 },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    return products.map((product) => ({
      slug: product.slug.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function generateMetadata({ params }) {
  const productQuery = await getData(`products?slug=${params.slug}`);
  const [product] = productQuery.props.data;
  const [images] = product.images;

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `${process.env.WEB_SITE_URL}/products/${params.slug}`,
      siteName: "Smile",
      images: [
        {
          url: images.url,
          width: 576,
          height: 384,
          alt: images.alt,
        },
      ],
      locale: "tr-TR",
      type: "website",
    },
  };
}

export default async function Product({ params }) {
  const response = await fetch(
    `${process.env.API_URL}products?slug=${params.slug}`
  );
  const data = await response.json();

  const [product] = data;
  const [images] = product.images;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: images.url,
    description: product.shortDescription,
    url: `${process.env.WEB_SITE_URL}/products/${params.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: product.price,
      priceCurrency: "TRY",
    },
  };
  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>
              <div className="lg:hidden ">
                <Slider sliders={product.images} />
              </div>
              <div className=" grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8 relative hidden lg:grid">
                {product.images.map((image, index) => (
                  <Image
                    key={index}
                    width={696}
                    height={1044}
                    src={image.url}
                    alt={image.alt}
                    className={classNames(
                      index === 0
                        ? "lg:col-span-2 lg:row-span-2"
                        : "hidden lg:block",
                      "rounded-lg"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-5">
              <ProductInfoArea productData={product} />
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
