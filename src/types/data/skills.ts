import {
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiNodejs,
  mdiReact,
  mdiVuejs,
  mdiTailwind,
  mdiLanguagePython,
  mdiTriangle,
  mdiFirebase,
  mdiLeaf,
  mdiPuzzleOutline,
} from '@mdi/js'

export interface ISkillProps {
  name: string
  iconPath: string
  color: string
  hide?: boolean
}

export const skills: ISkillProps[] = [
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'React', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'Vue', iconPath: mdiVuejs, color: '#41B983' },
  { name: 'NextJs', iconPath: mdiTriangle, color: '#000' },
  { name: 'Node', iconPath: mdiNodejs, color: '#61af43' },
  { name: 'Express', iconPath: mdiPuzzleOutline, color: '#888' },
  { name: 'Django', iconPath: mdiLanguagePython, color: '#3a74a5' },
  { name: 'TailwindCSS', iconPath: mdiTailwind, color: '#06b6d4' },
  { name: 'MongoDB', iconPath: mdiLeaf, color: '#69a14a' },
  { name: 'Firebase', iconPath: mdiFirebase, color: '#F6840D' },
]

const skillsKeys = [...skills.map(item => item.name.toLowerCase())]

export type SkillKey = typeof skillsKeys[number]
