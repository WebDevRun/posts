import { Suspense, ReactNode } from 'react'

export const withSuspense = (component: ReactNode, loader: ReactNode) => {
  return <Suspense fallback={loader}>{component}</Suspense>
}
