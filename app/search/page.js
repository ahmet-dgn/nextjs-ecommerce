import getData from "@/lib/query";
import FilterSideBarWithProduct from "@/components/filterSideBarWithProduct";

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

  const pageLimit = 9;
  const page = searchParams._page;
  const productsQuery = await getData(
    `products?_limit=${pageLimit}${page ? "&_page" + page : "&_page=1"}${
      queryParams ? "&" + queryParams : ""
    }`
  );
  const categoriesQuery = await getData("categories");
  const productsData = productsQuery.props.data;
  const categoriesData = categoriesQuery.props.data;
  const pageTotal = productsQuery.props.xTotalCounts;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <FilterSideBarWithProduct
        categories={categoriesData}
        products={productsData}
        pageLimit={pageLimit}
        pageTotal={pageTotal}
        page={page}
      />
    </main>
  );
}
