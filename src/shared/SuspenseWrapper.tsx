import { ReactElement, Suspense } from 'react'
import { FullPageWrapper, Loader } from './index'

interface ISuspenseWrapper {
  children: ReactElement
}

export const SuspenseWrapper = ({ children }: ISuspenseWrapper) => {
  return (
    <Suspense
      fallback={
        <FullPageWrapper>
          <Loader />
        </FullPageWrapper>
      }
    >
      {children}
    </Suspense>
  )
}
