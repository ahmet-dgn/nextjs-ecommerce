export default function ProductPrice({
  discountPrice,
  availability,
  originalPrice,
  optionPrice,
  optiondiscountPrice,
}) {
  let discountPercentage;
  if (optiondiscountPrice) {
    discountPercentage = Math.round(
      ((optionPrice - optiondiscountPrice) / optionPrice) * 100
    );
  } else
    discountPercentage = Math.round(
      ((originalPrice - discountPrice) / originalPrice) * 100
    );

  return (
    <div className="mt-3 mb-8">
      <div className="flex justify-between items-end">
        <div>
          <p
            className={`text-xl md:text-2xl tracking-tight text-gray-900 ${
              discountPrice && "line-through !text-xl"
            }`}
          >
            {optionPrice ? optionPrice : originalPrice} TL
          </p>
          {discountPrice && (
            <p className={`ttext-xl md:text-2xl  tracking-tight text-red-600 `}>
              {optiondiscountPrice ? optiondiscountPrice : discountPrice}
              TL
            </p>
          )}
        </div>
        <div className="flex gap-2">
          {discountPrice && (
            <p className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-base font-medium text-red-700">
              - {discountPercentage}%{" "}
            </p>
          )}
          {availability === "OutOfStock" && (
            <p className="inline-flex items-center rounded-full bg-gray-900 px-2 py-1 text-xs font-medium text-gray-50">
              Stokta yok
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
