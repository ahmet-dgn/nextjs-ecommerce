"use client";
import { useCart } from "@/context/CartContext";
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
export default function Cart() {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const products = cart;

  const handleQuantityChange = (productoOption, productId, newQuantity) => {
    updateCartItemQuantity(productoOption, productId, newQuantity);
  };

  let cartTotalOrginalPrice = 0;
  let cartTotalDiscaountPrice = 0;
  cart.forEach((item) => {
    cartTotalOrginalPrice += item.price * item.quantity;
    if (item.discountPrice) {
      cartTotalDiscaountPrice +=
        (item.price - item.discountPrice) * item.quantity;
    }
  });

  const shippingPrice =
    cartTotalOrginalPrice - cartTotalDiscaountPrice > 5000 ? 0 : 1000;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Sepetim
        </h1>

        {products.length > 0 ? (
          <div>
            <div>
              <h2 className="sr-only">Sepetinizdeki ürünler</h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {products.map((product) => (
                  <li key={product.id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <Image
                        width={384}
                        height={384}
                        src={product.image}
                        alt={product.name}
                        className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                      />
                    </div>

                    <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div>
                        <div className="flex justify-between sm:grid sm:grid-cols-2">
                          <div className="pr-6">
                            <h3 className="text-sm">
                              <Link
                                href={`product/${product.id}`}
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {product.name}
                              </Link>
                            </h3>

                            {product.option ? (
                              <p className="mt-1 text-sm text-gray-500 ">
                                Beden:{" "}
                                <span className="lowercase">
                                  {" "}
                                  {product.option}
                                </span>
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <p
                              className={`text-right text-sm font-medium text-gray-900 ${
                                product.discountPrice ? "line-through" : ""
                              }`}
                            >
                              {product.price * product.quantity} TL
                            </p>
                            {product.discountPrice && (
                              <p className="text-right text-sm font-medium text-red-600">
                                {product.discountPrice * product.quantity} TL
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                          <label
                            htmlFor={`quantity-${product.id}`}
                            className="sr-only"
                          >
                            Quantity, {product.name}
                          </label>
                          <select
                            id={`quantity-${product.id}`}
                            name={`quantity-${product.id}`}
                            className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm"
                            value={product.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                product.option,
                                product.id,
                                parseInt(e.target.value, 10)
                              )
                            }
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                              (optionValue) => (
                                <option key={optionValue} value={optionValue}>
                                  {optionValue}
                                </option>
                              )
                            )}
                          </select>

                          <button className="ml-4 text-sm font-medium text-red-600 hover:text-red-500 sm:ml-0 sm:mt-3">
                            <span
                              onClick={() =>
                                removeFromCart(product.id, product.option)
                              }
                            >
                              Ürünü sil
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order summary */}
            <div className="mt-10 ">
              <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                <h2 className="sr-only">Sipariş Özeti</h2>

                <div className="flow-root">
                  <dl className="-my-4 divide-y divide-gray-200 text-sm">
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">Ara Toplam</dt>
                      <dd className="font-medium text-gray-900">
                        {cartTotalOrginalPrice.toFixed(2)} TL
                      </dd>
                    </div>
                    {cartTotalDiscaountPrice > 0 && (
                      <div className="flex items-center justify-between py-4">
                        <dt className="text-red-600">İndirim</dt>
                        <dd className="font-medium text-red-600">
                          {cartTotalDiscaountPrice.toFixed(2)} TL
                        </dd>
                      </div>
                    )}
                    {cartTotalDiscaountPrice > 0 && (
                      <div className="flex items-center justify-between py-4">
                        <dt
                          className={`${
                            shippingPrice === 0
                              ? "text-blue-700"
                              : "text-gray-600"
                          }`}
                        >
                          Kargo
                        </dt>
                        <dd
                          className={`font-medium ${
                            shippingPrice === 0
                              ? "text-blue-700"
                              : "text-gray-600"
                          }`}
                        >
                          {shippingPrice === 0
                            ? "Ücretsiz Kargo"
                            : shippingPrice + " TL"}
                        </dd>
                      </div>
                    )}

                    <div className="flex items-center justify-between py-4">
                      <dt className="text-base font-medium text-gray-900">
                        Sipariş Toplamı
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        {(
                          cartTotalOrginalPrice -
                          cartTotalDiscaountPrice +
                          shippingPrice
                        ).toFixed(2)}{" "}
                        TL
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mt-10">
                <button className="w-full rounded-md border border-transparent bg-emerald-700 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                  Alışverişi Tamamla
                </button>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <Link
                    href="/search"
                    className="font-medium text-emerald-600 hover:text-emerald-500"
                  >
                    Alışverişe Devam Et
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8 mt-4 flex flex-col justify-center items-center">
            <p>Sepetiniz Boş</p>
            <div className="mt-6">
              <Link
                href="/search"
                className="w-full rounded-md border border-transparent bg-emerald-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Alışverişe Devam Et
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
