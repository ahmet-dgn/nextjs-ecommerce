import Link from "next/link";
import ProductCard from "./productCard";

const products = [
  {
    id: "1",
    name: "Mavi Retro Eşofman",
    slug: "mavi-retro-esofman",
    uploadDate: "2024-05-17T13:25:00Z",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 499.99,
    availability: "InStock",
    currency: "TRY",
    brandID: "100",
    categoryIDs: "100",
    sizes: [
      {
        name: "XS",
        inStock: true,
        price: 350,
      },
      {
        name: "S",
        inStock: false,
        price: 499.99,
      },
      {
        name: "M",
        inStock: true,
        price: 600,
      },
      {
        name: "L",
        inStock: true,
        price: 499.99,
      },
      {
        name: "XL",
        inStock: false,
        price: 499.99,
      },
    ],
    features: {
      color: "mavi",
      material: "pamuk",
      sleeveLength: "uzun-kol",
      pattern: "duz",
      fit: "normal",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1pi3jHIytQWTwEuwzJ5EbhZ4ayfWXqZ_a",
        alt: "Mavi Retro Eşofman - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1pk1_xDQzBx-PHTVhEobW8v9TG0vBTNpH",
        alt: "Mavi Retro Eşofman - Çapraz Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1vKsfXgQSg3M_nPyslGSH4Ee82H4PS_ET",
        alt: "Mavi Retro Eşofman - Geniş Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1HA0NtYXB1UEx4ctZGEMPHi35Rpa8Dwic",
        alt: "Mavi Retro Eşofman - Detay Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1x7NRwzqJ0VA852aoQwTZ5ghD-ff7fr3c",
        alt: "Mavi Retro Eşofman - Stil Görünüm",
      },
    ],
  },
  {
    id: "2",
    name: "NB Antrenör Şapkası",
    slug: "nb-antrenor-sapkasi",
    uploadDate: "2024-05-17T14:27:00Z",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 1800,
    availability: "InStock",
    currency: "TRY",
    stock: 250,
    brandID: "700",
    categoryIDs: "500",
    features: {
      color: "yesil",
      material: "keten",
      pattern: "duz",
      fit: "normal",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1XCoP1QxbRxeDRMkI4bj2LPZddM72SRQu",
        alt: "NB Antrenör Şapkası - Modelli Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1qrmzxmnItDwLH8ESMhNYEgAmGWMGBcyQ",
        alt: "NB Antrenör Şapkası - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=18WjGzw1PMS6lZBle9Vz6-LItiggzwTrS",
        alt: "NB Antrenör Şapkası - Yan Görünüm",
      },
    ],
  },

  {
    id: "3",
    name: "Kadın Siyah Pantolon",
    slug: "kadin-siyah-pantolon",
    uploadDate: "2024-05-15T17:30:00Z",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 1160,
    currency: "TRY",
    availability: "InStock",
    stock: 150,
    brandID: "100",
    categoryIDs: "200",
    features: {
      color: "siyah",
      material: "keten",
      pattern: "duz",
      fit: "normal",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1yIK-vENUu-3qXbVxuhk5plJTlpGmwb_s",
        alt: "Kadın Siyah Pantolon - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1fzWLipgsZyqkUYKzYtTiCzVsc1Vwjtfe",
        alt: "Kadın Siyah Pantolon - Arka Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1ReewvsyGsO3ddT0F0IoC-UnyOmF0H4G9",
        alt: "Kadın Siyah Pantolon - Çapraz Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1Yy3i_wXlS9B0ZrJQirktsjKwA4uH_6Y_",
        alt: "Kadın Siyah Pantolon - Genel Görünüm",
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
    id: "5",
    name: "Rose Gold Saat",
    slug: "rose-gold-saat",
    uploadDate: "2024-05-20T15:30:00Z",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 6500,
    discountPrice: 5999,
    currency: "TRY",
    availability: "InStock",
    stock: 20,
    brandID: "500",
    categoryIDs: "300",
    features: {
      color: "pembe",
      material: "altin",
      material2: "deri-kayis",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1HeJ0uKV7cAZzSCzgIbFePPO8rSeoYsls",
        alt: "Rose Gold Saat - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1M6Kse6WtDpy7Vpu-h1EM6jnL2rFdZAAD",
        alt: "Rose Gold Saat - Stil Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1e8Wz2A98BhJWRgMUkuzatj6-wwOq-gJs",
        alt: "Rose Gold Saat - Arka Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1MhRl91Q_OdKxrk-iLdYnMSVxAfc91wx0",
        alt: "Rose Gold Saat - Ambalaj",
      },
    ],
  },
  {
    id: "6",
    name: "Snapback Daire Şapka",
    slug: "snapback-daire-sapka",
    uploadDate: "2024-05-17T16:26:00Z",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 999,
    stock: 100,
    availability: "InStock",
    currency: "TRY",
    brandID: "400",
    categoryIDs: "500",
    features: {
      color: "mavi",
      material: "pamuk",
      pattern: "duz",
      fit: "normal",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1kl3epZS-4Z1SmE1bTYwzJsk1LjAzNH7A",
        alt: "Snapback Daire Şapka - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=17Bp3lfkhaBvFHzqjeQHNskwnF2OR2TcD",
        alt: "Snapback Daire Şapka - Detay Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1bE8UJ04Xsu0Wjzt1E1KlecMF_zz1hHUv",
        alt: "Snapback Daire Şapka - Yan Görünüm",
      },
    ],
  },
  {
    id: "15",
    name: "Metalik Mavi Kadın Eşofman",
    slug: "metalik-mavi-kadin-esofman",
    uploadDate: "2024-05-16T17:25:00Z",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 1999,
    discountPrice: 1850,
    availability: "InStock",
    stock: 1000,
    currency: "TRY",
    brandID: "500",
    categoryIDs: "100",
    sizes: [
      {
        name: "XS",
        inStock: true,
        price: 1999,
        discountPrice: 1850,
      },
      {
        name: "S",
        inStock: true,
        price: 1999,
        discountPrice: 1850,
      },
      {
        name: "M",
        inStock: true,
        price: 1999,
        discountPrice: 1850,
      },
      {
        name: "L",
        inStock: true,
        price: 1999,
        discountPrice: 1850,
      },
      {
        name: "XL",
        inStock: true,
        price: 1999,
        discountPrice: 1850,
      },
    ],
    features: {
      color: "metalik-mavi",
      material: "pamuk",
      pattern: "duz",
      fit: "normal",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1hQsDzN6d7und9zgAhlmJsMsUKriPygZ1",
        alt: "Metalik Mavi Kadın Eşofman - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1Jx4NH7tgJsWuCF_hcShcw6ysb-ZHe_AP",
        alt: "Metalik Mavi Kadın Eşofman - Arka Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1Jx4NH7tgJsWuCF_hcShcw6ysb-ZHe_AP",
        alt: "Metalik Mavi Kadın Eşofman - Çapraz Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=11lNktNwZFqcvYsXLbuqhfIeC5KwBnTaW",
        alt: "Metalik Mavi Kadın Eşofman - Detay Görünüm",
      },
    ],
  },
  {
    id: "8",
    uploadDate: "2024-05-15T16:30:00Z",
    name: "Magnhild Organik Pamuk Tshirt",
    slug: "magnhild-organik-pamuk-tshirt",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo varius, ultrices arcu id, bibendum justo. Pellentesque gravida dolor id neque ornare, vitae suscipit dolor blandit. Vivamus vestibulum fringilla dui eget semper. Cras pretium nisi id sollicitudin dictum. Pellentesque et convallis ante. Sed viverra enim a dolor consequat ultricies. Pellentesque rhoncus dui sit amet aliquet interdum.",
    description:
      "<p><strong>Viverra a consectetur&nbsp;</strong></p><p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p><p>&nbsp;</p><p><strong>&nbsp;Facilisis scelerisque&nbsp;</strong></p><p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</p><p>&nbsp;</p><p><strong>Ullamcorper metus</strong></p><p>As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.&nbsp;</p><p>&nbsp;</p><p><strong>Dignissim a leo cum&nbsp;</strong></p><p>Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>",
    price: 1499,
    availability: "InStock",
    currency: "TRY",
    stok: 100,
    brandID: "300",
    categoryIDs: "400",
    sizes: [
      {
        name: "XS",
        inStock: true,
        price: 1499,
      },
      {
        name: "S",
        inStock: true,
        price: 1299,
      },
      {
        name: "M",
        inStock: true,
        price: 1399,
      },
      {
        name: "L",
        inStock: true,
        price: 1499,
      },
      {
        name: "XL",
        inStock: true,
        price: 1499,
      },
    ],
    features: {
      color: "beyaz",
      material: "pamuk",
      pattern: "duz",
      fit: "normal",
    },
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1h-0UKzUvXNf2LvF6FwZAI7GibkMg6tSu",
        alt: "Magnhild Organik Pamuk Tshirt - Ön Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=1AySqxh3W149GMJv0CStDc_7fPNdWAMKC",
        alt: "Magnhild Organik Pamuk Tshirt - Arka Görünüm",
      },
      {
        url: "https://drive.google.com/uc?export=view&id=19jo6m3AAbbEkLTIPwZVVJD-D6nsVN0ut",
        alt: "Magnhild Organik Pamuk Tshirt - Detay Görünüm",
      },
    ],
  },
];

export default function MixProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            En çok satanlar
          </h2>
          <Link
            href="/search"
            className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-500 sm:block"
          >
            Tüm Ürünler
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className=" mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
