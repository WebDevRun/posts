import { ILoader, Loader } from './Loader'

export const PageLoader = (props: ILoader) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Loader {...props} />
    </div>
  )
}
