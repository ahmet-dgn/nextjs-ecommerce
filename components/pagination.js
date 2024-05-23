import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Pagination({ pageLimit, page, pageTotal }) {
  const pageTotalCount = Math.ceil(pageTotal / pageLimit);
  const pageArray = [];
  for (let i = 1; i <= pageTotalCount; i++) {
    pageArray.push(i);
  }

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-10 ">
      <div className="-mt-px flex w-0 flex-1">
        <Link
          href={
            pathname + "?" + createQueryString("_page", page > 1 ? page - 1 : 1)
          }
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="hidden md:flex">Öncesi</span>
        </Link>
      </div>
      <div className="md:-mt-px flex">
        {pageArray.map((pageNumber) => (
          <Link
            key={pageNumber}
            href={pathname + "?" + createQueryString("_page", pageNumber)}
            className={`inline-flex items-center border-t-2 ${
              pageNumber == page
                ? "border-emerald-500 text-emerald-600"
                : "border-transparent text-gray-500"
            } px-4 pt-4 text-sm font-medium  hover:border-gray-300 hover:text-gray-700`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Link
          href={
            pathname +
            "?" +
            createQueryString(
              "_page",
              page < pageTotalCount ? ++page : pageTotalCount
            )
          }
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <span className="hidden md:flex">Sonrası</span>
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Link>
      </div>
    </nav>
  );
}
