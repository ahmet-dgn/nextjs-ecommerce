export default function ProductFeatures({ features }) {
  return (
    <div className="mt-10">
      <h2 className="text-sm font-medium text-gray-900">Özellikler</h2>

      <div className="prose prose-sm mt-2 text-gray-500" />
      {features && (
        <ul className="text-sm text-gray-700 list-disc list-inside">
          {features.color && (
            <li className="capitalize">
              <span className="font-medium">Renk: </span>
              {features.color}
            </li>
          )}
          {features.material && (
            <li className="capitalize">
              <span className="font-medium">Materyal: </span>
              {features.material}
            </li>
          )}
          {features.material2 && (
            <li className="capitalize">
              <span className="font-medium">Materyal-2: </span>
              {features.material2}
            </li>
          )}
          {features.sleeveLength && (
            <li className="capitalize">
              <span className="font-medium">Kol Boyu: </span>
              {features.sleeveLength}
            </li>
          )}
          {features.pattern && (
            <li className="capitalize">
              <span className="font-medium">Desen: </span>
              {features.pattern}
            </li>
          )}
          {features.fit && (
            <li className="capitalize">
              <span className="font-medium">Kalıp: </span>
              {features.fit}
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
