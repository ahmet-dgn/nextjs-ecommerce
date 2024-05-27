import { RadioGroup } from "@headlessui/react";
export default function ProductOption({
  sizes,
  selectedSize,
  setSelectedSize,
  productId,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="mt-8">
      {sizes && (
        <RadioGroup
          value={selectedSize}
          onChange={setSelectedSize}
          className="mt-2 border-t pt-8"
        >
          <RadioGroup.Label className="sr-only">Boyut Seç</RadioGroup.Label>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {sizes.map((size, index) => (
              <RadioGroup.Option
                key={`${size.name}-${productId}-${index}`}
                value={size}
                className={({ active, checked }) =>
                  classNames(
                    size.inStock
                      ? "cursor-pointer focus:outline-none"
                      : "cursor-not-allowed opacity-25",
                    active ? "ring-2 ring-emerald-500 ring-offset-2" : "",
                    checked
                      ? "border-transparent bg-emerald-600 text-white hover:bg-emerald-700"
                      : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                    "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                  )
                }
                disabled={!size.inStock}
              >
                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      )}
    </div>
  );
}
