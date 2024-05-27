import { TruckIcon } from "@heroicons/react/24/outline";
export default function ProductCargoInfo() {
  return (
    <div className="rounded-lg border border-blue-100 bg-blue-50 py-2 px-4 mb-8 flex items-center gap-2">
      <TruckIcon
        className="h-10 w-10 text-blue-800
"
      />
      <span className=" text-sm font-medium text-blue-800">
        5000 TL Üzeri Siparişlerde Kargo Bedava
      </span>
    </div>
  );
}
