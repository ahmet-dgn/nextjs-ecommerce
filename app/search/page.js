import getData from "@/lib/query";
import FilterSideBar from "@/components/filterSideBar";
export default async function Search({ searchParams }) {
  const categoriesFilter = searchParams.categoryIDs;
  const categoriesData = await getData("categories");
  const productsData = await getData(
    `products${categoriesFilter ? "?categoryIDs=" + categoriesFilter : ""}`
  );
  return <FilterSideBar categories={categoriesData} products={productsData} />;
}
