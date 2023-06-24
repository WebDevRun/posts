import { Spinner, SpinnerProps } from 'react-bootstrap'

export type ILoader = Omit<SpinnerProps, 'animation'>

export const Loader = (props: ILoader) => {
  return <Spinner animation="border" {...props} />
}
