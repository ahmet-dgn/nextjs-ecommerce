export default function AddToCartButton({
  selectedSize,
  productAddToCartHandler,
  sizes,
  availability,
  cart,
  productId,
}) {
  return (
    <>
      <div className="mt-8">
        {(selectedSize &&
          cart?.some(
            (item) =>
              item.quantity === 10 &&
              item.option === selectedSize.name &&
              item.id === productId
          )) ||
        (!selectedSize &&
          cart?.some(
            (item) => item.quantity === 10 && item.id === productId
          )) ? (
          <p className="mb-2 text-red-500 text-sm">
            Bir üründen veya seçenekten en falza 10 tane sepete eklenebilir.
          </p>
        ) : (
          ""
        )}
        <button
          className={`flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-25 `}
          onClick={() => productAddToCartHandler()}
          disabled={
            (!selectedSize && sizes?.length > 0) ||
            availability === "OutOfStock" ||
            (selectedSize
              ? cart?.some(
                  (item) =>
                    item.quantity === 10 &&
                    item.option === selectedSize.name &&
                    item.id === productId
                )
              : cart?.some(
                  (item) => item.quantity === 10 && item.id === productId
                ))
          }
        >
          Sepete Ekle
        </button>
      </div>
    </>
  );
}
