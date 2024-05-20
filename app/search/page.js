import getData from "@/lib/query";
import FilterSideBar from "@/components/filterSideBar";

export default async function Search({ searchParams }) {
  const queryParams = Object.keys(searchParams)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(searchParams[key])}`
    )
    .join("&");

  const productsData = await getData(
    `products${queryParams ? "?" + queryParams : ""}`
  );

  const categoriesData = await getData("categories");
  return (
    <FilterSideBar
      categories={categoriesData}
      products={productsData}
      queryStrings={queryParams}
      searchParams={searchParams}
    />
  );
}
