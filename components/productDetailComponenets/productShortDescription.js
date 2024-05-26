export default function ProductShortDescription({ shortDescription }) {
  return (
    shortDescription && (
      <div className="mb-8 text-sm ">
        <p className="mt-2 text-gray-500">{shortDescription}</p>
      </div>
    )
  );
}
