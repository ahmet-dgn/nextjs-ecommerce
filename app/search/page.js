import getData from "@/lib/query";
import FilterSideBar from "@/components/filterSideBar";

export default async function Search({ searchParams }) {
  const queryParams = Object.keys(searchParams)
    .flatMap((key) => {
      const value = searchParams[key];
      if (Array.isArray(value)) {
        return value.map(
          (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
        );
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
  const productsData = await getData(
    `products${queryParams ? "?" + queryParams : ""}`
  );

  const categoriesData = await getData("categories");
  return <FilterSideBar categories={categoriesData} products={productsData} />;
}
