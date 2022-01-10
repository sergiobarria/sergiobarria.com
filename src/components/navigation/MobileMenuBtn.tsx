import cn from 'classnames'

import styles from '@/styles/mobile-menu-btn.module.css'

interface IProps {
  isClosed: boolean
  toggleMobileNav: () => void
}

export default function MobileMenuBtn({ isClosed }: IProps) {
  return (
    <div className={cn(styles.menuBtn, isClosed ? styles.open : null)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
