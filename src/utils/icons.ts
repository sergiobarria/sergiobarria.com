import {
  mdiFirebase,
  mdiGatsby,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageMarkdown,
  mdiLanguagePython,
  mdiLanguageTypescript,
  mdiLeaf,
  mdiNodejs,
  mdiPuzzleOutline,
  mdiReact,
  mdiSass,
  mdiTailwind,
  mdiTriangle,
  mdiVuejs,
} from '@mdi/js'

import { IIcon } from '@/types/interfaces'

export const icons: IIcon[] = [
  { name: 'HTML', path: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS', path: mdiLanguageCss3, color: '#3572b5' },
  { name: 'JavaScript', path: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'TypeScript', path: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'React', path: mdiReact, color: '#00c2e6' },
  { name: 'Vue', path: mdiVuejs, color: '#41B983' },
  { name: 'NextJs', path: mdiTriangle, color: '#000' },
  { name: 'NodeJs', path: mdiNodejs, color: '#61af43' },
  { name: 'Express', path: mdiPuzzleOutline, color: '#888' },
  { name: 'Django', path: mdiLanguagePython, color: '#3a74a5' },
  { name: 'TailwindCSS', path: mdiTailwind, color: '#06b6d4' },
  { name: 'MongoDB', path: mdiLeaf, color: '#69a14a' },
  { name: 'Firebase', path: mdiFirebase, color: '#F6840D' },
  { name: 'Gatsby', path: mdiGatsby, color: '#533885' },
  { name: 'MDX', path: mdiLanguageMarkdown, color: '#FCB32C' },
  { name: 'Sass', path: mdiSass, color: '#BF4080' },
]
