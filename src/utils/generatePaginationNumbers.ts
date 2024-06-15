export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7)
    return Array.from({length: totalPages}, (_, i) => i + 1);
  else if (currentPage <= 3)
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  else if (currentPage >= totalPages - 2)
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}