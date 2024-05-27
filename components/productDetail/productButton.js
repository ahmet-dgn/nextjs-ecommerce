export default function AddToCartButton({
  selectedSize,
  productAddToCartHandler,
  sizes,
}) {
  return (
    <button
      className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-25"
      onClick={() => productAddToCartHandler()}
      disabled={!selectedSize && sizes}
    >
      Sepete Ekle
    </button>
  );
}
