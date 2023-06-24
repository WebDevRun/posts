import { ReactElement, Suspense } from 'react'
import { FullPageWrapper } from '..'
import { Loader } from '..'

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
