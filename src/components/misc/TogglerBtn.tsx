import { PropsWithChildren } from 'react'

interface IProps {
  onClickCallback: React.MouseEventHandler<HTMLButtonElement>
  ariaLabel: string
  className?: string
}

const TogglerBtn = ({
  children,
  ariaLabel,
  className,
  onClickCallback,
}: PropsWithChildren<IProps>) => {
  return (
    <button
      aria-label={ariaLabel}
      type="button"
      className={className}
      onClick={onClickCallback}
    >
      {children}
    </button>
  )
}

export default TogglerBtn
