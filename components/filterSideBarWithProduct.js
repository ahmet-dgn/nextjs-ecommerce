"use client";
import { Fragment, useState, useCallback } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ProductCard from "./productCard";
import Pagination from "./pagination";
import Link from "next/link";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filters = [
  {
    id: "color",
    name: "Renk",
    options: [
      { value: "beyaz", label: "Beyaz", query: "features.color" },
      { value: "siyah", label: "Siyah", query: "features.color" },
      { value: "mavi", label: "Mavi", query: "features.color" },
      { value: "yesil", label: "Yeşil", query: "features.color" },
      { value: "toz-pembe", label: "Toz Pembe", query: "features.color" },
      { value: "rose-gold", label: "Rose Gold", query: "features.color" },
    ],
  },
  {
    id: "size",
    name: "Beden",
    options: [
      { value: "s", label: "S", query: "sizes.small" },
      { value: "m", label: "M", query: "sizes.medium" },
      { value: "l", label: "L", query: "sizes.large" },
      { value: "xl", label: "XL", query: "sizes.xlarge" },
    ],
  },
  {
    id: "material",
    name: "Materyal",
    options: [
      { value: "pamuk", label: "Pamuk", query: "features.material" },
      { value: "keten", label: "Keten", query: "features.material" },
      { value: "kece", label: "Keçe", query: "features.material" },
      { value: "kadife", label: "Kadife", query: "features.material" },
      { value: "altin", label: "Altın", query: "features.material" },
      { value: "aluminyum", label: "Alüminyum", query: "features.material" },
    ],
  },
  {
    id: "fit",
    name: "Kalıp",
    options: [
      { value: "normal", label: "Normal", query: "features.fit" },
      { value: "genis", label: "Geniş", query: "features.material" },
      { value: "dar", label: "Dar", query: "features.material" },
    ],
  },
];

export default function FilterSideBarWithProduct({
  categories,
  products,
  pageLimit,
  pageTotal,
  page,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const createQueryString = useCallback(
    (name, value, deleteName, deleteNameValue) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      {
        deleteName && deleteNameValue
          ? params.delete(deleteName, deleteNameValue)
          : "";
      }
      return params.toString();
    },
    [searchParams]
  );

  const createQueryStringDesc = useCallback(
    (name, value, name2, value2) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      params.set(name2, value2);
      return params.toString();
    },
    [searchParams]
  );

  const createQueryStringFilters = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      const deleteQuery = params.has(name, value);
      if (deleteQuery === true) {
        params.delete(name, value);
      } else params.append(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filtre</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Menüyü kapat</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Kategoriler</h3>
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    <li>
                      <Link
                        href={`/search`}
                        className="block px-2 py-3"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        Tüm Ürünler
                      </Link>
                    </li>
                    {categories.map((category) => (
                      <li
                        key={category.name}
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <Link
                          href={`?categoryIDs=${category.categoryID}`}
                          className="block px-2 py-3"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    checked={params.has(
                                      option.query,
                                      option.value
                                    )}
                                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                    onChange={() => {
                                      router.push(
                                        pathname +
                                          "?" +
                                          createQueryStringFilters(
                                            option.query,
                                            option.value
                                          )
                                      );
                                    }}
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Kategoriler
        </h1>

        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sırala
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    <Link
                      href={
                        pathname +
                        "?" +
                        createQueryString(
                          "_sort",
                          "uploadDate",
                          "_order",
                          "desc"
                        )
                      }
                      className={`${
                        searchParams.get("_sort") === "uploadDate"
                          ? "text-gray-800 font-medium"
                          : "text-gray-500"
                      } block px-4 py-2 text-sm`}
                    >
                      En son eklenenler
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      href={
                        pathname +
                        "?" +
                        createQueryString("_sort", "name", "_order", "desc")
                      }
                      className={`${
                        searchParams.get("_sort") === "name" &&
                        searchParams.has("_order") == false
                          ? "text-gray-800 font-medium"
                          : "text-gray-500"
                      } block px-4 py-2 text-sm`}
                    >
                      Ürün Adı: A - Z
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      href={
                        pathname +
                        "?" +
                        createQueryStringDesc("_sort", "name", "_order", "desc")
                      }
                      className={`${
                        searchParams.get("_sort") === "name" &&
                        searchParams.has("_order") == true
                          ? "text-gray-800 font-medium"
                          : "text-gray-500"
                      } block px-4 py-2 text-sm`}
                    >
                      Ürün Adı: Z - A
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      href={
                        pathname +
                        "?" +
                        createQueryString("_sort", "price", "_order", "desc")
                      }
                      className={`${
                        searchParams.get("_sort") === "price" &&
                        searchParams.has("_order") == false
                          ? "text-gray-800 font-medium"
                          : "text-gray-500"
                      } block px-4 py-2 text-sm`}
                    >
                      En düşük fiyat
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      href={
                        pathname +
                        "?" +
                        createQueryStringDesc(
                          "_sort",
                          "price",
                          "_order",
                          "desc"
                        )
                      }
                      className={`${
                        searchParams.get("_sort") === "price" &&
                        searchParams.has("_order") == true
                          ? "text-gray-800 font-medium"
                          : "text-gray-500"
                      } block px-4 py-2 text-sm`}
                    >
                      En yüksek fiyat
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filtre</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">
          Ürünler
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <form className="hidden lg:block">
            <h3 className="sr-only">Kategoriler</h3>
            <ul
              role="list"
              className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
            >
              <li>
                <Link href={`/search`}>Tüm ürünler</Link>
              </li>
              {categories.map((category) => (
                <li key={category.categoryID}>
                  <Link href={`?categoryIDs=${category.categoryID}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            {filters.map((section) => (
              <Disclosure
                as="div"
                key={section.id}
                className="border-b border-gray-200 py-6"
              >
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              checked={params.has(option.query, option.value)}
                              className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                              onChange={() => {
                                router.push(
                                  pathname +
                                    "?" +
                                    createQueryStringFilters(
                                      option.query,
                                      option.value
                                    )
                                );
                              }}
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>

          {/* Product grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 lg:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} productData={product} />
              ))}
            </div>
            {pageTotal > pageLimit && (
              <Pagination
                path={pathname}
                pageLimit={pageLimit}
                page={page}
                pageTotal={pageTotal}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
