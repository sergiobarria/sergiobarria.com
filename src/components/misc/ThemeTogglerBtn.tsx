import { IPropsWithChildren } from '@/types/interfaces'

interface IProps extends IPropsWithChildren {
  onClickCallback: React.MouseEventHandler<HTMLButtonElement>
}

const ThemeTogglerBtn = ({ children, onClickCallback }: IProps) => {
  return (
    <button
      aria-label="Toggle Theme"
      type="button"
      className="themeToggler"
      onClick={onClickCallback}
    >
      {children}
    </button>
  )
}

export default ThemeTogglerBtn
