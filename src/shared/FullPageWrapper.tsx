import { ReactNode } from 'react'

interface IFullPageWrapper {
  children: ReactNode
}

export const FullPageWrapper = ({ children }: IFullPageWrapper) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      {children}
    </div>
  )
}
