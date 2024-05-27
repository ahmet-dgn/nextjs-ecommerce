import Link from "next/link";
import ProductCard from "../primitives/productCard";
const products = [
  {
    id: "9",
    uploadDate: "2024-05-15T15:30:00Z",
    name: "Jersey Puf Kollu Tshirt",
    slug: "jersey-puf-kollu-tshirt",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 3000,
    availability: "InStock",
    discountPrice: 2800,
    currency: "TRY",
    brandID: "300",
    categoryIDs: "400",
    sizes: [
      {
        name: "XS",
        inStock: true,
        price: 3000,
        discountPrice: 2500,
      },
      {
        name: "S",
        inStock: true,
        price: 3000,
        discountPrice: 2600,
      },
      {
        name: "M",
        inStock: true,
        price: 3000,
        discountPrice: 1500,
      },
      {
        name: "L",
        inStock: true,
        price: 2500,
        discountPrice: 2200,
      },
      {
        name: "XL",
        inStock: true,
        price: 3000,
        discountPrice: 2800,
      },
    ],
    features: {
      color: "yesil",
      material: "pamuk",
      pattern: "dokuma",
      fit: "dar",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1rxI--e_3YRpEdY11AVn35vhjJyLVX0e_",
        alt: "Jersey Puf Kollu Tshirt - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1TFaOVqOASy2GF5qKSZ3qQLqCrnQmK9BD",
        alt: "Jersey Puf Kollu Tshirt - Genel Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1Qj1GMmWpaR6QndPOqbIyT2I4btlJAu64",
        alt: "Jersey Puf Kollu Tshirt - Arka Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1GRZROapTU_igOf1wTYx5v8LV3OTs3TkP",
        alt: "Jersey Puf Kollu Tshirt - Stil Görünüm",
      },
    ],
    video: [
      {
        url: "https://drive.google.com/uc?export=view&id=19nyCfoI4DiNJ2PNqbEureqW_-Wo5rk7Z",
        coverImg:
          "https://drive.google.com/uc?export=view&id=1xjgemVRKDxe1kACAg4Orr0WgVoJnlvmT",
      },
    ],
  },
  {
    id: "4",
    name: "Toz Pembe Eşofman",
    slug: "toz-pembe-esofman",
    uploadDate: "2024-05-17T13:26:00Z",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 1000,
    discountPrice: 849.99,
    availability: "InStock",
    currency: "TRY",
    brandID: "100",
    categoryIDs: "100",
    sizes: [
      {
        name: "XS",
        inStock: true,
        price: 900,
        discountPrice: 849.99,
      },
      {
        name: "S",
        inStock: true,
        price: 1000,
        discountPrice: 849.99,
      },
      {
        name: "M",
        inStock: true,
        price: 1000,
        discountPrice: 849.99,
      },
      {
        name: "L",
        inStock: true,
        price: 1000,
        discountPrice: 849.99,
      },
      {
        name: "XL",
        inStock: true,
        price: 1000,
        discountPrice: 849.99,
      },
    ],
    features: {
      color: "pembe",
      material: "pamuk",
      pattern: "duz",
      fit: "normal",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1R7i9dq0CUEC4yk8kZRm0kUR3IIxOiXn0",
        alt: "Toz Pembe Eşofman - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1qiCWm8TZ4Yw3N-ThgfOHrndmu34HSV9Z",
        alt: "Toz Pembe Eşofman - Detay Görünüm",
      },
    ],
  },
  {
    id: "10",
    name: "Keçe Kovboy Şapkası",
    slug: "kece-kovboy-sapkasi",
    uploadDate: "2024-05-15T17:25:00Z",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 1300,
    discountPrice: 1199,
    availability: "InStock",
    currency: "TRY",
    stock: 500,
    brandID: "300",
    categoryIDs: "500",
    features: {
      color: "siyah",
      material: "kece",
      pattern: "duz",
      fit: "normal",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1hTSoX9DQujqVQCYEqsAkFhRmOlfwMIH6",
        alt: "Keçe Kovboy Şapkası - Modelli Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1G_6u0SpvNkPeXkJffjhr5atELXVcNl9b",
        alt: "Keçe Kovboy Şapkası - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1SSvzdtwTCCnlZBlwpEB7HSfzxjgFCH0q",
        alt: "Keçe Kovboy Şapkası - Çapraz Görünüm",
      },
    ],
  },
];

export default function FeaturedProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Favorilerimiz
          </h2>
          <Link
            href="/search"
            className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-500 sm:block"
          >
            Tüm Ürünler
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/search"
            className="block text-sm font-semibold text-emerald-600 hover:text-emerald-500"
          >
            Tüm Ürünler
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
