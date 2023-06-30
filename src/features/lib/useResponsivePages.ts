import { useMemo } from 'react'

const ellipsis = 'ellipsis'
const startShift = 3

const getMiddleParts = (
  currentPage: number,
  startShift: number,
  endShift: number
) => {
  if (currentPage === startShift) {
    return [currentPage, currentPage + 1, currentPage + 2]
  }
  if (currentPage === endShift) {
    return [currentPage - 2, currentPage - 1, currentPage]
  }

  return [currentPage - 1, currentPage, currentPage + 1]
}

export const useResponsivePages = (pages: number[], currentPage: number) => {
  return useMemo(() => {
    const firstElements = pages.slice(0, 3)

    if (currentPage < startShift) {
      return [...firstElements, ellipsis]
    }

    const endShift = pages.at(-3)
    const lastElements = pages.slice(-3)

    if (endShift !== undefined && currentPage > endShift) {
      return [ellipsis, ...lastElements]
    }

    if (endShift !== undefined) {
      const middlePartValues = getMiddleParts(currentPage, startShift, endShift)

      return [ellipsis, ...middlePartValues, ellipsis]
    }

    return pages
  }, [pages, currentPage])
}
