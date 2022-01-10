import { IIcon } from '@/types/interfaces'
import { icons } from './icons'
import { mdiPuzzleOutline } from '@mdi/js'

export function getIcon(iconName: string) {
  let icon: IIcon

  icon = icons.filter(icon => icon.name.toLowerCase() === iconName)[0]

  if (!icon) {
    icon = { name: 'default', path: mdiPuzzleOutline, color: '#000' }
  }

  return icon
}
