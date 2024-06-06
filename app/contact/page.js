export const metadata = {
  title: "İletişim | Smile ",
  description: "Görüş ve önerilieriniz için bizimle iletişime geçebilirsiniz.",
  openGraph: {
    title: "İletişim | Smile",
    description:
      "Görüş ve önerilieriniz için bizimle iletişime geçebilirsiniz.",
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

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                İletişim
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  E-Posta
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className=" text-gray-600"
                        href="mailto:hello@smile.com"
                      >
                        hello@smile.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Ofis
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>KORE ŞEHİTLERİ C. NO: 92 D 3</p>
                  <p>Atakum / Samsun</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Telefon
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div className="mt-1">
                    <dt className="sr-only">Telefon Numarası</dt>
                    <dd>+90 (555) 9052345</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Depo
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>TEZCAN S N 17/1, Siteler</p>
                  <p>Atakum / Samsun</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
