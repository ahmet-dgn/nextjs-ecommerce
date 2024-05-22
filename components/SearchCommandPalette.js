"use client";
import { Fragment, useState, useEffect } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import {
  ExclamationCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    id: 1,
    name: "Text",
    description: "Add freeform text with basic formatting options.",
    url: "#",
    color: "bg-indigo-500",
    icon: PencilSquareIcon,
  },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchCommandPalette({
  searchDialog,
  changeDialogStatus,
  products,
}) {
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q");
  useEffect(() => {
    if (searchDialog) {
      setOpen(true);
    }
  }, [searchDialog]);

  if (!open) {
    changeDialogStatus(false);
  }

  const handleSearch = useDebouncedCallback((term) => {
    setOpen(false);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
      params.delete("categoryIDs");
    } else {
      params.delete("q");
    }

    router.replace(`search?${params.toString()}`);
  }, 300);

  return (
    <Transition.Root show={open} as={Fragment} appear>
      <Dialog className="relative z-10" open={open} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto px-4 py-20  md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Ürün Ara..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch(e.target.value);
                    }}
                  />
                </div>

                {products?.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-96 transform-gpu scroll-py-3 overflow-y-auto p-3"
                  >
                    {products.map((product) => (
                      <Combobox.Option
                        key={product.productID}
                        value={product}
                        className={({ active }) =>
                          classNames(
                            "flex cursor-default select-none rounded-xl p-3",
                            active && "bg-gray-100"
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            <div
                              className={classNames(
                                "flex h-10 w-10 flex-none items-center justify-center rounded-lg"
                              )}
                            >
                              <Image
                                width={40}
                                height={40}
                                alt={product.name}
                                src={product.image[0].url}
                              />
                            </div>
                            <div className="ml-4 flex-auto">
                              <p
                                className={classNames(
                                  "text-sm font-medium",
                                  active ? "text-gray-900" : "text-gray-700"
                                )}
                              >
                                {product.name}
                              </p>
                              <p
                                className={classNames(
                                  "text-sm",
                                  active ? "text-gray-700" : "text-gray-500"
                                )}
                              >
                                {product.description}
                              </p>
                            </div>
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== "" && products?.length === 0 && (
                  <div className="px-6 py-14 text-center text-sm sm:px-14">
                    <ExclamationCircleIcon
                      type="outline"
                      name="exclamation-circle"
                      className="mx-auto h-6 w-6 text-gray-400"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      Ürün Bulunamadı...
                    </p>
                    <p className="mt-2 text-gray-500">
                      Bu arama terimine göre ürün bulunamadı. Lütfen tekrar
                      deneyiniz.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
