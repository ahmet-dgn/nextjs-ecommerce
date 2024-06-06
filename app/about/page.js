const timeline = [
  {
    name: "Şirket Kuruluşu",
    description:
      "Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya.",
    date: "Eylül 2022",
    dateTime: "2022-09",
  },
  {
    name: "1m TL yatırım",
    description:
      "idak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak. Ia berakar dari sebuah naskah sastra latin.",
    date: "Aralık 2022",
    dateTime: "2022-12",
  },
  {
    name: "İlk Sipariş",
    description:
      "Ada banyak variasi tulisan Lorem Ipsum yang tersedia, tapi kebanyakan sudah mengalami perubahan bentuk, entah karena unsur humor.",
    date: "Ağustos 2023",
    dateTime: "2023-08",
  },
  {
    name: "İlk E-İhracat",
    description:
      "Semua generator Lorem Ipsum di internet cenderung untuk mengulang bagian-bagian tertentu. Karena itu inilah generator pertama yang.",
    date: "Mayıs 2024",
    dateTime: "2024-04",
  },
];

export const metadata = {
  title: "Hakkımızda | Smile ",
  description:
    "E-ticaretin geleceğini inşa etmek için çalışan tutkulu bir grup insanız.",
  openGraph: {
    title: "Hakkımızda | Smile",
    description:
      "E-ticaretin geleceğini inşa etmek için çalışan tutkulu bir grup insanız.",
    url: `${process.env.WEB_SITE_URL}`,
    siteName: "Smile",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 576,
        height: 384,
        alt: "Smile",
      },
    ],
    locale: "tr-TR",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-emerald-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-emerald-600/10 ring-1 ring-emerald-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                E-ticaretin geleceğini inşa etmek için çalışan tutkulu bir grup
                insanız.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-emerald-600"
                >
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="my-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Smile'da Yaşam
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Richard McClintock, seorang professor Bahasa Latin dari
                  Hampden-Sidney College di Virginia, mencoba mencari makna
                  salah satu kata latin yang dianggap paling tidak jelas, yakni
                  consectetur, yang diambil dari salah satu bagian Lorem Ipsum.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Ada banyak variasi tulisan Lorem Ipsum yang tersedia, tapi
                  kebanyakan sudah mengalami perubahan bentuk, entah karena
                  unsur humor atau kalimat yang diacak hingga nampak sangat
                  tidak masuk akal.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="https://images.unsplash.com/photo-1515773512591-dfaf9e052325?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="https://images.unsplash.com/photo-1506812925688-822b4a73db22?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
