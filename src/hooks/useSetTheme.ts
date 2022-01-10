import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const useSetTheme = () => {
  const [mounted, setMounted] = useState<boolean | null>(false)
  const { systemTheme, resolvedTheme, setTheme } = useTheme()

  // Wait until app is mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  // if (!mounted) return null

  const currentTheme = resolvedTheme === 'system' ? systemTheme : resolvedTheme

  return { mounted, currentTheme, setTheme }
}

export default useSetTheme
