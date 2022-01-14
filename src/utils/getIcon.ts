import { mdiPuzzleOutline } from '@mdi/js'

import { icons } from './icons'

import { IIcon } from '@/types/interfaces'

export function getIcon(iconName: string) {
  let icon: IIcon

  icon = icons.filter(icon => icon.name.toLowerCase() === iconName)[0]

  if (!icon) {
    icon = { name: 'default', path: mdiPuzzleOutline, color: '#000' }
  }

  return icon
}
