import { IPropsWithChildren } from '@/types/interfaces'

interface IProps extends IPropsWithChildren {
  onClickCallback: React.MouseEventHandler<HTMLButtonElement>
  ariaLabel: string
  className?: string
}

const TogglerBtn = ({
  children,
  ariaLabel,
  className,
  onClickCallback,
}: IProps) => {
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
