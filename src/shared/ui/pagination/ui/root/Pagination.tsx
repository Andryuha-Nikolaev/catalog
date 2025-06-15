import clsx from "clsx"
import { ArrowIcon } from "./icons/ArrowIcon"
import s from "./Pagination.module.scss"
import type { PaginationProps } from "../../model/types"

export const Pagination = ({
  currentPage,
  totalPages,
  visiblePages = 4,
  onPageChange,
}: PaginationProps) => {
  if (totalPages < 2) {
    return null
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange(page)
  }

  const handleEllipsisClick = (type: "start" | "end") => {
    let newPage
    if (type === "start") {
      newPage = Math.max(1, currentPage - visiblePages)
    } else {
      newPage = Math.min(totalPages, currentPage + visiblePages)
    }
    handlePageChange(newPage)
  }

  const generatePageItems = () => {
    const items = []
    let startPage = 1
    let endPage = totalPages

    if (totalPages > visiblePages) {
      const half = Math.floor(visiblePages / 2)
      startPage = Math.max(currentPage - half, 1)
      endPage = startPage + visiblePages - 1

      if (endPage > totalPages) {
        endPage = totalPages
        startPage = endPage - visiblePages + 1
      }
    }

    if (startPage > 1) {
      items.push(1)
      if (startPage > 2) {
        items.push("ellipsis-start")
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(i)
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push("ellipsis-end")
      }
      items.push(totalPages)
    }

    return items
  }

  const pageItems = generatePageItems()

  return (
    <nav className={s.pagination}>
      <button
        className={s.arrow}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowIcon />
      </button>

      {pageItems.map((item) => {
        if (typeof item === "string") {
          return (
            <button
              key={item}
              className={s.ellipsis}
              onClick={() => handleEllipsisClick(item === "ellipsis-start" ? "start" : "end")}
            >
              ...
            </button>
          )
        }

        return (
          <button
            key={item}
            className={clsx(s.page, {
              [s.active]: item === currentPage,
            })}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </button>
        )
      })}

      <button
        className={clsx(s.arrow, s.next)}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ArrowIcon />
      </button>
    </nav>
  )
}
