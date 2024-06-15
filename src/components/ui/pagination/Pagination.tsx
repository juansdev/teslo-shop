"use client";

import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";
import Link from "next/link";
import {redirect, usePathname, useSearchParams} from "next/navigation";
import {generatePaginationNumbers} from "@/utils";
import clsx from "clsx";

interface IPaginationProps {
  totalPages: number;
}

export const Pagination = ({totalPages}: IPaginationProps) => {

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get("page") ?? 1;
  const isInvalidPageString = isNaN(+pageString) || +pageString < 1;
  if (isInvalidPageString) redirect(pathName);
  const currentPage = +pageString;
  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber === "..." || Number(pageNumber) && +pageNumber > totalPages) return `${pathName}?${params.toString()}`;
    else if (+pageNumber <= 0) return pathName;
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  }

  return (
    <div className={"flex text-center justify-center mt-10 mb-32"}>
      <nav aria-label={"Page navigation example"}>
        <ul className={"flex list-style-none"}>
          <li className={"page-item"}>
            <Link
              className={"page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 dark:text-white text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"}
              href={createPageUrl(currentPage - 1)}>
              <IoChevronBackOutline/>
            </Link>
          </li>
          {allPages.map((pageNumber, index) => (
            <li key={pageNumber + '-' + index} className={"page-item"}>
              <Link
                className={
                  clsx("page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 dark:text-white text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                    {
                      "bg-blue-600 shadow-sm dark:text-black text-white hover:text-white hover:bg-blue-700": pageNumber === currentPage
                    })
                }
                href={createPageUrl(pageNumber)}>{pageNumber}</Link>
            </li>
          ))}
          <li className={"page-item"}>
            <Link
              className={"page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 dark:text-white text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"}
              href={createPageUrl(currentPage + 1)}>
              <IoChevronForwardOutline/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}