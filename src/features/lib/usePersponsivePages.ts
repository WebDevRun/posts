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
    let result: (typeof ellipsis | number)[]

    const firstElements = pages.slice(0, 3)
    const lastElement = pages.at(-1)

    if (lastElement !== undefined && currentPage < startShift) {
      result = [...firstElements, ellipsis, lastElement]
      return result
    }

    const endShift = pages.at(-3)
    const firstElement = pages[0]
    const lastElements = pages.slice(-3)

    if (endShift !== undefined && currentPage > endShift) {
      result = [firstElement, ellipsis, ...lastElements]
      return result
    }

    if (endShift !== undefined && lastElement !== undefined) {
      const middlePartValues = getMiddleParts(currentPage, startShift, endShift)

      result = [
        firstElement,
        ellipsis,
        ...middlePartValues,
        ellipsis,
        lastElement,
      ]
      return result
    }
  }, [pages, currentPage])
}
