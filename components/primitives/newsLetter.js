import Link from "next/link";

export default function NewsLetter() {
  return (
    <div className="bg-emerald-700 py-16 sm:py-24 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">
            Yeni ürünlerimizden haberdar olmak ister misiniz?
          </h2>{" "}
          <p className="inline sm:block lg:inline xl:block">
            Haber bültenimize kaydolun.
          </p>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              E-Posta Adresi
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="E-Posta adresinizi giriniz"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-emerald-600 shadow-sm hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Abone ol
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            Kişisel verilerinizi nasıl işlediğimizi öğrenmek için
            <Link
              href="#"
              className="font-semibold text-white hover:text-emerald-50"
            >
              &nbsp;tıklayın.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
